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
      className="section-padding bg-[#111622] relative border-t border-[#252F3F] overflow-hidden w-full max-w-full"
      aria-labelledby="standards-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Context (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Trading Governance &amp; Integrity
              </span>
            </div>

            <h2
              id="standards-heading"
              className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-snug mb-4"
            >
              Built on Verifiable{' '}
              <span
                className="text-amber-400"
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

            <p className="text-gray-300 text-sm sm:text-base font-body leading-relaxed mb-8">
              Physical precious metals trading demands total transparency, traceable supply chains, and rigorous regulatory adherence.
              SNMZ Gold &amp; Diamonds operates as an established Dubai bullion dealer, conducting counterparty business with documented precision.
            </p>

            {/* Verified Credential Summary Card */}
            <div className="bg-[#161C26] border border-[#252F3F] rounded-2xl p-6 mb-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10 font-mono text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">UAE Trade Licence</span>
                  <span className="text-amber-400 font-bold text-sm sm:text-base">#{SiteConfig.tradeLicence}</span>
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:opacity-95 text-[#0B0F17] font-body font-bold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                Direct Desk Enquiry
              </a>
              <a
                href={officePhone}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#161C26] hover:bg-[#1C2330] text-white font-mono text-xs border border-[#252F3F] transition-colors"
              >
                Call {SiteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Blocks (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {standards.map((s) => (
              <div
                key={s.step}
                className="bg-[#161C26] border border-[#252F3F] hover:border-amber-400/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 relative group shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono font-bold text-2xl text-amber-400/60 group-hover:text-amber-400 transition-colors shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Honest Disclosure Box */}
            <div className="p-5 rounded-xl bg-[#161C26]/60 border border-[#252F3F] text-[11px] text-gray-400 leading-relaxed font-mono">
              <span className="text-amber-400 font-semibold block mb-1">Company Statement:</span>
              SNMZ Gold &amp; Diamonds is an independent precious metals dealer operating under Dubai economic authority. We do not offer investment advisory services, promise speculative returns, or claim unverified third-party certifications. All transactions represent physical commodity sales under commercial agreement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
