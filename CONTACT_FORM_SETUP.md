# Contact Form Email Setup Guide

## 🎯 Quick Setup (5 Minutes)

Your contact form is ready to send emails to: **mayurasolar.sys@gmail.com**

### Step 1: Get Free Web3Forms Access Key

1. Go to: **https://web3forms.com**
2. Click "Get Started for Free"
3. Enter your email: **mayurasolar.sys@gmail.com**
4. Click "Create Access Key"
5. Copy the access key (looks like: `abc123-def456-ghi789`)

### Step 2: Add Access Key to Your Project

1. Create a file named `.env.local` in your project root
2. Add this line:
   ```
   WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Replace `your_access_key_here` with the actual key from Web3Forms

### Step 3: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ That's It!

Your contact form will now send emails to **mayurasolar.sys@gmail.com**

### Test It:
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox!

---

## 📧 What Emails Look Like:

**From:** Mayura Solar Systems Website  
**To:** mayurasolar.sys@gmail.com  
**Subject:** New Contact Form: [Subject from form]

**Body:**
```
Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
Subject: [Subject]

Message:
[Customer Message]
```

---

## 🔒 Security Features:

✅ Server-side processing (secure)  
✅ Input validation  
✅ Spam protection built-in  
✅ Environment variable for API key (not exposed)  

---

## 💡 Alternative Email Services (if needed):

### Option 1: Web3Forms (Current - FREE) ✅
- **Free tier:** Unlimited emails
- **Setup time:** 2 minutes
- **Best for:** Small to medium websites
- **Link:** https://web3forms.com

### Option 2: Resend (Professional)
- **Free tier:** 3,000 emails/month
- **Setup:** `npm install resend`
- **Best for:** Professional projects
- **Link:** https://resend.com

### Option 3: SendGrid
- **Free tier:** 100 emails/day
- **Setup:** `npm install @sendgrid/mail`
- **Best for:** Large volume
- **Link:** https://sendgrid.com

### Option 4: Gmail SMTP (Using Gmail directly)
- **Free tier:** 500 emails/day
- **Setup:** `npm install nodemailer`
- **Best for:** Direct Gmail sending
- **Requires:** App password setup in Gmail

---

## 🛠️ Troubleshooting:

### Form doesn't send:
1. Check `.env.local` file exists
2. Verify access key is correct
3. Restart dev server
4. Check browser console for errors

### Not receiving emails:
1. Check spam folder
2. Verify email address in Web3Forms dashboard
3. Test with different email to confirm it's working

### Error: "Failed to send message":
1. Check internet connection
2. Verify Web3Forms service is online
3. Check access key is valid

---

## 📱 Production Deployment:

### Vercel (Recommended):
1. Add environment variable in Vercel dashboard:
   - Key: `WEB3FORMS_ACCESS_KEY`
   - Value: [Your access key]

### Other Platforms:
Add the environment variable in your hosting platform's dashboard.

---

## 🎨 Customization:

### Change Recipient Email:
Edit `src/app/api/contact/route.ts`, line 37:
```typescript
to_email: 'mayurasolar.sys@gmail.com', // Change this
```

### Change Email Format:
Edit lines 31-43 in the same file to customize the email template.

---

## ✉️ Email Notifications:

You'll receive an email instantly when someone submits the contact form with:
- Customer name
- Customer email (so you can reply)
- Customer phone
- Their message
- Timestamp

---

**Your contact form is production-ready!** 🚀
