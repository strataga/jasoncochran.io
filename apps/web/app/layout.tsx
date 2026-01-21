import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Linkedin, Youtube } from 'lucide-react'

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
          className="relative"
          style={{
            background: 'var(--pop-cream)',
            borderTop: '6px solid var(--pop-black)',
            color: 'var(--pop-black)',
          }}
        >
          {/* Colorful stripe */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{
              background:
                'linear-gradient(90deg, var(--pop-red) 0%, var(--pop-red) 33%, var(--pop-yellow) 33%, var(--pop-yellow) 66%, var(--pop-blue) 66%, var(--pop-blue) 100%)',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Column 1 - About */}
              <div
                className="p-6"
                style={{
                  background: 'var(--pop-white)',
                  border: '3px solid var(--pop-red)',
                  boxShadow: '4px 4px 0 var(--pop-red)',
                }}
              >
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'var(--font-headline)',
                    color: 'var(--pop-red)',
                  }}
                >
                  Jason Cochran
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Software Engineer with 28 years of experience building exceptional web and mobile
                  applications.
                </p>
              </div>
              {/* Column 2 - Quick Links */}
              <div
                className="p-6"
                style={{
                  background: 'var(--pop-white)',
                  border: '3px solid var(--pop-yellow)',
                  boxShadow: '4px 4px 0 var(--pop-black)',
                }}
              >
                <h4
                  className="font-bold mb-4 uppercase tracking-wide pb-2"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--pop-black)',
                    fontSize: '0.8rem',
                    borderBottom: '2px solid var(--pop-black)',
                  }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  <li>
                    <a
                      href="/"
                      className="hover:text-red-500 hover:pl-1 transition-all"
                      style={{ color: 'var(--pop-black)' }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      className="hover:text-red-500 hover:pl-1 transition-all"
                      style={{ color: 'var(--pop-black)' }}
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects"
                      className="hover:text-red-500 hover:pl-1 transition-all"
                      style={{ color: 'var(--pop-black)' }}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.jasoncochran.io"
                      className="hover:text-red-500 hover:pl-1 transition-all"
                      style={{ color: 'var(--pop-black)' }}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/certifications"
                      className="hover:text-red-500 hover:pl-1 transition-all"
                      style={{ color: 'var(--pop-black)' }}
                    >
                      Certifications
                    </a>
                  </li>
                </ul>
              </div>
              {/* Column 3 - Connect */}
              <div
                className="p-6"
                style={{
                  background: 'var(--pop-white)',
                  border: '3px solid var(--pop-blue)',
                  boxShadow: '4px 4px 0 var(--pop-blue)',
                }}
              >
                <h4
                  className="font-bold mb-4 uppercase tracking-wide pb-2"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--pop-black)',
                    fontSize: '0.8rem',
                    borderBottom: '2px solid var(--pop-black)',
                  }}
                >
                  Connect
                </h4>
                <ul
                  className="space-y-3 text-sm"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--pop-black)' }}
                >
                  <li>
                    <a
                      href="mailto:jason.cochran@strataga.io"
                      className="hover:text-red-500 transition-colors"
                    >
                      jason.cochran@strataga.io
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/jcochranio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-red-500 transition-colors"
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
                      className="inline-flex items-center gap-2 hover:text-red-500 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@jcochranio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-2 py-1 rounded text-white hover:bg-white hover:text-red-500 transition-all"
                      style={{ background: 'var(--pop-red)' }}
                    >
                      <Youtube className="w-4 h-4" />
                      <span>YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+14322607580" className="hover:text-red-500 transition-colors">
                      (432) 260-7580
                    </a>
                  </li>
                  <li style={{ color: 'var(--text-secondary)' }}>Midland, TX</li>
                </ul>
              </div>
            </div>
            <div
              className="pt-6 mt-4"
              style={{ borderTop: '3px solid var(--pop-black)', textAlign: 'center' }}
            >
              <p
                className="text-sm"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}
              >
                &copy; {new Date().getFullYear()} Jason Cochran. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
