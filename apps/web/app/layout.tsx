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
    default: 'Jason Cochran — Senior Full-Stack Engineer · Agent Infrastructure',
    template: '%s | Jason Cochran',
  },
  description:
    'Senior full-stack engineer. 28 years shipping production software; currently building agent infrastructure. OpenClaw VPS: live multi-tenant agent hosting with per-tenant observability and SLO-gated deploys.',
  keywords: [
    'Senior Full-Stack Engineer',
    'AI Agent Infrastructure',
    'Production Agents',
    'OpenClaw VPS',
    'Multi-tenant Agent Hosting',
    'Agent Observability',
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
    title: 'Jason Cochran — Senior Full-Stack Engineer · Agent Infrastructure',
    description:
      'Senior full-stack engineer. 28 years shipping production software; currently building agent infrastructure. Shipped OpenClaw VPS — live multi-tenant agent hosting.',
    siteName: 'Jason Cochran',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jason Cochran — Senior Full-Stack Engineer · Agent Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Cochran — Senior Full-Stack Engineer · Agent Infrastructure',
    description:
      'Senior full-stack engineer. 28 years shipping production software; currently building agent infrastructure. Shipped OpenClaw VPS — live multi-tenant agent hosting.',
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
