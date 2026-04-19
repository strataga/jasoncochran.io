import type { Metadata } from 'next'
import { Download, Mail, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume — Jason Cochran',
  description:
    'Jason Cochran resume. Production AI agent infrastructure. Built OpenClaw VPS, a live multi-tenant agent hosting platform with paying customers at Strataga LLC.',
  alternates: {
    canonical: 'https://jasoncochran.io/resume',
  },
}

export default function Resume() {
  return (
    <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Download link — hidden in print */}
      <div className="no-print mb-10 flex flex-wrap gap-3">
        <a
          href="/jason-cochran-resume.pdf"
          download
          className="inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 rounded-md font-semibold transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* Header */}
      <header className="mb-10 pb-6 border-b border-border">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
          Jason Cochran
        </h1>
        <p className="text-lg text-foreground mb-4">Production AI Agent Infrastructure</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <a
            href="mailto:jlcochran2013@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5 no-print-icon" />
            jlcochran2013@gmail.com
          </a>
          <a
            href="https://jasoncochran.io"
            className="hover:text-primary transition-colors"
          >
            jasoncochran.io
          </a>
          <a
            href="https://linkedin.com/in/cochranjason"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 no-print-icon" />
            linkedin.com/in/cochranjason
          </a>
          <span>Midland, TX (remote, US)</span>
        </div>
      </header>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] mb-4">Projects</h2>

        <article className="mb-6">
          <h3 className="text-base font-semibold mb-1">
            OpenClaw VPS — Managed AI Agent Hosting
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Strataga LLC · Q4 2025–Q1 2026 ·{' '}
            <a
              href="https://openclawvps.com"
              className="text-primary hover:underline underline-offset-2"
            >
              openclawvps.com
            </a>{' '}
            · Live with ~3 paying customers, $120 MRR
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm">
            <li>
              Multi-tenant agent hosting: BYOK model, multi-channel delivery (web / Telegram /
              Tailscale-wired), per-tenant cost and latency observability, SLO-gated deploys,
              incident lifecycle tracking, and a customer-health scoring pipeline.
            </li>
            <li>
              Tech: Next.js 16, React 19, Convex, Stripe, Tailscale, Sentry, PostHog, Claude Code,
              MCP.
            </li>
            <li>
              Featured: Product Hunt · Hacker News (item 47507993) · Indie Hackers · Fazier ·
              Dev.to.
            </li>
          </ul>
        </article>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] mb-4">Experience</h2>

        <article className="mb-5">
          <h3 className="text-base font-semibold mb-1">
            Senior Full-Stack Engineer — Servant
          </h3>
          <p className="text-sm text-muted-foreground mb-2">2025/02–2025/09</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm">
            <li>
              Shipped EMA onboarding flow on NestJS + Next.js + Prisma + React Query with
              AWS-hosted services; reduced new-team-member activation friction on the platform.
            </li>
            <li>
              Owned the production migration from the legacy onboarding path to the new NestJS
              flow; handed off with documentation and runbooks before role ended.
            </li>
          </ul>
        </article>

        <article className="mb-5">
          <h3 className="text-base font-semibold mb-1">
            Senior Software Engineer — Big D Companies
          </h3>
          <p className="text-sm text-muted-foreground mb-2">2024/03–2024/09</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm">
            <li>
              Led the legacy PHP → React / Next.js conversion of a SCADA-connected ERP used across
              oil/gas field operations; migrated the primary operator-facing screens off PHP
              without downtime.
            </li>
            <li>
              Integrated the new stack with existing SCADA data feeds and ERP tables; kept the
              on-call operator workflow continuous during the cutover.
            </li>
          </ul>
        </article>

        <article className="mb-5">
          <h3 className="text-base font-semibold mb-1">
            Senior React Native Engineer — Nutrien
          </h3>
          <p className="text-sm text-muted-foreground mb-2">2023/09–2024/02</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm">
            <li>
              Shipped cross-platform features on the Nutrien mobile app (iOS + Android) used
              offline-first by field reps in agriculture operations.
            </li>
          </ul>
        </article>

        <article className="mb-5">
          <h3 className="text-base font-semibold mb-1">
            Senior Software Engineer — TxMQ
          </h3>
          <p className="text-sm text-muted-foreground mb-2">2022/10–2023/06</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm">
            <li>
              Led an AI research initiative with OpenAI: prototyped LLM-assisted internal tooling
              on Angular / Ionic client surfaces. Early applied-LLM production work — two years
              before the current agent wave.
            </li>
          </ul>
        </article>

        <article className="mb-5">
          <h3 className="text-base font-semibold mb-1">
            Senior Mobile Engineer — Verizon
          </h3>
          <p className="text-sm text-muted-foreground mb-2">2021/10–2022/11</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm">
            <li>
              Shipped the AMC Walking Dead NFT experience: custom blockchain + JS SDK inside the
              Verizon mobile app, production-grade for a tier-1 carrier launch.
            </li>
          </ul>
        </article>
      </section>

      {/* Earlier Experience */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] mb-4">
          Earlier Experience
        </h2>
        <p className="text-sm">
          <span className="font-semibold">2015–2021</span> Solutions Architect (self-employed, 30+
          shipped projects across oil/gas, travel, and enterprise; Key Energy, Warren Equipment,
          Enertia, OneTravel.com).
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] mb-4">Skills</h2>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="inline font-semibold">Languages: </dt>
            <dd className="inline">TypeScript, Python, Rust, JavaScript</dd>
          </div>
          <div>
            <dt className="inline font-semibold">AI / Agents: </dt>
            <dd className="inline">
              Claude Code, Cursor, MCP servers, OpenAI SDK, Anthropic SDK, agent infrastructure,
              RAG
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">Frameworks: </dt>
            <dd className="inline">Next.js 16, React 19, NestJS, React Native</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Backend: </dt>
            <dd className="inline">Node.js, Convex, PostgreSQL, Redis</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Infrastructure / Ops: </dt>
            <dd className="inline">Railway, Docker, Cloudflare, Sentry, PostHog, Stripe, Resend</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
