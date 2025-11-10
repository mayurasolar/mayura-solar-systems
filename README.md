# Mayura Solar Systems - Website

A modern, professional website for Mayura Solar Systems built with Next.js, Hero UI, and TypeScript.

![Mayura Solar Systems](public/images/logo.png)

## 🌟 Features

- **Modern Design**: Beautiful, responsive UI built with Hero UI components
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Fast Performance**: Built with Next.js 14 App Router for optimal speed
- **Dark Mode**: Automatic dark/light theme switching
- **Responsive**: Works perfectly on all devices
- **Contact Form**: Built-in inquiry form with validation
- **Product Showcase**: Dedicated pages for solar products

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation & Development

First, install dependencies:

```bash
npm install
```

**IMPORTANT: Add Your Logo**
- Place your Mayura logo as `public/images/logo.png`
- Recommended size: 200x200px (transparent PNG)
- Add product images to `public/images/` folder

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
mayura-solar-systems/
├── src/
│   ├── app/
│   │   ├── about/          # About page with metadata
│   │   ├── contact/        # Contact form page
│   │   ├── products/       # Products showcase
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx        # Homepage
│   │   ├── sitemap.ts      # XML sitemap
│   │   └── robots.ts       # Robots.txt
│   ├── components/         # Reusable components
│   ├── lib/               # Utility functions & schemas
│   └── types/             # TypeScript types
├── public/
│   └── images/            # Static images
└── SEO_GUIDE.md           # Complete SEO documentation
```

## 🔍 SEO Features

This website is **fully optimized for search engines**:

- ✅ **Meta Tags**: Unique titles, descriptions, keywords per page
- ✅ **Open Graph**: Social media preview optimization
- ✅ **Structured Data**: Schema.org JSON-LD markup
- ✅ **Sitemap**: Auto-generated XML sitemap
- ✅ **Robots.txt**: Search engine crawling directives
- ✅ **Performance**: Next.js optimization built-in
- ✅ **Mobile-Friendly**: Responsive design

**See [SEO_GUIDE.md](./SEO_GUIDE.md) for complete SEO setup instructions.**

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🚀 Getting Started
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact form
│   │   ├── products/       # Products showcase
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx        # Home page
│   │   ├── providers.tsx   # Hero UI & Theme providers
│   │   ├── robots.ts       # SEO robots.txt
│   │   └── sitemap.ts      # SEO sitemap
│   └── components/
│       ├── Navbar.tsx      # Navigation bar
│       └── Footer.tsx      # Footer component
├── public/
│   └── images/
│       └── logo.png        # ⚠️ ADD YOUR LOGO HERE
├── tailwind.config.ts      # Tailwind & Hero UI config
└── package.json
```

## 🎨 Customization

### 1. Update Company Information

**Contact Details** (`src/app/contact/page.tsx`):
- Email addresses
- Phone numbers  
- Physical address

**Footer** (`src/components/Footer.tsx`):
- Company description
- Links and social media

**About Page** (`src/app/about/page.tsx`):
- Company story and history
- Team information
- Statistics

### 2. Update Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    blue: "#0072f5",     // Main brand color
    lightBlue: "#5EA2FF",
    darkBlue: "#004699",
  },
},
```

### 3. Update Domain for SEO

Edit `src/app/sitemap.ts` and `src/app/robots.ts`:
```typescript
const baseUrl = 'https://yourdomain.com'  // Update this
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy on Vercel

### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Method 2: Vercel Dashboard

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Configure:
   - Framework: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **Deploy**

Your site will be live in minutes! ✨

### Custom Domain Setup

1. In Vercel Dashboard → Project Settings → Domains
2. Add your domain (e.g., `mayurasolar.xyz`)
3. Update DNS records as instructed
4. SSL certificate auto-generated

## 📧 Contact Form Integration

Currently logs to console. To make it functional:

**Option 1: Email API Service**
1. Sign up for [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)
2. Create API route: `src/app/api/contact/route.ts`
3. Update form submission

**Option 2: Form Services**
- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)
- [Formspark](https://formspark.io)

## 📊 Add Analytics (Optional)

### Google Analytics
```typescript
// Add to src/app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

## ✅ Pre-Deployment Checklist

- [ ] Add logo to `public/images/logo.png`
- [ ] Update contact information (email, phone, address)
- [ ] Update domain in `sitemap.ts` and `robots.ts`
- [ ] Customize brand colors if needed
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Set up contact form backend
- [ ] Add product images
- [ ] Test all pages and links

## 🆘 Support & Maintenance

**Contact:**
- Email: info@mayurasolar.xyz
- Website: [Your Domain]

**Tech Stack:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+
- Hero UI (latest)
- Tailwind CSS 3+
- React Hook Form

## 📄 License

Copyright © 2025 Mayura Solar Systems. All rights reserved.

---

Built with ❤️ using Next.js & Hero UI
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
