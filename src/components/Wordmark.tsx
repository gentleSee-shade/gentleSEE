import React from 'react';

interface WordmarkProps {
  className?: string;
  tone?: 'dark' | 'light';
}

export const Wordmark: React.FC<WordmarkProps> = ({ className = 'h-7 w-auto' }) => {
  return (
    <img
      src="assets/gentleSEE_logo_smooth.svg"
      alt="gentleSEE"
      className={`select-none object-contain ${className}`}
      onError={(e) => {
        // Fallback to 04-gentleSEE-wordmark.svg if gentleSEE_logo_smooth.svg is missing
        const target = e.currentTarget;
        if (!target.src.includes('04-gentleSEE-wordmark.svg')) {
          target.src = 'assets/04-gentleSEE-wordmark.svg';
        }
      }}
    />
  );
};
