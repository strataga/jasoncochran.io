import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Jason Cochran · Senior Full-Stack Engineer · Agent Infrastructure'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0F172A',
          color: '#F8FAFC',
          padding: '64px 80px',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '18px',
            color: '#94A3B8',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          <div style={{ width: '40px', height: '2px', background: '#EF4444' }} />
          <div>jasoncochran.io</div>
        </div>

        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <div
            style={{
              fontSize: '88px',
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
              color: '#F8FAFC',
            }}
          >
            Jason Cochran
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: '40px',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#F8FAFC',
              marginBottom: '12px',
              maxWidth: '900px',
            }}
          >
            Senior full-stack engineer building
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#EF4444',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            agent infrastructure that doesn&apos;t break.
          </div>

          <div
            style={{
              fontSize: '22px',
              color: '#94A3B8',
              lineHeight: 1.45,
              maxWidth: '900px',
            }}
          >
            OpenClaw VPS: managed hosting for OpenClaw with 30 prebuilt AI assistants,
            private and always-on.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            fontSize: '18px',
            color: '#94A3B8',
            letterSpacing: '0.04em',
            fontWeight: 500,
          }}
        >
          <div>28 years shipping production software</div>
          <div style={{ color: '#475569' }}>·</div>
          <div>Remote · Midland, TX</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
