import React from 'react';
import { MapPin, Heart, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#350A12] text-[#FFF7E8] border-t-2 border-[#D6A64F] relative overflow-hidden">
      {/* Background subtle geometric pattern */}
      <div className="absolute inset-0 bg-chiniot-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Wordmark (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#741F2B] to-[#4B101B] border-2 border-[#D6A64F] flex items-center justify-center shadow-lg">
                <span className="font-serif font-bold text-2xl text-[#D6A64F] tracking-wider">
                  NU
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white">
                  NEW USMANIA
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-[#D6A64F] font-semibold">
                  RESTAURANT • CHINIOT
                </p>
              </div>
            </div>

            <p className="text-sm text-[#FFF7E8]/80 leading-relaxed max-w-md pt-2">
              Chiniot&rsquo;s celebrated destination for authentic Mutton Kunna slow-simmered in clay pots, succulent BBQ, freshly ground karahi, and time-honored Pakistani hospitality.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook */}
              <a
                href={RESTAURANT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#4B101B] hover:bg-[#741F2B] border border-[#D6A64F]/40 hover:border-[#D6A64F] text-[#D6A64F] hover:text-white flex items-center justify-center transition-all shadow"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={RESTAURANT_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#4B101B] hover:bg-[#741F2B] border border-[#D6A64F]/40 hover:border-[#D6A64F] text-[#D6A64F] hover:text-white flex items-center justify-center transition-all shadow"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.28-1.53 3.32-3.35.03-4.13.01-8.27.01-12.4z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={RESTAURANT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#4B101B] hover:bg-[#741F2B] border border-[#D6A64F]/40 hover:border-[#D6A64F] text-[#D6A64F] hover:text-white flex items-center justify-center transition-all shadow"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D6A64F] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF7E8]/85">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-[#D6A64F] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#D6A64F] text-xs">›</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleLinkClick(e, '#story')}
                  className="hover:text-[#D6A64F] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#D6A64F] text-xs">›</span> Our Story & Heritage
                </a>
              </li>
              <li>
                <a
                  href="#specialties"
                  onClick={(e) => handleLinkClick(e, '#specialties')}
                  className="hover:text-[#D6A64F] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#D6A64F] text-xs">›</span> Signature Specialties
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleLinkClick(e, '#menu')}
                  className="hover:text-[#D6A64F] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#D6A64F] text-xs">›</span> Complete Food Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick(e, '#gallery')}
                  className="hover:text-[#D6A64F] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#D6A64F] text-xs">›</span> Food & Dining Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-[#D6A64F] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#D6A64F] text-xs">›</span> Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit & Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D6A64F] uppercase tracking-wider">
              Visit & Contact
            </h4>
            
            <div className="space-y-3 text-sm text-[#FFF7E8]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D6A64F] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D6A64F] hover:bg-[#ECC77D] text-[#2B1B16] font-bold text-xs shadow transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#2B1B16]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider with Chiniot Ornament */}
        <ChiniotOrnament variant="divider" color="#D6A64F" className="my-8 opacity-60" />

        {/* Bottom Bar: Dynamic Copyright & "Made with care for food lovers" */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF7E8]/70">
          <p>
            &copy; {currentYear} {RESTAURANT_INFO.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[#D6A64F]">
            <Heart className="w-4 h-4 fill-[#D6A64F]" />
            <span className="font-medium text-white/90">Made with care for food lovers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
