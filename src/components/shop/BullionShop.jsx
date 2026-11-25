'use client';

import { useState, useMemo } from 'react';
import {
  BULLION_CATEGORIES,
  STANDARD_INVENTORY,
  formatCurrencyAED,
} from '@/data/bullionProducts';
import { BullionProductCard } from '@/components/shop/BullionProductCard';

const ITEMS_PER_PAGE = 8;

/**
 * Bullion Shop Component for SNMZ Gold & Diamonds.
 *
 * Implements:
 * - Luxury Beige / Champagne background (#F8F5EE) matching Tora Bullion (torabullion.com/shop)
 * - Crisp warm white cards (#FFFFFF) with subtle warm-gold borders (#E5D8B8), dark slate typography (#1A202C), and gold pricing badges (#997300)
 * - Dynamic live prices calculated on the client side using passed live spot rates (0 extra API hits)
 * - Tora Bullion eCommerce responsive grid: mobile grid-cols-2 gap-3, tablet sm:grid-cols-3 gap-4, desktop lg:grid-cols-4 gap-6
 * - Filter pills with clean active states
 * - Sticky micro-ticker linked to live spot benchmark
 * - Trust badges & working pagination
 *
 * @param {{
 *   liveGoldRate24k?: number,
 *   liveSilverRate?: number
 * }} props
 */
export function BullionShop({ liveGoldRate24k = 480.09, liveSilverRate = 6.13 }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered & sorted product list
  const filteredProducts = useMemo(() => {
    let list = STANDARD_INVENTORY;

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.weight.toLowerCase().includes(q) ||
          p.purity.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.weightGrams - b.weightGrams);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.weightGrams - a.weightGrams);
    } else if (sortBy === 'weight-desc') {
      list = [...list].sort((a, b) => b.weightGrams - a.weightGrams);
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#F8F5EE] text-[#1A202C] min-h-screen selection:bg-[#D4AF37]/30 selection:text-[#0B0F17]">
      {/* ── TOP STICKY MICRO-TICKER (Live Spot Linked) ────────────────────── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-md border-y border-[#E5D8B8] py-2 sm:py-2.5 px-4 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-[13px] font-mono">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* Live Status Pulse */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[#4A5568] text-[11px] uppercase tracking-wider font-semibold">
                Live Spot Feed
              </span>
            </div>

            {/* Gold 24K Benchmark */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#718096]">Gold 24K:</span>
              <span className="text-[#997300] font-bold">
                {formatCurrencyAED(liveGoldRate24k)}/g
              </span>
            </div>

            <span className="hidden sm:inline text-[#CBD5E1]">|</span>

            {/* Silver 999 Benchmark */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#718096]">Silver 999:</span>
              <span className="text-[#4A5568] font-bold">
                {formatCurrencyAED(liveSilverRate)}/g
              </span>
            </div>
          </div>

          {/* Sync Guarantee */}
          <div className="flex items-center gap-2 text-[11px] text-[#718096] hidden md:flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[#997300]/60" />
            <span>Live Spot Linked | Updates every 60s</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block mb-3">
            <span className="text-[#997300] text-xs sm:text-[13px] font-mono font-bold tracking-[0.28em] uppercase">
              OUR COLLECTION
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A202C] tracking-tight mb-4 leading-tight">
            Explore Our Products
          </h1>
          <p className="text-[#4A5568] font-body text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Investment-grade physical bullion bars and legal tender ingots. Sealed in tamper-evident assay certipack packaging and settled at live Dubai spot rates.
          </p>
        </div>

        {/* ── FILTER & SORT BAR ──────────────────────────────────────────────── */}
        <div className="mb-10 space-y-4">
          {/* Horizontal Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            {BULLION_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-body font-semibold transition-all duration-200 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#0B0F17] shadow-[0_4px_16px_rgba(212,175,55,0.35)]'
                      : 'bg-white text-[#4A5568] border border-[#E5D8B8] hover:border-[#D4AF37] hover:text-[#1A202C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search & Sort Line */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
            <div className="text-[#718096] font-mono">
              Showing <span className="text-[#1A202C] font-bold">{filteredProducts.length}</span> precious metal items
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-48">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Filter weight or fineness…"
                  className="w-full bg-white border border-[#E5D8B8] rounded-lg px-3 py-1.5 text-xs text-[#1A202C] placeholder-[#A0AEC0] focus:outline-none focus:border-[#D4AF37]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A0AEC0] hover:text-[#1A202C]"
                  >
                    ×
                  </button>
                )}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#E5D8B8] rounded-lg px-3 py-1.5 text-xs text-[#1A202C] focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="price-asc">Weight: Low to High</option>
                <option value="price-desc">Weight: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* ── UNIFIED RESPONSIVE GRID (Cards on Beige: White Surface & Warm Gold Borders) ── */}
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20 bg-white/70 rounded-2xl border border-[#E5D8B8] p-8 shadow-sm">
            <p className="text-[#4A5568] text-base mb-3">No products match your current filter.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-lg bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {paginatedProducts.map((product) => (
              <BullionProductCard
                key={product.id}
                product={product}
                liveGoldRate24k={liveGoldRate24k}
                liveSilverRate={liveSilverRate}
                theme="beige"
              />
            ))}
          </div>
        )}

        {/* ── PAGINATION CONTROLS ────────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E5D8B8]">
            <div className="text-xs font-mono text-[#718096]">
              Page <span className="text-[#997300] font-bold">{validCurrentPage}</span> of{' '}
              <span className="text-[#1A202C] font-bold">{totalPages}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={validCurrentPage === 1}
                className="px-4 py-2 rounded-lg bg-white border border-[#E5D8B8] text-xs font-mono text-[#4A5568] hover:text-[#1A202C] hover:border-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
              >
                ← Prev
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  const isCurrent = pageNum === validCurrentPage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all ${
                        isCurrent
                          ? 'bg-[#D4AF37] text-[#0B0F17] shadow-sm'
                          : 'bg-white text-[#4A5568] hover:text-[#1A202C] border border-[#E5D8B8]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={validCurrentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white border border-[#E5D8B8] text-xs font-mono text-[#4A5568] hover:text-[#1A202C] hover:border-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* ── 4 TRUST BADGES BOTTOM BAR ───────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-[#E5D8B8]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Badge 1: DET Licensed */}
            <div className="bg-white border border-[#E5D8B8] rounded-xl p-3.5 sm:p-5 flex items-center gap-3 hover:border-[#D4AF37] transition-colors shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F8F5EE] border border-[#E5D8B8] flex items-center justify-center text-[#997300] shrink-0">
                <ShieldCheckIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A202C] leading-tight">
                  DET Licensed Bullion Desk
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#718096] font-mono mt-0.5">
                  Dubai Economic Authority
                </div>
              </div>
            </div>

            {/* Badge 2: 999.9 Guaranteed Hallmark */}
            <div className="bg-white border border-[#E5D8B8] rounded-xl p-3.5 sm:p-5 flex items-center gap-3 hover:border-[#D4AF37] transition-colors shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F8F5EE] border border-[#E5D8B8] flex items-center justify-center text-[#997300] shrink-0">
                <BadgeCheckIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A202C] leading-tight">
                  999.9 Guaranteed Hallmark
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#718096] font-mono mt-0.5">
                  Assay Verified Bullion
                </div>
              </div>
            </div>

            {/* Badge 3: Direct Handover at Al Dhagaya */}
            <div className="bg-white border border-[#E5D8B8] rounded-xl p-3.5 sm:p-5 flex items-center gap-3 hover:border-[#D4AF37] transition-colors shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F8F5EE] border border-[#E5D8B8] flex items-center justify-center text-[#997300] shrink-0">
                <BuildingLocationIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A202C] leading-tight">
                  Direct Handover at Al Dhagaya
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#718096] font-mono mt-0.5">
                  Deira Gold Souk Desk
                </div>
              </div>
            </div>

            {/* Badge 4: Liquid Wholesale Buyback */}
            <div className="bg-white border border-[#E5D8B8] rounded-xl p-3.5 sm:p-5 flex items-center gap-3 hover:border-[#D4AF37] transition-colors shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F8F5EE] border border-[#E5D8B8] flex items-center justify-center text-[#997300] shrink-0">
                <RefreshArrowsIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A202C] leading-tight">
                  Liquid Wholesale Buyback
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#718096] font-mono mt-0.5">
                  Spot Settlement Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BuildingLocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function RefreshArrowsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}
