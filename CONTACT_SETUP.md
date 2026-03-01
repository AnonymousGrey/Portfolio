# Contact Form Setup Guide

This portfolio includes a fully functional contact form that sends emails to `anndycrew@gmail.com`.

## Quick Start

The contact form is set up and ready to use. You just need to configure the email service.

### Step 1: Set Up Resend (Free)

1. **Sign up** at [Resend.com](https://resend.com) (free tier includes 100 emails/day)
2. **Get your API key** from the Resend dashboard
3. **Add to environment variables**

### Step 2: Configure Environment Variables

#### For Local Development:

1. Create a `.env.local` file in the project root (if it doesn't exist):
```bash
# .env.local
RESEND_API_KEY=re_your_actual_api_key_here
```

2. Run the development server:
```bash
npm run dev
```

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
4. Redeploy your project

### Step 3: Test the Form

1. Navigate to the Contact section on your portfolio
2. Fill out the form with:
   - Your name
   - Your email address
   - Your message
3. Click "Send"
4. You should receive the email at `anndycrew@gmail.com`

## Features

- ✅ **Email validation** - validates email format
- ✅ **Rate limiting** - prevents spam (5 requests per hour per IP)
- ✅ **XSS protection** - HTML escaping for security
- ✅ **Beautiful email template** - formatted HTML emails
- ✅ **Reply-to functionality** - sender's email is in reply-to
- ✅ **Error handling** - user-friendly error messages

## Email Receipt

When someone submits the form, you'll receive an email at `anndycrew@gmail.com` containing:
- Sender's name
- Sender's email (can reply directly)
- The message content
- Timestamp of submission

## Troubleshooting

### "Email service is not configured" error

**Solution:** Ensure `RESEND_API_KEY` environment variable is set correctly.

For Vercel: Check Environment Variables in project settings and redeploy.

For local development: Create `.env.local` file with the API key.

### Emails not being received

1. Check **spam/junk folder** in your email
2. Verify the **API key is correct** and active in Resend dashboard
3. Check **Resend activity log** for errors: [Resend Dashboard](https://dashboard.resend.com)

### Rate limiting error

If users get "Too many requests" error:
- Wait 1 hour before submitting again
- This is by design to prevent spam

## Alternative Email Services

If you prefer not to use Resend, other options include:
- **SendGrid** - Free tier (100 emails/day)
- **Gmail + Nodemailer** - Requires Gmail app password
- **AWS SES** - Lowest cost at scale
- **Mailgun** - Free tier available

## Important Security Notes

⚠️ **Never commit `.env.local`** to git - it's already in `.gitignore`

⚠️ **Keep your API key secret** - treat it like a password

⚠️ **Resend sender domain** - Free tier uses `onboarding@resend.dev` as sender. For custom sender domain, upgrade Resend account.

## Support

- Resend documentation: https://resend.com/docs
- Report issues in the project repository

---

**Contact recipient:** anndycrew@gmail.com  
**Form location:** Contact section at the bottom of the portfolio

- **Email**: vivek.23mei10045@vitbhopal.ac.in
- **Phone**: +91 93295 44611
- **LinkedIn**: https://www.linkedin.com/in/vivek-sankath/
- **GitHub**: https://github.com/AnonymousGrey
