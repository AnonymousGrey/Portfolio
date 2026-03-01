// Vercel Serverless Function to handle contact form emails
// Configuration: Set RESEND_API_KEY environment variable for email delivery
// Emails are sent to: anndycrew@gmail.com

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Rate limiting: simple in-memory store (reset on deployment)
const submissions = new Map();
function checkRateLimit(ip, maxRequests = 5, windowMs = 3600000) {
  const now = Date.now();
  const userSubmissions = submissions.get(ip) || [];
  
  // Filter out old submissions outside the time window
  const recentSubmissions = userSubmissions.filter(time => now - time < windowMs);
  
  if (recentSubmissions.length >= maxRequests) {
    return false;
  }
  
  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);
  return true;
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  // Rate limiting check
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ 
        error: 'Email service is not configured. Please contact the site administrator.' 
      });
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'anndycrew@gmail.com',
        replyTo: email,
        subject: `New Contact Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(message)}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              Message sent from Portfolio Contact Form<br>
              Timestamp: ${new Date().toISOString()}
            </p>
          </div>
        `,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', responseData);
      throw new Error(`Resend API error: ${responseData.message || 'Unknown error'}`);
    }

    console.log('Email sent successfully:', responseData.id);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      error: 'Failed to send message. Please try again later.',
      ...(process.env.NODE_ENV === 'development' && { 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
    });
  }
}

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

