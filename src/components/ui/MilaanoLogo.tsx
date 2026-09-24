import React from 'react';
import Link from 'next/link';

interface MilaanoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'gold' | 'emerald';
}

export const MilaanoLogo: React.FC<MilaanoLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'gold',
}) => {
  const sizeClasses = {
    sm: 'text-xl tracking-[0.2em]',
    md: 'text-2xl md:text-3xl tracking-[0.25em]',
    lg: 'text-3xl md:text-5xl tracking-[0.3em]',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.35em]',
    md: 'text-[11px] tracking-[0.45em]',
    lg: 'text-xs md:text-sm tracking-[0.55em]',
  };

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center group select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="MIILAANO Fine Dine Home"
    >
      <div className="flex items-center gap-2">
        {/* Subtle decorative luxury emblem */}
        <svg
          className="w-4 h-4 text-emerald-bright/80 group-hover:text-gold-champagne transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.15" />
        </svg>

        <span
          className={`font-serif font-medium uppercase text-ivory group-hover:text-gold-bright transition-colors duration-300 ${sizeClasses[size]}`}
        >
          MIILAANO
        </span>

        <svg
          className="w-4 h-4 text-emerald-bright/80 group-hover:text-gold-champagne transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.15" />
        </svg>
      </div>

      <div className="flex items-center gap-2 w-full justify-center mt-0.5">
        <span className="h-[1px] w-4 bg-gold-champagne/40 group-hover:w-6 transition-all duration-300" />
        <span
          className={`font-sans font-light uppercase text-gold-champagne/90 ${subtitleSizes[size]}`}
        >
          FINE DINE
        </span>
        <span className="h-[1px] w-4 bg-gold-champagne/40 group-hover:w-6 transition-all duration-300" />
      </div>
    </Link>
  );
};
