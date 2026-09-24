'use client';

import React, { useEffect } from 'react';
import { useReservation } from '@/context/ReservationContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { Calendar, MessageCircle, Phone, Clock, Sparkles } from 'lucide-react';

export default function ReservePage() {
  const { openReservation } = useReservation();

  useEffect(() => {
    // Open modal on load if navigated to /reserve
    openReservation();
  }, [openReservation]);

  return (
    <div className="min-h-screen bg-[#090A09] pt-28 sm:pt-36 pb-24 text-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="Table Concierge"
          title="TABLE RESERVATIONS"
          subtitle="Reserve your table at MIILAANO. For private dining suites or groups above 8 guests, please reach out directly via WhatsApp."
          className="mb-12"
        />

        <div className="bg-[#111412] border border-[#C5A880]/30 p-8 sm:p-12 mb-12 shadow-2xl">
          <Sparkles className="w-10 h-10 text-[#C5A880] mx-auto mb-4" />
          <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide mb-3">
            Instant WhatsApp Reservation
          </h3>
          <p className="text-sm sm:text-base text-[#B8B0A2] font-light max-w-lg mx-auto mb-8">
            Click below to open our interactive table reservation concierge, select your preferred seating area and time slot, and receive instant confirmation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => openReservation()}
              className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Open Reservation Form
            </Button>

            <Button
              variant="whatsapp"
              size="lg"
              href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${encodeURIComponent(
                'Hello MIILAANO, I would like to book a table for dining.'
              )}`}
              isExternal
              className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Direct WhatsApp
            </Button>
          </div>
        </div>

        {/* Timings & Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <div className="bg-[#151A16] border border-white/10 p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-2">
              <Clock className="w-3.5 h-3.5" /> Lunch Sessions
            </div>
            <p className="text-xs text-[#B8B0A2]">
              12:00 PM – 03:30 PM (Mon–Thu)<br />
              12:00 PM – 04:00 PM (Fri–Sun)
            </p>
          </div>

          <div className="bg-[#151A16] border border-white/10 p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-2">
              <Clock className="w-3.5 h-3.5" /> Dinner Sessions
            </div>
            <p className="text-xs text-[#B8B0A2]">
              07:00 PM – 11:30 PM (Mon–Thu)<br />
              07:00 PM – 12:00 AM (Fri–Sun)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
