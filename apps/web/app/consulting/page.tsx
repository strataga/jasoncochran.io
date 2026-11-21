import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Software Architecture Consulting',
  description:
    'Architecture workshops, production-readiness reviews, and fractional software architecture with Jason Cochran.',
  alternates: { canonical: 'https://jasoncochran.io/consulting' },
}

const offerings = [
  {
    tag: 'Need a clear technical direction',
    title: 'Architecture Clarity Workshop',
    body: 'A focused working session for teams facing a hard architecture or delivery decision. We turn business goals, constraints, and risks into a practical technical direction.',
    price: '$750',
    deliverable: 'Written decision summary · tradeoffs · prioritized next steps',
  },
  {
    tag: 'Need an independent system review',
    title: 'Architecture & Production-Readiness Review',
    body: 'An evidence-based review of system boundaries, delivery risk, security, operability, and recovery. Findings distinguish facts from assumptions and point to concrete next steps.',
    price: 'Starting at $5,000',
    deliverable: 'Cited findings · risk priorities · remediation roadmap · executive readout',
  },
  {
    tag: 'Need ongoing architecture leadership',
    title: 'Fractional Software Architect',
    body: 'Ongoing architecture leadership for teams that need discovery, system design, delivery guidance, mentoring, and hands-on technical support without adding a full-time role.',
    price: 'Starting at $150/hour · 20-hour monthly minimum',
    deliverable: 'Architecture decisions · delivery guidance · reviews · hands-on support',
  },
]

export default function ConsultingPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Consulting
        </p>
        <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl">
          Clear decisions. Practical architecture.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I help teams understand their systems, work through technical tradeoffs, and prepare
          software for production. Choose a focused review or ongoing, hands-on support.
        </p>
      </header>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {offerings.map((offering) => (
          <article
            key={offering.title}
            className="flex flex-col rounded-xl border border-border bg-white p-6"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary">
              {offering.tag}
            </p>
            <h2 className="text-2xl leading-snug tracking-tight">{offering.title}</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{offering.body}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {offering.deliverable}
            </p>
            <p className="mb-6 mt-6 font-semibold">{offering.price}</p>
            <Button asChild className="mt-auto">
              <Link href="/#contact">Discuss your project</Link>
            </Button>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        Looking for a full stack developer for your team?{' '}
        <Link href="/resume" className="text-primary underline underline-offset-4">
          View my resume.
        </Link>
      </p>
    </div>
  )
}
