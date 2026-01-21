import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'This page was vibe-coded out of existence.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Big 404 */}
        <div
          className="text-[10rem] md:text-[14rem] font-bold leading-none mb-2"
          style={{
            fontFamily: 'var(--font-headline)',
            color: 'var(--pop-red)',
            textShadow: '8px 8px 0 var(--pop-black)',
            WebkitTextStroke: '4px var(--pop-black)',
          }}
        >
          404
        </div>

        {/* Comic-style speech bubble */}
        <div
          className="relative inline-block p-8 mb-8"
          style={{
            background: 'var(--pop-yellow)',
            border: '6px solid var(--pop-black)',
            borderRadius: '20px',
            boxShadow: '8px 8px 0 var(--pop-black)',
          }}
        >
          {/* Spiky burst effect */}
          <div
            className="absolute -top-3 -right-3 px-4 py-2 rotate-12"
            style={{
              background: 'var(--pop-red)',
              border: '3px solid var(--pop-black)',
              fontFamily: 'var(--font-headline)',
              color: 'var(--pop-white)',
              fontSize: '0.875rem',
            }}
          >
            OOPS!
          </div>

          <h1
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-headline)', color: 'var(--pop-black)' }}
          >
            I&apos;M IN DANGER
          </h1>

          <p
            className="text-lg mb-4 italic"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--pop-black)' }}
          >
            &mdash; Ralph Wiggum, sitting on a bus to a page that doesn&apos;t exist
          </p>

          <p
            className="text-base opacity-80"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--pop-black)', fontSize: '0.875rem' }}
          >
            This page got vibe-coded into the void.
          </p>
        </div>

        {/* Terminal/Ralph Loop joke */}
        <div
          className="p-6 mb-8 text-left"
          style={{
            background: 'var(--pop-black)',
            border: '4px solid var(--pop-black)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
          }}
        >
          <div style={{ color: '#888' }}>$ ralph-loop start</div>
          <div style={{ color: '#00ff00' }} className="mb-2">
            Initializing Ralph Loop Agent...
          </div>
          <div style={{ color: '#ffff00' }}>
            [Ralph 1] Looking for page... not found
          </div>
          <div style={{ color: '#ffff00' }}>
            [Ralph 2] Looking for page... still not found
          </div>
          <div style={{ color: '#ffff00' }}>
            [Ralph 3] Looking for page... I&apos;m in danger
          </div>
          <div style={{ color: '#ff6b6b' }} className="mt-2">
            [Context Reset] Fresh Ralph deployed. Progress: 0%
          </div>
          <div style={{ color: '#888' }} className="mt-2">
            $ # &quot;That&apos;s the beauty of Ralph - the technique is
            <br />
            $ # deterministically bad in an undeterministic world&quot;
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 font-bold uppercase tracking-wide transition-all hover:translate-x-1 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              background: 'var(--pop-red)',
              color: 'var(--pop-white)',
              border: '4px solid var(--pop-black)',
              boxShadow: '6px 6px 0 var(--pop-black)',
            }}
          >
            Escape The Loop
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 font-bold uppercase tracking-wide transition-all hover:translate-x-1 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              background: 'var(--pop-yellow)',
              color: 'var(--pop-black)',
              border: '4px solid var(--pop-black)',
              boxShadow: '6px 6px 0 var(--pop-black)',
            }}
          >
            See What Exists
          </Link>
        </div>

        {/* Footer joke */}
        <p
          className="mt-12 opacity-60"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}
        >
          No Ralphs were harmed. Several were context-reset.
        </p>
      </div>
    </div>
  )
}
