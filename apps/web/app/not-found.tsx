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
          className="text-[8rem] md:text-[12rem] font-bold leading-none mb-0"
          style={{
            fontFamily: 'var(--font-headline)',
            color: 'var(--pop-red)',
            textShadow: '6px 6px 0 var(--pop-black)',
            WebkitTextStroke: '3px var(--pop-black)',
          }}
        >
          404
        </div>

        {/* Ralph Wiggum Video with pop-art styling */}
        <div className="relative mb-6">
          <div
            className="relative inline-block p-2"
            style={{
              background: 'var(--pop-yellow)',
              border: '6px solid var(--pop-black)',
              boxShadow: '8px 8px 0 var(--pop-black)',
            }}
          >
            {/* Comic dots overlay effect */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'radial-gradient(var(--pop-black) 1px, transparent 1px)',
                backgroundSize: '4px 4px',
              }}
            />

            {/* Video Player */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="block max-w-full"
              style={{
                width: '400px',
                height: 'auto',
                border: '3px solid var(--pop-black)',
              }}
            >
              <source src="/videos/ralph-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play indicator badge */}
            <div
              className="absolute -top-3 -left-3 px-3 py-1 -rotate-12"
              style={{
                background: 'var(--pop-red)',
                border: '3px solid var(--pop-black)',
                fontFamily: 'var(--font-headline)',
                color: 'var(--pop-white)',
                fontSize: '0.7rem',
                boxShadow: '2px 2px 0 var(--pop-black)',
              }}
            >
              LIVE
            </div>
          </div>
        </div>

        {/* Comic-style speech bubble */}
        <div
          className="relative inline-block p-6 mb-6"
          style={{
            background: 'var(--pop-yellow)',
            border: '5px solid var(--pop-black)',
            borderRadius: '20px',
            boxShadow: '6px 6px 0 var(--pop-black)',
          }}
        >
          {/* Spiky burst effect */}
          <div
            className="absolute -top-3 -right-3 px-3 py-1 rotate-12"
            style={{
              background: 'var(--pop-red)',
              border: '2px solid var(--pop-black)',
              fontFamily: 'var(--font-headline)',
              color: 'var(--pop-white)',
              fontSize: '0.75rem',
            }}
          >
            OOPS!
          </div>

          <h1
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: 'var(--font-headline)', color: 'var(--pop-black)' }}
          >
            I&apos;M IN DANGER
          </h1>

          <p
            className="text-sm opacity-80"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--pop-black)' }}
          >
            This page got vibe-coded into the void
          </p>
        </div>

        {/* Terminal/Ralph Loop joke */}
        <div
          className="p-4 mb-6 text-left text-xs"
          style={{
            background: 'var(--pop-black)',
            border: '3px solid var(--pop-black)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div style={{ color: '#888' }}>$ ralph-loop start</div>
          <div style={{ color: '#00ff00' }} className="mb-1">
            Initializing Ralph Loop Agent...
          </div>
          <div style={{ color: '#ffff00' }}>
            [Ralph 1] Looking for page... not found
          </div>
          <div style={{ color: '#ffff00' }}>
            [Ralph 2] Looking for page... I&apos;m in danger
          </div>
          <div style={{ color: '#ff6b6b' }} className="mt-1">
            [Context Reset] Fresh Ralph deployed
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 font-bold uppercase tracking-wide transition-all hover:translate-x-1 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              background: 'var(--pop-red)',
              color: 'var(--pop-white)',
              border: '3px solid var(--pop-black)',
              boxShadow: '4px 4px 0 var(--pop-black)',
            }}
          >
            Escape The Loop
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 font-bold uppercase tracking-wide transition-all hover:translate-x-1 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              background: 'var(--pop-yellow)',
              color: 'var(--pop-black)',
              border: '3px solid var(--pop-black)',
              boxShadow: '4px 4px 0 var(--pop-black)',
            }}
          >
            See What Exists
          </Link>
        </div>

        {/* Footer joke */}
        <p
          className="mt-8 opacity-50"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
        >
          No Ralphs were harmed. Several were context-reset.
        </p>
      </div>
    </div>
  )
}
