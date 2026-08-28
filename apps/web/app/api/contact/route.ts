// Contact form backend , Gmail SMTP via nodemailer (swapped from Resend 2026-04-19).
// Railway env vars required: GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL, ALLOWED_ORIGINS.
// Generate an App Password at https://myaccount.google.com/apppasswords (2FA required).
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import {
  getRailwayClientId,
  isAllowedOrigin,
  MemoryRateLimiter,
  parseAllowedOrigins,
  parseContactRequest,
} from './contact-policy'

const MAX_NAME_LENGTH = 100
const MIN_NAME_LENGTH = 2
const MAX_MESSAGE_LENGTH = 2000
const MIN_MESSAGE_LENGTH = 10
const MAX_BODY_BYTES = 10 * 1024 // 10KB

function positiveNumber(value: string | undefined, fallback: number) {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

const rateLimiter = new MemoryRateLimiter(
  positiveNumber(process.env.CONTACT_RATE_LIMIT_WINDOW_MS, 60_000),
  positiveNumber(process.env.CONTACT_RATE_LIMIT_MAX, 5),
)

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function validateEnv() {
  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL, ALLOWED_ORIGINS } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_TO_EMAIL || !ALLOWED_ORIGINS) {
    return false
  }
  return true
}

function isOriginAllowed(request: NextRequest) {
  return isAllowedOrigin(request.headers.get('origin'), parseAllowedOrigins(process.env.ALLOWED_ORIGINS))
}

function isContentTypeJson(request: NextRequest) {
  const contentType = request.headers.get('content-type') || ''
  return contentType.toLowerCase().includes('application/json')
}

export async function POST(request: NextRequest) {
  if (!validateEnv()) {
    return NextResponse.json({ error: 'Server email configuration is missing' }, { status: 500 })
  }

  if (!isContentTypeJson(request)) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 415 })
  }

  if (!isOriginAllowed(request)) {
    return NextResponse.json({ error: 'Forbidden origin' }, { status: 403 })
  }

  const contentLength = Number(request.headers.get('content-length') || '0')
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
  }

  const clientId = getRailwayClientId(request.headers)
  if (rateLimiter.isLimited(clientId)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: unknown
  try {
    const raw = await request.text()
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
    }
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const contact = parseContactRequest(body)
  if (!contact) {
    return NextResponse.json({ error: 'Invalid request fields' }, { status: 400 })
  }

  const { name: trimmedName, email: trimmedEmail, message: trimmedMessage } = contact

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (trimmedName.length < MIN_NAME_LENGTH || trimmedName.length > MAX_NAME_LENGTH) {
    return NextResponse.json({ error: 'Invalid name length' }, { status: 400 })
  }

  const nameRegex = /^[a-zA-Z\s'-]+$/
  if (!nameRegex.test(trimmedName)) {
    return NextResponse.json({ error: 'Invalid name characters' }, { status: 400 })
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  if (trimmedMessage.length < MIN_MESSAGE_LENGTH || trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'Invalid message length' }, { status: 400 })
  }

  const safeName = escapeHtml(trimmedName)
  const safeEmail = escapeHtml(trimmedEmail)
  const safeMessage = escapeHtml(trimmedMessage)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const notificationHtml = `
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
            <p style="margin: 0 0 20px 0; color: #1f2937;">${safeName}</p>

            <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Email:</strong></p>
            <p style="margin: 0 0 20px 0;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></p>

            <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Message:</strong></p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #1f2937; white-space: pre-wrap;">${safeMessage}</p>
            </div>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Reply directly to <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a> to respond to this inquiry.
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
          <p style="margin: 0;">Sent from jasoncochran.io contact form</p>
        </div>
      </body>
    </html>
  `

  const notificationText = `New Contact Form Submission

Name: ${trimmedName}
Email: ${trimmedEmail}

Message:
${trimmedMessage}

---
Reply to ${trimmedEmail} to respond. Sent from jasoncochran.io contact form.`

  const thankYouHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #000; padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: #FFD600; margin: 0; font-size: 24px;">Thanks for reaching out!</h1>
        </div>

        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="margin: 0 0 20px 0; color: #1f2937;">
            Hi ${safeName},
          </p>

          <p style="margin: 0 0 20px 0; color: #1f2937;">
            I received your message and will get back to you within one business day.
          </p>

          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb; border-left: 4px solid #FFD600;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Your message:</strong></p>
            <p style="margin: 0; color: #6b7280; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="margin: 0; color: #1f2937;">
            Talk soon,<br>
            <strong>Jason Cochran</strong>
          </p>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
          <p style="margin: 0;">jasoncochran.io</p>
        </div>
      </body>
    </html>
  `

  const thankYouText = `Hi ${trimmedName},

I received your message and will get back to you within one business day.

Your message:
${trimmedMessage}

Talk soon,
Jason Cochran
jasoncochran.io`

  let info
  try {
    info = await transporter.sendMail({
      from: `"Jason Cochran Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL as string,
      replyTo: trimmedEmail,
      subject: `New Contact from ${trimmedName}`,
      html: notificationHtml,
      text: notificationText,
    })
  } catch {
    console.error('Contact form notification email failed')
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  let confirmationEmailSent = true
  try {
    await transporter.sendMail({
      from: `"Jason Cochran" <${process.env.GMAIL_USER}>`,
      to: trimmedEmail,
      subject: 'Thanks for reaching out!',
      html: thankYouHtml,
      text: thankYouText,
    })
  } catch {
    confirmationEmailSent = false
    console.warn('Contact form confirmation email failed after notification succeeded')
  }

  return NextResponse.json(
    { success: true, messageId: info.messageId, confirmationEmailSent },
    { status: 200 },
  )
}
