# Agent Instructions — jasoncochran.io

Jason Cochran's personal site: homepage, resume, projects portfolio, contact form, and a few one-off pages (certifications, ralph-video). Deployed to Railway.

## Tech Stack

- **Monorepo**: pnpm workspaces (`apps/*`, `packages/*`) + Turbo (`turbo.json`). Single app today: `apps/web`.
- **Package manager**: pnpm 10.28.0 (root); `apps/web` uses `package-lock.json` and `npm` for Railway builds (see `railway.json`).
- **Framework**: Next.js 16 (App Router, `output: 'standalone'`, Turbopack with monorepo root set to repo root).
- **Language**: TypeScript 5.9, React 19.2.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) + `@tailwindcss/typography`. Tokens/theme in `apps/web/app/globals.css`.
- **Content**: Markdown via `gray-matter` (filesystem reads in `lib/`). MDX deps are installed (`@next/mdx`, `next-mdx-remote`) and `pageExtensions` includes `.mdx`, but no MDX pages exist yet.
- **Code highlighting**: `shiki` + `rehype-pretty-code`, plus `components/code-block.tsx`.
- **Email**: Resend (contact form).
- **Deploy**: Railway via Nixpacks (`railway.json`, `nixpacks.toml`). Build: `cd apps/web && npm install && npm run build`. Start: `cd apps/web && npm start`.

## Project Layout

```
apps/web/
  app/                       # Next.js App Router
    page.tsx                 # Homepage (large, ~33KB)
    layout.tsx               # Root layout + metadata
    resume/ contact/ certifications/ ralph-video/
    projects/page.tsx        # Project grid
    projects/[slug]/         # Dynamic project detail + opengraph-image
    api/contact/route.ts     # Resend-backed contact endpoint
    api/video/ralph/         # Video API route
    sitemap.ts               # Hand-maintained URL list — update when adding routes
    opengraph-image.tsx icon.tsx apple-icon.tsx manifest.ts
  content/
    projects/*.md            # One markdown file per project (slug = filename)
    blog/*.md                # Blog posts exist but NO /blog route is wired up yet
  components/                # Navigation, ContactForm, code-block, share-buttons, etc.
  lib/projects.ts            # gray-matter-based project loader
  lib/social.tsx lib/utils.ts
  public/                    # Static assets
```

## Content Conventions

- **Projects** (`content/projects/<slug>.md`): frontmatter `subtitle`, `accentColor` (`'red' | 'yellow' | 'blue'`), `techStack: string[]`, `liveUrl`. Title is extracted from the first `# Heading` in the body, not frontmatter. See `lib/projects.ts`.
- Adding a project: drop the `.md` file, then add the URL to `app/sitemap.ts` (sitemap is not auto-generated).
- **Blog posts** in `content/blog/` use frontmatter `title`, `date`, `summary`, `tags` — but there is no blog route rendering them yet. Don't assume a `/blog` page exists.

## Commands

From repo root (Turbo fans out to `apps/web`):

```bash
pnpm dev          # next dev
pnpm build        # next build
pnpm lint         # eslint, max-warnings 5
pnpm type-check   # tsc --noEmit
pnpm format       # prettier on ts/tsx/md/json
```

From `apps/web/` directly: `npm run dev | build | start | lint | lint:fix | type-check | clean`.

## Docs in Repo

- `README.md` — project overview and quick start.
- `DEVELOPMENT.md`, `DEPLOYMENT.md`, `RAILWAY.md`, `COMMANDS.md` — operational runbooks.

## Issue Tracking

Uses **bd (beads)** — `.beads/` directory at repo root. `bd ready`, `bd show <id>`, `bd update <id> --status in_progress`, `bd close <id>`, `bd sync`.
