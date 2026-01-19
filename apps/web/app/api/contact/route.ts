import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'jason.cochran@strataga.io',
      subject: `New Contact Form Submission`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>

            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
              <div style="margin-bottom: 20px;">
                <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 10px 0;">Contact Details</h2>
              </div>

              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Name:</strong></p>
                <p style="margin: 0 0 20px 0; color: #1f2937;">${name}</p>

                <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Email:</strong></p>
                <p style="margin: 0 0 20px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>

                <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Message:</strong></p>
                <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #667eea;">
                  <p style="margin: 0; color: #1f2937; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                  Reply directly to <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a> to respond to this inquiry.
                </p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
              <p style="margin: 0;">Sent from jasoncochran.io contact form</p>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
