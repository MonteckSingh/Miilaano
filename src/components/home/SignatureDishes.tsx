import React from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { DietaryBadge } from '@/components/ui/DietaryBadge';
import { Sparkles } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0E0C] relative border-t border-b border-[#C5A880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chef’s Creations"
          title="A TASTE WORTH REMEMBERING."
          subtitle="A curated showcase of our most celebrated dishes, balancing authentic heritage spices with innovative modern gastronomy."
          className="mb-16 sm:mb-20"
        />

        {/* Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {RESTAURANT_DATA.signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#111412] border border-[#C5A880]/20 flex flex-col group overflow-hidden transition-all duration-500 hover:border-[#DFCA9F]/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Dish Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#090A09]">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#151A16] text-[#B8B0A2] text-xs">
                    Fine Dining Photography
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111412] via-transparent to-transparent opacity-80" />

                {/* Dietary Badge & Chef Special Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-[#090A09]/80 backdrop-blur-md p-1.5 border border-white/10 rounded-sm">
                    <DietaryBadge isVeg={dish.isVeg} />
                  </div>
                  {dish.isChefSpecial && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#182E23]/90 text-[#DFCA9F] border border-[#336B53]/60 backdrop-blur-md font-medium">
                      <Sparkles className="w-3 h-3 text-[#DFCA9F]" /> Signature
                    </span>
                  )}
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-4 right-4 bg-[#090A09]/90 backdrop-blur-md px-3 py-1.5 border border-[#C5A880]/40 text-[#DFCA9F] font-serif text-sm font-medium">
                  {dish.price}
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] uppercase tracking-wide group-hover:text-[#DFCA9F] transition-colors leading-snug mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B0A2] font-sans font-light leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                {dish.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {dish.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-[#151A16] text-[#B8B0A2] border border-white/5 font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <Button variant="gold" size="lg" href="/menu">
            View Full Digital Menu
          </Button>
        </div>
      </div>
    </section>
  );
};
