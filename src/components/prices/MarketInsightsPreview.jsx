import { Badge } from '@/components/ui/Badge';

/**
 * Market insights preview — editorial section linking to future Knowledge Centre.
 * Server Component. No fabricated news or expert quotes.
 */
const topics = [
  {
    tag: 'Education',
    title: 'Understanding 24K, 22K, 21K and 18K Gold',
    description:
      'A clear breakdown of what karat means, how purity is measured, and why it matters when buying or trading gold in the UAE and global markets.',
  },
  {
    tag: 'Market',
    title: 'How Gold Prices Are Determined in the UAE',
    description:
      'UAE gold pricing is influenced by international spot rates (LBMA), USD/AED exchange rates, regional premiums and market liquidity. This guide explains each component.',
  },
  {
    tag: 'Market',
    title: 'Factors That Influence Gold Prices',
    description:
      'From central bank policies and US dollar strength to geopolitical events and seasonal demand — explore the forces that move gold markets globally and in the Gulf region.',
  },
  {
    tag: 'Guide',
    title: 'Buying Gold in Dubai: What You Should Know',
    description:
      'Dubai is one of the world\'s largest gold trading centres. Learn about purity standards, pricing transparency, VAT considerations and how to trade with confidence.',
  },
];

export function MarketInsightsPreview() {
  return (
    <section
      className="section-padding bg-ivory"
      aria-labelledby="insights-preview-heading"
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="section-label text-emerald block mb-2">Knowledge Centre</span>
            <h2
              id="insights-preview-heading"
              className="font-display text-3xl sm:text-4xl text-emerald leading-tight"
            >
              Market Insights
            </h2>
            <div className="gold-rule mt-3" />
            <p className="text-emerald/60 font-body text-sm mt-3 max-w-xl">
              Educational guides on gold purity, pricing and market dynamics —
              written for buyers, traders and institutions.
            </p>
          </div>
          <span className="text-emerald/35 text-xs italic font-body shrink-0">
            [Full Knowledge Centre — coming soon]
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="card-ivory group hover:shadow-card-hover transition-shadow duration-300 cursor-pointer"
              aria-label={topic.title}
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge>{topic.tag}</Badge>
                <span className="text-emerald/30 text-xs font-body italic">
                  Coming soon
                </span>
              </div>
              <h3 className="font-display font-semibold text-emerald text-base leading-snug mb-2 group-hover:text-gold-antique transition-colors duration-200">
                {topic.title}
              </h3>
              <p className="text-emerald/60 text-sm font-body leading-relaxed">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
