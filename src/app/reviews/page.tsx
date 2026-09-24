'use client';

import React from 'react';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useReservation } from '@/context/ReservationContext';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ReviewsPage() {
  const { openReservation } = useReservation();

  return (
    <div className="min-h-screen bg-[#090A09] pt-28 sm:pt-36 pb-24 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest Testimonials"
          title="WHAT OUR GUESTS SAY"
          subtitle="Discover verified reviews from patrons who have dined, celebrated, and experienced the warm hospitality of MIILAANO."
          className="mb-14 sm:mb-16"
        />

        {/* Rating Overview Card */}
        <div className="bg-[#111412] border border-[#C5A880]/30 p-8 sm:p-10 mb-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl sm:text-6xl font-serif text-[#DFCA9F] font-light">
              4.9
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-[#B8B0A2]">
                Based on 850+ Verified Dining Reviews
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="gold"
              size="sm"
              onClick={() => openReservation()}
            >
              Reserve a Table
            </Button>
            <Button
              variant="gold-outline"
              size="sm"
              href={RESTAURANT_DATA.location.googleMapsUrl}
              isExternal
              className="flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Write a Google Review
            </Button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {RESTAURANT_DATA.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#111412] border border-[#C5A880]/20 p-8 flex flex-col justify-between relative group hover:border-[#DFCA9F]/60 transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#C5A880] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" /> Verified Diner
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#C5A880]/20 mb-3" />

                <p className="text-sm sm:text-base text-[#FAF8F5]/90 font-sans font-light leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide">
                    {review.guestName}
                  </h4>
                  <p className="text-xs text-[#B8B0A2]/70">{review.occasion}</p>
                </div>
                <span className="text-xs text-[#DFCA9F]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
