import { SectionHeading } from '@/components/ui/SectionHeading';

const certifications = [
  {
    icon: <HallmarkIcon />,
    title: 'Purity Standards',
    status: 'pending',
    description: 'Purity certification and standards documentation to be confirmed by SNMZ in line with applicable UAE and international requirements.',
  },
  {
    icon: <DocumentIcon />,
    title: 'Assay Certification',
    status: 'pending',
    description: 'Independent assay certificates accompany each bar to verify fineness and weight.',
  },
  {
    icon: <LockIcon />,
    title: 'AML / KYC Compliance',
    status: 'active',
    description: 'We adhere to Anti-Money Laundering and Know-Your-Customer requirements for all trading counterparties.',
  },
  {
    icon: <FileIcon />,
    title: 'VAT & Taxation',
    status: 'pending',
    description: 'All transactions are documented in compliance with applicable UAE VAT regulations. Registration details to be provided.',
  },
  {
    icon: <ChainIcon />,
    title: 'Supply Chain Traceability',
    status: 'active',
    description: 'Documented procurement ensures a traceable, compliant supply chain from refinery to buyer.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Regulatory Filings',
    status: 'pending',
    description: 'Applicable regulatory registrations and filings — details to be supplied by SNMZ.',
  },
];

const complianceSteps = [
  { step: '01', title: 'KYC Verification', body: 'Submit identity and business documents for onboarding.' },
  { step: '02', title: 'Quantity & Terms', body: 'Agree on quantity, pricing benchmark and settlement terms.' },
  { step: '03', title: 'Documentation', body: 'Receive invoice, assay certificate and delivery confirmation.' },
  { step: '04', title: 'Settlement', body: 'Complete transaction with fully documented payment records.' },
];

export function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="section-padding bg-emerald-dark"
      aria-labelledby="compliance-heading"
    >
      <div className="section-container">
        <SectionHeading
          label="Purity · Certifications · Compliance"
          title={<span id="compliance-heading">Built on Verifiable Standards</span>}
          subtitle="Gold trading demands absolute integrity. Every bar we handle is accompanied by documentation that meets regulatory and institutional requirements."
          align="center"
        />

        {/* Certification cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="card-dark flex flex-col gap-4 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  {cert.icon}
                </div>
                <StatusPill status={cert.status} />
              </div>
              <div>
                <h3 className="text-white font-display font-semibold text-base mb-2">{cert.title}</h3>
                <p className="text-white/55 text-sm font-body leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section divider */}
        <div className="section-divider my-14" />

        {/* Trading process */}
        <div className="text-center mb-10">
          <h3 className="text-gold text-xs uppercase tracking-widest font-body mb-2">How We Trade</h3>
          <h2 className="font-display text-2xl lg:text-3xl text-white">The SNMZ Trading Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceSteps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col items-center text-center gap-3 p-6">
              {/* Connector line */}
              {i < complianceSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px border-t border-dashed border-gold/25" />
              )}
              <div className="w-14 h-14 rounded-full border-2 border-gold/40 bg-gold/10 flex items-center justify-center z-10">
                <span className="text-gold font-display font-bold text-lg">{step.step}</span>
              </div>
              <h4 className="text-white font-display font-semibold text-base">{step.title}</h4>
              <p className="text-white/55 text-sm font-body leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 italic mt-8 font-body">
          Specific compliance and certification details subject to confirmation by SNMZ. This is illustrative only.
        </p>
      </div>
    </section>
  );
}

function StatusPill({ status }) {
  const variants = {
    active: 'bg-green-500/10 text-green-400 border-green-500/20',
    pending: 'bg-gold/10 text-gold border-gold/20',
  };
  const labels = { active: 'Active', pending: 'To Confirm' };
  return (
    <span className={`text-xs font-body font-medium px-2.5 py-1 rounded-full border ${variants[status]}`}>
      {labels[status]}
    </span>
  );
}

function HallmarkIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}
function DocumentIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
}
function LockIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
function FileIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>;
}
function ChainIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
}
function ShieldCheckIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
}
