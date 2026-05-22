import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";
app.use(cors({
  origin: allowedOrigin === "*" ? "*" : allowedOrigin,
  methods: ["GET", "POST"],
  credentials: true
}));

// Body parser
app.use(express.json());

// Setup nodemailer transporter
const isSmtpConfigured = 
  process.env.SMTP_PASS && 
  process.env.SMTP_PASS !== "your_app_password_here" && 
  process.env.SMTP_USER;

let transporter = null;

if (isSmtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
} else {
  console.warn("⚠️ SMTP credentials not set or set to defaults in .env. Emails will be logged to console in Dev Mock mode.");
}

// Health Check & SMTP verification Route
app.get("/", async (req, res) => {
  let smtpStatus = "Not Configured (Running in Mock Mode)";
  if (isSmtpConfigured && transporter) {
    try {
      await transporter.verify();
      smtpStatus = "Connected Successfully";
    } catch (error) {
      smtpStatus = `Connection Error: ${error.message}`;
    }
  }

  res.json({
    status: "online",
    message: "Researcher Portfolio Backend is running!",
    smtp: smtpStatus,
    timestamp: new Date().toISOString()
  });
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Please provide name, email, and message." 
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL || "aineenwz@gmail.com";

  // Email to Admin
  const adminMailOptions = {
    from: isSmtpConfigured ? `"${name} via Portfolio" <${process.env.SMTP_USER}>` : '"Portfolio Admin" <admin@example.com>',
    to: adminEmail,
    replyTo: email,
    subject: `📩 New Contact Form Submission from ${name}`,
    text: `You have received a new message from your Dr. Qurat-ul-Ain portfolio contact form:\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}\n\n` +
          `---`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">📩 New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #6366f1; margin: 20px 0;">
          <p style="margin: 0; font-style: italic; white-space: pre-wrap;">"${message}"</p>
        </div>
        <p style="font-size: 12px; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
          This message was sent directly from your Researcher Portfolio Contact Form.
        </p>
      </div>
    `
  };

  // Auto-Reply to Visitor
  const visitorMailOptions = {
    from: isSmtpConfigured ? `"Dr. Qurat ul Ain" <${process.env.SMTP_USER}>` : '"Dr. Qurat ul Ain" <no-reply@example.com>',
    to: email,
    subject: `Thank you for reaching out, ${name}!`,
    text: `Dear ${name},\n\n` +
          `Thank you for contacting me. I have received your message and will review it as soon as possible.\n\n` +
          `Below is a copy of your message:\n` +
          `"${message}"\n\n` +
          `Best regards,\n` +
          `Dr. Qurat ul Ain\n` +
          `Researcher | Educator | Mentor`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; color: #333;">
        <h2 style="color: #6366f1;">Thank you for reaching out!</h2>
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for getting in touch. I have received your message and will review it as soon as possible.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #ccc; margin: 20px 0;">
          <h4 style="margin: 0 0 10px 0; color: #555;">Copy of your message:</h4>
          <p style="margin: 0; font-style: italic; white-space: pre-wrap;">"${message}"</p>
        </div>
        
        <p>If you're interested in collaborative opportunities, research partnerships, or mentorship, I look forward to discussing how we can work together.</p>
        
        <br />
        <p style="margin: 0;">Warm regards,</p>
        <p style="margin: 0; font-weight: bold; color: #6366f1;">Dr. Qurat ul Ain</p>
        <p style="margin: 0; font-size: 13px; color: #777;">Researcher | Educator | Mentor</p>
      </div>
    `
  };

  try {
    if (isSmtpConfigured && transporter) {
      // Send both emails in parallel
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(visitorMailOptions)
      ]);
      console.log(`✅ Contact email sent to admin (${adminEmail}) and visitor (${email}).`);
    } else {
      console.log("🛠️ Dev Mock Mode: Contact Form Submitted!");
      console.log("Admin Email Options:", JSON.stringify(adminMailOptions, null, 2));
      console.log("Visitor Email Options:", JSON.stringify(visitorMailOptions, null, 2));
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!"
    });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: error.message
    });
  }
});

// Newsletter subscription Endpoint
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address."
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL || "aineenwz@gmail.com";

  // Admin Notification Options
  const adminNotificationOptions = {
    from: isSmtpConfigured ? `"Portfolio Newsletter" <${process.env.SMTP_USER}>` : '"Portfolio Newsletter" <admin@example.com>',
    to: adminEmail,
    subject: `📰 New Newsletter Subscriber Joined!`,
    text: `A new visitor has subscribed to your newsletter.\n\n` +
          `Subscriber Email: ${email}\n\n` +
          `---`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">📰 New Newsletter Subscriber</h2>
        <p>A new visitor has subscribed to your newsletter updates.</p>
        <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="font-size: 12px; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
          This subscription was submitted from your Researcher Portfolio newsletter signup.
        </p>
      </div>
    `
  };

  // Welcome Email Options
  const welcomeOptions = {
    from: isSmtpConfigured ? `"Dr. Qurat ul Ain" <${process.env.SMTP_USER}>` : '"Dr. Qurat ul Ain" <no-reply@example.com>',
    to: email,
    subject: `Welcome to my newsletter! - Dr. Qurat ul Ain`,
    text: `Hello,\n\n` +
          `Thank you for subscribing to my mailing list. You will now receive updates on the latest research findings, publications, free seminars, webinars, and other academic resources.\n\n` +
          `If you ever have any questions or want to collaborate, feel free to get in touch!\n\n` +
          `Best regards,\n` +
          `Dr. Qurat ul Ain\n` +
          `Researcher | Educator | Mentor`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; color: #333; line-height: 1.6;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #6366f1; margin: 0;">Welcome to my Newsletter!</h2>
          <p style="color: #777; font-size: 14px; margin-top: 5px;">Dr. Qurat ul Ain</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p>Hello,</p>
        <p>Thank you for subscribing to my mailing list! I'm thrilled to have you join this community of researchers, educators, and early-career scholars.</p>
        <p>You will now receive regular updates on:</p>
        <ul style="padding-left: 20px;">
          <li>Upcoming <strong>free seminars & webinars</strong></li>
          <li>New <strong>research publications & papers</strong></li>
          <li>Curated <strong>academic and writing resources</strong></li>
          <li>Opportunities for <strong>collaboration and mentorship</strong></li>
        </ul>
        <p>If you're interested in immediate collaboration, seminars, or mentorship, don't hesitate to visit my <a href="${allowedOrigin}" style="color: #6366f1; font-weight: bold; text-decoration: none;">Portfolio Website</a> and drop me a message!</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
        <p style="margin: 0;">Warm regards,</p>
        <p style="margin: 0; font-weight: bold; color: #6366f1;">Dr. Qurat ul Ain</p>
        <p style="margin: 0; font-size: 13px; color: #777;">Researcher | Educator | Mentor</p>
      </div>
    `
  };

  try {
    if (isSmtpConfigured && transporter) {
      // Send both emails in parallel
      await Promise.all([
        transporter.sendMail(adminNotificationOptions),
        transporter.sendMail(welcomeOptions)
      ]);
      console.log(`✅ Newsletter subscription emails sent for ${email}.`);
    } else {
      console.log("🛠️ Dev Mock Mode: Newsletter Subscription Submitted!");
      console.log("Admin Notification Options:", JSON.stringify(adminNotificationOptions, null, 2));
      console.log("Welcome Email Options:", JSON.stringify(welcomeOptions, null, 2));
    }

    return res.status(200).json({
      success: true,
      message: "Subscribed successfully!"
    });
  } catch (error) {
    console.error("❌ Error processing newsletter subscription:", error);
    return res.status(500).json({
      success: false,
      message: "Subscription failed. Please try again later.",
      error: error.message
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`👉 Access backend healthcheck at http://localhost:${PORT}`);
});
