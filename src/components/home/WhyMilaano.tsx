import React from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyMilaano: React.FC = () => {
  const icons = [
    <Award key="1" className="w-5 h-5 text-[#C5A880]" />,
    <Compass key="2" className="w-5 h-5 text-[#C5A880]" />,
    <HeartHandshake key="3" className="w-5 h-5 text-[#C5A880]" />,
    <ShieldCheck key="4" className="w-5 h-5 text-[#C5A880]" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#090A09] relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#182E23]/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Distinction"
          title={RESTAURANT_DATA.brand.whyMilaanoHeading}
          subtitle="Every evening at MIILAANO is orchestrated with unwavering passion—from the first aroma that greets you to the final lingering note of dessert."
          className="mb-16 sm:mb-20"
        />

        {/* Feature Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {RESTAURANT_DATA.whyMilaanoPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[#111412]/80 border border-[#C5A880]/15 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#DFCA9F]/40 hover:-translate-y-1 group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#182E23]/60 border border-[#336B53]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {icons[index]}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#FAF8F5] uppercase tracking-wide mb-3 group-hover:text-[#DFCA9F] transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8B0A2] font-sans font-light leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C5A880]/70 uppercase tracking-widest font-mono">
                <span>0{index + 1}</span>
                <span className="w-8 h-[1px] bg-[#C5A880]/30" />
                <span>MIILAANO</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Visual Bar */}
        <div className="mt-16 relative h-64 sm:h-80 md:h-96 w-full overflow-hidden border border-[#C5A880]/20">
          <Image
            src="/images/cocktail.jpg"
            alt="Miilaano Marble Bar & Handcrafted Cocktails"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090A09]/90 via-[#090A09]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 sm:p-14 max-w-xl">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
                Artisanal Bar
              </span>
              <h4 className="font-serif text-2xl sm:text-4xl text-[#FAF8F5] uppercase tracking-wide leading-tight">
                Handcrafted Botanical Elixirs & Vintage Reserves
              </h4>
              <p className="text-xs sm:text-sm text-[#B8B0A2] font-light">
                Complement your dinner with smoke-infused botanicals, bespoke mocktails, and rare cellar selections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
