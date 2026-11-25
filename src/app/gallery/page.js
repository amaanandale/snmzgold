import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SiteConfig } from '@/config/site';
import { STANDARD_INVENTORY } from '@/data/bullionProducts';
import { BullionProductCard } from '@/components/shop/BullionProductCard';
import { fetchLiveGoldRates } from '@/lib/goldRates';
import { fetchLiveSilverRates } from '@/lib/silverRates';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const revalidate = 1800; // 30 mins ISR

export const metadata = {
  title: 'Precious Metals & Bullion Gallery | SNMZ Gold & Diamonds Dubai',
  description:
    'Visual showcase of certified investment-grade 24K gold bars, 10 tola TT bars, minted ingots, and fine silver bullion in Dubai, UAE.',
  alternates: {
    canonical: `${SiteConfig.domain}/gallery`,
  },
};

export default async function GalleryPage() {
  const [ratesData, silverData] = await Promise.all([
    fetchLiveGoldRates(),
    fetchLiveSilverRates(),
  ]);

  const liveGoldRate24k =
    ratesData?.rates?.find((r) => r.karat === '24K')?.perGram || 480.09;
  const liveSilverRate =
    silverData?.rates?.find((r) => r.grade === '999')?.perGram || 6.13;

  const galleryWaUrl = getWhatsAppUrl('gallery');

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="min-h-screen bg-[#F8F5EE] text-[#1A202C] pt-24 sm:pt-28 lg:pt-32 pb-20 selection:bg-[#D4AF37]/30 selection:text-[#0B0F17]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono text-[#718096] mb-8"
          >
            <Link href="/" className="hover:text-[#997300] transition-colors">
              Home
            </Link>
            <span className="text-[#CBD5E1]" aria-hidden="true">/</span>
            <span className="text-[#997300] font-semibold">Bullion Gallery</span>
          </nav>

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3">
              <span className="text-[#997300] text-xs sm:text-[13px] font-mono font-bold tracking-[0.28em] uppercase">
                CURATED BULLION SHOWCASE
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A202C] tracking-tight mb-4 leading-tight">
              Precious Metals &amp; Bullion Gallery
            </h1>
            <p className="text-[#4A5568] font-body text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Visual archive of investment-grade 24K gold bars, regional 10 tola TT bars, minted coins, and physical silver ingots. Sealed in tamper-evident assay certipack packaging and priced against live Dubai spot benchmarks.
            </p>
          </div>

          {/* ── 4-Column Desktop / 2-Column Mobile Grid ──────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16">
            {STANDARD_INVENTORY.map((product) => (
              <BullionProductCard
                key={product.id}
                product={product}
                theme="beige"
                liveGoldRate24k={liveGoldRate24k}
                liveSilverRate={liveSilverRate}
              />
            ))}
          </div>

          {/* Bottom Trust & Direct Desk Enquiry Banner */}
          <div className="bg-white border border-[#E5D8B8] rounded-2xl p-6 sm:p-10 shadow-sm text-center max-w-4xl mx-auto">
            <span className="text-[#997300] text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              DUBAI BULLION DESK SPECIFICATIONS
            </span>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A202C] mb-3">
              Looking for Custom Allocations or Wholesale Volume?
            </h2>
            <p className="text-[#4A5568] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6 font-body">
              Our trading desk at Al Dhagaya, Deira executes spot-linked wholesale orders, institutional kilo bar deliveries, and sovereign bullion handovers with full invoice traceability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={galleryWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B0F17] font-body font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Direct WhatsApp Enquiry</span>
              </a>
              <Link
                href="/shop"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F8F5EE] hover:bg-[#EFEAE0] text-[#1A202C] font-body font-semibold text-xs border border-[#E5D8B8] transition-colors inline-flex items-center justify-center"
              >
                <span>Browse Full Catalogue →</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
