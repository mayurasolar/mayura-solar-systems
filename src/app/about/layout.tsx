import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Solar Company in Udupi & Mangalore Since 2003',
  description:
    'Mayura Solar Systems - Leading solar company in Udupi, Mangalore, Karnataka since 2003. 20+ years of excellence in solar water heaters and renewable energy solutions. Serving Udupi, Karkala, Kundapura, Mangalore, Moodabidri & nearby areas.',
  keywords: [
    'solar company Udupi',
    'solar company Mangalore',
    'solar company Karkala',
    'about mayura solar Udupi',
    'renewable energy company Udupi',
    'solar energy pioneers Karnataka',
    'best solar dealer Udupi',
    'solar dealer Mangalore',
    'solar company Dakshina Kannada',
    'solar water heater Karkala',
    'solar street light Karkala',
    'solar water heater Kundapura',
    'solar street lights Moodabidri',
    'solar panels Udupi',
    'solar installation Mangalore',
    'solar water heater Hebri'
  ],
  openGraph: {
    title: 'About Mayura Solar Systems - Udupi & Mangalore',
    description:
      'Pioneering solar energy solutions in Udupi and Mangalore since 2020. Learn about our journey and commitment to sustainability.',
    type: 'website',
    images: ['/images/peacock-icon.svg'],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
