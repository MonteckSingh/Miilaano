import React from 'react';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0E0C] relative border-t border-b border-[#C5A880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest Testimonials"
          title="WHAT OUR GUESTS SAY"
          subtitle="Genuine dining impressions shared by patrons who celebrate life’s special moments at our tables."
          className="mb-16 sm:mb-20"
        />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_DATA.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#111412] border border-[#C5A880]/15 p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#DFCA9F]/50 transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C5A880]/20 mb-4 group-hover:text-[#C5A880]/40 transition-colors" />

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#FAF8F5]/90 font-sans font-light leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="font-serif text-base text-[#FAF8F5] uppercase tracking-wide">
                  {review.guestName}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-[#B8B0A2]/70 mt-1">
                  <span>{review.occasion || 'Dining Experience'}</span>
                  <span className="text-[#C5A880]/80 font-medium">{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <Button variant="gold-outline" size="md" href="/reviews">
            See More Guest Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};
