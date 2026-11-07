import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  fetchLiveSilverRates,
  fetchHistoricalSilverSeries,
  formatAED,
} from '@/lib/silverRates';
import { SilverPriceChart } from '@/components/prices/SilverPriceChart';
import { SilverCalculator } from '@/components/prices/SilverCalculator';
import { PricesRefreshButton } from '@/components/prices/PricesRefreshButton';
import { SiteConfig } from '@/config/site';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

export const revalidate = 1800; // 30 mins ISR

export const metadata = {
  title: "Today's Silver Rates in Dubai | AED per Gram & Ounce | SNMZ",
  description:
    'Live indicative physical silver rates in Dubai in AED. Real-time spot pricing for 1kg silver bars, 1oz coins, and 999 fine silver per gram. Interactive historical trends chart included.',
  alternates: {
    canonical: `${SiteConfig.domain}/silver-prices`,
  },
  openGraph: {
    title: "Today's Silver Rates in Dubai | AED per Gram & Kilogram | SNMZ",
    description:
      'Live indicative physical silver rates in Dubai in AED. Real-time spot pricing and historical trends for physical silver bullion.',
    url: `${SiteConfig.domain}/silver-prices`,
  },
};

export default async function SilverPricesPage() {
  const [silverData, historyData] = await Promise.all([
    fetchLiveSilverRates(),
    fetchHistoricalSilverSeries('1M'),
  ]);

  const isLive = silverData.status === 'live';

  const formattedDate = silverData.updatedAt
    ? new Intl.DateTimeFormat('en-AE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Dubai',
      }).format(new Date(silverData.updatedAt))
    : null;

  const fineSilver = silverData.rates.find((r) => r.grade === '999') || silverData.rates[0];
  const waUrl = getWhatsAppUrl('silverRates');
  const officePhone = getOfficePhoneUrl();

  return (
    <>
      <Header />
      <main id="main-content" className="bg-emerald-dark min-h-screen pt-28 lg:pt-36 pb-20">
        {/* Page Header */}
        <section className="section-container mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-gold/15">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                  Live Precious Metals Benchmark · Dubai
                </span>
              </div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Silver Prices in Dubai (AED)
              </h1>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isLive ? 'bg-emerald-400 animate-pulse' : 'bg-white/20'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-white/60 text-xs font-mono">
                  {isLive && formattedDate
                    ? `Updated ${formattedDate} (Dubai GST)`
                    : 'Rates connecting…'}
                </span>
              </div>
              <span className="text-white/40 text-[11px] font-mono">
                Indicative physical spot rates · 31.1034768 g / troy oz
              </span>
            </div>
          </div>
        </section>

        {/* Spot Price Cards */}
        <section className="section-container mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* 1 Kg Silver Bar */}
            <div className="bg-emerald-light/40 border border-gold/20 rounded-2xl p-5 hover:border-gold/40 transition-all">
              <span className="text-[11px] font-mono text-white/50 uppercase block mb-1">
                1 Kilogram (1,000g)
              </span>
              <div className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                {fineSilver?.perKg ? formatAED(fineSilver.perKg) : '—'}
              </div>
              <span className="text-[11px] text-gold font-mono">999 Fine Silver Bar</span>
            </div>

            {/* 1 Troy Ounce */}
            <div className="bg-emerald-light/40 border border-gold/20 rounded-2xl p-5 hover:border-gold/40 transition-all">
              <span className="text-[11px] font-mono text-white/50 uppercase block mb-1">
                1 Troy Ounce (31.103g)
              </span>
              <div className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                {fineSilver?.perOz ? formatAED(fineSilver.perOz) : '—'}
              </div>
              <span className="text-[11px] text-slate-300 font-mono">Spot Ingot / Coin</span>
            </div>

            {/* Per Gram */}
            <div className="bg-emerald-light/40 border border-gold/20 rounded-2xl p-5 hover:border-gold/40 transition-all">
              <span className="text-[11px] font-mono text-white/50 uppercase block mb-1">
                Per Gram (1g)
              </span>
              <div className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                {fineSilver?.perGram ? formatAED(fineSilver.perGram) : '—'}
              </div>
              <span className="text-[11px] text-gold font-mono">Base 999 Fine Rate</span>
            </div>

            {/* 100 Grams */}
            <div className="bg-emerald-light/40 border border-gold/20 rounded-2xl p-5 hover:border-gold/40 transition-all">
              <span className="text-[11px] font-mono text-white/50 uppercase block mb-1">
                100 Grams (100g)
              </span>
              <div className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                {fineSilver?.per100g ? formatAED(fineSilver.per100g) : '—'}
              </div>
              <span className="text-[11px] text-slate-300 font-mono">Minted Ingot</span>
            </div>
          </div>
        </section>

        {/* Silver Price Trends Historical Chart */}
        <SilverPriceChart initialData={historyData} currentSpotGram={silverData.spotGram} />

        {/* Silver Breakdown Table */}
        <section className="section-container mb-12 mt-12">
          <div className="bg-emerald-light/30 border border-gold/15 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-5 sm:p-6 border-b border-gold/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="font-heading font-bold text-xl text-white">
                  Physical Silver Rates by Weight &amp; Purity
                </h2>
                <p className="text-xs text-white/60 mt-0.5">
                  Benchmark rates in AED derived from live international spot feeds.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/gold-prices"
                  className="text-xs text-gold hover:underline font-mono"
                >
                  View Gold Rates →
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-white/80">
                <thead className="bg-emerald-dark/80 text-xs font-mono uppercase text-white/50 border-b border-white/5">
                  <tr>
                    <th className="py-4 px-6">Grade / Purity</th>
                    <th className="py-4 px-6 text-right">Per Gram</th>
                    <th className="py-4 px-6 text-right">10 Grams</th>
                    <th className="py-4 px-6 text-right">100 Grams</th>
                    <th className="py-4 px-6 text-right">1 Troy Ounce</th>
                    <th className="py-4 px-6 text-right">1 Kilogram</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-xs sm:text-sm">
                  {silverData.rates.map((rate) => (
                    <tr key={rate.grade} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">
                        <div>{rate.label}</div>
                        <span className="text-[11px] text-gold/70">{rate.purity} Purity</span>
                      </td>
                      <td className="py-4 px-6 text-right text-white">
                        {rate.perGram ? formatAED(rate.perGram) : '—'}
                      </td>
                      <td className="py-4 px-6 text-right text-white/80">
                        {rate.per10g ? formatAED(rate.per10g) : '—'}
                      </td>
                      <td className="py-4 px-6 text-right text-white/80">
                        {rate.per100g ? formatAED(rate.per100g) : '—'}
                      </td>
                      <td className="py-4 px-6 text-right text-white">
                        {rate.perOz ? formatAED(rate.perOz) : '—'}
                      </td>
                      <td className="py-4 px-6 text-right font-bold text-gold">
                        {rate.perKg ? formatAED(rate.perKg) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-emerald-dark/60 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
              <div>Data source: {silverData.source}</div>
              <PricesRefreshButton />
            </div>
          </div>
        </section>

        {/* Calculator */}
        <SilverCalculator rates={silverData.rates} />

        {/* Trading Call-to-Action */}
        <section className="section-container mt-12">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-light/40 to-emerald-dark border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Ready to Lock In a Physical Silver Trade?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl">
                Orders are executed transparently against live spot rates. Contact our Dubai bullion desk for bulk bar volume premiums and immediate physical handover.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                Enquire Live Silver Rate
              </a>
              <a
                href={officePhone}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs border border-white/10 transition-colors"
              >
                Call {SiteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
