import { NextRequest, NextResponse } from 'next/server';

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.company || !body.role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: In production, integrate with your email service (SendGrid, Mailgun, etc.)
    // Log only non-sensitive metadata; do not log PII
    console.log('Assessment Request Received:', {
      timestamp: new Date().toISOString(),
      requestId: crypto.randomUUID(),
    });

    // You could send an email here using a service like:
    // - SendGrid: await sgMail.send({...})
    // - Mailgun: await mg.messages.create(...)
    // - Resend: await resend.emails.send({...})
    // - Nodemailer: await transporter.sendMail({...})

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Assessment request received. We will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
