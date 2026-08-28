# Contact Form Release Security Review

Date: 2026-08-27

## Scope

This review covers the public `POST /api/contact` route, its request policy, and its Gmail SMTP boundary. The assets are the site's availability, SMTP credentials, Jason's inbox, and visitors' contact details. The trust boundaries are browser to Railway, Railway to Next.js, and Next.js to Gmail.

## Findings

No open critical, high, or medium findings remain in this release candidate.

### Low: rate limiting is local to one app instance

- **Location:** `apps/web/app/api/contact/contact-policy.ts:48`
- **Category:** Denial of service
- **Scenario:** If the Railway service is scaled to multiple replicas, each replica has an independent request counter. A client could receive more than the intended total request allowance by reaching different replicas.
- **Current control:** Production runs one replica. Client storage is capped, expired entries are removed, request bodies are bounded, and Railway's proxy-provided `X-Real-IP` is used instead of a client-controlled forwarding chain.
- **Required before horizontal scaling:** Move the limiter to a shared store or an equivalent trusted edge control.

## Resolved during release review

- Non-string JSON fields now fail with `400` instead of reaching string methods and producing `500` errors.
- `ALLOWED_ORIGINS` is required, documented, and matched exactly.
- A failed optional confirmation email no longer turns a successfully delivered inquiry into a retryable `500` response.
- Rate-limit client storage is bounded and periodically pruned.

## Non-findings checked

- User content is HTML-escaped before being placed in email markup.
- Name and email validation prevent newline-based mail header injection through the subject and reply address.
- Raw provider errors and secrets are not returned to callers or written to application logs.
- Content type, browser origin, declared body size, actual body size, field types, field lengths, and request rate are checked before SMTP delivery.

## Verification

Run:

```bash
pnpm --dir apps/web test:contact
pnpm --dir apps/web exec eslint app/api/contact/route.ts app/api/contact/contact-policy.ts app/api/contact/contact-policy.test.ts --max-warnings 0
pnpm --dir apps/web type-check
```
