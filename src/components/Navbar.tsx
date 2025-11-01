'use client';

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-white/95 backdrop-blur-md shadow-md border-b-2 border-gray-100"
      isBlurred={true}
      height="80px"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-gray-700"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/peacock-icon.svg"
              alt="Mayura Solar Systems Logo"
              width={48}
              height={48}
              className="h-12 w-auto drop-shadow-sm"
            />
            <div className="flex flex-col">
              <p className="font-bold text-[#0087d3] text-xl tracking-tight">
                Mayura
              </p>
              <p className="text-xs text-gray-500 font-medium">Solar Systems</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

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

      <NavbarContent justify="end">
        <NavbarItem>
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

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
