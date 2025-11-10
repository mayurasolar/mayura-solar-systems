import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mayurasolarsystems.com'),
  title: {
    default: 'Mayura Solar Systems Udupi | Solar Water Heaters & Street Lights',
    template: '%s | Mayura Solar Systems Udupi',
  },
  description:
    'Leading solar water heater dealer in Udupi, Mangalore, Manipal, Karnataka. ETC solar water heaters, solar street lights, and solar panels. Serving Udupi, Karkala, Kundapura, Mangalore, Moodabidri, Mulki & nearby areas. 5+ years of quality service.',
  keywords: [
    'solar water heater Udupi',
    'solar water heater in Udupi',
    'solar water heater Mangalore',
    'solar water heater Manipal',
    'solar water heater Karkala',
    'solar water heater Kundapura',
    'solar water heater Moodabidri',
    'solar water heater Mulki',
    'solar water heater Surathkal',
    'ETC solar heater Udupi',
    'solar street lights Udupi',
    'solar panels Udupi Mangalore',
    'solar systems Karnataka',
    'solar dealer Udupi',
    'solar installation Udupi Karnataka',
    'evacuated tube collector Udupi',
    'renewable energy Udupi Mangalore',
    'solar water heater Padubidri',
    'solar dealer Mangalore',
  ],
  authors: [{ name: 'Mayura Solar Systems' }],
  creator: 'Mayura Solar Systems',
  publisher: 'Mayura Solar Systems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mayurasolarsystems.com',
    siteName: 'Mayura Solar Systems Udupi',
    title: 'Mayura Solar Systems Udupi | Solar Water Heaters & Street Lights',
    description:
      'Leading solar water heater dealer in Udupi, Mangalore, Manipal. ETC solar water heaters, solar street lights, and solar panels. 100+ satisfied customers, 200+ installations. Serving Udupi, Karkala, Kundapura, Mangalore, Moodabidri & surrounding areas.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayura Solar Systems Udupi - Solar Water Heaters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayura Solar Systems Udupi | Solar Water Heaters & Street Lights',
    description:
      'Leading solar water heater dealer in Udupi, Mangalore, Manipal. ETC solar water heaters, solar street lights, and solar panels.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mayurasolarsystems.com/#business',
  name: 'Mayura Solar Systems',
  alternateName: 'Mayura Solar',
  url: 'https://mayurasolarsystems.com',
  logo: 'https://mayurasolarsystems.com/images/logo.svg',
  image: 'https://mayurasolarsystems.com/images/peacock-icon.svg',
  description:
    'Leading solar water heater dealer in Udupi, Mangalore, Manipal with 5+ years of quality service. ETC solar water heaters, solar street lights, and solar panels. 100+ customers, 200+ installations. Serving entire Udupi and Dakshina Kannada districts.',
  foundingDate: '2020',
  slogan: 'Powering Your Future with Clean Energy',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2-24A, Mathibettu Varanga, Muniyalu Post',
    addressLocality: 'Udupi',
    addressRegion: 'Karnataka',
    postalCode: '574108',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '13.3409',
    longitude: '74.7421',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Udupi',
    },
    {
      '@type': 'City',
      name: 'Manipal',
    },
    {
      '@type': 'City',
      name: 'Kundapura',
    },
    {
      '@type': 'City',
      name: 'Karkala',
    },
    {
      '@type': 'City',
      name: 'Hebri',
    },
    {
      '@type': 'City',
      name: 'Nitte',
    },
    {
      '@type': 'City',
      name: 'Belman',
    },
    {
      '@type': 'City',
      name: 'Padubidri',
    },
    {
      '@type': 'City',
      name: 'Shirva',
    },
    {
      '@type': 'City',
      name: 'Bajegoli',
    },
    {
      '@type': 'City',
      name: 'Moodabidri',
    },
    {
      '@type': 'City',
      name: 'Mulki',
    },
    {
      '@type': 'City',
      name: 'Surathkal',
    },
    {
      '@type': 'City',
      name: 'Mangalore',
    },
    {
      '@type': 'City',
      name: 'Brahmavara',
    },
    {
      '@type': 'City',
      name: 'Kateel',
    },
    {
      '@type': 'City',
      name: 'Kinnigoli',
    },
    {
      '@type': 'City',
      name: 'Naravi',
    },
    {
      '@type': 'City',
      name: 'Belthangadi',
    },
  ],
  priceRange: '$$',
  telephone: '+91-6363537253',
  email: 'mayurasolar.sys@gmail.com',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-6363537253',
    areaServed: 'IN',
    availableLanguage: ['English', 'Kannada', 'Hindi', 'Tulu'],
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '100',
  },
  sameAs: [
    'https://www.facebook.com/mayurasolar',
    'https://github.com/mayurasolar',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
