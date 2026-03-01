# Contact Form Setup Guide

This portfolio includes a functional contact form that sends emails to `anndycrew@gmail.com`.

## Setup Instructions

### Option 1: Using Resend (Recommended - Free)

1. Sign up at [Resend.com](https://resend.com) (free tier available)
2. Get your API key from the dashboard
3. Set the environment variable:

```bash
RESEND_API_KEY=your_resend_api_key
```

4. For Vercel deployment, add this to Vercel project settings under Environment Variables

### Option 2: Using Gmail + Nodemailer

1. Set up environment variables:
```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
```

2. For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833?hl=en) (not your regular password)

3. Install nodemailer:
```bash
npm install nodemailer
```

## Testing Locally

1. Create `.env.local` file in project root:
```
RESEND_API_KEY=your_api_key_here
```

2. Run development server:
```bash
npm run dev
```

3. Test the contact form - messages will be sent to anndycrew@gmail.com

## Contact Information

The contact section includes:
- **Email**: vivek.23mei10045@vitbhopal.ac.in
- **Phone**: +91 93295 44611
- **LinkedIn**: https://www.linkedin.com/in/vivek-sankath/
- **GitHub**: https://github.com/AnonymousGrey
