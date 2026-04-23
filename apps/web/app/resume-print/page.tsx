// Resume print source page.
//
// Renders the resume content with print-optimized typography. Source of
// truth for the content is `.planning/phases/01-positioning-asset-rewrite/
// 01-RESUME-DRAFT.md` in the career-makeover repo; the tagline on the
// rendered page is updated to the 2026-04-19 hybrid-wedge phrasing.
//
// The Puppeteer script `scripts/generate-resume-pdf.mjs` navigates to
// /resume-print in a local dev server and calls page.pdf() to produce
// `apps/web/public/jason-cochran-resume.pdf`.
//
// noindex set via metadata in ./layout.tsx.

export default function ResumePrint() {
  return (
    <>
      <h1 className="name">JASON COCHRAN</h1>
      <p className="tagline">
        Senior Full-Stack Engineer · Agent Infrastructure
      </p>
      <p className="contact">
        jlcochran2013@gmail.com · jasoncochran.io ·
        linkedin.com/in/cochranjason · Midland, TX (remote, US)
      </p>

      <hr />

      <section>
        <h2 className="section">Projects</h2>

        <h3 className="role">OpenClaw VPS · Managed AI Agent Hosting</h3>
        <p className="project-meta">
          Strataga LLC · Q4 2025–Q1 2026 · openclawvps.com · Live
        </p>
        <p className="desc">
          Managed hosting for OpenClaw with 30 prebuilt AI assistants. Multi-tenant
          by design: BYOK model, multi-channel delivery (web / Telegram /
          Tailscale-wired), per-tenant cost and latency observability, SLO-gated
          deploys, incident lifecycle tracking, and a customer-health scoring
          pipeline.
        </p>
        <p className="desc">
          Tech: Next.js 16, React 19, Convex, Stripe, Tailscale, Sentry,
          PostHog, Claude Code, MCP.
        </p>
        <p className="featured">
          Featured: Product Hunt · Hacker News (item 47507993) · Indie Hackers ·
          Fazier · Dev.to.
        </p>
      </section>

      <section>
        <h2 className="section">Experience</h2>

        <h3 className="role">
          Senior Full-Stack Engineer · Servant · 2025/02–2025/09
        </h3>
        <p className="desc">
          Shipped EMA onboarding flow on NestJS + Next.js + Prisma + React Query
          with AWS-hosted services. Owned the production migration from the
          legacy onboarding path to the new NestJS flow; handed off with
          documentation and runbooks before role ended.
        </p>

        <h3 className="role">
          Senior Software Engineer · Big D Companies · 2024/03–2024/09
        </h3>
        <p className="desc">
          Led the legacy PHP → React / Next.js conversion of a SCADA-connected
          ERP used across oil/gas field operations; migrated the primary
          operator-facing screens off PHP without downtime. Integrated the new
          stack with existing SCADA data feeds and ERP tables; kept the on-call
          operator workflow continuous during the cutover.
        </p>

        <h3 className="role">
          Senior React Native Engineer · Nutrien · 2023/09–2024/02
        </h3>
        <p className="desc">
          Built cross-platform features on the Nutrien mobile app (iOS +
          Android) used by field reps in agriculture operations. Shipped
          data-collection and workflow screens that ran offline-first and
          synced once back online.
        </p>

        <h3 className="role">
          Senior Software Engineer · TxMQ · 2022/10–2023/06
        </h3>
        <p className="desc">
          Led an AI research initiative with OpenAI: prototyped LLM-assisted
          internal tooling on top of existing AngularJS / Ionic client
          surfaces. Early applied-LLM production work, two years before the
          current agent wave. Delivered production client features in the
          AngularJS + Ionic stack alongside the research track.
        </p>

        <h3 className="role">
          Senior Mobile Engineer · Verizon · 2021/10–2022/11
        </h3>
        <p className="desc">
          Shipped the AMC Walking Dead NFT experience: custom blockchain + JS
          SDK integration inside the Verizon mobile app, production-grade for a
          tier-1 carrier launch. Built and documented the JS SDK handoff used
          by downstream teams consuming the NFT integration.
        </p>
      </section>

      <section>
        <h2 className="section">Earlier Experience</h2>
        <p className="earlier">
          <strong>2015–2021</strong> Solutions Architect (self-employed, 30+
          shipped projects across oil/gas, travel, and enterprise; Key Energy,
          Warren Equipment, Enertia, OneTravel.com).
        </p>
      </section>

      <section>
        <h2 className="section">Skills</h2>
        <p className="skills-row">
          <span className="skills-label">Languages:</span> TypeScript, Python,
          Rust, JavaScript
        </p>
        <p className="skills-row">
          <span className="skills-label">AI / Agents:</span> Claude Code,
          Cursor, MCP servers, OpenAI SDK, Anthropic SDK, agent infrastructure,
          RAG
        </p>
        <p className="skills-row">
          <span className="skills-label">Frameworks:</span> Next.js 16, React
          19, NestJS, React Native
        </p>
        <p className="skills-row">
          <span className="skills-label">Backend:</span> Node.js, Convex,
          PostgreSQL, Redis
        </p>
        <p className="skills-row">
          <span className="skills-label">Infrastructure / Ops:</span> Railway,
          Docker, Cloudflare, Sentry, PostHog, Stripe, Resend
        </p>
      </section>
    </>
  )
}
