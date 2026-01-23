import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'nodejs'

export default async function OpengraphImage() {
  // Fetch the profile image
  const imageData = await fetch(
    new URL('/images/jason-profile.jpg', 'https://jasoncochran.io')
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFEF5',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern - dots */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 4px, transparent 4px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Red accent bar at top */}
      <div
        style={{
          width: '100%',
          height: '12px',
          background: '#FF3B30',
          borderBottom: '4px solid #1a1a1a',
          flexShrink: 0,
        }}
      />

      {/* Main content wrapper */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '24px 50px 20px 50px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Name row - spans full width */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
              letterSpacing: '0.02em',
              color: '#1a1a1a',
              lineHeight: 1,
            }}
          >
            JASON COCHRAN
          </div>
          <div
            style={{
              display: 'flex',
              padding: '8px 20px',
              background: '#FFCC00',
              border: '3px solid #1a1a1a',
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 700,
              color: '#1a1a1a',
              boxShadow: '3px 3px 0 #1a1a1a',
            }}
          >
            SOFTWARE ENGINEER & AI SPECIALIST
          </div>
        </div>

        {/* Two column content */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flex: 1,
          }}
        >
          {/* Left column - text content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flex: 1,
            }}
          >
            {/* Tagline */}
            <div
              style={{
                fontSize: '28px',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                color: '#4a4a4a',
                fontWeight: 500,
                lineHeight: 1.3,
              }}
            >
              Founder at Strataga • 28+ Years Experience
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: '20px',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                color: '#6a6a6a',
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: '550px',
              }}
            >
              Ship production-ready software in weeks, not months. AI-augmented workflows for rapid MVP delivery.
            </div>

            {/* Stats row */}
            <div
              style={{
                display: 'flex',
                gap: '32px',
                marginTop: '4px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <div
                  style={{
                    fontSize: '42px',
                    fontWeight: 900,
                    fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
                    color: '#FF3B30',
                    lineHeight: 1,
                  }}
                >
                  28+
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Space Mono, monospace',
                    color: '#6a6a6a',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  Years Exp
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <div
                  style={{
                    fontSize: '42px',
                    fontWeight: 900,
                    fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
                    color: '#007AFF',
                    lineHeight: 1,
                  }}
                >
                  100+
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Space Mono, monospace',
                    color: '#6a6a6a',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  Projects
                </div>
              </div>
            </div>

            {/* Latest Projects */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '16px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontFamily: 'Space Mono, monospace',
                  color: '#6a6a6a',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Latest Projects
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    padding: '10px 18px',
                    background: '#FF3B30',
                    border: '3px solid #1a1a1a',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#ffffff',
                    boxShadow: '3px 3px 0 #1a1a1a',
                  }}
                >
                  DemiArch.dev
                </div>
                <div
                  style={{
                    display: 'flex',
                    padding: '10px 18px',
                    background: '#007AFF',
                    border: '3px solid #1a1a1a',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#ffffff',
                    boxShadow: '3px 3px 0 #1a1a1a',
                  }}
                >
                  ClickToWa.com
                </div>
                <div
                  style={{
                    display: 'flex',
                    padding: '10px 18px',
                    background: '#FFCC00',
                    border: '3px solid #1a1a1a',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    boxShadow: '3px 3px 0 #1a1a1a',
                  }}
                >
                  CoSplitApp.com
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                alignItems: 'center',
              }}
            >
              {/* X */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  background: '#000000',
                  border: '3px solid #1a1a1a',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '3px 3px 0 #1a1a1a',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @jcochranio
              </div>

              {/* YouTube */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  background: '#FF0000',
                  border: '3px solid #1a1a1a',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '3px 3px 0 #1a1a1a',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                @jcochranio
              </div>

              {/* LinkedIn */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  background: '#0A66C2',
                  border: '3px solid #1a1a1a',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '3px 3px 0 #1a1a1a',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                /in/cochranjason
              </div>
            </div>
          </div>

          {/* Right column - profile image */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '16px',
                border: '5px solid #1a1a1a',
                boxShadow: '6px 6px 0 #1a1a1a',
                overflow: 'hidden',
                display: 'flex',
              }}
            >
              <img
                src={`data:image/jpeg;base64,${Buffer.from(imageData).toString('base64')}`}
                alt="Jason Cochran"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* URL at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '50px',
          fontFamily: 'Space Mono, monospace',
          fontSize: '16px',
          color: '#6a6a6a',
          fontWeight: 600,
        }}
      >
        jasoncochran.io
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
