import { GoldImage } from '@/components/ui/GoldImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const specs = [
  { label: 'Purity',         value: '999.9 Fine (24K)' },
  { label: 'Format',         value: 'TT Bar (Ten Tola / Troy)' },
  { label: 'Weight Options', value: '10g · 50g · 100g · 1 kg*' },
  { label: 'Finish',         value: 'Minted / Cast' },
  { label: 'Certification',  value: '[To be confirmed by SNMZ]' },
  { label: 'Standards',      value: '[To be confirmed by SNMZ]' },
];

const features = [
  {
    title: 'Investment-Grade Quality',
    body: '24K TT bars are the globally recognised standard for investment-grade physical gold, preferred by banks, refineries and institutional traders in the UAE and worldwide.',
  },
  {
    title: 'Transparent AED Pricing',
    body: 'Our pricing is referenced to verified international benchmarks (LBMA), converted to AED. View live indicative rates on our Gold Rates page.',
  },
  {
    title: 'Reliable Supply Chain',
    body: 'We maintain a disciplined supply chain with documented sourcing, ensuring provenance and traceability for every transaction in line with UAE regulatory expectations.',
  },
  {
    title: 'Flexible Quantities',
    body: 'We accommodate orders of varying sizes — from individual bars to bulk institutional quantities — subject to availability and KYC/AML compliance.',
  },
];

/**
 * @param {{ id?: string }} props
 */
export function TradingSection({ id = 'jewellery' }) {
  return (
    <section
      id={id}
      className="section-padding bg-ivory"
      aria-labelledby="trading-heading"
    >
      <div className="section-container">
        {/* Heading */}
        <SectionHeading
          label="Gold & Precious Metals"
          title={<span id="trading-heading">24K Gold TT Bars</span>}
          subtitle="TT bars (Ten Tola / Troy) represent the standard denomination for institutional gold trading — combining high purity, compact form and global recognisability."
          align="center"
          light
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Image + specs */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-gold border border-gold/20">
              <GoldImage
                src="/images/gold-bar-close.jpg"
                alt="Close-up of a premium 24K gold TT bar showing purity markings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                fallbackText="24K Gold Bar — 999.9 Fine"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge>24K · 999.9 Fine</Badge>
              </div>
            </div>

            {/* Spec table */}
            <div className="card-ivory">
              <h3 className="text-emerald font-display font-semibold text-lg mb-4">
                Bar Specifications
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5">
                    <span className="text-emerald/50 text-xs font-body uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span
                      className={`text-emerald font-body font-medium text-sm ${
                        spec.value.startsWith('[') ? 'italic text-emerald/40' : ''
                      }`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-emerald/40 italic mt-4">
                * Weight options subject to confirmation by SNMZ
              </p>
            </div>
          </div>

          {/* Right — Features */}
          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="card-ivory group hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center mt-0.5">
                    <span className="text-gold-antique font-display font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-emerald font-display font-semibold text-base mb-1.5 group-hover:text-gold-antique transition-colors duration-200">
                      {f.title}
                    </h3>
                    <p className="text-emerald/60 text-sm font-body leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-xs text-emerald/40 italic font-body px-1">
              Trading is subject to applicable KYC, AML and UAE regulatory requirements.
              All figures are illustrative; verified details to be confirmed by SNMZ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
