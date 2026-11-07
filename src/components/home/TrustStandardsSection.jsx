import { SiteConfig } from '@/config/site';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

/**
 * Redesigned "Built on Verifiable Standards" section.
 * Premium editorial two-column layout inspired by institutional bullion houses.
 * Restrained numbered blocks, verified company credentials, and honest trade guidance.
 */
export function TrustStandardsSection() {
  const waUrl = getWhatsAppUrl('homepage');
  const officePhone = getOfficePhoneUrl();

  const standards = [
    {
      step: '01',
      title: 'Physical Assay & Purity Verification',
      description:
        'All physical bullion handled by SNMZ complies with industry-standard 24K (999.9 fine) gold and 999 fine silver benchmarks. Each bar is subject to weight inspection, hallmark identification, and assay verification prior to counterparty handover.',
    },
    {
      step: '02',
      title: 'Statutory UAE AML & CFT Compliance',
      description:
        'In strict compliance with UAE Federal Law and Ministry of Economy guidelines for precious metals, all counterparties undergo KYC verification. We maintain strict documentation and anti-money laundering controls across all transactions.',
    },
    {
      step: '03',
      title: 'Transparent Spot-Linked Pricing',
      description:
        'Trades are priced against live international spot feeds (XAU & XAG in AED) with agreed commercial premiums. We publish our indicative rates openly to ensure complete transparency before trade confirmation.',
    },
    {
      step: '04',
      title: 'Documented Physical Handover & Invoicing',
      description:
        'Every transaction is executed with clear commercial invoicing, weight slips, and legal documentation. Settlement is conducted securely at our physical trading premises in Al Dhagaya, Dubai.',
    },
  ];

  return (
    <section
      id="verifiable-standards"
      className="section-padding bg-emerald-dark relative border-t border-gold/15"
      aria-labelledby="standards-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Context (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-mono uppercase tracking-widest text-gold">
                Trading Governance &amp; Integrity
              </span>
            </div>

            <h2
              id="standards-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[40px] text-white leading-tight mb-5"
            >
              Built on Verifiable{' '}
              <span
                className="text-gold"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ECC84A 0%, #DFAF24 45%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Standards
              </span>
            </h2>

            <p className="text-white/70 text-sm sm:text-base font-body leading-relaxed mb-8">
              Physical precious metals trading demands total transparency, traceable supply chains, and rigorous regulatory adherence.
              SNMZ Gold &amp; Diamonds operates as an established Dubai bullion dealer, conducting counterparty business with documented precision.
            </p>

            {/* Verified Credential Summary Card */}
            <div className="bg-emerald-light/25 border border-gold/20 rounded-2xl p-6 mb-8 shadow-lg">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10 font-mono text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">UAE Trade Licence</span>
                  <span className="text-gold font-bold text-sm sm:text-base">#{SiteConfig.tradeLicence}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Established</span>
                  <span className="text-white font-bold text-sm sm:text-base">{SiteConfig.establishedYear} · Dubai</span>
                </div>
              </div>

              <div className="pt-4 font-mono text-xs space-y-1.5">
                <div className="text-white/80">
                  <span className="text-white/40">Office: </span>
                  {SiteConfig.address}
                </div>
                <div className="text-white/80">
                  <span className="text-white/40">Hours: </span>
                  {SiteConfig.businessHours}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-emerald-dark font-body font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                Direct Desk Enquiry
              </a>
              <a
                href={officePhone}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 transition-colors"
              >
                Call {SiteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Blocks (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {standards.map((s) => (
              <div
                key={s.step}
                className="bg-emerald-light/20 border border-white/8 hover:border-gold/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 relative group shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono font-bold text-2xl text-gold/60 group-hover:text-gold transition-colors shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-body">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Honest Disclosure Box */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-white/50 leading-relaxed font-mono">
              <span className="text-gold font-semibold block mb-1">Company Statement:</span>
              SNMZ Gold &amp; Diamonds is an independent precious metals dealer operating under Dubai economic authority. We do not offer investment advisory services, promise speculative returns, or claim unverified third-party certifications. All transactions represent physical commodity sales under commercial agreement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
