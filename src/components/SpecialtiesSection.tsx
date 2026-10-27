import React from 'react';
import { Sparkles, Flame, Utensils, Heart, Info } from 'lucide-react';
import { SIGNATURE_SPECIALTIES } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

interface SpecialtiesSectionProps {
  onSelectDishForGallery?: (dishName: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectDishForGallery }) => {
  return (
    <section id="specialties" className="py-20 sm:py-24 bg-[#4B101B] text-[#FFF7E8] relative overflow-hidden">
      {/* Traditional geometric pattern backdrop */}
      <div className="absolute inset-0 bg-chiniot-pattern-dark opacity-30 pointer-events-none" />

      {/* Ambient gradient glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#741F2B] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#D6A64F] rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#741F2B]/60 border border-[#D6A64F]/40 text-[#D6A64F] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chiniot's Most Celebrated Recipes</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Signature Specialties
          </h2>

          <ChiniotOrnament variant="divider" color="#D6A64F" className="my-4" />

          <p className="text-base sm:text-lg text-[#FFF7E8]/80 font-normal leading-relaxed">
            Every dish is cooked according to authentic Chinioti culinary traditions, utilizing earthen clay pots, pure desi spices, and open charcoal fire.
          </p>
        </div>

        {/* 6 Specialty Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SIGNATURE_SPECIALTIES.map((specialty, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={specialty.id}
                className={`group relative rounded-2xl bg-gradient-to-b from-[#581520] to-[#350A12] border transition-all duration-500 overflow-hidden shadow-xl hover:-translate-y-2 flex flex-col ${
                  isFirst
                    ? 'border-[#D6A64F] shadow-[#D6A64F]/10 ring-1 ring-[#D6A64F]/50'
                    : 'border-[#D6A64F]/30 hover:border-[#D6A64F] hover:shadow-2xl hover:shadow-[#D6A64F]/20'
                }`}
              >
                {/* Visual Image Container with subtle zoom */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#2B1B16]">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350A12] via-[#350A12]/30 to-transparent" />

                  {/* Category tag */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-[#2B1B16]/85 backdrop-blur-md border border-[#D6A64F]/60 text-[#D6A64F] text-xs font-semibold tracking-wider uppercase">
                    {specialty.category}
                  </div>

                  {/* Special indicator for Mutton Kunna */}
                  {isFirst && (
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-md bg-gradient-to-r from-[#D6A64F] to-[#ECC77D] text-[#2B1B16] text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-[#2B1B16]" />
                      <span>Chiniot Crown Jewel</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Item Name */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#D6A64F] transition-colors leading-snug">
                        {specialty.name}
                      </h3>
                      {specialty.spiciness && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#741F2B] border border-[#D6A64F]/30 text-[#FFF7E8]/90 font-medium whitespace-nowrap">
                          {specialty.spiciness}
                        </span>
                      )}
                    </div>

                    {/* Official Description */}
                    <p className="text-sm text-[#FFF7E8]/85 leading-relaxed mb-4">
                      {specialty.description}
                    </p>

                    {/* Culinary Highlight Strip */}
                    <div className="space-y-1.5 pt-3 border-t border-[#D6A64F]/20 text-xs">
                      <div className="flex items-center gap-2 text-[#D6A64F]">
                        <Flame className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="font-medium text-[#FFF7E8]/90">
                          <strong className="text-[#D6A64F]">Craft:</strong> {specialty.prepHighlight}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#D6A64F]">
                        <Utensils className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="font-medium text-[#FFF7E8]/90">
                          <strong className="text-[#D6A64F]">Pairing:</strong> {specialty.servingSuggestion}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#D6A64F] font-semibold tracking-wide">
                      Freshly Prepared
                    </span>
                    <a
                      href="#menu"
                      className="inline-flex items-center gap-1 font-semibold text-white group-hover:text-[#D6A64F] transition-colors"
                    >
                      <span>View in Menu</span>
                      <span className="text-[#D6A64F] transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Prices banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2B1B16]/80 border border-[#D6A64F]/40 text-xs sm:text-sm text-[#FFF7E8]/90">
            <Info className="w-4 h-4 text-[#D6A64F] flex-shrink-0" />
            <span>
              All meat and poultry are 100% Halal and sourced fresh daily in Chiniot. Dishes are slow-cooked to order.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
