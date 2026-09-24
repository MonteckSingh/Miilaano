'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useReservation } from '@/context/ReservationContext';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'ambience' | 'culinary' | 'beverages' | 'private'>('all');
  const { openReservation } = useReservation();

  const galleryItems = [
    {
      id: 'g-1',
      title: 'Cinematic Main Dining Hall',
      category: 'ambience',
      image: '/images/hero-dining.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      id: 'g-2',
      title: 'Pan-Seared Truffle Scallop Plating',
      category: 'culinary',
      image: '/images/dish-starter.jpg',
      aspect: 'col-span-1',
    },
    {
      id: 'g-3',
      title: 'Charred Chilean Seabass in Saffron Velouté',
      category: 'culinary',
      image: '/images/dish-main.jpg',
      aspect: 'col-span-1',
    },
    {
      id: 'g-4',
      title: 'Botanical Smoke Cocktails & Marble Bar',
      category: 'beverages',
      image: '/images/cocktail.jpg',
      aspect: 'col-span-1 md:col-span-2',
    },
    {
      id: 'g-5',
      title: 'Miilaano Imperial Dark Chocolate Dome',
      category: 'culinary',
      image: '/images/dish-dessert.jpg',
      aspect: 'col-span-1',
    },
    {
      id: 'g-6',
      title: 'Intimate Private Dining Room Suite',
      category: 'private',
      image: '/images/private-dining.jpg',
      aspect: 'col-span-1 md:col-span-2',
    },
  ];

  const filteredGallery = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <div className="min-h-screen bg-[#090A09] pt-28 sm:pt-36 pb-24 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Odyssey"
          title="EDITORIAL GALLERY"
          subtitle="A glimpse into the ambience, culinary artistry, and celebratory evenings that define the MIILAANO experience."
          className="mb-12 sm:mb-16"
        />

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Perspectives' },
            { id: 'ambience', label: 'Ambience & Interior' },
            { id: 'culinary', label: 'Culinary Artistry' },
            { id: 'beverages', label: 'Artisanal Bar' },
            { id: 'private', label: 'Private Dining' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 text-xs font-serif uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                filter === tab.id
                  ? 'bg-[#C5A880] text-[#090A09] border-[#C5A880] font-semibold shadow-[0_0_15px_rgba(197,168,128,0.25)]'
                  : 'bg-[#111412] text-[#FAF8F5] border-white/10 hover:border-[#C5A880]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#111412] border border-[#C5A880]/20 group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A09]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-1 font-mono">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#B8B0A2] mb-6">
            Ready to experience these moments in person?
          </p>
          <Button variant="gold" size="lg" onClick={() => openReservation()}>
            Reserve Your Experience
          </Button>
        </div>
      </div>
    </div>
  );
}
