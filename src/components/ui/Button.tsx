import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'gold' | 'gold-outline' | 'emerald' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'gold',
  size = 'md',
  isExternal = false,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.15em] transition-all duration-300 relative overflow-hidden select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-none text-center cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5',
    md: 'text-xs md:text-sm px-6 py-3.5',
    lg: 'text-sm md:text-base px-8 py-4',
  };

  const variantStyles = {
    gold: 'bg-gradient-to-r from-[#C5A880] via-[#DFCA9F] to-[#C5A880] text-[#090A09] font-semibold hover:brightness-110 shadow-[0_4px_20px_rgba(197,168,128,0.25)] border border-[#DFCA9F]/40',
    'gold-outline':
      'border border-[#C5A880]/70 text-[#FAF8F5] hover:border-[#DFCA9F] hover:bg-[#C5A880]/10 hover:text-[#DFCA9F] hover:shadow-[0_0_20px_rgba(197,168,128,0.2)]',
    emerald:
      'bg-[#182E23] text-[#FAF8F5] border border-[#336B53]/60 hover:bg-[#244B3A] hover:border-[#438A6C] shadow-[0_4px_20px_rgba(36,75,58,0.3)]',
    ghost:
      'text-[#FAF8F5] hover:text-[#DFCA9F] underline-offset-8 hover:underline bg-transparent px-2',
    whatsapp:
      'bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] shadow-[0_4px_20px_rgba(37,211,102,0.3)] border border-[#25D366]',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
