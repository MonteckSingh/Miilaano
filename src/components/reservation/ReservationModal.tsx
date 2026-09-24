'use client';

import React, { useState, useEffect } from 'react';
import { useReservation } from '@/context/ReservationContext';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { trackConversion } from '@/lib/analytics';
import { X, Calendar, Clock, Users, Sparkles, MessageCircle, Phone, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ReservationModal: React.FC = () => {
  const { isOpen, closeReservation, prefillData } = useReservation();

  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('08:00 PM');
  const [seatingArea, setSeatingArea] = useState<string>('Main Dining Room');
  const [occasion, setOccasion] = useState<string>('Casual Dining');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Default to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setDate(dateStr);

    if (prefillData.guests) setGuests(prefillData.guests);
    if (prefillData.occasion) setOccasion(prefillData.occasion);
    if (prefillData.timeSlot) setTime(prefillData.timeSlot);
  }, [prefillData, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeReservation();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeReservation]);

  if (!isOpen) return null;

  const timeSlots = [
    '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
  ];

  const occasions = [
    'Romantic Date Night',
    'Anniversary',
    'Birthday Celebration',
    'Family Gathering',
    'Business Dinner',
    'Casual Fine Dining',
  ];

  const seatingOptions = [
    'Main Dining Room',
    'Intimate Booth',
    'Private Dining Lounge (Min. 6)',
    'Outdoor Courtyard',
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = encodeURIComponent(
      `*MIILAANO FINE DINE - TABLE RESERVATION REQUEST*\n\n` +
      `👤 *Name:* ${guestName || 'Guest'}\n` +
      `📞 *Phone:* ${guestPhone || 'Provided via WhatsApp'}\n` +
      `👥 *Guests:* ${guests} People\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Time Slot:* ${time}\n` +
      `✨ *Occasion:* ${occasion}\n` +
      `🍷 *Preferred Seating:* ${seatingArea}\n` +
      (specialNotes ? `📝 *Special Requests:* ${specialNotes}\n\n` : '\n') +
      `Please confirm availability and table reservation for our visit. Thank you!`
    );

    const whatsappUrl = `https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${formattedMessage}`;

    trackConversion('submit_reservation_form', {
      guests,
      date,
      time,
      occasion,
      seatingArea,
    });

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={closeReservation} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#111412] border border-[#C5A880]/30 rounded-none shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8">
        {/* Decorative Top Accent */}
        <div className="h-1 bg-gradient-to-r from-[#182E23] via-[#C5A880] to-[#182E23]" />

        {/* Close Button */}
        <button
          onClick={closeReservation}
          className="absolute top-4 right-4 text-[#FAF8F5]/60 hover:text-[#C5A880] p-2 transition-colors z-20 cursor-pointer"
          aria-label="Close reservation modal"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#182E23] border border-[#336B53] flex items-center justify-center text-[#DFCA9F] mb-6">
              <CheckCircle className="w-9 h-9 text-[#C5A880]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-2 uppercase tracking-wide">
              Reservation Dispatched
            </h3>
            <p className="text-[#B8B0A2] text-sm sm:text-base max-w-md mb-6 leading-relaxed">
              Your reservation request has been directed to our WhatsApp concierge. Our reservation team will confirm your table and seating preference immediately.
            </p>

            <div className="bg-[#151A16] border border-[#C5A880]/20 p-4 w-full max-w-md text-left text-xs sm:text-sm text-[#FAF8F5] space-y-2 mb-8">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#B8B0A2]">Date & Time:</span>
                <span className="font-medium text-[#DFCA9F]">{date} at {time}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#B8B0A2]">Guests:</span>
                <span className="font-medium">{guests} Guests ({seatingArea})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#B8B0A2]">Guest Name:</span>
                <span className="font-medium">{guestName || 'Valued Guest'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Button
                variant="gold-outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  setIsSubmitted(false);
                  closeReservation();
                }}
              >
                Close Window
              </Button>
              <Button
                variant="whatsapp"
                size="sm"
                href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}`}
                isExternal
                className="flex-1 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="h-[1px] w-6 bg-[#C5A880]/60" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                  Table Concierge
                </span>
                <span className="h-[1px] w-6 bg-[#C5A880]/60" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] uppercase tracking-wide">
                Reserve Your Table
              </h2>
              <p className="text-xs sm:text-sm text-[#B8B0A2] mt-1">
                Experience exceptional fine dining at MIILAANO. Instant confirmation via WhatsApp.
              </p>
            </div>

            <div className="space-y-5">
              {/* Party Size Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-2 font-medium flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" /> Number of Guests
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
                        guests === num
                          ? 'bg-[#C5A880] text-[#090A09] border-[#C5A880] font-semibold shadow-[0_0_15px_rgba(197,168,128,0.3)]'
                          : 'bg-[#151A16] text-[#FAF8F5] border-white/10 hover:border-[#C5A880]/50'
                      }`}
                    >
                      {num} {num === 8 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-2 font-medium flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#151A16] border border-white/15 px-3 py-2.5 text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-2 font-medium flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" /> Preferred Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#151A16] border border-white/15 px-3 py-2.5 text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                  >
                    <optgroup label="Lunch">
                      {timeSlots.slice(0, 4).map((t) => (
                        <option key={t} value={t} className="bg-[#111412] text-[#FAF8F5]">
                          {t}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Dinner">
                      {timeSlots.slice(4).map((t) => (
                        <option key={t} value={t} className="bg-[#111412] text-[#FAF8F5]">
                          {t}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Seating & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-2 font-medium flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" /> Seating Preference
                  </label>
                  <select
                    value={seatingArea}
                    onChange={(e) => setSeatingArea(e.target.value)}
                    className="w-full bg-[#151A16] border border-white/15 px-3 py-2.5 text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                  >
                    {seatingOptions.map((area) => (
                      <option key={area} value={area} className="bg-[#111412] text-[#FAF8F5]">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-2 font-medium">
                    Special Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#151A16] border border-white/15 px-3 py-2.5 text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                  >
                    {occasions.map((occ) => (
                      <option key={occ} value={occ} className="bg-[#111412] text-[#FAF8F5]">
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1.5 font-medium">
                    Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#151A16] border border-white/15 px-3 py-2.5 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-white/30 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1.5 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98604 99000"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#151A16] border border-white/15 px-3 py-2.5 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-white/30 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1.5 font-medium">
                  Special Requests / Dietary Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Quiet corner table, anniversary cake request, gluten allergy..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#151A16] border border-white/15 px-3 py-2 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-white/30 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Table via WhatsApp</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[#B8B0A2]">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> Direct WhatsApp Support
                  </span>
                  <span>•</span>
                  <a
                    href={`tel:${RESTAURANT_DATA.contact.phoneClean}`}
                    className="flex items-center gap-1 hover:text-[#C5A880] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call: {RESTAURANT_DATA.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
