import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsContent from '@/components/ProductsContent';
import StructuredData from '@/components/StructuredData';
import { generateProductsSchema } from '@/lib/schemas/products';
import { generateBreadcrumb } from '@/lib/schema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Solar Products | Water Heaters, Panels, Street Lights | Mayura Solar Udupi',
  description:
    'Premium solar products in Udupi - ETC solar water heaters, solar panels, street lights, garden lights, water pumps. Best prices, 5-year warranty, expert installation.',
  keywords: [
    'solar water heater price Udupi',
    'ETC solar water heater',
    'solar panels Udupi',
    'solar street lights Karnataka',
    'solar garden lights',
    'solar water pump',
    'buy solar products Udupi',
    'solar heater 100L 200L',
  ],
  openGraph: {
    title:
      'Solar Products - Water Heaters, Panels & More | Mayura Solar Systems',
    description:
      'Explore our range of premium solar products - water heaters, panels, street lights, and more. Quality assured with best warranties in Udupi, Karnataka.',
    url: 'https://www.mayurasolar.xyz/products',
    siteName: 'Mayura Solar Systems',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayura Solar Systems - Solar Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Products | Mayura Solar Systems Udupi',
    description:
      'Premium solar water heaters, panels, street lights and more in Udupi, Karnataka.',
  },
  alternates: {
    canonical: 'https://www.mayurasolar.xyz/products',
  },
};

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'ETC Solar Water Heater',
      category: 'Water Heating',
      description:
        'High-efficiency Evacuated Tube Collector (ETC) solar water heaters with superior heat retention. Perfect for residential and commercial applications.',
      features: [
        '98% heat absorption efficiency',
        'Works in all weather conditions',
        '5-year warranty',
        'Capacities: 100L to 500L',
      ],
      image: '/images/products/water-heater.png',
    },
    {
      id: 2,
      name: 'Solar Street Lights',
      category: 'Lighting',
      description:
        'Intelligent solar-powered street lighting systems with automatic day/night sensors. Ideal for streets, parks, and public spaces.',
      features: [
        'Auto on/off functionality',
        '50,000+ hours lifespan',
        'Weather-resistant IP65 rating',
        '3-year warranty',
      ],
      image: '/images/products/street-light.png',
    },
    {
      id: 3,
      name: 'Solar Panels',
      category: 'Power Generation',
      description:
        'Premium monocrystalline and polycrystalline solar panels for maximum energy output. Suitable for residential and commercial installations.',
      features: [
        '21-23% efficiency rating',
        '25-year performance warranty',
        'Anti-reflective coating',
        'Various wattages available',
      ],
      image: '/images/products/panel.png',
    },
    {
      id: 4,
      name: 'ETC Replacement Tubes',
      category: 'Components',
      description:
        'High-quality replacement evacuated tubes for solar water heaters. Compatible with most standard ETC systems.',
      features: [
        'Borosilicate glass',
        'Selective coating',
        'Standard sizes available',
        '1-year warranty',
      ],
      image: '/images/products/etc.png',
    },
    {
      id: 5,
      name: 'Solar Garden Lights',
      category: 'Lighting',
      description:
        'Decorative solar-powered garden and pathway lights. Easy to install, no wiring required.',
      features: [
        'Automatic charging',
        '8-10 hours backup',
        'Waterproof design',
        'Multiple designs available',
      ],
      image: '/images/products/garden-light.png',
    },
    {
      id: 6,
      name: 'Solar Water Pump',
      category: 'Water Systems',
      description:
        'Efficient solar-powered water pumping systems for agriculture and domestic use. Reliable off-grid solution.',
      features: [
        'DC/AC operation',
        'Various head capacities',
        'Low maintenance',
        '3-year warranty',
      ],
      image: '/images/products/pump.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Our{' '}
            <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of solar energy solutions designed
            for efficiency, reliability, and sustainability.
          </p>
        </div>
      </section>

      <ProductsContent products={products} />

      <Footer />

      {/* Structured Data for SEO */}
      <StructuredData data={generateProductsSchema(products)} />
      <StructuredData
        data={generateBreadcrumb([
          { name: 'Home', url: 'https://www.mayurasolar.xyz' },
          { name: 'Products', url: 'https://www.mayurasolar.xyz/products' },
        ])}
      />
    </div>
  );
}
