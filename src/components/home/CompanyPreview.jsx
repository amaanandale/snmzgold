import Link from 'next/link';

/**
 * Homepage — Brief company preview (replaces full About section).
 * Full company profile lives at /who-we-are.
 * Server Component.
 */
export function CompanyPreview() {
  return (
    <section
      id="about"
      className="section-padding bg-ivory"
      aria-labelledby="company-preview-heading"
    >
      <div className="section-container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="text-gold-antique text-xs uppercase tracking-[0.25em] font-body font-semibold block mb-3">
              About SNMZ
            </span>
            <h2
              id="company-preview-heading"
              className="font-display text-3xl sm:text-4xl text-emerald mb-5"
            >
              SNMZ Gold & Diamonds
            </h2>
            <div className="w-10 h-0.5 bg-gold/40 mb-6" />

            <div className="space-y-4 text-emerald/70 font-body leading-relaxed">
              <p>
                SNMZ Gold & Diamonds is a premium precious-metals brand serving the UAE market — offering gold, diamonds, and expert guidance for buyers, traders, and institutions.
              </p>
              <p>
                We operate with a clear commitment to verified purity, transparent AED pricing, and professional compliance standards. Our gold rates are derived from live international spot data and displayed publicly.
              </p>
            </div>

            <Link
              href="/who-we-are"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-emerald text-white rounded-xl text-sm font-body font-medium hover:bg-emerald-light transition-colors"
            >
              Our Full Story →
            </Link>
          </div>

          {/* Right — key facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🔍', title: 'Verified Purity', body: 'Investment-grade 999.9 fine gold, purity-verified before each transaction.' },
              { icon: '💱', title: 'AED Pricing', body: 'All rates in UAE Dirhams, derived from live LBMA/XAU spot data.' },
              { icon: '⚖️', title: 'KYC / AML', body: 'Full regulatory compliance for all counterparties — institutional and corporate.' },
              { icon: '🌐', title: 'UAE & Global', body: 'Serving the UAE market and international institutional buyers.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-ivory-dark rounded-xl p-4 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <span className="text-2xl mb-3 block" aria-hidden="true">{item.icon}</span>
                <h3 className="text-emerald font-display font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-emerald/55 text-xs font-body leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
