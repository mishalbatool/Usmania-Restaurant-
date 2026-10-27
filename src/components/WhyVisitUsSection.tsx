import React from 'react';
import { Flame, Soup, HeartHandshake, Utensils, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const WhyVisitUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#D6A64F]" />;
      case 'Soup':
        return <Soup className="w-6 h-6 text-[#D6A64F]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#D6A64F]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#D6A64F]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#D6A64F]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D6A64F]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#FFFDF9] relative overflow-hidden">
      {/* Subtle traditional pattern */}
      <div className="absolute inset-0 bg-chiniot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#741F2B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
            <span>The New Usmania Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#741F2B] tracking-tight">
            Why Visit Us?
          </h2>

          <ChiniotOrnament variant="divider" color="#D6A64F" className="my-4" />

          <p className="text-base sm:text-lg text-[#5E463E] font-normal leading-relaxed">
            From our slow-braised clay pot Kunna to our warm family atmosphere, discover what makes dining at New Usmania Chiniot a cherished ritual.
          </p>
        </div>

        {/* 5 Distinctive Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RESTAURANT_INFO.whyVisitUs.map((item, index) => {
            const isFeatured = index === 1; // Signature Clay-Pot Kunna
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#741F2B] to-[#4B101B] text-white shadow-xl lg:scale-105 border-2 border-[#D6A64F]'
                    : 'bg-[#FFF7E8] text-[#2B1B16] border border-[#D6A64F]/40 hover:border-[#D6A64F] hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Icon & Index badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 rounded-xl flex items-center justify-center shadow-md ${
                        isFeatured
                          ? 'bg-[#4B101B] border border-[#D6A64F]'
                          : 'bg-[#741F2B] text-white'
                      }`}
                    >
                      {getIcon(item.icon)}
                    </div>
                    <span
                      className={`text-xs font-bold font-mono px-2.5 py-1 rounded-md ${
                        isFeatured
                          ? 'bg-[#D6A64F] text-[#2B1B16]'
                          : 'bg-[#D6A64F]/20 text-[#741F2B]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif text-xl sm:text-2xl font-bold mb-3 ${
                      isFeatured ? 'text-[#ECC77D]' : 'text-[#741F2B]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isFeatured ? 'text-[#FFF7E8]/90' : 'text-[#5E463E]'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Subtle quality assurance dot */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-medium ${
                    isFeatured
                      ? 'border-[#D6A64F]/30 text-[#D6A64F]'
                      : 'border-[#D6A64F]/30 text-[#741F2B]'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Traditional Standard Guaranteed</span>
                </div>
              </div>
            );
          })}

          {/* Quick Info Box in 6th slot for balanced 3x2 grid */}
          <div className="relative rounded-2xl p-7 bg-[#F9EED9] border border-dashed border-[#D6A64F] flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-xl bg-[#D6A64F]/30 border border-[#D6A64F] flex items-center justify-center mb-5 text-[#741F2B]">
                <Sparkles className="w-6 h-6 text-[#741F2B]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#741F2B] mb-2">
                Pure Desi Hospitality
              </h3>
              <p className="text-sm text-[#5E463E] leading-relaxed">
                Whether dropping by while traveling through Chiniot or sharing an evening feast with family, our doors are always open to welcome you.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D6A64F]/30">
              <a
                href="#contact"
                className="text-xs font-bold text-[#741F2B] hover:text-[#4B101B] inline-flex items-center gap-1.5"
              >
                <span>Find Our Location on Main Sargodha Road</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
