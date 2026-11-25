import { per10g, formatAED } from '@/lib/goldRates';

/**
 * Four premium rate cards — 24K, 22K, 21K, 18K.
 * Strict 2-Color Palette: Warm Beige / Ivory (#F4EFE6, #EFE8DC, #E2D7C5) and Metallic Champagne Gold (#D4AF37).
 * Zero Pure White.
 * Server Component.
 *
 * @param {{ rates: import('@/lib/goldRates').PurityRate[], status: string, source: string }} props
 */
export function RateCards({ rates, status, source }) {
  const unavailable = status === 'unavailable';

  return (
    <section
      className="py-10 sm:py-14 bg-[#F4EFE6]"
      aria-labelledby="rate-cards-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-[#997300] text-xs font-mono font-bold uppercase tracking-widest block mb-1">
              Current Dubai Benchmark
            </span>
            <h2
              id="rate-cards-heading"
              className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A1E24] leading-tight"
            >
              Gold Rate Overview
            </h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mt-3" />
          </div>

          {/* Data status badge - no external API exposure */}
          <div className="flex items-center gap-2 shrink-0 bg-[#EFE8DC] border border-[#E2D7C5] px-3.5 py-1.5 rounded-full shadow-2xs">
            <span
              className={`w-2 h-2 rounded-full ${status === 'live' ? 'bg-emerald-500 animate-pulse' : 'bg-[#8C8275]'}`}
              aria-hidden="true"
            />
            <span className="text-[#1A1E24] text-xs font-mono font-medium">
              {status === 'live' ? 'Live Spot Benchmark' : 'Rates connecting…'}
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {rates.map((rate, i) => {
            const p10g = per10g(rate.perGram);
            const isFeatured = i === 0; // 24K gets the featured treatment

            return (
              <div
                key={rate.karat}
                className={`relative rounded-2xl p-6 border transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isFeatured
                    ? 'bg-[#EFE8DC] border-2 border-[#D4AF37] ring-1 ring-[#D4AF37]/30 shadow-[0_8px_30px_rgba(212,175,55,0.14)]'
                    : 'bg-[#EFE8DC] border border-[#E2D7C5] hover:border-[#D4AF37]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#997300] bg-[#F4EFE6] border border-[#E2D7C5] px-2.5 py-0.5 rounded-full">
                      Most Traded
                    </span>
                  </div>
                )}

                <div>
                  {/* Karat label */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-heading font-extrabold text-3xl text-[#997300] leading-none">
                      {rate.karat}
                    </span>
                    <span className="text-[#718096] text-xs font-mono">
                      {rate.purityLabel}
                    </span>
                  </div>
                  <p className="text-[#718096] text-xs font-body uppercase tracking-widest mb-6">
                    {rate.label}
                  </p>

                  {/* Price block */}
                  {rate.perGram != null ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-[#718096] text-xs font-mono uppercase tracking-wider mb-1">
                          AED / gram
                        </p>
                        <p className="font-display font-bold text-2xl text-[#1A1E24] leading-tight">
                          {formatAED(rate.perGram)}
                        </p>
                      </div>
                      <div className="border-t border-[#E2D7C5] pt-3.5">
                        <p className="text-[#718096] text-xs font-mono uppercase tracking-wider mb-1">
                          AED / 10 g
                        </p>
                        <p className="font-display font-bold text-xl text-[#997300] leading-tight">
                          {p10g != null ? formatAED(p10g) : '—'}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <UnavailableState unavailable={unavailable} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {unavailable && (
          <p className="text-center text-[#718096] text-xs font-body italic mt-6">
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
        <p className="text-[#718096] text-xs font-mono uppercase tracking-wider mb-2">
          Per Gram
        </p>
        <div className="h-8 rounded-lg bg-[#F4EFE6] border border-[#E2D7C5] flex items-center px-3">
          <span className="text-[#8C8275] text-sm font-body">
            {unavailable ? 'Rate not connected' : '—'}
          </span>
        </div>
      </div>
      <div className="border-t border-[#E2D7C5] pt-3.5">
        <p className="text-[#718096] text-xs font-mono uppercase tracking-wider mb-2">
          Per 10 Grams
        </p>
        <div className="h-7 rounded-lg bg-[#F4EFE6] border border-[#E2D7C5] flex items-center px-3">
          <span className="text-[#8C8275] text-sm font-body">—</span>
        </div>
      </div>
    </div>
  );
}
