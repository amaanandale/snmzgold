import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function BullionCategories() {
  const goldWaUrl = getWhatsAppUrl('goldRates');
  const silverWaUrl = getWhatsAppUrl('silverRates');

  return (
    <section className="section-padding bg-emerald-dark" aria-labelledby="bullion-categories-heading">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-mono uppercase tracking-widest text-gold">
              Precious Metals Trading
            </span>
          </div>
          <h2
            id="bullion-categories-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4"
          >
            Physical Bullion <span className="text-gold italic font-serif">Categories</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Institutional quality physical gold and silver bullion. Traded transparently in Dubai,
            settled against prevailing international spot rates, and available for direct collection.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gold Bullion Card */}
          <div className="bg-gradient-to-br from-emerald-light/40 to-emerald-dark border border-gold/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-gold/50 transition-all duration-300 shadow-xl">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                  24K · 999.9 Purity
                </span>
                <span className="text-xs font-mono text-white/50">AED Spot Linked</span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3 group-hover:text-gold transition-colors">
                Gold Bullion &amp; TT Bars
              </h3>
              <p className="text-white/75 text-sm sm:text-base mb-6 leading-relaxed">
                Specialising in traditional 10 Tola TT bars, 1 kilogram cast bars, and minted investment ingots.
                Standardized purity, international liquidity, and direct settlement from our Dubai desk.
              </p>

              {/* Product list */}
              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-white/80 font-body">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  <span>1 Kilogram 999.9 Fine Gold Bars</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  <span>10 Tola TT Bars (Dubai &amp; GCC Benchmark)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  <span>100g, 50g &amp; 1oz Minted Ingot Formats</span>
                </li>
              </ul>
            </div>

            {/* Visual & CTAs */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-emerald-dark/60 border border-gold/15 flex items-center justify-center">
              <Image
                src="/images/products/gold-kilo-bar.jpg"
                alt="24K Gold Bullion Bars Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/shop"
                className="flex-1 text-center px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                View Gold Bullion
              </Link>
              <a
                href={goldWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-body font-medium text-xs border border-white/10 transition-colors"
              >
                Enquire Live Rate
              </a>
            </div>
          </div>

          {/* Silver Bullion Card */}
          <div className="bg-gradient-to-br from-emerald-light/40 to-emerald-dark border border-slate-300/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300/50 transition-all duration-300 shadow-xl">
            {/* Ambient silver glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-slate-300/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-slate-200/15 text-slate-200 border border-slate-300/30">
                  Fine Silver · 999.0
                </span>
                <span className="text-xs font-mono text-white/50">AED Spot Linked</span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3 group-hover:text-slate-200 transition-colors">
                Silver Bullion &amp; Ingots
              </h3>
              <p className="text-white/75 text-sm sm:text-base mb-6 leading-relaxed">
                Industrial and investment-grade physical silver bars. Denominations ranging from 1 kg cast ingots
                to 1 oz investment rounds for diversified precious metal asset allocation.
              </p>

              {/* Product list */}
              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-white/80 font-body">
                <li className="flex items-center gap-2">
                  <span className="text-slate-300">✓</span>
                  <span>1 Kilogram 999 Fine Silver Cast Bars</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-300">✓</span>
                  <span>500g &amp; 100g Minted Silver Ingots</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-300">✓</span>
                  <span>1 Troy Ounce Silver Coins &amp; Rounds</span>
                </li>
              </ul>
            </div>

            {/* Visual & CTAs */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-emerald-dark/60 border border-slate-300/15 flex items-center justify-center">
              <Image
                src="/images/products/silver-kilo-bar.jpg"
                alt="Fine Silver Bullion Bars Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/shop"
                className="flex-1 text-center px-6 py-3 rounded-xl bg-slate-200 hover:bg-white text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                View Silver Bullion
              </Link>
              <a
                href={silverWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-body font-medium text-xs border border-white/10 transition-colors"
              >
                Enquire Live Rate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
