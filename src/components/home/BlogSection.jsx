import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Placeholder blog posts — replace with CMS/database content in a future phase.
const placeholderPosts = [
  {
    id: 1,
    category: 'Market Insight',
    title: 'Understanding 24K Gold TT Bars: A Buyer\'s Guide',
    excerpt: 'A comprehensive overview of what TT bars are, how they differ from other gold formats, and why they remain the preferred instrument for institutional gold buyers.',
    readTime: '5 min read',
    date: null, // No date until real content is provided
    featured: true,
  },
  {
    id: 2,
    category: 'Compliance',
    title: 'KYC & AML Requirements for Gold Trading in India',
    excerpt: 'An introduction to the regulatory framework governing gold trading — what buyers and sellers need to know before transacting.',
    readTime: '4 min read',
    date: null,
    featured: false,
  },
  {
    id: 3,
    category: 'Education',
    title: 'How Gold Purity is Verified: Assay Standards Explained',
    excerpt: 'From fire assay to XRF testing — understanding how gold fineness is measured and what 999.9 really means.',
    readTime: '3 min read',
    date: null,
    featured: false,
  },
];

export function BlogSection() {
  const [featured, ...rest] = placeholderPosts;

  return (
    <section
      id="insights"
      className="section-padding bg-ivory"
      aria-labelledby="blog-heading"
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            label="Blog & Market Insights"
            title={<span id="blog-heading">Insights for Gold Buyers</span>}
            subtitle="Education, compliance and market context — curated for professionals in gold trading."
            align="left"
            light
          />
          <Button href="#insights" variant="outline" size="sm" className="shrink-0 text-emerald border-emerald/40 hover:bg-emerald/5">
            View All Insights
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured post */}
          <article
            className="lg:col-span-2 card-ivory flex flex-col gap-5 hover:shadow-card-hover transition-shadow duration-300 group"
            aria-label={`Featured article: ${featured.title}`}
          >
            {/* Placeholder image area */}
            <div className="aspect-[16/7] rounded-xl bg-gradient-to-br from-emerald to-emerald-light flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(45deg, #DFAF24 25%, transparent 25%, transparent 75%, #DFAF24 75%), linear-gradient(45deg, #DFAF24 25%, transparent 25%, transparent 75%, #DFAF24 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }} />
              <span className="text-gold/30 font-display text-4xl font-bold">SNMZ</span>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-white/30 italic font-body">[Featured image to be provided]</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge>{featured.category}</Badge>
              <span className="text-emerald/40 text-xs font-body">{featured.readTime}</span>
            </div>
            <h3 className="font-display font-semibold text-emerald text-xl lg:text-2xl leading-tight group-hover:text-gold-antique transition-colors duration-200">
              {featured.title}
            </h3>
            <p className="text-emerald/60 font-body text-sm leading-relaxed">{featured.excerpt}</p>
            <div className="mt-auto">
              <span className="text-xs text-emerald/30 italic font-body">[Publication date to be set when content is ready]</span>
            </div>
          </article>

          {/* Secondary posts */}
          <div className="flex flex-col gap-5">
            {rest.map((post) => (
              <article
                key={post.id}
                className="card-ivory flex flex-col gap-3 hover:shadow-card-hover transition-shadow duration-300 group flex-1"
                aria-label={`Article: ${post.title}`}
              >
                <div className="flex items-center gap-2">
                  <Badge>{post.category}</Badge>
                  <span className="text-emerald/40 text-xs font-body">{post.readTime}</span>
                </div>
                <h3 className="font-display font-semibold text-emerald text-base leading-snug group-hover:text-gold-antique transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-emerald/60 font-body text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
              </article>
            ))}
            <p className="text-xs text-emerald/30 italic font-body px-1">[Blog posts are placeholders — replace with real articles before publishing]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
