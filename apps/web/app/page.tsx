import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Layers, Code2, ExternalLink } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/social'

export const metadata: Metadata = {
  title: 'Jason Cochran - Software Engineer | AI & Automation Specialist',
  description: 'Software Engineer with 28 years experience. Specializing in AI-assisted development, automation, and modern software architecture. Ship production-ready software in weeks, not months.',
  keywords: ['Jason Cochran', 'Software Engineer', 'AI Development', 'Automation', 'React', 'Next.js', 'NestJS', 'TypeScript', 'Full Stack Developer'],
  openGraph: {
    title: 'Jason Cochran - Software Engineer | AI & Automation Specialist',
    description: '28 years experience building enterprise applications. AI-enhanced workflows for rapid development.',
    type: 'website',
    url: 'https://jasoncochran.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran - Software Engineer | AI & Automation Specialist',
    description: 'AI-Powered Software Development workflows. Ship faster with modern tooling.',
  },
  alternates: {
    canonical: 'https://jasoncochran.io',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jason Cochran',
    jobTitle: 'Software Engineer | AI & Automation Specialist',
    description: 'Software Engineer with 28 years of experience. Specializes in AI-assisted development, automation workflows, and modern software architecture for rapid application delivery.',
    url: 'https://jasoncochran.io',
    sameAs: [
      'https://www.linkedin.com/in/cochranjason/',
      'https://x.com/jcochranio',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Next.js',
      'Node.js',
      'NestJS',
      'Rust',
      'PostgreSQL',
      'MongoDB',
      'Azure',
      'AWS',
      'AI-Assisted Development',
      'Automation',
      'Full-Stack Development',
      'Enterprise Architecture',
      'Multi-tenant SaaS',
    ],
    alumniOf: 'Self-taught Software Engineer',
    award: [
      'Microsoft Azure Fundamentals (AZ-900)',
      'Microsoft Azure AI Fundamentals (AI-900)',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{ background: 'var(--pop-cream)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="animate-slide-up text-center lg:text-left">
                <div className="badge-pop mb-8 inline-block">
                  AI-Powered Software Development
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4" style={{
                  fontFamily: 'var(--font-headline)',
                  color: 'var(--pop-black)',
                  lineHeight: '0.95'
                }}>
                  Jason Cochran
                </h1>

                <h2 className="text-3xl md:text-4xl mb-2" style={{
                  fontFamily: 'var(--font-headline)',
                  color: 'var(--pop-red)'
                }}>
                  Software Engineer & AI Specialist
                </h2>

                <p className="text-lg mb-8 leading-relaxed mx-auto lg:mx-0" style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-secondary)',
                  maxWidth: '540px'
                }}>
                  Building the future with AI-assisted development and automation.
                  28 years of engineering experience combined with cutting-edge AI tooling
                  means shipping production-ready software in weeks, not months.
                  From complex enterprise systems to rapid MVPs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                  <Link href="/contact" className="btn-pop btn-pop-primary">
                    Let's Work Together
                  </Link>
                  <Link href="/resume" className="btn-pop btn-pop-secondary">
                    View Resume
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.key}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pop btn-pop-primary w-full sm:w-auto justify-center"
                        style={{ padding: '0.75rem 1.25rem' }}
                        aria-label={`Connect with Jason Cochran on ${link.label}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{link.handle || link.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Right Column - Photo & Stats */}
              <div className="animate-pop-in" style={{ animationDelay: '0.2s' }}>
                <div
                  className="relative w-full h-[70vh] sm:h-auto sm:aspect-square max-w-md mx-auto overflow-hidden"
                  style={{ minHeight: '360px' }}
                >
                  {/* Photo Container */}
                  <div className="frame-pop w-full h-full overflow-hidden">
                    <Image
                      src="/jason_cochran_photo.webp"
                      alt="Jason Cochran - Software Engineer | AI & Automation Specialist"
                      fill
                      className="object-cover rounded-xl border-4 border-[var(--pop-black)]"
                      priority
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="stat-pop">
                    <div className="stat-pop-number">28+</div>
                    <div className="stat-pop-label">Years Exp</div>
                  </div>
                  <div className="stat-pop">
                    <div className="stat-pop-number">100+</div>
                    <div className="stat-pop-label">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI & Automation Section */}
        <section className="py-20" style={{ background: 'var(--pop-white)', borderTop: '4px solid var(--pop-black)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-header text-4xl md:text-5xl mb-4">
                AI-Powered Software Development
              </h2>
              <p className="text-lg mt-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '2rem auto 0' }}>
                Leveraging AI tools to ship faster without sacrificing quality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-pop p-8">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Claude Code & Cursor</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  AI handles boilerplate, refactoring, and test generation while I focus on architecture,
                  business logic, and system design. 10x development velocity.
                </p>
              </div>

              <div className="card-pop p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Automation First</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  CI/CD pipelines, automated testing, infrastructure as code, and deployment automation.
                  Ship with confidence multiple times a day.
                </p>
              </div>

              <div className="card-pop p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Rapid Prototyping</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  From concept to working prototype in days, not weeks.
                  Modern frameworks + AI tooling = unprecedented development speed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Engagements */}
        <section className="py-20" style={{ background: 'var(--pop-cream)', borderTop: '4px solid var(--pop-black)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-header text-4xl md:text-5xl mb-4">Services & Engagements</h2>
              <p
                className="text-lg"
                style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto' }}
              >
                Practical, time-boxed engagements that get you to production fast. Clear scope, clear
                timelines, rapid delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="card-pop p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-headline)' }}>
                    AI MVP Sprint
                  </h3>
                  <span className="tag-pop">2-4 weeks</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  Ship a working prototype with AI features, auth, payments, and telemetry baked in.
                </p>
                <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Clickable UI + hosted preview
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Clean API layer + tests
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Handoff docs & next steps
                  </li>
                </ul>
              </div>

              <div className="card-pop p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-headline)' }}>
                    Automation & Agents
                  </h3>
                  <span className="tag-pop">2-6 weeks</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  Design and ship agentic workflows that plug into your stack and cut manual effort.
                </p>
                <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Integrations with CRMs, data stores, and APIs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Guardrails, monitoring, and human-in-the-loop
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    ROI-driven playbooks & dashboards
                  </li>
                </ul>
              </div>

              <div className="card-pop p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-headline)' }}>
                    Platform Modernization
                  </h3>
                  <span className="tag-pop">3-8 weeks</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  Architecture reviews, performance tuning, and pragmatic refactors without downtime.
                </p>
                <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Modular boundaries & DX upgrades
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    CI/CD hardening & observability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Security & cost optimization checklist
                  </li>
                </ul>
              </div>

              <div className="card-pop p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-headline)' }}>
                    Advisory & Fractional CTO
                  </h3>
                  <span className="tag-pop">Monthly</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  Ongoing partnership for roadmap shaping, hiring, vendor evals, and technical due diligence.
                </p>
                <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Weekly check-ins & async support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Architecture reviews & risk mapping
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--pop-red)]">•</span>
                    Hiring & vendor selection support
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="stat-pop">
                <div className="stat-pop-number">28+</div>
                <div className="stat-pop-label">Years Engineering</div>
              </div>
              <div className="stat-pop">
                <div className="stat-pop-number">100+</div>
                <div className="stat-pop-label">Projects Shipped</div>
              </div>
              <div className="stat-pop">
                <div className="stat-pop-number">2-6</div>
                <div className="stat-pop-label">Week delivery windows</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20" style={{ background: 'var(--pop-gray)', borderTop: '4px solid var(--pop-black)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-header text-4xl md:text-5xl mb-4">
                Featured Projects
              </h2>
              <p className="text-lg mt-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '2rem auto 0' }}>
                Enterprise-grade architecture built with modern development practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DemiArch Project */}
              <article className="project-card group relative">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--pop-red)]"></div>

                {/* BETA Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-[var(--pop-blue)] text-[var(--pop-white)] border-2 border-[var(--pop-black)] text-xs font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                  BETA
                </div>

                {/* Header */}
                <div className="mb-6 pt-4">
                  <h3 className="text-3xl text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)' }}>
                    DemiArch
                  </h3>
                  <span className="tag-pop">
                    AI Tool • Code Generator
                  </span>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  Local-first, open-source AI application builder in Rust. Generate production-ready code
                  through conversational AI while keeping all data local and under your control.
                </p>

                {/* Architecture Highlights */}
                <div className="mb-6">
                  <h4 className="font-bold text-[var(--pop-black)] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-headline)' }}>
                    <Layers className="w-5 h-5 text-[var(--pop-red)]" />
                    ARCHITECTURE HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>Russian Doll hierarchical agent system with 3-level delegation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>Learned skills that auto-extract and persist debugging knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>Dynamic model routing with reinforcement learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>WASM-sandboxed plugin system for extensibility</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-bold text-[var(--pop-black)] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-headline)' }}>
                    <Code2 className="w-5 h-5 text-[var(--pop-blue)]" />
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-pop">Rust</span>
                    <span className="tag-pop">SQLite</span>
                    <span className="tag-pop">OpenRouter</span>
                    <span className="tag-pop">Ratatui</span>
                    <span className="tag-pop">Tauri</span>
                    <span className="tag-pop">WASM</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/strataga/demiarch"
                    className="inline-flex items-center text-[var(--pop-blue)] font-bold hover:underline underline-offset-4"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem' }}
                  >
                    VIEW ON GITHUB
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                  <Link
                    href="/projects/demiarch"
                    className="inline-flex items-center text-[var(--pop-red)] font-bold hover:underline underline-offset-4"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem' }}
                  >
                    VIEW CASE STUDY
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </article>

              {/* ClickToWA Project */}
              <article className="project-card group relative">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--pop-blue)]"></div>

                {/* Header */}
                <div className="mb-6 pt-4">
                  <h3 className="text-3xl text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)' }}>
                    ClickToWA
                  </h3>
                  <span className="tag-pop">
                    SaaS • Marketing Automation
                  </span>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  Trackable WhatsApp click-to-chat link platform with real-time analytics,
                  QR code generation, custom short codes, and intelligent bot filtering for marketing automation.
                </p>

                {/* Architecture Highlights */}
                <div className="mb-6">
                  <h4 className="font-bold text-[var(--pop-black)] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-headline)' }}>
                    <Layers className="w-5 h-5 text-[var(--pop-red)]" />
                    ARCHITECTURE HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>Sub-100ms redirect performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>Real-time click analytics and geo-tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>AI-powered bot detection and filtering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--pop-red)] mr-2 font-bold">•</span>
                      <span>Custom domain support with automated SSL</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-bold text-[var(--pop-black)] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-headline)' }}>
                    <Code2 className="w-5 h-5 text-[var(--pop-blue)]" />
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-pop">Next.js</span>
                    <span className="tag-pop">TypeScript</span>
                    <span className="tag-pop">PostgreSQL</span>
                    <span className="tag-pop">Redis</span>
                    <span className="tag-pop">Vercel</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://clicktowa.com"
                    className="inline-flex items-center text-[var(--pop-blue)] font-bold hover:underline underline-offset-4"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem' }}
                  >
                    VISIT SITE
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                  <Link
                    href="/projects/clicktowa"
                    className="inline-flex items-center text-[var(--pop-red)] font-bold hover:underline underline-offset-4"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem' }}
                  >
                    VIEW CASE STUDY
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </article>
            </div>

            <div className="text-center mt-12">
              <Link href="/projects" className="btn-pop btn-pop-secondary">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="py-20" style={{ background: 'var(--pop-white)', borderTop: '4px solid var(--pop-black)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-header text-4xl md:text-5xl mb-4">
                Core Expertise
              </h2>
              <p className="text-lg mt-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '2rem auto 0' }}>
                Comprehensive full-stack capabilities across modern web and mobile technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="skill-card">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Frontend</h3>
                <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <li>React & Next.js</li>
                  <li>React Native</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>State Management</li>
                </ul>
              </div>

              <div className="skill-card skill-card-alt">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Backend</h3>
                <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <li>Node.js & NestJS</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Microservices</li>
                  <li>Event-Driven Architecture</li>
                </ul>
              </div>

              <div className="skill-card skill-card-blue">
                <div className="text-4xl mb-4">💾</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Data & DevOps</h3>
                <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <li>PostgreSQL & MongoDB</li>
                  <li>Prisma & Drizzle ORM</li>
                  <li>AWS & Cloud Services</li>
                  <li>Docker & CI/CD</li>
                  <li>Testing & Quality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="py-20" style={{ background: 'var(--pop-gray)', borderTop: '4px solid var(--pop-black)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-header text-4xl md:text-5xl mb-4">
                How I Ship Faster
              </h2>
              <p className="text-lg mt-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '2rem auto 0' }}>
                Combining deep expertise with cutting-edge AI development tools for maximum velocity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-pop p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>AI-Augmented Development</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Leveraging Claude Code and Cursor to accelerate development without sacrificing code quality.
                  AI handles boilerplate while I focus on architecture and business logic.
                </p>
              </div>

              <div className="card-pop p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Rapid Prototyping</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Using modern frameworks like Next.js and NestJS with pre-built patterns to go from concept to working prototype in days.
                  Real progress, real fast.
                </p>
              </div>

              <div className="card-pop p-8">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Enterprise Patterns</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  28 years of architectural experience means your MVP is built on solid foundations. Scale from prototype to production
                  without rewrites.
                </p>
              </div>

              <div className="card-pop p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Agile Iteration</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Ship fast, get feedback, iterate. Modern development workflows with continuous deployment mean features go live
                  in hours, not weeks.
                </p>
              </div>

              <div className="card-pop p-8">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Quality at Speed</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  AI-assisted testing and code review catch issues early. TypeScript end-to-end ensures type safety.
                  Fast doesn't mean fragile.
                </p>
              </div>

              <div className="card-pop p-8">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>Modern Stack Expertise</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Deep knowledge of React, Next.js, NestJS, PostgreSQL, and modern DevOps.
                  The right tools for rapid, scalable development.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
