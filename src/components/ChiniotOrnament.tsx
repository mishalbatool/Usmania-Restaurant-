import React from 'react';

interface ChiniotOrnamentProps {
  className?: string;
  variant?: 'divider' | 'seal' | 'corner' | 'arch';
  color?: string;
}

export const ChiniotOrnament: React.FC<ChiniotOrnamentProps> = ({
  className = '',
  variant = 'divider',
  color = '#D6A64F',
}) => {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D6A64F] to-transparent" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#D6A64F] flex-shrink-0"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill={color}
            fillOpacity="0.85"
          />
          <circle cx="12" cy="12" r="2.5" fill="#4B101B" />
        </svg>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D6A64F] to-transparent" />
      </div>
    );
  }

  if (variant === 'seal') {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="24" cy="24" r="22" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="1" />
        <path
          d="M24 6L26.5 15.5L36 18L27.5 24L31 34L24 28L17 34L20.5 24L12 18L21.5 15.5L24 6Z"
          fill={color}
          fillOpacity="0.2"
          stroke={color}
          strokeWidth="1.2"
        />
        <circle cx="24" cy="24" r="4" fill={color} />
      </svg>
    );
  }

  if (variant === 'corner') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M2 30V10C2 5.58172 5.58172 2 10 2H30"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 30V14C6 9.58172 9.58172 6 14 6H30"
          stroke={color}
          strokeWidth="0.75"
          strokeDasharray="2 2"
        />
        <circle cx="10" cy="10" r="2" fill={color} />
      </svg>
    );
  }

  return null;
};
