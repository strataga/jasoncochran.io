// Public HTML snapshot of the private evidence-backed resume source.
// Downloadable PDFs are generated and verified in the private career-plan
// repository before they are copied into public assets.

export default function ResumePrint() {
  return (
    <>
      <h1 className="name">JASON COCHRAN</h1>
      <p className="tagline">
        Senior Software Engineer
      </p>
      <p className="tagline-secondary">Practical, hands-on AI experience</p>
      <p className="contact">
        jlcochran2013@gmail.com · jasoncochran.io ·
        linkedin.com/in/cochranjason · Midland, TX
      </p>

      <hr />

      <section>
        <h2 className="section">Profile</h2>
        <p className="desc">
          Senior software engineer with 28 years building enterprise, web, mobile, and cloud software.
        </p>
      </section>

      <section>
        <h2 className="section">AI Experience</h2>
        <p className="desc">
          Led OpenAI research and LLM prototypes at TxMQ alongside separate production feature work.
          Built OpenClaw VPS (archived personal project, no longer online). Use Claude Code, Cursor,
          and MCP servers throughout development.
        </p>
      </section>

      <section>
        <h2 className="section">Projects</h2>

        <h3 className="role">ArchGauge · In development</h3>
        <p className="desc">
          Open-source architecture and production-readiness case study with ongoing implementation.
        </p>

        <h3 className="role">OpenClaw VPS · Archived personal project</h3>
        <p className="desc">
          Explored managed deployment and operations for private AI assistants; no longer online.
        </p>
      </section>

      <section>
        <h2 className="section">Experience</h2>

        <h3 className="role">
          Senior Full Stack Engineer · Servant · 2025/02–2025/09
        </h3>
        <p className="desc">
          Built NestJS/Next.js onboarding on AWS; owned production migration, documentation, and handoff.
        </p>

        <h3 className="role">
          Senior React Native Developer · Nutrien · 2023/09–2024/02
        </h3>
        <p className="desc">
          Built offline-first iOS and Android field workflows with data collection and synchronization.
        </p>

        <h3 className="role">
          Senior Software Engineer / Consultant · TxMQ · 2022/08–2023/07
        </h3>
        <p className="desc">
          Delivered AngularJS/Ionic production features alongside a separate OpenAI research initiative.
        </p>

        <h3 className="role">
          Senior Mobile Developer · Verizon · 2021/11–2022/08
        </h3>
        <p className="desc">
          Delivered the AMC Walking Dead NFT blockchain/JavaScript SDK integration and documented handoff.
        </p>

        <h3 className="role">
          Web/Mobile Solutions Architect · Self-employed · 2015/02–2021/11
        </h3>
        <p className="desc">
          Built custom websites, SaaS applications, and mobile solutions from workflow definition through delivery.
        </p>

        <h3 className="role">
          Lead Web/Mobile Developer · Key Energy Services · 2012/05–2015/04
        </h3>
        <p className="desc">
          Built Rails/Meteor/Backbone ERP software, a Rails API, and offline UI; used Jenkins for CI.
        </p>

        <h3 className="role">
          Web Developer · Warren Equipment Company · 2011/02–2012/02
        </h3>
        <p className="desc">
          Developed internal corporate websites using ASP.NET, jQuery, HTML, and CSS.
        </p>

        <h3 className="role">
          Web Developer · Enertia Software · 2007/11–2011/02
        </h3>
        <p className="desc">
          Built an ASP.NET/SQL Server website and help system; used C# to link related generated documents.
        </p>

        <h3 className="role">
          Web Developer · OneTravel.com · 1999/01–2000/01
        </h3>
        <p className="desc">
          Built air, car, and hotel booking functionality using ColdFusion and SQL Server.
        </p>
      </section>

      <section>
        <h2 className="section">Skills</h2>
        <p className="skills-row">
          <span className="skills-label">Languages:</span> TypeScript, Python, Rust, JavaScript
        </p>
        <p className="skills-row">
          <span className="skills-label">AI / Agents:</span> Claude Code, Cursor, MCP servers, OpenAI
          SDK, Anthropic SDK, agent infrastructure, RAG
        </p>
        <p className="skills-row">
          <span className="skills-label">Stack:</span> Next.js 16, React 19, NestJS, React Native,
          Node.js, Convex, PostgreSQL, Redis
        </p>
        <p className="skills-row">
          <span className="skills-label">Infrastructure / Ops:</span> Railway, Docker, Cloudflare,
          Sentry, PostHog, Stripe, Resend
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
