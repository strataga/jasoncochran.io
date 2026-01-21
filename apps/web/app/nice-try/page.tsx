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
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('rick-roll-player', {
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
          autoplay: 1,
          mute: 1,
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
          },
        },
      })
    }
  }, [])

  const handleUnmute = () => {
    if (playerRef.current && isMuted) {
      playerRef.current.unMute()
      setIsMuted(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-16"
      onClick={handleUnmute}
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Rick Roll Video with pop-art styling */}
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

        {/* Unmute hint */}
        {isMuted && (
          <p
            className="text-xs mb-4 animate-pulse"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--pop-red)' }}
          >
            Click anywhere to unmute
          </p>
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
            OOPS!
          </div>

          <h1
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: 'var(--font-headline)', color: 'var(--pop-black)' }}
          >
            NICE TRY
          </h1>

          <p
            className="text-sm opacity-80"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--pop-black)' }}
          >
            You thought you could steal my video?
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
          <div style={{ color: '#888' }}>$ curl /api/video/ralph</div>
          <div style={{ color: '#ff6b6b' }} className="mb-1">
            [403] Access Denied
          </div>
          <div style={{ color: '#ffff00' }}>
            Never gonna give you up
          </div>
          <div style={{ color: '#ffff00' }}>
            Never gonna let you down
          </div>
          <div style={{ color: '#00ff00' }} className="mt-1">
            [Rick Roll Deployed Successfully]
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
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
            I Deserved That
          </Link>
        </div>

        {/* Footer joke */}
        <p
          className="mt-8 opacity-50"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
        >
          Rick Astley would be proud.
        </p>
      </div>
    </div>
  )
}
