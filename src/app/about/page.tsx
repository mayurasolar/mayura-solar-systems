'use client';

import { Card, CardBody, Button } from '@heroui/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Note: Metadata must be added in a separate metadata file for client components
// Create about/metadata.ts or convert to server component

export default function AboutPage() {
  const values = [
    {
      title: 'Quality First',
      description:
        'We never compromise on product quality and customer satisfaction',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description:
        'Constantly evolving with the latest solar technology advancements',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description:
        'Committed to protecting our environment for future generations',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      description: 'Your needs and satisfaction are our top priority',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About{' '}
            <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
              Mayura Solar Systems
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering renewable energy solutions since 2003
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our <span className="text-[#0087d3]">Story</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Mayura Solar Systems was founded with a vision to make clean,
              renewable energy accessible to everyone. For over two decades, we
              have been at the forefront of the solar energy revolution in
              India, providing high-quality solar water heaters, street lights,
              and renewable energy solutions.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              What started as a small enterprise has grown into a trusted name
              in the solar industry, serving thousands of satisfied customers
              across residential, commercial, and industrial sectors. Our
              commitment to quality, innovation, and customer satisfaction has
              been the cornerstone of our success.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, we continue to innovate and expand our product range,
              always staying ahead of the curve in solar technology. Our team of
              experienced professionals is dedicated to helping you make the
              switch to clean, sustainable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core <span className="text-[#0087d3]">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <Card
                key={value.title}
                className="border-2 border-gray-100 hover:border-[#40a8e0] hover:shadow-xl transition-all duration-300 group"
              >
                <CardBody className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0087d3] to-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066b3] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0087d3] to-blue-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">20+</div>
              <p className="text-white/90 font-semibold">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5000+</div>
              <p className="text-white/90 font-semibold">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">10K+</div>
              <p className="text-white/90 font-semibold">Installations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <p className="text-white/90 font-semibold">Quality Assured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-[#0087d3]">Us?</span>
          </h2>
          <div className="space-y-6">
            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] transition-all">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ✓ Premium Quality Products
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We source only the highest quality components and materials
                  for all our products.
                </p>
              </CardBody>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] transition-all">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ✓ Expert Installation & Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our trained technicians ensure proper installation and provide
                  ongoing support.
                </p>
              </CardBody>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] transition-all">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ✓ Competitive Pricing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Best value for money without compromising on quality or
                  service.
                </p>
              </CardBody>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] transition-all">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ✓ Comprehensive Warranty
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All products come with industry-leading warranties for your
                  peace of mind.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Make the Switch to Solar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who have chosen Mayura Solar
            Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/products"
              size="lg"
              className="bg-gradient-to-r from-[#0087d3] to-blue-600 text-white font-bold px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
              radius="lg"
            >
              View Products
            </Button>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white border-2 border-[#0087d3] text-[#0066b3] font-bold px-8 hover:bg-blue-50 transition-all flex items-center justify-center"
              radius="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
