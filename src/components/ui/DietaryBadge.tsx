import React from 'react';

interface DietaryBadgeProps {
  isVeg: boolean;
  className?: string;
  showText?: boolean;
}

export const DietaryBadge: React.FC<DietaryBadgeProps> = ({
  isVeg,
  className = '',
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`} title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
      {isVeg ? (
        <div className="w-3.5 h-3.5 border border-emerald-500/80 p-[2px] flex items-center justify-center rounded-[2px] bg-emerald-950/40">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </div>
      ) : (
        <div className="w-3.5 h-3.5 border border-red-500/80 p-[2px] flex items-center justify-center rounded-[2px] bg-red-950/40">
          <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
        </div>
      )}
      {showText && (
        <span className="text-[11px] uppercase tracking-wider text-[#B8B0A2]">
          {isVeg ? 'Pure Veg' : 'Non-Veg'}
        </span>
      )}
    </div>
  );
};
