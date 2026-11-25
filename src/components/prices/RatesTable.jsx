import { per10g, formatAED } from '@/lib/goldRates';

/**
 * Responsive comparison table for 24K, 22K, 21K, 18K rates.
 * Strict 2-Color Palette: Warm Beige / Ivory (#F4EFE6, #EFE8DC, #E2D7C5) and Metallic Champagne Gold (#D4AF37).
 * Zero Pure White.
 * Server Component.
 *
 * @param {{ rates: import('@/lib/goldRates').PurityRate[], status: string }} props
 */
export function RatesTable({ rates, status }) {
  const hasAnyRate = rates.some((r) => r.perGram != null);

  return (
    <section
      className="py-12 sm:py-16 bg-[#F4EFE6] border-y border-[#E2D7C5]"
      aria-labelledby="rates-table-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[#997300] text-xs font-mono font-bold uppercase tracking-widest block mb-1">
            Fineness &amp; Spot Comparison
          </span>
          <h2
            id="rates-table-heading"
            className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A1E24] leading-tight"
          >
            Gold Price Comparison
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mt-3 mb-4" />
          <p className="text-[#615849] font-body text-xs sm:text-sm max-w-2xl">
            All prices in UAE Dirhams (AED). Per-10g values are calculated directly from
            the per-gram rate. Rates are{' '}
            <em>indicative only</em> — physical counterparty handover is settled against spot at time of order lock.
          </p>
        </div>

        {/* Table — scrollable horizontally on small screens */}
        <div className="overflow-x-auto rounded-2xl border border-[#E2D7C5] shadow-xs">
          <table
            className="w-full text-left border-collapse"
            aria-label="Gold price comparison table"
          >
            <thead>
              <tr className="bg-[#E8DFC9] border-b border-[#E2D7C5] text-[#1A1E24]">
                <th
                  scope="col"
                  className="px-6 py-4 font-mono font-bold text-xs uppercase tracking-widest text-[#997300]"
                >
                  Purity
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-mono font-semibold text-xs uppercase tracking-widest text-[#1A1E24]"
                >
                  Fineness
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-mono font-semibold text-xs uppercase tracking-widest text-[#1A1E24] text-right"
                >
                  AED / gram
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-mono font-semibold text-xs uppercase tracking-widest text-[#1A1E24] text-right"
                >
                  AED / 10 grams
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2D7C5]/60">
              {rates.map((rate, i) => {
                const p10g = per10g(rate.perGram);
                const isEven = i % 2 === 0;

                return (
                  <tr
                    key={rate.karat}
                    className={`transition-colors duration-150 hover:bg-[#E8DFC9]/60 ${
                      isEven ? 'bg-[#EFE8DC]' : 'bg-[#F4EFE6]'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#F4EFE6] border border-[#E2D7C5] flex items-center justify-center">
                          <span className="text-[#997300] font-heading font-bold text-xs">
                            {rate.karat}
                          </span>
                        </div>
                        <span className="font-heading font-bold text-[#1A1E24] text-sm">
                          {rate.label}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#615849] font-mono text-xs">
                      {rate.purityLabel}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {rate.perGram != null ? (
                        <span className="font-display font-bold text-[#1A1E24] text-sm sm:text-base">
                          {formatAED(rate.perGram)}
                        </span>
                      ) : (
                        <UnavailableCell />
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {p10g != null ? (
                        <span className="font-display font-bold text-[#997300] text-sm sm:text-base">
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
          <div className="mt-5 flex items-center gap-3 bg-[#EFE8DC] border border-[#E2D7C5] rounded-xl px-5 py-4">
            <p className="text-[#718096] text-xs font-mono">
              Live rates are not yet connected. Rates will populate automatically
              once a verified price feed is configured.
            </p>
          </div>
        )}

        <p className="text-[#718096] text-[11px] font-mono italic mt-4">
          * Per-10g = Per-gram × 10. Derived from 24K spot (XAU/AED) via purity fraction.
          These figures are for reference only and do not constitute a trade offer or guarantee.
        </p>
      </div>
    </section>
  );
}

function UnavailableCell() {
  return (
    <span
      className="inline-flex items-center gap-1 text-[#8C8275] text-xs font-mono italic"
      aria-label="Rate unavailable"
    >
      <span aria-hidden="true">—</span>
      <span className="hidden sm:inline">Not connected</span>
    </span>
  );
}
