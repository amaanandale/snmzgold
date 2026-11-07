'use client';

import { formatAED } from '@/lib/goldRates';

/**
 * Gold price ticker — smoothly scrolling marquee of live AED rates.
 * Uses CSS animation (no external dependency — pure Tailwind keyframes).
 *
 * Respects prefers-reduced-motion: when motion is reduced, renders a static grid.
 *
 * @param {{ rates: import('@/lib/goldRates').PurityRate[], status: string }} props
 */
export function GoldTicker({ rates, status }) {
  const isLive = status === 'live';
  const availableRates = rates.filter((r) => r.perGram != null);

  // Separator element between ticker items
  const Separator = () => (
    <span className="mx-4 text-gold/20 select-none" aria-hidden="true">◆</span>
  );

  if (!isLive || availableRates.length === 0) {
    return (
      <div
        className="w-full bg-emerald-dark/80 border-y border-gold/10 py-2.5 px-4"
        aria-label="Gold rate ticker — rates currently unavailable"
      >
        <p className="text-white/30 text-xs font-body text-center tracking-wide">
          Live gold rates — connecting…
        </p>
      </div>
    );
  }

  // Duplicate items so the marquee loops seamlessly
  const items = [...availableRates, ...availableRates, ...availableRates, ...availableRates];

  return (
    <div
      className="w-full bg-emerald-dark/90 border-y border-gold/15 overflow-hidden"
      aria-label="Live gold rates ticker in AED"
    >
      {/* Static fallback for reduced-motion users — shown via @media query */}
      <div className="motion-reduce:flex motion-reduce:justify-center motion-reduce:gap-8 motion-reduce:py-3 motion-reduce:px-4 hidden motion-reduce:flex-wrap">
        {availableRates.map((rate) => (
          <TickerItem key={rate.karat} rate={rate} />
        ))}
      </div>

      {/* Animated marquee — hidden for reduced-motion users */}
      <div className="flex motion-reduce:hidden py-2.5" aria-hidden="true">
        <div className="flex animate-marquee motion-safe:animate-marquee whitespace-nowrap">
          {items.map((rate, i) => (
            <span key={`${rate.karat}-${i}`} className="inline-flex items-center">
              <TickerItem rate={rate} />
              <Separator />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TickerItem({ rate }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-body">
      <span className="px-2 py-0.5 rounded bg-gold/15 text-gold text-xs font-bold font-display tracking-wider border border-gold/25">
        {rate.karat}
      </span>
      <span className="text-white/60 text-xs font-body font-medium">{rate.purityLabel}</span>
      <span className="text-white font-bold tabular-nums ml-0.5">{formatAED(rate.perGram)}</span>
      <span className="text-gold/75 text-xs font-medium">/ gram</span>
    </span>
  );
}
