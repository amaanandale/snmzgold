import Image from 'next/image';
import Link from 'next/link';
import { getBlogIndex } from '@/content/blogs';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SiteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const revalidate = 3600; // 1 hour ISR

export const metadata = {
  title: 'Buy Gold Bullion in Dubai — Expert Trading Guides & Insights | SNMZ',
  description:
    'Authoritative guides to buying physical 24K gold bullion bars, 10 Tola TT bars, and 999 silver in Dubai. Real-time rates, zero VAT regulations, and Deira trading desk insights.',
  keywords: [
    'buy gold bullion Dubai',
    'physical gold bullion Dubai',
    '10 tola TT bar price UAE',
    '24K gold bars Dubai',
    'tax-free gold bullion UAE',
    'Deira bullion trading desk',
    'buy silver bullion Dubai',
    'wholesale gold bullion Dubai',
  ],
  alternates: {
    canonical: `${SiteConfig.domain}/blogs`,
  },
  openGraph: {
    title: 'Buy Gold Bullion in Dubai — Expert Trading Guides & Insights | SNMZ',
    description:
      'Authoritative guide to physical 24K gold bullion bars, 10 tola TT bars, spot pricing in AED, and Deira trading desk settlement.',
    url: `${SiteConfig.domain}/blogs`,
    type: 'website',
  },
};

export default function BlogsIndexPage() {
  const articles = getBlogIndex();
  const featured = articles[0];
  const rest = articles.slice(1);
  const waUrl = getWhatsAppUrl('blogs');

  // Schema.org Structured Data for SEO Authority
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bullion Knowledge Centre & Dubai Gold Trading Guides',
    description:
      'Authoritative insights on physical gold bullion, 10 tola TT bars, spot prices in AED, and precious metals trading in Dubai.',
    url: `${SiteConfig.domain}/blogs`,
    publisher: {
      '@type': 'JewelryStore',
      name: SiteConfig.name,
      url: SiteConfig.domain,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'F03, Al Fadan Building, Al Dhagaya',
        addressLocality: 'Deira, Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SiteConfig.domain}/blogs/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-[#F4EFE6] text-[#1A1E24] min-h-screen pt-20 sm:pt-24 selection:bg-[#D4AF37]/30 selection:text-[#1A1E24]"
      >
        {/* Inject Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Page Header Banner ─────────────────────────────────────────── */}
        <section className="bg-[#EFE8DC] border-b border-[#E2D7C5] pt-12 pb-14 lg:py-16">
          <div className="section-container">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono text-[#615849] mb-4"
            >
              <Link href="/" className="hover:text-[#997300] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#1A1E24] font-semibold">Blogs &amp; Insights</span>
            </nav>

            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#997300] text-xs font-mono font-semibold uppercase tracking-widest">
                Bullion Knowledge Centre • Dubai
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A1E24] tracking-tight leading-tight mb-4">
              Dubai Gold &amp; Bullion Insights
            </h1>
            <p className="text-[#4A5568] text-sm sm:text-base lg:text-lg font-body max-w-3xl leading-relaxed">
              Authoritative industry analysis, live pricing mechanics, 10 Tola TT bar guides, zero VAT regulations, and institutional bullion trading standards in Dubai, UAE.
            </p>

            {/* Quick Action Navigation Strip */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 pt-4 border-t border-[#E2D7C5]">
              <Link
                href="/shop"
                className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#C5A059] text-[#1A1E24] text-xs font-bold transition-all shadow-xs"
              >
                Shop Bullion Catalogue
              </Link>
              <Link
                href="/gold-prices"
                className="px-3.5 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E2D7C5] hover:border-[#D4AF37] text-[#1A1E24] text-xs font-semibold transition-all"
              >
                Live Gold Rates (24K)
              </Link>
              <Link
                href="/silver-prices"
                className="px-3.5 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E2D7C5] hover:border-[#D4AF37] text-[#1A1E24] text-xs font-semibold transition-all"
              >
                Silver Rates (999)
              </Link>
              <Link
                href="/gallery"
                className="px-3.5 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E2D7C5] hover:border-[#D4AF37] text-[#1A1E24] text-xs font-semibold transition-all"
              >
                Bullion Gallery
              </Link>
            </div>
          </div>
        </section>

        <div className="section-container py-12 lg:py-16">
          {/* ── Featured Bullion Guide ─────────────────────────────────────── */}
          {featured && (
            <div className="mb-14">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#997300] text-xs uppercase tracking-widest font-mono font-bold">
                  Featured Bullion Guide
                </span>
                <span className="text-[#718096] text-xs font-mono">
                  Targeted UAE Market Analysis
                </span>
              </div>

              <Link
                href={`/blogs/${featured.slug}`}
                className="group block bg-[#EFE8DC] border border-[#E2D7C5] rounded-2xl overflow-hidden hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Cover image */}
                  <div className="relative aspect-[16/9] lg:aspect-auto min-h-[260px] lg:min-h-[360px] overflow-hidden bg-[#E8DFC9]">
                    {featured.coverImage ? (
                      <Image
                        src={featured.coverImage}
                        alt={featured.coverImageAlt || featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#997300] font-mono text-sm">{featured.category}</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-[#1A1E24]/85 text-[#D4AF37] text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs">
                        {featured.category}
                      </span>
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-3.5">
                    <div className="flex items-center gap-3 text-xs text-[#718096] font-mono">
                      <span>{featured.readTime}</span>
                      <span>•</span>
                      <span>Verified Trading Desk Guide</span>
                    </div>

                    <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-[#1A1E24] group-hover:text-[#997300] transition-colors duration-200 leading-tight">
                      {featured.title}
                    </h2>

                    <p className="text-[#4A5568] font-body text-sm sm:text-base leading-relaxed line-clamp-3">
                      {featured.summary}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-[#E2D7C5] mt-2">
                      <span className="text-[#997300] text-sm font-semibold group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                        Read full guide <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                      <span className="text-xs text-[#718096] font-mono">
                        Zero VAT • 24K Bullion
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── Complete Bullion & Market Articles Grid ───────────────────── */}
          <div className="mb-8">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1A1E24] tracking-tight mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#D4AF37] rounded-full" />
              <span>Precious Metals &amp; Bullion Trading Archive</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blogs/${article.slug}`}
                  className="group flex flex-col bg-[#EFE8DC] border border-[#E2D7C5] rounded-xl overflow-hidden hover:border-[#D4AF37] hover:shadow-md transition-all duration-300"
                >
                  {/* Cover image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#E8DFC9]">
                    {article.coverImage ? (
                      <Image
                        src={article.coverImage}
                        alt={article.coverImageAlt || article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#997300] text-xs font-mono">{article.category}</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded bg-[#1A1E24]/80 text-[#D4AF37] text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#718096] font-mono mb-2">
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="font-heading font-semibold text-base sm:text-lg text-[#1A1E24] group-hover:text-[#997300] transition-colors duration-200 leading-snug line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-[#4A5568] text-xs sm:text-sm font-body leading-relaxed line-clamp-3 mt-2">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E2D7C5] flex items-center justify-between mt-auto">
                      <span className="text-[#997300] text-xs font-bold group-hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                        Read Article <span>→</span>
                      </span>
                      <span className="text-[11px] text-[#718096] font-mono">
                        SNMZ Desk
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Trading Desk Direct Contact Banner ────────────────────────── */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EFE8DC] border border-[#E2D7C5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#997300] font-bold block mb-1">
                Institutional &amp; Retail Handover
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1E24]">
                Looking to Lock Live Bullion Rates Today?
              </h3>
              <p className="text-[#4A5568] text-xs sm:text-sm font-body mt-1.5 leading-relaxed">
                Connect with our Deira bullion desk to lock spot prices, verify live 10 Tola TT batches, or arrange secure handover at Al Dhagaya.
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#C5A059] text-[#1A1E24] font-bold text-sm transition-all shadow-sm shrink-0 gap-2"
            >
              <span>Chat on WhatsApp Desk</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
