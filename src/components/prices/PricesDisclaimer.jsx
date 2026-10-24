/**
 * Disclaimer and information panel for the gold prices page.
 * Server Component.
 */
export function PricesDisclaimer() {
  const points = [
    {
      icon: <ClockIcon />,
      title: 'Rates change throughout the day',
      body: 'Gold prices fluctuate continuously in response to international spot markets, USD/AED movements, and regional demand. Rates shown are indicative and may not reflect the current market price.',
    },
    {
      icon: <TagIcon />,
      title: 'Retail prices differ from spot rates',
      body: 'Jewellery retail prices in the UAE include making charges, VAT (5% where applicable), stone costs, wastage and premiums — all separate from the indicative gold rate per gram.',
    },
    {
      icon: <DocumentIcon />,
      title: 'Purity and transaction terms matter',
      body: 'Final pricing depends on verified purity, applicable UAE regulations, quantity, settlement terms, and counterparty KYC/AML compliance. Always confirm with your trading counterparty.',
    },
    {
      icon: <InfoIcon />,
      title: 'Not investment advice',
      body: 'Information on this page is for general reference only. It does not constitute financial, investment or trading advice. Consult a UAE-licensed financial advisor for investment decisions.',
    },
  ];


  return (
    <section
      className="section-padding bg-emerald-dark"
      aria-labelledby="disclaimer-heading"
    >
      <div className="section-container">
        <div className="mb-10">
          <span className="section-label block mb-2">Price Information</span>
          <h2
            id="disclaimer-heading"
            className="font-display text-3xl text-white leading-tight"
          >
            What You Should Know
          </h2>
          <div className="gold-rule mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map((point) => (
            <div
              key={point.title}
              className="card-dark flex gap-4 items-start group hover:border-gold/35 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
                {point.icon}
              </div>
              <div>
                <h3 className="text-white font-display font-semibold text-base mb-1.5 leading-snug">
                  {point.title}
                </h3>
                <p className="text-white/55 text-sm font-body leading-relaxed">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}
function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
