import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero section — SNMZ Gold & Diamonds Dubai.
 *
 * Implements:
 * - Mobile-Only Background Texture: visible ONLY on mobile (< md) with opacity-25 to opacity-30 and mix-blend-screen
 * - Desktop Untextured Obsidian Gradient: clean obsidian gradient (#0B0F17 to #111622) without background photo
 * - Responsive Typography Scale:
 *   * Hero H1: text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug
 *   * Body text: text-sm sm:text-base text-gray-300 leading-relaxed
 * - Container: uniform w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 * Server Component.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-[#0B0F17] overflow-hidden w-full max-w-full"
      style={{ minHeight: '60vh' }}
      aria-labelledby="hero-heading"
    >
      {/* ── 1. Mobile-Only Background Texture (block md:hidden) ── */}
      <div className="block md:hidden absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-gold-bars.jpg"
          alt="Physical Gold Bullion Trading Dubai — SNMZ Gold & Diamonds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-screen"
        />
        {/* Vertical dark gradient overlay for crisp high-contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/60 via-[#0B0F17]/80 to-[#0B0F17]" />
      </div>

      {/* ── 2. Desktop-Only Untextured Obsidian Gradient (hidden md:block) ── */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#0B0F17] via-[#111622] to-[#0B0F17]">
        {/* Subtle radial luxury glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_70%)]" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-14 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#D4AF37]/80" aria-hidden="true" />
              <span className="text-amber-400 text-xs font-mono font-semibold uppercase tracking-[0.25em]">
                SNMZ Gold &amp; Diamonds · Dubai Bullion Desk
              </span>
            </div>

            {/* H1 Heading: text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug */}
            <h1
              id="hero-heading"
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white"
            >
              Premium Physical{' '}
              <span
                className="text-[#D4AF37]"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ECC84A 0%, #D4AF37 45%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Bullion Trading
              </span>
              <br />
              <span className="text-white">in Dubai.</span>
            </h1>

            {/* Body: text-sm sm:text-base text-gray-300 leading-relaxed */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg">
              Licensed bullion dealer in the City of Gold. Investment-grade 24K TT bars,
              fine silver bullion, transparent live AED spot pricing, and institutional counterparty execution at Al Dhagaya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0B0F17] font-body font-bold rounded-xl hover:opacity-95 hover:scale-[1.01] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)] text-xs sm:text-sm tracking-wide"
              >
                <span>Explore Bullion Shop</span>
                <ArrowRightIcon />
              </Link>
              <Link
                href="#live-rates"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 border border-[#252F3F] text-white hover:text-amber-400 font-body font-medium rounded-xl hover:bg-[#161C26] hover:border-amber-400/50 transition-all text-xs sm:text-sm"
              >
                Live Gold &amp; Silver Rates
              </Link>
            </div>

            {/* Minimal Trust Signals */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#252F3F] max-w-xs sm:max-w-sm">
              {[
                { label: 'Currency', value: 'AED', sub: 'UAE Dirham Spot' },
                { label: 'Purity', value: '999.9', sub: '24K TT & Cast' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-amber-400 font-display font-bold text-xl sm:text-2xl leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-white/80 text-xs font-body font-medium mt-0.5">
                    {stat.sub}
                  </span>
                  <span className="text-white/40 text-[10px] font-body uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Res Bullion Showcase Photo (Desktop only) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Ambient glow */}
              <div className="absolute inset-4 rounded-3xl opacity-20 blur-3xl bg-[radial-gradient(circle,#D4AF37_0%,transparent_70%)]" />

              {/* Photo frame with descriptive SEO Alt */}
              <div className="relative rounded-3xl border border-[#252F3F] overflow-hidden shadow-2xl aspect-square bg-[#161C26]">
                <Image
                  src="/images/hero-gold-bars.jpg"
                  alt="SNMZ 100g 24K Gold Bullion Bar Dubai — Investment Bullion"
                  fill
                  priority
                  className="object-cover"
                  sizes="448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/20 to-transparent" />

                {/* Rate badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#0B0F17]/95 backdrop-blur-md rounded-xl px-4 py-3.5 border border-[#252F3F] flex items-center justify-between shadow-lg">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-amber-400 text-[10px] uppercase tracking-[0.2em] font-body font-semibold">
                        Live Benchmark
                      </p>
                    </div>
                    <p className="text-white font-display font-semibold text-sm">
                      24K TT Bars · 999.9 Purity
                    </p>
                  </div>
                  <Link
                    href="#live-rates"
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-xs font-body font-medium transition-colors bg-amber-400/10 px-2.5 py-1.5 rounded-lg border border-amber-400/25"
                    aria-label="View live gold rates"
                  >
                    View Rates ↓
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into obsidian black */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0B0F17] to-transparent pointer-events-none" />
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
