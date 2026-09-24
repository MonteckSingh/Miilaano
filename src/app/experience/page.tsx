'use client';

import React from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useReservation } from '@/context/ReservationContext';
import { Sparkles, Utensils, Wine, Heart, Users, Clock } from 'lucide-react';

export default function ExperiencePage() {
  const { openReservation } = useReservation();

  const experiencePillars = [
    {
      icon: <Utensils className="w-6 h-6 text-[#C5A880]" />,
      title: 'Artisanal Culinary Philosophy',
      description:
        'Our culinary team marries time-honored slow-cooking traditions with contemporary precision. Every jus is simmered for hours, every spice blend ground in-house, and every plate crafted as an edible work of art.',
    },
    {
      icon: <Wine className="w-6 h-6 text-[#C5A880]" />,
      title: 'Botanical Bar & Curated Cellar',
      description:
        'From smoke-infused botanical mocktails to vintage estate wines and specialty artisanal roasts, our beverage program is designed to complement and elevate every course.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#C5A880]" />,
      title: 'Cinematic Ambiance & Lighting',
      description:
        'Step into an intimate sanctuary defined by plush emerald velvet, burnished champagne brass, low candlelit warmth, and acoustic harmony where conversations flow effortlessly.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#C5A880]" />,
      title: 'Bespoke Private Dining',
      description:
        'Host your milestone birthdays, anniversaries, and executive dinners in our secluded private dining suites, complete with dedicated butler service and customized degustation menus.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090A09] pt-28 sm:pt-36 pb-24 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Story Behind The Plate"
          title="THE MIILAANO EXPERIENCE"
          subtitle="“Serving happiness on a plate at MIILAANO” — Discover the passion, craftsmanship, and atmosphere that make every meal memorable."
          className="mb-16 sm:mb-20"
        />

        {/* Hero Experience Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[420px] sm:h-[500px] border border-[#C5A880]/30 shadow-2xl overflow-hidden group">
            <Image
              src="/images/hero-dining.jpg"
              alt="Miilaano Dining Room"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A09]/80 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#182E23] border border-[#336B53] text-[11px] uppercase tracking-widest text-[#DFCA9F]">
              <Heart className="w-3.5 h-3.5" /> Our Mission
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] uppercase tracking-wide leading-tight">
              Where Hospitality Becomes A Memory
            </h3>
            <p className="text-sm sm:text-base text-[#B8B0A2] font-light leading-relaxed">
              At MIILAANO, we believe dining is not merely a transaction of sustenance, but a sanctuary of connection. Every evening is crafted to evoke delight—from the gentle clink of crystal glasses to the intoxicating aroma of slow-simmered gravies and table-side dessert theater.
            </p>
            <p className="text-sm sm:text-base text-[#B8B0A2] font-light leading-relaxed">
              Our name represents modern elegance with timeless warmth. We welcome couples celebrating anniversaries, families marking milestones, and epicures seeking the pinnacle of flavor.
            </p>

            <div className="pt-4 flex gap-4">
              <Button variant="gold" size="md" onClick={() => openReservation()}>
                Reserve an Evening
              </Button>
              <Button variant="gold-outline" size="md" href="/menu">
                View Menu
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {experiencePillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-[#111412] border border-[#C5A880]/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#DFCA9F]/40 transition-colors group"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-[#182E23] border border-[#336B53]/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] uppercase tracking-wide mb-3">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B0A2] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Private Dining Highlight */}
        <div className="relative bg-[#111412] border border-[#C5A880]/25 overflow-hidden p-8 sm:p-14 mb-20">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
              Exclusive Spaces
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] uppercase tracking-wide">
              Private Dining & Celebrations
            </h3>
            <p className="text-sm text-[#B8B0A2] font-light leading-relaxed">
              Planning a curated gathering for 8 to 25 guests? Our secluded private dining room provides custom table settings, bespoke tasting menus curated directly by our Master Chef, and dedicated sommelier and butler service.
            </p>
            <div className="pt-2">
              <Button
                variant="gold"
                size="md"
                onClick={() => openReservation({ occasion: 'Private Dining Suite' })}
              >
                Inquire for Private Dining
              </Button>
            </div>
          </div>
        </div>

        {/* Operating FAQ */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-center uppercase tracking-wide mb-10 text-[#FAF8F5]">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {RESTAURANT_DATA.faq.map((faq, i) => (
              <div key={i} className="bg-[#111412] border border-white/10 p-6">
                <h4 className="font-serif text-lg text-[#DFCA9F] mb-2 uppercase">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B0A2] font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
