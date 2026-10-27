import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const QuickActionBar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex w-12 h-12 rounded-full bg-[#741F2B] hover:bg-[#4B101B] text-[#D6A64F] hover:text-white border-2 border-[#D6A64F] shadow-2xl items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
