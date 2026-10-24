import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Who We Are — SNMZ Gold & Diamonds | Dubai',
  description:
    'Learn about SNMZ Gold & Diamonds — our approach to gold and diamond trading in the UAE, our values, and how to get in touch.',
  openGraph: {
    title: 'Who We Are | SNMZ Gold & Diamonds',
    description: 'Our story, values, and approach to premium gold trading in Dubai.',
  },
};

const values = [
  {
    icon: '🔍',
    title: 'Transparency',
    description:
      'We price gold based on verifiable international spot rates. Our AED rates are displayed publicly and updated regularly from live market data.',
  },
  {
    icon: '⚖️',
    title: 'Purity & Integrity',
    description:
      'Every transaction is subject to purity verification. We do not compromise on product standards or misrepresent the quality of metals we trade.',
  },
  {
    icon: '🤝',
    title: 'Professional Partnership',
    description:
      'We build long-term relationships with institutional and corporate counterparties, providing consistent service and reliable supply.',
  },
  {
    icon: '📋',
    title: 'Regulatory Compliance',
    description:
      'We operate within applicable UAE and international regulatory frameworks, including KYC/AML obligations for all trading counterparties.',
  },
];

const offerings = [
  {
    title: '24K Gold TT Bars',
    description:
      'Investment-grade 999.9 fine gold bars in standard TT (Ten Tola / Troy) denominations. Verified purity, documented sourcing.',
  },
  {
    title: 'Diamonds',
    description:
      'Precious stones for institutional and retail buyers. Details to be confirmed by SNMZ.',
  },
  {
    title: 'AED-Priced Rates',
    description:
      'Gold rates displayed in AED, derived from international LBMA/XAU spot prices. Updated regularly for transparency.',
  },
  {
    title: 'Business Enquiries',
    description:
      'We work with institutional buyers, jewellers, and corporate counterparties. Contact us to discuss quantities, terms, and documentation.',
  },
];

const placeholders = [
  { label: 'Company Registration', value: '[To be supplied by SNMZ]' },
  { label: 'UAE Trade Licence', value: '[To be supplied by SNMZ]' },
  { label: 'VAT Registration', value: '[To be supplied by SNMZ]' },
  { label: 'Office Address', value: '[To be supplied by SNMZ]' },
  { label: 'Founded', value: '[To be supplied by SNMZ]' },
  { label: 'Regulatory Body', value: '[To be confirmed by SNMZ]' },
];

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-ivory min-h-screen">

        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20 border-b border-gold/10" aria-labelledby="who-heading">
          <div className="section-container max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
              <span className="text-gold/80 text-xs font-body font-semibold uppercase tracking-[0.25em]">
                About SNMZ
              </span>
            </div>
            <h1 id="who-heading" className="font-display text-5xl sm:text-6xl text-white mb-5 leading-tight">
              Who We Are
            </h1>
            <p className="text-white/65 text-xl font-body leading-relaxed max-w-2xl">
              SNMZ Gold & Diamonds is a premium precious-metals brand serving the UAE market — offering gold, diamonds, and expert guidance for buyers, traders, and institutions.
            </p>
          </div>
        </section>

        {/* Company intro */}
        <section className="section-padding bg-ivory" aria-labelledby="company-intro-heading">
          <div className="section-container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <h2 id="company-intro-heading" className="font-display text-3xl text-emerald mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-emerald/75 font-body leading-relaxed">
                  <p>
                    SNMZ Gold & Diamonds was established to provide transparent, professionally managed access to gold and precious metals in the UAE market. Our operations are built around the principles of verified purity, documented supply chains, and clear pricing.
                  </p>
                  <p>
                    Dubai is one of the world&apos;s most important gold trading centres, connecting producers in Africa and the Americas with the world&apos;s largest consumer markets in Asia. We operate within this ecosystem — and we are proud to serve it with integrity.
                  </p>
                  <p>
                    We deal in investment-grade physical gold — primarily 24K TT bars — for institutional and corporate buyers. Our rates are published publicly in AED, based on live international spot prices.
                  </p>
                  <div className="bg-gold/6 border border-gold/15 rounded-xl p-4 mt-2">
                    <p className="text-emerald/60 text-sm italic">
                      [Company founding year, founder names, and additional company history to be supplied by SNMZ. We will update this page when verified information is available.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Company details */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 border border-ivory-dark shadow-card">
                  <h3 className="font-display text-lg text-emerald mb-5">Company Details</h3>
                  <div className="space-y-3">
                    {placeholders.map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5 pb-3 border-b border-ivory-dark last:border-0 last:pb-0">
                        <span className="text-emerald/45 text-xs font-body uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-emerald/50 text-sm font-body italic">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-emerald/30 text-xs font-body italic mt-4">
                    Company registration details to be supplied by the business owner and verified before publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-emerald" aria-labelledby="values-heading">
          <div className="section-container max-w-5xl">
            <span className="text-gold text-xs uppercase tracking-widest font-body font-semibold">Our Principles</span>
            <h2 id="values-heading" className="font-display text-3xl text-white mt-2 mb-10">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/25 transition-colors">
                  <span className="text-3xl mb-4 block" aria-hidden="true">{v.icon}</span>
                  <h3 className="font-display text-lg text-white mb-2">{v.title}</h3>
                  <p className="text-white/60 text-sm font-body leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section className="section-padding bg-ivory" aria-labelledby="offerings-heading">
          <div className="section-container max-w-5xl">
            <span className="text-gold-antique text-xs uppercase tracking-widest font-body font-semibold">What We Offer</span>
            <h2 id="offerings-heading" className="font-display text-3xl text-emerald mt-2 mb-10">
              Our Products & Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {offerings.map((item, i) => (
                <div key={item.title} className="bg-white border border-ivory-dark rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-display font-semibold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg text-emerald">{item.title}</h3>
                  </div>
                  <p className="text-emerald/65 text-sm font-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-emerald-dark border-t border-gold/10">
          <div className="section-container max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white mb-4">Get in Touch</h2>
            <p className="text-white/60 font-body mb-7">
              Interested in trading with SNMZ? Reach out to discuss rates, quantities, documentation, and settlement terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/#contact" variant="primary">Contact SNMZ</Button>
              <Button href="/gold-prices" variant="outline">View Gold Rates</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
