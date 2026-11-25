import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero section — SNMZ Gold & Diamonds Dubai.
 * Modernized with dark luxury textured background, responsive typography, and SEO imagery.
 * Server Component.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-[#0B0F17] overflow-hidden"
      style={{ minHeight: '62vh' }}
      aria-labelledby="hero-heading"
    >
      {/* ── Dark Luxury Textured Background Image (opacity-20 mix-blend-luminosity) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/hero-gold-bars.jpg"
          alt="Physical Gold Bullion Trading Dubai — SNMZ Gold & Diamonds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 mix-blend-luminosity"
        />
        {/* Vertical gradient fade into solid obsidian black (#0B0F17) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/70 via-[#0B0F17]/90 to-[#0B0F17]" />
        {/* Subtle radial luxury glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.08),transparent_65%)]" />
      </div>

      <div className="section-container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#D4AF37]/80" aria-hidden="true" />
              <span className="text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-[0.25em]">
                SNMZ Gold &amp; Diamonds · Dubai Bullion Desk
              </span>
            </div>

            {/* H1 Heading: Strictly text-2xl on mobile (24px, never exceeding 32px on screens <420px), sm:text-4xl, lg:text-5xl */}
            <h1
              id="hero-heading"
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white"
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

            <p className="text-white/75 text-sm sm:text-base lg:text-lg font-body leading-relaxed max-w-lg">
              Licensed bullion dealer in the City of Gold. Investment-grade 24K TT bars,
              fine silver bullion, transparent live AED spot pricing, and institutional counterparty execution at Al Dhagaya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0B0F17] font-body font-bold rounded-xl hover:opacity-95 hover:scale-[1.01] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)] text-xs sm:text-sm tracking-wide"
              >
                <span>Explore Bullion Shop</span>
                <ArrowRightIcon />
              </Link>
              <Link
                href="#live-rates"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#D4AF37]/40 text-white hover:text-[#D4AF37] font-body font-medium rounded-xl hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all text-xs sm:text-sm"
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
                  <span className="text-[#D4AF37] font-display font-bold text-xl sm:text-2xl leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-white/80 text-xs font-body font-medium mt-0.5">
                    {stat.sub}
                  </span>
                  <span className="text-white/35 text-[10px] font-body uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Res Bullion Showcase Photo */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Ambient glow */}
              <div className="absolute inset-4 rounded-3xl opacity-20 blur-3xl bg-[radial-gradient(circle,#D4AF37_0%,transparent_70%)]" />

              {/* Photo frame with descriptive SEO Alt */}
              <div className="relative rounded-3xl border border-[#D4AF37]/30 overflow-hidden shadow-2xl aspect-square">
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
                <div className="absolute bottom-5 left-5 right-5 bg-[#0B0F17]/90 backdrop-blur-md rounded-xl px-4 py-3.5 border border-[#D4AF37]/30 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-body font-semibold">
                        Live Benchmark
                      </p>
                    </div>
                    <p className="text-white font-display font-semibold text-sm">
                      24K TT Bars · 999.9 Purity
                    </p>
                  </div>
                  <Link
                    href="#live-rates"
                    className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-[#E5C158] text-xs font-body font-medium transition-colors bg-[#D4AF37]/10 px-2.5 py-1.5 rounded-lg border border-[#D4AF37]/25"
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
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0F17] to-transparent pointer-events-none" />
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
