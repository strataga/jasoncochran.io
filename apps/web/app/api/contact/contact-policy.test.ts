import assert from 'node:assert/strict'
import test from 'node:test'

import {
  getRailwayClientId,
  isAllowedOrigin,
  MemoryRateLimiter,
  parseAllowedOrigins,
  parseContactRequest,
  readBoundedBody,
} from './contact-policy'

test('parseContactRequest accepts and trims string fields', () => {
  assert.deepEqual(
    parseContactRequest({ name: ' Jason ', email: ' jason@example.com ', message: ' Hello there ' }),
    { name: 'Jason', email: 'jason@example.com', message: 'Hello there' },
  )
})

test('parseContactRequest rejects non-string and non-object payloads', () => {
  assert.equal(parseContactRequest(null), null)
  assert.equal(parseContactRequest([]), null)
  assert.equal(parseContactRequest({ name: {}, email: 'a@example.com', message: 'hello' }), null)
})

test('origin matching is exact and fails closed', () => {
  const allowed = parseAllowedOrigins('https://jasoncochran.io, https://www.jasoncochran.io')
  assert.equal(isAllowedOrigin('https://jasoncochran.io', allowed), true)
  assert.equal(isAllowedOrigin('https://jasoncochran.io.evil.example', allowed), false)
  assert.equal(isAllowedOrigin(null, allowed), false)
  assert.equal(isAllowedOrigin('https://jasoncochran.io', parseAllowedOrigins(undefined)), false)
})

test('client identity uses only a valid Railway X-Real-IP header', () => {
  assert.equal(getRailwayClientId(new Headers({ 'x-real-ip': '203.0.113.10' })), '203.0.113.10')
  assert.equal(
    getRailwayClientId(new Headers({ 'x-forwarded-for': '198.51.100.9', 'x-real-ip': 'attacker' })),
    'unknown',
  )
})

test('bounded body reader accepts small payloads and stops oversized streams', async () => {
  const smallBody = new Request('https://example.com', { method: 'POST', body: 'hello' }).body
  assert.deepEqual(await readBoundedBody(smallBody, 5), { ok: true, text: 'hello' })

  let chunksRead = 0
  const oversizedBody = new ReadableStream<Uint8Array>({
    pull(controller) {
      chunksRead += 1
      controller.enqueue(new Uint8Array(6))
      if (chunksRead === 3) controller.close()
    },
  })
  assert.deepEqual(await readBoundedBody(oversizedBody, 10), { ok: false, reason: 'too-large' })
  assert.equal(chunksRead, 2)
})

test('rate limiter blocks after the configured count and bounds client storage', () => {
  const limiter = new MemoryRateLimiter(1_000, 2, 2)
  assert.equal(limiter.isLimited('one', 100), false)
  assert.equal(limiter.isLimited('one', 200), false)
  assert.equal(limiter.isLimited('one', 300), true)
  for (let request = 0; request < 100; request += 1) {
    assert.equal(limiter.isLimited('one', 301 + request), true)
  }
  assert.equal(limiter.storedRequestCount, 3)
  assert.equal(limiter.isLimited('two', 300), false)
  assert.equal(limiter.isLimited('three', 300), false)
  assert.equal(limiter.clientCount, 2)
  assert.equal(limiter.isLimited('three', 1_500), false)
})
