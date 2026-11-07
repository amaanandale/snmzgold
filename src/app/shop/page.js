import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SiteConfig } from '@/config/site';
import { ShopCatalog } from '@/components/shop/ShopCatalog';

export const metadata = {
  title: 'Shop Gold & Silver Bullion Bars | SNMZ Gold & Diamonds Dubai',
  description:
    'Browse investment-grade 24K gold bars, 10 tola TT bars, minted ingots, and 999 fine silver bullion. Physical delivery and trade execution in Dubai, UAE.',
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
      <main id="main-content" className="min-h-screen bg-emerald-dark pt-28 lg:pt-36 pb-20">
        {/* Header Banner */}
        <section className="section-container mb-12">
          {/* Breadcrumb navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs font-body text-white/50 mb-6"
          >
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-white/30" aria-hidden="true">/</span>
            <span className="text-gold font-medium">Shop Catalogue</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-gold">
                Precious Metals Catalogue
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Physical Bullion <span className="text-gold italic font-serif">Catalogue</span>
            </h1>

            <p className="text-white/70 font-body text-sm sm:text-base leading-relaxed">
              Investment-grade 24K gold bars, traditional 10 tola TT bars, and 999 pure silver ingots.
              Transparent trading settled against live spot rates from our Dubai bullion desk.
            </p>
          </div>
        </section>

        {/* Catalogue & Filter Section */}
        <section className="section-container">
          <ShopCatalog />
        </section>
      </main>
      <Footer />
    </>
  );
}
