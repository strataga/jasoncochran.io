import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Code2, Layers, Zap, Clock, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'AI-powered projects and SaaS applications by Jason Cochran. Building production-ready software with AI-augmented development and automation.',
  openGraph: {
    title: 'Projects - Jason Cochran',
    description: 'AI-powered projects showcasing modern development with Claude AI, automation, and rapid delivery',
    type: 'website',
  },
}

interface Project {
  id: number
  title: string
  subtitle: string
  slug: string
  description: string
  architectureHighlights: string[]
  techStack: string[]
  accentColor: 'red' | 'yellow' | 'blue'
  comingSoon?: boolean
  isBeta?: boolean
  liveUrl?: string
  hasCaseStudy?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DemiArch',
    subtitle: 'AI Tool • Code Generator',
    slug: 'demiarch',
    description: 'Local-first, open-source AI application builder in Rust. Generate production-ready code through conversational AI while keeping all data local and under your control.',
    architectureHighlights: [
      'Russian Doll hierarchical agent system with 3-level delegation',
      'Learned skills that auto-extract and persist debugging knowledge',
      'Dynamic model routing with reinforcement learning',
      'WASM-sandboxed plugin system for extensibility',
    ],
    techStack: ['Rust', 'SQLite', 'OpenRouter', 'Ratatui', 'Tauri', 'WASM'],
    accentColor: 'red',
    isBeta: true,
    liveUrl: 'https://github.com/strataga/demiarch',
    hasCaseStudy: true,
  },
  {
    id: 2,
    title: 'ClickToWA',
    subtitle: 'SaaS • Marketing Automation',
    slug: 'clicktowa',
    description: 'Trackable WhatsApp click-to-chat link platform with real-time analytics, QR code generation, custom short codes, and intelligent bot filtering for marketing automation.',
    architectureHighlights: [
      'Sub-100ms redirect performance',
      'Real-time click analytics and geo-tracking',
      'AI-powered bot detection and filtering',
      'Custom domain support with automated SSL',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Vercel'],
    accentColor: 'blue',
    liveUrl: 'https://clicktowa.com',
    hasCaseStudy: true,
  },
  {
    id: 3,
    title: 'CoSplit',
    subtitle: 'SaaS • Co-Parenting',
    slug: 'cosplit',
    description: 'Co-parenting expense tracking app for separating couples. Track shared expenses, generate court-ready PDF exports, and share with co-parents via secure links.',
    architectureHighlights: [
      'Real-time sync with Convex serverless backend',
      'Court-ready PDF export with receipt documentation',
      'Secure share links - no signup required for co-parent',
      'Better Auth with Google OAuth integration',
    ],
    techStack: ['Next.js', 'TypeScript', 'Convex', 'Better Auth', 'Polar'],
    accentColor: 'yellow',
    liveUrl: 'https://cosplitapp.com',
    hasCaseStudy: true,
  },
  {
    id: 4,
    title: 'OpenClaw VPS',
    subtitle: 'Service • AI Hosting',
    slug: 'openclaw-vps',
    description: 'Managed hosting platform for OpenClaw AI assistants. Zero-DevOps deployment with done-for-you setup packages and predictable monthly hosting plans.',
    architectureHighlights: [
      'White-glove onboarding with discovery calls and training',
      'Polar integration for one-time and recurring payments',
      'Real-time booking and survey tracking with Convex',
      'Turnstile bot protection and rate limiting',
    ],
    techStack: ['Next.js', 'TypeScript', 'Convex', 'Polar', 'Turnstile'],
    accentColor: 'blue',
    liveUrl: 'https://openclawvps.com',
    hasCaseStudy: true,
  },
]

const accentColors = {
  red: 'bg-[var(--pop-red)]',
  yellow: 'bg-[var(--pop-yellow)]',
  blue: 'bg-[var(--pop-blue)]',
}

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="section-header text-5xl md:text-6xl mb-6 mx-auto">
            FEATURED PROJECTS
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            AI-powered applications built with modern development practices and automation
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card group relative"
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-0 w-full h-2 ${accentColors[project.accentColor]}`}></div>

              {/* Status Badge */}
              {project.isBeta && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-[var(--pop-blue)] text-[var(--pop-white)] border-2 border-[var(--pop-black)] text-xs font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                  BETA
                </div>
              )}
              {project.comingSoon && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-[var(--pop-red)] text-[var(--pop-white)] border-2 border-[var(--pop-black)] text-xs font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                  <Clock className="w-3 h-3" />
                  COMING SOON
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pt-4">
                <h2 className="text-3xl text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)' }}>
                  {project.title}
                </h2>
                <span className="tag-pop">
                  {project.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {project.description}
              </p>

              {/* Architecture Highlights */}
              <div className="mb-6">
                <h3 className="font-bold text-[var(--pop-black)] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-headline)' }}>
                  <Layers className="w-5 h-5 text-[var(--pop-red)]" />
                  ARCHITECTURE HIGHLIGHTS
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.architectureHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="font-bold text-[var(--pop-black)] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-headline)' }}>
                  <Code2 className="w-5 h-5 text-[var(--pop-blue)]" />
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="tag-pop"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-[var(--pop-blue)] font-bold hover:underline underline-offset-4"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem' }}
                  >
                    VISIT SITE
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                )}
                {project.hasCaseStudy ? (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-[var(--pop-red)] font-bold hover:underline underline-offset-4"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem' }}
                  >
                    VIEW CASE STUDY
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                ) : (
                  <span
                    className="inline-flex items-center text-[var(--text-muted)] font-bold cursor-not-allowed"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem' }}
                  >
                    CASE STUDY COMING SOON
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="card-pop p-12 text-center mb-16">
          <div className="stat-pop-number mb-4">100+</div>
          <h2 className="text-3xl text-[var(--pop-black)] mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
            PROJECTS DELIVERED
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Over 28 years, I've delivered hundreds of successful projects leveraging AI-augmented development,
            automation, and modern software architecture.
          </p>
          <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
            The featured projects showcase AI-powered applications built with rapid development workflows using Claude Code and Cursor.
          </p>
        </div>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card-pop p-12" style={{ background: 'var(--pop-black)' }}>
            <Zap className="w-12 h-12 text-[var(--pop-yellow)] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-[var(--pop-white)] mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              LET'S BUILD SOMETHING TOGETHER
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              I'm available for consulting, contract work, and full-time opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-pop btn-pop-primary"
              >
                GET IN TOUCH
              </Link>
              <Link
                href="/resume"
                className="btn-pop btn-pop-yellow"
              >
                VIEW RESUME
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
