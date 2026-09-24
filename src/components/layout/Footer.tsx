'use client';

import React from 'react';
import Link from 'next/link';
import { MilaanoLogo } from '@/components/ui/MilaanoLogo';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { trackConversion } from '@/lib/analytics';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070807] text-[#FAF8F5] border-t border-[#C5A880]/20 pt-16 pb-24 lg:pb-16 relative overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-[#182E23]/25 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="flex flex-col items-start space-y-4">
            <MilaanoLogo size="md" />
            <p className="text-xs sm:text-sm text-[#B8B0A2] font-sans font-light leading-relaxed pt-2">
              &quot;{RESTAURANT_DATA.brand.instagramTagline}&quot;
            </p>
            <p className="text-xs text-[#B8B0A2]/70 leading-relaxed">
              {RESTAURANT_DATA.brand.heroTagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_DATA.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_instagram')}
                className="w-9 h-9 rounded-full bg-[#151A16] border border-[#C5A880]/30 flex items-center justify-center text-[#DFCA9F] hover:bg-[#C5A880] hover:text-[#090A09] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_DATA.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#151A16] border border-[#C5A880]/30 flex items-center justify-center text-[#DFCA9F] hover:bg-[#C5A880] hover:text-[#090A09] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_whatsapp_inquire')}
                className="w-9 h-9 rounded-full bg-[#151A16] border border-[#C5A880]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium mb-4 flex items-center gap-2">
              <span className="w-2 h-[1px] bg-[#C5A880]" /> Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B0A2]">
              {[
                { name: 'Home', href: '/' },
                { name: 'Experience & Story', href: '/experience' },
                { name: 'Digital Menu', href: '/menu' },
                { name: 'Gallery & Ambience', href: '/gallery' },
                { name: 'Guest Reviews', href: '/reviews' },
                { name: 'Location & Map', href: '/location' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#DFCA9F] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C5A880]/50 text-[10px]">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Operating Hours */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium mb-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> Dining Hours
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#B8B0A2]">
              {RESTAURANT_DATA.hours.map((h, i) => (
                <div key={i} className="border-b border-white/5 pb-2">
                  <div className="font-medium text-[#FAF8F5] mb-1">{h.days}</div>
                  <div className="text-xs text-[#DFCA9F]">Lunch: {h.lunch}</div>
                  <div className="text-xs text-[#B8B0A2]">Dinner: {h.dinner}</div>
                </div>
              ))}
              <div className="text-[11px] text-[#C5A880]/80 italic">
                * Last kitchen orders taken 45 mins prior to closing.
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-sans font-medium mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Address & Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#B8B0A2]">
              <p className="leading-relaxed text-xs">
                {RESTAURANT_DATA.location.fullAddress}
              </p>
              <div className="text-[11px] text-[#DFCA9F]">
                🚗 {RESTAURANT_DATA.location.parking}
              </div>

              <div className="pt-2 space-y-1.5">
                <a
                  href={`tel:${RESTAURANT_DATA.contact.phoneClean}`}
                  onClick={() => trackConversion('click_phone_call')}
                  className="flex items-center gap-2 text-xs text-[#FAF8F5] hover:text-[#C5A880] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  {RESTAURANT_DATA.contact.phone}
                </a>

                <a
                  href={`mailto:${RESTAURANT_DATA.contact.email}`}
                  className="flex items-center gap-2 text-xs text-[#FAF8F5] hover:text-[#C5A880] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                  {RESTAURANT_DATA.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8B0A2]/60">
          <div>
            © {new Date().getFullYear()} {RESTAURANT_DATA.brand.name} Fine Dine. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] hover:text-[#DFCA9F] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="text-[11px] hover:text-[#DFCA9F] cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-[11px] text-[#C5A880]/80">Luxury Dining Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
