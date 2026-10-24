import { per10g, formatAED } from '@/lib/goldRates';

/**
 * Three premium rate cards — 24K, 22K, 18K.
 * Shows purity, per-gram and per-10g prices, and a clear data-status label.
 * Server Component.
 *
 * @param {{ rates: import('@/lib/goldRates').PurityRate[], status: string, source: string }} props
 */
export function RateCards({ rates, status, source }) {
  const unavailable = status === 'unavailable';

  return (
    <section
      className="section-padding bg-emerald-dark"
      aria-labelledby="rate-cards-heading"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="section-label block mb-2">Current Rates</span>
            <h2
              id="rate-cards-heading"
              className="font-display text-3xl sm:text-4xl text-white leading-tight"
            >
              Gold Rate Overview
            </h2>
            <div className="gold-rule mt-3" />
          </div>
          {/* Data source badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`w-2 h-2 rounded-full ${status === 'live' ? 'bg-green-400' : 'bg-white/30'}`}
              aria-hidden="true"
            />
            <span className="text-white/45 text-xs font-body">{source}</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {rates.map((rate, i) => {
            const p10g = per10g(rate.perGram);
            const isFeatured = i === 0; // 24K gets the featured treatment

            return (
              <div
                key={rate.karat}
                className={`relative rounded-2xl p-6 lg:p-8 border transition-all duration-300 group ${
                  isFeatured
                    ? 'bg-gradient-to-br from-emerald to-emerald-light border-gold/35 shadow-gold hover:shadow-gold-lg'
                    : 'bg-emerald-light/15 border-gold/15 hover:border-gold/30'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-4 right-4">
                    <span className="badge">Most traded</span>
                  </div>
                )}

                {/* Karat label */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-bold text-3xl text-gold leading-none">
                    {rate.karat}
                  </span>
                  <span className="text-white/50 text-sm font-body">
                    {rate.purityLabel}
                  </span>
                </div>
                <p className="text-white/40 text-xs font-body uppercase tracking-widest mb-6">
                  {rate.label}
                </p>

                {/* Price block */}
                {rate.perGram != null ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/45 text-xs font-body uppercase tracking-wider mb-1">
                        AED / gram
                      </p>
                      <p className="font-display font-semibold text-2xl text-white leading-tight">
                        {formatAED(rate.perGram)}
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/45 text-xs font-body uppercase tracking-wider mb-1">
                        AED / 10 g
                      </p>
                      <p className="font-display font-semibold text-xl text-gold leading-tight">
                        {p10g != null ? formatAED(p10g) : '—'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <UnavailableState unavailable={unavailable} />
                )}
              </div>
            );
          })}
        </div>

        {unavailable && (
          <p className="text-center text-white/30 text-xs font-body italic mt-6">
            Rates will display here once a verified live price feed is connected.
            Contact SNMZ for actual trading rates.
          </p>
        )}
      </div>
    </section>
  );
}

function UnavailableState({ unavailable }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-white/35 text-xs font-body uppercase tracking-wider mb-2">
          Per Gram
        </p>
        <div className="h-8 rounded-lg bg-white/5 flex items-center px-3">
          <span className="text-white/25 text-sm font-body">
            {unavailable ? 'Rate not connected' : '—'}
          </span>
        </div>
      </div>
      <div className="border-t border-white/10 pt-4">
        <p className="text-white/35 text-xs font-body uppercase tracking-wider mb-2">
          Per 10 Grams
        </p>
        <div className="h-7 rounded-lg bg-white/5 flex items-center px-3">
          <span className="text-white/25 text-sm font-body">—</span>
        </div>
      </div>
    </div>
  );
}
