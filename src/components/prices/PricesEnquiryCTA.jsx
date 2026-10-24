import { Button } from '@/components/ui/Button';
import { SiteConfig } from '@/config/site';
import { whatsappUrl } from '@/lib/utils';

/**
 * Business enquiry CTA for the gold prices page.
 * Uses only configured contact details from SiteConfig — never invents data.
 * Server Component.
 */
export function PricesEnquiryCTA() {
  const waUrl = SiteConfig.whatsapp
    ? whatsappUrl(
        SiteConfig.whatsapp,
        'Hello, I would like to enquire about gold trading rates and terms with SNMZ Gold & Diamonds.'
      )
    : null;

  const hasContact = waUrl || SiteConfig.email || SiteConfig.phone;

  return (
    <section
      className="section-padding bg-emerald relative overflow-hidden"
      aria-labelledby="prices-cta-heading"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="section-label">Business Enquiries</span>

          <h2
            id="prices-cta-heading"
            className="font-display text-3xl sm:text-4xl text-white leading-tight"
          >
            Trade Gold with{' '}
            <span className="text-gradient-gold">SNMZ</span>
          </h2>
          <div className="gold-rule" />

          <p className="text-white/65 font-body leading-relaxed">
            SNMZ Gold & Diamonds deals in gold TT bars and precious metals for
            institutional and corporate buyers in the UAE and internationally.
            Reach out to discuss trading rates, quantities, documentation and
            settlement terms.
          </p>

          {hasContact ? (
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              {waUrl && (
                <Button
                  href={waUrl}
                  variant="primary"
                  size="lg"
                  className="flex-1 justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Enquire on WhatsApp
                </Button>
              )}
              {SiteConfig.email && (
                <Button
                  href={`mailto:${SiteConfig.email}`}
                  variant="outline"
                  size="lg"
                  className="flex-1 justify-center"
                >
                  Email Us
                </Button>
              )}
            </div>
          ) : (
            /* Placeholder state — contact not yet configured */
            <div className="glass rounded-2xl px-6 py-5 w-full max-w-md text-center">
              <p className="text-gold text-xs uppercase tracking-widest font-body mb-2">
                Contact
              </p>
              <p className="text-white/40 text-sm italic font-body">
                Contact details not yet configured.
                Add <code className="text-gold/60 text-xs">NEXT_PUBLIC_WHATSAPP</code> and{' '}
                <code className="text-gold/60 text-xs">NEXT_PUBLIC_EMAIL</code> to{' '}
                <code className="text-gold/60 text-xs">.env.local</code> to activate this CTA.
              </p>
            </div>
          )}

          <p className="text-white/25 text-xs font-body italic">
            All trading is subject to KYC/AML verification and applicable regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
