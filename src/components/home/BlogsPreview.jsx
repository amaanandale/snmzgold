import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

/**
 * Homepage — Blog / Knowledge Centre preview.
 * Receives pre-fetched article data from page.js.
 * Server Component.
 *
 * @param {{ articles: import('@/content/blogs').BlogArticle[] }} props
 */
export function BlogsPreview({ articles }) {
  return (
    <section
      id="insights"
      className="section-padding bg-ivory"
      aria-labelledby="blogs-preview-heading"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <span className="text-gold-antique text-xs uppercase tracking-[0.25em] font-body font-semibold block mb-2">
              Knowledge Centre
            </span>
            <h2
              id="blogs-preview-heading"
              className="font-display text-3xl sm:text-4xl text-emerald"
            >
              Dubai Gold & Market Insights
            </h2>
            <div className="w-12 h-0.5 bg-gold/40 mt-3" />
          </div>
          <Link
            href="/blogs"
            className="self-start sm:self-auto text-gold-antique hover:text-gold text-sm font-body transition-colors"
          >
            All articles →
          </Link>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="group block bg-white border border-ivory-dark rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Cover image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                {article.coverImage ? (
                  <Image
                    src={article.coverImage}
                    alt={article.coverImageAlt || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-emerald/5 flex items-center justify-center">
                    <span className="text-emerald/15 text-xs font-body">{article.category}</span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge size="sm">{article.category}</Badge>
                  <span className="text-emerald/35 text-xs font-body">{article.readTime}</span>
                </div>
                <h3 className="font-display text-lg text-emerald group-hover:text-gold-antique transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-emerald/55 text-sm font-body leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
                <span className="text-gold-antique text-xs font-body mt-3 block group-hover:text-gold transition-colors">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-emerald/20 text-emerald rounded-xl text-sm font-body hover:bg-emerald/5 transition-colors"
          >
            Browse All 10 Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
