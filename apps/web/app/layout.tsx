import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Linkedin } from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran - Software Engineer and Consultant',
    description: '28 years of experience building exceptional web and mobile applications',
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
        <main className="min-h-screen">{children}</main>
        <footer
          style={{
            background: 'var(--pop-black)',
            borderTop: '4px solid var(--pop-black)',
            color: 'var(--pop-white)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'var(--font-headline)',
                    color: 'var(--pop-red)',
                  }}
                >
                  Jason Cochran
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Software Engineer with 28 years of experience building exceptional web and mobile
                  applications.
                </p>
              </div>
              <div>
                <h4
                  className="font-semibold mb-4 uppercase tracking-wide"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--pop-yellow)',
                    fontSize: '0.875rem',
                  }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/"
                      className="hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      className="hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects"
                      className="hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="/certifications"
                      className="hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      Certifications
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className="font-semibold mb-4 uppercase tracking-wide"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--pop-yellow)',
                    fontSize: '0.875rem',
                  }}
                >
                  Connect
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="mailto:jason.cochran@strataga.io"
                      className="hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      jason.cochran@strataga.io
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/jcochranio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      <XIcon className="w-4 h-4" />
                      <span>@jcochranio</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cochranjason/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+14322607580"
                      className="hover:text-yellow-300 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      (432) 260-7580
                    </a>
                  </li>
                  <li style={{ color: 'rgba(255,255,255,0.7)' }}>Midland, TX</li>
                </ul>
              </div>
            </div>
            <div className="pt-8" style={{ borderTop: '2px solid rgba(255,255,255,0.1)' }}>
              <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                &copy; {new Date().getFullYear()} Jason Cochran. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
