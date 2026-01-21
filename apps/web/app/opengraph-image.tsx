import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'nodejs'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '16px',
          background: '#FF3B30',
          borderBottom: '6px solid #1a1a1a',
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '100%',
          maxWidth: '1000px',
          padding: '60px 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 900,
            fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
            letterSpacing: '0.02em',
            color: '#1a1a1a',
            lineHeight: 1,
            marginBottom: '4px',
          }}
        >
          JASON COCHRAN
        </div>

        {/* Yellow badge */}
        <div
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            background: '#FFCC00',
            border: '4px solid #1a1a1a',
            fontFamily: 'Space Mono, monospace',
            fontSize: '20px',
            fontWeight: 700,
            color: '#1a1a1a',
            width: 'fit-content',
            boxShadow: '4px 4px 0 #1a1a1a',
          }}
        >
          SOFTWARE ENGINEER & AI SPECIALIST
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            color: '#4a4a4a',
            fontWeight: 500,
            lineHeight: 1.3,
            marginTop: '4px',
          }}
        >
          Founder at Strataga • 28+ Years Experience
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            color: '#6a6a6a',
            fontWeight: 400,
            lineHeight: 1.5,
            marginTop: '8px',
            maxWidth: '800px',
          }}
        >
          Ship production-ready software in weeks, not months. AI-augmented workflows for rapid MVP
          delivery.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div
              style={{
                fontSize: '56px',
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
                fontSize: '16px',
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
              gap: '6px',
            }}
          >
            <div
              style={{
                fontSize: '56px',
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
                fontSize: '16px',
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

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
            alignItems: 'center',
          }}
        >
          {/* LinkedIn */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: '#FF3B30',
              border: '4px solid #1a1a1a',
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              boxShadow: '4px 4px 0 #1a1a1a',
            }}
          >
            LinkedIn
          </div>

          {/* X */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: '#000000',
              border: '4px solid #1a1a1a',
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              boxShadow: '4px 4px 0 #1a1a1a',
            }}
          >
            @jcochranio
          </div>

          {/* YouTube */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: '#FF0000',
              border: '4px solid #1a1a1a',
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              boxShadow: '4px 4px 0 #1a1a1a',
            }}
          >
            YouTube
          </div>

          {/* Email */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: '#007AFF',
              border: '4px solid #1a1a1a',
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              boxShadow: '4px 4px 0 #1a1a1a',
            }}
          >
            Email
          </div>
        </div>
      </div>

      {/* URL at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '80px',
          fontFamily: 'Space Mono, monospace',
          fontSize: '18px',
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
