import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogArticle, getBlogIndex } from '@/content/blogs';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';

// Generate static params for all known blog slugs
export async function generateStaticParams() {
  const articles = getBlogIndex();
  return articles.map((a) => ({ slug: a.slug }));
}

// Generate unique metadata per article
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  // Get related articles from same category, excluding current
  const all = getBlogIndex();
  const related = all
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Parse the markdown-ish content into sections
  const sections = parseContent(article.content);

  return (
    <>
      <Header />
      <main id="main-content" className="bg-ivory min-h-screen">

        {/* Article header */}
        <div className="bg-emerald-dark pt-28 pb-12 border-b border-gold/10">
          <div className="section-container max-w-4xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-body text-white/40 mb-6">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-gold transition-colors">Blogs</Link>
              <span>/</span>
              <span className="text-white/60">{article.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <Badge>{article.category}</Badge>
              <span className="text-white/30 text-xs font-body">{article.readTime}</span>
              {article.publishedAt && (
                <span className="text-white/30 text-xs font-body">
                  {new Intl.DateTimeFormat('en-AE', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(article.publishedAt))}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              {article.title}
            </h1>
            <p className="text-white/65 text-lg font-body leading-relaxed max-w-2xl">
              {article.summary}
            </p>
          </div>
        </div>

        {/* Article body */}
        <article className="section-container max-w-4xl py-14">
          {/* Disclaimer for financial content */}
          {(article.category === 'Market' || article.category === 'Education') && (
            <div className="bg-gold/8 border border-gold/20 rounded-xl p-4 mb-8">
              <p className="text-emerald text-sm font-body">
                <strong>Disclaimer:</strong> Information in this article is for educational purposes only and does not constitute financial, investment, or trading advice. Gold prices change daily — see our{' '}
                <Link href="/gold-prices" className="text-gold-antique underline hover:text-gold">live gold rates page</Link> for current AED rates.
              </p>
            </div>
          )}

          {/* Rendered content */}
          <div className="prose-snmz">
            {sections.map((section, i) => (
              <ArticleSection key={i} section={section} />
            ))}
          </div>

          {/* Footer CTA row */}
          <div className="mt-14 pt-8 border-t border-ivory-dark">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/gold-prices"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald text-white rounded-lg text-sm font-body font-medium hover:bg-emerald-light transition-colors"
              >
                View Live Gold Rates →
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-emerald/20 text-emerald rounded-lg text-sm font-body hover:bg-emerald/5 transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="bg-ivory-dark py-12 border-t border-ivory-dark" aria-labelledby="related-heading">
            <div className="section-container max-w-4xl">
              <h2 id="related-heading" className="font-display text-2xl text-emerald mb-7">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blogs/${rel.slug}`}
                    className="block bg-white rounded-xl p-5 border border-ivory-dark hover:border-gold/30 hover:shadow-card-hover transition-all duration-200"
                  >
                    <Badge size="sm">{rel.category}</Badge>
                    <h3 className="text-emerald font-display font-semibold text-base mt-2 leading-snug hover:text-gold-antique transition-colors">
                      {rel.title}
                    </h3>
                    <span className="text-emerald/40 text-xs font-body">{rel.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

// Lightweight markdown-to-section parser
function parseContent(markdown) {
  if (!markdown) return [];
  const lines = markdown.trim().split('\n');
  const sections = [];
  let current = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current) sections.push(current);
      current = { type: 'h2', heading: line.slice(3), body: [] };
    } else if (line.startsWith('### ')) {
      if (current) sections.push(current);
      current = { type: 'h3', heading: line.slice(4), body: [] };
    } else {
      if (!current) current = { type: 'body', heading: null, body: [] };
      current.body.push(line);
    }
  }
  if (current) sections.push(current);
  return sections;
}

function ArticleSection({ section }) {
  const bodyText = section.body.join('\n').trim();

  return (
    <div className="mb-8">
      {section.heading && section.type === 'h2' && (
        <h2 className="font-display text-2xl text-emerald mb-4 mt-8 first:mt-0">
          {section.heading}
        </h2>
      )}
      {section.heading && section.type === 'h3' && (
        <h3 className="font-display text-xl text-emerald/80 mb-3 mt-6">
          {section.heading}
        </h3>
      )}
      {bodyText && <BodyRenderer text={bodyText} />}
    </div>
  );
}

function BodyRenderer({ text }) {
  const blocks = text.split('\n\n').filter(Boolean);

  return (
    <>
      {blocks.map((block, i) => {
        // Table
        if (block.includes('|---|')) {
          return <TableRenderer key={i} raw={block} />;
        }
        // Blockquote
        if (block.startsWith('>')) {
          return (
            <blockquote key={i} className="border-l-4 border-gold/40 pl-4 my-4 italic text-emerald/70 font-body text-sm leading-relaxed">
              {block.replace(/^> /gm, '')}
            </blockquote>
          );
        }
        // Checklist
        if (block.includes('- [ ]')) {
          const items = block.split('\n').filter(Boolean);
          return (
            <ul key={i} className="space-y-1.5 my-4">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-emerald font-body text-sm">
                  <span className="mt-0.5 w-4 h-4 border border-emerald/30 rounded flex-shrink-0" />
                  <span>{item.replace('- [ ] ', '')}</span>
                </li>
              ))}
            </ul>
          );
        }
        // Bullet list
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(Boolean);
          return (
            <ul key={i} className="space-y-1.5 list-disc list-inside my-4">
              {items.map((item, j) => (
                <li key={j} className="text-emerald/80 font-body text-base leading-relaxed">
                  {renderInline(item.replace(/^- /, ''))}
                </li>
              ))}
            </ul>
          );
        }
        // Numbered list
        if (/^\d+\./.test(block)) {
          const items = block.split('\n').filter(Boolean);
          return (
            <ol key={i} className="space-y-1.5 list-decimal list-inside my-4">
              {items.map((item, j) => (
                <li key={j} className="text-emerald/80 font-body text-base leading-relaxed">
                  {renderInline(item.replace(/^\d+\. /, ''))}
                </li>
              ))}
            </ol>
          );
        }
        // Horizontal rule
        if (block === '---') {
          return <hr key={i} className="my-8 border-ivory-dark" />;
        }
        // Paragraph
        return (
          <p key={i} className="text-emerald/80 font-body text-base leading-relaxed mb-4">
            {renderInline(block)}
          </p>
        );
      })}
    </>
  );
}

function renderInline(text) {
  // Handle **bold**, *italic*, [link](url), `code`
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="bg-ivory-dark text-emerald text-sm px-1.5 py-0.5 rounded">{part.slice(1, -1)}</code>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const isExternal = linkMatch[2].startsWith('http');
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="text-gold-antique underline hover:text-gold transition-colors"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function TableRenderer({ raw }) {
  const rows = raw.split('\n').filter((r) => r.includes('|') && !r.match(/^[|:?\-]+$/));
  if (rows.length < 2) return null;
  const [header, ...body] = rows;
  const headers = header.split('|').map((h) => h.trim()).filter(Boolean);
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-ivory-dark">
      <table className="w-full text-sm font-body">
        <thead className="bg-ivory-dark">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-emerald font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => {
            const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
            return (
              <tr key={ri} className="border-t border-ivory-dark even:bg-ivory/50">
                {cells.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-emerald/80">{cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
