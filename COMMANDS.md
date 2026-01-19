# Quick Command Reference

> **Note**: This project uses **pnpm**. Install with `npm install -g pnpm` if needed.

## Root Commands (Turborepo)

Run these from the **root directory**:

```bash
pnpm dev          # Start all apps in development mode
pnpm build        # Build all apps for production
pnpm lint         # Lint all code
pnpm type-check   # Check TypeScript types
pnpm format       # Format code with Prettier
pnpm clean        # Clean all build artifacts
```

## Per-App Commands

Run these from `apps/web`:

```bash
cd apps/web

pnpm dev          # Start development server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Lint the code
pnpm lint:fix     # Auto-fix linting issues
pnpm type-check   # Check TypeScript types
pnpm clean        # Clean build artifacts
```

## Git Workflow

```bash
# Before committing
pnpm lint         # Check for linting issues
pnpm type-check   # Check for type errors
pnpm format       # Format code
pnpm build        # Ensure it builds

# Create commit
git add .
git commit -m "Your message"
git push
```

## Common Tasks

### Add a new blog post

```bash
# Create file: apps/web/content/blog/my-post.mdx
---
title: "My Post Title"
date: "2025-11-14"
description: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Run development server

```bash
pnpm dev
# Visit http://localhost:3000
```

### Deploy to production

```bash
pnpm build    # Build and test locally
git push      # Auto-deploys on Vercel
```

### Troubleshoot

```bash
pnpm clean    # Clean everything
pnpm install  # Reinstall dependencies
pnpm build    # Try building again
```

## Turbo Features

### Speed

First build:

```bash
pnpm build
# Takes ~8-10 seconds
```

Second build (with cache):

```bash
pnpm build
# Takes ~100ms (using cache!)
```

### Parallel Execution

All tasks run in parallel when possible:

```bash
pnpm lint
# Runs lint on all apps simultaneously
```

### Force Rebuild

Ignore cache and rebuild everything:

```bash
pnpm build -- --force
```

## Port Configuration

Default ports:

- **Web app**: <http://localhost:3000>

To change the port:

```bash
cd apps/web
PORT=3001 pnpm dev
```

## Quick Start for New Developers

```bash
# 1. Install pnpm (if not already installed)
npm install -g pnpm

# 2. Clone and install
git clone <repo-url>
cd jason-cochran
pnpm install

# 3. Start development
pnpm dev

# 4. Visit http://localhost:3000
```

## Why pnpm?

- **🚀 Faster**: 2x faster than npm, especially on CI
- **💾 Disk efficient**: Saves GB of disk space with content-addressable storage
- **🔒 Strict**: Better dependency resolution, no phantom dependencies
- **📦 Monorepo friendly**: Built-in workspace support
