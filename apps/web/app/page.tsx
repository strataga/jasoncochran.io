import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { ArrowRight, ExternalLink, Linkedin, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Jason Cochran — Production AI Agent Infrastructure',
  description:
    'I build production agent infrastructure that does not break in prod. Built OpenClaw VPS — live multi-tenant agent hosting with paying customers.',
  alternates: {
    canonical: 'https://jasoncochran.io',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Cochran',
  jobTitle: 'Production AI Agent Infrastructure Engineer',
  description:
    'Builds production agent infrastructure. Shipped OpenClaw VPS — live multi-tenant agent hosting platform with paying customers, per-tenant cost and latency observability, SLO-gated deploys.',
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

      {/* Hero — single dark band */}
      <section className="bg-hero-bg text-hero-foreground py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <h1 className="text-5xl md:text-6xl lg:text-[56px] leading-[1.05] tracking-tight font-semibold mb-6">
              I build production agent infrastructure that{' '}
              <span className="text-primary">doesn&apos;t break</span>.
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-10 text-hero-muted"
              style={{ maxWidth: '580px' }}
            >
              I shipped OpenClaw VPS — a live multi-tenant agent hosting platform at Strataga LLC
              with paying customers, per-tenant cost and latency observability, SLO-gated deploys,
              and 337 tests backing it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-6"
              >
                <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer">
                  {PRIMARY_CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <a
                href="https://openclawvps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-hero-muted hover:text-hero-foreground transition-colors inline-flex items-center gap-1.5"
              >
                See OpenClaw VPS
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
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

      {/* What I do — ≤2 offerings */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">What I do</h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">Production Agent Sprint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Four weeks. I ship a production-ready agent system — observability, budget
                  controls, SLO gates, runbooks — on your stack or mine. You get working code, not
                  a deck.
                </p>
                <p className="text-sm text-foreground">Starting at $5,000</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">Part-time IC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  15–25 hours a week inside your team. I take the agent work no one else owns — the
                  reliability, the latency budget, the on-call — and I ship.
                </p>
                <p className="text-sm text-foreground">Contract starting at $150/hr</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24 bg-white border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Featured projects</h2>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* OpenClaw VPS — lead, spans 2 columns on desktop */}
            <Card
              className="lg:col-span-2 border-border"
              style={{ boxShadow: 'var(--shadow-xl)' }}
            >
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    <span className="relative inline-flex w-2 h-2">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-60 animate-[pulse_2s_ease-in-out_infinite]" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
                    </span>
                    Live
                  </span>
                  <span className="text-xs text-muted-foreground">
                    $120 MRR · ~3 paying customers
                  </span>
                </div>
                <CardTitle className="text-2xl md:text-3xl">OpenClaw VPS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Managed AI agent hosting at Strataga LLC: multi-tenant, BYOK, multi-channel
                  delivery (web / Telegram / Tailscale), per-tenant cost and latency observability,
                  SLO-gated deploys, incident lifecycle tracking, and 337 Vitest tests backing it.
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

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-6 items-center">
                  <span className="text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Launched on
                  </span>
                  <a
                    href="https://www.producthunt.com/products/openclaw-vps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Product Hunt
                  </a>
                  <a
                    href="https://news.ycombinator.com/item?id=47507993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Hacker News
                  </a>
                  <a
                    href="https://www.indiehackers.com/product/openclaw-vps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Indie Hackers
                  </a>
                  <a
                    href="https://fazier.com/launches/openclawvps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Fazier
                  </a>
                  <a
                    href="https://dev.to/jcochranio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
              </CardContent>
            </Card>

            {/* BigGig.io — second */}
            <Card className="border-border">
              <CardHeader>
                <div className="mb-3">
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    In development · ETA Q2 2026
                  </span>
                </div>
                <CardTitle className="text-xl">BigGig.io</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Strataga&apos;s freelancer marketplace — the platform I would want to use to find
                  work. Pre-launch; shipping in Q2.
                </p>
              </CardContent>
            </Card>

            {/* Fathomless — third */}
            <Card className="border-border lg:col-start-3">
              <CardHeader>
                <div className="mb-3">
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Indie game · passion project
                  </span>
                </div>
                <CardTitle className="text-xl">Fathomless: The Descent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  First-person grid-based dungeon crawler in C++23 / SDL3. Lovecraftian, cosmic
                  horror.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About paragraph */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-6">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a software engineer who builds production agent systems. I shipped OpenClaw
            VPS at Strataga LLC: live, paying customers, per-tenant observability, SLO gates. I
            work remote from Midland, TX. I take sprint contracts and part-time IC roles with
            teams running agents in production.
          </p>
        </div>
      </section>

      {/* Bottom CTA — echo of hero */}
      <section className="py-16 lg:py-24 bg-hero-bg text-hero-foreground border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Want to see how it ships?
          </h2>
          <p className="text-hero-muted mb-10 max-w-[540px] mx-auto">
            OpenClaw VPS is live with paying customers. Walk through the dashboard, billing, and
            multi-channel delivery yourself.
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
                href="/resume"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
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
