import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SiteConfig } from '@/config/site';
import { BullionShop } from '@/components/shop/BullionShop';
import { fetchLiveGoldRates } from '@/lib/goldRates';
import { fetchLiveSilverRates } from '@/lib/silverRates';

// Revalidate every 30 minutes via Next.js ISR
export const revalidate = 1800;

export const metadata = {
  title: 'Shop Gold & Silver Bullion Bars | SNMZ Gold & Diamonds Dubai',
  description:
    'Browse investment-grade 999.9 fine gold bars, 10 tola TT bars, and 999 fine physical silver bullion in Dubai, UAE. Live spot-linked pricing and direct WhatsApp counterparty execution.',
  alternates: {
    canonical: `${SiteConfig.domain}/shop`,
  },
  openGraph: {
    title: 'Shop Gold & Silver Bullion | SNMZ Gold & Diamonds Dubai',
    description:
      'Investment-grade 999.9 gold bars, 10 tola TT bars, and 999 fine physical silver bullion in Dubai.',
    url: `${SiteConfig.domain}/shop`,
    type: 'website',
  },
};

export default async function ShopPage() {
  // Leverage already-cached server-side ISR rates (0 extra API requests)
  const [ratesData, silverData] = await Promise.all([
    fetchLiveGoldRates(),
    fetchLiveSilverRates(),
  ]);

  const liveGoldRate24k =
    ratesData?.rates?.find((r) => r.karat === '24K')?.perGram || 480.09;
  const liveSilverRate =
    silverData?.rates?.find((r) => r.grade === '999')?.perGram || 6.13;

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#F8F5EE] pt-16 lg:pt-20">
        <BullionShop
          liveGoldRate24k={liveGoldRate24k}
          liveSilverRate={liveSilverRate}
        />
      </main>
      <Footer />
    </>
  );
}
