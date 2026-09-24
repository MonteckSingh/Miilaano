'use client';

import React from 'react';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { trackConversion } from '@/lib/analytics';
import { MapPin, Navigation, MessageCircle, Phone, Clock, Car, Mail, CheckCircle2 } from 'lucide-react';

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-[#090A09] pt-28 sm:pt-36 pb-24 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Direct Access"
          title="LOCATION & CONTACT"
          subtitle="Plan your journey to MIILAANO. We offer complimentary valet parking, wheelchair accessibility, and direct concierge assistance."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Details Column */}
          <div className="lg:col-span-5 bg-[#111412] border border-[#C5A880]/20 p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-1">
                    Address
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B0A2] font-light leading-relaxed">
                    {RESTAURANT_DATA.location.fullAddress}
                  </p>
                  <p className="text-xs text-[#DFCA9F] mt-1">
                    Landmark: {RESTAURANT_DATA.location.landmark}
                  </p>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-2">
                    Dining Timings
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

              {/* Valet & Parking */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <Car className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-1">
                    Valet & Parking
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B0A2] font-light">
                    {RESTAURANT_DATA.location.parking}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#182E23] border border-[#336B53]/50 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-wide mb-1">
                    Concierge Desk
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_DATA.contact.phoneClean}`}
                    onClick={() => trackConversion('click_phone_call')}
                    className="block text-xs sm:text-sm text-[#FAF8F5] hover:text-[#C5A880] transition-colors"
                  >
                    Phone: {RESTAURANT_DATA.contact.phone}
                  </a>
                  <a
                    href={`mailto:${RESTAURANT_DATA.contact.email}`}
                    className="block text-xs text-[#B8B0A2] hover:text-[#C5A880] transition-colors"
                  >
                    Email: {RESTAURANT_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>

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
                Navigate on Google Maps
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${encodeURIComponent(
                  'Hello MIILAANO, I need assistance with location directions.'
                )}`}
                isExternal
                onClick={() => trackConversion('click_whatsapp_inquire')}
                className="w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Concierge on WhatsApp
              </Button>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[550px] border border-[#C5A880]/20 bg-[#151A16] overflow-hidden">
            <iframe
              title="MIILAANO Google Maps Location"
              src={RESTAURANT_DATA.location.googleMapsEmbedUrl}
              className="w-full h-full min-h-[420px] lg:min-h-[550px] border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
