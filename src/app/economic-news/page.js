import { fetchEconomicNews } from '@/lib/news';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const revalidate = 1800;

export const metadata = {
  title: 'Economic News — UAE & Global Markets | SNMZ',
  description:
    'UAE economic news, Dubai business developments, monetary policy, and global economic updates relevant to precious metals and international trade.',
  openGraph: {
    title: 'Economic News | SNMZ Gold & Diamonds',
    description: 'UAE and global economic news relevant to gold and precious metals.',
  },
};

const TOPICS = ['All', 'UAE Economy', 'Dubai', 'Central Bank', 'Global'];

export default async function EconomicNewsPage() {
  const { articles, status, fetchedAt, message } = await fetchEconomicNews({ max: 10 });

  return (
    <>
      <Header />
      <main id="main-content" className="bg-ivory min-h-screen">

        {/* Page header */}
        <section className="bg-hero-gradient pt-32 pb-14 border-b border-gold/10">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
              <span className="text-gold/80 text-xs font-body font-semibold uppercase tracking-[0.25em]">
                Markets & Economy
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-white mb-3">
              Economic News
            </h1>
            <p className="text-white/55 font-body text-lg max-w-2xl">
              UAE economic developments, Dubai business news, monetary policy, and global economic updates affecting precious metals and international trade.
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
          {/* Topic filter — visual only (server rendered) */}
          <div className="flex flex-wrap gap-2 mb-10" role="navigation" aria-label="Topic filter">
            {TOPICS.map((topic) => (
              <span
                key={topic}
                className={`px-4 py-1.5 rounded-full text-xs font-body font-medium border transition-colors ${
                  topic === 'All'
                    ? 'bg-emerald text-white border-emerald'
                    : 'bg-white border-ivory-dark text-emerald/60 hover:border-gold/30'
                }`}
              >
                {topic}
              </span>
            ))}
          </div>

          {status === 'unconfigured' && (
            <SetupRequired />
          )}

          {status === 'error' && (
            <ErrorState message={message} />
          )}

          {status === 'live' && articles.length === 0 && (
            <EmptyState />
          )}

          {status === 'live' && articles.length > 0 && (
            <EconomicNewsGrid articles={articles} />
          )}

          {/* Related links */}
          <div className="mt-14 pt-8 border-t border-ivory-dark">
            <p className="text-emerald/40 text-xs font-body mb-4">Also from SNMZ</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Gold News', href: '/gold-news' },
                { label: 'Live Gold Rates', href: '/gold-prices' },
                { label: 'Why Dubai?', href: '/why-dubai' },
                { label: 'Gold Education', href: '/blogs' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-white border border-ivory-dark rounded-lg text-emerald/60 text-sm font-body hover:border-gold/30 hover:text-emerald transition-colors"
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

function EconomicNewsGrid({ articles }) {
  const [featured, ...rest] = articles;

  return (
    <div>
      {featured && (
        <div className="mb-10">
          <p className="text-gold-antique text-xs uppercase tracking-[0.25em] font-body font-semibold mb-4">
            Featured Story
          </p>
          <EconCard article={featured} featured />
        </div>
      )}

      {rest.length > 0 && (
        <>
          <p className="text-emerald/35 text-xs uppercase tracking-widest font-body mb-5">
            Latest Economic News
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article) => (
              <EconCard key={article.url} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function EconCard({ article, featured = false }) {
  const publishedDate = article.publishedAt
    ? new Intl.DateTimeFormat('en-AE', {
        day: 'numeric', month: 'short', year: 'numeric',
        timeZone: 'Asia/Dubai',
      }).format(new Date(article.publishedAt))
    : null;

  return (
    <article
      className={`group bg-white border rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 ${
        featured ? 'border-gold/20 shadow-card' : 'border-ivory-dark'
      }`}
    >
      {article.imageUrl && (
        <div className={`overflow-hidden bg-ivory ${featured ? 'aspect-[16/7]' : 'aspect-[16/9]'}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gold-antique text-xs font-body font-medium">{article.source}</span>
          {publishedDate && (
            <>
              <span className="text-emerald/20" aria-hidden="true">·</span>
              <time className="text-emerald/40 text-xs font-body" dateTime={article.publishedAt}>
                {publishedDate}
              </time>
            </>
          )}
        </div>

        <h2 className={`font-display text-emerald leading-snug mb-3 group-hover:text-gold-antique transition-colors duration-200 ${featured ? 'text-xl sm:text-2xl' : 'text-base'}`}>
          {article.title}
        </h2>

        {article.summary && (
          <p className="text-emerald/60 font-body text-sm leading-relaxed mb-4 line-clamp-3">
            {article.summary}
          </p>
        )}

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gold-antique hover:text-gold text-xs font-body font-medium transition-colors"
          aria-label={`Read original article: ${article.title}`}
        >
          Read original article
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}

function SetupRequired() {
  return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl" aria-hidden="true">⚙️</span>
      </div>
      <h2 className="font-display text-2xl text-emerald mb-3">News API Not Configured</h2>
      <p className="text-emerald/60 font-body text-sm mb-6">
        To display live economic news, configure the GNews API key in <code className="bg-ivory-dark px-1.5 py-0.5 rounded">.env.local</code>.
      </p>
      <div className="text-left bg-ivory rounded-xl p-5 mb-6 space-y-2">
        {[
          '1. Register free at gnews.io — no credit card required',
          '2. Copy your API key from the dashboard',
          '3. Add: GNEWS_API_KEY=your_key_here to .env.local',
          '4. Restart the dev server',
        ].map((step) => (
          <p key={step} className="text-emerald/70 text-sm font-body">{step}</p>
        ))}
      </div>
      <a
        href="https://gnews.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald text-white rounded-lg text-sm font-body hover:bg-emerald-light transition-colors"
      >
        Get Free API Key at GNews.io <ExternalIcon />
      </a>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="max-w-lg mx-auto text-center py-14">
      <p className="text-emerald/50 text-sm font-body mb-2">Unable to load economic news at this time.</p>
      {message && <p className="text-emerald/30 text-xs font-body">{message}</p>}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="max-w-lg mx-auto text-center py-14">
      <p className="text-emerald/50 text-sm font-body">No economic news articles found. Please try again shortly.</p>
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
