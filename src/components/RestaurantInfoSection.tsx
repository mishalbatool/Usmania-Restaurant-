import React from 'react';
import { MapPin, Navigation, ExternalLink, Sparkles, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const RestaurantInfoSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FFF7E8] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-chiniot-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#741F2B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
            <span>Visit Us in Chiniot</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#741F2B] tracking-tight">
            Restaurant Location & Contact
          </h2>

          <ChiniotOrnament variant="divider" color="#D6A64F" className="my-4" />

          <p className="text-base sm:text-lg text-[#5E463E] font-normal leading-relaxed">
            Conveniently situated on Main Sargodha Road right near the historic Chiniot Railway Station. We look forward to welcoming you.
          </p>
        </div>

        {/* Main Grid: Info Cards on Left, Map & Directions on Right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Restaurant Name & Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border-2 border-[#D6A64F]/50 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#741F2B] flex items-center justify-center text-[#D6A64F] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#741F2B]">
                    {RESTAURANT_INFO.fullName}
                  </h3>
                  <p className="text-xs text-[#D6A64F] font-semibold uppercase tracking-wider">
                    Historic Culinary Destination
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#D6A64F]/20 text-sm text-[#2B1B16]">
                <div>
                  <p className="text-xs font-bold uppercase text-[#741F2B] tracking-wider mb-1">
                    Full Address:
                  </p>
                  <p className="text-sm font-medium text-[#2B1B16] leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase text-[#741F2B] tracking-wider mb-1">
                    Landmark:
                  </p>
                  <p className="text-xs text-[#5E463E]">
                    Directly accessible from Main Sargodha Road, moments away from Chiniot Railway Station.
                  </p>
                </div>
              </div>

              {/* Action Buttons for Map */}
              <div className="mt-6 pt-4 border-t border-[#D6A64F]/30 flex flex-col sm:flex-row gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#741F2B] hover:bg-[#4B101B] text-[#FFF7E8] text-xs font-bold shadow transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#D6A64F]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#D6A64F]/40 shadow-sm">
              <h4 className="font-serif font-bold text-base text-[#741F2B] mb-2">
                Connect on Social Media
              </h4>
              <p className="text-xs text-[#5E463E] mb-4">
                Follow our official channels for kitchen updates, slow-braised food videos, and customer moments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Facebook */}
                <a
                  href={RESTAURANT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] text-xs font-bold transition-all group"
                  title="Visit Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* TikTok */}
                <a
                  href={RESTAURANT_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-black/5 hover:bg-black/10 border border-black/20 text-[#2B1B16] text-xs font-bold transition-all group"
                  title="Visit TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.28-1.53 3.32-3.35.03-4.13.01-8.27.01-12.4z"/>
                  </svg>
                  <span>TikTok</span>
                </a>

                {/* Instagram */}
                <a
                  href={RESTAURANT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#E4405F]/10 hover:bg-[#E4405F]/20 border border-[#E4405F]/30 text-[#E4405F] text-xs font-bold transition-all group"
                  title="Visit Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed & Destination Guide */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-4">
            
            <div className="rounded-2xl border-2 border-[#D6A64F] overflow-hidden shadow-2xl bg-[#FFFDF9] flex-1 flex flex-col">
              {/* Card top banner with address */}
              <div className="p-4 bg-gradient-to-r from-[#741F2B] to-[#4B101B] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#D6A64F]" />
                  <span className="font-serif font-bold text-sm">Chiniot Route & Interactive Map</span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D6A64F] hover:text-white font-semibold flex items-center gap-1"
                >
                  <span>Full Screen Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full h-[380px] sm:h-[420px] bg-slate-100">
                <iframe
                  title="New Usmania Restaurant Chiniot Location Map"
                  src="https://maps.google.com/maps?q=Main+Sargodha+Road+near+Railway+Station+Chiniot+35400+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Bottom Quick-Tip Bar */}
              <div className="p-4 bg-[#F9EED9] border-t border-[#D6A64F]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5E463E]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="font-semibold text-[#741F2B]">Easy Highway Access:</span>
                  <span>Located on Main Sargodha Road with ample parking available for families.</span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#D6A64F] hover:bg-[#ECC77D] text-[#2B1B16] font-bold shadow-sm transition-colors"
                >
                  Start Turn-by-Turn GPS
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
