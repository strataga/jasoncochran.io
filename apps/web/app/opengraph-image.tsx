import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Jason Cochran - Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          padding: '40px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
              display: 'flex',
            }}
          >
            Jason Cochran
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#cbd5e1',
              marginBottom: 40,
              display: 'flex',
            }}
          >
            Software Engineer • 28 Years Experience
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
              display: 'flex',
            }}
          >
            AI-powered development • Rapid MVPs • Enterprise architecture
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
