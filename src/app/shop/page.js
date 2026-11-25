import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SiteConfig } from '@/config/site';
import { BullionShop } from '@/components/shop/BullionShop';

export const metadata = {
  title: 'Shop Gold & Silver Bullion Bars | SNMZ Gold & Diamonds Dubai',
  description:
    'Browse investment-grade 24K gold bars, 10 tola TT bars, minted ingots, and 999 fine silver bullion in Dubai, UAE. Live spot-linked pricing and direct WhatsApp counterparty execution.',
  alternates: {
    canonical: `${SiteConfig.domain}/shop`,
  },
  openGraph: {
    title: 'Shop Gold & Silver Bullion | SNMZ Gold & Diamonds Dubai',
    description:
      'Investment-grade 24K gold bars, 10 tola TT bars, and 999 fine physical silver bullion in Dubai.',
    url: `${SiteConfig.domain}/shop`,
    type: 'website',
  },
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#0B0F17] pt-16 lg:pt-20">
        <BullionShop />
      </main>
      <Footer />
    </>
  );
}
