// Vercel Serverless Function to handle contact form emails
// You need to set up environment variables:
// EMAIL_USER = your gmail address
// EMAIL_PASSWORD = your gmail app password (not regular password)
// Recipient email is hardcoded to anndycrew@gmail.com

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Use Resend API (free tier available) for sending emails
    // Alternative: Use native email service or your preferred provider
    
    // For now, return success - in production, integrate with email service
    // Example with Resend:
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'noreply@viveksankath.dev',
          to: 'anndycrew@gmail.com',
          subject: `New Contact Message from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Reply to: ${email}</small></p>
          `,
          replyTo: email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email via Resend');
      }

      return res.status(200).json({
        success: true,
        message: 'Email sent successfully to anndycrew@gmail.com',
      });
    } else {
      // Fallback: Log the message (in production, implement proper email service)
      console.log('Contact form submission:', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });

      return res.status(200).json({
        success: true,
        message: 'Message received. Please set up RESEND_API_KEY for email delivery.',
      });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      error: 'Failed to process request',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

