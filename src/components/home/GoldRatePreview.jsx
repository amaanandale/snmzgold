import Link from 'next/link';
import { per10g, formatAED } from '@/lib/goldRates';
import { Button } from '@/components/ui/Button';
import { getWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Homepage Live Gold & Silver Price Preview.
 * Server Component displaying live benchmark rates for gold and silver in AED as distinct instruments.
 *
 * @param {{
 *   rates: import('@/lib/goldRates').PurityRate[],
 *   status: string,
 *   updatedAt: string|null,
 *   silverData?: { status: string, spotKg: number|null, spotOz: number|null, spotGram: number|null }
 * }} props
 */
export function GoldRatePreview({ rates, status, updatedAt, silverData }) {
  const isGoldLive = status === 'live';
  const isSilverLive = silverData?.status === 'live';

  const formattedDate = updatedAt
    ? new Intl.DateTimeFormat('en-AE', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Dubai',
      }).format(new Date(updatedAt))
    : null;

  // Standard gold purities: 24K, 22K, 21K, 18K
  const previewRates = rates.slice(0, 4);

  // Contextual WhatsApp URLs
  const silverHomepageWaUrl = getWhatsAppUrl('silverHomepage');

  return (
    <section
      id="live-rates"
      className="section-padding bg-emerald border-y border-gold/15 relative"
      aria-labelledby="rates-preview-heading"
    >
      {/* Subtle background ambient gold accent */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold uppercase tracking-wider font-body mb-3">
              <span
                className={`w-2 h-2 rounded-full ${
                  isGoldLive ? 'bg-emerald-400 animate-pulse' : 'bg-white/30'
                }`}
                aria-hidden="true"
              />
              <span>Live Market Benchmarks · Dubai (AED)</span>
            </div>
            <h2
              id="rates-preview-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-bold"
            >
              Today&apos;s Gold &amp; Silver Rates
            </h2>
            <div className="gold-rule mt-3.5" />
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <span className="text-white/60 text-xs font-body font-medium">
              {isGoldLive && formattedDate
                ? `Updated ${formattedDate} (Dubai Time)`
                : 'Rates connecting…'}
            </span>
            <span className="text-gold/80 text-xs font-body font-mono">
              Separate spot-linked instruments · AED per gram
            </span>
          </div>
        </div>

        {/* ── Section A: Live Gold Rates (4 Cards) ── */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Instrument 1: Physical Gold (XAU/AED)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-gold/15 text-gold font-mono">
              Spot Linked
            </span>
          </div>
          <Link
            href="/gold-prices"
            className="text-xs text-gold/80 hover:text-gold font-mono hover:underline hidden sm:inline"
          >
            Full Gold Table &amp; Calculator →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {previewRates.map((rate, i) => {
            const p10g = per10g(rate.perGram);
            const isFeatured = i === 0; // 24K featured

            return (
              <div
                key={rate.karat}
                className={`rounded-2xl p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-emerald-light/40 to-emerald-dark border-gold/50 shadow-[0_8px_30px_rgba(223,175,36,0.15)] ring-1 ring-gold/25'
                    : 'bg-white/[0.04] border-white/10 hover:border-gold/30 hover:bg-white/[0.06]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider font-body uppercase text-gold bg-gold/10 border border-gold/25">
                      {rate.purityLabel}
                    </span>
                    {isFeatured && (
                      <span className="text-[10px] font-body uppercase font-bold tracking-wider text-gold-light bg-gold/20 px-2 py-0.5 rounded-full border border-gold/30">
                        TT Bar Benchmark
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-4">
                    {rate.karat} Gold
                  </h3>

                  {rate.perGram != null ? (
                    <div className="mb-5">
                      <span className="text-gold text-[11px] font-body uppercase tracking-wider block font-semibold mb-1">
                        AED PER GRAM
                      </span>
                      <p className="font-display font-bold text-3xl sm:text-[32px] text-white leading-none tracking-tight">
                        {formatAED(rate.perGram)}
                      </p>
                    </div>
                  ) : (
                    <div className="mb-5">
                      <span className="text-white/35 text-[11px] font-body uppercase tracking-wider block mb-1">
                        AED PER GRAM
                      </span>
                      <div className="h-9 bg-white/5 rounded-lg flex items-center px-3">
                        <span className="text-white/30 text-sm font-body italic">
                          Connecting…
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 10g divider */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-body">
                  <span className="text-white/50">Per 10 Grams:</span>
                  <span className="text-gold font-semibold tabular-nums">
                    {p10g ? formatAED(p10g) : '—'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Section B: Live Physical Silver Preview Card ── */}
        <div className="bg-gradient-to-br from-emerald-light/35 via-emerald-dark/95 to-emerald-light/20 border border-slate-300/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Silver ambient glow */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-slate-300/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-200/10 border border-slate-300/30 flex items-center justify-center text-slate-200 font-bold font-mono text-sm shrink-0 shadow-inner">
                Ag 47
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
                    Instrument 2: Physical Silver Bullion (XAG/AED)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200/15 text-slate-200 font-mono border border-slate-300/20">
                    Separate Precious Metal Feed
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSilverLive ? 'bg-emerald-400 animate-pulse' : 'bg-white/20'
                    }`}
                  />
                </div>
                <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
                  Silver is traded as an independent physical asset with its own international spot benchmark and market liquidity. We trade 1 kg cast bars, 100g ingots, and 1 oz rounds settled in AED.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <Link
                href="/silver-prices"
                className="flex-1 sm:flex-initial text-center px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-white text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                View Silver Rates
              </Link>
              <a
                href={silverHomepageWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold/15 hover:bg-gold text-gold hover:text-emerald-dark border border-gold/30 text-xs font-body font-semibold transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Enquire Silver on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Silver Spot Rates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="bg-emerald-dark/80 rounded-xl p-4 border border-white/5">
              <span className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                Spot per Gram (1g)
              </span>
              <span className="font-heading font-bold text-xl sm:text-2xl text-white block">
                {silverData?.spotGram ? formatAED(silverData.spotGram) : '—'}
              </span>
              <span className="text-[11px] font-mono text-gold">Base 999 Fine</span>
            </div>

            <div className="bg-emerald-dark/80 rounded-xl p-4 border border-white/5">
              <span className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                Spot per Troy Oz (31.1g)
              </span>
              <span className="font-heading font-bold text-xl sm:text-2xl text-slate-200 block">
                {silverData?.spotOz ? formatAED(silverData.spotOz) : '—'}
              </span>
              <span className="text-[11px] font-mono text-white/50">XAG/AED Benchmark</span>
            </div>

            <div className="bg-emerald-dark/80 rounded-xl p-4 border border-white/5">
              <span className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                1 Kilogram Ingot (1,000g)
              </span>
              <span className="font-heading font-bold text-xl sm:text-2xl text-white block">
                {silverData?.spotKg ? formatAED(silverData.spotKg) : '—'}
              </span>
              <span className="text-[11px] font-mono text-gold">Standard Treasury Bar</span>
            </div>

            <div className="bg-emerald-dark/80 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                  Historical Trends
                </span>
                <span className="text-xs text-white/75 font-body block mb-2">
                  Interactive 1W, 1M, 3M &amp; 1Y chart available
                </span>
              </div>
              <Link
                href="/silver-prices"
                className="text-xs text-slate-300 hover:text-white font-mono flex items-center gap-1"
              >
                <span>Explore Trends</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Global Footer info row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 mt-6 border-t border-white/10">
          <p className="text-white/45 text-xs font-body text-center sm:text-left max-w-2xl leading-relaxed">
            Gold (XAU) and Silver (XAG) rates are calculated from genuine live market spot feeds converted to UAE Dirhams (AED) at the standard conversion of 31.1034768 grams per troy ounce. Indicative wholesale rates for physical settlement in Dubai.
          </p>
          <div className="flex items-center gap-3">
            <Button
              href="/gold-prices"
              variant="outline"
              size="sm"
              className="shrink-0 hover:bg-gold hover:text-emerald-dark font-semibold transition-all"
            >
              Full Gold Rates Table →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
