import { SectionHeading } from '@/components/ui/SectionHeading';

const trustMetrics = [
  {
    value: '[X]+',
    label: 'Years in Gold Trading',
    note: '[To be provided]',
  },
  {
    value: '[X]',
    label: 'Kg Traded Annually',
    note: '[To be provided]',
  },
  {
    value: '999.9',
    label: 'Fineness Standard',
    note: 'Industry benchmark',
  },
  {
    value: '100%',
    label: 'Documented Transactions',
    note: 'Full paper trail',
  },
];

const capabilities = [
  {
    icon: <GlobeIcon />,
    title: 'Corporate & Institutional Buyers',
    body: 'We serve jewellers, financial institutions, and corporate buyers requiring reliable, bulk access to 24K gold in TT bar format.',
  },
  {
    icon: <BarChartIcon />,
    title: 'Market-Referenced Pricing',
    body: 'Our pricing is benchmarked against international spot rates. [Live price feed — future phase.] We commit to transparent, documented pricing for every trade.',
  },
  {
    icon: <TruckIcon />,
    title: 'Secure Delivery',
    body: 'Logistics and delivery arrangements are handled with the highest security standards. [Details to be confirmed by SNMZ.]',
  },
  {
    icon: <UserCheckIcon />,
    title: 'Counterparty Vetting',
    body: 'All trading counterparties undergo KYC/AML screening before any transaction is initiated — protecting both parties.',
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="section-padding bg-emerald"
      aria-labelledby="capabilities-heading"
    >
      <div className="section-container">

        {/* Trust numbers banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustMetrics.map((metric) => (
            <div
              key={metric.label}
              className="relative text-center py-8 px-4 rounded-2xl border border-gold/20 bg-gold/5 hover:border-gold/40 transition-colors duration-300"
            >
              <div className="text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-1 leading-tight">
                {metric.value}
              </div>
              <div className="text-white/70 text-sm font-body font-medium">{metric.label}</div>
              {metric.note && (
                <div className="text-white/35 text-xs italic font-body mt-1">{metric.note}</div>
              )}
            </div>
          ))}
        </div>

        <SectionHeading
          label="Trading Capabilities & Trust"
          title={<span id="capabilities-heading">Why Choose SNMZ</span>}
          subtitle="A professional counterparty for gold buyers who need more than just product — they need documentation, compliance and a relationship they can rely on."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="card-dark flex gap-5 items-start hover:scale-[1.01] transition-transform duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                {cap.icon}
              </div>
              <div>
                <h3 className="text-white font-display font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">{cap.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-white/25 italic font-body mt-10">
          All trading volumes and metrics are placeholders. Verified data to be supplied by SNMZ.
        </p>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
}
function BarChartIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
}
function TruckIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
}
function UserCheckIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>;
}
