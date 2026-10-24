import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RateCards } from '@/components/prices/RateCards';
import { RatesTable } from '@/components/prices/RatesTable';
import { GoldCalculator } from '@/components/prices/GoldCalculator';
import { PricesRefreshButton } from '@/components/prices/PricesRefreshButton';
import { fetchLiveGoldRates } from '@/lib/goldRates';

// Revalidate this page every 30 minutes via Next.js ISR
export const revalidate = 1800;

export const metadata = {
  title: "Today's Gold Rates in Dubai | AED per Gram",
  description:
    'Live indicative gold rates per gram in AED for 24K, 22K, 21K and 18K purity. Gold value calculator included. Contact SNMZ for verified UAE trading rates.',
  openGraph: {
    title: "Today's Gold Rates in Dubai | AED per Gram | SNMZ",
    description:
      'Indicative 24K, 22K, 21K and 18K gold rates in AED with gold value calculator. Updated from live spot data.',
    images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default async function GoldPricesPage() {
  const ratesData = await fetchLiveGoldRates();
  const isLive = ratesData.status === 'live';

  const formattedDate = ratesData.updatedAt
    ? new Intl.DateTimeFormat('en-AE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Dubai',
      }).format(new Date(ratesData.updatedAt))
    : null;

  return (
    <>
      <Header />
      <main id="main-content" className="bg-emerald-dark">

        {/* Compact page header — rates visible without scrolling */}
        <section
          className="pt-28 pb-6 bg-hero-gradient border-b border-gold/10"
          aria-labelledby="prices-page-heading"
        >
          <div className="section-container">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-px bg-gold/60" aria-hidden="true" />
                  <span className="text-gold/70 text-xs font-body font-semibold uppercase tracking-[0.2em]">
                    Live Rates · AED
                  </span>
                </div>
                <h1
                  id="prices-page-heading"
                  className="font-display text-3xl sm:text-4xl text-white"
                >
                  Gold Rates in Dubai
                </h1>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-white/20'}`}
                    aria-hidden="true"
                  />
                  <span className="text-white/45 text-xs font-body">
                    {isLive && formattedDate
                      ? `Updated ${formattedDate} (Dubai)`
                      : 'Rates not connected'}
                  </span>
                </div>
                <span className="text-white/25 text-xs font-body italic">
                  Indicative spot rates · AED / gram · Not a trade offer
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Rate cards — immediately visible */}
        <RateCards
          rates={ratesData.rates}
          status={ratesData.status}
          source={ratesData.source}
        />

        {/* Rates table */}
        <RatesTable rates={ratesData.rates} status={ratesData.status} />

        {/* Refresh */}
        <div className="bg-emerald-dark py-5 border-t border-gold/10">
          <div className="section-container flex justify-center">
            <PricesRefreshButton />
          </div>
        </div>

        {/* Calculator */}
        <GoldCalculator rates={ratesData.rates} />

        {/* Simple enquiry CTA — replaces removed PricesEnquiryCTA + PricesDisclaimer */}
        <section className="section-padding bg-emerald border-t border-gold/15">
          <div className="section-container max-w-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl text-white mb-3">
                  Trade Gold with <span className="text-gradient-gold">SNMZ</span>
                </h2>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                  SNMZ Gold & Diamonds deals in gold TT bars and precious metals for institutional and corporate buyers in the UAE and internationally. Rates shown are indicative — contact us to discuss verified trading rates, quantities, and settlement terms.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-emerald-dark rounded-lg text-sm font-body font-semibold hover:opacity-90 transition-opacity"
                >
                  Enquire Now
                </Link>
              </div>
              <div className="bg-white/5 border border-gold/15 rounded-xl p-5 space-y-3">
                <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">Rate Disclaimer</p>
                {[
                  'Rates derived from live XAU/AED international spot data.',
                  'Rates are indicative only — not a trade offer or guaranteed price.',
                  'Retail prices include making charges, VAT (5%), and other fees.',
                  'Always confirm final pricing directly with your trading counterparty.',
                  'Not investment or financial advice. Consult a UAE-licensed advisor.',
                ].map((point) => (
                  <div key={point} className="flex gap-2.5 items-start">
                    <span className="text-gold/40 mt-0.5 flex-shrink-0" aria-hidden="true">◆</span>
                    <p className="text-white/50 text-xs font-body leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
