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
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
          color: 'white',
          fontSize: 40,
          fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
        }}
      >
        Project Not Found
      </div>,
      { ...size }
    )
  }

  const accentColor =
    project.accentColor === 'red'
      ? '#FF3B30'
      : project.accentColor === 'blue'
        ? '#007AFF'
        : '#FFCC00'

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

      {/* Accent bar at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '16px',
          background: accentColor,
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
          padding: '60px 80px',
          position: 'relative',
          zIndex: 1,
          flex: 1,
        }}
      >
        {/* Case Study badge */}
        <div
          style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: accentColor,
            border: '4px solid #1a1a1a',
            fontFamily: 'Space Mono, monospace',
            fontSize: '20px',
            fontWeight: 700,
            color: accentColor === '#FFCC00' ? '#1a1a1a' : '#ffffff',
            width: 'fit-content',
            boxShadow: '4px 4px 0 #1a1a1a',
          }}
        >
          CASE STUDY
        </div>

        {/* Project title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
            letterSpacing: '0.02em',
            color: '#1a1a1a',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          {project.title.toUpperCase()}
        </div>

        {/* Project subtitle */}
        <div
          style={{
            fontSize: '28px',
            fontFamily: 'Space Mono, monospace',
            color: '#4a4a4a',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          {project.subtitle}
        </div>

        {/* Tech stack tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '16px',
          }}
        >
          {project.techStack?.slice(0, 5).map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 16px',
                background: '#FFCC00',
                border: '3px solid #1a1a1a',
                fontFamily: 'Space Mono, monospace',
                fontSize: '16px',
                fontWeight: 700,
                color: '#1a1a1a',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            borderTop: '4px solid #1a1a1a',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 700,
              fontFamily: 'Bebas Neue, Impact, Arial Black, sans-serif',
              color: '#1a1a1a',
            }}
          >
            Jason Cochran • Portfolio
          </div>

          <div
            style={{
              fontSize: '18px',
              fontFamily: 'Space Mono, monospace',
              color: '#6a6a6a',
              fontWeight: 600,
            }}
          >
            jasoncochran.io
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  )
}
