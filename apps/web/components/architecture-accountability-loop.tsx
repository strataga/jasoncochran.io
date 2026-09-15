import { ArrowRight, Check, Circle } from 'lucide-react'

const stages = [
  {
    number: '01',
    title: 'Outcome',
    description: 'Name the result users need and the constraints the team must work within.',
  },
  {
    number: '02',
    title: 'Boundaries',
    description: 'Assign owners and enforce responsibilities through code, data rules, and tests.',
  },
  {
    number: '03',
    title: 'Delivery',
    description: 'Build a working slice that tests the assumptions behind the design.',
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
  const markerColors = [
    'bg-[#d8e7ef]',
    'bg-[#e5efd8]',
    'bg-[#f6e7ad]',
    'bg-[#ead9d4]',
    'bg-[#ddd9ec]',
  ]

  return (
    <figure
      className="not-prose my-14 overflow-hidden rounded-2xl border-2 border-slate-700 bg-[#fbf8ef] text-slate-900 shadow-[var(--shadow-lg)]"
      aria-labelledby="accountability-loop-title"
    >
      <div className="border-b-2 border-slate-700 px-5 py-6 sm:px-8 sm:py-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-red-700">
          Working model
        </p>
        <h2
          id="accountability-loop-title"
          className="text-2xl tracking-tight text-slate-950 sm:text-3xl"
        >
          The architecture accountability loop
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
          Use what you learn from building and running the system to improve the next design
          decision.
        </p>
      </div>

      <ol
        className="grid gap-3 border-b-2 border-slate-700 p-5 sm:p-8 lg:grid-cols-5"
        aria-label="Five-stage architecture loop"
      >
        {stages.map((stage, index) => (
          <li
            key={stage.title}
            className={`relative border-2 border-slate-700 p-4 shadow-[3px_3px_0_rgb(51_65_85_/_0.16)] ${markerColors[index]}`}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="inline-flex min-w-8 items-center justify-center rounded-full border border-slate-700 bg-[#fbf8ef] px-2 py-1 font-mono text-[0.68rem] font-semibold text-slate-800">
                {stage.number}
              </span>
              {index < stages.length - 1 ? (
                <ArrowRight
                  className="h-4 w-4 rotate-90 text-slate-600 lg:rotate-0"
                  aria-hidden="true"
                />
              ) : (
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-slate-600">
                  Repeat
                </span>
              )}
            </div>
            <h3 className="text-base text-slate-950">{stage.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{stage.description}</p>
          </li>
        ))}
      </ol>

      <div className="grid gap-px bg-slate-700 md:grid-cols-2">
        <section className="bg-[#fffdf7] px-5 py-6 sm:px-8">
          <h3 className="flex items-center gap-2 text-base font-semibold uppercase tracking-[0.06em] text-slate-950">
            <Circle className="h-4 w-4 fill-[#d8e7ef]" aria-hidden="true" />
            Evidence to collect
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              'A measurable business outcome',
              'Enforced boundaries and tested contracts',
              'Operational signals tied to user impact',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-[#fffdf7] px-5 py-6 sm:px-8">
          <h3 className="flex items-center gap-2 text-base font-semibold uppercase tracking-[0.06em] text-slate-950">
            <Circle className="h-4 w-4 fill-[#f6e7ad]" aria-hidden="true" />
            Revisit the decision when
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              'The running system contradicts an assumption',
              'The cost or risk crosses an agreed threshold',
              'A simpler design can meet the same requirements',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <figcaption className="border-t-2 border-slate-700 bg-[#f2ecdf] px-5 py-4 text-sm leading-6 text-slate-700 sm:px-8">
        <span className="mr-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-slate-950">
          Working principle
        </span>
        When the evidence changes, revisit the decision and record what the team learned.
      </figcaption>
    </figure>
  )
}
