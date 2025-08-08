import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const logoPath = path.resolve('./public/mvm_logo.JPG');

  const adminMailOptions = {
    from: `"MoveMo Contact" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: '📩 New Contact Form Submission',
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
        <div style="text-align: center; padding: 20px 0;">
          <img src="cid:mvmLogo" alt="MoveMo Logo" style="max-width: 150px; height: auto;" />
        </div>
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1a3c66; font-size: 24px; margin-bottom: 20px;">New Contact Submission</h2>
          <table style="width: 100%; font-size: 16px; color: #333;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Message:</td>
              <td style="padding: 10px 0;">${message}</td>
            </tr>
          </table>
        </div>
        <div style="text-align: center; padding: 20px 0; font-size: 12px; color: #666;">
          <p>This message was sent via the MoveMo website contact form.</p>
          <p>© MoveMo 2025. All rights reserved.</p>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: 'mvm_logo.JPG',
        path: logoPath,
        cid: 'mvmLogo',
      },
    ],
  };

  const autoReplyOptions = {
    from: `"MoveMo Team" <${process.env.SMTP_USER}>`,
    to: email,
    subject: '📬 Thank You for Reaching Out to MoveMo!',
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="cid:mvmLogo" alt="MoveMo Logo" style="max-width: 150px; height: auto;" />
          </div>
          <h2 style="color: #1a3c66; font-size: 24px; margin-bottom: 20px;">Thank You, ${name}!</h2>
          <p style="color: #333; font-size: 16px; line-height: 1.5;">We’ve received your message and our team is reviewing it. We’ll get back to you as soon as possible, typically within 1-2 business days.</p>
          <p style="color: #333; font-size: 16px; line-height: 1.5;">In the meantime, feel free to explore more about MoveMo or contact us directly if you have any urgent inquiries.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://mvmdriver.com/" style="display: inline-block; padding: 12px 24px; background-color: #1a73e8; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;">Visit Our Website</a>
          </div>
          <p style="color: #333; font-size: 16px; line-height: 1.5;">Best regards,<br><strong>The MoveMo Team</strong></p>
        </div>
        <div style="text-align: center; padding: 20px 0; font-size: 12px; color: #666;">
          <p>Download our app:</p>
          <p>
            <a href="https://www.apple.com/app-store/" style="margin: 0 10px; text-decoration: none;">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style="height: 40px; vertical-align: middle;" />
            </a>
            <a href="https://play.google.com/store" style="margin: 0 10px; text-decoration: none;">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style="height: 60px; vertical-align: middle;" />
            </a>
          </p>
          <p>© MoveMo 2025. All rights reserved.</p>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: 'mvm_logo.JPG',
        path: logoPath,
        cid: 'mvmLogo',
      },
    ],
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}