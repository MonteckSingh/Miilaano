'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MilaanoLogo } from '@/components/ui/MilaanoLogo';
import { Button } from '@/components/ui/Button';
import { useReservation } from '@/context/ReservationContext';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '@/data/restaurant';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openReservation } = useReservation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Location', href: '/location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#090A09]/90 backdrop-blur-md border-b border-[#C5A880]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#090A09]/90 via-[#090A09]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <MilaanoLogo size={isScrolled ? 'sm' : 'md'} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 group ${
                    isActive ? 'text-[#DFCA9F]' : 'text-[#FAF8F5]/85 hover:text-[#FAF8F5]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#C5A880] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF8F5]/70 hover:text-[#25D366] transition-colors p-2"
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <Button
              variant="gold-outline"
              size="sm"
              onClick={() => openReservation()}
              className="hover:shadow-[0_0_20px_rgba(197,168,128,0.3)]"
            >
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Menu & Quick CTA Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openReservation()}
              className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 bg-[#C5A880] text-[#090A09] border border-[#DFCA9F]/60"
            >
              Reserve
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#FAF8F5] hover:text-[#C5A880] transition-colors focus:outline-none cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#090A09]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <MilaanoLogo size="sm" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#FAF8F5]/80 hover:text-[#C5A880] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center gap-6 py-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg sm:text-xl font-serif tracking-[0.2em] uppercase transition-colors ${
                    isActive ? 'text-[#DFCA9F]' : 'text-[#FAF8F5]/90 hover:text-[#C5A880]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <Button
              variant="gold"
              size="md"
              className="w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openReservation();
              }}
            >
              Reserve a Table
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="whatsapp"
                size="sm"
                href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}`}
                isExternal
                className="flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                variant="gold-outline"
                size="sm"
                href={`tel:${RESTAURANT_DATA.contact.phoneClean}`}
                isExternal
                className="flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
