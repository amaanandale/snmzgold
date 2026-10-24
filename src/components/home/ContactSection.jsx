import { Button } from '@/components/ui/Button';
import { SiteConfig } from '@/config/site';
import { whatsappUrl } from '@/lib/utils';

export function ContactSection() {
  const waUrl = SiteConfig.whatsapp
    ? whatsappUrl(SiteConfig.whatsapp, 'Hello, I would like to enquire about gold trading with SNMZ Gold & Diamonds.')
    : null;

  return (
    <section
      id="contact"
      className="section-padding bg-emerald relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-7">

          {/* Section label */}
          <span className="section-label">Get in Touch</span>

          <h2
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl text-white leading-tight"
          >
            Ready to Trade{' '}
            <span className="text-gradient-gold">Gold in Dubai?</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-antique" />

          <p className="text-white/70 text-lg font-body leading-relaxed">
            Whether you are a jeweller, institution or corporate buyer,
            SNMZ Gold & Diamonds is your professional counterparty for
            gold and precious metal transactions in the UAE.
            Reach out to begin the conversation.
          </p>

          {/* Contact options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mt-2">
            {waUrl ? (
              <Button
                href={waUrl}
                variant="primary"
                size="lg"
                className="w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </Button>
            ) : (
              <div className="card-dark text-center py-4 px-5">
                <p className="text-gold text-xs uppercase tracking-widest font-body mb-1">WhatsApp</p>
                <p className="text-white/40 text-sm italic font-body">[Number to be configured]</p>
              </div>
            )}

            <div className="card-dark text-center py-4 px-5">
              <p className="text-gold text-xs uppercase tracking-widest font-body mb-1">Email</p>
              {SiteConfig.email ? (
                <a
                  href={`mailto:${SiteConfig.email}`}
                  className="text-white/80 hover:text-gold text-sm font-body transition-colors"
                >
                  {SiteConfig.email}
                </a>
              ) : (
                <p className="text-white/40 text-sm italic font-body">[To be provided]</p>
              )}
            </div>
          </div>

          {/* Additional contact info placeholders */}
          <div className="glass rounded-2xl p-6 w-full max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-body mb-1">Phone</p>
                {SiteConfig.phone ? (
                  <a href={`tel:${SiteConfig.phone}`} className="text-white/70 text-sm font-body hover:text-gold transition-colors">
                    {SiteConfig.phone}
                  </a>
                ) : (
                  <p className="text-white/35 text-sm italic font-body">[To be provided]</p>
                )}
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-body mb-1">Office</p>
                <p className="text-white/35 text-sm italic font-body">[Address to be provided]</p>
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-body mb-1">Hours</p>
                <p className="text-white/35 text-sm italic font-body">[To be provided]</p>
              </div>
            </div>
          </div>

          <p className="text-white/25 text-xs italic font-body">
            All enquiries are subject to KYC verification. SNMZ Gold & Diamonds trades with verified counterparties only.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
