/**
 * Page hero for /gold-prices.
 * Server Component — no interactivity needed here.
 *
 * @param {{ status: string, updatedAt: string|null }} props
 */
export function PricesHero({ status, updatedAt }) {
  const isLive = status === 'live';

  const formattedDate = updatedAt
    ? new Intl.DateTimeFormat('en-AE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Kolkata',
      }).format(new Date(updatedAt))
    : null;

  return (
    <section
      className="relative bg-hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
      aria-labelledby="prices-hero-heading"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#DFAF24 1px, transparent 1px), linear-gradient(90deg, #DFAF24 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none rounded-full blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #DFAF24 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-gold/60'}`}
              aria-hidden="true"
            />
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-white/50">
              {isLive && formattedDate
                ? `Rates as of ${formattedDate}`
                : isLive
                ? 'Live Rates'
                : 'Rates not connected'}
            </span>
          </div>

          <h1
            id="prices-hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5"
          >
            Gold Prices{' '}
            <span className="text-gradient-gold">Today</span>
          </h1>

          <p className="text-white/65 text-lg font-body leading-relaxed max-w-2xl">
            Gold rates vary by purity, market conditions, and transaction terms.
            Prices shown here are{' '}
            <strong className="text-white/80 font-medium">indicative only</strong> and
            may differ from retail jewellery prices, making charges, applicable taxes,
            and SNMZ&apos;s actual trading rates.
          </p>

          {!isLive && (
            <div className="mt-6 inline-flex items-center gap-3 bg-gold/10 border border-gold/25 rounded-xl px-5 py-3">
              <InfoIcon />
              <p className="text-gold/90 text-sm font-body">
                Gold rates are temporarily unavailable. The calculator and table will
                show values once the rate feed is restored.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-dark to-transparent" />
    </section>
  );
}

function InfoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
