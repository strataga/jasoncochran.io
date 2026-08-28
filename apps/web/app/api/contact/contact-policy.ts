import { isIP } from 'node:net'

export type ContactRequest = {
  name: string
  email: string
  message: string
}

export function parseContactRequest(body: unknown): ContactRequest | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null

  const candidate = body as Record<string, unknown>
  if (
    typeof candidate.name !== 'string' ||
    typeof candidate.email !== 'string' ||
    typeof candidate.message !== 'string'
  ) {
    return null
  }

  return {
    name: candidate.name.trim(),
    email: candidate.email.trim(),
    message: candidate.message.trim(),
  }
}

export function parseAllowedOrigins(value: string | undefined): Set<string> {
  return new Set(
    (value ?? '')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  )
}

export function isAllowedOrigin(origin: string | null, allowedOrigins: Set<string>): boolean {
  return Boolean(origin && allowedOrigins.has(origin))
}

export function getRailwayClientId(headers: Headers): string {
  // Railway's edge proxy overwrites X-Real-IP. Do not trust client-supplied
  // forwarding chains for an abuse-control identity.
  const realIp = headers.get('x-real-ip')?.trim() ?? ''
  return isIP(realIp) ? realIp : 'unknown'
}

export type BoundedBodyResult =
  | { ok: true; text: string }
  | { ok: false; reason: 'too-large' }

export async function readBoundedBody(
  body: ReadableStream<Uint8Array> | null,
  maxBytes: number,
): Promise<BoundedBodyResult> {
  if (!body) return { ok: true, text: '' }

  const reader = body.getReader()
  const decoder = new TextDecoder()
  let byteCount = 0
  let text = ''

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      byteCount += value.byteLength
      if (byteCount > maxBytes) {
        await reader.cancel()
        return { ok: false, reason: 'too-large' }
      }
      text += decoder.decode(value, { stream: true })
    }

    text += decoder.decode()
    return { ok: true, text }
  } finally {
    reader.releaseLock()
  }
}

export class MemoryRateLimiter {
  private readonly requests = new Map<string, number[]>()
  private lastSweepAt = 0

  constructor(
    private readonly windowMs: number,
    private readonly maxRequests: number,
    private readonly maxClients = 10_000,
  ) {}

  isLimited(clientId: string, now = Date.now()): boolean {
    const windowStart = now - this.windowMs
    this.sweepExpired(windowStart, now)

    const timestamps = (this.requests.get(clientId) ?? [])
      .filter((timestamp) => timestamp > windowStart)
      .slice(-this.maxRequests)
    const updatedTimestamps = [...timestamps, now]

    if (!this.requests.has(clientId) && this.requests.size >= this.maxClients) {
      const oldestClient = this.requests.keys().next().value
      if (oldestClient) this.requests.delete(oldestClient)
    }

    // Refresh insertion order so capacity eviction removes the least-recently
    // active client rather than an arbitrary address.
    this.requests.delete(clientId)
    this.requests.set(clientId, updatedTimestamps)
    return updatedTimestamps.length > this.maxRequests
  }

  get clientCount(): number {
    return this.requests.size
  }

  get storedRequestCount(): number {
    return [...this.requests.values()].reduce((total, timestamps) => total + timestamps.length, 0)
  }

  private sweepExpired(windowStart: number, now: number) {
    if (now - this.lastSweepAt < this.windowMs) return

    for (const [clientId, timestamps] of this.requests) {
      if (!timestamps.some((timestamp) => timestamp > windowStart)) {
        this.requests.delete(clientId)
      }
    }
    this.lastSweepAt = now
  }
}
