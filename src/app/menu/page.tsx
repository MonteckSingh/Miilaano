'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { RESTAURANT_DATA, MenuItem } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DietaryBadge } from '@/components/ui/DietaryBadge';
import { Button } from '@/components/ui/Button';
import { useReservation } from '@/context/ReservationContext';
import { trackConversion } from '@/lib/analytics';
import { Search, Sparkles, Flame, MessageCircle, UtensilsCrossed, Calendar } from 'lucide-react';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'special'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const { openReservation } = useReservation();

  const filteredItems = useMemo(() => {
    return RESTAURANT_DATA.menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;
      if (dietaryFilter === 'special' && !item.isChefSpecial) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tags?.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#090A09] pt-28 sm:pt-36 pb-24 text-[#FAF8F5]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          eyebrow="The Culinary Repertoire"
          title="DIGITAL MENU"
          subtitle="Explore our handcrafted culinary creations, prepared with authentic slow-cooking traditions, artisanal spices, and modern fine dining aesthetics."
          className="mb-8 sm:mb-12"
        />

        {/* Search & Dietary Controls */}
        <div className="bg-[#111412] border border-[#C5A880]/20 p-4 sm:p-6 mb-8 max-w-4xl mx-auto space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A880]" />
            <input
              type="text"
              placeholder="Search dishes, ingredients, or dietary preferences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151A16] border border-white/10 pl-10 pr-4 py-3 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-[#B8B0A2]/50 focus:outline-none focus:border-[#C5A880] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#B8B0A2] hover:text-[#FAF8F5]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
            <span className="text-xs uppercase tracking-wider text-[#C5A880] font-medium hidden sm:inline-block">
              Dietary Preference:
            </span>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {[
                { id: 'all', label: 'All Items' },
                { id: 'veg', label: 'Pure Veg', badge: true, isVeg: true },
                { id: 'non-veg', label: 'Non-Veg', badge: true, isVeg: false },
                { id: 'special', label: "Chef's Specials" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setDietaryFilter(filter.id as typeof dietaryFilter)}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer border flex items-center gap-1.5 ${
                    dietaryFilter === filter.id
                      ? 'bg-[#C5A880] text-[#090A09] border-[#C5A880] font-semibold'
                      : 'bg-[#151A16] text-[#FAF8F5] border-white/10 hover:border-[#C5A880]/40'
                  }`}
                >
                  {filter.badge !== undefined && <DietaryBadge isVeg={filter.isVeg!} />}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 py-3 mb-10 border-b border-[#C5A880]/20">
          {RESTAURANT_DATA.menuCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  trackConversion('filter_menu_category', { category: cat.id });
                }}
                className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-serif tracking-wider uppercase transition-all duration-300 cursor-pointer relative ${
                  isSelected
                    ? 'text-[#DFCA9F] font-medium'
                    : 'text-[#B8B0A2] hover:text-[#FAF8F5]'
                }`}
              >
                {cat.label}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Items Count & Dietary Legend */}
        <div className="flex items-center justify-between text-xs text-[#B8B0A2] mb-6 max-w-7xl mx-auto">
          <span>Showing {filteredItems.length} curated offerings</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <DietaryBadge isVeg={true} /> Pure Veg
            </span>
            <span className="flex items-center gap-1.5">
              <DietaryBadge isVeg={false} /> Non-Veg
            </span>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#111412] border border-[#C5A880]/15 p-8 max-w-xl mx-auto">
            <UtensilsCrossed className="w-10 h-10 text-[#C5A880]/40 mx-auto mb-4" />
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-2 uppercase">
              No Dishes Found
            </h3>
            <p className="text-xs sm:text-sm text-[#B8B0A2] mb-6">
              We couldn’t find any items matching your selected criteria. Try resetting the filters.
            </p>
            <Button
              variant="gold-outline"
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedDish(item)}
                className="bg-[#111412] border border-[#C5A880]/15 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-[#DFCA9F]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer"
              >
                {/* Image if available */}
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-[#090A09]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111412] via-transparent to-transparent" />
                    
                    {item.isChefSpecial && (
                      <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#182E23]/90 text-[#DFCA9F] border border-[#336B53]/60 backdrop-blur-md">
                        Chef Special
                      </span>
                    )}
                  </div>
                )}

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Header: Name, Badge, Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <DietaryBadge isVeg={item.isVeg} />
                        <h3 className="font-serif text-lg sm:text-xl text-[#FAF8F5] uppercase tracking-wide group-hover:text-[#DFCA9F] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B8B0A2] font-sans font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {item.spiciness !== undefined && item.spiciness > 0 && (
                        <div className="flex items-center gap-0.5 text-red-400" title={`Spice Level: ${item.spiciness}/3`}>
                          {[...Array(item.spiciness)].map((_, i) => (
                            <Flame key={i} className="w-3.5 h-3.5 fill-red-400" />
                          ))}
                        </div>
                      )}

                      {item.tags && item.tags.length > 0 && (
                        <span className="text-[10px] uppercase tracking-wider text-[#C5A880]/80">
                          {item.tags[0]}
                        </span>
                      )}
                    </div>

                    <span className="font-serif text-base sm:text-lg text-[#DFCA9F] font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Dining Consultation & Reservation Bar */}
        <div className="mt-16 bg-[#111412] border border-[#C5A880]/30 p-8 sm:p-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Sparkles className="w-8 h-8 text-[#C5A880] mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] uppercase tracking-wide mb-2">
            Looking for Custom Group Dining or Tasting Menus?
          </h3>
          <p className="text-xs sm:text-sm text-[#B8B0A2] max-w-xl mb-6">
            Our executive culinary team curates personalized multi-course tasting menus for private dining rooms, family celebrations, and corporate dinners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="gold"
              size="md"
              onClick={() => openReservation()}
              className="flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve a Table
            </Button>
            <Button
              variant="whatsapp"
              size="md"
              href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${encodeURIComponent(
                'Hello MIILAANO, I would like to inquire about a customized group menu / private dining.'
              )}`}
              isExternal
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire via WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Dish Detail Inspection Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="fixed inset-0" onClick={() => setSelectedDish(null)} />
          <div className="relative w-full max-w-lg bg-[#111412] border border-[#C5A880]/40 p-6 sm:p-8 z-10 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <DietaryBadge isVeg={selectedDish.isVeg} showText />
                {selectedDish.isChefSpecial && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#182E23] text-[#DFCA9F] border border-[#336B53]">
                    Chef Special
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedDish(null)}
                className="text-[#FAF8F5]/60 hover:text-[#C5A880] text-sm uppercase tracking-wider cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            {selectedDish.image && (
              <div className="relative h-56 w-full mb-5 border border-white/10 overflow-hidden">
                <Image
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}

            <h3 className="font-serif text-2xl text-[#FAF8F5] uppercase tracking-wide mb-2">
              {selectedDish.name}
            </h3>

            <p className="text-sm text-[#B8B0A2] font-light leading-relaxed mb-6">
              {selectedDish.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#B8B0A2]">Price</span>
              <span className="font-serif text-2xl text-[#DFCA9F]">{selectedDish.price}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="gold"
                size="sm"
                className="flex-1"
                onClick={() => {
                  setSelectedDish(null);
                  openReservation();
                }}
              >
                Reserve Table for this Dish
              </Button>
              <Button
                variant="whatsapp"
                size="sm"
                href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${encodeURIComponent(
                  `Hello MIILAANO, I would like to inquire about the dish: ${selectedDish.name}.`
                )}`}
                isExternal
                className="flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
