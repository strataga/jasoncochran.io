import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'
import { SOCIAL_LINKS } from '@/lib/social'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jason Cochran. Available for AI development consulting, automation projects, and software engineering opportunities.',
  openGraph: {
    title: 'Contact Jason Cochran',
    description: 'Get in touch for AI development, automation projects, or software engineering opportunities',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-header text-5xl md:text-6xl mb-6 mx-auto">
            LET'S WORK TOGETHER
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Looking for AI-Powered Software Development, automation solutions, or rapid MVP delivery?
            Let's build something exceptional together.
          </p>
        </div>

        {/* Direct Contact Options - temporarily hidden
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card-pop p-6 text-center h-full">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--pop-red)] border-4 border-[var(--pop-black)] flex items-center justify-center">
              <Mail className="w-8 h-8 text-[var(--pop-white)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>
              Email Jason directly
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              Fastest way to reach me. I respond within one business day.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-pop btn-pop-primary w-full justify-center"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="card-pop p-6 text-center h-full">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--pop-yellow)] border-4 border-[var(--pop-black)] flex items-center justify-center">
              <CalendarClock className="w-8 h-8 text-[var(--pop-black)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>
              Book a call
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              Grab a 25-minute intro to align on scope, timelines, and budget.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop btn-pop-secondary w-full justify-center"
            >
              Open Calendly
            </a>
          </div>

          <div className="card-pop p-6 text-center h-full">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--pop-blue)] border-4 border-[var(--pop-black)] flex items-center justify-center">
              <Clock className="w-8 h-8 text-[var(--pop-white)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>
              Response & Location
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              {CONTACT_LOCATION} · Available for remote work and US-friendly hours.
            </p>
            <div className="inline-flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
              <MapPin className="w-4 h-4" />
              <span>{CONTACT_LOCATION}</span>
            </div>
          </div>
        </div>
        */}

        <div className="card-pop p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>
                Connect on socials
              </h3>
              <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                Same handles everywhere—X, LinkedIn, and YouTube.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-[var(--pop-black)] text-white border-2 border-[var(--pop-black)] hover:-translate-y-0.5 transition-transform"
                    aria-label={`Visit Jason Cochran on ${link.label}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.handle || link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-pop p-8 md:p-12 mb-16">
          <div className="mb-8 space-y-3">
            <h2 className="text-3xl text-[var(--pop-black)]" style={{ fontFamily: 'var(--font-headline)' }}>
              Send a quick brief
            </h2>
            <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
              Share a few lines about what you need—AI workflows, a rapid MVP, or platform upgrades. I
              respond within one business day.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Location & Availability - temporarily hidden
        <div className="grid md:grid-cols-2 gap-8">
          <div className="stat-pop">
            <div className="w-12 h-12 mx-auto mb-4 bg-[var(--pop-red)] border-3 border-[var(--pop-black)] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[var(--pop-white)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem' }}>LOCATION</h3>
            <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>Midland, Texas</p>
            <p className="text-sm text-[var(--text-muted)] mt-2" style={{ fontFamily: 'var(--font-mono)' }}>Open to remote opportunities</p>
          </div>

          <div className="stat-pop">
            <div className="w-12 h-12 mx-auto mb-4 bg-[var(--pop-yellow)] border-3 border-[var(--pop-black)] flex items-center justify-center">
              <Clock className="w-6 h-6 text-[var(--pop-black)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem' }}>AVAILABILITY</h3>
            <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>Open to new build sprints and advisory</p>
            <p className="text-sm text-[var(--text-muted)] mt-2" style={{ fontFamily: 'var(--font-mono)' }}>Email for project inquiries</p>
          </div>
        </div>
        */}
      </div>
    </div>
  )
}
