import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Solar Water Heater Dealer in Udupi & Mangalore',
  description:
    'Contact Mayura Solar Systems in Udupi for solar water heaters, street lights, and panels. Get expert consultation and free quotes. Serving Udupi, Mangalore, Manipal, Karkala, Kundapura, Moodabidri & nearby areas.',
  keywords: [
    'contact solar company Udupi',
    'contact solar company Karkala',
    'contact solar dealer Mangalore',
    'solar heater quote Udupi',
    'solar installation contact Udupi',
    'mayura solar Udupi contact',
    'solar energy consultation Udupi',
    'solar dealer Udupi phone number',
    'solar company Mangalore contact',
  ],
  openGraph: {
    title: 'Contact Mayura Solar Systems - Udupi & Mangalore',
    description:
      'Get in touch for solar solutions in Udupi and Mangalore. Expert consultation and competitive quotes.',
    url: 'https://www.mayurasolar.xyz/contact',
    siteName: 'Mayura Solar Systems',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Mayura Solar Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mayura Solar Systems - Udupi & Mangalore',
    description:
      'Get expert solar consultation and free quotes in Udupi, Mangalore region.',
  },
  alternates: {
    canonical: 'https://www.mayurasolar.xyz/contact',
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
