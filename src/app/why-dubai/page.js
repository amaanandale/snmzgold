import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UAEFlag } from '@/components/ui/UAEFlag';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';
import { SiteConfig } from '@/config/site';

export const metadata = {
  title: 'Why Dubai? | The Global Gold Capital | SNMZ Gold & Diamonds',
  description:
    'Discover why Dubai has become one of the world\'s most recognised physical gold trading destinations — its geography, infrastructure, the Gold Souk, and transparent spot pricing.',
  openGraph: {
    title: 'Why Dubai? The Global Gold Capital | SNMZ Gold & Diamonds',
    description: 'The history, geography, market infrastructure, and bullion ecosystem that made Dubai a premier gold hub.',
  },
};

export default function WhyDubaiPage() {
  const whyDubaiWaUrl = getWhatsAppUrl('whyDubai');
  const officePhone = getOfficePhoneUrl();

  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#F8F5EE] text-[#1A202C] min-h-screen selection:bg-[#D4AF37]/30 selection:text-[#0B0F17]">
        {/* Hero Banner — Ultra-Dark Obsidian Luxury Accent */}
        <section
          className="bg-gradient-to-b from-[#0B0F17] via-[#111622] to-[#0B0F17] pt-28 sm:pt-36 pb-20 border-b border-[#252F3F] text-white"
          aria-labelledby="why-dubai-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#D4AF37]" aria-hidden="true" />
              <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-[0.25em]">
                The Global Precious Metals Capital
              </span>
            </div>
            <h1 id="why-dubai-heading" className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight">
              Why Dubai?
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-body leading-relaxed max-w-3xl mb-8">
              Dubai has built one of the world&apos;s most recognized physical bullion and precious metals ecosystems — the convergence of geographic centrality, zero tariffs on 999.9 investment gold, institutional security, and centuries of merchant enterprise.
            </p>
            <div className="flex items-center gap-4">
              <UAEFlag height={22} className="rounded-[3px] shadow-md" />
              <span className="text-amber-400 text-xs sm:text-sm font-mono font-semibold">
                United Arab Emirates · Dubai Gold Benchmark
              </span>
            </div>
          </div>
        </section>

        {/* Section 1 — Geographic Position */}
        <section className="py-14 sm:py-20 bg-[#F8F5EE]" aria-labelledby="dubai-position-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#997300] text-xs uppercase tracking-widest font-mono font-bold block mb-1">
                  Geography &amp; Trade Flows
                </span>
                <h2 id="dubai-position-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A202C] mt-2 mb-5">
                  Dubai&apos;s Position in the Global Gold Market
                </h2>
                <div className="space-y-4 text-[#4A5568] font-body leading-relaxed text-sm sm:text-base">
                  <p>
                    Positioned at the crossroads of Africa, Europe, and Asia, Dubai occupies a strategic geographic vantage between primary gold-producing nations and high-volume consumer markets across the Indian subcontinent and Southeast Asia.
                  </p>
                  <p>
                    By investing early in deep-water maritime logistics at Jebel Ali Port and air cargo routes via Dubai International Airport (DXB), Dubai created a secure, low-latency transit bridge for high-value precious metals.
                  </p>
                  <p>
                    Substantial quantities of physical gold and silver transit through the emirate annually, benefiting from zero customs duties on investment bullion, transparent market pricing, and immediate counterparty liquidity.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <FactCard
                  icon="📍"
                  title="Crossroads of Global Trade"
                  body="Midpoint location between African mining regions, European refining centres, and Asian consumer markets."
                />
                <FactCard
                  icon="🏛️"
                  title="Regulated Free Zone Frameworks"
                  body="The Dubai Multi Commodities Centre (DMCC) provides statutory and storage infrastructure for precious metals."
                />
                <FactCard
                  icon="⚖️"
                  title="Zero Tariffs on Raw Bullion"
                  body="Investment-grade gold bars and physical bullion enjoy tariff exemptions, fostering transparent and competitive pricing spreads."
                />
                <FactCard
                  icon="✈️"
                  title="Institutional Logistical Security"
                  body="DXB air cargo corridors and institutional security vaulting provide seamless global transfer capacity."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — The "City of Gold" & The Gold Souk */}
        <section className="py-14 sm:py-20 bg-white border-y border-[#E5D8B8]" aria-labelledby="city-of-gold-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <span className="text-[#997300] text-xs uppercase tracking-widest font-mono font-bold block mb-1">
              Heritage &amp; Physical Infrastructure
            </span>
            <h2 id="city-of-gold-heading" className="font-heading font-extrabold text-2xl sm:text-3xl sm:text-4xl text-[#1A202C] mt-2 mb-6">
              The &ldquo;City of Gold&rdquo; &amp; The Deira Bullion District
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4 text-[#4A5568] font-body leading-relaxed text-sm sm:text-base">
                <p>
                  Dubai&apos;s standing as the &ldquo;City of Gold&rdquo; has deep historical origins. In the mid-twentieth century, as international trade flourished along Dubai Creek, merchants in Deira established open bazaars specialising in gold and precious stones.
                </p>
                <p>
                  The historic Dubai Gold Souk in Al Dhagaya remains the physical heartbeat of this legacy. Comprising hundreds of retail merchants, wholesale bullion offices, and assay laboratories, the district represents one of the dense physical concentrations of precious metals trading worldwide.
                </p>
                <p>
                  Unlike purely financialized futures contracts, Dubai&apos;s market is characterized by physical handover, immediate assay verification, and direct counterparty settlement in UAE Dirhams (AED) and major international reserve currencies.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Gold Souk District', value: 'Al Dhagaya', note: 'Deira, Dubai' },
                  { label: 'Tradable Currency', value: 'AED / USD', note: 'Spot linked' },
                  { label: 'Benchmark Purity', value: '999.9 Fine', note: '24K TT & Cast' },
                  { label: 'Settlement Standard', value: 'Physical Handover', note: 'Immediate assay' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#F8F5EE] border border-[#E5D8B8] rounded-xl p-4 shadow-xs">
                    <p className="text-[#997300] font-heading font-bold text-xl">{stat.value}</p>
                    <p className="text-[#1A202C] text-xs font-heading font-bold mt-0.5">{stat.label}</p>
                    <p className="text-[#718096] text-[11px] font-mono">{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Market Infrastructure & Development */}
        <section className="py-14 sm:py-20 bg-[#F8F5EE]" aria-labelledby="infrastructure-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <span className="text-[#997300] text-xs uppercase tracking-widest font-mono font-bold block mb-1">
              Market Architecture
            </span>
            <h2 id="infrastructure-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A202C] mt-2 mb-6">
              Infrastructure, Standards &amp; Good Delivery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-2xl p-7 border border-[#E5D8B8] shadow-sm">
                <h3 className="font-heading font-bold text-xl text-[#1A202C] mb-3">
                  Standardised Good Delivery
                </h3>
                <p className="text-[#4A5568] font-body text-sm leading-relaxed mb-4">
                  The UAE Good Delivery standard establishes strict benchmarks for gold bar fineness, weight tolerances, and refinery accreditation. This standard aligns local physical bars with international London Bullion Market Association (LBMA) standards.
                </p>
                <span className="text-xs font-mono text-[#997300] font-semibold">
                  Standard benchmark: 999.9 fine 1kg &amp; 10 tola TT formats
                </span>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[#E5D8B8] shadow-sm">
                <h3 className="font-heading font-bold text-xl text-[#1A202C] mb-3">
                  Regulatory Integrity &amp; AML/CFT
                </h3>
                <p className="text-[#4A5568] font-body text-sm leading-relaxed mb-4">
                  Trading counterparties in Dubai operate under rigorous Know-Your-Customer (KYC) and Anti-Money Laundering (AML) statutory frameworks enforced by the UAE Ministry of Economy and the Executive Office for Control and Non-Proliferation (EOCN).
                </p>
                <span className="text-xs font-mono text-[#997300] font-semibold">
                  Compliance: Statutorily mandated counterparty due diligence
                </span>
              </div>
            </div>

            {/* Clear distinction box: General Market vs SNMZ Commercial Role */}
            <div className="bg-white text-[#1A202C] rounded-2xl p-7 border border-[#E5D8B8] shadow-sm">
              <span className="text-[#997300] text-xs font-mono uppercase tracking-widest block mb-2 font-bold">
                Transparency Notice · SNMZ Gold &amp; Diamonds
              </span>
              <h3 className="font-heading font-bold text-xl text-[#1A202C] mb-2">
                General Market Information vs. SNMZ Bullion Services
              </h3>
              <p className="text-[#4A5568] text-xs sm:text-sm font-body leading-relaxed mb-4">
                The market information above describes the general commercial environment and historical development of Dubai as an international commodities hub. SNMZ Gold &amp; Diamonds is an established precious metals trading house operating from Al Dhagaya, Deira, Dubai.
              </p>
              <p className="text-[#718096] text-xs font-body leading-relaxed italic">
                We deal in verified 24K gold TT bars and physical silver bullion. SNMZ does not claim government ownership, public regulatory authority, exclusive trade quotas, or guaranteed investment yields. All transactions are commercial physical sales executed upon mutually agreed spot terms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Sources & References */}
        <section className="py-14 sm:py-16 bg-white border-t border-[#E5D8B8]" aria-labelledby="sources-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 id="sources-heading" className="font-heading font-bold text-2xl text-[#1A202C] mb-6">
              Authoritative Market References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'UAE Official Portal', url: 'https://u.ae/', desc: 'Official federal regulations, business licensing, and statutory frameworks.' },
                { name: 'Dubai Multi Commodities Centre', url: 'https://www.dmcc.ae/', desc: 'Commodity infrastructure, trade standards, and Good Delivery guidelines.' },
                { name: 'Dubai Economy and Tourism', url: 'https://www.visitdubai.com/', desc: 'Historical trade district information and Gold Souk overview.' },
                { name: 'World Gold Council', url: 'https://www.gold.org/', desc: 'Global precious metals market intelligence and international trade flows.' },
                { name: 'London Bullion Market Association', url: 'https://www.lbma.org.uk/', desc: 'International spot benchmark oversight and Good Delivery specifications.' },
                { name: 'UAE Ministry of Economy', url: 'https://www.moec.gov.ae/', desc: 'Federal precious metals AML/CFT guidelines and trade regulations.' },
              ].map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#F8F5EE] border border-[#E5D8B8] rounded-xl p-4 hover:border-[#D4AF37] transition-colors group shadow-2xs"
                >
                  <p className="text-[#997300] font-heading font-bold text-sm mb-1 group-hover:text-[#D4AF37]">
                    {source.name}
                  </p>
                  <p className="text-[#4A5568] text-xs font-body leading-relaxed">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 sm:py-20 bg-[#F8F5EE] border-t border-[#E5D8B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A202C] mb-4">
              Trade Physical Bullion in Dubai
            </h2>
            <p className="text-[#4A5568] font-body text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Contact our Dubai bullion desk to discuss real-time AED pricing for 24K gold TT bars and physical silver allocations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={whyDubaiWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B0F17] font-body font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Enquire on WhatsApp
              </a>
              <Link
                href="/gold-prices"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F3] text-[#1A202C] border border-[#E5D8B8] font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
              >
                View Live Gold Rates
              </Link>
              <Link
                href="/silver-prices"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F3] text-[#1A202C] border border-[#E5D8B8] font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
              >
                View Live Silver Rates
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FactCard({ icon, title, body }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-[#E5D8B8] shadow-xs flex gap-3.5">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[#1A202C] font-heading font-bold text-sm mb-1">{title}</p>
        <p className="text-[#4A5568] text-xs font-body leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
