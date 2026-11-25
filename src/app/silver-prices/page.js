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
      <main id="main-content" className="bg-[#F8F5EE] text-[#1A202C] min-h-screen selection:bg-[#D4AF37]/30 selection:text-[#0B0F17]">
        {/* Page Header */}
        <section className="pt-24 sm:pt-28 pb-8 bg-white border-b border-[#E5D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#997300]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#997300] font-bold">
                    Live Precious Metals Benchmark · Dubai
                  </span>
                </div>
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A202C]">
                  Silver Prices in Dubai (AED)
                </h1>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-[#4A5568] text-xs font-mono">
                    {isLive && formattedDate
                      ? `Updated ${formattedDate} (Dubai GST)`
                      : 'Rates connecting…'}
                  </span>
                </div>
                <span className="text-[#718096] text-[11px] font-mono">
                  Indicative physical spot rates · 31.1034768 g / troy oz
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Spot Price Cards */}
        <section className="py-10 sm:py-12 bg-[#F8F5EE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* 1 Kg Silver Bar */}
              <div className="bg-white border border-[#E5D8B8] rounded-2xl p-5 hover:border-[#D4AF37] transition-all shadow-sm">
                <span className="text-[11px] font-mono text-[#718096] uppercase block mb-1">
                  1 Kilogram (1,000g)
                </span>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A202C] mb-1">
                  {fineSilver?.perKg ? formatAED(fineSilver.perKg) : '—'}
                </div>
                <span className="text-[11px] text-[#997300] font-mono font-semibold">999 Fine Silver Bar</span>
              </div>

              {/* 1 Troy Ounce */}
              <div className="bg-white border border-[#E5D8B8] rounded-2xl p-5 hover:border-[#D4AF37] transition-all shadow-sm">
                <span className="text-[11px] font-mono text-[#718096] uppercase block mb-1">
                  1 Troy Ounce (31.103g)
                </span>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A202C] mb-1">
                  {fineSilver?.perOz ? formatAED(fineSilver.perOz) : '—'}
                </div>
                <span className="text-[11px] text-[#4A5568] font-mono font-semibold">Spot Ingot / Coin</span>
              </div>

              {/* Per Gram */}
              <div className="bg-white border border-[#E5D8B8] rounded-2xl p-5 hover:border-[#D4AF37] transition-all shadow-sm">
                <span className="text-[11px] font-mono text-[#718096] uppercase block mb-1">
                  Per Gram (1g)
                </span>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A202C] mb-1">
                  {fineSilver?.perGram ? formatAED(fineSilver.perGram) : '—'}
                </div>
                <span className="text-[11px] text-[#997300] font-mono font-semibold">Base 999 Fine Rate</span>
              </div>

              {/* 100 Grams */}
              <div className="bg-white border border-[#E5D8B8] rounded-2xl p-5 hover:border-[#D4AF37] transition-all shadow-sm">
                <span className="text-[11px] font-mono text-[#718096] uppercase block mb-1">
                  100 Grams (100g)
                </span>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A202C] mb-1">
                  {fineSilver?.per100g ? formatAED(fineSilver.per100g) : '—'}
                </div>
                <span className="text-[11px] text-[#4A5568] font-mono font-semibold">Minted Ingot</span>
              </div>
            </div>
          </div>
        </section>

        {/* Silver Price Trends Historical Chart */}
        <SilverPriceChart initialData={historyData} currentSpotGram={silverData.spotGram} />

        {/* Silver Breakdown Table */}
        <section className="py-12 bg-white border-y border-[#E5D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-[#E5D8B8] rounded-2xl overflow-hidden shadow-sm">
              <div className="p-5 sm:p-6 bg-[#F8F5EE] border-b border-[#E5D8B8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h2 className="font-heading font-bold text-xl text-[#1A202C]">
                    Physical Silver Rates by Weight &amp; Purity
                  </h2>
                  <p className="text-xs text-[#718096] mt-0.5 font-mono">
                    Benchmark rates in AED derived from live international spot feeds.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/gold-prices"
                    className="text-xs text-[#997300] hover:underline font-mono font-bold"
                  >
                    View Gold Rates →
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#1A202C]">
                  <thead className="bg-[#FAF8F3] text-xs font-mono uppercase text-[#718096] border-b border-[#E5D8B8]">
                    <tr>
                      <th className="py-4 px-6">Grade / Purity</th>
                      <th className="py-4 px-6 text-right">Per Gram</th>
                      <th className="py-4 px-6 text-right">10 Grams</th>
                      <th className="py-4 px-6 text-right">100 Grams</th>
                      <th className="py-4 px-6 text-right">1 Troy Ounce</th>
                      <th className="py-4 px-6 text-right">1 Kilogram</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5D8B8]/60 font-mono text-xs sm:text-sm">
                    {silverData.rates.map((rate) => (
                      <tr key={rate.grade} className="hover:bg-[#F8F5EE] transition-colors">
                        <td className="py-4 px-6 font-semibold text-[#1A202C]">
                          <div>{rate.label}</div>
                          <span className="text-[11px] text-[#997300] font-bold">{rate.purity} Purity</span>
                        </td>
                        <td className="py-4 px-6 text-right text-[#1A202C]">
                          {rate.perGram ? formatAED(rate.perGram) : '—'}
                        </td>
                        <td className="py-4 px-6 text-right text-[#4A5568]">
                          {rate.per10g ? formatAED(rate.per10g) : '—'}
                        </td>
                        <td className="py-4 px-6 text-right text-[#4A5568]">
                          {rate.per100g ? formatAED(rate.per100g) : '—'}
                        </td>
                        <td className="py-4 px-6 text-right text-[#1A202C]">
                          {rate.perOz ? formatAED(rate.perOz) : '—'}
                        </td>
                        <td className="py-4 px-6 text-right font-bold text-[#997300]">
                          {rate.perKg ? formatAED(rate.perKg) : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-[#F8F5EE] border-t border-[#E5D8B8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                  <span className="font-mono text-[#4A5568]">{isLive ? 'Live Spot Benchmark · Dubai' : 'Rates connecting…'}</span>
                </div>
                <PricesRefreshButton />
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <SilverCalculator rates={silverData.rates} />

        {/* Trading Call-to-Action */}
        <section className="py-12 sm:py-16 bg-[#F8F5EE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E5D8B8] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#1A202C] mb-2">
                  Ready to Lock In a Physical Silver Trade?
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5568] max-w-xl font-body leading-relaxed">
                  Orders are executed transparently against live spot rates. Contact our Dubai bullion desk for bulk bar volume premiums and immediate physical handover.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B0F17] font-body font-bold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  Enquire Live Silver Rate
                </a>
                <a
                  href={officePhone}
                  className="px-6 py-3 rounded-xl bg-[#F8F5EE] hover:bg-[#EFEAE0] text-[#1A202C] font-mono text-xs border border-[#E5D8B8] transition-colors"
                >
                  Call {SiteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
