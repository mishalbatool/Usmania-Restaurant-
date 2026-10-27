import React, { useState, useMemo } from 'react';
import { Sparkles, Utensils, Search, Flame, Info, Check } from 'lucide-react';
import { FULL_MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { ChiniotOrnament } from './ChiniotOrnament';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'kunna-handi', label: 'Kunna & Handi' },
    { id: 'karahi', label: 'Karahi Specials' },
    { id: 'biryani-rice', label: 'Biryani & Rice' },
    { id: 'bbq', label: 'Charcoal BBQ' },
    { id: 'tandoor', label: 'Tandoori Breads' },
    { id: 'desserts', label: 'Desserts & Ice Cream' },
  ];

  const filteredItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.urduName && item.urduName.includes(searchQuery)) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#FFF7E8] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-chiniot-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#741F2B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A64F]" />
            <span>Prepared Fresh to Order</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#741F2B] tracking-tight">
            Our Traditional Menu
          </h2>

          <ChiniotOrnament variant="divider" color="#D6A64F" className="my-4" />

          <p className="text-base sm:text-lg text-[#5E463E] font-normal leading-relaxed">
            Authentic recipes prepared with pure desi ghee, premium halal meats, and freshly crushed spices.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#741F2B] text-[#FFF7E8] shadow-md border border-[#D6A64F]'
                      : 'bg-[#FFFDF9] text-[#5E463E] hover:text-[#741F2B] hover:bg-[#F9EED9] border border-[#D6A64F]/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#5E463E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-[#FFFDF9] border border-[#D6A64F]/40 rounded-xl text-[#2B1B16] placeholder-[#5E463E]/60 focus:outline-none focus:ring-2 focus:ring-[#741F2B] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5E463E] hover:text-[#741F2B]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#D6A64F]/40 hover:border-[#D6A64F] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Title & Tag Header */}
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#741F2B] group-hover:text-[#4B101B] transition-colors">
                        {item.name}
                      </h3>
                      {item.specialtyTag && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D6A64F]/20 text-[#741F2B] border border-[#D6A64F]/50">
                          {item.specialtyTag}
                        </span>
                      )}
                    </div>
                    {item.urduName && (
                      <p className="text-sm font-medium text-[#D6A64F] font-serif tracking-wider mt-0.5" dir="rtl">
                        {item.urduName}
                      </p>
                    )}
                  </div>

                  {item.portionType && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#F9EED9] text-[#5E463E] border border-[#D6A64F]/30 whitespace-nowrap">
                      {item.portionType}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#5E463E] leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom Details */}
              <div className="mt-4 pt-3 border-t border-[#D6A64F]/20 flex items-center justify-between text-xs text-[#5E463E]">
                <div className="flex items-center gap-1.5 text-[#741F2B] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#D6A64F]" />
                  <span>Fresh Halal Ingredients</span>
                </div>
                <span className="font-medium text-[#D6A64F]">
                  Traditional Chinioti Recipe
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#FFFDF9] rounded-2xl border border-dashed border-[#D6A64F]/40 p-8 mt-6">
            <Utensils className="w-10 h-10 text-[#D6A64F] mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-[#741F2B]">No dishes matched your search</h4>
            <p className="text-sm text-[#5E463E] mt-1">
              Try searching for &ldquo;Kunna&rdquo;, &ldquo;Karahi&rdquo;, &ldquo;Biryani&rdquo;, &ldquo;BBQ&rdquo;, or reset the category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#741F2B] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pricing notice card */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F9EED9] border border-[#D6A64F]/50 flex items-center gap-3.5 text-left">
          <div className="w-10 h-10 rounded-full bg-[#741F2B] text-[#D6A64F] flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-[#741F2B]">Portion Sizing & Market Pricing Notice</h4>
            <p className="text-xs text-[#5E463E] mt-0.5">
              Pricing is determined daily based on fresh market mutton and chicken supplies. For live portion prices and custom family orders, please inquire with our counter staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
