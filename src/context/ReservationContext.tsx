'use client';

import React, { createContext, useContext, useState } from 'react';

interface ReservationContextType {
  isOpen: boolean;
  openReservation: (prefill?: { guests?: number; occasion?: string; timeSlot?: string }) => void;
  closeReservation: () => void;
  prefillData: { guests?: number; occasion?: string; timeSlot?: string };
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillData, setPrefillData] = useState<{ guests?: number; occasion?: string; timeSlot?: string }>({});

  const openReservation = (prefill?: { guests?: number; occasion?: string; timeSlot?: string }) => {
    if (prefill) setPrefillData(prefill);
    setIsOpen(true);
  };

  const closeReservation = () => {
    setIsOpen(false);
  };

  return (
    <ReservationContext.Provider value={{ isOpen, openReservation, closeReservation, prefillData }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};
