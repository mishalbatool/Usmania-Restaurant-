/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WhyVisitUsSection } from './components/WhyVisitUsSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ServiceOptionsSection } from './components/ServiceOptionsSection';
import { RestaurantInfoSection } from './components/RestaurantInfoSection';
import { Footer } from './components/Footer';
import { QuickActionBar } from './components/QuickActionBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'story', 'specialties', 'menu', 'why-us', 'gallery', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#2B1B16] font-sans flex flex-col selection:bg-[#D6A64F]/30 selection:text-[#4B101B]">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section: Mutton Kunna & Fresh Naan */}
        <HeroSection />

        {/* 2. Restaurant Story & Chinioti Heritage */}
        <StorySection />

        {/* 3. Signature Specialties */}
        <SpecialtiesSection />

        {/* 4. Why Visit Us (5 authentic pillars) */}
        <WhyVisitUsSection />

        {/* 5. Complete Traditional Menu with Filters & Search */}
        <MenuSection />

        {/* 6. Food & Dining Ambiance Gallery with Lightbox */}
        <GallerySection />

        {/* 7. Service Options: Cash Only, All-You-Can-Eat, Happy-Hour Food */}
        <ServiceOptionsSection />

        {/* 8. Restaurant Information, Address, Socials & Map */}
        <RestaurantInfoSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Actions & Back to top */}
      <QuickActionBar />
    </div>
  );
}
