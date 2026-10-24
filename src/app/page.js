import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { HeroSection } from '@/components/home/HeroSection';
import { GoldTicker } from '@/components/ui/GoldTicker';
import { GoldRatePreview } from '@/components/home/GoldRatePreview';
import { WhyDubaiPreview } from '@/components/home/WhyDubaiPreview';
import { BlogsPreview } from '@/components/home/BlogsPreview';
import { NewsPreview } from '@/components/home/NewsPreview';
import { CompanyPreview } from '@/components/home/CompanyPreview';
import { ContactSection } from '@/components/home/ContactSection';
import { ComplianceSection } from '@/components/home/ComplianceSection';
import { fetchLiveGoldRates } from '@/lib/goldRates';
import { getBlogIndex } from '@/content/blogs';

// Revalidate every 30 minutes
export const revalidate = 1800;

export const metadata = {
  title: 'SNMZ Gold & Diamonds | Gold Rates in Dubai',
  description:
    'Live gold rates in AED, Dubai gold market insights, and premium precious metals. SNMZ Gold & Diamonds — your trusted partner for gold in the UAE.',
};

export default async function HomePage() {
  const ratesData = await fetchLiveGoldRates();
  const articles = getBlogIndex().slice(0, 3);

  return (
    <>
      {/* Announcement + nav */}
      <AnnouncementBar />
      <Header />

      <main id="main-content">
        {/* 1. Hero — compact enough for rates to show below on desktop */}
        <HeroSection />

        {/* 2. Gold ticker — smooth marquee of live rates */}
        <GoldTicker rates={ratesData.rates} status={ratesData.status} />

        {/* 3. Gold rates — ABOVE THE FOLD priority section */}
        <GoldRatePreview
          rates={ratesData.rates}
          status={ratesData.status}
          updatedAt={ratesData.updatedAt}
        />

        {/* 4. Why Dubai? preview */}
        <WhyDubaiPreview />

        {/* 5. Blog / Knowledge Centre preview */}
        <BlogsPreview articles={articles} />

        {/* 6. News preview (gold + economic) */}
        <NewsPreview />

        {/* 7. Compliance / trust signals */}
        <ComplianceSection />

        {/* 8. Company preview — brief, links to /who-we-are */}
        <CompanyPreview />

        {/* 9. Contact CTA */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
