import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

// These are placeholder news items — replace with real API data in a future integration phase.
const placeholderNews = [
  {
    id: 1,
    source: '[News Source]',
    category: 'Gold Market',
    title: 'Gold Price Watch: Key Factors Driving Bullion Markets',
    summary: 'A round-up of the global macroeconomic factors currently influencing international gold spot prices and what they mean for UAE buyers.',
    timestamp: null,
  },
  {
    id: 2,
    source: '[News Source]',
    category: 'UAE Market',
    title: "Dubai's Gold Market: Trends and Outlook",
    summary: 'An overview of the UAE gold trading landscape, pricing dynamics and compliance considerations for institutional and retail gold buyers in Dubai.',
    timestamp: null,
  },
  {
    id: 3,
    source: '[News Source]',
    category: 'Investment',
    title: 'Central Bank Gold Reserves: Trends and Implications for the Market',
    summary: 'How central bank accumulation of physical gold continues to shape supply dynamics and long-term price trajectories in the bullion sector.',
    timestamp: null,
  },
  {
    id: 4,
    source: '[News Source]',
    category: 'Guide',
    title: 'Buying Gold in the UAE: Purity, VAT and What You Should Know',
    summary: 'A practical guide to gold purity standards, VAT implications, and transparency expectations when purchasing gold bars or jewellery in the UAE.',
    timestamp: null,
  },
];

export function NewsSection() {
  return (
    <section
      id="news"
      className="section-padding bg-emerald-dark"
      aria-labelledby="news-heading"
    >
      <div className="section-container">
        <SectionHeading
          label="Latest Gold News"
          title={<span id="news-heading">Market & Industry Updates</span>}
          subtitle="Stay informed with curated news on gold markets, regulation and investment trends. [Live news integration — future phase.]"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {placeholderNews.map((item, i) => (
            <article
              key={item.id}
              className="card-dark flex flex-col gap-4 hover:scale-[1.01] transition-transform duration-300 group cursor-pointer"
              aria-label={`News: ${item.title}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Badge>{item.category}</Badge>
                </div>
                <span className="text-white/30 text-xs font-body italic">{item.source}</span>
              </div>
              <h3 className="font-display font-semibold text-white text-base leading-snug group-hover:text-gold transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/55 text-sm font-body leading-relaxed">{item.summary}</p>
              <div className="mt-auto flex items-center gap-2">
                <span className="text-white/25 text-xs italic font-body">[Date to be populated from live feed]</span>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-white/25 italic font-body mt-8">
          News items are illustrative placeholders. Live news integration will be implemented in a future phase.
        </p>
      </div>
    </section>
  );
}
