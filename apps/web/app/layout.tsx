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
    default: 'Jason Cochran · Software Architect + Principal Engineer',
    template: '%s | Jason Cochran',
  },
  description:
    'Software architect and hands-on principal engineer with 28 years of experience across enterprise web, mobile, cloud, integrations, and applied AI.',
  keywords: [
    'Software Architect',
    'Principal Engineer',
    'Architecture Consulting',
    'Production Readiness',
    'ReadyRay',
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
    title: 'Jason Cochran · Software Architect + Principal Engineer',
    description:
      'Software architect and hands-on principal engineer with 28 years of experience translating business needs into maintainable systems.',
    siteName: 'Jason Cochran',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jason Cochran · Software Architect + Principal Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran · Software Architect + Principal Engineer',
    description:
      'Software architect and hands-on principal engineer with 28 years of experience translating business needs into maintainable systems.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
