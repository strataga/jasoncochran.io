import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(request: NextRequest) {
  // Check referer to block direct access
  const referer = request.headers.get('referer')
  const host = request.headers.get('host')

  // Allow requests from same origin or localhost for development
  const allowedOrigins = [
    'jasoncochran.io',
    'www.jasoncochran.io',
    'localhost',
    '127.0.0.1',
  ]

  const isAllowed = referer && allowedOrigins.some(origin =>
    referer.includes(origin)
  )

  if (!isAllowed) {
    // Rick-roll anyone trying to access directly
    return NextResponse.redirect('/nice-try')
  }

  try {
    const videoPath = path.join(process.cwd(), 'assets', 'ralph-animation.mp4')
    const videoBuffer = await readFile(videoPath)

    return new NextResponse(videoBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': videoBuffer.length.toString(),
        'Cache-Control': 'private, no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch {
    return new NextResponse('Video not found', { status: 404 })
  }
}
