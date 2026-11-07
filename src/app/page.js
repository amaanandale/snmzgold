import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { GoldTicker } from '@/components/ui/GoldTicker';
import { BullionCategories } from '@/components/home/BullionCategories';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { GoldRatePreview } from '@/components/home/GoldRatePreview';
import { WhyDubaiPreview } from '@/components/home/WhyDubaiPreview';
import { TrustStandardsSection } from '@/components/home/TrustStandardsSection';
import { ContactSection } from '@/components/home/ContactSection';
import { fetchLiveGoldRates } from '@/lib/goldRates';
import { fetchLiveSilverRates } from '@/lib/silverRates';

// Revalidate every 30 minutes via Next.js ISR
export const revalidate = 1800;

export const metadata = {
  title: 'SNMZ Gold & Diamonds | Premium 24K Gold & Silver Bullion Trading Dubai',
  description:
    'Licensed Dubai bullion dealer offering 24K gold TT bars, cast bars, minted bullion, and physical silver. Live AED spot rates, verified purities, and institutional counterparty service.',
};

export default async function HomePage() {
  // Fetch live benchmark precious metal rates server-side
  const [ratesData, silverData] = await Promise.all([
    fetchLiveGoldRates(),
    fetchLiveSilverRates(),
  ]);

  return (
    <>
      {/* Header with responsive official logo and laptop announcement */}
      <Header showAnnouncement={true} />

      <main id="main-content">
        {/* 1. Hero Section — Headline & Bullion Trading CTAs */}
        <HeroSection />

        {/* 2. Critical Gold Marquee — Gold-only, untouched behaviour & live data */}
        <GoldTicker rates={ratesData.rates} status={ratesData.status} />

        {/* 3. Gold & Silver Bullion Introduction / Category Cards */}
        <BullionCategories />

        {/* 4. Featured Products Preview with Link to /shop */}
        <FeaturedProducts />

        {/* 5. Live Gold & Silver Price Preview */}
        <GoldRatePreview
          rates={ratesData.rates}
          status={ratesData.status}
          updatedAt={ratesData.updatedAt}
          silverData={silverData}
        />

        {/* 6. Why Dubai? Gold Market Preview */}
        <WhyDubaiPreview />

        {/* 7. Redesigned Trust, Standards & Compliance Section */}
        <TrustStandardsSection />

        {/* 8. Strong Bullion Enquiry CTA */}
        <ContactSection />
      </main>

      {/* 9. Clean Footer with Verified Details */}
      <Footer />
    </>
  );
}
