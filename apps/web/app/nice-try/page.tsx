'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string
          playerVars: Record<string, number | string>
          events: {
            onReady: (event: { target: YTPlayer }) => void
          }
        }
      ) => YTPlayer
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayer {
  unMute: () => void
  playVideo: () => void
}

export default function NiceTryPage() {
  const playerRef = useRef<YTPlayer | null>(null)
  const [showRickRoll, setShowRickRoll] = useState(false)
  const [apiLoaded, setApiLoaded] = useState(false)

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      setApiLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (showRickRoll && apiLoaded) {
      // Small delay to ensure the div is rendered
      setTimeout(() => {
        playerRef.current = new window.YT.Player('rick-roll-player', {
          videoId: 'dQw4w9WgXcQ',
          playerVars: {
            autoplay: 1,
            mute: 0, // Start with sound!
            loop: 1,
            playlist: 'dQw4w9WgXcQ',
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            disablekb: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo()
              event.target.unMute()
            },
          },
        })
      }, 100)
    }
  }, [showRickRoll, apiLoaded])

  const handleDownload = () => {
    setShowRickRoll(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Rick Roll Video - only shown after clicking download */}
        {showRickRoll && (
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
                  zIndex: 5,
                }}
              />

              {/* YouTube Player Container */}
              <div
                id="rick-roll-player"
                style={{
                  width: '600px',
                  height: '338px',
                  border: '3px solid var(--pop-black)',
                }}
              />

              {/* Badge */}
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
        )}

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
            {showRickRoll ? 'GOT YA!' : 'OOPS!'}
          </div>

          <h1
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: 'var(--font-headline)', color: 'var(--pop-black)' }}
          >
            {showRickRoll ? 'NEVER GONNA GIVE YOU UP' : 'NICE TRY'}
          </h1>

          <p
            className="text-sm opacity-80"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--pop-black)' }}
          >
            {showRickRoll
              ? 'Never gonna let you download'
              : 'You thought you could steal my video?'}
          </p>
        </div>

        {/* Terminal joke */}
        <div
          className="p-4 mb-6 text-left text-xs"
          style={{
            background: 'var(--pop-black)',
            border: '3px solid var(--pop-black)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div style={{ color: '#888' }}>$ curl /api/video/ralph</div>
          <div style={{ color: '#ff6b6b' }} className="mb-1">
            [403] Access Denied
          </div>
          {showRickRoll ? (
            <>
              <div style={{ color: '#ffff00' }}>
                Never gonna give you up
              </div>
              <div style={{ color: '#ffff00' }}>
                Never gonna let you down
              </div>
              <div style={{ color: '#00ff00' }} className="mt-1">
                [Rick Roll Deployed Successfully]
              </div>
            </>
          ) : (
            <div style={{ color: '#ffff00' }}>
              Download available below...
            </div>
          )}
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
            {showRickRoll ? 'I Deserved That' : 'Go Back'}
          </Link>

          {!showRickRoll && (
            <button
              onClick={handleDownload}
              className="px-6 py-3 font-bold tracking-wide transition-all hover:translate-x-1 hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
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
            </button>
          )}
        </div>

        {/* Footer joke */}
        <p
          className="mt-8 opacity-50"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
        >
          {showRickRoll ? 'Rick Astley would be proud.' : 'No Ralphs were harmed in the making of this page.'}
        </p>
      </div>
    </div>
  )
}
