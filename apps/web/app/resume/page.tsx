import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const canonicalUrl = 'https://jasoncochran.io/resume'
const pageTitle = 'Senior Software Engineer Resume and Cover Letter'
const pageDescription =
  'Jason Cochran is a Senior Software Engineer with 28 years of experience building enterprise, web, mobile, and cloud software, with practical, hands-on AI experience.'

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
        alt: 'Jason Cochran · Senior Software Engineer · Practical, hands-on AI experience',
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
  name: 'Jason Cochran senior software engineer resume and cover letter',
  url: canonicalUrl,
  mainEntity: {
    '@type': 'Person',
    name: 'Jason Cochran',
    jobTitle: 'Senior Software Engineer',
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
    sameAs: ['https://www.linkedin.com/in/cochranjason/', 'https://github.com/strataga'],
  },
}

const experience = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'Servant',
    location: 'Remote',
    dates: 'February 2025 – September 2025',
    highlights: [
      'Delivered an enterprise onboarding flow with NestJS, Next.js, Prisma, React Query, PostgreSQL, and AWS-hosted services.',
      'Owned the production migration from the legacy path, then completed documentation and operational handoff.',
    ],
  },
  {
    role: 'Senior React Native Developer',
    company: 'Nutrien',
    location: 'Remote',
    dates: 'September 2023 – February 2024',
    highlights: [
      'Built cross-platform iOS and Android features for field representatives in agriculture operations.',
      'Delivered offline-first data collection and workflow screens that synchronized when connectivity returned.',
    ],
  },
  {
    role: 'Senior Software Engineer / Consultant',
    company: 'TxMQ',
    location: 'Remote',
    dates: 'August 2022 – July 2023',
    highlights: [
      'Delivered production features across AngularJS and Ionic client applications.',
      'Led an OpenAI research initiative, prototyped LLM-assisted tools, and presented adoption options to technical leadership.',
    ],
  },
  {
    role: 'Senior Mobile Developer',
    company: 'Verizon',
    location: 'Remote',
    dates: 'November 2021 – August 2022',
    highlights: [
      'Delivered the AMC Walking Dead NFT experience through a custom blockchain and JavaScript SDK integration in the Verizon mobile application.',
      'Created a reusable integration boundary and documented the SDK handoff for downstream teams.',
    ],
  },
  {
    role: 'Web/Mobile Solutions Architect',
    company: 'Self-employed',
    location: 'Remote',
    dates: 'February 2015 – November 2021',
    highlights: [
      'Delivered varied client projects spanning custom websites, SaaS applications, and mobile solutions.',
      'Worked directly with clients to define workflows, choose practical architecture, build software, and support delivery.',
    ],
  },
  {
    role: 'Lead Web/Mobile Developer',
    company: 'Key Energy Services',
    location: 'Texas',
    dates: 'May 2012 – April 2015',
    highlights: [
      'Built ERP software with Ruby on Rails, Meteor, and Backbone, including a Rails API and an offline user interface.',
      'Used Jenkins for continuous integration.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Warren Equipment Company',
    location: 'Texas',
    dates: 'February 2011 – February 2012',
    highlights: [
      'Developed internal corporate websites using ASP.NET, jQuery, HTML, and CSS.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Enertia Software',
    location: 'Texas',
    dates: 'November 2007 – February 2011',
    highlights: [
      'Developed an ASP.NET (VB.NET) and SQL Server website and help system.',
      'Used C# regular expressions to link related documents in generated static content.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'OneTravel.com',
    location: 'Remote',
    dates: 'January 1999 – January 2000',
    highlights: [
      'Built air, car, and hotel booking functionality using ColdFusion and SQL Server.',
    ],
  },
]

const engineeringStrengths = [
  'TypeScript, React, Next.js, Node.js, NestJS, React Native, and PostgreSQL',
  'Practical AI prototyping and AI-assisted development with Claude Code, Cursor, and MCP',
  'Architecture discovery and business-to-technical translation',
  'Application architecture, domain-driven design, APIs, and system boundaries',
  'Enterprise modernization, migrations, CI/CD, observability, and runbooks',
  'AWS-hosted delivery, Azure foundations, CloudFormation, and infrastructure as code',
]

export default function ResumePage() {
  return (
    <>
      <script
        id="jsonld-resume"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <article className="min-h-screen bg-background">
        <header className="border-b border-border bg-hero-bg py-14 text-hero-foreground lg:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Cover letter and résumé
            </p>
            <h1 className="mb-4 text-4xl tracking-tight sm:text-5xl lg:text-6xl">Jason Cochran</h1>
            <p className="mb-2 max-w-[760px] text-xl font-semibold leading-relaxed text-hero-foreground">
              Senior Software Engineer
            </p>
            <p className="mb-7 max-w-[760px] text-sm font-semibold uppercase tracking-[0.1em] text-primary sm:text-base">
              Practical, hands-on AI experience
            </p>

            <address className="mb-7 flex max-w-[920px] flex-wrap gap-x-5 gap-y-3 text-sm not-italic text-hero-muted">
              <span className="font-semibold text-hero-foreground">Midland, Texas</span>
              <a className="hover:text-white hover:underline" href="tel:+14322607580">
                (432) 260-7580
              </a>
              <a className="hover:text-white hover:underline" href="mailto:jlcochran2013@gmail.com">
                jlcochran2013@gmail.com
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://www.linkedin.com/in/cochranjason/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/cochranjason
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://github.com/strataga"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/strataga
              </a>
              <a className="hover:text-white hover:underline" href="https://jasoncochran.io">
                jasoncochran.io
              </a>
            </address>

            <Button
              asChild
              className="no-print h-auto min-h-11 whitespace-normal text-center bg-primary px-6 py-2 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <a href="/jason-cochran-architect-application.pdf" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download cover letter and résumé (PDF)
              </a>
            </Button>
          </div>
        </header>

        <div className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <section
            aria-labelledby="cover-letter-heading"
            className="mb-16 border-b border-border pb-16"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Introduction
            </p>
            <h2 id="cover-letter-heading" className="mb-8 text-3xl tracking-tight">
              Cover letter
            </h2>
            <div className="max-w-[820px] space-y-5 text-[1.05rem] leading-8 text-muted-foreground">
              <p className="font-medium text-foreground">Dear Hiring Team,</p>
              <p>
                I am looking for a senior software engineering role where I can learn how a business
                operates, make the important tradeoffs clear, and stay close enough to
                implementation that the software works in production.
              </p>
              <p>
                I bring 28 years of software engineering experience across enterprise web, mobile,
                cloud, integration, architecture, and production delivery. At Key Energy Services, I
                built ERP software with Ruby on Rails, Meteor, and Backbone, including a Rails API
                and an offline user interface, while remaining hands-on with delivery.
              </p>
              <p>
                More recently at Servant, I delivered a NestJS and Next.js onboarding platform,
                moved production traffic from the legacy path, and completed the documentation and
                operational handoff. At Nutrien, I built offline-first React Native workflows for
                field representatives. At TxMQ, I delivered AngularJS and Ionic features and led an
                OpenAI research initiative as a distinct prototype and research track. At Verizon, I
                built a custom blockchain and JavaScript SDK integration for the AMC Walking Dead
                NFT experience.
              </p>
              <p>
                My practical AI experience includes the TxMQ OpenAI research and prototypes,
                building the archived OpenClaw VPS personal project (no longer online), and using
                Claude Code, Cursor, and MCP servers throughout development. These projects and
                tools complement my production engineering background.
              </p>
              <p>
                From February 2015 to November 2021, my work as a self-employed Web/Mobile Solutions
                Architect included varied client projects spanning custom websites, SaaS
                applications, and mobile solutions. I worked directly with clients to understand the
                workflow, choose a practical architecture, build the software, communicate
                tradeoffs, and leave behind a maintainable handoff.
              </p>
              <p>
                I continue to learn through personal projects. I built OpenClaw VPS as a hosted
                control platform that let users provision and manage an OpenClaw AI assistant
                through a web dashboard. It was built with Bun, Next.js, React, TypeScript, and
                Convex and included authentication, billing, infrastructure provisioning,
                operational documentation, and automated quality checks. Work like this lets me test
                ideas across product, platform, security, and operations instead of staying inside
                one layer of the stack.
              </p>
              <p>
                I bring a calm, hands-on engineering style. I can lead discovery, write the design,
                review the implementation, troubleshoot production issues, mentor engineers, and
                update the runbook afterward. My goal is architecture that helps people make better
                decisions and deliver dependable software—not an approval process that slows them
                down.
              </p>
              <p>
                I would welcome a conversation about the problems your team is solving and where my
                experience can help.
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
                  <h3 id="profile-heading" className="mb-3 text-xl">
                    Profile
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Senior software engineer with 28 years of experience translating business
                    workflows into maintainable enterprise applications. Builds web and mobile
                    products, integrations, cloud-hosted systems, and practical AI prototypes while
                    staying close to the code.
                  </p>
                </section>

                <section aria-labelledby="ai-experience-heading">
                  <h3 id="ai-experience-heading" className="mb-3 text-xl">
                    AI experience
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    At TxMQ, led OpenAI research and prototyped LLM-assisted tools as a distinct
                    research track alongside production AngularJS and Ionic feature delivery. Built
                    the archived OpenClaw VPS personal project, which is no longer online. Uses
                    Claude Code, Cursor, and MCP servers throughout development.
                  </p>
                </section>

                <section aria-labelledby="strengths-heading">
                  <h3 id="strengths-heading" className="mb-3 text-xl">
                    Engineering strengths
                  </h3>
                  <ul className="space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                    {engineeringStrengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                </section>

                <section aria-labelledby="credentials-heading">
                  <h3 id="credentials-heading" className="mb-3 text-xl">
                    Credentials
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
                    <li>Microsoft Certified: Azure AI Fundamentals (AI-900)</li>
                  </ul>
                </section>

                <section aria-labelledby="working-style-heading">
                  <h3 id="working-style-heading" className="mb-3 text-xl">
                    How I work
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Start with the real workflow. Make boundaries and tradeoffs explicit. Stay close
                    to implementation, testing, delivery, documentation, and the people who will
                    operate the result.
                  </p>
                </section>
              </aside>

              <div>
                <section aria-labelledby="career-heading">
                  <h3 id="career-heading" className="mb-6 text-xl">
                    Career history
                  </h3>
                  <div className="space-y-8">
                    {experience.map((entry) => (
                      <article
                        key={`${entry.company}-${entry.dates}`}
                        className="border-l-2 border-border pl-5"
                      >
                        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                          <h4 className="text-base leading-snug">
                            {entry.role} · {entry.company}
                            {entry.location ? ` · ${entry.location}` : ''}
                          </h4>
                          <p className="shrink-0 text-sm font-semibold text-primary">
                            {entry.dates}
                          </p>
                        </div>
                        <ul className="space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                          {entry.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>

                <section
                  aria-labelledby="project-heading"
                  className="mt-10 rounded-lg border border-border bg-white p-6"
                >
                  <h3 id="project-heading" className="mb-2 text-xl">
                    OpenClaw VPS · Archived personal project
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Built a hosted control platform that let users provision and manage an OpenClaw
                    AI assistant through a web dashboard. It was built with Bun, Next.js, React,
                    TypeScript, and Convex and included authentication, billing, infrastructure
                    provisioning, documentation, and automated quality checks. The project is no
                    longer online.
                  </p>
                  <Link
                    className="no-print mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    href="/projects/openclaw-vps"
                  >
                    Read the OpenClaw VPS project story
                  </Link>
                </section>

                <section aria-labelledby="foundation-heading" className="mt-10">
                  <h3 id="foundation-heading" className="mb-3 text-xl">
                    Technical foundation
                  </h3>
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

          <section
            className="no-print mt-16 border-t border-border pt-10"
            aria-labelledby="next-step-heading"
          >
            <h2 id="next-step-heading" className="mb-3 text-2xl">
              Let&apos;s talk about the work
            </h2>
            <p className="mb-6 max-w-[700px] leading-relaxed text-muted-foreground">
              If your team needs a senior software engineer who can connect business needs,
              technical decisions, and hands-on delivery, I would welcome a conversation about the
              work.
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
