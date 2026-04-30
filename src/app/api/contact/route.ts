import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { syncToCrm } from '@/lib/crm'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Inline SVG logo (white version for dark header)
const logoWhite = `<svg width="62" height="20" viewBox="0 0 62 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#c)"><path d="M11.48 5.13H8.82c0-1.98-1.12-2.98-3.14-2.98-1.69 0-2.74.81-2.74 2.08 0 1.43 1.08 1.87 3.58 2.48 2.94.72 5.4 1.49 5.4 4.78 0 2.9-2.33 4.78-5.84 4.78C2.31 16.27 0 14.36 0 10.78h2.7c0 2.24 1.23 3.31 3.4 3.31 1.95 0 3.09-.9 3.09-2.37 0-1.58-1.14-1.93-3.53-2.52C2.7 8.46.24 7.74.24 4.47.24 1.82 2.41 0 5.73 0c3.8 0 5.75 1.78 5.75 5.13Z" fill="#fff"/><path d="M30.17 9.08v6.86h-2.5V9.32c0-1.98-.77-2.77-2.02-2.77-1.47 0-2.35 1.25-2.35 3.38v6.01h-2.5V9.05c0-1.58-.7-2.5-2-2.5-1.49 0-2.35 1.27-2.35 3.42v5.96h-2.5V4.8h2.39v1.34h.04c.79-1.08 1.78-1.6 3.09-1.6 1.54 0 2.72.7 3.29 2.02.81-1.27 1.89-2.02 3.58-2.02 2.37 0 3.82 1.54 3.82 4.54Z" fill="#fff"/><path d="M43.13 10.37c0 3.55-1.8 5.83-4.63 5.83-1.38 0-2.63-.64-3.27-1.71h-.04V20h-2.5V4.8h2.44v1.54h.04c.66-1.14 1.91-1.82 3.31-1.82 2.83 0 4.65 2.3 4.65 5.85Zm-8.08 0c0 2.41 1.08 3.91 2.7 3.91s2.77-1.54 2.77-3.91c0-2.37-1.08-3.91-2.77-3.91s-2.7 1.47-2.7 3.91Z" fill="#fff"/><path d="M47.63.33h-2.5v15.61h2.5V.33Z" fill="#fff"/><path d="M53.25.21c-1.8 0-3.26 1.46-3.26 3.26s1.46 3.26 3.26 3.26V.21Z" fill="#fff"/><path d="M61.25 3.47a3.26 3.26 0 1 0-6.53 0 3.26 3.26 0 0 0 6.53 0Z" fill="#fff"/></g><defs><clipPath id="c"><rect width="61.25" height="20" fill="#fff"/></clipPath></defs></svg>`

const logoDark = `<svg width="62" height="20" viewBox="0 0 62 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#c)"><path d="M11.48 5.13H8.82c0-1.98-1.12-2.98-3.14-2.98-1.69 0-2.74.81-2.74 2.08 0 1.43 1.08 1.87 3.58 2.48 2.94.72 5.4 1.49 5.4 4.78 0 2.9-2.33 4.78-5.84 4.78C2.31 16.27 0 14.36 0 10.78h2.7c0 2.24 1.23 3.31 3.4 3.31 1.95 0 3.09-.9 3.09-2.37 0-1.58-1.14-1.93-3.53-2.52C2.7 8.46.24 7.74.24 4.47.24 1.82 2.41 0 5.73 0c3.8 0 5.75 1.78 5.75 5.13Z" fill="#141416"/><path d="M30.17 9.08v6.86h-2.5V9.32c0-1.98-.77-2.77-2.02-2.77-1.47 0-2.35 1.25-2.35 3.38v6.01h-2.5V9.05c0-1.58-.7-2.5-2-2.5-1.49 0-2.35 1.27-2.35 3.42v5.96h-2.5V4.8h2.39v1.34h.04c.79-1.08 1.78-1.6 3.09-1.6 1.54 0 2.72.7 3.29 2.02.81-1.27 1.89-2.02 3.58-2.02 2.37 0 3.82 1.54 3.82 4.54Z" fill="#141416"/><path d="M43.13 10.37c0 3.55-1.8 5.83-4.63 5.83-1.38 0-2.63-.64-3.27-1.71h-.04V20h-2.5V4.8h2.44v1.54h.04c.66-1.14 1.91-1.82 3.31-1.82 2.83 0 4.65 2.3 4.65 5.85Zm-8.08 0c0 2.41 1.08 3.91 2.7 3.91s2.77-1.54 2.77-3.91c0-2.37-1.08-3.91-2.77-3.91s-2.7 1.47-2.7 3.91Z" fill="#141416"/><path d="M47.63.33h-2.5v15.61h2.5V.33Z" fill="#141416"/><path d="M53.25.21c-1.8 0-3.26 1.46-3.26 3.26s1.46 3.26 3.26 3.26V.21Z" fill="#141416"/><path d="M61.25 3.47a3.26 3.26 0 1 0-6.53 0 3.26 3.26 0 0 0 6.53 0Z" fill="#141416"/></g><defs><clipPath id="c"><rect width="61.25" height="20" fill="#fff"/></clipPath></defs></svg>`

function notificationEmailHtml(name: string, email: string, company: string | undefined, message: string) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #f5f5f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%;">
          <!-- Header -->
          <tr>
            <td style="background-color: #141416; padding: 32px 40px; border-radius: 16px 16px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>${logoWhite}</td>
                </tr>
                <tr>
                  <td style="padding-top: 24px;">
                    <p style="margin: 0; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #e5ff21; font-weight: 600;">New Contact</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 8px;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; line-height: 1.3;">${escapeHtml(name)}</h1>
                    ${company ? `<p style="margin: 4px 0 0; font-size: 15px; color: #999;">${escapeHtml(company)}</p>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">
              <!-- Contact details -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="padding: 12px 16px; background-color: #f5f5f0; border-radius: 10px;">
                    <p style="margin: 0 0 2px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #999; font-weight: 600;">Email</p>
                    <a href="mailto:${escapeHtml(email)}" style="color: #141416; font-size: 15px; text-decoration: none; font-weight: 500;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>
              <!-- Message -->
              <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #999; font-weight: 600;">Message</p>
              <div style="font-size: 15px; line-height: 1.7; color: #333; white-space: pre-wrap;">${escapeHtml(message)}</div>
              <!-- Reply button -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                <tr>
                  <td style="background-color: #141416; border-radius: 100px;">
                    <a href="mailto:${escapeHtml(email)}" style="display: inline-block; padding: 12px 28px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none;">Reply to ${escapeHtml(name.split(' ')[0])}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; border-top: 1px solid #eee; background-color: #ffffff; border-radius: 0 0 16px 16px;">
              <p style="margin: 0; font-size: 12px; color: #bbb;">
                Sent from the contact form at <a href="https://smpl.as/contact" style="color: #999; text-decoration: none;">smpl.as/contact</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function confirmationEmailHtml(firstName: string) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #f5f5f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%;">
          <!-- Header -->
          <tr>
            <td style="background-color: #141416; padding: 32px 40px; border-radius: 16px 16px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>${logoWhite}</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">
              <h1 style="margin: 0 0 24px; font-size: 26px; font-weight: 700; color: #141416; line-height: 1.3;">Hey ${escapeHtml(firstName)}, thanks for reaching out!</h1>
              <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.7; color: #555;">
                We've received your message and one of our team will get back to you within 24 hours.
              </p>
              <p style="margin: 0 0 28px; font-size: 15px; line-height: 1.7; color: #555;">
                If it's urgent, just reply to this email and it'll come straight to us.
              </p>
              <!-- Book a call -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="padding: 24px; background-color: #e5ff21; border-radius: 12px;">
                    <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #555; font-weight: 600;">Free discovery call</p>
                    <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #141416;">Book a 30-min call with Andreas &amp; Mike</p>
                    <p style="margin: 0 0 16px; font-size: 13px; line-height: 1.6; color: #333;">No pitch, no pressure. We'll talk through your idea, challenge, or project and map out what makes sense as a next step.</p>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: #141416; border-radius: 100px;">
                          <a href="https://smpl.as/book" style="display: inline-block; padding: 12px 28px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none;">Pick a time &rarr;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- What we do -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="padding: 24px; background-color: #f5f5f0; border-radius: 12px;">
                    <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #999; font-weight: 600;">In the meantime</p>
                    <p style="margin: 0 0 16px; font-size: 14px; line-height: 1.6; color: #555;">See how we've helped 125+ companies bring their ideas to life:</p>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: #141416; border-radius: 100px;">
                          <a href="https://smpl.as/work" style="display: inline-block; padding: 10px 24px; color: #ffffff; font-size: 13px; font-weight: 600; text-decoration: none;">See Our Work</a>
                        </td>
                        <td style="padding-left: 12px;">
                          <a href="https://smpl.as/blog" style="display: inline-block; padding: 10px 24px; color: #141416; font-size: 13px; font-weight: 600; text-decoration: none; border: 1px solid #ddd; border-radius: 100px;">Read Our Blog</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; font-size: 15px; color: #141416; font-weight: 500;">
                Speak soon,<br>The SmplCo Team
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #ffffff; border-radius: 0 0 16px 16px; border-top: 1px solid #eee;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>${logoDark}</td>
                  <td align="right">
                    <a href="https://www.linkedin.com/company/smplcoas/" style="text-decoration: none; color: #bbb; font-size: 12px; margin-left: 16px;">LinkedIn</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top: 12px;">
                    <p style="margin: 0; font-size: 11px; color: #ccc;">
                      SmplCo &middot; <a href="https://smpl.as" style="color: #bbb; text-decoration: none;">smpl.as</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

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
      to: ['andreas@smpl.as', 'mike@smpl.as'],
      replyTo: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ''}`,
      html: notificationEmailHtml(name, email, company, message),
    })
    fetch('https://go.smpl.as/api/crm/email/log', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CRM_LOG_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ template: 'contact_team_notification', to: ['andreas@smpl.as', 'mike@smpl.as'] }),
    }).catch(() => {}) // never block send on logging

    // Send confirmation email to the person who submitted
    await transporter.sendMail({
      from: `SmplCo <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name.split(' ')[0]}!`,
      html: confirmationEmailHtml(name.split(' ')[0]),
    })
    fetch('https://go.smpl.as/api/crm/email/log', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CRM_LOG_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ template: 'contact_user_confirmation', to: email }),
    }).catch(() => {}) // never block send on logging

    // Sync to CRM — must await to prevent Vercel killing it
    await syncToCrm({
      name,
      email,
      company,
      description: message,
      source: 'contact-form',
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
