'use client';

import { Link } from '@heroui/react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-300 border-t-2 border-[#0087d3]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/peacock-icon.svg"
                alt="Mayura Solar Systems"
                width={50}
                height={50}
                className="h-12 w-auto drop-shadow-lg"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(70%) sepia(51%) saturate(2878%) hue-rotate(161deg) brightness(101%) contrast(101%)',
                }}
              />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Mayura <span className="text-[#40a8e0]">Solar Systems</span>
                </h3>
                <p className="text-sm text-blue-300">
                  Innovate with Renewable Energy
                </p>
              </div>
            </div>
            <p className="text-sm mb-4 text-gray-400 leading-relaxed">
              Leading provider of solar water heaters, ETC pipes, and solar
              street lights. We bring sustainable energy solutions to homes and
              businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#40a8e0] text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-[#40a8e0] text-sm transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#40a8e0] text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#40a8e0] text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400 hover:text-[#40a8e0] transition-colors cursor-pointer">
                Solar Water Heaters
              </li>
              <li className="text-sm text-gray-400 hover:text-[#40a8e0] transition-colors cursor-pointer">
                ETC Pipes
              </li>
              <li className="text-sm text-gray-400 hover:text-[#40a8e0] transition-colors cursor-pointer">
                Solar Street Lights
              </li>
              <li className="text-sm text-gray-400 hover:text-[#40a8e0] transition-colors cursor-pointer">
                Solar Panels
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">📍 Address:</span>
                <br />
                2-24A, Mathibettu Varanga, Muniyalu, Bailoor
                <br />
                Udupi, Karnataka - 574108
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">📞 Phone:</span>
                <br />
                <a
                  href="tel:+916363537253"
                  className="hover:text-[#40a8e0] transition-colors"
                >
                  +91 63635 37253
                </a>
                <br />
                <a
                  href="tel:+919663402333"
                  className="hover:text-[#40a8e0] transition-colors"
                >
                  +91 96634 02333
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">✉️ Email:</span>
                <br />
                <a
                  href="mailto:mayurasolar.sys@gmail.com"
                  className="hover:text-[#40a8e0] transition-colors"
                >
                  mayurasolar.sys@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear}{' '}
            <span className="text-[#40a8e0] font-semibold">
              Mayura Solar Systems
            </span>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
