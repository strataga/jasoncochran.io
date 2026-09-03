import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import {
  ArrowRight,
  Linkedin,
  Github,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Jason Cochran · Hands-On Software Architect',
  description:
    'Hands-on Software Architect with 28 years of experience delivering enterprise applications, integrations, mobile products, cloud-hosted systems, and applied-AI solutions.',
  alternates: {
    canonical: 'https://jasoncochran.io',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Cochran',
  jobTitle: 'Software Architect',
  description:
    'Hands-on Software Architect with 28 years of experience translating business needs into maintainable enterprise applications, integrations, mobile products, cloud-hosted systems, and applied-AI solutions.',
  url: 'https://jasoncochran.io',
  email: 'jlcochran2013@gmail.com',
  telephone: '+1-432-260-7580',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Midland',
    addressRegion: 'Texas',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/cochranjason/',
    'https://github.com/strataga',
  ],
}

const ARCHITECTURE_CTA_HREF = '/projects/archgauge'
const ARCHITECTURE_CTA_LABEL = 'View architecture work'

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

const careerProof = [
  { value: '28 years', label: 'Designing and delivering software' },
  { value: '30+ projects', label: 'Independent client projects delivered' },
  { value: 'Web + mobile', label: 'Enterprise and field applications' },
  { value: 'Architecture + code', label: 'Hands-on from discovery through handoff' },
]

const selectedResults = [
  {
    company: 'Key Energy',
    title: 'Oil-and-gas ERP delivery',
    body: 'I led a six-person team building and supporting mobile and web-based oil-and-gas ERP software with Ruby on Rails while remaining hands-on with the delivery.',
  },
  {
    company: 'Servant',
    title: 'Production onboarding migration',
    body: 'I delivered an EMA onboarding flow with NestJS, Next.js, Prisma, React Query, and AWS-hosted services, then owned the production migration from the legacy path, documentation, runbooks, and operational handoff.',
  },
  {
    company: 'Verizon',
    title: 'Mobile experience and SDK integration',
    body: 'I delivered the AMC Walking Dead experience through a custom blockchain and JavaScript SDK integration in the Verizon mobile application, including the documented SDK handoff for downstream teams.',
  },
  {
    company: 'Independent consulting',
    title: 'More than 30 client projects',
    body: 'Across more than 30 projects as a self-employed Solutions Architect, I worked directly with clients to define workflows, choose practical architecture, build software, and support delivery in oil and gas, travel, and enterprise environments.',
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
                Hands-On <span className="text-primary">Software Architect</span>
              </h1>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-primary sm:text-base">
                Enterprise Applications · Integrations · Mobile · Cloud · Applied AI
              </p>
              <p
                className="text-lg md:text-xl leading-relaxed mb-6 text-hero-muted"
                style={{ maxWidth: '660px' }}
              >
                I bring 28 years of experience turning business needs into enterprise
                applications, web and mobile products, integrations, cloud-hosted systems, and
                applied-AI solutions. I stay hands-on through design and delivery so the
                architecture works in production, not only on paper.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Button
                  asChild
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-6 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg"
                >
                  <Link href="/resume">View résumé and cover letter</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto h-11 px-6 border-white/30 bg-transparent text-hero-foreground hover:bg-white/10 hover:text-hero-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg"
                >
                  <Link href={ARCHITECTURE_CTA_HREF}>
                    {ARCHITECTURE_CTA_LABEL}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full sm:w-auto h-11 px-6 text-hero-foreground hover:bg-white/10 hover:text-hero-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg"
                >
                  <Link href="/#contact">
                    <Mail className="w-4 h-4" />
                    Contact Jason
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero right half: real headshot. Replaces earlier fabricated
                observability log (removed because it violated the honesty
                constraint). A face is a stronger anchor than fake telemetry. */}
            <div className="w-full flex-shrink-0 sm:w-[360px]">
              <div className="relative w-full max-w-[360px] mx-auto lg:mx-0 aspect-square rounded-lg overflow-hidden ring-1 ring-white/10 shadow-xl">
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

      {/* Recruiter proof strip */}
      <section aria-label="Career highlights" className="border-b border-border bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {careerProof.map((item) => (
              <div key={item.value} className="bg-white px-6 py-7">
                <dt className="text-lg font-semibold text-foreground mb-1">{item.value}</dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Evidence-backed career results */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] mb-10">
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Selected results</h2>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;ve spent my career working where business workflows, architecture decisions,
              and production delivery meet. These examples show how I contribute when the work
              has to move from an idea into software people can use and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {selectedResults.map((result) => (
              <Card key={result.company} className="border-border flex flex-col h-full">
                <CardHeader>
                  <span className="text-xs uppercase tracking-[0.08em] text-primary mb-3">
                    {result.company}
                  </span>
                  <h3 className="text-xl font-semibold leading-none tracking-tight">
                    {result.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{result.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-border bg-muted/40 p-6 lg:p-8">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 lg:items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Connect with Jason</h3>
                <p className="text-sm text-muted-foreground">
                  Hiring for an architect or principal-level engineering role? Let&apos;s talk.
                </p>
              </div>
              <address className="not-italic flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Jason Cochran · Midland, Texas</span>
                <a
                  href="tel:+14322607580"
                  className="hover:text-primary underline-offset-4 hover:underline transition-colors"
                >
                  (432) 260-7580
                </a>
                <a
                  href="mailto:jlcochran2013@gmail.com"
                  className="hover:text-primary underline-offset-4 hover:underline transition-colors"
                >
                  jlcochran2013@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/cochranjason/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary underline-offset-4 hover:underline transition-colors"
                >
                  linkedin.com/in/cochranjason
                </a>
                <a
                  href="https://github.com/strataga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary underline-offset-4 hover:underline transition-colors"
                >
                  github.com/strataga
                </a>
                <a
                  href="https://jasoncochran.io"
                  className="hover:text-primary underline-offset-4 hover:underline transition-colors"
                >
                  jasoncochran.io
                </a>
              </address>
            </div>
          </div>
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
                    Personal project · Not currently online
                  </span>
                </div>
                <CardTitle className="text-xl">OpenClaw VPS</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  OpenClaw VPS was a managed hosting and control-plane product for private,
                  always-on AI assistants. A user could provision and manage a hosted bot, connect
                  an AI provider, chat through the web or a supported messaging channel, and
                  monitor the service without administering the underlying server. The service is
                  not currently online.
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
                  Read the project story
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

      {/* About */}
      <section id="about" className="py-16 lg:py-24 bg-white border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[760px]">
            <h2 className="text-2xl md:text-3xl tracking-tight mb-6">About</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m looking for software architecture work where the job does not stop at a
              diagram. I want to understand how the business operates, make the important
              tradeoffs clear, and stay close enough to implementation that the architecture
              works in production and remains understandable after handoff.
            </p>
            <p>
              I bring 28 years of experience across enterprise web, mobile, cloud, integration,
              and applied-AI systems. At Key Energy, I led a six-person team building mobile and
              web-based oil-and-gas ERP software with Ruby on Rails while remaining hands-on. More
              recently, my work at Servant, Nutrien, TxMQ, and Verizon has covered production
              migrations, offline-first field workflows, OpenAI research, and reusable SDK
              integration.
            </p>
            <p>
              I value architecture that helps teams make better decisions and deliver dependable
              software—not an approval process that slows them down.{' '}
              <Link href="/resume" className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">
                Read my résumé and cover letter
              </Link>{' '}
              or{' '}
              <Link href="/#contact" className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">
                Message me
              </Link>
              .
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternate consulting path */}
      <section id="services" className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] mb-10">
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">
              Fractional consulting
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m primarily pursuing a full-time architect or principal-level engineering
              role. For teams that need focused help instead, I also offer practical,
              hands-on architecture support.
            </p>
          </div>

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
                  <p className="text-muted-foreground leading-relaxed mb-6">{o.body}</p>
                  <div className="mt-auto space-y-3 pt-4 border-t border-border/60">
                    <p className="text-sm font-medium text-foreground">{o.meta}</p>
                    <p className="text-xs italic text-muted-foreground">{o.deliverable}</p>
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

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px]">
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Message me</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Tell me what your team is building, where the work is stuck, or what you need from
              your next architect.
            </p>
            <ContactForm />
          </div>
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
            <Link href={ARCHITECTURE_CTA_HREF}>
              {ARCHITECTURE_CTA_LABEL}
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
              <p>Midland, Texas</p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/resume"
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
