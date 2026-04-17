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
