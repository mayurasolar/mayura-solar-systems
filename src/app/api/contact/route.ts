import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Web3Forms (free service)
    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || '',
        name: name,
        email: email,
        phone: phone,
        subject: `New Contact Form: ${subject}`,
        message: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
        `,
        from_name: 'Mayura Solar Systems Website',
        to_email: 'mayurasolar.sys@gmail.com',
      }),
    });

    const result = await web3FormsResponse.json();

    // If Web3Forms returned success, respond OK. Otherwise return details
    // from the external service to help debugging (status 502: bad gateway).
    if (web3FormsResponse.ok && result && result.success) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 }
      );
    } else {
      console.error('Web3Forms response error:', result);
      return NextResponse.json(
        { error: 'Failed to send email via Web3Forms', details: result },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
