import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Fetch logo image from public URL
    const logoUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/mvm_logo.JPG`;
    const response = await fetch(logoUrl);
    const buffer = await response.arrayBuffer();

    // Email to admin
    const adminMailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: '📩 New Contact Message Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
          <h2 style="color: #354a69;">📬 New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <hr style="margin-top: 30px;" />
          <p style="font-size: 12px; color: #999;">This message was submitted via the MoveMo website contact form.</p>
        </div>
      `,
    };

    // Auto-reply to user
    const autoReplyOptions = {
      from: `"MoveMo" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '📥 We Received Your Message!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="cid:mvmLogo" alt="MoveMo Logo" style="max-width: 120px; height: auto;" />
          </div>
          <h2 style="color: #354a69;">Thank you for contacting us, ${name}!</h2>
          <p>We’ve received your message and will get back to you as soon as possible.</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>The MoveMo Team</strong></p>
          <hr style="margin-top: 40px;" />
          <p style="font-size: 12px; color: #999; text-align: center;">© mvmdriver 2025. All rights reserved.</p>
        </div>
      `,
      attachments: [
        {
          filename: 'mvm_logo.JPG',
          content: Buffer.from(buffer),
          cid: 'mvmLogo',
        },
      ],
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
