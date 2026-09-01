import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from Vite dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Email Transporter (Nodemailer)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER || 'contact.bizmaker@gmail.com',
      pass: process.env.EMAIL_PASS || 'qzoqohhoohstafzg'
    }
  });
};

// API HEALTH CHECK
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'BIZMAKER Marketplace Advisory API',
    time: new Date().toISOString()
  });
});

// API INQUIRY ENDPOINT
app.post('/api/inquiry', async (req, res) => {
  try {
    const {
      name,
      company,
      phone,
      email,
      city,
      website,
      platforms = [],
      revenue,
      skus,
      servicesNeeded = [],
      requirements
    } = req.body;

    console.log(`[INQUIRY RECEIVED] From: ${name} (${company}) | City: ${city} | Phone: ${phone} | Email: ${email}`);

    // Format WhatsApp Text
    const whatsappText = `🚀 *NEW BIZMAKER MARKETPLACE INQUIRY*
---------------------------------------
👤 *Name:* ${name || 'N/A'}
🏢 *Company:* ${company || 'N/A'}
🌆 *City:* ${city || 'N/A'}
📞 *Phone:* ${phone || 'N/A'}
✉️ *Email:* ${email || 'N/A'}
🌐 *Website:* ${website || 'N/A'}

🛍️ *Platforms:* ${Array.isArray(platforms) && platforms.length > 0 ? platforms.join(', ') : 'N/A'}
💰 *Revenue:* ${revenue || 'N/A'}
📦 *SKUs:* ${skus || 'N/A'}
🔧 *Services:* ${Array.isArray(servicesNeeded) && servicesNeeded.length > 0 ? servicesNeeded.join(', ') : 'N/A'}

📝 *Requirements:*
${requirements || 'No specific notes provided.'}
---------------------------------------
Sent via BIZMAKER Web Portal`;

    const encodedWhatsappText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER || '917770916118'}?text=${encodedWhatsappText}`;

    // Format Email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 25px; color: #0f172a;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
          
          <div style="background-color: #041317; padding: 24px; text-align: center; border-bottom: 3px solid #00c9a7;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
              BIZMAKER <span style="color: #00c9a7;">INQUIRY ALERT</span>
            </h2>
            <p style="color: #c7d2d9; margin: 5px 0 0 0; font-size: 12px;">Official Marketplace Operations Advisory Request</p>
          </div>

          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%; color: #475569;">Full Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">${name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Company / Brand:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #00c9a7;">${company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">City / Location:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">${city || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Phone Number:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: bold;">${phone || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Work Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="mailto:${email}" style="color: #0f172a; text-decoration: none; font-weight: bold;">${email || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Website / Store URL:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${website ? `<a href="${website}" target="_blank" style="color: #00c9a7;">${website}</a>` : 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Active Platforms:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${Array.isArray(platforms) && platforms.length > 0 ? platforms.join(', ') : 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Monthly Revenue:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${revenue || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Catalog SKUs:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${skus || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Services Requested:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${Array.isArray(servicesNeeded) && servicesNeeded.length > 0 ? servicesNeeded.join(', ') : 'N/A'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
              <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold; color: #0f172a; text-transform: uppercase;">Specific Requirements:</h4>
              <p style="margin: 0; font-size: 13px; color: #475569; line-height: 1.5;">${requirements || 'No specific notes provided.'}</p>
            </div>

            <div style="margin-top: 25px; text-align: center;">
              <a href="${whatsappUrl}" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 14px;">
                💬 Open WhatsApp Chat (+91 7770916118)
              </a>
            </div>
          </div>

          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
            © 2026 BIZMAKER Operations Control Desk • contact.bizmaker@gmail.com • +91 7770916118
          </div>
        </div>
      </div>
    `;

    let emailStatus = 'NOT_ATTEMPTED';
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"BIZMAKER Portal" <${process.env.EMAIL_USER || 'contact.bizmaker@gmail.com'}>`,
        to: process.env.RECEIVER_EMAIL || 'contact.bizmaker@gmail.com',
        subject: `🚀 New Marketplace Inquiry: ${name || 'Lead'} (${city || 'N/A'}) - ${company || 'Brand'}`,
        html: emailHtml
      });
      emailStatus = 'SMTP_SUCCESS';
      console.log(`[EMAIL SENT VIA SMTP] Sent to ${process.env.RECEIVER_EMAIL || 'contact.bizmaker@gmail.com'}`);
    } catch (emailErr) {
      console.warn(`[SMTP NOTICE] SMTP error: ${emailErr.message}`);
      emailStatus = 'SMTP_FAILED';
    }

    res.status(200).json({
      success: true,
      emailStatus,
      message: 'Inquiry processed successfully.',
      whatsappUrl,
      whatsappText
    });

  } catch (error) {
    console.error('[INQUIRY ERROR]', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error processing inquiry.'
    });
  }
});

// React Single Page Application (SPA) Fallback
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
});

// START EXPRESS SERVER
app.listen(PORT, () => {
  console.log(`
=====================================================
🚀 BIZMAKER BACKEND SERVER IS RUNNING ON PORT ${PORT}
✉️  Email Receiver: ${process.env.RECEIVER_EMAIL || 'contact.bizmaker@gmail.com'}
💬 WhatsApp Target: +${process.env.WHATSAPP_NUMBER || '917770916118'}
🔗 Endpoint: http://localhost:${PORT}/api/inquiry
=====================================================
  `);
});
