import { SiteConfig } from '@/config/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { GoldTicker } from '@/components/ui/GoldTicker';
import { TrustBadgesRow } from '@/components/home/TrustBadgesRow';
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
  title: {
    absolute: 'Buy Gold Bullion in Dubai | 24K Bars & 10 Tola TT Rates | SNMZ Gold',
  },
  description:
    'Licensed Deira gold dealer in Dubai offering physical gold bullion Dubai at live spot rates. Buy 24K minted bars and check today\'s 10 tola TT bar price with immediate settlement at Al Dhagaya.',
  keywords: [
    'physical gold bullion Dubai',
    '10 tola TT bar price',
    'Deira gold dealer',
    'buy gold bullion in Dubai',
    '24K gold bars Dubai',
    'Dubai Gold Souk',
    'SNMZ Gold & Diamonds',
    'Al Dhagaya gold trading',
  ],
  alternates: {
    canonical: SiteConfig.domain,
  },
  openGraph: {
    title: 'Buy Gold Bullion in Dubai | 24K Bars & 10 Tola TT Rates | SNMZ Gold',
    description:
      'Licensed Deira gold dealer in Dubai offering physical gold bullion Dubai at live spot rates. Buy 24K minted bars and check today\'s 10 tola TT bar price with immediate settlement at Al Dhagaya.',
    url: SiteConfig.domain,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'SNMZ 100g 24K Gold Bullion Bar Dubai',
      },
    ],
  },
};

export default async function HomePage() {
  // Fetch live benchmark precious metal rates server-side
  const [ratesData, silverData] = await Promise.all([
    fetchLiveGoldRates(),
    fetchLiveSilverRates(),
  ]);

  const liveGoldRate24k =
    ratesData?.rates?.find((r) => r.karat === '24K')?.perGram || 480.09;
  const liveSilverRate =
    silverData?.rates?.find((r) => r.grade === '999')?.perGram || 6.13;

  // JewelryStore / Gold Dealer JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['JewelryStore', 'Store'],
    name: 'SNMZ Gold & Diamonds',
    alternateName: 'SNMZ Bullion Dubai',
    description:
      'Licensed physical gold bullion dealer and precious metals trading desk in Dubai Gold Souk, Deira. Specializing in physical gold bullion Dubai, 24K gold bars, 10 tola TT bar pricing, and fine silver.',
    url: SiteConfig.domain,
    telephone: SiteConfig.phone,
    priceRange: 'AED',
    currenciesAccepted: 'AED, USD',
    paymentAccepted: 'Cash, Bank Wire',
    openingHours: 'Mo-Sa 09:00-19:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SiteConfig.address,
      addressLocality: 'Deira, Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2697,
      longitude: 55.2974,
    },
    hasMap: 'https://maps.google.com/?q=25.2697,55.2974',
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
  };

  return (
    <>
      {/* Schema.org JewelryStore / Gold Dealer structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header with responsive official logo and laptop announcement */}
      <Header showAnnouncement={true} />

      <main id="main-content">
        {/* 1. Hero Section — Headline & Bullion Trading CTAs */}
        <HeroSection />

        {/* 2. Critical Gold Marquee — Gold-only, untouched behaviour & live data */}
        <GoldTicker rates={ratesData.rates} status={ratesData.status} />

        {/* 3. 4-Column Minimal Luxury Trust Badges */}
        <section className="py-6 sm:py-8 bg-[#0B0F17] border-b border-[#252F3F]/60" aria-label="Trust & Credentials">
          <div className="section-container">
            <TrustBadgesRow />
          </div>
        </section>

        {/* 4. Gold & Silver Bullion Introduction / Visual Category Cards */}
        <BullionCategories />

        {/* 5. Featured Products Preview with Link to /shop */}
        <FeaturedProducts
          liveGoldRate24k={liveGoldRate24k}
          liveSilverRate={liveSilverRate}
        />

        {/* 6. Live Gold & Silver Price Preview */}
        <GoldRatePreview
          rates={ratesData.rates}
          status={ratesData.status}
          updatedAt={ratesData.updatedAt}
          silverData={silverData}
        />

        {/* 7. Why Dubai? Gold Market Preview */}
        <WhyDubaiPreview />

        {/* 8. Redesigned Trust, Standards & Compliance Section */}
        <TrustStandardsSection />

        {/* 9. Strong Bullion Enquiry CTA */}
        <ContactSection />
      </main>

      {/* 10. Clean Footer with Verified Details */}
      <Footer />
    </>
  );
}
