import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { TradingSection } from '@/components/home/TradingSection';
import { ComplianceSection } from '@/components/home/ComplianceSection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { BlogSection } from '@/components/home/BlogSection';
import { NewsSection } from '@/components/home/NewsSection';
import { ContactSection } from '@/components/home/ContactSection';

export const metadata = {
  title: 'SNMZ Gold & Diamonds — Premium 24K Gold TT Bar Trading',
  description: 'Premium 24K gold TT bar trading with verified purity, transparent pricing and trusted compliance. Your institutional and corporate gold trading partner.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <TradingSection />
        <ComplianceSection />
        <CapabilitiesSection />
        <BlogSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
