'use client';

import { useState, useMemo } from 'react';
import { BULLION_CATEGORIES, BULLION_PRODUCTS } from '@/data/bullionProducts';
import { CertipackBlister } from '@/components/shop/CertipackBlister';

const ITEMS_PER_PAGE = 8;

export function BullionShop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered & sorted product list
  const filteredProducts = useMemo(() => {
    let list = BULLION_PRODUCTS;

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.weight.toLowerCase().includes(q) ||
          p.purity.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.numericPrice - a.numericPrice);
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
    <div className="bg-[#0B0F17] text-white min-h-screen selection:bg-[#D4AF37]/30 selection:text-white">
      {/* ── TOP STICKY MICRO-TICKER ────────────────────────────────────────── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-[#0B0F17]/95 backdrop-blur-md border-y border-[#252F3F] py-2.5 px-4 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-[13px] font-mono">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* Live Status Pulse */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">
                Live Spot Feed
              </span>
            </div>

            {/* Gold 24K Benchmark */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/50">Gold 24K:</span>
              <span className="text-[#D4AF37] font-bold">AED 480.09/g</span>
            </div>

            <span className="hidden sm:inline text-white/20">|</span>

            {/* Silver 999 Benchmark */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/50">Silver 999:</span>
              <span className="text-slate-300 font-bold">AED 6.13/g</span>
            </div>
          </div>

          {/* Sync Guarantee */}
          <div className="flex items-center gap-2 text-[11px] text-white/45 hidden md:flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
            <span>Live Spot Linked | Updates every 60s</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block mb-3">
            <span className="text-[#D4AF37]/90 text-xs sm:text-[13px] font-mono font-bold tracking-[0.28em] uppercase">
              OUR COLLECTION
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight">
            Explore Our Products
          </h1>
          <p className="text-white/65 font-body text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Investment-grade physical bullion bars and legal tender coins. Sealed in tamper-evident assay certipack packaging and settled at live Dubai spot rates.
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
                      : 'bg-[#161C26] text-white/75 border border-[#252F3F] hover:border-[#D4AF37]/50 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search & Sort Line */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
            <div className="text-white/50 font-mono">
              Showing <span className="text-white font-bold">{filteredProducts.length}</span> precious metal items
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Search input */}
              <div className="relative flex-1 sm:w-48">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Filter weight or purity…"
                  className="w-full bg-[#161C26] border border-[#252F3F] rounded-lg px-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Sort dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#161C26] border border-[#252F3F] rounded-lg px-3 py-1.5 text-xs text-white/80 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="weight-desc">Weight: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* ── STRICT 4-COLUMN TORA BULLION PRODUCT GRID ───────────────────────── */}
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#161C26]/40 rounded-2xl border border-[#252F3F] p-8">
            <p className="text-white/70 text-base mb-3">No products match your current filter.</p>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {paginatedProducts.map((product) => {
              // Direct WhatsApp URL as strictly requested
              const encodedMessage = encodeURIComponent(
                `Hello SNMZ Bullion Desk, I would like to enquire about the live rate and availability for ${product.name} (${product.weight})`
              );
              const waUrl = `https://wa.me/971527549259?text=${encodedMessage}`;

              return (
                <article
                  key={product.id}
                  className="group relative bg-[#161C26] rounded-2xl border border-[#252F3F] hover:border-amber-400/60 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(212,175,55,0.14)] flex flex-col overflow-hidden p-3 sm:p-4"
                >
                  {/* 1. TOP BAR: Brand Badge (Left) + Green In-Stock Dot (Right) */}
                  <div className="flex items-center justify-between mb-2.5 z-10">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/25">
                      {product.brand}
                    </span>

                    {/* Green Live Availability Indicator */}
                    <div className="flex items-center gap-1.5" title="In Stock at Dubai Office">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[10px] text-emerald-400/80 font-mono hidden sm:inline">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* 2. PRODUCT IMAGE: 1:1 Square with Dark Radial Backdrop & Zoom */}
                  <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-[#1C2330] via-[#141924] to-[#0E121A] border border-[#252F3F]/70 overflow-hidden flex items-center justify-center p-2 mb-3.5 shadow-inner">
                    {/* Subtle warm radial backlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.12),transparent_65%)] pointer-events-none" />

                    {/* Certipack Blister Assay Card */}
                    <div className="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
                      <CertipackBlister product={product} />
                    </div>
                  </div>

                  {/* 3. PRODUCT TITLE */}
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-1 mb-1">
                    {product.name}
                  </h3>

                  {/* 4. PURITY & WEIGHT TAG */}
                  <div className="text-white/60 font-mono text-[11px] sm:text-xs tracking-wide mb-2 flex items-center gap-1.5">
                    <span>{product.spec}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-[#D4AF37]/80 text-[10px] uppercase font-semibold">
                      {product.metal === 'gold' ? '24K Spot' : '999 Ag'}
                    </span>
                  </div>

                  {/* 5. LIVE PRICE */}
                  <div className="mt-auto mb-3.5">
                    <div className="text-[#D4AF37] font-display font-bold text-base sm:text-lg tracking-tight">
                      {product.priceAED}
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">
                      Spot-Linked Indicative Rate
                    </span>
                  </div>

                  {/* 6. ACTION CTA: Direct WhatsApp Enquiry Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B0F17] font-body font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 shadow-md active:scale-[0.98]"
                    aria-label={`Enquire now for ${product.name} ${product.weight} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
                    <span>Enquire Now</span>
                  </a>
                </article>
              );
            })}
          </div>
        )}

        {/* ── PAGINATION CONTROLS ────────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#252F3F]">
            <div className="text-xs font-mono text-white/60">
              Page <span className="text-[#D4AF37] font-bold">{validCurrentPage}</span> of{' '}
              <span className="text-white font-bold">{totalPages}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={validCurrentPage === 1}
                className="px-4 py-2 rounded-lg bg-[#161C26] border border-[#252F3F] text-xs font-mono text-white/80 hover:text-white hover:border-[#D4AF37]/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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
                          : 'bg-[#161C26] text-white/60 hover:text-white border border-[#252F3F]'
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
                className="px-4 py-2 rounded-lg bg-[#161C26] border border-[#252F3F] text-xs font-mono text-white/80 hover:text-white hover:border-[#D4AF37]/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* ── 4 TRUST BADGES BOTTOM BAR ───────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-[#252F3F]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Badge 1: DET Licensed */}
            <div className="bg-[#161C26] border border-[#252F3F] rounded-xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <ShieldCheckIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                  DET Licensed #1531797
                </div>
                <div className="text-[11px] text-white/50 font-mono mt-0.5">
                  Dubai Economic Authority
                </div>
              </div>
            </div>

            {/* Badge 2: 999.9 Guaranteed Hallmark */}
            <div className="bg-[#161C26] border border-[#252F3F] rounded-xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <BadgeCheckIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                  999.9 Guaranteed Hallmark
                </div>
                <div className="text-[11px] text-white/50 font-mono mt-0.5">
                  Assay Verified Bullion
                </div>
              </div>
            </div>

            {/* Badge 3: Direct Handover at Al Dhagaya */}
            <div className="bg-[#161C26] border border-[#252F3F] rounded-xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <BuildingLocationIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                  Direct Handover at Al Dhagaya
                </div>
                <div className="text-[11px] text-white/50 font-mono mt-0.5">
                  Deira Gold Souk Desk
                </div>
              </div>
            </div>

            {/* Badge 4: Liquid Wholesale Buyback */}
            <div className="bg-[#161C26] border border-[#252F3F] rounded-xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <RefreshArrowsIcon />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                  Liquid Wholesale Buyback
                </div>
                <div className="text-[11px] text-white/50 font-mono mt-0.5">
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

// ── SVG ICONS ────────────────────────────────────────────────────────────────

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BuildingLocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}
