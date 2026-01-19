import { ImageResponse } from 'next/og'
import { getProjectBySlug } from '@/lib/projects'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Project Case Study'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function ProjectOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0f172a',
            color: 'white',
            fontSize: 40,
          }}
        >
          Project Not Found
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          padding: '60px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                padding: '12px 24px',
                borderRadius: 30,
                fontSize: 28,
                display: 'inline-flex',
                alignSelf: 'flex-start',
                marginBottom: 30,
              }}
            >
              Case Study
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.2,
                display: 'flex',
                maxWidth: 1000,
              }}
            >
              {project.title}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderTop: '2px solid #334155',
              paddingTop: 30,
            }}
          >
            <div
              style={{
                fontSize: 32,
                color: '#cbd5e1',
                fontWeight: 'bold',
                display: 'flex',
              }}
            >
              Jason Cochran • Portfolio
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
