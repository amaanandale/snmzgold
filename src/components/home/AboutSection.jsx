import { SectionHeading } from '@/components/ui/SectionHeading';

const pillars = [
  {
    icon: <ShieldIcon />,
    title: 'Verified Purity',
    description: 'Every bar we trade undergoes rigorous purity verification. We deal exclusively in 999.9 fine, 24-karat gold that meets international bullion standards.',
  },
  {
    icon: <ScaleIcon />,
    title: 'Compliant Trading',
    description: 'Our trading practices are structured around regulatory compliance, transparent documentation and traceable supply chains—for your peace of mind.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Trusted Partners',
    description: 'We build long-term relationships with institutional and corporate buyers, offering reliable supply, consistent quality and professional service.',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-emerald"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Copy */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              label="About SNMZ"
              title={<span id="about-heading">Who We Are</span>}
              subtitle="SNMZ Gold & Diamonds is a dedicated gold trading company focused exclusively on the supply and trade of 24K TT (Tola / Troy) gold bars — one of the most trusted gold bar formats in institutional bullion markets."
              align="left"
            />

            <div className="space-y-5 text-white/70 font-body leading-relaxed">
              <p>
                Founded on the principles of transparency, purity and precision, SNMZ operates as a professional counterparty for corporate buyers, investors and institutions seeking consistent access to investment-grade physical gold.
              </p>
              <p>
                We understand that gold trading demands more than just product availability — it demands verified documentation, clear provenance, and a partner you can trust unconditionally.
              </p>
              <div className="border-l-2 border-gold pl-5 py-1">
                <p className="text-white/50 text-sm italic">
                  [Company history, founding year and additional background to be supplied by SNMZ]
                </p>
              </div>
            </div>

            {/* Placeholder for certifications */}
            <div className="glass rounded-xl p-5">
              <p className="text-gold text-xs uppercase tracking-widest font-body mb-3">Company Credentials</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Registration No.',
                  'GST Number',
                  'Trade Licence',
                  'Regulatory Body',
                ].map((item) => (
                  <div key={item} className="flex flex-col gap-0.5">
                    <span className="text-white/40 text-xs font-body">{item}</span>
                    <span className="text-white/50 text-sm italic font-body">[To be provided]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="card-dark flex gap-5 items-start group hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold text-lg mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-sm font-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="3" x2="12" y2="21"/>
      <polyline points="8 8 2 8 2 20 8 20"/>
      <polyline points="16 8 22 8 22 20 16 20"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    </svg>
  );
}
