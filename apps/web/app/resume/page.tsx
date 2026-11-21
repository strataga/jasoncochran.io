import type { Metadata } from 'next'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  earlierExperience,
  experience,
  featuredProjects,
  personJsonLd,
  profile,
  skillGroups,
} from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Senior Full Stack Developer Resume',
  description: profile.description,
  alternates: { canonical: 'https://jasoncochran.io/resume' },
  openGraph: {
    title: 'Jason Cochran · Senior Full Stack Developer Resume',
    description: profile.description,
    url: 'https://jasoncochran.io/resume',
    type: 'profile',
    images: ['/opengraph-image'],
  },
}

export default function ResumePage() {
  return (
    <article className="resume-page mx-auto max-w-[900px] px-5 py-12 sm:px-6 lg:py-16">
      <script
        id="jsonld-resume"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            url: 'https://jasoncochran.io/resume',
            mainEntity: personJsonLd,
          }).replace(/</g, '\\u003c'),
        }}
      />
      <header className="border-b border-border pb-8">
        <p className="no-print mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Resume
        </p>
        <h1 className="text-4xl tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-xl font-semibold">{profile.title}</p>
        <address className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm not-italic text-muted-foreground">
          <span>Midland, TX</span>
          <a href="tel:+14322607580" className="hover:underline">
            (432) 260-7580
          </a>
          <a href={`mailto:${profile.email}`} className="break-all hover:underline">
            {profile.email}
          </a>
          <a href={profile.linkedin} className="hover:underline">
            linkedin.com/in/cochranjason
          </a>
          <a href={profile.github} className="hover:underline">
            github.com/strataga
          </a>
        </address>
        <div className="no-print mt-6 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={profile.resumePdf} download>
              <Download aria-hidden="true" className="h-4 w-4" />
              Resume PDF
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={profile.resumeWord} download>
              Resume Word
            </a>
          </Button>
          <a
            href={profile.coverLetterPdf}
            download
            className="px-2 py-2 text-sm font-semibold text-primary hover:underline"
          >
            Cover letter PDF
          </a>
          <a
            href={profile.coverLetterWord}
            download
            className="px-2 py-2 text-sm text-primary hover:underline"
          >
            Cover letter Word
          </a>
        </div>
      </header>
      <section aria-labelledby="summary-heading" className="mt-8">
        <h2 id="summary-heading" className="text-xl tracking-tight">
          Professional summary
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{profile.summary}</p>
      </section>
      <section aria-labelledby="skills-heading" className="mt-8">
        <h2 id="skills-heading" className="text-xl tracking-tight">
          Technical skills
        </h2>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt className="inline font-semibold">{group.label}: </dt>
              <dd className="inline text-muted-foreground">{group.skills}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-labelledby="experience-heading" className="mt-9">
        <h2 id="experience-heading" className="mb-6 text-2xl tracking-tight">
          Professional experience
        </h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.dates}`}
              className="resume-job border-t border-border pt-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg">{job.company}</h3>
                <p className="text-sm text-muted-foreground">{job.dates}</p>
              </div>
              <p className="mt-1 font-semibold">{job.role}</p>
              {job.details && <p className="mt-1 text-sm text-muted-foreground">{job.details}</p>}
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="earlier-heading" className="mt-9">
        <h2 id="earlier-heading" className="text-xl tracking-tight">
          Earlier experience
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed">
          {earlierExperience.map((job) => (
            <li key={`${job.company}-${job.dates}`}>
              <p className="font-semibold">{job.company}</p>
              <p className="text-muted-foreground">
                {job.role} · {job.dates}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="portfolio-heading" className="mt-9">
        <h2 id="portfolio-heading" className="text-xl tracking-tight">
          Personal portfolio projects
        </h2>
        <div className="mt-4 space-y-6">
          {featuredProjects.map((project) => (
            <article key={project.slug}>
              <h3>
                <a className="text-primary underline underline-offset-4" href={project.url}>
                  {project.name}
                </a>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description} {project.detail}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="no-print mt-2 inline-block text-sm text-primary hover:underline"
              >
                Read the {project.name} case study →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="certifications-heading" className="mt-9">
        <h2 id="certifications-heading" className="text-xl tracking-tight">
          Certifications
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>Microsoft Certified: Azure Fundamentals (AZ-900) · Nov 2025</li>
          <li>Microsoft Certified: Azure AI Fundamentals (AI-900) · Nov 2025</li>
        </ul>
      </section>
    </article>
  )
}
