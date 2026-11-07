import { Button } from '@/components/ui/Button';
import { SiteConfig } from '@/config/site';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

export function ContactSection() {
  const waUrl = getWhatsAppUrl('contact');
  const officePhone = getOfficePhoneUrl();

  return (
    <section
      id="contact"
      className="section-padding bg-emerald relative overflow-hidden border-t border-gold/15"
      aria-labelledby="contact-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #DFAF24 0%, transparent 70%)' }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-7">
          {/* Section label */}
          <span className="section-label">Enquiries &amp; Trading Desk</span>

          <h2
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl text-white leading-tight font-bold"
          >
            Connect with Our{' '}
            <span
              className="text-gold"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ECC84A 0%, #DFAF24 45%, #B8860B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Bullion Desk
            </span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-antique" />

          <p className="text-white/70 text-base sm:text-lg font-body leading-relaxed max-w-xl">
            Whether inquiring about wholesale 1 kg gold bars, 10 tola TT bars, or physical silver allocations in Dubai, our bullion specialists provide real-time pricing and order settlement.
          </p>

          {/* Primary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mt-2">
            <Button
              href={waUrl}
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-gold font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp Bullion Desk
            </Button>

            <a
              href={officePhone}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-gold/30 hover:border-gold font-body font-semibold text-sm transition-all"
            >
              <PhoneIcon />
              <span>Call {SiteConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* Business Details Grid */}
          <div className="glass rounded-2xl p-6 w-full max-w-2xl mt-3 border border-gold/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-mono mb-1 font-semibold">
                  Trading Office
                </p>
                <p className="text-white/80 text-xs font-body leading-relaxed">
                  {SiteConfig.address}
                </p>
              </div>

              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-mono mb-1 font-semibold">
                  Trading Hours
                </p>
                <p className="text-white/80 text-xs font-mono">
                  {SiteConfig.businessHours}
                </p>
                <span className="text-[10px] text-white/50 block mt-0.5">Gulf Standard Time</span>
              </div>

              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-mono mb-1 font-semibold">
                  Trade Licence
                </p>
                <p className="text-white/80 text-xs font-mono font-bold">
                  #{SiteConfig.tradeLicence}
                </p>
                <span className="text-[10px] text-white/50 block mt-0.5">Est. {SiteConfig.establishedYear} · Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
