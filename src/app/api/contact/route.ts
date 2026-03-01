import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, interest, message } = body

    // Validate required fields
    if (!name || !email || !message || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // ── Option 1: Resend (recommended) ──
    // Install: npm install resend
    // Set RESEND_API_KEY in your .env.local
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'SmplCo Website <noreply@smpl.co>',
    //   to: 'hello@smpl.co',
    //   replyTo: email,
    //   subject: `New enquiry from ${name} — ${interest}`,
    //   html: `
    //     <h2>New contact form submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Interest:</strong> ${interest}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    // ── Option 2: Log to console (works immediately, replace with Resend above) ──
    console.log('=== New Contact Form Submission ===')
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Company: ${company || 'N/A'}`)
    console.log(`Interest: ${interest}`)
    console.log(`Message: ${message}`)
    console.log('==================================')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
