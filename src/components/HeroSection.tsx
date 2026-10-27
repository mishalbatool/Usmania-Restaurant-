import React from 'react';
import { ArrowRight, MapPin, Sparkles, Flame, Clock, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const HeroSection: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
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
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Hero Image with Appetizing Mutton Kunna in Clay Pot */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/mutton-kunna.jpg"
          alt="Authentic Chinioti Mutton Kunna in traditional clay pot with fresh tandoori naan"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          fetchPriority="high"
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B16] via-[#4B101B]/80 to-[#350A12]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#2B1B16]/50 to-[#2B1B16]/90" />
        {/* Traditional subtle pattern overlay */}
        <div className="absolute inset-0 bg-chiniot-pattern-dark opacity-40 mix-blend-overlay" />
      </div>

      {/* Decorative Traditional Corner Flairs */}
      <div className="absolute top-28 left-6 hidden md:block opacity-40">
        <ChiniotOrnament variant="corner" color="#D6A64F" />
      </div>
      <div className="absolute top-28 right-6 hidden md:block opacity-40 rotate-90">
        <ChiniotOrnament variant="corner" color="#D6A64F" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* Golden Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4B101B]/80 backdrop-blur-md border border-[#D6A64F]/50 shadow-lg mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#D6A64F]">
            {RESTAURANT_INFO.tagline}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
          A Taste of Tradition,
          <span className="block mt-2 bg-gradient-to-r from-[#FFF7E8] via-[#ECC77D] to-[#D6A64F] bg-clip-text text-transparent">
            A Flavor to Remember
          </span>
        </h1>

        {/* Decorative divider */}
        <ChiniotOrnament variant="divider" color="#D6A64F" className="my-5" />

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#FFF7E8]/90 font-normal leading-relaxed drop-shadow">
          {RESTAURANT_INFO.heroSubheading}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#menu"
            onClick={(e) => scrollToSection(e, '#menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6A64F] via-[#ECC77D] to-[#D6A64F] text-[#2B1B16] font-bold text-base shadow-xl hover:shadow-[#D6A64F]/30 hover:scale-[1.03] active:scale-[0.98] transition-all border border-[#FFF7E8]/50 group"
          >
            <span>Explore Our Menu</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#4B101B]/80 hover:bg-[#741F2B] text-white font-semibold text-base backdrop-blur-md border border-[#D6A64F]/60 shadow-lg hover:border-[#D6A64F] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <MapPin className="w-5 h-5 text-[#D6A64F]" />
            <span>Find Our Restaurant</span>
          </a>
        </div>

        {/* Signature Highlights / Badge strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-[#2B1B16]/75 backdrop-blur-md border border-[#D6A64F]/25 flex items-center gap-3 hover:border-[#D6A64F]/60 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-[#741F2B] flex items-center justify-center flex-shrink-0 text-[#D6A64F]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D6A64F] font-semibold">Specialty</p>
              <p className="text-xs sm:text-sm font-medium text-white">Clay-Pot Mutton Kunna</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#2B1B16]/75 backdrop-blur-md border border-[#D6A64F]/25 flex items-center gap-3 hover:border-[#D6A64F]/60 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-[#741F2B] flex items-center justify-center flex-shrink-0 text-[#D6A64F]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D6A64F] font-semibold">Method</p>
              <p className="text-xs sm:text-sm font-medium text-white">Hours Slow-Braised</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#2B1B16]/75 backdrop-blur-md border border-[#D6A64F]/25 flex items-center gap-3 hover:border-[#D6A64F]/60 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-[#741F2B] flex items-center justify-center flex-shrink-0 text-[#D6A64F]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D6A64F] font-semibold">Fresh Bread</p>
              <p className="text-xs sm:text-sm font-medium text-white">Live Tandoori Naan</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#2B1B16]/75 backdrop-blur-md border border-[#D6A64F]/25 flex items-center gap-3 hover:border-[#D6A64F]/60 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-[#741F2B] flex items-center justify-center flex-shrink-0 text-[#D6A64F]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D6A64F] font-semibold">Location</p>
              <p className="text-xs sm:text-sm font-medium text-white">Main Sargodha Rd, Chiniot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant bottom fade into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FFF7E8] to-transparent pointer-events-none" />
    </section>
  );
};
