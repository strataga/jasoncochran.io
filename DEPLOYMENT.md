# Deployment

This site deploys to **Railway** (Nixpacks builder, `output: 'standalone'`). See [`railway.json`](./railway.json) for config and [`RAILWAY.md`](./RAILWAY.md) for the full runbook.

## TL;DR

```bash
cd apps/web
pnpm build    # verify it builds locally
pnpm start    # verify it runs

git push      # Railway auto-deploys from main
```

## Local production test

```bash
cd apps/web
pnpm build
pnpm start    # http://localhost:3000
```

For environment variables, custom domains, and rollback steps, see [`RAILWAY.md`](./RAILWAY.md).

## Contact form backend (changed 2026-04-19)

The `/api/contact` endpoint now sends via Gmail SMTP using nodemailer + a Gmail App Password (previously Resend). Railway env vars required:

- `GMAIL_USER` — Gmail account address (e.g. `jlcochran2013@gmail.com`)
- `GMAIL_APP_PASSWORD` — 16-char App Password (no spaces) generated at <https://myaccount.google.com/apppasswords> (2FA must be on)
- `CONTACT_TO_EMAIL` — recipient of contact-form notifications (usually same as `GMAIL_USER`)

Remove the old `RESEND_API_KEY` / `RESEND_FROM_EMAIL` / `RESEND_TO_EMAIL` env vars from Railway once the new ones are in place. The endpoint returns 500 until the new vars are set.
