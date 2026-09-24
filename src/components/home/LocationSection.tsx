'use client';

import React from 'react';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { trackConversion } from '@/lib/analytics';
import { MapPin, Navigation, MessageCircle, Phone, Clock, Car, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0E0C] relative border-t border-[#C5A880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="FIND MIILAANO"
          subtitle="Located in the heart of the city’s luxury quarter. We look forward to welcoming you for an unforgettable dining experience."
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Details & Practical Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#111412] border border-[#C5A880]/20 p-6 sm:p-8">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-1">
                    Restaurant Address
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B0A2] font-sans font-light leading-relaxed">
                    {RESTAURANT_DATA.location.fullAddress}
                  </p>
                  <p className="text-xs text-[#C5A880] mt-1">
                    Landmark: {RESTAURANT_DATA.location.landmark}
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <Car className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-1">
                    Parking & Valet
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B0A2] font-sans font-light leading-relaxed">
                    {RESTAURANT_DATA.location.parking}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-2">
                    Service Hours
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-[#B8B0A2]">
                    {RESTAURANT_DATA.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-[#FAF8F5] font-medium">{h.days}:</span>
                        <span className="text-[#DFCA9F]">{h.lunch} | {h.dinner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone & Direct Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-1">
                    Reservation Desk
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_DATA.contact.phoneClean}`}
                    onClick={() => trackConversion('click_phone_call')}
                    className="text-xs sm:text-sm text-[#FAF8F5] hover:text-[#C5A880] transition-colors font-medium"
                  >
                    {RESTAURANT_DATA.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <Button
                variant="gold"
                size="md"
                href={RESTAURANT_DATA.location.googleMapsUrl}
                isExternal
                onClick={() => trackConversion('click_get_directions')}
                className="w-full flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${encodeURIComponent(
                  'Hello MIILAANO, I need assistance with directions and table reservations.'
                )}`}
                isExternal
                onClick={() => trackConversion('click_whatsapp_inquire')}
                className="w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Preview Box */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] border border-[#C5A880]/20 bg-[#151A16] overflow-hidden flex flex-col justify-between">
            {/* Embedded Google Map iframe with styled overlay */}
            <iframe
              title="MIILAANO Fine Dine Google Map Location"
              src={RESTAURANT_DATA.location.googleMapsEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[500px] border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Info Overlay */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#090A09]/90 backdrop-blur-md border border-[#C5A880]/30 p-4 shadow-xl pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-serif text-[#DFCA9F] uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" /> Verified Location
              </div>
              <p className="text-xs font-medium text-[#FAF8F5]">MIILAANO – Fine Dine</p>
              <p className="text-[11px] text-[#B8B0A2] mt-0.5">{RESTAURANT_DATA.location.city}, {RESTAURANT_DATA.location.state}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
