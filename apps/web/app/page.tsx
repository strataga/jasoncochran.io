import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/ContactForm'
import { getAllBlogPosts } from '@/lib/blog'
import { featuredProjects, personJsonLd, profile, skillGroups } from '@/lib/profile'

export const metadata: Metadata = {
  title: { absolute: `${profile.name} · ${profile.title}` },
  description: profile.description,
  alternates: { canonical: 'https://jasoncochran.io' },
}

const selectedWork = [
  {
    company: 'TxMQ',
    context: 'Current contract · Part-time, as needed',
    title: 'Enterprise software & cloud delivery',
    description:
      'QConsole features in Java, Spring Boot, Angular, and PostgreSQL, plus Terraform provisioning, deployment options, and disaster-recovery readiness.',
  },
  {
    company: 'Servant',
    context: 'Contract · 2025',
    title: 'From legacy workflow to production',
    description:
      'Delivered a Next.js and NestJS onboarding flow, including authentication, data access, AWS integrations, migration, and operational handoff.',
  },
  {
    company: 'Big D Companies',
    context: 'Contract · 2024',
    title: 'A faster path through field operations',
    description:
      'Rebuilt a PHP-based ERP in Next.js, reducing load times and simplifying maintenance for an oil and gas services company.',
  },
]

const container = 'mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8'
const sectionLabel = 'mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary'

export default async function Home() {
  const posts = (await getAllBlogPosts()).slice(0, 3)
  return (
    <>
      <script
        id="jsonld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
      />
      <section
        id="top"
        className="scroll-mt-16 bg-hero-bg py-12 text-hero-foreground sm:py-16 lg:py-20"
      >
        <div className={`${container} grid items-center gap-10 lg:grid-cols-[1fr_240px]`}>
          <div className="max-w-[740px]">
            <p className="mb-4 text-sm font-semibold text-hero-accent">
              React · Next.js · TypeScript · Node.js
            </p>
            <h1 className="text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Senior Full Stack
              <br className="hidden sm:block" /> Developer
            </h1>
            <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-hero-muted">
              I’m Jason Cochran. I build web and mobile applications from the interface to the API,
              database, and cloud deployment.
            </p>
            <p className="mt-3 max-w-[650px] leading-relaxed text-hero-muted">
              Enterprise systems, SaaS products, and modernized workflows across energy, telecom,
              and consulting.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="h-11 px-5">
                <Link href="/#projects">
                  Explore my work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-slate-500 bg-transparent px-5 text-white hover:border-white hover:bg-white hover:text-slate-900"
              >
                <Link href="/resume">View resume</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-hero-muted">
              Midland, Texas · Open to full stack developer roles
            </p>
          </div>
          <Image
            src="/jason_cochran_photo.webp"
            alt="Jason Cochran"
            width={240}
            height={280}
            priority
            className="hidden aspect-[6/7] rounded-xl object-cover lg:block"
            sizes="240px"
          />
        </div>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="scroll-mt-20 py-12 lg:py-16"
      >
        <div className={container}>
          <p className={sectionLabel}>Personal portfolio</p>
          <h2 id="projects-heading" className="text-3xl tracking-tight sm:text-4xl">
            Built to be explored.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Two projects that bring product design, application development, and practical AI
            together.
          </p>
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block overflow-hidden border-b border-border bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1512}
                    height={828}
                    sizes="(min-width: 1200px) 552px, (min-width: 768px) 48vw, 100vw"
                    className="aspect-[1512/828] w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </p>
                  <h3 className="text-2xl tracking-tight">
                    <Link href={`/projects/${project.slug}`} className="hover:underline">
                      {project.name}
                    </Link>
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.detail}
                  </p>
                  <ul
                    className="mb-6 mt-5 flex flex-wrap gap-2"
                    aria-label={`${project.name} capabilities and technologies`}
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Button asChild variant="outline">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit {project.name}{' '}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </Button>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Read case study <span className="sr-only">for {project.name}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-heading"
        className="border-y border-border bg-white py-12 lg:py-16"
      >
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className={sectionLabel}>Selected client work</p>
              <h2 id="work-heading" className="text-3xl tracking-tight">
                Experience across the stack.
              </h2>
            </div>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Full experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {selectedWork.map((work) => (
              <article key={work.company} className="border-t-2 border-border pt-5">
                <p className="font-semibold">{work.company}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{work.context}</p>
                <h3 className="mt-5 text-xl leading-snug">{work.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 py-12 lg:py-16">
        <div className={`${container} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
          <div>
            <p className={sectionLabel}>How I work</p>
            <h2 id="about-heading" className="text-3xl leading-tight tracking-tight">
              From the first workflow
              <br />
              to the production handoff.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              I work across interfaces, services, and infrastructure, with an eye on how the
              software will be used and maintained. My background includes enterprise ERP systems,
              SaaS applications, mobile products, and approximately 40 independent client projects.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I’m based in Midland, Texas, and experienced in remote teams. My current TxMQ
              engagement is a part-time, as-needed contract.
            </p>
          </div>
          <dl className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="border-t border-border pt-4">
                <dt className="font-semibold">{group.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {group.skills}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="more-work-heading" className="border-y border-border py-10">
        <div className={container}>
          <h2 id="more-work-heading" className="text-xl tracking-tight">
            More projects & experiments
          </h2>
          <div className="mt-5 grid gap-6 text-sm md:grid-cols-3">
            <div>
              <Link
                className="font-semibold text-primary hover:underline"
                href="/projects/archgauge"
              >
                ArchGauge →
              </Link>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Architecture and production-readiness review tooling. In development.
              </p>
            </div>
            <div>
              <Link
                className="font-semibold text-primary hover:underline"
                href="/projects/openclaw-vps"
              >
                OpenClaw VPS →
              </Link>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                An archived AI operations experiment, with lessons from building and running it.
              </p>
            </div>
            <div>
              <p className="font-semibold">Fathomless: The Descent</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                A first-person, grid-based dungeon crawler. An indie game passion project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section aria-labelledby="writing-heading" className="py-12 lg:py-16">
          <div className={container}>
            <div className="flex items-end justify-between gap-4">
              <h2 id="writing-heading" className="text-2xl tracking-tight">
                Notes from the work
              </h2>
              <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
                All writing →
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="border-t border-border pt-5">
                  <p className="mb-3 text-xs text-muted-foreground">
                    {post.readingTimeMinutes} min read
                  </p>
                  <h3 className="text-lg leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-20 border-t border-border bg-white py-12 lg:py-16"
      >
        <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <p className={sectionLabel}>Get in touch</p>
            <h2 id="contact-heading" className="text-3xl tracking-tight">
              Let’s build something useful.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Hiring for a full stack role? Tell me about your team, product, and the problems you
              need to solve.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 break-all text-sm font-semibold text-primary hover:underline"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {profile.email}
            </a>
            <div className="mt-5 flex gap-5 text-sm">
              <a
                className="inline-flex items-center gap-2 hover:underline"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 hover:underline"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
            <p
              id="services"
              className="mt-9 scroll-mt-20 text-sm leading-relaxed text-muted-foreground"
            >
              Looking for architecture guidance or a system review?{' '}
              <Link href="/consulting" className="text-primary underline underline-offset-4">
                Explore consulting services.
              </Link>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <footer className="border-t border-border py-7">
        <div
          className={`${container} flex flex-wrap justify-between gap-4 text-sm text-muted-foreground`}
        >
          <p>© {new Date().getFullYear()} Jason Cochran · Midland, Texas</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/resume" className="hover:underline">
              Resume
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/consulting" className="hover:underline">
              Consulting
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
