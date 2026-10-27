import React from 'react';
import { Sparkles, Utensils, HeartHandshake, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-24 bg-[#FFF7E8] relative overflow-hidden">
      {/* Background traditional geometric pattern */}
      <div className="absolute inset-0 bg-chiniot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Presentation */}
          <div className="lg:col-span-6 relative">
            {/* Decorative ornamental background block */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-[#741F2B] to-[#4B101B] transform -rotate-1 hidden sm:block shadow-xl opacity-90" />
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D6A64F] shadow-2xl bg-[#4B101B]">
              <img
                src="/images/dining-ambiance.jpg"
                alt="New Usmania Restaurant Dining Hall Chiniot"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B16]/90 via-transparent to-black/20" />
              
              {/* Floating Feature Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#4B101B]/95 backdrop-blur-md border border-[#D6A64F]/50 shadow-xl text-white">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#741F2B] border border-[#D6A64F] flex items-center justify-center text-[#D6A64F] flex-shrink-0">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">The Heart of Chinioti Cuisine</h4>
                    <p className="text-xs text-[#FFF7E8]/80 mt-0.5">
                      Slow-cooked earthen clay pots, freshly ground spices, and century-old recipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Naan Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-3 rounded-2xl bg-[#FFFDF9] border border-[#D6A64F] shadow-2xl items-center gap-3 max-w-xs z-10">
              <img
                src="/images/fresh-naan.jpg"
                alt="Fresh Tandoori Naan"
                className="w-14 h-14 rounded-xl object-cover border border-[#D6A64F]/40"
              />
              <div>
                <p className="text-xs font-bold text-[#741F2B] uppercase tracking-wider">Tandoor Fresh</p>
                <p className="text-xs text-[#2B1B16]/80 font-medium">Baked hot against clay walls</p>
              </div>
            </div>
          </div>

          {/* Right Column: Restaurant Description & Heritage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#741F2B]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
                <span>Our Heritage & Culture</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#741F2B] tracking-tight leading-[1.2]">
                {RESTAURANT_INFO.storyHeading}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#741F2B] to-[#D6A64F] rounded-full" />
            </div>

            {/* Official Story Text from user prompt */}
            <div className="relative pl-5 border-l-2 border-[#D6A64F] space-y-4">
              <p className="text-base sm:text-lg text-[#2B1B16] leading-relaxed font-normal">
                {RESTAURANT_INFO.storyText}
              </p>
            </div>

            {/* Heritage Highlights Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F9EED9]/80 border border-[#D6A64F]/30">
                <div className="w-8 h-8 rounded-lg bg-[#741F2B] flex items-center justify-center text-[#D6A64F] flex-shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#741F2B]">Clay-Pot Mastery</h4>
                  <p className="text-xs text-[#5E463E] mt-0.5">Slow simmered to infuse earthy aromas and deep flavors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F9EED9]/80 border border-[#D6A64F]/30">
                <div className="w-8 h-8 rounded-lg bg-[#741F2B] flex items-center justify-center text-[#D6A64F] flex-shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#741F2B]">Traditional Hospitality</h4>
                  <p className="text-xs text-[#5E463E] mt-0.5">Dedicated family halls, courteous service, and warm welcomes.</p>
                </div>
              </div>
            </div>

            {/* Callout action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#specialties"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#741F2B] hover:text-[#4B101B] group py-2"
              >
                <span className="border-b-2 border-[#D6A64F] pb-0.5">Explore Our Signature Specialties</span>
                <span className="text-[#D6A64F] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
