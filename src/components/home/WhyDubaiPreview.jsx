import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Homepage — "Why Dubai?" preview section.
 * Editorial bullion dealer layout:
 * - Large authentic precious metals photograph on the left.
 * - Heading, informative text, Discover Why Dubai CTA, and WhatsApp enquiry on the right.
 * - Cleanly stacks on mobile.
 */
export function WhyDubaiPreview() {
  const whyDubaiWaUrl = getWhatsAppUrl('whyDubai');

  return (
    <section
      id="why-dubai"
      className="section-padding bg-emerald-dark relative overflow-hidden"
      aria-labelledby="why-dubai-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Photograph (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-3xl overflow-hidden border border-gold/30 shadow-2xl group">
              <Image
                src="/images/gold-bar-close.jpg"
                alt="Physical Gold Bullion Trading in Dubai — Verified Purity and Hallmarks"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/90 via-emerald-dark/20 to-transparent" />

              {/* Informative overlay tag */}
              <div className="absolute bottom-5 left-5 right-5 bg-emerald-dark/95 backdrop-blur-md rounded-2xl p-4 border border-gold/25 shadow-lg">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold block mb-1">
                  The City of Gold
                </span>
                <p className="text-white text-xs font-body leading-relaxed">
                  Connecting producers across Africa &amp; the Americas with major consumer markets across Asia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-mono uppercase tracking-widest text-gold">
                The Global Precious Metals Capital
              </span>
            </div>

            <h2
              id="why-dubai-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-white mb-5"
            >
              Why Dubai Leads the{' '}
              <span
                className="text-gold"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ECC84A 0%, #DFAF24 45%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Global Gold Market
              </span>
            </h2>

            <p className="text-white/75 text-sm sm:text-base font-body leading-relaxed mb-6">
              Dubai has built one of the world&apos;s most recognised precious metals trading ecosystems.
              Strategically positioned at the crossroads of international bullion trade routes, the emirate combines
              open commercial policies, zero customs tariffs on investment gold, and institutional vaulting infrastructure.
            </p>

            {/* Strategic Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
              <div className="bg-emerald-light/25 border border-white/5 rounded-xl p-4">
                <span className="text-gold font-bold text-sm block mb-1">📍 Strategic Crossroads</span>
                <p className="text-xs text-white/65 leading-relaxed">
                  Midpoint connectivity between African mines, European refineries, and Asian retail hubs.
                </p>
              </div>

              <div className="bg-emerald-light/25 border border-white/5 rounded-xl p-4">
                <span className="text-gold font-bold text-sm block mb-1">⚖️ Transparent Pricing</span>
                <p className="text-xs text-white/65 leading-relaxed">
                  Live international spot benchmarks published publicly in AED with established trading spreads.
                </p>
              </div>

              <div className="bg-emerald-light/25 border border-white/5 rounded-xl p-4">
                <span className="text-gold font-bold text-sm block mb-1">🏛️ Gold Souk &amp; Deira Heritage</span>
                <p className="text-xs text-white/65 leading-relaxed">
                  Centuries of physical trading legacy concentrated in Al Dhagaya and surrounding districts.
                </p>
              </div>

              <div className="bg-emerald-light/25 border border-white/5 rounded-xl p-4">
                <span className="text-gold font-bold text-sm block mb-1">✈️ Global Logistics</span>
                <p className="text-xs text-white/65 leading-relaxed">
                  Direct physical settlement backed by high-security transport via DXB cargo and Jebel Ali.
                </p>
              </div>
            </div>

            {/* Actions: Full page CTA + WhatsApp Enquiry */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/why-dubai"
                className="px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-gold"
              >
                Discover Why Dubai →
              </Link>

              <a
                href={whyDubaiWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-body font-medium text-xs border border-white/10 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Enquire About Trading in Dubai</span>
              </a>
            </div>
          </div>
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
