import Image from 'next/image';
import Link from 'next/link';

/**
 * Visual Product Category Showcase for SNMZ Gold & Diamonds.
 *
 * Implements:
 * - Responsive Section Title: text-xl sm:text-2xl lg:text-3xl font-semibold
 * - 1:1 visual containers featuring certipack bullion bars and TT bars
 * - Replaces text-heavy blocks with eCommerce visual category cards
 * - Descriptive SEO alt tags for search visibility
 */
export function BullionCategories() {
  const categories = [
    {
      id: 'minted-gold',
      title: 'Minted Gold Bars',
      purity: '999.9 Fine Gold',
      specs: '1g to 1kg Certipack Formats',
      image: '/images/products/gold-minted-bar.jpg',
      alt: 'SNMZ 100g 24K Gold Bullion Bar Dubai — Investment Bullion in Tamper Evident Assay Packaging',
      href: '/shop',
      badge: 'Assay Certipack',
      popular: true,
    },
    {
      id: 'tt-bars',
      title: '10 Tola TT Bars',
      purity: '999.0 Purity Standard',
      specs: '116.64g Traditional Cast Format',
      image: '/images/products/gold-kilo-bar.jpg',
      alt: '10 Tola TT Bar Dubai Gold Souk — 999.0 Cast Bullion Benchmark Handover',
      href: '/shop',
      badge: 'GCC Benchmark',
      popular: false,
    },
    {
      id: 'silver-bars',
      title: 'Fine Silver Bullion',
      purity: '999.0 Physical Silver',
      specs: '100g to 1kg Cast Ingot Formats',
      image: '/images/products/silver-kilo-bar.jpg',
      alt: 'Fine Silver Bullion Bars Dubai — 1kg Ingot and Minted Silver at Live Spot',
      href: '/shop',
      badge: 'Portfolio Balance',
      popular: false,
    },
    {
      id: 'bullion-coins',
      title: 'Legal Tender Coins',
      purity: '22K & 24K Sovereign / Maple',
      specs: 'Airtight Protective Capsule',
      image: '/images/gold-bar-close.jpg',
      alt: '1oz Gold Bullion Coins Dubai — Royal Mint Britannia and Sovereign Coins',
      href: '/shop',
      badge: 'High Liquidity',
      popular: false,
    },
  ];

  return (
    <section
      id="bullion-categories"
      className="section-padding bg-[#0B0F17] border-t border-[#252F3F]/80 relative overflow-hidden"
      aria-labelledby="bullion-categories-heading"
    >
      <div className="section-container relative z-10">
        {/* Section Heading with Responsive Typography (text-xl sm:text-2xl lg:text-3xl font-semibold) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
              Precious Metals Categories
            </span>
          </div>
          <h2
            id="bullion-categories-heading"
            className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug"
          >
            Physical Bullion <span className="text-[#D4AF37] italic font-serif">Categories</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">
            Standardized 999.9 gold certipack ingots, regional 10 tola TT bars, and physical silver traded at live spot rates in Dubai.
          </p>
        </div>

        {/* ── 1:1 Image Container Grid (Strict 4 Columns Desktop / 2 Columns Mobile) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group bg-[#161C26] rounded-2xl border border-[#252F3F] hover:border-[#D4AF37]/50 transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] hover:-translate-y-0.5"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/25">
                  {cat.badge}
                </span>
                <span className="text-[10px] text-white/40 font-mono hidden sm:inline">
                  Dubai Spot
                </span>
              </div>

              {/* 1:1 Image Container with object-contain */}
              <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-[#1C2330] via-[#141924] to-[#0E121A] border border-[#252F3F]/60 overflow-hidden flex items-center justify-center p-3 mb-3 shadow-inner">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 ease-out"
                  style={{
                    filter: 'brightness(1.12) contrast(1.08) drop-shadow(0 12px 24px rgba(212, 175, 55, 0.28))',
                  }}
                />
              </div>

              {/* Typography Details */}
              <div className="mt-1">
                <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#D4AF37] transition-colors leading-tight mb-1 truncate">
                  {cat.title}
                </h3>
                <div className="text-[11px] font-mono text-[#D4AF37] font-medium mb-1">
                  {cat.purity}
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/55 font-body line-clamp-1 mb-3">
                  {cat.specs}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2 border-t border-[#252F3F]/60 flex items-center justify-between text-xs font-body font-semibold text-[#D4AF37] group-hover:text-[#E5C158] transition-colors">
                <span>View Products</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
