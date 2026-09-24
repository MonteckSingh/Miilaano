'use client';

import React from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { Button } from '@/components/ui/Button';
import { useReservation } from '@/context/ReservationContext';
import { trackConversion } from '@/lib/analytics';
import { MessageCircle, Calendar } from 'lucide-react';

export const ReservationCta: React.FC = () => {
  const { openReservation } = useReservation();

  return (
    <section className="py-24 sm:py-32 bg-[#090A09] relative overflow-hidden">
      {/* Background Ambience with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dining.jpg"
          alt="MIILAANO Fine Dining Experience"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A09] via-[#090A09]/90 to-[#090A09]" />
        <div className="absolute inset-0 bg-[#182E23]/25 mix-blend-overlay" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-[1px] w-8 bg-[#C5A880]/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
            Reservations
          </span>
          <span className="h-[1px] w-8 bg-[#C5A880]/60" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF8F5] uppercase tracking-wide leading-tight mb-6">
          READY FOR YOUR NEXT EXPERIENCE?
        </h2>

        <p className="text-sm sm:text-lg text-[#E8E2D8] font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Reserve your table and make your next meal a memorable one. Our team is ready to curate an exceptional evening for you.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="gold"
            size="lg"
            onClick={() => {
              trackConversion('click_whatsapp_reserve');
              openReservation();
            }}
            className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Reserve a Table
          </Button>

          <Button
            variant="whatsapp"
            size="lg"
            href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${encodeURIComponent(
              'Hello MIILAANO, I would like to reserve a table for tonight / upcoming date.'
            )}`}
            isExternal
            onClick={() => trackConversion('click_whatsapp_inquire')}
            className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </Button>
        </div>

        {/* Subtle Assurance */}
        <p className="text-xs text-[#B8B0A2]/70 mt-8">
          Instant WhatsApp Confirmation • Dietary Customizations Welcome • Valet Parking
        </p>
      </div>
    </section>
  );
};
