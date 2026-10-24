import { per10g, formatAED } from '@/lib/goldRates';
import { Button } from '@/components/ui/Button';

/**
 * Homepage gold rate preview — shows live AED rates for top purities.
 * Data is passed from the homepage page.js (fetched server-side).
 * Server Component.
 *
 * @param {{ rates: import('@/lib/goldRates').PurityRate[], status: string, updatedAt: string|null }} props
 */
export function GoldRatePreview({ rates, status, updatedAt }) {
  const isLive = status === 'live';

  const formattedDate = updatedAt
    ? new Intl.DateTimeFormat('en-AE', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Dubai',
      }).format(new Date(updatedAt))
    : null;

  // Show top 3 purities in preview (24K, 22K, 21K — most relevant to UAE market)
  const previewRates = rates.slice(0, 3);

  return (
    <section
      id="gold-rates-preview"
      className="section-padding bg-emerald"
      aria-labelledby="rates-preview-heading"
    >
      <div className="section-container">
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <span className="section-label block mb-2">Live Rates</span>
            <h2
              id="rates-preview-heading"
              className="font-display text-3xl sm:text-4xl text-white leading-tight"
            >
              Gold Rates in Dubai
            </h2>
            <div className="gold-rule mt-3" />
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-white/25'}`}
                aria-hidden="true"
              />
              <span className="text-white/45 text-xs font-body">
                {isLive && formattedDate ? `Updated ${formattedDate}` : 'Rates not connected'}
              </span>
            </div>
            <span className="text-white/25 text-xs font-body italic">
              Indicative spot rates · AED / gram
            </span>
          </div>
        </div>

        {/* Rate cards — horizontal on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {previewRates.map((rate, i) => {
            const p10g = per10g(rate.perGram);
            const isFeatured = i === 0;

            return (
              <div
                key={rate.karat}
                className={`rounded-2xl p-6 border transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-br from-emerald-light/30 to-emerald-light/10 border-gold/35 shadow-gold'
                    : 'bg-white/5 border-white/10 hover:border-gold/25'
                }`}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display font-bold text-2xl text-gold">{rate.karat}</span>
                  <span className="text-white/40 text-xs font-body">{rate.purityLabel}</span>
                </div>

                {rate.perGram != null ? (
                  <>
                    <p className="font-display font-semibold text-2xl sm:text-3xl text-white leading-tight mb-1">
                      {formatAED(rate.perGram)}
                    </p>
                    <p className="text-white/40 text-xs font-body">
                      per gram · {p10g ? formatAED(p10g) + ' / 10g' : '—'}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="h-8 bg-white/5 rounded-lg mb-1 flex items-center px-3">
                      <span className="text-white/25 text-sm font-body italic">Not connected</span>
                    </div>
                    <p className="text-white/25 text-xs font-body">AED / gram</p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-white/35 text-xs font-body text-center sm:text-left">
            Rates derived from live XAU/AED spot data. Indicative only — not a trade offer.
            Retail prices may include VAT, making charges and other fees.
          </p>
          <Button href="/gold-prices" variant="outline" size="sm" className="shrink-0">
            Full Rates & Calculator →
          </Button>
        </div>
      </div>
    </section>
  );
}
