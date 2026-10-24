import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero section — Dubai. The World of Gold.
 * Compact to allow gold rates to be visible below fold on desktop.
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

      <div className="section-container relative z-10 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — Copy */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
              <span className="text-gold/80 text-xs font-body font-semibold uppercase tracking-[0.25em]">
                Gold & Diamonds · Dubai, UAE
              </span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-5xl sm:text-6xl lg:text-[64px] leading-[1.05] tracking-tight text-white"
            >
              Dubai.{' '}
              <span
                className="text-gold"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ECC84A 0%, #DFAF24 40%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                The World
              </span>
              <br />
              <span className="text-white">of Gold.</span>
            </h1>

            <p className="text-white/65 text-lg font-body leading-relaxed max-w-lg">
              Discover the heritage, craftsmanship and global connections behind
              Dubai&apos;s extraordinary gold market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/gold-prices"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-gradient text-emerald-dark font-body font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-gold text-sm"
              >
                Explore Live Gold Rates
                <ArrowRightIcon />
              </Link>
              <Link
                href="/why-dubai"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gold/35 text-white font-body font-medium rounded-xl hover:bg-white/5 hover:border-gold/60 transition-all text-sm"
              >
                Discover Why Dubai Leads
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 pt-2 border-t border-gold/15">
              {[
                { label: 'Currency',  value: 'AED' },
                { label: 'Purity',    value: '999.9 Fine' },
                { label: 'Market',    value: 'Dubai, UAE' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-gold font-display font-semibold text-xl leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-white/35 text-[10px] font-body uppercase tracking-widest">
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
              <div className="absolute inset-6 rounded-3xl opacity-20 blur-3xl bg-gold-gradient" />

              {/* Photo frame */}
              <div className="relative rounded-3xl border border-gold/25 overflow-hidden shadow-gold-lg aspect-square">
                <Image
                  src="/images/hero-gold-bars.jpg"
                  alt="SNMZ 24K gold bars — premium 999.9 fine gold"
                  fill
                  priority
                  className="object-cover"
                  sizes="448px"
                />
                {/* Brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-emerald-dark/10 to-transparent" />

                {/* Rate badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-emerald-dark/85 backdrop-blur-sm rounded-xl px-4 py-3 border border-gold/20 flex items-center justify-between">
                  <div>
                    <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-body mb-0.5">Live Rate</p>
                    <p className="text-white font-display font-semibold text-sm">24K · AED / gram</p>
                  </div>
                  <Link
                    href="/gold-prices"
                    className="text-gold/70 hover:text-gold text-xs font-body transition-colors"
                    aria-label="View live gold rates"
                  >
                    View →
                  </Link>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute -top-2 -right-2 w-12 h-12 opacity-25 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 45deg, transparent 25%, #DFAF24 25%, #DFAF24 50%, transparent 50%)',
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
