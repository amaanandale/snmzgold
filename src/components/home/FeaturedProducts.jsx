'use client';

import Link from 'next/link';
import { STANDARD_INVENTORY } from '@/data/bullionProducts';
import { BullionProductCard } from '@/components/shop/BullionProductCard';

/**
 * Homepage Featured Bullion Products Showcase.
 * Replicates the exact eCommerce grid layout of Tora Bullion with SNMZ's dark luxury identity.
 *
 * Implements:
 * - Dynamic live price integration using already-fetched spot rates (0 extra API hits)
 * - Clean minimal typography (no redundant 24K, no oversized logos)
 * - Dedicated image frame with aspect-[4/5] fixing certipack bottom cutoff
 * - Single-line "Enquire Now" WhatsApp CTA
 * - Unified responsive grid: mobile 2 cols (gap-3), tablet 3 cols (gap-4), desktop 4 cols (gap-6)
 *
 * @param {{
 *   liveGoldRate24k?: number,
 *   liveSilverRate?: number
 * }} props
 */
export function FeaturedProducts({ liveGoldRate24k = 480.09, liveSilverRate = 6.13 }) {
  // Select key hallmark products for the homepage showcase (Gold 100g, 10 Tola TT, 1oz, 1kg, Silver 1kg, etc.)
  const featuredList = STANDARD_INVENTORY.filter((p) => p.featured).slice(0, 8);

  return (
    <section
      id="featured-products"
      className="section-padding bg-[#0B0F17] border-t border-b border-[#252F3F]/80 relative"
      aria-labelledby="featured-products-heading"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
                Catalogue Highlights
              </span>
            </div>
            <h2
              id="featured-products-heading"
              className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug"
            >
              Featured Bullion <span className="text-[#D4AF37] italic font-serif">Products</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-2 max-w-xl">
              Benchmark 999.9 gold minted bars, regional 10 tola TT bars, and investment silver settled against live Dubai spot rates.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0F17] border border-[#D4AF37]/30 text-xs font-body font-bold tracking-wide transition-all self-start md:self-auto shadow-sm whitespace-nowrap"
          >
            <span>Explore Full Shop Catalogue</span>
            <span>→</span>
          </Link>
        </div>

        {/* Unified Responsive Grid (Mobile: 2 cols | Tablet: 3 cols | Desktop: 4 cols) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {featuredList.map((product) => (
            <BullionProductCard
              key={product.id}
              product={product}
              liveGoldRate24k={liveGoldRate24k}
              liveSilverRate={liveSilverRate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
