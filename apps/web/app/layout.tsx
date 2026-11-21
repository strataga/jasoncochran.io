import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { profile } from '@/lib/profile'

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
    default: `${profile.name} · ${profile.title}`,
    template: '%s | Jason Cochran',
  },
  description: profile.description,
  keywords: [
    'Senior Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'React Native',
    'AWS',
    'Azure',
    'LayoutLark',
    'FieldBrief',
  ],
  authors: [{ name: 'Jason Cochran' }],
  creator: 'Jason Cochran',
  metadataBase: new URL('https://jasoncochran.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jasoncochran.io',
    title: `${profile.name} · ${profile.title}`,
    description: profile.description,
    siteName: 'Jason Cochran',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jason Cochran · Senior Full Stack Developer · React, Next.js, TypeScript, Node.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} · ${profile.title}`,
    description: profile.description,
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
