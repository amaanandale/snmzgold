import { per10g, formatAED } from '@/lib/goldRates';

/**
 * Responsive comparison table for 24K, 22K, 18K rates.
 * Server Component.
 *
 * @param {{ rates: import('@/lib/goldRates').PurityRate[], status: string }} props
 */
export function RatesTable({ rates, status }) {
  const hasAnyRate = rates.some((r) => r.perGram != null);

  return (
    <section
      className="section-padding bg-ivory"
      aria-labelledby="rates-table-heading"
    >
      <div className="section-container">
        <div className="mb-10">
          <span className="section-label text-emerald block mb-2">Comparison</span>
          <h2
            id="rates-table-heading"
            className="font-display text-3xl sm:text-4xl text-emerald leading-tight"
          >
            Gold Price Comparison
          </h2>
          <div className="gold-rule mt-3" />
          <p className="text-emerald/60 font-body text-sm mt-4">
            All prices in UAE Dirhams (AED). Per-10g values are calculated from
            the per-gram rate. Rates are{' '}
            <em>indicative only</em> — actual trading prices may differ from spot rates.
          </p>
        </div>

        {/* Table — scrollable horizontally on small screens */}
        <div className="overflow-x-auto rounded-2xl border border-ivory-dark shadow-card">
          <table
            className="w-full text-left border-collapse"
            aria-label="Gold price comparison table"
          >
            <thead>
              <tr className="bg-emerald text-white">
                <th
                  scope="col"
                  className="px-6 py-4 font-body font-semibold text-sm uppercase tracking-widest text-gold"
                >
                  Purity
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-body font-semibold text-sm uppercase tracking-widest text-white/70"
                >
                  Fineness
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-body font-semibold text-sm uppercase tracking-widest text-white/70 text-right"
                >
                  AED / gram
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-body font-semibold text-sm uppercase tracking-widest text-white/70 text-right"
                >
                  AED / 10 grams
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-dark">
              {rates.map((rate, i) => {
                const p10g = per10g(rate.perGram);
                const isEven = i % 2 === 0;

                return (
                  <tr
                    key={rate.karat}
                    className={`transition-colors duration-150 hover:bg-gold/5 ${
                      isEven ? 'bg-white' : 'bg-ivory'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                          <span className="text-gold-antique font-display font-bold text-xs">
                            {rate.karat}
                          </span>
                        </div>
                        <span className="font-display font-semibold text-emerald text-sm">
                          {rate.label}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-emerald/60 font-body text-sm">
                      {rate.purityLabel}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {rate.perGram != null ? (
                        <span className="font-body font-semibold text-emerald text-sm">
                          {formatAED(rate.perGram)}
                        </span>
                      ) : (
                        <UnavailableCell />
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {p10g != null ? (
                        <span className="font-body font-semibold text-emerald text-sm">
                          {formatAED(p10g)}
                        </span>
                      ) : (
                        <UnavailableCell />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {!hasAnyRate && (
          <div className="mt-5 flex items-center gap-3 bg-emerald/5 border border-emerald/15 rounded-xl px-5 py-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald/40 shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-emerald/55 text-sm font-body">
              Live rates are not yet connected. Rates will populate automatically
              once a verified price feed is configured.
            </p>
          </div>
        )}

        <p className="text-emerald/35 text-xs font-body italic mt-4">
          * Per-10g = Per-gram × 10. Derived from 24K spot (XAU/AED) via purity fraction.
          These figures are for reference only and do not constitute a trade offer or guarantee.
          Retail prices may include VAT (5%), making charges and other fees.
        </p>
      </div>
    </section>
  );
}

function UnavailableCell() {
  return (
    <span
      className="inline-flex items-center gap-1 text-emerald/35 text-xs font-body italic"
      aria-label="Rate unavailable"
    >
      <span aria-hidden="true">—</span>
      <span className="hidden sm:inline">Not connected</span>
    </span>
  );
}
