import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ExperienceSplit } from '@/components/home/ExperienceSplit';
import { SignatureDishes } from '@/components/home/SignatureDishes';
import { WhyMilaano } from '@/components/home/WhyMilaano';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { InstagramGrid } from '@/components/home/InstagramGrid';
import { LocationSection } from '@/components/home/LocationSection';
import { ReservationCta } from '@/components/home/ReservationCta';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#090A09]">
      {/* 1. Cinematic Fullscreen Hero */}
      <HeroSection />

      {/* 2. Brand Experience Split ("MORE THAN A MEAL.") */}
      <ExperienceSplit />

      {/* 3. Signature Dishes Showcase ("A TASTE WORTH REMEMBERING.") */}
      <SignatureDishes />

      {/* 4. Why Milaano / Storytelling ("COME FOR THE FOOD. STAY FOR THE MOMENTS.") */}
      <WhyMilaano />

      {/* 5. Guest Testimonials & Social Proof ("WHAT OUR GUESTS SAY") */}
      <ReviewsSection />

      {/* 6. Instagram Visual Grid ("FOLLOW THE MIILAANO EXPERIENCE") */}
      <InstagramGrid />

      {/* 7. Location & Operating Hours ("FIND MIILAANO") */}
      <LocationSection />

      {/* 8. High-Conversion Table Reservation Banner */}
      <ReservationCta />
    </div>
  );
}
