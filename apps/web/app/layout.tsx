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
    default: 'Jason Cochran · Hands-On Software Architect',
    template: '%s | Jason Cochran',
  },
  description:
    'Hands-on Software Architect with 28 years of experience delivering enterprise applications, integrations, mobile products, cloud-hosted systems, and applied-AI solutions.',
  keywords: [
    'Software Architect',
    'Application Architect',
    'AI Solutions Architect',
    'Principal Engineer',
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
    title: 'Jason Cochran · Hands-On Software Architect',
    description:
      'Hands-on Software Architect with 28 years of experience delivering enterprise applications, integrations, mobile products, cloud-hosted systems, and applied-AI solutions.',
    siteName: 'Jason Cochran',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jason Cochran · Hands-On Software Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran · Hands-On Software Architect',
    description:
      'Hands-on Software Architect with 28 years of experience delivering enterprise applications, integrations, mobile products, cloud-hosted systems, and applied-AI solutions.',
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
