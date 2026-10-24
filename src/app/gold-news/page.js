import { fetchGoldNews } from '@/lib/news';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const revalidate = 1800;

export const metadata = {
  title: 'Gold News — Latest Gold Market Updates | SNMZ',
  description:
    'Latest news on gold prices, bullion markets, precious metals, and UAE gold trade developments. Updated regularly from verified news sources.',
  openGraph: {
    title: 'Gold News | SNMZ Gold & Diamonds',
    description: 'Latest gold market news and precious metals updates.',
  },
};

export default async function GoldNewsPage() {
  const { articles, status, fetchedAt, message } = await fetchGoldNews({ max: 10 });

  return (
    <>
      <Header />
      <main id="main-content" className="bg-emerald-dark min-h-screen">

        {/* Page header */}
        <section className="pt-32 pb-14 bg-hero-gradient border-b border-gold/10">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
              <span className="text-gold/80 text-xs font-body font-semibold uppercase tracking-[0.25em]">
                Gold Markets
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-white mb-3">Gold News</h1>
            <p className="text-white/55 font-body text-lg max-w-2xl">
              Current news and analysis on gold prices, bullion markets, precious metals, and UAE gold trade.
            </p>
            {fetchedAt && (
              <p className="text-white/30 text-xs font-body mt-3">
                Last fetched: {new Intl.DateTimeFormat('en-AE', {
                  day: 'numeric', month: 'short', year: 'numeric',
                  hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dubai',
                }).format(new Date(fetchedAt))} (Dubai time)
              </p>
            )}
          </div>
        </section>

        <div className="section-container py-14">

          {/* Status states */}
          {status === 'unconfigured' && (
            <SetupRequired
              title="News API Not Configured"
              steps={[
                'Register for a free API key at gnews.io',
                'Add GNEWS_API_KEY=your_key to your .env.local file',
                'Restart the development server',
                'Up to 100 free requests per day on the free tier',
              ]}
            />
          )}

          {status === 'error' && (
            <ErrorState message={message} />
          )}

          {status === 'live' && articles.length === 0 && (
            <EmptyState message="No gold news articles found. Try again shortly." />
          )}

          {status === 'live' && articles.length > 0 && (
            <NewsGrid articles={articles} accentColor="gold" />
          )}

          {/* Related links */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs font-body mb-4">Also on SNMZ</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Live Gold Rates', href: '/gold-prices' },
                { label: 'Economic News', href: '/economic-news' },
                { label: 'Why Dubai?', href: '/why-dubai' },
                { label: 'Gold Education Blog', href: '/blogs' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-sm font-body hover:border-gold/25 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function NewsGrid({ articles }) {
  const [featured, ...rest] = articles;

  return (
    <div>
      {/* Featured story */}
      {featured && (
        <div className="mb-10">
          <p className="text-gold text-xs uppercase tracking-[0.25em] font-body font-semibold mb-4">
            Featured Story
          </p>
          <NewsCard article={featured} featured />
        </div>
      )}

      {/* Latest feed */}
      {rest.length > 0 && (
        <>
          <p className="text-white/40 text-xs uppercase tracking-widest font-body mb-5">
            Latest Stories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article) => (
              <NewsCard key={article.url} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function NewsCard({ article, featured = false }) {
  const publishedDate = article.publishedAt
    ? new Intl.DateTimeFormat('en-AE', {
        day: 'numeric', month: 'short', year: 'numeric',
        timeZone: 'Asia/Dubai',
      }).format(new Date(article.publishedAt))
    : null;

  return (
    <article
      className={`group bg-white/5 border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 ${
        featured ? 'border-gold/20 shadow-gold' : 'border-white/8'
      }`}
    >
      {/* Image */}
      {article.imageUrl && (
        <div className={`bg-emerald-light/20 overflow-hidden ${featured ? 'aspect-[16/7]' : 'aspect-[16/9]'}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className={`p-5 ${featured ? 'sm:p-7' : ''}`}>
        {/* Source + date */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gold/70 text-xs font-body font-medium">{article.source}</span>
          {publishedDate && (
            <>
              <span className="text-white/20" aria-hidden="true">·</span>
              <time className="text-white/35 text-xs font-body" dateTime={article.publishedAt}>
                {publishedDate}
              </time>
            </>
          )}
        </div>

        <h2 className={`font-display text-white leading-snug mb-3 group-hover:text-gold-light transition-colors duration-200 ${featured ? 'text-xl sm:text-2xl' : 'text-base'}`}>
          {article.title}
        </h2>

        {article.summary && (
          <p className="text-white/50 font-body text-sm leading-relaxed mb-4 line-clamp-3">
            {article.summary}
          </p>
        )}

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gold/70 hover:text-gold text-xs font-body font-medium transition-colors focus-visible:ring-1 focus-visible:ring-gold rounded"
          aria-label={`Read original article: ${article.title}`}
        >
          Read original article
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}

function SetupRequired({ title, steps }) {
  return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl" aria-hidden="true">⚙️</span>
      </div>
      <h2 className="font-display text-2xl text-white mb-3">{title}</h2>
      <p className="text-white/50 font-body text-sm mb-6">
        To display live news, configure the GNews API key. This is a free service — no credit card required.
      </p>
      <ol className="text-left space-y-2 mb-6">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3 text-white/60 text-sm font-body">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-semibold">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
      <a
        href="https://gnews.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/15 border border-gold/25 text-gold rounded-lg text-sm font-body hover:bg-gold/25 transition-colors"
      >
        Get Free API Key at GNews.io
        <ExternalIcon />
      </a>
      <p className="text-white/25 text-xs font-body mt-4">
        See <code className="text-white/35">.env.example</code> for exact variable names.
      </p>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="max-w-lg mx-auto text-center py-14">
      <p className="text-white/40 text-sm font-body mb-2">Unable to load news at this time.</p>
      {message && <p className="text-white/25 text-xs font-body">{message}</p>}
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="max-w-lg mx-auto text-center py-14">
      <p className="text-white/40 text-sm font-body">{message}</p>
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
