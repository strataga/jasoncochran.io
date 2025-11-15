import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const alt = 'Blog Post'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div style={{ fontSize: 60, color: 'white' }}>Post Not Found</div>
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#10b981',
                  marginRight: 12,
                }}
              />
              jasoncochran.io
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '30px',
                flexWrap: 'wrap',
              }}
            >
              {post.tags.slice(0, 4).map((tag) => (
                <div
                  key={tag}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: 18,
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}

          {/* Title */}
          <div
            style={{
              fontSize: post.title.length > 80 ? 48 : 60,
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '20px',
              display: 'flex',
              maxHeight: '240px',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.4,
              display: 'flex',
              maxHeight: '100px',
              overflow: 'hidden',
            }}
          >
            {post.description.slice(0, 150)}
            {post.description.length > 150 ? '...' : ''}
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '2px solid rgba(255, 255, 255, 0.2)',
              paddingTop: '30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Jason Cochran
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                Software Consultant | Permian Basin Oil & Gas
              </div>
            </div>
            <div
              style={{
                fontSize: 20,
                color: 'rgba(255, 255, 255, 0.8)',
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
    { ...size }
  )
}
