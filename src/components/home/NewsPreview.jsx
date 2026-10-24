/**
 * Homepage — News preview section.
 * Links to /gold-news and /economic-news.
 * Shows the news pages, not live articles (avoids extra API calls on homepage).
 * Server Component.
 */
export function NewsPreview() {
  const newsCategories = [
    {
      href: '/gold-news',
      label: 'Gold News',
      icon: '📈',
      description:
        'Current news on gold prices, bullion markets, precious metals, and UAE gold trade developments.',
      topics: ['Gold Prices', 'Bullion Markets', 'UAE Gold Trade', 'Precious Metals'],
      color: 'from-emerald-light/30 to-emerald-dark/50',
    },
    {
      href: '/economic-news',
      label: 'Economic News',
      icon: '🏦',
      description:
        'UAE economic developments, Dubai business news, monetary policy, and global market updates.',
      topics: ['UAE Economy', 'Dubai Business', 'Central Bank', 'Global Markets'],
      color: 'from-emerald/30 to-emerald-dark/50',
    },
  ];

  return (
    <section
      id="news"
      className="section-padding bg-emerald"
      aria-labelledby="news-preview-heading"
    >
      <div className="section-container">
        <div className="mb-10">
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-body font-semibold block mb-2">
            News & Analysis
          </span>
          <h2
            id="news-preview-heading"
            className="font-display text-3xl sm:text-4xl text-white"
          >
            Stay Informed
          </h2>
          <div className="w-12 h-0.5 bg-gold/40 mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {newsCategories.map((cat) => (
            <a
              key={cat.href}
              href={cat.href}
              className={`group relative block rounded-2xl border border-white/10 overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-gold`}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />

              <div className="relative p-8">
                <span className="text-4xl mb-5 block" aria-hidden="true">{cat.icon}</span>
                <h3 className="font-display text-2xl text-white mb-3 group-hover:text-gold-light transition-colors">
                  {cat.label}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-5">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 bg-white/8 rounded-full text-white/50 text-xs font-body border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-gold/70 group-hover:text-gold text-sm font-body transition-colors">
                  Read {cat.label} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
