import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero section — SNMZ Gold & Diamonds Dubai.
 * Professional bullion dealer headline and relevant CTA buttons.
 * Server Component.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-hero-gradient overflow-hidden"
      style={{ minHeight: '60vh' }}
      aria-labelledby="hero-heading"
    >
      {/* Geometric background — Islamic grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#DFAF24 1px, transparent 1px), linear-gradient(90deg, #DFAF24 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] translate-x-1/3 -translate-y-1/4"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.04] -translate-x-1/4 translate-y-1/4"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }}
        />
      </div>

      <div className="section-container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gold/70" aria-hidden="true" />
              <span className="text-gold text-xs font-mono font-semibold uppercase tracking-[0.25em]">
                SNMZ Gold &amp; Diamonds · Dubai Bullion Desk
              </span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[60px] leading-[1.08] tracking-tight text-white font-bold"
            >
              Premium Physical{' '}
              <span
                className="text-gold"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ECC84A 0%, #DFAF24 45%, #B8860B 100%)',
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

            <p className="text-white/75 text-base sm:text-lg font-body leading-relaxed max-w-lg">
              Licensed bullion dealer in the City of Gold. Investment-grade 24K TT bars,
              fine silver bullion, transparent live AED spot pricing, and institutional counterparty execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gold-gradient text-emerald-dark font-body font-bold rounded-xl hover:opacity-95 hover:scale-[1.02] transition-all shadow-gold text-sm tracking-wide"
              >
                <span>Explore Bullion Shop</span>
                <ArrowRightIcon />
              </Link>
              <Link
                href="#live-rates"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gold/40 text-white hover:text-gold font-body font-medium rounded-xl hover:bg-gold/10 hover:border-gold transition-all text-sm"
              >
                Live Gold &amp; Silver Rates
              </Link>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gold/20 max-w-xs sm:max-w-sm">
              {[
                { label: 'Currency', value: 'AED', sub: 'UAE Dirham Spot' },
                { label: 'Purity', value: '999.9', sub: '24K TT & Cast' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-gold font-display font-bold text-xl sm:text-2xl leading-tight">
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

          {/* Right — Gold bars photo */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Ambient glow */}
              <div className="absolute inset-4 rounded-3xl opacity-25 blur-3xl bg-gold-gradient" />

              {/* Photo frame */}
              <div className="relative rounded-3xl border border-gold/30 overflow-hidden shadow-gold-lg aspect-square">
                <Image
                  src="/images/hero-gold-bars.jpg"
                  alt="SNMZ 24K gold bars — premium 999.9 fine gold"
                  fill
                  priority
                  className="object-cover"
                  sizes="448px"
                />
                {/* Brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/85 via-emerald-dark/15 to-transparent" />

                {/* Rate badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-emerald-dark/90 backdrop-blur-md rounded-xl px-4 py-3.5 border border-gold/25 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-body font-semibold">
                        Live Benchmark
                      </p>
                    </div>
                    <p className="text-white font-display font-semibold text-sm">
                      24K TT Bars · 999.9 Purity
                    </p>
                  </div>
                  <Link
                    href="#live-rates"
                    className="inline-flex items-center gap-1 text-gold hover:text-gold-light text-xs font-body font-medium transition-colors bg-gold/10 px-2.5 py-1.5 rounded-lg border border-gold/25"
                    aria-label="View live gold rates"
                  >
                    View Rates ↓
                  </Link>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute -top-2 -right-2 w-12 h-12 opacity-30 pointer-events-none"
                style={{
                  background:
                    'conic-gradient(from 45deg, transparent 25%, #DFAF24 25%, #DFAF24 50%, transparent 50%)',
                  borderRadius: '3px',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-dark to-transparent" />
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
