import type { Metadata } from 'next'

const description = 'Looking for the Ralph video? Take a short detour on Jason Cochran’s site.'

export const metadata: Metadata = {
  title: 'Ralph Video',
  description,
  alternates: { canonical: 'https://jasoncochran.io/ralph-video' },
  openGraph: {
    type: 'website',
    title: 'Ralph Video | Jason Cochran',
    description,
    url: 'https://jasoncochran.io/ralph-video',
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
    title: 'Ralph Video | Jason Cochran',
    description,
    images: ['/opengraph-image'],
  },
}

export default function RalphVideoLayout({ children }: { children: React.ReactNode }) {
  return children
}
