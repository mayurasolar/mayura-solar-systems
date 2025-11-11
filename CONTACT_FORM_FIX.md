# Contact Form Fix - Web3Forms Access Key Issue

## Problem
Your current Web3Forms access key is returning **403 Forbidden**, which means:
- The key is invalid
- The key has been revoked
- The key has expired

## Solution: Get a New Access Key

### Step 1: Visit Web3Forms
Go to: **https://web3forms.com/**

### Step 2: Create New Access Key
1. Click **"Get Started"** or **"Create Access Key"**
2. Enter your email: **mayurasolar.sys@gmail.com**
3. Verify your email (check inbox/spam)
4. Copy the new access key

### Step 3: Update Environment Variable
Open `.env.local` and replace the old key:

```bash
WEB3FORMS_ACCESS_KEY=YOUR_NEW_KEY_HERE
```

### Step 4: Restart Development Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 5: Test Contact Form
1. Open http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. Should see success message

## Alternative: Use EmailJS (If Web3Forms doesn't work)

If Web3Forms continues to have issues, you can use EmailJS:

1. Sign up at: https://www.emailjs.com/
2. Get your Public Key, Service ID, and Template ID
3. Update the API route to use EmailJS instead

Would you like help switching to EmailJS if needed?

---

## Current Error Logs
```
POST /api/contact 500 in 774ms
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

This error means Web3Forms is returning an HTML error page (403 Forbidden page) instead of JSON.
