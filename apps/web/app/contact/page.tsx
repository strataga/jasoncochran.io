import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'
import { Mail, Linkedin, MapPin, Clock, Youtube } from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a
            href="mailto:me@jasoncochran.io"
            className="card-pop p-6 text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--pop-red)] border-4 border-[var(--pop-black)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-[var(--pop-white)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>EMAIL</h3>
            <p className="text-sm text-[var(--text-secondary)] break-all" style={{ fontFamily: 'var(--font-mono)' }}>me@jasoncochran.io</p>
          </a>

          <a
            href="https://www.youtube.com/@jcochranio"
            target="_blank"
            rel="noopener noreferrer"
            className="card-pop p-6 text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--pop-yellow)] border-4 border-[var(--pop-black)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8 text-[var(--pop-black)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>YOUTUBE</h3>
            <p className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)' }}>@jcochranio</p>
          </a>

          <a
            href="https://www.linkedin.com/in/cochranjason/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-pop p-6 text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--pop-blue)] border-4 border-[var(--pop-black)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-[var(--pop-white)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>LINKEDIN</h3>
            <p className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)' }}>/in/cochranjason</p>
          </a>

          <a
            href="https://x.com/jcochranio"
            target="_blank"
            rel="noopener noreferrer"
            className="card-pop p-6 text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--pop-black)] border-4 border-[var(--pop-black)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <XIcon className="w-8 h-8 text-[var(--pop-white)]" />
            </div>
            <h3 className="font-bold text-[var(--pop-black)] mb-2" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>X</h3>
            <p className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)' }}>@jcochranio</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="card-pop p-8 md:p-12 mb-16">
          <div className="mb-8">
            <h2 className="text-3xl text-[var(--pop-black)] mb-3" style={{ fontFamily: 'var(--font-headline)' }}>
              SEND A MESSAGE
            </h2>
            <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
              Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Location & Availability */}
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
            <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>Open to new opportunities</p>
            <p className="text-sm text-[var(--text-muted)] mt-2" style={{ fontFamily: 'var(--font-mono)' }}>Consulting & full-time roles</p>
          </div>
        </div>
      </div>
    </div>
  )
}
