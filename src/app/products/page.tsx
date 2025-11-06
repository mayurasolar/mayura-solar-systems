'use client';

import { Card, CardBody, CardHeader, CardFooter, Button } from '@heroui/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      image: '/images/etc-water-heater.jpg',
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
      image: '/images/street-light.jpg',
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
      image: '/images/solar-panel.jpg',
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
      image: '/images/etc-tubes.jpg',
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
      image: '/images/garden-light.jpg',
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
      image: '/images/water-pump.jpg',
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

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <Card
                key={product.id}
                className="border-2 border-gray-100 hover:border-[#40a8e0] hover:shadow-2xl transition-all duration-300 group"
              >
                <CardHeader className="flex-col items-start pb-0 pt-6 px-6">
                  <div className="relative w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
                    <span className="text-6xl">☀️</span>
                    {/* Placeholder - replace with actual product images */}
                  </div>
                  <p className="text-xs uppercase font-bold text-[#0066b3]">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-[#0066b3] transition-colors">
                    {product.name}
                  </h3>
                </CardHeader>
                <CardBody className="overflow-visible py-4 px-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-bold text-sm text-gray-900">
                      Key Features:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={product.id + '-feature-' + index}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button
                    as={Link}
                    href="/contact"
                    className="w-full bg-gradient-to-r from-[#0087d3] to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                    radius="lg"
                  >
                    Get Quote
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0087d3] to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our solar energy experts are ready to help you find the perfect
            solution for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0066b3] font-bold px-12 py-4 rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 border-2 border-white/50"
          >
            Contact Our Experts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
