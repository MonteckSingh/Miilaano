'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useReservation } from '@/context/ReservationContext';
import { RESTAURANT_DATA } from '@/data/restaurant';
import { trackConversion } from '@/lib/analytics';
import { Utensils, MessageCircle, Calendar } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  const pathname = usePathname();
  const { openReservation } = useReservation();

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0C0F0D]/95 backdrop-blur-lg border-t border-[#C5A880]/20 px-3 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.8)] pb-safe"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Menu Link */}
        <Link
          href="/menu"
          onClick={() => trackConversion('click_view_full_menu')}
          className={`flex flex-col items-center justify-center py-2 px-1 rounded transition-colors ${
            pathname === '/menu'
              ? 'text-[#DFCA9F] bg-[#182E23]/60 border border-[#336B53]/40'
              : 'text-[#FAF8F5]/80 hover:text-[#FAF8F5]'
          }`}
        >
          <Utensils className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-wider">Menu</span>
        </Link>

        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/${RESTAURANT_DATA.contact.whatsappClean}?text=${encodeURIComponent(
            'Hello MIILAANO, I would like to inquire about table availability and the menu.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion('click_whatsapp_inquire')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded text-[#FAF8F5]/90 hover:text-[#25D366] transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-1 text-[#25D366]" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Reserve Button */}
        <button
          onClick={() => {
            trackConversion('click_whatsapp_reserve');
            openReservation();
          }}
          className="flex flex-col items-center justify-center py-2 px-1 bg-gradient-to-r from-[#C5A880] to-[#DFCA9F] text-[#090A09] font-bold rounded shadow-[0_2px_10px_rgba(197,168,128,0.3)] cursor-pointer active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-1 text-[#090A09]" />
          <span className="text-[10px] font-sans uppercase tracking-wider">Reserve</span>
        </button>
      </div>
    </aside>
  );
};
