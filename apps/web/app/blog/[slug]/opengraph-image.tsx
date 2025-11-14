import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Blog Post'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function BlogOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
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
          Post Not Found
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
            {post.tags && post.tags.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  marginBottom: 20,
                  flexWrap: 'wrap',
                }}
              >
                {post.tags.slice(0, 3).map((tag: string) => (
                  <div
                    key={tag}
                    style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#60a5fa',
                      padding: '8px 16px',
                      borderRadius: 20,
                      fontSize: 24,
                      display: 'flex',
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <div
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                marginBottom: 20,
                display: 'flex',
                maxWidth: 1000,
              }}
            >
              {post.title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#94a3b8',
                lineHeight: 1.4,
                display: 'flex',
                maxWidth: 900,
              }}
            >
              {post.description}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '2px solid #334155',
              paddingTop: 30,
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: '#cbd5e1',
                fontWeight: 'bold',
                display: 'flex',
              }}
            >
              Jason Cochran
            </div>
            <div
              style={{
                fontSize: 24,
                color: '#64748b',
                display: 'flex',
              }}
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
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
