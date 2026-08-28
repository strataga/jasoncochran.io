import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import {
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Jason Cochran · Software Architect + Principal Engineer',
  description:
    'Software architect and hands-on principal engineer with 28 years of experience across enterprise web, mobile, cloud, integrations, and applied AI.',
  alternates: {
    canonical: 'https://jasoncochran.io',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Cochran',
  jobTitle: 'Software Architect and Principal Engineer',
  description:
    'Software architect and hands-on principal engineer with 28 years of experience translating business workflows into maintainable software systems.',
  url: 'https://jasoncochran.io',
  sameAs: [
    'https://www.linkedin.com/in/cochranjason/',
    'https://github.com/strataga',
  ],
}

const PRIMARY_CTA_HREF = '/projects/archgauge'
const PRIMARY_CTA_LABEL = 'Follow the ArchGauge case study'

const archGaugeTechStack = ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'OpenTelemetry']

const openClawTechStack = [
  'Next.js 16',
  'React 19',
  'Convex',
  'Stripe',
  'Sentry',
  'PostHog',
  'Claude Code',
  'MCP',
]

const fathomlessTechStack = ['Rust', 'SDL3']

type Offering = {
  tag: string
  title: string
  body: string
  meta: string
  deliverable: string
}

const offerings: Offering[] = [
  {
    tag: 'Need a clear technical direction',
    title: 'Architecture Clarity Workshop',
    body: 'A focused working session for teams facing a hard architecture or delivery decision. We turn business goals, constraints, and risks into a practical technical direction.',
    meta: '$750',
    deliverable: 'Written decision summary · tradeoffs · prioritized next steps',
  },
  {
    tag: 'Need an independent system review',
    title: 'Architecture & Production-Readiness Review',
    body: 'An evidence-based review of system boundaries, delivery risk, security, operability, and recovery. Findings distinguish facts from assumptions and point to concrete next steps.',
    meta: 'Starting at $5,000',
    deliverable: 'Cited findings · risk priorities · remediation roadmap · executive readout',
  },
  {
    tag: 'Need ongoing architecture leadership',
    title: 'Fractional Software Architect',
    body: 'Ongoing architecture leadership for teams that need discovery, system design, delivery guidance, mentoring, and hands-on technical support without adding a full-time role.',
    meta: 'Starting at $150/hour · 20-hour monthly minimum',
    deliverable: 'Architecture decisions · delivery guidance · reviews · hands-on support',
  },
]

type ExperienceEntry = {
  title: string
  company: string
  dates: string
  summary: string
}

const experience: ExperienceEntry[] = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'Servant',
    dates: '2025/02–2025/09',
    summary:
      'Shipped EMA onboarding flow on NestJS + Next.js + Prisma + React Query with AWS-hosted services; owned the production migration from the legacy path with documentation and runbooks.',
  },
  {
    title: 'Senior React Native Engineer',
    company: 'Nutrien',
    dates: '2023/09–2024/02',
    summary:
      'Shipped cross-platform features on the Nutrien mobile app (iOS + Android) used offline-first by field reps in agriculture operations.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'TxMQ',
    dates: '2022/10–2023/06',
    summary:
      'Led an OpenAI research initiative that prototyped LLM-assisted internal tooling on AngularJS and Ionic client surfaces while delivering production client features.',
  },
  {
    title: 'Senior Mobile Engineer',
    company: 'Verizon',
    dates: '2021/10–2022/11',
    summary:
      'Shipped the AMC Walking Dead NFT experience: custom blockchain + JS SDK inside the Verizon mobile app, production-grade for a tier-1 carrier launch.',
  },
]

const skillGroups: Array<{ label: string; items: string[] }> = [
  {
    label: 'Languages',
    items: ['TypeScript', 'Python', 'Rust', 'JavaScript'],
  },
  {
    label: 'AI / Agents',
    items: [
      'Claude Code',
      'Cursor',
      'MCP servers',
      'OpenAI SDK',
      'Anthropic SDK',
      'Agent infrastructure',
      'RAG',
    ],
  },
  {
    label: 'Frameworks',
    items: ['Next.js 16', 'React 19', 'NestJS', 'React Native'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Convex', 'PostgreSQL', 'Redis'],
  },
  {
    label: 'Infrastructure',
    items: ['Railway', 'Docker', 'Cloudflare', 'Sentry', 'PostHog', 'Stripe', 'Resend'],
  },
]

export default function Home() {
  return (
    <>
      <Script
        id="jsonld-home"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Top anchor for nav Home link */}
      <span id="top" className="sr-only" aria-hidden="true" />

      {/* Hero (single dark band) */}
      <section className="bg-hero-bg text-hero-foreground py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-20 items-start">
            <div className="max-w-[820px]">
              <h1 className="text-5xl md:text-6xl lg:text-[56px] leading-[1.05] tracking-tight font-semibold mb-6">
                I turn hard business problems into{' '}
                <span className="text-primary">systems teams can trust</span>.
              </h1>
              <p
                className="text-lg md:text-xl leading-relaxed mb-10 text-hero-muted"
                style={{ maxWidth: '580px' }}
              >
                I&apos;m a software architect and hands-on principal engineer with 28 years of
                experience across enterprise web, mobile, cloud, integrations, and applied AI.
                ArchGauge is my open-source case study in evidence-based architecture and
                production-readiness reviews. It is currently in development.
              </p>

              <div>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-6"
                >
                  <Link href={PRIMARY_CTA_HREF}>
                    {PRIMARY_CTA_LABEL}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero right half: real headshot. Replaces earlier fabricated
                observability log (removed because it violated the honesty
                constraint). A face is a stronger anchor than fake telemetry. */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="relative w-[360px] aspect-square rounded-lg overflow-hidden ring-1 ring-white/10 shadow-xl">
                <Image
                  src="/jason-cochran.jpg"
                  alt="Jason Cochran"
                  fill
                  priority
                  sizes="360px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I work (3 buyer-intent offerings) */}
      <section id="services" className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">How I work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {offerings.map((o) => (
              <Card key={o.title} className="border-border flex flex-col h-full">
                <CardHeader>
                  <span className="text-xs uppercase tracking-[0.08em] text-muted-foreground mb-3">
                    {o.tag}
                  </span>
                  <CardTitle className="text-xl">{o.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {o.body}
                  </p>
                  <div className="mt-auto space-y-3 pt-4 border-t border-border/60">
                    <p className="text-sm font-medium text-foreground">{o.meta}</p>
                    <p className="text-xs italic text-muted-foreground">
                      {o.deliverable}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Considering consulting support?{' '}
            <a
              href="/jason-cochran-principal-consulting-resume.pdf"
              className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              View the consulting profile (PDF)
            </a>
          </p>
        </div>
      </section>

      {/* Featured Projects (equal-weight 3-col) */}
      <section id="projects" className="py-16 lg:py-24 bg-white border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Featured projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* ArchGauge */}
            <Card className="border-border flex flex-col h-full">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    <span className="relative inline-flex w-2 h-2">
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
                    </span>
                    In development · Open source
                  </span>
                </div>
                <CardTitle className="text-xl">ArchGauge</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  An open-source architecture and production-readiness review platform designed
                  around cited evidence, reproducible scoring, AI safety controls, and human
                  approval. Follow the decisions and implementation as the system is built.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {archGaugeTechStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal bg-muted text-muted-foreground hover:bg-muted"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Link href="/projects/archgauge" className="mt-auto inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4">
                  Read the case study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardContent>
            </Card>

            {/* OpenClaw VPS */}
            <Card className="border-border flex flex-col h-full">
              <CardHeader>
                <div className="mb-3">
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Archived personal project · Offline
                  </span>
                </div>
                <CardTitle className="text-xl">OpenClaw VPS</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  An archived exploration of managed deployment and operational controls for
                  private AI assistants. It is retained as engineering history, not presented as
                  a live service.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {openClawTechStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal bg-muted text-muted-foreground hover:bg-muted"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Link href="/projects/openclaw-vps" className="mt-auto inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4">
                  Read the archived project notes
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardContent>
            </Card>

            {/* Fathomless */}
            <Card className="border-border flex flex-col h-full">
              <CardHeader>
                <div className="mb-3">
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Indie game · passion project
                  </span>
                </div>
                <CardTitle className="text-xl">Fathomless: The Descent</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  First-person grid-based dungeon crawler in the spirit of{' '}
                  <em>Eye of the Beholder</em>. D&amp;D on the surface, cosmic horror underneath.
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {fathomlessTechStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal bg-muted text-muted-foreground hover:bg-muted"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience (folded resume) */}
      <section id="experience" className="py-16 lg:py-24">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Experience</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            28 years translating business needs into web, mobile, cloud, integration, and
            applied-AI systems — from discovery and architecture through delivery and handoff.
          </p>

          <p className="text-sm text-muted-foreground mb-10">
            Target role: Software Architect + Principal Engineer
          </p>

          <div className="space-y-8 mb-12">
            {experience.map((entry) => (
              <article key={`${entry.company}-${entry.dates}`}>
                <h3 className="text-base font-semibold">
                  {entry.title} · {entry.company}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{entry.dates}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.summary}
                </p>
              </article>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] mb-3">
              Earlier Experience
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">2015–2021</span> Solutions
              Architect (self-employed, 30+ shipped projects across oil/gas, travel, and
              enterprise; Key Energy, Warren Equipment, Enertia, OneTravel.com).
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] mb-4">Skills</h3>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="font-normal bg-muted text-muted-foreground hover:bg-muted"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="/jason-cochran-architect-resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 rounded-md font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download résumé (PDF)
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a
              href="mailto:jlcochran2013@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              jlcochran2013@gmail.com
            </a>
            <a href="https://jasoncochran.io" className="hover:text-primary transition-colors">
              jasoncochran.io
            </a>
            <a
              href="https://linkedin.com/in/cochranjason"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              linkedin.com/in/cochranjason
            </a>
            <span>Midland, TX (remote, US)</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24 bg-white border-y border-border">
        <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-6">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a software architect and hands-on principal engineer. Over 28 years, I&apos;ve
            worked across enterprise web, mobile, cloud, integrations, and applied AI. I work
            directly with teams to understand the real business problem, make architecture
            tradeoffs visible, deliver software, and leave behind clear decisions and operating
            guidance. I work remotely from Midland, Texas.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Message me</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I&apos;ll reply within 24 hours.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Bottom CTA (echo of hero) */}
      <section className="py-16 lg:py-24 bg-hero-bg text-hero-foreground border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Want to see the architecture work?
          </h2>
          <p className="text-hero-muted mb-10 max-w-[540px] mx-auto">
            ArchGauge is being built in public as a complete case study. See the current scope,
            constraints, decisions, and honest limitations.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-6"
          >
            <Link href={PRIMARY_CTA_HREF}>
              {PRIMARY_CTA_LABEL}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-sm text-muted-foreground">
              <p className="text-foreground mb-1">Jason Cochran</p>
              <p>Strataga LLC · Remote, US</p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/#experience"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://blog.jasoncochran.io"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </a>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/cochranjason/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/strataga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/jcochranio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:jlcochran2013@gmail.com"
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
