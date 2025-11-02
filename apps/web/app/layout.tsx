import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    default: 'Jason Cochran - Senior Software Engineer',
    template: '%s | Jason Cochran'
  },
  description: '25 years of experience building exceptional web and mobile applications. Expert in React, Next.js, Node.js, NestJS, and modern web technologies.',
  keywords: ['Software Engineer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'NestJS', 'Software Engineer', 'Web Development'],
  authors: [{ name: 'Jason Cochran' }],
  creator: 'Jason Cochran',
  metadataBase: new URL('https://jasoncochran.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jasoncochran.com',
    title: 'Jason Cochran - Senior Software Engineer',
    description: '25 years of experience building exceptional web and mobile applications',
    siteName: 'Jason Cochran Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran - Senior Software Engineer',
    description: '25 years of experience building exceptional web and mobile applications',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jason Cochran</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Senior Software Engineer with 25 years of experience building exceptional web and mobile applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
                  <li><a href="/resume" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resume</a></li>
                  <li><a href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
                  <li><a href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="mailto:jlcochran2013@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">jlcochran2013@gmail.com</a></li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cochranjason/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </li>
                  <li><a href="tel:+14322607580" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">(432) 260-7580</a></li>
                  <li><span className="text-slate-600 dark:text-slate-400">Midland, TX</span></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                © {new Date().getFullYear()} Jason Cochran. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
