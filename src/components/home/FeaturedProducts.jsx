import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding bg-emerald-light/10 border-t border-b border-gold/15" aria-labelledby="featured-products-heading">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-mono uppercase tracking-widest text-gold">
                Catalogue Highlights
              </span>
            </div>
            <h2
              id="featured-products-heading"
              className="font-heading font-bold text-3xl sm:text-4xl text-white"
            >
              Featured Bullion <span className="text-gold italic font-serif">Products</span>
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold/10 hover:bg-gold text-gold hover:text-emerald-dark border border-gold/30 text-xs font-body font-semibold tracking-wide transition-all self-start md:self-auto"
          >
            <span>Explore Full Shop Catalogue</span>
            <span>→</span>
          </Link>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => {
            const waUrl = getWhatsAppUrl('shopProduct', {
              name: product.name,
              weight: product.weight,
            });

            const isGold = product.category === 'gold';

            return (
              <div
                key={product.id}
                className="bg-emerald-dark/80 border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
              >
                {/* Visual */}
                <div className="relative aspect-square bg-emerald-light/10 p-6 flex items-center justify-center border-b border-gold/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded border ${
                      isGold
                        ? 'bg-gold/15 text-gold border-gold/30'
                        : 'bg-slate-300/15 text-slate-200 border-slate-300/30'
                    }`}
                  >
                    {product.weight}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] font-mono text-gold mb-1">{product.purity}</span>
                  <h3 className="font-heading font-semibold text-white text-base mb-2 group-hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-white/65 line-clamp-2 leading-relaxed mb-5">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-white/5">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gold/15 hover:bg-gold text-gold hover:text-emerald-dark border border-gold/25 font-body font-semibold text-xs transition-all"
                    >
                      <span>Enquire Rate</span>
                      <span className="text-xs">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
