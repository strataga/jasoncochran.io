# Jason Cochran - Personal Website

A modern, professional portfolio website showcasing 27 years of software engineering experience.

## 🚀 Quick Start

```bash
# Install dependencies (using pnpm for faster installs)
pnpm install

# Start development server
pnpm dev
```

Visit <http://localhost:3000>

## 📜 Available Commands

### Development

```bash
pnpm dev          # Start all apps in development mode (uses Turbo)
pnpm build        # Build all apps for production
pnpm lint         # Run linting across all apps
pnpm type-check   # Type check all TypeScript files
pnpm format       # Format code with Prettier
pnpm clean        # Clean all build artifacts and node_modules
```

### Per-App Commands

```bash
cd apps/web
pnpm dev          # Start just the web app
pnpm build        # Build just the web app
pnpm lint         # Lint just the web app
pnpm type-check   # Type check just the web app
pnpm clean        # Clean web app build artifacts
```

> **Note**: This project uses **pnpm** for package management. If you don't have pnpm installed, run `npm install -g pnpm` first.

## 📁 Project Structure

```
jason-cochran/
├── apps/
│   └── web/                # Next.js portfolio website
│       ├── app/            # Next.js App Router pages
│       ├── components/     # React components
│       ├── content/        # Blog posts (MDX)
│       ├── lib/            # Utilities
│       └── public/         # Static assets
└── .claude/                # Claude Code configuration
```

## 🛠️ Tech Stack

- **Package Manager**: pnpm (fast, efficient, disk-space friendly)
- **Monorepo**: Turborepo (for fast builds and caching)
- **Framework**: Next.js 16 (App Router)
- **React**: 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Blog**: MDX with next-mdx-remote
- **Code Quality**: ESLint v9 (flat config), Prettier
- **Deployment**: Railway (Nixpacks, `output: 'standalone'`)

## 📄 Pages

- **Homepage** (`/`) - Hero section with animated background, featured case studies
- **Resume** (`/resume`) - Professional experience, skills, certifications
- **Projects** (`/projects`) - Portfolio showcase
- **Blog** (`/blog`) - Technical writing and insights

## 🎨 Features

- ✨ Animated gradient backgrounds
- 🎭 Smooth transitions and hover effects
- 🌓 Dark mode support
- 📱 Fully responsive design
- 🚀 Optimized performance
- 📊 Featured case studies:
  - **Rook** - PSA Platform (320K+ LOC, hexagonal architecture)
  - **WellOS** - The Operating System for Oil & Gas Operations (Rust + Next.js, SCADA integration, offline-first)
  - NFT Collectibles Platform

## 📝 Customization

### Update Your Information

1. **Resume** - Edit `apps/web/app/resume/page.tsx`
2. **Projects** - Edit `apps/web/app/projects/page.tsx`
3. **Homepage** - Edit `apps/web/app/page.tsx`
4. **Photo** - Replace the placeholder in hero section
5. **Blog** - Add `.mdx` files to `apps/web/content/blog/`

### Add Blog Posts

Create a new file in `content/blog/your-post.mdx`:

```mdx
---
title: 'Your Post Title'
date: '2025-10-25'
description: 'Brief description'
tags: ['Tag1', 'Tag2']
---

Your content here...
```

## 🚀 Deployment

Deployed to Railway via Nixpacks. See `railway.json` for config. The web app uses `output: 'standalone'` so Railway builds and runs it directly.

### Build for Production

```bash
cd apps/web
pnpm build
pnpm start
```

## 🏗️ Monorepo Structure

This project uses **Turborepo** for efficient monorepo management:

- **Parallel execution**: Tasks run concurrently across all apps
- **Smart caching**: Turborepo caches build outputs for faster rebuilds
- **Dependency awareness**: Tasks run in the correct order based on dependencies
- **Incremental builds**: Only rebuild what changed

### Why Turbo?

- 🚀 **3-5x faster builds** with intelligent caching
- 🔄 **Parallel task execution** across the monorepo
- 📦 **Shared dependencies** and code between apps
- 🎯 **Consistent tooling** across all projects

## 📧 Contact

- **Email**: <me@jasoncochran.io>
- **LinkedIn**: [linkedin.com/in/cochranjason](https://linkedin.com/in/cochranjason)
- **Location**: Midland, TX

## 📄 License

MIT

---

Built with ❤️ using Next.js, React, and Tailwind CSS
