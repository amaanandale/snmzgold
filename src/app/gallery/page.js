import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SiteConfig } from '@/config/site';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

export const metadata = {
  title: 'Precious Metals & Bullion Gallery | SNMZ Gold & Diamonds Dubai',
  description:
    'Visual showcase of physical investment-grade 24K gold bars, 10 tola TT bars, minted ingots, and fine silver bullion in Dubai, UAE.',
  alternates: {
    canonical: `${SiteConfig.domain}/gallery`,
  },
};

const GALLERY_ITEMS = [
  {
    id: 1,
    title: '1 Kilogram 999.9 Fine Gold Cast Bar',
    category: 'Gold Bullion',
    weight: '1,000 g',
    purity: '999.9 Fine Gold',
    image: '/images/products/gold-kilo-bar.jpg',
    description: 'High-purity 1 kg physical gold bullion bar with serial identification and official refinery hallmarks.',
  },
  {
    id: 2,
    title: '10 Tola TT Gold Bar (GCC Standard)',
    category: 'Gold Bullion',
    weight: '116.64 g',
    purity: '999.0 Fine Gold',
    image: '/images/products/gold-minted-bar.jpg',
    description: 'The definitive physical bullion format of Dubai and GCC markets, prized for exceptional liquidity.',
  },
  {
    id: 3,
    title: '1 Kilogram Physical Fine Silver Ingot',
    category: 'Silver Bullion',
    weight: '1,000 g',
    purity: '999.0 Fine Silver',
    image: '/images/products/silver-kilo-bar.jpg',
    description: 'Investment-grade physical silver bar designed for precious metals treasury allocation.',
  },
  {
    id: 4,
    title: 'Institutional Gold Bullion Bars',
    category: 'Gold Bullion',
    weight: 'Multi-Denomination',
    purity: '999.9 Fine Gold',
    image: '/images/gold-bar-close.jpg',
    description: 'Physical gold bars inspected and verified to international assay specifications in Dubai.',
  },
  {
    id: 5,
    title: 'Vault Precious Metals Holdings',
    category: 'Trading & Vaulting',
    weight: 'Investment-Grade',
    purity: 'Physical Metals',
    image: '/images/hero-gold-bars.jpg',
    description: 'Secure physical bullion inventory managed under strict Dubai compliance and traceability protocols.',
  },
  {
    id: 6,
    title: '100 Gram Minted Fine Gold Bar',
    category: 'Gold Bullion',
    weight: '100 g',
    purity: '999.9 Fine Gold',
    image: '/images/products/gold-minted-bar.jpg',
    description: 'Tamper-evident CertiCard packaging for portable wealth preservation and physical delivery.',
  },
];

export default function GalleryPage() {
  const galleryWaUrl = getWhatsAppUrl('gallery');
  const officePhone = getOfficePhoneUrl();

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
            <span className="text-gold font-medium">Bullion Gallery</span>
          </nav>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-mono uppercase tracking-widest text-gold">
              Visual Archive
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Bullion &amp; Metals <span className="text-gold italic font-serif">Gallery</span>
          </h1>

          <p className="text-white/70 font-body text-sm sm:text-base leading-relaxed">
            A curated showcase of our physical precious metal products traded at our Dubai bullion desk.
            For live availability or specific bar requirements, contact our specialists directly.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-emerald-light/40 border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-emerald-dark/60 overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-mono tracking-wider font-semibold px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                  {item.category}
                </span>
                <span className="absolute top-3 right-3 text-xs font-mono text-white/90 bg-emerald-dark/80 px-2 py-0.5 rounded border border-white/10">
                  {item.weight}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-gold transition-colors">
                  {item.title}
                </h2>
                <div className="text-xs text-gold/80 font-mono mb-3">{item.purity}</div>
                <p className="text-xs text-white/70 line-clamp-2 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <a
                    href={galleryWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-lg bg-gold/15 hover:bg-gold text-gold hover:text-emerald-dark border border-gold/30 text-xs font-body font-semibold transition-all"
                  >
                    Enquire About Bar
                  </a>
                  <Link
                    href="/shop"
                    className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-xs transition-colors"
                  >
                    View in Shop →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Enquiry Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-light/30 to-emerald-dark border border-gold/25 text-center max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">
            Looking for Custom Bar Sizes or Wholesale Quantities?
          </h3>
          <p className="text-xs sm:text-sm text-white/75 mb-6 max-w-xl mx-auto">
            Our bullion desk in Al Dhagaya, Dubai facilitates wholesale allocations, institutional cast bars, and secure settlement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={galleryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
            >
              Enquire on WhatsApp
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
