'use client';

import { Card, CardBody, CardHeader, CardFooter, Button } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductData {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

interface ProductsContentProps {
  products: ProductData[];
}

export default function ProductsContent({ products }: ProductsContentProps) {
  return (
    <>
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
                  <div className="relative w-full h-48 bg-white rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
