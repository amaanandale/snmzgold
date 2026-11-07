import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UAEFlag } from '@/components/ui/UAEFlag';
import { Button } from '@/components/ui/Button';
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
      <main id="main-content" className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20 border-b border-gold/10" aria-labelledby="why-dubai-heading">
          <div className="section-container max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
              <span className="text-gold/80 text-xs font-mono font-semibold uppercase tracking-[0.25em]">
                The Global Precious Metals Capital
              </span>
            </div>
            <h1 id="why-dubai-heading" className="font-display text-4xl sm:text-6xl text-white mb-5 leading-tight font-bold">
              Why Dubai?
            </h1>
            <p className="text-white/75 text-lg sm:text-xl font-body leading-relaxed max-w-2xl mb-8">
              Dubai has built one of the world&apos;s most recognized physical bullion and jewellery ecosystems — the convergence of geographic centrality, open trade policy, institutional security, and decades of commercial enterprise.
            </p>
            <div className="flex items-center gap-4">
              <UAEFlag height={22} className="rounded-[3px] shadow-md" />
              <span className="text-white/60 text-xs sm:text-sm font-mono">United Arab Emirates · Dubai</span>
            </div>
          </div>
        </section>

        {/* Section 1 — Geographic Position */}
        <section className="section-padding bg-ivory" aria-labelledby="dubai-position-heading">
          <div className="section-container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-gold-antique text-xs uppercase tracking-widest font-mono font-semibold">
                  Geography &amp; Trade Flows
                </span>
                <h2 id="dubai-position-heading" className="font-display text-3xl text-emerald mt-2 mb-5 font-bold">
                  Dubai&apos;s Position in the Global Gold Market
                </h2>
                <div className="space-y-4 text-emerald/80 font-body leading-relaxed text-sm sm:text-base">
                  <p>
                    Positioned at the crossroads of Africa, Europe, and Asia, Dubai occupies a strategic geographic vantage between the world&apos;s primary gold-producing nations in Africa and Latin America, and the world&apos;s largest consumer and manufacturing markets across South and East Asia.
                  </p>
                  <p>
                    By investing early in deep-water maritime logistics at Jebel Ali Port and intercontinental air freight via Dubai International Airport (DXB), Dubai created a secure, low-latency transit bridge for high-value precious metals.
                  </p>
                  <p>
                    Today, substantial quantities of physical gold and silver transit through the emirate annually, benefiting from zero customs duties on raw bullion, transparent market pricing, and immediate counterparty liquidity.
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
                  body="The Dubai Multi Commodities Centre (DMCC, est. 2002) provides statutory and storage infrastructure for precious metals."
                />
                <FactCard
                  icon="⚖️"
                  title="Zero Tariffs on Raw Bullion"
                  body="Investment-grade gold bars and physical bullion enjoy tariff exemptions, fostering transparent and competitive pricing spreads."
                />
                <FactCard
                  icon="✈️"
                  title="Institutional Logistical Security"
                  body="Jebel Ali Port and Dubai International Airport provide state-of-the-art secure vaulting and transit capacity."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — The "City of Gold" & The Gold Souk */}
        <section className="section-padding bg-emerald text-white" aria-labelledby="city-of-gold-heading">
          <div className="section-container max-w-5xl">
            <span className="text-gold text-xs uppercase tracking-widest font-mono font-semibold">
              Heritage &amp; Physical Infrastructure
            </span>
            <h2 id="city-of-gold-heading" className="font-display text-3xl sm:text-4xl text-white mt-2 mb-6 font-bold">
              The &ldquo;City of Gold&rdquo; &amp; The Deira Bullion District
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4 text-white/75 font-body leading-relaxed text-sm sm:text-base">
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
                  <div key={stat.label} className="bg-white/5 border border-gold/20 rounded-xl p-4">
                    <p className="text-gold font-display font-semibold text-xl">{stat.value}</p>
                    <p className="text-white text-xs font-body font-medium mt-0.5">{stat.label}</p>
                    <p className="text-white/40 text-[11px] font-mono">{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Market Infrastructure & Development */}
        <section className="section-padding bg-ivory" aria-labelledby="infrastructure-heading">
          <div className="section-container max-w-5xl">
            <span className="text-gold-antique text-xs uppercase tracking-widest font-mono font-semibold">
              Market Architecture
            </span>
            <h2 id="infrastructure-heading" className="font-display text-3xl text-emerald mt-2 mb-6 font-bold">
              Infrastructure, Standards &amp; Good Delivery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-2xl p-7 border border-ivory-dark shadow-card">
                <h3 className="font-display text-xl text-emerald mb-3 font-semibold">
                  Standardised Good Delivery
                </h3>
                <p className="text-emerald/75 font-body text-sm leading-relaxed mb-4">
                  The UAE Good Delivery standard establishes strict benchmarks for gold bar fineness, weight tolerances, and refinery accreditation. This standard aligns local physical bars with international London Bullion Market Association (LBMA) standards, ensuring global acceptance.
                </p>
                <span className="text-xs font-mono text-emerald/50">
                  Standard benchmark: 999.9 fine 1kg &amp; 10 tola TT formats
                </span>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-ivory-dark shadow-card">
                <h3 className="font-display text-xl text-emerald mb-3 font-semibold">
                  Regulatory Integrity &amp; AML/CFT
                </h3>
                <p className="text-emerald/75 font-body text-sm leading-relaxed mb-4">
                  Trading counterparties in Dubai operate under rigorous Know-Your-Customer (KYC) and Anti-Money Laundering (AML) statutory frameworks enforced by the UAE Ministry of Economy and the Executive Office for Control and Non-Proliferation (EOCN).
                </p>
                <span className="text-xs font-mono text-emerald/50">
                  Compliance: Statutorily mandated counterparty due diligence
                </span>
              </div>
            </div>

            {/* Clear distinction box: General Market vs SNMZ Commercial Role */}
            <div className="bg-emerald-dark text-white rounded-2xl p-7 border border-gold/25 shadow-lg">
              <span className="text-gold text-xs font-mono uppercase tracking-widest block mb-2 font-bold">
                Transparency Notice · SNMZ Gold &amp; Diamonds
              </span>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">
                General Market Information vs. SNMZ Bullion Services
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-body leading-relaxed mb-4">
                The market information above describes the general commercial environment and historical development of Dubai as an international commodities hub. SNMZ Gold &amp; Diamonds is an independent, licensed precious metals dealer (Trade Licence #{SiteConfig.tradeLicence}, established {SiteConfig.establishedYear}) operating from Al Dhagaya, Dubai.
              </p>
              <p className="text-white/60 text-xs font-body leading-relaxed italic">
                We deal in verified 24K gold TT bars and physical silver bullion. SNMZ does not claim government ownership, public regulatory authority, exclusive trade quotas, or guaranteed investment yields. All transactions are commercial physical sales executed upon mutually agreed spot terms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Sources & References */}
        <section className="section-padding bg-emerald-dark border-t border-gold/15" aria-labelledby="sources-heading">
          <div className="section-container max-w-5xl">
            <h2 id="sources-heading" className="font-display text-2xl text-white mb-6 font-bold">
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
                  className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:border-gold/30 transition-colors group"
                >
                  <p className="text-gold font-body font-semibold text-sm mb-1 group-hover:text-gold-light">
                    {source.name}
                  </p>
                  <p className="text-white/55 text-xs font-body leading-relaxed">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-emerald border-t border-gold/20">
          <div className="section-container max-w-3xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 font-bold">
              Trade Physical Bullion in Dubai
            </h2>
            <p className="text-white/70 font-body text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Contact our Dubai bullion desk to discuss real-time AED pricing for 24K gold TT bars and physical silver allocations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={whyDubaiWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-bold text-xs uppercase tracking-wider transition-all shadow-gold"
              >
                Enquire on WhatsApp
              </a>
              <Button href="/gold-prices" variant="outline">
                View Live Gold Rates
              </Button>
              <Button href="/silver-prices" variant="outline">
                View Live Silver Rates
              </Button>
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
    <div className="bg-white rounded-xl p-4 border border-ivory-dark shadow-card flex gap-3.5">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-emerald font-body font-semibold text-sm mb-1">{title}</p>
        <p className="text-emerald/70 text-xs font-body leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
