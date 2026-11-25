import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RateCards } from '@/components/prices/RateCards';
import { RatesTable } from '@/components/prices/RatesTable';
import { GoldCalculator } from '@/components/prices/GoldCalculator';
import { PricesRefreshButton } from '@/components/prices/PricesRefreshButton';
import { fetchLiveGoldRates } from '@/lib/goldRates';
import { getWhatsAppUrl } from '@/lib/whatsapp';

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
      <main id="main-content" className="bg-[#F8F5EE] text-[#1A202C] min-h-screen selection:bg-[#D4AF37]/30 selection:text-[#0B0F17]">
        {/* Compact page header — luxury champagne styling */}
        <section
          className="pt-24 sm:pt-28 pb-8 bg-white border-b border-[#E5D8B8]"
          aria-labelledby="prices-page-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-6 h-0.5 bg-[#D4AF37]" aria-hidden="true" />
                  <span className="text-[#997300] text-xs font-mono font-bold uppercase tracking-[0.2em]">
                    Live Rates · AED Spot Benchmark
                  </span>
                </div>
                <h1
                  id="prices-page-heading"
                  className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A202C]"
                >
                  Gold Rates in Dubai
                </h1>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}
                    aria-hidden="true"
                  />
                  <span className="text-[#4A5568] text-xs font-mono">
                    {isLive && formattedDate
                      ? `Updated ${formattedDate} (Dubai GST)`
                      : 'Rates connecting…'}
                  </span>
                </div>
                <span className="text-[#718096] text-[11px] font-mono italic">
                  Indicative spot rates · AED / gram · Physical handover in Deira
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

        {/* Refresh button */}
        <div className="bg-[#F8F5EE] py-5 border-t border-[#E5D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <PricesRefreshButton />
          </div>
        </div>

        {/* Calculator */}
        <GoldCalculator rates={ratesData.rates} />

        {/* Simple enquiry CTA */}
        <section className="py-14 sm:py-16 bg-white border-t border-[#E5D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[#997300] text-xs font-mono font-bold uppercase tracking-widest block mb-1">
                  DEIRA TRADING DESK
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A202C] mb-3">
                  Trade Bullion with <span className="text-[#997300]">SNMZ</span>
                </h2>
                <p className="text-[#4A5568] font-body text-xs sm:text-sm leading-relaxed mb-6">
                  SNMZ Gold &amp; Diamonds deals in certified gold TT bars and wholesale precious metals for institutional, corporate, and private buyers in Dubai. Rates shown are indicative — connect with our desk for verified lock-in rates and immediate Al Dhagaya settlement.
                </p>
                <a
                  href={getWhatsAppUrl('goldRates')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B0F17] rounded-xl text-xs sm:text-sm font-body font-bold uppercase tracking-wider shadow-md transition-all"
                >
                  Enquire Gold Rates on WhatsApp
                </a>
              </div>
              <div className="bg-[#F8F5EE] border border-[#E5D8B8] rounded-2xl p-6 space-y-3 shadow-xs">
                <p className="text-[#997300] text-xs uppercase tracking-widest font-mono font-bold">Trading Governance</p>
                {[
                  'Rates derived from live XAU/AED international spot benchmarks.',
                  'Rates are indicative only — spot lock occurs at counterparty order confirmation.',
                  'Physical 999.9 investment gold bars are 0% VAT under UAE Federal Tax Law.',
                  'Immediate counterparty assay verification and handover in Al Dhagaya, Deira.',
                  'Documented AML/KYC adherence with statutory compliance.',
                ].map((point) => (
                  <div key={point} className="flex gap-2.5 items-start">
                    <span className="text-[#997300] font-bold text-xs mt-0.5 shrink-0" aria-hidden="true">◆</span>
                    <p className="text-[#4A5568] text-xs font-mono leading-relaxed">{point}</p>
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
