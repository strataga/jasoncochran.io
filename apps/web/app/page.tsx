import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import {
  ArrowRight,
  ExternalLink,
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
  title: 'Jason Cochran — Senior Full-Stack Engineer · Agent Infrastructure',
  description:
    'Senior full-stack engineer. 28 years shipping production software; currently building agent infrastructure. OpenClaw VPS: live multi-tenant agent hosting with per-tenant observability and SLO-gated deploys.',
  alternates: {
    canonical: 'https://jasoncochran.io',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Cochran',
  jobTitle: 'Senior Full-Stack Engineer',
  description:
    'Senior full-stack engineer. 28 years shipping production software; current focus is agent infrastructure. Shipped OpenClaw VPS — live multi-tenant agent hosting with per-tenant observability and SLO-gated deploys.',
  url: 'https://jasoncochran.io',
  sameAs: [
    'https://www.linkedin.com/in/cochranjason/',
    'https://x.com/jcochranio',
    'https://github.com/jcochranio',
  ],
}

// UI-SPEC: Primary CTA target.
// Loom URL is DEFERRED per .planning/phases/01-positioning-asset-rewrite/01-LOOM-URL.md —
// until Jason records and uploads, the hero primary CTA links to the live product
// (honesty constraint: no dead links).
const PRIMARY_CTA_HREF = 'https://openclawvps.com'
const PRIMARY_CTA_LABEL = 'See the live product'

const featuredOn = [
  { label: 'Product Hunt', href: 'https://www.producthunt.com/products/openclaw-vps' },
  { label: 'Hacker News', href: 'https://news.ycombinator.com/item?id=47507993' },
  { label: 'Indie Hackers', href: 'https://www.indiehackers.com/product/openclaw-vps' },
  { label: 'Fazier', href: 'https://fazier.com/launches/openclawvps.com' },
  { label: 'Dev.to', href: 'https://dev.to/jcochranio' },
]

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

const bigGigTechStack = ['Next.js', 'React', 'TypeScript']

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
    tag: "Shipping and it's breaking",
    title: 'Production Hardening',
    body: 'For founders whose agent works in demo and breaks in prod. I audit, harden, and hand you back a system you can run on-call: auth, per-request cost and latency, test coverage, runbook. Works whether you built it with Cursor, Lovable, Bolt, or a founding engineer who moved on.',
    meta: '2-week audit + 4-week fix · Audit from $5,000 · Typical $15–30K full engagement',
    deliverable:
      'Hardened system · observability in place · runbook · handoff walkthrough',
  },
  {
    tag: "Need to ship and the clock's ticking",
    title: 'Production Agent Sprint',
    body: 'For teams shipping a greenfield agent system in weeks. I design, build, and deploy — same eval + tracing stack I use in OpenClaw VPS (per-tenant latency, cost accrual, SLO-gated deploys). Production-ready means it holds under load, not a demo that dies.',
    meta: '4 weeks · Starting at $5,000 scope-limited · Typical $20–30K',
    deliverable: 'Running code in your stack or mine · not a deck',
  },
  {
    tag: 'Need a senior on the team for a quarter',
    title: 'Embedded Senior AI Engineer',
    body: "For eng managers and heads of AI who need senior hands on evals, observability, incident ownership, or the agent platform — without adding FTE. I own what you don't have capacity for. Your team owns the product.",
    meta: '3-month minimum · 15–25 hrs/week · $150–200/hr · $6,000/mo minimum',
    deliverable:
      "Eval harness · tracing · production rigor your team doesn't have time for",
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
    title: 'Senior Software Engineer',
    company: 'Big D Companies',
    dates: '2024/03–2024/09',
    summary:
      'Led the legacy PHP → React / Next.js conversion of a SCADA-connected ERP used across oil/gas field operations; migrated operator-facing screens without downtime.',
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
      'Led an AI research initiative with OpenAI: prototyped LLM-assisted internal tooling on Angular / Ionic client surfaces — early applied-LLM production work, two years before the current agent wave.',
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

      {/* Hero — single dark band */}
      <section className="bg-hero-bg text-hero-foreground py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-20 items-start">
            <div className="max-w-[820px]">
              <h1 className="text-5xl md:text-6xl lg:text-[56px] leading-[1.05] tracking-tight font-semibold mb-6">
                I&apos;m a senior full-stack engineer. Right now I&apos;m building
                agent infrastructure that{' '}
                <span className="text-primary">doesn&apos;t break</span>.
              </h1>
              <p
                className="text-lg md:text-xl leading-relaxed mb-10 text-hero-muted"
                style={{ maxWidth: '580px' }}
              >
                I shipped OpenClaw VPS — a live multi-tenant agent hosting platform at Strataga
                LLC with per-tenant cost and latency observability, SLO-gated deploys, and 337
                tests backing it.
              </p>

              <div>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-6"
                >
                  <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer">
                    {PRIMARY_CTA_LABEL}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero right half intentionally empty — the fabricated
                observability log previously here violated the honesty
                constraint (labeled "LIVE TRACE" but was mock data). Any
                replacement must be real: actual openclawvps.com
                screenshot, real proof numbers, or nothing. */}
          </div>
        </div>
      </section>

      {/* Featured On row */}
      <section className="py-12 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.12em] uppercase text-muted-foreground mb-6">
            Featured on
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {featuredOn.map((mark) => (
              <a
                key={mark.label}
                href={mark.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {mark.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How I work — 3 buyer-intent offerings */}
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
        </div>
      </section>

      {/* Featured Projects — equal-weight 3-col */}
      <section id="projects" className="py-16 lg:py-24 bg-white border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Featured projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* OpenClaw VPS */}
            <Card className="border-border flex flex-col h-full">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    <span className="relative inline-flex w-2 h-2">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-60 animate-[pulse_2s_ease-in-out_infinite]" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
                    </span>
                    Live · Multi-tenant agent hosting
                  </span>
                </div>
                <CardTitle className="text-xl">OpenClaw VPS</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  Managed AI agent hosting at Strataga LLC: multi-tenant, BYOK, multi-channel
                  delivery, per-tenant cost and latency observability, SLO-gated deploys.
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

                <div className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs items-center">
                    <span className="uppercase tracking-[0.08em] text-muted-foreground">
                      Launched on
                    </span>
                    <a
                      href="https://www.producthunt.com/products/openclaw-vps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Product Hunt
                    </a>
                    <a
                      href="https://news.ycombinator.com/item?id=47507993"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Hacker News
                    </a>
                    <a
                      href="https://www.indiehackers.com/product/openclaw-vps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Indie Hackers
                    </a>
                    <a
                      href="https://fazier.com/launches/openclawvps.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Fazier
                    </a>
                    <a
                      href="https://dev.to/jcochranio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Dev.to
                    </a>
                  </div>

                  <a
                    href="https://openclawvps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
                  >
                    openclawvps.com
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* BigGig.io */}
            <Card className="border-border flex flex-col h-full">
              <CardHeader>
                <div className="mb-3">
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    In development · ETA Q2 2026
                  </span>
                </div>
                <CardTitle className="text-xl">BigGig.io</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  Strataga&apos;s freelancer marketplace — the platform I would want to use to
                  find work.
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {bigGigTechStack.map((tech) => (
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
                  <em>Eye of the Beholder</em> — D&amp;D on the surface, cosmic horror underneath.
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

      {/* Experience — folded resume */}
      <section id="experience" className="py-16 lg:py-24">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Experience</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            28 years shipping production software across agriculture, energy, healthcare
            adjacent, fintech, and mobile. Recent focus: agent infrastructure.
          </p>

          <p className="text-sm text-muted-foreground mb-10">
            Senior Full-Stack Engineer · Agent Infrastructure
          </p>

          <div className="space-y-8 mb-12">
            {experience.map((entry) => (
              <article key={`${entry.company}-${entry.dates}`}>
                <h3 className="text-base font-semibold">
                  {entry.title} — {entry.company}
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
              href="/jason-cochran-resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 rounded-md font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download full resume (PDF)
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
            I&apos;m a senior full-stack engineer. 28 years of production software behind me;
            my current focus is agent infrastructure at Strataga LLC. I shipped OpenClaw VPS —
            live, per-tenant observability, SLO gates. I work remote from Midland, TX. I take
            sprint contracts, production-hardening engagements, and part-time embedded roles
            with teams running agents in production.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Talk to me</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            If any of the cards above sound like you, send a note. One-sentence reply within
            24 hours.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Bottom CTA — echo of hero */}
      <section className="py-16 lg:py-24 bg-hero-bg text-hero-foreground border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Want to see how it ships?
          </h2>
          <p className="text-hero-muted mb-10 max-w-[540px] mx-auto">
            OpenClaw VPS is live. Walk through the dashboard, billing, and multi-channel
            delivery yourself.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-6"
          >
            <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer">
              {PRIMARY_CTA_LABEL}
              <ArrowRight className="w-4 h-4" />
            </a>
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
                href="https://github.com/jcochranio"
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
