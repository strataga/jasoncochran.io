import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jason Cochran · Senior Software Engineer',
    template: '%s | Jason Cochran',
  },
  description:
    'Senior Software Engineer with 28 years of experience building enterprise, web, mobile, and cloud software, with practical, hands-on AI experience.',
  keywords: [
    'Senior Software Engineer',
    'Full-Stack Software Engineer',
    'Practical AI Experience',
    'Software Architecture',
    'Architecture Consulting',
    'Production Readiness',
    'ArchGauge',
    'Next.js',
    'React',
    'TypeScript',
    'Convex',
    'MCP',
  ],
  authors: [{ name: 'Jason Cochran' }],
  creator: 'Jason Cochran',
  metadataBase: new URL('https://jasoncochran.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jasoncochran.io',
    title: 'Jason Cochran · Senior Software Engineer',
    description:
      'Senior Software Engineer with 28 years of experience building enterprise, web, mobile, and cloud software, with practical, hands-on AI experience.',
    siteName: 'Jason Cochran',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jason Cochran · Senior Software Engineer · Practical, hands-on AI experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran · Senior Software Engineer',
    description:
      'Senior Software Engineer with 28 years of experience building enterprise, web, mobile, and cloud software, with practical, hands-on AI experience.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1} className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
