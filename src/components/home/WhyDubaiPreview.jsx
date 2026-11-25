import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Homepage — "Why Dubai Leads the Global Gold Market" section overhaul.
 *
 * Implements:
 * - Removed generic illustrations & icons
 * - Official stylized UAE flag emblem badge (#00732F green, #FFFFFF white, #000000 black, #FF0000 red) framed in gold
 * - Header:
 *   * Kicker: "THE GLOBAL PRECIOUS METALS CAPITAL" (text-xs font-semibold tracking-widest text-amber-400 uppercase)
 *   * Title: "Why Dubai Leads the Global Gold Market" (text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-1)
 *   * Body: "Strategically positioned at the crossroads of international bullion trade routes, the emirate combines open commercial policies, zero customs tariffs on 999.9 investment gold, and institutional vaulting infrastructure."
 * - 4 Minimal Dark Cards with clean gold typography highlighting:
 *   1. 0% Customs Duty
 *   2. Al Dhagaya Gold Souq OTC Settlement
 *   3. Direct Vault & DXB Cargo Logistics
 *   4. UAE Federal AML & Assay Compliance
 * - Responsive container: w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 */
export function WhyDubaiPreview() {
  const whyDubaiWaUrl = getWhatsAppUrl('whyDubai');

  const pillars = [
    {
      step: '01',
      title: '0% Customs Duty',
      badge: 'Zero Tariff Bullion',
      description:
        'Zero import and export tariffs on 999.9 investment-grade gold and silver bullion, providing institutional counterparties and private investors with true global spot parity.',
    },
    {
      step: '02',
      title: 'Al Dhagaya OTC Settlement',
      badge: 'Gold Souq Hub',
      description:
        'Direct physical handover, certified purity assay inspection, and bank-grade wire settlement executed at our trading premises in the historic heart of Deira, Dubai.',
    },
    {
      step: '03',
      title: 'Direct Vault & DXB Cargo Logistics',
      badge: 'High-Security Transit',
      description:
        'Direct proximity to Dubai International Airport (DXB) air cargo networks and institutional depository vaults, connecting international refineries with consumer markets.',
    },
    {
      step: '04',
      title: 'UAE Federal AML & Assay Compliance',
      badge: 'DET Licensed #1531797',
      description:
        'Full statutory alignment with UAE Ministry of Economy compliance frameworks, federal goAML reporting, and certified hallmarking for every physical bar traded.',
    },
  ];

  return (
    <section
      id="why-dubai"
      className="section-padding bg-[#111622] border-t border-b border-[#252F3F] relative overflow-hidden w-full max-w-full"
      aria-labelledby="why-dubai-heading"
    >
      {/* Background radial gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          {/* Official UAE Flag / Emblem Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161C26] border border-[#D4AF37]/40 shadow-sm mb-3.5">
            {/* Stylized UAE Flag Emblem: Green, White, Black horizontal bars with Red vertical bar */}
            <div className="w-5 h-3.5 rounded-[2px] overflow-hidden flex flex-row border border-white/20 shrink-0 shadow-xs">
              {/* Red vertical bar */}
              <div className="w-1.5 h-full bg-[#FF0000]" />
              {/* 3 horizontal stripes: Green, White, Black */}
              <div className="flex flex-col flex-1 h-full">
                <div className="h-1/3 bg-[#00732F]" />
                <div className="h-1/3 bg-[#FFFFFF]" />
                <div className="h-1/3 bg-[#000000]" />
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
              United Arab Emirates · Dubai Global Benchmark
            </span>
          </div>

          {/* Kicker */}
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-1">
            THE GLOBAL PRECIOUS METALS CAPITAL
          </span>

          {/* Title */}
          <h2
            id="why-dubai-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-1 leading-snug"
          >
            Why Dubai Leads the Global Gold Market
          </h2>

          {/* Body */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3">
            Strategically positioned at the crossroads of international bullion trade routes, the emirate combines open commercial policies, zero customs tariffs on 999.9 investment gold, and institutional vaulting infrastructure.
          </p>
        </div>

        {/* 4 Minimal Dark Cards with clean gold typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {pillars.map((card) => (
            <div
              key={card.step}
              className="bg-[#161C26] border border-[#252F3F] hover:border-amber-400/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-sm group hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] hover:-translate-y-0.5"
            >
              <div>
                {/* Step number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400/70 group-hover:text-amber-400 transition-colors">
                    {card.step}
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/25">
                    {card.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors mb-2.5 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                  {card.description}
                </p>
              </div>

              {/* Bottom subtle indicator */}
              <div className="pt-4 mt-4 border-t border-[#252F3F]/60 flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-amber-400/80 transition-colors">
                <span>Dubai Trading Standard</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-10 pt-6 border-t border-[#252F3F]/60">
          <Link
            href="/why-dubai"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:opacity-95 text-[#0B0F17] font-body font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(212,175,55,0.2)]"
          >
            Discover Why Dubai →
          </Link>

          <a
            href={whyDubaiWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#161C26] hover:bg-[#1C2330] text-white hover:text-amber-400 font-body font-medium text-xs border border-[#252F3F] transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Enquire About Trading in Dubai</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
