import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Products in Udupi & Mangalore - Water Heaters, Street Lights',
  description:
    'Best solar water heaters in Udupi, Mangalore, Manipal. ETC solar water heaters, solar street lights, and solar panels. Expert installation across Udupi & Dakshina Kannada. Get free quote.',
  keywords: [
    'solar water heater Udupi price',
    'solar water heater Mangalore',
    'ETC solar heater Udupi',
    'solar street light Udupi',
    'solar panels Udupi Mangalore',
    'solar water heater Manipal',
    'solar water heater Karkala',
    'solar water heater Moodbidri',
    'solar water heater Kundapura',
    'evacuated tube collector Udupi',
    'buy solar products Udupi',
    'solar dealer Udupi Mangalore',
    'solar installation Udupi',
  ],
  openGraph: {
    title: 'Solar Products in Udupi & Mangalore - Mayura Solar Systems',
    description:
      'Premium solar water heaters, street lights, and panels in Udupi, Mangalore. Best prices and professional installation.',
    type: 'website',
    images: ['/images/products-og.jpg'],
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
