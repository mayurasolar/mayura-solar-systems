'use client';

import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import Link from 'next/link';

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AboutContentProps {
  values: Value[];
}

export default function AboutContent({ values }: AboutContentProps) {
  return (
    <>
      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our <span className="text-[#0087d3]">Story</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Mayura Solar Systems was founded with a vision to make clean,
              renewable energy accessible to everyone. Over the past 5 years, we
              have been committed to providing high-quality solar water heaters,
              street lights, and renewable energy solutions in Udupi and
              surrounding areas.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              What started as a small enterprise has grown into a trusted name
              in the solar industry, serving over 100 satisfied customers across
              residential, commercial, and industrial sectors. Our commitment to
              quality, innovation, and customer satisfaction has been the
              cornerstone of our success.
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
              <div className="text-5xl font-bold text-white mb-2">5+</div>
              <p className="text-white/90 font-semibold">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <p className="text-white/90 font-semibold">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">200+</div>
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
            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] hover:shadow-lg transition-all duration-300 group">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0087d3] to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066b3] transition-colors">
                      Premium Quality Products
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We source only the highest quality components and
                      materials. Every product undergoes rigorous testing to
                      ensure durability and peak performance in all weather
                      conditions.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] hover:shadow-lg transition-all duration-300 group">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0087d3] to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066b3] transition-colors">
                      Expert Installation & Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our certified technicians provide professional
                      installation with attention to detail. We offer ongoing
                      maintenance support and quick response times for any
                      service needs.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] hover:shadow-lg transition-all duration-300 group">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0087d3] to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066b3] transition-colors">
                      Competitive Pricing
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get the best value for your investment without
                      compromising on quality or service. Transparent pricing
                      with no hidden charges. Flexible payment options
                      available.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#40a8e0] hover:shadow-lg transition-all duration-300 group">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0087d3] to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066b3] transition-colors">
                      Comprehensive Warranty
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      All products backed by industry-leading warranties ranging
                      from 1 to 5 years. We stand behind our quality with
                      reliable warranty coverage and hassle-free claims process.
                    </p>
                  </div>
                </div>
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
    </>
  );
}
