import React from 'react';
import { Banknote, UtensilsCrossed, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const ServiceOptionsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFF7E8] relative overflow-hidden border-t border-b border-[#D6A64F]/30">
      {/* Background subtle geometric pattern */}
      <div className="absolute inset-0 bg-chiniot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#741F2B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
            <span>Service & Dining Guidelines</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#741F2B] tracking-tight">
            Your Dining Experience
          </h2>

          <ChiniotOrnament variant="divider" color="#D6A64F" className="my-3" />

          <p className="text-sm sm:text-base text-[#5E463E] leading-relaxed">
            We are dedicated to providing an authentic, straightforward, and hospitable experience for all guests.
          </p>
        </div>

        {/* 3 Confirmed Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Cash Only */}
          <div className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#D6A64F]/40 hover:border-[#D6A64F] shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#741F2B] border-2 border-[#D6A64F] flex items-center justify-center text-[#D6A64F] mb-4 shadow-md">
              <Banknote className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#741F2B] mb-2">
              Cash Only
            </h3>
            <p className="text-sm text-[#5E463E] leading-relaxed">
              We operate exclusively on direct cash transactions at our payment counter for swift and authentic service.
            </p>
            <div className="mt-4 pt-3 border-t border-[#D6A64F]/20 text-xs text-[#741F2B] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A64F]" />
              <span>In-Person Counter Payment</span>
            </div>
          </div>

          {/* Card 2: All-You-Can-Eat */}
          <div className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#D6A64F]/40 hover:border-[#D6A64F] shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#741F2B] border-2 border-[#D6A64F] flex items-center justify-center text-[#D6A64F] mb-4 shadow-md">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#741F2B] mb-2">
              All-You-Can-Eat
            </h3>
            <p className="text-sm text-[#5E463E] leading-relaxed">
              Generous hospitality feasts with unlimited accompaniments, piping hot tandoori naans, and rich gravies.
            </p>
            <div className="mt-4 pt-3 border-t border-[#D6A64F]/20 text-xs text-[#741F2B] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A64F]" />
              <span>Generous Chinioti Servings</span>
            </div>
          </div>

          {/* Card 3: Happy-Hour Food */}
          <div className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#D6A64F]/40 hover:border-[#D6A64F] shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#741F2B] border-2 border-[#D6A64F] flex items-center justify-center text-[#D6A64F] mb-4 shadow-md">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#741F2B] mb-2">
              Happy-Hour Food
            </h3>
            <p className="text-sm text-[#5E463E] leading-relaxed">
              Special freshly baked delights, hot snacks, and afternoon tea accompaniments crafted fresh every day.
            </p>
            <div className="mt-4 pt-3 border-t border-[#D6A64F]/20 text-xs text-[#741F2B] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A64F]" />
              <span>Fresh Batch Timings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
