import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Download, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const canonicalUrl = 'https://jasoncochran.io/resume'
const pageTitle = 'Software Architect Resume and Cover Letter'
const pageDescription =
  'Jason Cochran is a hands-on Software Architect with 28 years of experience across enterprise applications, integrations, mobile, cloud, and applied AI.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'profile',
    url: canonicalUrl,
    title: `${pageTitle} | Jason Cochran`,
    description: pageDescription,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jason Cochran · Hands-On Software Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | Jason Cochran`,
    description: pageDescription,
    images: ['/opengraph-image'],
  },
}

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Jason Cochran software architect resume and cover letter',
  url: canonicalUrl,
  mainEntity: {
    '@type': 'Person',
    name: 'Jason Cochran',
    jobTitle: 'Software Architect',
    description: pageDescription,
    url: 'https://jasoncochran.io',
    email: 'mailto:jlcochran2013@gmail.com',
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
  },
}

const experience = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Servant',
    location: 'Remote',
    dates: '2025/02–2025/09',
    highlights: [
      'Delivered an enterprise onboarding flow with NestJS, Next.js, Prisma, React Query, PostgreSQL, and AWS-hosted services.',
      'Owned the production migration from the legacy path, then completed documentation and operational handoff.',
    ],
  },
  {
    role: 'Senior React Native Engineer',
    company: 'Nutrien',
    location: 'Remote',
    dates: '2023/09–2024/02',
    highlights: [
      'Built cross-platform iOS and Android features for field representatives in agriculture operations.',
      'Delivered offline-first data collection and workflow screens that synchronized when connectivity returned.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'TxMQ',
    location: 'Remote',
    dates: '2022/10–2023/06',
    highlights: [
      'Delivered production features across AngularJS and Ionic client applications.',
      'Led an OpenAI research initiative, prototyped LLM-assisted tools, and presented adoption options to technical leadership.',
    ],
  },
  {
    role: 'Senior Mobile Engineer',
    company: 'Verizon',
    location: 'Remote',
    dates: '2021/10–2022/11',
    highlights: [
      'Delivered the AMC Walking Dead NFT experience through a custom blockchain and JavaScript SDK integration in the Verizon mobile application.',
      'Created a reusable integration boundary and documented the SDK handoff for downstream teams.',
    ],
  },
  {
    role: 'Solutions Architect',
    company: 'Self-Employed',
    location: 'Midland / Remote',
    dates: '2015–2021',
    highlights: [
      'Delivered more than 30 projects across oil and gas, travel, and enterprise environments, including Key Energy, Warren Equipment, Enertia, and OneTravel.com.',
      'Carried engagements through discovery, architecture, implementation, support, documentation, mentoring, and handoff.',
    ],
  },
  {
    role: 'Lead Web/Mobile Developer',
    company: 'Key Energy',
    location: 'Texas',
    dates: '2012/05–2015/04',
    highlights: [
      'Led a six-person team building and supporting mobile and web-based oil-and-gas ERP software with Ruby on Rails.',
      'Stayed hands-on by setting direction, removing blockers, reviewing integrations, and writing code alongside the team.',
    ],
  },
  {
    role: 'Earlier Software Engineering Career',
    company: 'Enterprise / Client Delivery',
    location: '',
    dates: '1998–2015',
    highlights: [
      'Built the foundation of a 28-year career across OneTravel.com, independent consulting, Enertia Software, and Warren Equipment.',
      'Progressed from implementation into senior engineering, architecture, technical leadership, and client-facing delivery.',
    ],
  },
]

const architectureStrengths = [
  'Architecture discovery and business-to-technical translation',
  'Application architecture, domain-driven design, APIs, and system boundaries',
  'Enterprise modernization, migrations, CI/CD, observability, and runbooks',
  'TypeScript, React, Next.js, Node.js, NestJS, React Native, and PostgreSQL',
  'AWS-hosted delivery, Azure foundations, CloudFormation, and infrastructure as code',
  'Applied AI with evaluation, privacy, cost, and human approval controls',
]

export default function ResumePage() {
  return (
    <>
      <Script id="jsonld-resume" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(profileJsonLd)}
      </Script>

      <article className="min-h-screen bg-background">
        <header className="border-b border-border bg-hero-bg py-14 text-hero-foreground lg:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Cover letter and résumé
            </p>
            <h1 className="mb-4 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Jason Cochran
            </h1>
            <p className="mb-2 max-w-[760px] text-xl font-semibold leading-relaxed text-hero-foreground">
              Hands-On Software Architect
            </p>
            <p className="mb-7 max-w-[760px] text-sm font-semibold uppercase tracking-[0.1em] text-primary sm:text-base">
              Enterprise Applications · Integrations · Mobile · Cloud · Applied AI
            </p>

            <address className="mb-7 flex max-w-[920px] flex-wrap gap-x-5 gap-y-3 text-sm not-italic text-hero-muted">
              <span className="font-semibold text-hero-foreground">Midland, Texas</span>
              <a className="hover:text-white hover:underline" href="tel:+14322607580">
                (432) 260-7580
              </a>
              <a className="hover:text-white hover:underline" href="mailto:jlcochran2013@gmail.com">
                jlcochran2013@gmail.com
              </a>
              <a className="hover:text-white hover:underline" href="https://www.linkedin.com/in/cochranjason/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/cochranjason
              </a>
              <a className="hover:text-white hover:underline" href="https://github.com/strataga" target="_blank" rel="noopener noreferrer">
                github.com/strataga
              </a>
              <a className="hover:text-white hover:underline" href="https://jasoncochran.io">
                jasoncochran.io
              </a>
            </address>

            <Button asChild className="no-print h-11 bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90">
              <a href="/jason-cochran-architect-application.pdf" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download cover letter and résumé (PDF)
              </a>
            </Button>
          </div>
        </header>

        <div className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <section aria-labelledby="cover-letter-heading" className="mb-16 border-b border-border pb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Introduction
            </p>
            <h2 id="cover-letter-heading" className="mb-8 text-3xl tracking-tight">
              Cover letter
            </h2>
            <div className="max-w-[820px] space-y-5 text-[1.05rem] leading-8 text-muted-foreground">
              <p className="font-medium text-foreground">Dear Hiring Team,</p>
              <p>
                I am looking for the kind of architecture role where the work does not stop at a
                diagram. I enjoy learning how a business operates, making the important tradeoffs
                clear, and staying close enough to implementation that the architecture works in
                production.
              </p>
              <p>
                I bring 28 years of software engineering experience across enterprise web,
                mobile, cloud, integration, architecture, and production delivery. At Key Energy,
                I led a six-person team building and supporting mobile and web-based oil-and-gas
                ERP software with Ruby on Rails while remaining hands-on. That work called for
                practical decisions about field connectivity, operational data, system
                integration, and software used across the organization.
              </p>
              <p>
                More recently at Servant, I delivered a NestJS and Next.js onboarding platform,
                moved production traffic from the legacy path, and completed the documentation
                and operational handoff. At Nutrien, I built offline-first React Native workflows
                for field representatives. At TxMQ, I delivered AngularJS and Ionic features and
                led an OpenAI research initiative. At Verizon, I built a custom blockchain and
                JavaScript SDK integration for the AMC Walking Dead NFT experience.
              </p>
              <p>
                From 2015 to 2021, my work as a self-employed Solutions Architect included more
                than 30 projects across oil and gas, travel, and enterprise environments. I worked
                directly with clients to understand the workflow, choose a practical architecture,
                build the software, communicate tradeoffs, and leave behind a maintainable handoff.
              </p>
              <p>
                I continue to learn through personal projects. I built OpenClaw VPS as a hosted
                control platform that let users provision and manage an OpenClaw AI assistant
                through a web dashboard. It was built with Bun, Next.js, React, TypeScript, and
                Convex and included authentication, billing, infrastructure provisioning,
                operational documentation, and automated quality checks. Work like this lets me
                test ideas across product, platform, security, and operations instead of staying
                inside one layer of the stack.
              </p>
              <p>
                I bring a calm, hands-on architecture style. I can lead discovery, write the
                design, review the implementation, troubleshoot production issues, mentor
                engineers, and update the runbook afterward. My goal is architecture that helps
                people make better decisions and deliver dependable software—not an approval
                process that slows them down.
              </p>
              <p>
                I would welcome a conversation about the problems your team is solving and where
                my experience can help.
              </p>
              <p className="pt-2 text-foreground">
                Sincerely,
                <br />
                <strong>Jason Cochran</strong>
              </p>
            </div>
          </section>

          <section aria-labelledby="resume-heading" className="resume-document">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Experience and capabilities
            </p>
            <h2 id="resume-heading" className="mb-8 text-3xl tracking-tight">
              Résumé
            </h2>

            <div className="grid gap-12 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,2fr)]">
              <aside className="space-y-10">
                <section aria-labelledby="profile-heading">
                  <h3 id="profile-heading" className="mb-3 text-xl">Profile</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Hands-on software architect with 28 years of experience
                    translating business workflows into secure, maintainable enterprise
                    applications. Leads discovery, system design, web and mobile delivery,
                    integrations, modernization, migration, and technical handoff while staying
                    close to the code.
                  </p>
                </section>

                <section aria-labelledby="strengths-heading">
                  <h3 id="strengths-heading" className="mb-3 text-xl">Architecture strengths</h3>
                  <ul className="space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                    {architectureStrengths.map((strength) => <li key={strength}>{strength}</li>)}
                  </ul>
                </section>

                <section aria-labelledby="credentials-heading">
                  <h3 id="credentials-heading" className="mb-3 text-xl">Credentials</h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
                    <li>Microsoft Certified: Azure AI Fundamentals (AI-900)</li>
                  </ul>
                </section>

                <section aria-labelledby="working-style-heading">
                  <h3 id="working-style-heading" className="mb-3 text-xl">How I work</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Start with the real workflow. Make boundaries and tradeoffs explicit. Stay
                    close to implementation, testing, delivery, documentation, and the people who
                    will operate the result.
                  </p>
                </section>
              </aside>

              <div>
                <section aria-labelledby="career-heading">
                  <h3 id="career-heading" className="mb-6 text-xl">Career history</h3>
                  <div className="space-y-8">
                    {experience.map((entry) => (
                      <article key={`${entry.company}-${entry.dates}`} className="border-l-2 border-border pl-5">
                        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                          <h4 className="text-base leading-snug">
                            {entry.role} · {entry.company}{entry.location ? ` · ${entry.location}` : ''}
                          </h4>
                          <p className="shrink-0 text-sm font-semibold text-primary">{entry.dates}</p>
                        </div>
                        <ul className="space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                          {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="project-heading" className="mt-10 rounded-lg border border-border bg-white p-6">
                  <h3 id="project-heading" className="mb-2 text-xl">OpenClaw VPS · Personal project</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Built a hosted control platform that let users provision and manage an
                    OpenClaw AI assistant through a web dashboard. It was built with Bun, Next.js,
                    React, TypeScript, and Convex and included authentication, billing,
                    infrastructure provisioning, documentation, and automated quality checks.
                  </p>
                  <Link className="no-print mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline" href="/projects/openclaw-vps">
                    Read the OpenClaw VPS project story
                  </Link>
                </section>

                <section aria-labelledby="foundation-heading" className="mt-10">
                  <h3 id="foundation-heading" className="mb-3 text-xl">Technical foundation</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    TypeScript, JavaScript, React, Next.js, React Native, Node.js, NestJS, Ruby on
                    Rails, C#, SQL, PostgreSQL, REST APIs, AWS-hosted delivery, Azure foundations,
                    CloudFormation and infrastructure as code, Git, CI/CD, testing, observability,
                    security, production troubleshooting, documentation, and mentoring.
                  </p>
                </section>
              </div>
            </div>
          </section>

          <section className="no-print mt-16 border-t border-border pt-10" aria-labelledby="next-step-heading">
            <h2 id="next-step-heading" className="mb-3 text-2xl">Let&apos;s talk about the work</h2>
            <p className="mb-6 max-w-[700px] leading-relaxed text-muted-foreground">
              If your team needs an architect who can connect business needs, technical decisions,
              and hands-on delivery, I would welcome a conversation about the work.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild>
                <a href="mailto:jlcochran2013@gmail.com">
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email Jason
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+14322607580">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call Jason
                </a>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
