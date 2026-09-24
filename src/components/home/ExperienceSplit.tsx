import React from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const ExperienceSplit: React.FC = () => {
  return (
    <section id="experience-section" className="py-24 sm:py-32 bg-[#090A09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Miilaano Experience"
          title={RESTAURANT_DATA.brand.experienceHeading}
          subtitle={RESTAURANT_DATA.brand.experienceDescription}
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Ambience & Plating Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[540px] w-full overflow-hidden border border-[#C5A880]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/private-dining.jpg"
                alt="MIILAANO Private Dining and Ambience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A09]/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#111412]/90 backdrop-blur-md border border-[#C5A880]/30 p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] mb-1 font-medium">
                  Art of Hospitality
                </p>
                <p className="text-xs sm:text-sm text-[#FAF8F5] font-serif italic">
                  &ldquo;A sanctuary where culinary artistry meets intimate elegance.&rdquo;
                </p>
              </div>
            </div>

            {/* Decorative Offset Backdrop Accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#244B3A]/40 -z-10 hidden sm:block" />
          </div>

          {/* Right: Short Brand Story + 3 Experience Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#FAF8F5] uppercase tracking-wide mb-4">
                Curated for Connoisseurs
              </h3>
              <p className="text-sm sm:text-base text-[#B8B0A2] font-sans font-light leading-relaxed">
                {RESTAURANT_DATA.brand.story}
              </p>
            </div>

            {/* 3 Experience Highlights */}
            <div className="space-y-6 pt-2">
              {RESTAURANT_DATA.experienceHighlights.map((item) => (
                <div
                  key={item.number}
                  className="group border-t border-[#C5A880]/20 pt-5 transition-all duration-300 hover:border-[#DFCA9F]"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-serif text-lg sm:text-xl font-light text-[#C5A880] tracking-wider">
                      {item.number}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#FAF8F5] uppercase tracking-wide group-hover:text-[#DFCA9F] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#B8B0A2] font-sans font-light pl-9 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="gold-outline" size="md" href="/experience">
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
