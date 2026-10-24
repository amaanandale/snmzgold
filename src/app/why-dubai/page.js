import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UAEFlag } from '@/components/ui/UAEFlag';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Why Dubai? | The Global Gold Capital | SNMZ',
  description:
    'Discover why Dubai has become one of the world\'s most recognised gold trading and jewellery destinations — its geography, history, market infrastructure, and economic development.',
  openGraph: {
    title: 'Why Dubai? The Global Gold Capital | SNMZ Gold & Diamonds',
    description: 'The history, geography, and market infrastructure that made Dubai a premier gold hub.',
  },
};

export default function WhyDubaiPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-ivory min-h-screen">

        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20 border-b border-gold/10" aria-labelledby="why-dubai-heading">
          <div className="section-container max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
              <span className="text-gold/80 text-xs font-body font-semibold uppercase tracking-[0.25em]">
                The Gold Capital
              </span>
            </div>
            <h1 id="why-dubai-heading" className="font-display text-5xl sm:text-6xl text-white mb-5 leading-tight">
              Why Dubai?
            </h1>
            <p className="text-white/65 text-xl font-body leading-relaxed max-w-2xl mb-8">
              Dubai has built one of the world&apos;s most recognised gold trading and jewellery ecosystems — the result of geography, open trade policy, infrastructure investment, and decades of commercial enterprise.
            </p>
            <div className="flex items-center gap-4">
              <UAEFlag height={22} className="rounded-[3px] shadow-md" />
              <span className="text-white/40 text-sm font-body">United Arab Emirates</span>
            </div>
          </div>
        </section>

        {/* Section 1 — Dubai's position */}
        <section className="section-padding bg-ivory" aria-labelledby="dubai-position-heading">
          <div className="section-container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-gold-antique text-xs uppercase tracking-widest font-body font-semibold">Geography & Trade</span>
                <h2 id="dubai-position-heading" className="font-display text-3xl text-emerald mt-2 mb-5">
                  Dubai&apos;s Position in the Gold Market
                </h2>
                <div className="space-y-4 text-emerald/75 font-body leading-relaxed">
                  <p>
                    Dubai sits at the southern end of the Arabian Gulf, close to the Strait of Hormuz — one of the world&apos;s most important maritime chokepoints. This geographical position places it between major gold-producing regions in Africa and the Americas and the world&apos;s largest gold-consuming markets in South and East Asia.
                  </p>
                  <p>
                    This is not coincidental. Dubai&apos;s rulers and merchants recognised early that geography was an asset, and invested in the port infrastructure, customs frameworks, and financial services necessary to translate location into commercial advantage.
                  </p>
                  <p>
                    Today, the emirate operates one of the world&apos;s busiest cargo airports and the largest port in the Middle East by capacity — Jebel Ali. These assets support the physical movement of gold at scale.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <FactCard
                  icon="📍"
                  title="Strategic Location"
                  body="Dubai sits at the midpoint between African and Asian gold markets, reducing transit costs and enabling efficient redistribution."
                />
                <FactCard
                  icon="🏛️"
                  title="DMCC Free Zone"
                  body="The Dubai Multi Commodities Centre (est. 2002) provides regulated infrastructure for commodity traders, including gold. Source: dmcc.ae"
                />
                <FactCard
                  icon="⚖️"
                  title="Open Trade Policy"
                  body="Historically low import tariffs on gold and a stable AED/USD peg have made Dubai an attractive base for international gold trading."
                />
                <FactCard
                  icon="✈️"
                  title="World-Class Logistics"
                  body="Dubai International Airport and Jebel Ali Port provide cargo capacity supporting the physical movement of bullion at institutional scale."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — City of Gold */}
        <section className="section-padding bg-emerald" aria-labelledby="city-of-gold-heading">
          <div className="section-container max-w-5xl">
            <span className="text-gold text-xs uppercase tracking-widest font-body font-semibold">Heritage</span>
            <h2 id="city-of-gold-heading" className="font-display text-3xl text-white mt-2 mb-5">
              The &ldquo;City of Gold&rdquo;
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4 text-white/70 font-body leading-relaxed">
                <p>
                  Dubai&apos;s nickname is grounded in history. By the mid-twentieth century, when many countries imposed high import duties on gold, Dubai maintained comparatively open policies — making it a natural transit and trading point.
                </p>
                <p>
                  The Dubai Gold Souk, established in the Deira district in the 1940s, became the physical embodiment of this reputation. Today it reportedly contains over 300 shops selling gold and precious metals, serving both local buyers and international visitors.
                </p>
                <p>
                  The nickname &ldquo;City of Gold&rdquo; reflects a commercial reality: Dubai is genuinely one of the world&apos;s most concentrated marketplaces for gold jewellery and bullion. Whether it holds a single definitive rank above all other markets depends on the metric used — the important point is that the underlying trading activity is real and substantial.
                </p>
                <p className="text-white/45 text-sm">
                  Source: Dubai Tourism (visitdubai.com), DMCC (dmcc.ae), World Gold Council (gold.org)
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Gold Souk Established', value: '1940s', note: 'Deira, Dubai' },
                  { label: 'Shops in Gold Souk', value: '300+', note: 'Approx. (varies by source)' },
                  { label: 'DMCC Established', value: '2002', note: 'Government free zone' },
                  { label: 'AED/USD Peg', value: '3.6725', note: 'Stable since 1980' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-gold/15 rounded-xl p-4">
                    <p className="text-gold font-display font-semibold text-2xl">{stat.value}</p>
                    <p className="text-white text-sm font-body">{stat.label}</p>
                    <p className="text-white/35 text-xs font-body">{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Leadership */}
        <section className="section-padding bg-ivory" aria-labelledby="leadership-heading">
          <div className="section-container max-w-5xl">
            <span className="text-gold-antique text-xs uppercase tracking-widest font-body font-semibold">Economic Development</span>
            <h2 id="leadership-heading" className="font-display text-3xl text-emerald mt-2 mb-8">
              Dubai&apos;s Development Under Its Rulers
            </h2>

            <div className="bg-gold/6 border border-gold/15 rounded-xl p-5 mb-8">
              <p className="text-emerald/70 text-sm font-body italic">
                <strong>Note:</strong> The following is a historically grounded overview based on public records and official UAE sources. SNMZ Gold & Diamonds does not imply endorsement by any ruler, government body, or official institution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Sheikh Rashid */}
              <div className="bg-white rounded-2xl p-7 border border-ivory-dark shadow-card">
                {/* Official portrait placeholder */}
                <div className="w-20 h-20 rounded-full bg-emerald/8 border-2 border-gold/20 flex items-center justify-center mb-4">
                  <span className="text-emerald/30 text-xs font-body text-center leading-tight px-2">Official portrait — contact WAM</span>
                </div>
                <h3 className="font-display text-xl text-emerald mb-1">
                  Sheikh Rashid bin Saeed Al Maktoum
                </h3>
                <p className="text-gold-antique text-xs font-body uppercase tracking-wide mb-4">Ruler of Dubai 1958–1990</p>
                <div className="space-y-3 text-emerald/75 font-body text-sm leading-relaxed">
                  <p>
                    Widely credited with laying the foundations of modern Dubai. Under his leadership, the emirate transitioned from a pearl-diving and trading economy to a regional commercial centre.
                  </p>
                  <p>
                    Key infrastructure developed during this era included the dredging of Dubai Creek, Port Rashid (1972), Jebel Ali Port (1979), and the Dubai World Trade Centre (1979).
                  </p>
                  <p>
                    His open trade policies — including relatively low import duties on gold — helped establish Dubai as a gold trading destination during a period when many other markets imposed higher barriers.
                  </p>
                </div>
                <p className="text-emerald/35 text-xs font-body mt-4">
                  Source: UAE Government Portal (u.ae), official historical records
                </p>
                <p className="text-emerald/35 text-xs font-body italic mt-1">
                  Official portrait available through UAE National Media Council / WAM (wam.ae)
                </p>
              </div>

              {/* Sheikh Mohammed */}
              <div className="bg-white rounded-2xl p-7 border border-ivory-dark shadow-card">
                <div className="w-20 h-20 rounded-full bg-emerald/8 border-2 border-gold/20 flex items-center justify-center mb-4">
                  <span className="text-emerald/30 text-xs font-body text-center leading-tight px-2">Official portrait — contact WAM</span>
                </div>
                <h3 className="font-display text-xl text-emerald mb-1">
                  Sheikh Mohammed bin Rashid Al Maktoum
                </h3>
                <p className="text-gold-antique text-xs font-body uppercase tracking-wide mb-4">
                  Vice President & Prime Minister of the UAE · Ruler of Dubai
                </p>
                <div className="space-y-3 text-emerald/75 font-body text-sm leading-relaxed">
                  <p>
                    His tenure has been associated with an accelerated pace of global positioning for Dubai — including the development of free zones, mega-projects, and the positioning of Dubai as an international aviation, tourism, and business hub.
                  </p>
                  <p>
                    Notable initiatives include Dubai Internet City, Dubai Media City, the expansion of Emirates airline, and hosting Expo 2020 Dubai (conducted 2021–2022).
                  </p>
                  <p>
                    The DMCC, a central institution for gold trading, was established in 2002 under this leadership era.
                  </p>
                </div>
                <p className="text-emerald/35 text-xs font-body mt-4">
                  Source: UAE Government Portal (u.ae), official UAE government communications
                </p>
                <p className="text-emerald/35 text-xs font-body italic mt-1">
                  Verify current official titles at: <a href="https://u.ae" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-antique">u.ae</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Sources */}
        <section className="section-padding bg-emerald-dark border-t border-gold/10" aria-labelledby="sources-heading">
          <div className="section-container max-w-5xl">
            <h2 id="sources-heading" className="font-display text-2xl text-white mb-6">
              Sources & Further Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'UAE Government Portal', url: 'https://u.ae/', desc: 'Official UAE government information and statistics' },
                { name: 'Dubai Multi Commodities Centre', url: 'https://www.dmcc.ae/', desc: 'Gold trading infrastructure, standards, and free zone information' },
                { name: 'Dubai Tourism', url: 'https://www.visitdubai.com/', desc: 'Gold Souk visitor information and Dubai attractions' },
                { name: 'World Gold Council', url: 'https://www.gold.org/', desc: 'Global gold market data, research, and trade information' },
                { name: 'UAE National Media Council (WAM)', url: 'https://www.wam.ae/', desc: 'Official UAE news agency and media office — source for official leadership imagery' },
                { name: 'LBMA', url: 'https://www.lbma.org.uk/', desc: 'London Bullion Market Association — international gold price benchmark' },
              ].map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:border-gold/25 transition-colors"
                >
                  <p className="text-gold font-body font-semibold text-sm mb-1">{source.name}</p>
                  <p className="text-white/50 text-xs font-body leading-relaxed">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-emerald border-t border-gold/15">
          <div className="section-container max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white mb-4">Explore Gold Rates in AED</h2>
            <p className="text-white/60 font-body mb-7">
              View live indicative gold rates for 24K, 22K, 21K and 18K in UAE Dirhams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/gold-prices" variant="primary">View Live Gold Rates</Button>
              <Button href="/who-we-are" variant="outline">About SNMZ</Button>
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
    <div className="bg-white rounded-xl p-4 border border-ivory-dark shadow-card flex gap-3">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-emerald font-body font-semibold text-sm mb-1">{title}</p>
        <p className="text-emerald/65 text-xs font-body leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
