import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-6 bg-[#C5A880]/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
            {eyebrow}
          </span>
          <span className="h-[1px] w-6 bg-[#C5A880]/60" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide text-[#FAF8F5] uppercase leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#B8B0A2] font-sans font-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      <div className="mt-5 flex items-center gap-1.5 opacity-60">
        <span className="w-1.5 h-1.5 bg-[#C5A880] rotate-45" />
        <span className="w-8 h-[1px] bg-[#C5A880]" />
        <span className="w-1.5 h-1.5 bg-[#C5A880] rotate-45" />
      </div>
    </div>
  );
};
