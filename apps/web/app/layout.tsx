import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import FloatingContact from '@/components/FloatingContact'
import { CONTACT_EMAIL, CONTACT_LOCATION, SOCIAL_LINKS } from '@/lib/social'

export const metadata: Metadata = {
  title: {
    default: 'Jason Cochran - Software Engineer and Consultant',
    template: '%s | Jason Cochran',
  },
  description:
    '28 years of experience building exceptional web and mobile applications. Expert in React, Next.js, Node.js, NestJS, and modern web technologies.',
  keywords: [
    'Software Engineer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'NestJS',
    'Software Engineer',
    'Web Development',
  ],
  authors: [{ name: 'Jason Cochran' }],
  creator: 'Jason Cochran',
  metadataBase: new URL('https://jasoncochran.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jasoncochran.io',
    title: 'Jason Cochran - Software Engineer and Consultant',
    description: '28 years of experience building exceptional web and mobile applications',
    siteName: 'Jason Cochran Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jason Cochran - Software Engineer & AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran - Software Engineer and Consultant',
    description: '28 years of experience building exceptional web and mobile applications',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <FloatingContact />
        <main className="min-h-screen">{children}</main>
        <footer>
          {/* CTA Section */}
          <div
            className="py-16 text-center"
            style={{
              background: 'var(--pop-red)',
              borderTop: '6px solid var(--pop-black)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <h2
                className="text-3xl md:text-4xl mb-6 text-white"
                style={{ fontFamily: 'var(--font-headline)', textTransform: 'uppercase' }}
              >
                Ready to Build Something Amazing?
              </h2>
              <p
                className="text-lg mb-8 text-white opacity-90 max-w-2xl mx-auto"
                style={{ lineHeight: 1.6 }}
              >
                Whether you need a rapid MVP, enterprise automation, or AI-powered development
                workflows, I deliver production-ready solutions in weeks, not months. Let&apos;s turn
                your vision into reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 font-bold uppercase tracking-wide transition-all"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    background: 'var(--pop-yellow)',
                    color: 'var(--pop-black)',
                    border: '3px solid var(--pop-black)',
                    boxShadow: '4px 4px 0 var(--pop-black)',
                  }}
                >
                  Schedule Consultation
                </a>
                <a
                  href="/projects"
                  className="px-6 py-3 font-bold uppercase tracking-wide transition-all"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    background: 'var(--pop-yellow)',
                    color: 'var(--pop-black)',
                    border: '3px solid var(--pop-black)',
                    boxShadow: '4px 4px 0 var(--pop-black)',
                  }}
                >
                  View My Work
                </a>
              </div>
              <div
                className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.9)' }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--pop-black)] text-white border border-[var(--pop-yellow)]">
                  {CONTACT_EMAIL}
                  <span className="opacity-70">·</span>
                  {CONTACT_LOCATION}
                </span>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.key}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[var(--pop-black)] border-2 border-[var(--pop-black)] hover:-translate-y-0.5 transition-transform"
                        aria-label={`Visit Jason Cochran on ${link.label}`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{link.handle || link.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer */}
          <div
            style={{
              background: 'var(--pop-black)',
              color: 'var(--pop-white)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Column 1 - About */}
                <div>
                  <h3
                    className="text-2xl mb-4"
                    style={{
                      fontFamily: 'var(--font-headline)',
                      color: 'var(--pop-yellow)',
                    }}
                  >
                    Jason Cochran
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Software Engineer with 28 years of experience building exceptional web and mobile
                    applications.
                  </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                  <h4
                    className="font-bold mb-4 uppercase tracking-wide"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--pop-yellow)',
                      fontSize: '0.8rem',
                    }}
                  >
                    Quick Links
                  </h4>
                  <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                    <li>
                      <a href="/" className="hover:text-[var(--pop-yellow)] transition-colors">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/resume" className="hover:text-[var(--pop-yellow)] transition-colors">
                        Resume
                      </a>
                    </li>
                    <li>
                      <a
                        href="/projects"
                        className="hover:text-[var(--pop-yellow)] transition-colors"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="https://blog.jasoncochran.io" className="hover:text-[var(--pop-yellow)] transition-colors">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/certifications"
                        className="hover:text-[var(--pop-yellow)] transition-colors"
                      >
                        Certifications
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 3 - Connect */}
                <div>
                  <h4
                    className="font-bold mb-4 uppercase tracking-wide"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--pop-yellow)',
                      fontSize: '0.8rem',
                    }}
                  >
                    Connect
                  </h4>
                  <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                    <li>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="hover:text-[var(--pop-yellow)] transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </li>
                    {SOCIAL_LINKS.map((link) => {
                      const Icon = link.icon
                      return (
                        <li key={link.key}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:text-[var(--pop-yellow)] transition-colors"
                            aria-label={`Visit Jason Cochran on ${link.label}`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{link.handle || link.label}</span>
                          </a>
                        </li>
                      )
                    })}
                    <li style={{ color: 'rgba(255,255,255,0.5)' }}>{CONTACT_LOCATION}</li>
                  </ul>
                </div>
              </div>

              {/* Footer Bottom */}
              <div
                className="pt-6 mt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}
              >
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.5)' }}
                >
                  &copy; {new Date().getFullYear()} Jason Cochran. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
