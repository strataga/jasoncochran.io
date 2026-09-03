import { ArrowRight } from 'lucide-react'

const stages = [
  {
    number: '01',
    title: 'Outcome',
    description: 'Define the useful result and the constraints that are real today.',
  },
  {
    number: '02',
    title: 'Boundaries',
    description: 'Put responsibility into contracts, code, data rules, tests, and ownership.',
  },
  {
    number: '03',
    title: 'Delivery',
    description: 'Build enough to expose assumptions and learn from implementation.',
  },
  {
    number: '04',
    title: 'Operations',
    description: 'Design for security, observability, failure, recovery, and handoff.',
  },
  {
    number: '05',
    title: 'Learning',
    description: 'Use production evidence to revisit the outcome and improve the design.',
  },
]

export function ArchitectureAccountabilityLoop() {
  return (
    <figure
      className="not-prose my-14 overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-lg)]"
      aria-labelledby="accountability-loop-title"
    >
      <div className="bg-hero-bg px-5 py-6 text-hero-foreground sm:px-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Working model
        </p>
        <h2 id="accountability-loop-title" className="text-2xl tracking-tight sm:text-3xl">
          The architecture accountability loop
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-hero-muted sm:text-base">
          Architecture stays useful when decisions remain connected to delivery evidence and
          operational reality.
        </p>
      </div>

      <ol
        className="grid gap-0 p-5 sm:p-8 lg:grid-cols-5"
        aria-label="Five-stage architecture loop"
      >
        {stages.map((stage, index) => (
          <li
            key={stage.title}
            className="relative border-b border-border py-5 last:border-b-0 lg:border-r lg:border-b-0 lg:px-5 lg:py-2 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs text-primary">{stage.number}</span>
              {index < stages.length - 1 ? (
                <ArrowRight
                  className="h-4 w-4 rotate-90 text-muted-foreground lg:rotate-0"
                  aria-hidden="true"
                />
              ) : (
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Repeat
                </span>
              )}
            </div>
            <h3 className="text-base text-foreground">{stage.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.description}</p>
          </li>
        ))}
      </ol>

      <figcaption className="border-t border-border bg-muted/60 px-5 py-4 text-sm leading-6 text-muted-foreground sm:px-8">
        The loop is deliberate: operational evidence changes what we know, so it should influence
        the next business and architecture decision.
      </figcaption>
    </figure>
  )
}
