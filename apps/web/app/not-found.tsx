'use client'

import Link from 'next/link'

export default function NotFound() {
  const preventCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
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

            {/* Video Player with copy protection */}
            <video
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={preventCopy}
              className="block max-w-full select-none"
              style={{
                width: '600px',
                height: 'auto',
                border: '3px solid var(--pop-black)',
                pointerEvents: 'none',
              }}
            >
              <source src="/api/video/ralph" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Transparent overlay to prevent interaction */}
            <div
              className="absolute inset-0"
              onContextMenu={preventCopy}
              onDragStart={preventCopy}
              style={{ zIndex: 10 }}
            />

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
                zIndex: 20,
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/* Fake download button - leads to rick-roll */}
          <Link
            href="/nice-try"
            className="px-6 py-3 font-bold tracking-wide transition-all hover:translate-x-1 hover:-translate-y-1 flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              background: 'var(--pop-blue)',
              color: 'var(--pop-white)',
              border: '3px solid var(--pop-black)',
              boxShadow: '4px 4px 0 var(--pop-black)',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Ralph Video
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
