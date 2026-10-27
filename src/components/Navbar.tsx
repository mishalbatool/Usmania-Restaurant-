import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#4B101B]/95 backdrop-blur-md shadow-xl border-b border-[#D6A64F]/30 py-2.5'
          : 'bg-gradient-to-b from-[#350A12]/95 via-[#4B101B]/85 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#741F2B] to-[#4B101B] border border-[#D6A64F] flex items-center justify-center shadow-md shadow-black/20 group-hover:border-[#ECC77D] transition-colors">
              <span className="font-serif font-bold text-xl text-[#D6A64F] tracking-wider">
                NU
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#D6A64F] transition-colors">
                  NEW USMANIA
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D6A64F] opacity-80" />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#D6A64F] font-semibold">
                RESTAURANT • CHINIOT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all relative rounded-md ${
                    isActive
                      ? 'text-[#D6A64F] font-semibold'
                      : 'text-white/90 hover:text-[#D6A64F] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#D6A64F] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-white hover:text-[#D6A64F] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6A64F]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#350A12]/98 backdrop-blur-xl border-b border-[#D6A64F]/30 shadow-2xl px-6 py-6 transition-all duration-300 ease-out animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <div className="pb-2 border-b border-[#D6A64F]/20 flex items-center justify-between text-xs text-[#D6A64F]">
              <span className="uppercase tracking-widest font-semibold">Chinioti Traditional Cuisine</span>
              <span className="flex items-center gap-1">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                Dine-In
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`py-2.5 px-3 text-base rounded-md font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#741F2B] text-[#D6A64F] font-semibold border-l-4 border-[#D6A64F]'
                      : 'text-white/90 hover:bg-white/5 hover:text-[#D6A64F]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[#D6A64F]/60 text-sm">→</span>
                </a>
              );
            })}

            <div className="pt-4 border-t border-[#D6A64F]/20">
              <p className="text-center text-xs text-[#FFF7E8]/70">
                {RESTAURANT_INFO.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
