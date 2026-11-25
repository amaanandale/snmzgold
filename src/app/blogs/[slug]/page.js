import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogArticle, getBlogIndex } from '@/content/blogs';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SiteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

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
    title: article.metaTitle || `${article.title} | SNMZ Gold & Diamonds`,
    description: article.metaDescription || article.summary,
    alternates: {
      canonical: `${SiteConfig.domain}/blogs/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.summary,
      type: 'article',
      url: `${SiteConfig.domain}/blogs/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      images: article.coverImage
        ? [
            {
              url: `${SiteConfig.domain}${article.coverImage}`,
              width: 1200,
              height: 630,
              alt: article.coverImageAlt || article.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  // Get related articles from the index, excluding current
  const all = getBlogIndex();
  const related = all
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Parse the markdown content into structured sections
  const sections = parseContent(article.content);
  const waUrl = getWhatsAppUrl('blog_article');

  // Schema.org BlogPosting Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription || article.summary,
    image: article.coverImage ? `${SiteConfig.domain}${article.coverImage}` : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Organization',
      name: SiteConfig.name,
      url: SiteConfig.domain,
    },
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SiteConfig.domain}/blogs/${article.slug}`,
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

        {/* ── Article Header Banner ──────────────────────────────────────── */}
        <div className="bg-[#EFE8DC] pt-10 pb-12 sm:pb-16 border-b border-[#E2D7C5]">
          <div className="section-container max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono text-[#615849] mb-5 overflow-x-auto whitespace-nowrap"
            >
              <Link href="/" className="hover:text-[#997300] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-[#997300] transition-colors">
                Blogs
              </Link>
              <span>/</span>
              <span className="text-[#1A1E24] font-semibold truncate max-w-[200px] sm:max-w-none">
                {article.title}
              </span>
            </nav>

            {/* Badges & Meta Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
              <span className="px-2.5 py-1 rounded bg-[#F4EFE6] border border-[#E2D7C5] text-[#997300] text-xs font-mono font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-[#718096] text-xs font-mono">{article.readTime}</span>
              {article.publishedAt && (
                <>
                  <span className="text-[#A0AEC0]">•</span>
                  <span className="text-[#718096] text-xs font-mono">
                    {new Intl.DateTimeFormat('en-AE', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    }).format(new Date(article.publishedAt))}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1E24] leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-[#4A5568] text-sm sm:text-base lg:text-lg font-body leading-relaxed max-w-3xl">
              {article.summary}
            </p>
          </div>
        </div>

        {/* ── Article Body ────────────────────────────────────────────────── */}
        <article className="section-container max-w-4xl py-12 lg:py-16">
          {/* Main Cover Image */}
          {article.coverImage && (
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden mb-8 border border-[#E2D7C5] bg-[#E8DFC9] shadow-md">
              <Image
                src={article.coverImage}
                alt={article.coverImageAlt || article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-md bg-[#1A1E24]/85 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-xs">
                  {article.category}
                </span>
              </div>
            </div>
          )}

          {/* Optional Educational/Market Disclaimer */}
          <div className="bg-[#EFE8DC] border border-[#E2D7C5] rounded-xl p-4 sm:p-5 mb-8">
            <p className="text-[#4A5568] text-xs sm:text-sm font-body leading-relaxed">
              <strong className="text-[#1A1E24]">Precious Metals Disclaimer:</strong> Information provided in this guide is for educational and market informational purposes only. Gold and silver prices fluctuate continuously based on international LBMA benchmarks. View our{' '}
              <Link
                href="/gold-prices"
                className="text-[#997300] underline font-medium hover:text-[#D4AF37]"
              >
                Live Gold Rates Page
              </Link>{' '}
              for real-time spot rates in AED.
            </p>
          </div>

          {/* Rendered Markdown Sections */}
          <div className="prose-luxury space-y-6">
            {sections.map((section, i) => (
              <ArticleSection key={i} section={section} />
            ))}
          </div>

          {/* ── Trading Desk Direct Contact Callout Box ─────────────────── */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#EFE8DC] border border-[#E2D7C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <span className="text-xs font-mono text-[#997300] uppercase font-bold tracking-widest block mb-1">
                Deira Trading Office • Dubai
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1A1E24]">
                Have Questions or Need a Live Spot Quote?
              </h3>
              <p className="text-[#4A5568] text-xs sm:text-sm font-body mt-1">
                Connect directly with our bullion desk for real-time rates, cast TT bar availability, or settlement arrangements.
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#C5A059] text-[#1A1E24] font-bold text-xs sm:text-sm transition-all shadow-xs shrink-0"
            >
              Chat on WhatsApp Desk →
            </a>
          </div>

          {/* Footer Navigation Row */}
          <div className="mt-10 pt-6 border-t border-[#E2D7C5] flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#EFE8DC] border border-[#E2D7C5] text-xs font-bold text-[#1A1E24] hover:border-[#D4AF37] transition-colors"
            >
              ← Back to All Guides
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#C5A059] text-xs font-bold text-[#1A1E24] transition-colors"
              >
                Shop Bullion Catalogue
              </Link>
              <Link
                href="/gold-prices"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#EFE8DC] border border-[#E2D7C5] text-xs font-bold text-[#1A1E24] hover:border-[#D4AF37] transition-colors"
              >
                Live Rates (24K)
              </Link>
            </div>
          </div>
        </article>

        {/* ── Related Bullion Articles ────────────────────────────────────── */}
        {related.length > 0 && (
          <section
            className="bg-[#EFE8DC] py-12 lg:py-16 border-t border-[#E2D7C5]"
            aria-labelledby="related-heading"
          >
            <div className="section-container max-w-4xl">
              <h2
                id="related-heading"
                className="font-heading font-bold text-xl sm:text-2xl text-[#1A1E24] mb-6 flex items-center gap-2"
              >
                <span className="w-1.5 h-4 bg-[#D4AF37] rounded-full" />
                <span>Related Bullion Insights</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blogs/${rel.slug}`}
                    className="flex flex-col justify-between bg-[#F4EFE6] rounded-xl overflow-hidden border border-[#E2D7C5] hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 group"
                  >
                    {rel.coverImage && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8DFC9]">
                        <Image
                          src={rel.coverImage}
                          alt={rel.coverImageAlt || rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                      </div>
                    )}
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <span className="px-2 py-0.5 rounded bg-[#EFE8DC] border border-[#E2D7C5] text-[#997300] text-[10px] font-mono font-bold uppercase tracking-wider">
                          {rel.category}
                        </span>
                        <h3 className="text-[#1A1E24] font-heading font-semibold text-sm sm:text-base mt-2.5 leading-snug group-hover:text-[#997300] transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                        <p className="text-[#718096] text-xs font-body mt-1.5 line-clamp-2">
                          {rel.summary}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#E2D7C5] mt-4 flex items-center justify-between">
                        <span className="text-[#997300] text-xs font-bold group-hover:text-[#D4AF37]">
                          Read →
                        </span>
                        <span className="text-[#718096] text-[11px] font-mono">
                          {rel.readTime}
                        </span>
                      </div>
                    </div>
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

// Lightweight Markdown-to-Section Parser
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
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A1E24] mb-4 mt-8 pt-4 border-t border-[#E2D7C5] first:mt-0 first:pt-0 first:border-0 leading-tight">
          {section.heading}
        </h2>
      )}
      {section.heading && section.type === 'h3' && (
        <h3 className="font-heading font-semibold text-lg sm:text-xl text-[#1A1E24] mb-3 mt-6 leading-snug">
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
        // Blockquote / Formula Callout
        if (block.startsWith('>')) {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-[#D4AF37] bg-[#EFE8DC] pl-4 py-3 pr-3 my-4 italic text-[#1A1E24] font-body text-sm leading-relaxed rounded-r-lg"
            >
              {block.replace(/^> /gm, '')}
            </blockquote>
          );
        }
        // Checklist
        if (block.includes('- [ ]')) {
          const items = block.split('\n').filter(Boolean);
          return (
            <ul key={i} className="space-y-2 my-4">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-[#2D3748] font-body text-sm">
                  <span className="mt-1 w-3.5 h-3.5 rounded border border-[#997300] bg-[#F4EFE6] shrink-0" />
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
            <ul key={i} className="space-y-2 list-disc list-inside my-4">
              {items.map((item, j) => (
                <li key={j} className="text-[#2D3748] font-body text-sm sm:text-base leading-relaxed">
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
            <ol key={i} className="space-y-2 list-decimal list-inside my-4">
              {items.map((item, j) => (
                <li key={j} className="text-[#2D3748] font-body text-sm sm:text-base leading-relaxed">
                  {renderInline(item.replace(/^\d+\. /, ''))}
                </li>
              ))}
            </ol>
          );
        }
        // Horizontal rule
        if (block === '---') {
          return <hr key={i} className="my-8 border-[#E2D7C5]" />;
        }
        // Paragraph
        return (
          <p key={i} className="text-[#2D3748] font-body text-sm sm:text-base leading-relaxed mb-4">
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
      return (
        <strong key={i} className="font-bold text-[#1A1E24]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-[#1A1E24]">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="bg-[#E8DFC9] text-[#1A1E24] text-xs font-mono px-1.5 py-0.5 rounded border border-[#E2D7C5]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const isExternal = linkMatch[2].startsWith('http');
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="text-[#997300] underline hover:text-[#D4AF37] transition-colors font-medium"
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
  const rows = raw
    .split('\n')
    .filter((r) => r.includes('|') && !r.match(/^[|:?\s\-]+$/));
  if (rows.length < 2) return null;
  const [header, ...body] = rows;
  const headers = header
    .split('|')
    .map((h) => h.trim())
    .filter(Boolean);

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[#E2D7C5] bg-[#EFE8DC]">
      <table className="w-full text-xs sm:text-sm font-body">
        <thead className="bg-[#E8DFC9] border-b border-[#E2D7C5]">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-[#1A1E24] font-semibold tracking-wider font-mono uppercase text-[11px]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => {
            const cells = row
              .split('|')
              .map((c) => c.trim())
              .filter(Boolean);
            return (
              <tr
                key={ri}
                className="border-t border-[#E2D7C5] even:bg-[#F4EFE6]/60 hover:bg-[#F4EFE6] transition-colors"
              >
                {cells.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-[#2D3748]">
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
