'use client';

import React from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { trackConversion } from '@/lib/analytics';
import { Heart } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#090A09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social Discovery"
          title="FOLLOW THE MIILAANO EXPERIENCE"
          subtitle="Explore the latest culinary creations, behind-the-scenes artistry, and vibrant evenings captured by our community."
          className="mb-14 sm:mb-16"
        />

        {/* Instagram Grid (6 items) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {RESTAURANT_DATA.instagramPosts.map((post) => (
            <a
              key={post.id}
              href={RESTAURANT_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('click_instagram')}
              className="relative aspect-square overflow-hidden bg-[#111412] border border-[#C5A880]/15 group"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#090A09]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <InstagramIcon className="w-6 h-6 text-[#DFCA9F] mb-2" />
                <div className="flex items-center gap-1 text-[11px] text-[#FAF8F5] font-sans font-medium">
                  <Heart className="w-3.5 h-3.5 fill-[#DFCA9F] text-[#DFCA9F]" />
                  {post.likes.toLocaleString()}
                </div>
                <p className="text-[10px] text-[#B8B0A2] line-clamp-2 mt-1 hidden sm:block">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="gold-outline"
            size="md"
            href={RESTAURANT_DATA.contact.instagramUrl}
            isExternal
            onClick={() => trackConversion('click_instagram')}
            className="flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow @milaano.finedine
          </Button>
        </div>
      </div>
    </section>
  );
};
