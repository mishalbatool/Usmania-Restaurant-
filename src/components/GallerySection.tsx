import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppOrderUrl } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const activePhoto: GalleryItem | null =
    selectedPhotoIndex !== null ? GALLERY_ITEMS[selectedPhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [selectedPhotoIndex]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  }, [selectedPhotoIndex]);

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPhotoIndex]);

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#4B101B] text-[#FFF7E8] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-chiniot-pattern-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D6A64F] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Feast for the Senses</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Food & Ambiance Gallery
          </h2>

          <ChiniotOrnament variant="divider" color="#D6A64F" className="my-4" />

          <p className="text-base sm:text-lg text-[#FFF7E8]/80 font-normal leading-relaxed">
            Glimpse into our slow-simmered earthen pots, sizzling skewers, tandoor-baked breads, and authentic Chinioti dining halls.
          </p>
        </div>

        {/* Asymmetric / Masonry Style Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            // First item (Kunna) and last item (ambiance) span 2 cols on lg screens
            const isSpan2 = index === 0 || index === 7;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#2B1B16] border border-[#D6A64F]/30 hover:border-[#D6A64F] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#D6A64F]/20 ${
                  isSpan2 ? 'sm:col-span-2 lg:col-span-2 h-72 sm:h-80' : 'h-64 sm:h-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B16]/95 via-[#2B1B16]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#2B1B16]/80 backdrop-blur-md border border-[#D6A64F]/40 text-[#D6A64F] text-[11px] font-semibold uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Floating View Icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#741F2B]/90 border border-[#D6A64F] text-[#D6A64F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption & Title */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#D6A64F] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FFF7E8]/80 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#2B1B16]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#4B101B] hover:bg-[#741F2B] text-white border border-[#D6A64F]/60 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6 text-[#D6A64F]" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#4B101B]/80 hover:bg-[#741F2B] text-white border border-[#D6A64F]/50 transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 text-[#D6A64F]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#4B101B]/80 hover:bg-[#741F2B] text-white border border-[#D6A64F]/50 transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 text-[#D6A64F]" />
          </button>

          {/* Main Modal Image Box */}
          <div
            className="max-w-4xl w-full bg-[#350A12] border-2 border-[#D6A64F] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Modal Footer Description with Order on WhatsApp action */}
            <div className="p-5 sm:p-6 bg-[#4B101B] border-t border-[#D6A64F]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D6A64F] font-bold">
                  {activePhoto.category} • Photo {selectedPhotoIndex + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF7E8]/85 mt-1">
                  {activePhoto.caption}
                </p>
              </div>

              <a
                href={getWhatsAppOrderUrl(activePhoto.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md transition-all active:scale-95 flex-shrink-0"
                title="Order on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
