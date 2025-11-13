'use client';

import Image from 'next/image';
import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const products = [
    {
      title: 'Solar Water Heaters',
      description:
        'High-efficiency ETC pipe solar water heaters for homes and commercial use.',
      icon: '',
    },
    {
      title: 'Solar Street Lights',
      description:
        'Energy-efficient lighting solutions for streets, parks, and public spaces.',
      icon: '',
    },
    {
      title: 'Solar Panels',
      description:
        'Premium quality solar panels for sustainable energy generation.',
      icon: '',
    },
  ];

  const features = [
    {
      title: '5+ Years Experience',
      description: 'Trusted expertise in solar energy solutions',
      icon: '',
    },
    {
      title: 'Premium Quality',
      description: 'High-grade materials and components',
      icon: '',
    },
    {
      title: 'Expert Installation',
      description: 'Professional setup and maintenance',
      icon: '',
    },
    {
      title: 'Eco-Friendly',
      description: 'Reduce carbon footprint sustainably',
      icon: '',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div className="mb-8">
                <Image
                  src="/images/logo.svg"
                  alt="Mayura Solar Systems"
                  width={388}
                  height={148}
                  className="h-auto w-full max-w-md drop-shadow-lg"
                  priority
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Innovate with{' '}
                <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
                  Renewable Energy
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Leading provider of solar water heaters, ETC pipes, and solar
                street lights. Harness the power of the sun for a sustainable
                future.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  as={Link}
                  href="/products"
                  size="lg"
                  className="bg-gradient-to-r from-[#0087d3] to-blue-600 text-white font-bold px-8 h-12 text-base text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  radius="lg"
                >
                  View Products
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  className="bg-white border-2 border-[#0087d3] text-[#0066b3] font-bold px-8 h-12 text-base text-center hover:bg-[#0087d3] hover:text-white hover:border-[#0087d3] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  radius="lg"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[600px] h-[450px] flex items-center justify-center">
              <Image
                src="/images/banner_transparent_bg.png"
                alt="Mayura Solar Systems Products - Solar Water Heaters, Solar Panels, Street Lights"
                fill
                className="object-contain object-center drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar energy solutions for residential and
              commercial needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map(product => (
              <Card
                key={product.title}
                className="bg-white border-2 border-gray-100 hover:border-[#40a8e0] hover:shadow-2xl transition-all duration-300 group"
              >
                <CardHeader className="flex-col items-start px-6 pt-8 pb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0066b3] transition-colors">
                    {product.title}
                  </h3>
                </CardHeader>
                <CardBody className="px-6 pb-8">
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Button
                    as={Link}
                    href="/products"
                    variant="light"
                    className="text-[#0066b3] font-semibold p-0 hover:text-[#005999]"
                  >
                    Learn More ?
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
                Mayura Solar
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality, expertise, and sustainability in every installation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-50 transition-all duration-300 group"
              >
                <div className="text-6xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0066b3] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Across{' '}
              <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
                Coastal Karnataka
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Premium solar water heaters in Udupi, Karkala, Mangalore, Manipal, and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { city: 'Udupi', desc: 'Solar Water Heater Installation & Service' },
              { city: 'Karkala', desc: 'ETC Solar Water Heaters & Street Lights' },
              { city: 'Mangalore', desc: 'Complete Solar Energy Solutions' },
              { city: 'Manipal', desc: 'Residential & Commercial Solar Systems' },
              { city: 'Kundapura', desc: 'Solar Water Heater Dealers' },
              { city: 'Moodbidri', desc: 'Solar Installation & Maintenance' },
            ].map(location => (
              <Card
                key={location.city}
                className="bg-white border border-gray-200 hover:border-[#40a8e0] hover:shadow-lg transition-all duration-300"
              >
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {location.city}
                  </h3>
                  <p className="text-gray-600 text-sm">{location.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-base mb-4">
              Also proudly serving: Padubidri, Mulki, Surathkal, Brahmavara, Hebri, Nitte, Belman, Shirva, and more locations across Udupi and Dakshina Kannada districts.
            </p>
            <Button
              as={Link}
              href="/contact"
              className="bg-gradient-to-r from-[#0087d3] to-blue-600 text-white font-semibold"
              size="lg"
            >
              Check Service Availability
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0087d3] via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-blue-50 mb-8 leading-relaxed">
            Get a free consultation and quote for your solar energy needs
          </p>
          <Button
            as={Link}
            href="/contact"
            size="lg"
            className="bg-white text-[#0066b3] font-bold px-10 py-6 text-base shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all"
            radius="lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
