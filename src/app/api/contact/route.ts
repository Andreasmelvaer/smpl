import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Send notification email to SmplCo
    await transporter.sendMail({
      from: `SmplCo Website <${process.env.SMTP_USER}>`,
      to: 'andreas@smpl.as',
      replyTo: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #c8ff00; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 20px; color: #1a1a1a;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f5f5f0; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px; width: 100px;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #1a1a1a;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Company</td>
                <td style="padding: 8px 0; font-size: 14px;">${escapeHtml(company)}</td>
              </tr>
              ` : ''}
            </table>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <div style="font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="font-size: 12px; color: #999; margin: 0;">
              Sent from the SmplCo contact form at smpl.as/contact
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the person who submitted
    await transporter.sendMail({
      from: `SmplCo <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #c8ff00; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 20px; color: #1a1a1a;">Thanks for getting in touch!</h1>
          </div>
          <div style="background: #f5f5f0; padding: 32px; border-radius: 0 0 12px 12px;">
            <p style="font-size: 14px; line-height: 1.6; margin-top: 0;">
              Hi ${escapeHtml(name.split(' ')[0])},
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              We've received your message and will get back to you within 24 hours. If it's urgent, you can reply directly to this email.
            </p>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 0;">
              — The SmplCo Team
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
