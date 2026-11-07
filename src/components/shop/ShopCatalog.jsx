'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';
import { SiteConfig } from '@/config/site';

export function ShopCatalog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const officePhone = getOfficePhoneUrl();

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === 'all'
              ? PRODUCTS.length
              : PRODUCTS.filter((p) => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-body font-medium transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-gold text-emerald-dark font-semibold shadow-gold'
                  : 'bg-white/5 text-white/75 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-emerald-dark/20 text-emerald-dark' : 'bg-white/10 text-white/60'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product) => {
          const productWaUrl = getWhatsAppUrl('shopProduct', {
            name: product.name,
            weight: product.weight,
          });

          const isGold = product.category === 'gold';

          return (
            <article
              key={product.id}
              className="bg-emerald-light/40 border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-emerald-dark/60 overflow-hidden flex items-center justify-center p-6 border-b border-gold/10">
                <Image
                  src={product.image}
                  alt={`${product.name} - ${product.purity}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] uppercase font-mono tracking-wider font-semibold px-2.5 py-1 rounded-full border ${
                      isGold
                        ? 'bg-gold/15 text-gold border-gold/30'
                        : 'bg-slate-200/15 text-slate-200 border-slate-300/30'
                    }`}
                  >
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Weight Tag */}
                <div className="absolute top-3 right-3 bg-emerald-dark/90 border border-white/10 text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md">
                  {product.weight}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gold font-medium">{product.purity}</span>
                    <span className="text-white/30 text-xs">•</span>
                    <span className="text-xs text-white/60">{product.form}</span>
                  </div>
                </div>

                <p className="text-xs text-white/70 line-clamp-3 mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Specifications Grid */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-emerald-dark/70 border border-white/5 text-[11px] font-mono mb-5">
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Standard Weight</span>
                    <span className="text-white font-medium">{product.weight}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Origin</span>
                    <span className="text-white font-medium">{product.origin}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  <a
                    href={productWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-semibold text-xs tracking-wide transition-all shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Enquire Live Rate</span>
                  </a>

                  <a
                    href={officePhone}
                    className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 text-xs transition-colors"
                    title={`Call Office ${SiteConfig.phoneDisplay}`}
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bullion Notice Box */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-emerald-light/20 border border-gold/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h4 className="font-heading font-semibold text-white text-base mb-1">
            Institutional &amp; Wholesale Bullion Trading
          </h4>
          <p className="text-xs text-white/75 max-w-2xl leading-relaxed">
            All bullion pricing is determined transparently against live international spot rates at the moment of trade execution. Physical settlement and collection available at our Dubai office in Al Dhagaya.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <a
            href={getWhatsAppUrl('shop')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center px-5 py-3 rounded-xl bg-gold text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all hover:bg-gold-light"
          >
            Direct Trading Desk
          </a>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function PhoneIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
