import Image from 'next/image';
import Link from 'next/link';
import { getBlogIndex } from '@/content/blogs';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';

export const metadata = {
  title: 'Blog — Dubai Gold & Precious Metals',
  description:
    'Expert articles on Dubai\'s gold market, gold purity, shopping guides, price guides, and the history of gold trading in the UAE.',
  openGraph: {
    title: 'Blog | SNMZ Gold & Diamonds',
    description: 'Expert articles on Dubai\'s gold market, trading, and heritage.',
  },
};

export default function BlogsIndexPage() {
  const articles = getBlogIndex();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <Header />
      <main id="main-content" className="bg-emerald-dark min-h-screen">

        {/* Page header */}
        <section className="pt-32 pb-16 bg-hero-gradient border-b border-gold/10">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
              <span className="text-gold/80 text-xs font-body font-semibold uppercase tracking-[0.25em]">
                Knowledge Centre
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
              Dubai Gold & Precious Metals
            </h1>
            <p className="text-white/60 text-lg font-body max-w-2xl">
              Expert articles on gold purity, Dubai&apos;s gold market, price guides, shopping tips, and the heritage of gold trading in the UAE.
            </p>
          </div>
        </section>

        <div className="section-container py-16">

          {/* Featured article */}
          {featured && (
            <div className="mb-14">
              <p className="text-gold text-xs uppercase tracking-[0.25em] font-body font-semibold mb-5">
                Featured Article
              </p>
              <Link
                href={`/blogs/${featured.slug}`}
                className="group block bg-white/5 border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/35 transition-all duration-300 hover:shadow-gold"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Cover image */}
                  <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                    {featured.coverImage ? (
                      <Image
                        src={featured.coverImage}
                        alt={featured.coverImageAlt || featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-emerald-light/30 flex items-center justify-center">
                        <span className="text-gold/25 text-sm font-body">{featured.category}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                    <Badge>{featured.category}</Badge>
                    <h2 className="font-display text-2xl lg:text-3xl text-white group-hover:text-gold-light transition-colors duration-200 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-white/60 font-body leading-relaxed">{featured.summary}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-white/30 text-xs font-body">{featured.readTime}</span>
                      <span className="text-gold text-sm font-body font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Read article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blogs/${article.slug}`}
                className="group block bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:border-gold/25 transition-all duration-300"
              >
                {/* Cover image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.coverImageAlt || article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-emerald-light/20 flex items-center justify-center">
                      <span className="text-gold/20 text-xs font-body">{article.category}</span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Badge size="sm">{article.category}</Badge>
                    <span className="text-white/25 text-xs font-body">{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg text-white group-hover:text-gold-light transition-colors duration-200 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-white/50 text-sm font-body leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                  <span className="text-gold/70 text-xs font-body group-hover:text-gold transition-colors duration-200 mt-1">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
