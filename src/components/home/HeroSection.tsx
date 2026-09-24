'use client';

import React from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { Button } from '@/components/ui/Button';
import { useReservation } from '@/context/ReservationContext';
import { trackConversion } from '@/lib/analytics';
import { ChevronDown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openReservation } = useReservation();

  const scrollToExperience = () => {
    const el = document.getElementById('experience-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090A09]">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dining.jpg"
          alt="MIILAANO Fine Dining Ambience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse duration-10000"
        />
        {/* Multi-layer Dark Gradient Overlays for Maximum Readability & Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A09] via-[#090A09]/75 to-[#090A09]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090A09]/50 to-[#090A09]/90" />
      </div>

      {/* Decorative Gold Border Frame */}
      <div className="absolute inset-6 sm:inset-10 border border-[#C5A880]/15 pointer-events-none z-10 hidden sm:block">
        {/* Corner Accents */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#DFCA9F]" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#DFCA9F]" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#DFCA9F]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#DFCA9F]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Instagram Tagline Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#182E23]/60 border border-[#336B53]/50 rounded-full mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#DFCA9F]" />
          <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#DFCA9F]">
            {RESTAURANT_DATA.brand.instagramTagline}
          </span>
        </div>

        {/* Brand Name & Classification */}
        <h1 className="flex flex-col items-center">
          <span className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF8F5] tracking-[0.18em] uppercase font-light drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            {RESTAURANT_DATA.brand.name}
          </span>
          <span className="text-xs sm:text-sm md:text-base font-sans font-normal uppercase tracking-[0.6em] text-[#C5A880] mt-2 mb-6">
            {RESTAURANT_DATA.brand.subtitle}
          </span>
        </h1>

        {/* Core Secondary Positioning */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#E8E2D8] max-w-2xl leading-relaxed mb-10 font-normal drop-shadow-md">
          &ldquo;Perfect place. Perfect bite. Perfect memories.&rdquo;
        </p>

        {/* Dual Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button
            variant="gold"
            size="lg"
            onClick={() => {
              trackConversion('click_whatsapp_reserve');
              openReservation();
            }}
            className="w-full sm:w-auto min-w-[200px]"
          >
            Reserve a Table
          </Button>

          <Button
            variant="gold-outline"
            size="lg"
            href="/menu"
            onClick={() => trackConversion('click_view_full_menu')}
            className="w-full sm:w-auto min-w-[200px]"
          >
            Explore Menu
          </Button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={scrollToExperience}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#FAF8F5]/60 hover:text-[#DFCA9F] transition-colors cursor-pointer"
        aria-label="Scroll to experience"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">
          Scroll to Discover
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
      </button>
    </section>
  );
};
