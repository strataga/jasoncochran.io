// Public HTML snapshot of the private evidence-backed resume source.
// Downloadable PDFs are generated and verified in the private career-plan
// repository before they are copied into public assets.

export default function ResumePrint() {
  return (
    <>
      <h1 className="name">JASON COCHRAN</h1>
      <p className="tagline">
        Software Architect + Principal Engineer
      </p>
      <p className="contact">
        jlcochran2013@gmail.com · jasoncochran.io ·
        linkedin.com/in/cochranjason · Midland, TX (remote, US)
      </p>

      <hr />

      <section>
        <h2 className="section">Projects</h2>

        <h3 className="role">ReadyRay · In development</h3>
        <p className="project-meta">
          Open-source architecture and production-readiness case study
        </p>
        <p className="desc">
          Designed to combine deterministic evidence checks, cited AI-assisted
          findings, reproducible scoring, and human approval. Capabilities are
          published only as they are implemented and verified.
        </p>

        <h3 className="role">OpenClaw VPS · Archived personal project</h3>
        <p className="project-meta">No longer online</p>
        <p className="desc">
          Explored managed deployment and operational controls for private AI
          assistants. Retained as engineering history, not a live service.
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
          surfaces. Delivered production client features in the AngularJS +
          Ionic stack alongside the research track.
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

      <section>
        <h2 className="section">Certifications</h2>
        <p className="skills-row">
          Microsoft Certified: Azure Fundamentals (AZ-900) · Microsoft
          Certified: Azure AI Fundamentals (AI-900)
        </p>
      </section>
    </>
  )
}
