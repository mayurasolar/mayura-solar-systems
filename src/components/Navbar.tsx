'use client';

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <HeroNavbar
        maxWidth="xl"
        className="bg-white/95 backdrop-blur-md shadow-md border-b-2 border-gray-100"
        height="80px"
        isBordered
      >
        {/* Mobile - Hamburger Toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <button
            onClick={() => {
              console.log('Hamburger clicked, current state:', isMenuOpen);
              setIsMenuOpen(!isMenuOpen);
            }}
            className="flex flex-col gap-1.5 w-10 h-10 justify-center items-center -ml-2 touch-manipulation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </NavbarContent>

        {/* Mobile - Logo */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/peacock-icon.svg"
                alt="Mayura Solar Systems Logo"
                width={40}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                className="drop-shadow-sm"
              />
              <div className="flex flex-col">
                <p className="font-bold text-[#0087d3] text-lg tracking-tight">
                  Mayura
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  Solar Systems
                </p>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop - Logo */}
        <NavbarContent className="hidden sm:flex gap-3" justify="start">
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/peacock-icon.svg"
                alt="Mayura Solar Systems Logo"
                width={48}
                height={48}
                style={{ width: 'auto', height: '48px' }}
                className="drop-shadow-sm"
              />
              <div className="flex flex-col">
                <p className="font-bold text-[#0087d3] text-xl tracking-tight">
                  Mayura
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  Solar Systems
                </p>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop - Navigation Links */}
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          {menuItems.map(item => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 font-semibold text-base hover:text-[#0066b3] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0087d3] after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Desktop - Get Quote Button */}
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              href="/contact"
              size="md"
              variant="bordered"
              className="border-2 border-[#0087d3] text-[#0066b3] font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              radius="lg"
            >
              Get Quote
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg z-50 sm:hidden">
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg py-3 text-gray-700 hover:text-[#0087d3] border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="w-full bg-gradient-to-r from-[#0087d3] to-blue-600 text-white font-semibold mt-2"
                radius="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </HeroNavbar>

      {/* Mobile Menu with Backdrop */}
      {isMenuOpen && (
        <>
          {/* Backdrop/Overlay to close menu when clicking outside */}
          <div
            className="fixed inset-0 bg-black/20 z-[90] sm:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div className="fixed top-[43px] left-0 right-0 bg-white shadow-lg z-[100] sm:hidden">
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg py-3 text-gray-700 hover:text-[#0087d3] border-b border-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-[#0087d3] to-blue-600 text-white font-semibold mt-2 py-3 rounded-lg text-center hover:shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
