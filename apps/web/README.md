# Jason Cochran - Personal Website

A modern, professional personal website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Homepage**: Hero section with introduction and featured content
- **Resume**: Professional experience, skills, and education
- **Projects**: Portfolio showcasing apps and projects
- **Blog**: MDX-powered blog with syntax highlighting and formatting
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Fast Performance**: Optimized with Next.js App Router and Server Components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blog**: MDX with next-mdx-remote
- **Deployment**: Ready for Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
apps/web/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and posts
│   ├── projects/          # Projects showcase
│   ├── resume/            # Resume/CV page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   └── Navigation.tsx     # Main navigation
├── content/               # Content files
│   └── blog/             # MDX blog posts
├── lib/                   # Utility functions
│   └── blog.ts           # Blog post utilities
└── public/               # Static assets
```

## Customization

### Personal Information

Update the following files with your information:

1. **Resume** (`app/resume/page.tsx`): Add your work experience, education, and skills
2. **Projects** (`app/projects/page.tsx`): Update the projects array with your actual projects
3. **Homepage** (`app/page.tsx`): Customize the hero section and about text
4. **Navigation** (`components/Navigation.tsx`): Update logo and links
5. **Layout** (`app/layout.tsx`): Update metadata and site title

### Adding Blog Posts

Create new `.mdx` files in `content/blog/` with frontmatter:

```mdx
---
title: 'Your Post Title'
date: '2025-10-25'
description: 'A brief description'
tags: ['Tag1', 'Tag2']
---

Your content here...
```

### Styling

- Colors and theme: Edit `app/globals.css` and `tailwind.config.ts`
- Components: All styled with Tailwind CSS utility classes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Other Platforms

Build the production bundle:

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT

## Contact

Update with your contact information:
- Email: your.email@example.com
- GitHub: github.com/yourusername
- LinkedIn: linkedin.com/in/yourusername
