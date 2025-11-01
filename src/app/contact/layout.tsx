import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Solar Water Heater Dealer in Udupi & Mangalore',
  description:
    'Contact Mayura Solar Systems in Udupi for solar water heaters, street lights, and panels. Get expert consultation and free quotes. Serving Udupi, Mangalore, Manipal, Karkala, Kundapura, Moodabidri & nearby areas.',
  keywords: [
    'contact solar company Udupi',
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
    type: 'website',
    images: ['/images/contact-og.jpg'],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
