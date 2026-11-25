import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Homepage — "Why Dubai Leads the Global Gold Market" section.
 *
 * Implements:
 * - Real photographic visual cards:
 *   1. Dubai Gold Souq Trading Floor (/images/hero-gold-bars.jpg)
 *   2. Automated Vault Storage (/images/products/gold-kilo-bar.jpg)
 *   3. DXB Secure Air Transit (/images/products/gold-minted-bar.jpg)
 *   4. Assay Testing Laboratories (/images/gold-bar-close.jpg)
 * - Prominent circular UAE flag emblem badge with metallic gold ring
 * - Responsive 4-column desktop (lg:grid-cols-4), 2-column tablet/mobile (grid-cols-1 sm:grid-cols-2)
 * - Dark luxury aesthetic matching homepage (#0B0F17, #111622, #161C26)
 */
export function WhyDubaiPreview() {
  const whyDubaiWaUrl = getWhatsAppUrl('whyDubai');

  const pillars = [
    {
      step: '01',
      title: '0% Customs Duty & Tariffs',
      badge: 'Zero Tariffs',
      image: '/images/hero-gold-bars.jpg',
      imageAlt: 'Dubai Gold Souq physical bullion trading floor and treasury bars',
      caption: 'Gold Souq Trading Floor',
      description:
        'Zero import and export tariffs on 999.9 investment gold and silver bars, providing institutional counterparties and private investors with true global spot parity.',
    },
    {
      step: '02',
      title: 'Al Dhagaya Souq Settlement',
      badge: 'Physical Handover',
      image: '/images/products/gold-kilo-bar.jpg',
      imageAlt: 'High-security automated bullion vault storage in Dubai',
      caption: 'Automated Vault Storage',
      description:
        'Immediate physical counterparty handover, assay verification, and wire settlement executed at our Gold Souq trading desk in the historic heart of Deira, Dubai.',
    },
    {
      step: '03',
      title: 'Global DXB Air Transit',
      badge: 'Airside Transit',
      image: '/images/products/gold-minted-bar.jpg',
      imageAlt: 'DXB secure international air cargo logistics corridor',
      caption: 'DXB Secure Air Transit',
      description:
        'Direct airside connectivity via DXB air cargo corridors and institutional high-security vaulting depositories, connecting international refiners with Gulf markets.',
    },
    {
      step: '04',
      title: 'Central Bank Assay Standards',
      badge: 'Federal Compliance',
      image: '/images/gold-bar-close.jpg',
      imageAlt: 'Certified metallurgical assay testing laboratory and hallmark verification',
      caption: 'Assay Testing Laboratories',
      description:
        'Full statutory compliance under UAE Ministry of Economy frameworks, verified hallmarking, and registered goAML reporting for every physical bar traded.',
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
          {/* Prominent UAE Flag Emblem inside a Metallic Gold-Bordered Circle */}
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4AF37] p-1 bg-gradient-to-br from-[#D4AF37]/30 via-[#161C26] to-[#0B0F17] shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center shrink-0">
              {/* Stylized circular UAE Flag */}
              <div className="w-full h-full rounded-full overflow-hidden flex flex-row relative border border-white/20 shadow-inner">
                {/* Red vertical bar (left 30%) */}
                <div className="w-[30%] h-full bg-[#FF0000]" />
                {/* 3 horizontal stripes (right 70%): Green, White, Black */}
                <div className="w-[70%] h-full flex flex-col">
                  <div className="h-1/3 bg-[#00732F]" />
                  <div className="h-1/3 bg-[#FFFFFF]" />
                  <div className="h-1/3 bg-[#000000]" />
                </div>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                United Arab Emirates
              </span>
              <span className="text-xs text-white/60 font-body">
                Dubai Precious Metals Benchmark
              </span>
            </div>
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

        {/* 4 Photographic Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {pillars.map((card) => (
            <div
              key={card.step}
              className="bg-[#161C26] border border-[#252F3F] hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm group hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] hover:-translate-y-1"
            >
              <div>
                {/* Photographic Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0F17]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] via-[#161C26]/30 to-transparent" />

                  {/* Top Floating Badge & Step */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-300 bg-[#0B0F17]/80 backdrop-blur-md border border-amber-400/30">
                      {card.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-white/80 bg-[#0B0F17]/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      {card.step}
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-2 left-3 right-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 font-semibold drop-shadow-sm">
                      {card.caption}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6">
                  {/* Card Title */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors mb-2.5 leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#252F3F]/60 flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-amber-400/80 transition-colors">
                <span>Dubai Trading Standard</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
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
