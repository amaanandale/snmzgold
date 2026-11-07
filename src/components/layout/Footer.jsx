import Link from 'next/link';
import { SiteConfig } from '@/config/site';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = getWhatsAppUrl('contact');
  const officePhone = getOfficePhoneUrl();

  return (
    <footer className="bg-emerald-dark border-t border-gold/20" role="contentinfo">
      {/* Main footer content */}
      <div className="section-container py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-5">
              <Link
                href="/"
                aria-label="SNMZ Gold &amp; Diamonds — Home"
                className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                <LogoIcon size="lg" className="hover:opacity-95 transition-opacity" />
              </Link>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 font-body max-w-sm">
              Licensed precious metals and bullion dealer in Dubai offering investment-grade 24K gold TT bars, cast bars, minted bullion, and physical silver. Live AED spot rates and counterparty excellence.
            </p>

            <div className="flex flex-col gap-2 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                <span className="text-white/90">Al Dhagaya, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <span>Trading Hours: {SiteConfig.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Bullion & Catalogue (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-gold text-xs font-semibold uppercase tracking-widest font-mono mb-4">
              Bullion
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body">
              <li>
                <Link href="/shop" className="text-white/70 hover:text-gold transition-colors">
                  Shop Catalogue
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/70 hover:text-gold transition-colors">
                  Gold Bullion (24K)
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/70 hover:text-gold transition-colors">
                  Silver Bullion (999)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-gold transition-colors">
                  Bullion Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Live Rates & Insights (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-gold text-xs font-semibold uppercase tracking-widest font-mono mb-4">
              Live Rates &amp; Hub
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body">
              <li>
                <Link href="/gold-prices" className="text-white/70 hover:text-gold transition-colors">
                  Gold Price (AED)
                </Link>
              </li>
              <li>
                <Link href="/silver-prices" className="text-white/70 hover:text-gold transition-colors">
                  Silver Price (AED)
                </Link>
              </li>
              <li>
                <Link href="/why-dubai" className="text-white/70 hover:text-gold transition-colors">
                  Why Dubai?
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white/70 hover:text-gold transition-colors">
                  Knowledge Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Desk Actions (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-gold text-xs font-semibold uppercase tracking-widest font-mono mb-4">
              Bullion Desk Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm font-body">
              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">Office Telephone</span>
                <a
                  href={officePhone}
                  className="font-mono text-white hover:text-gold font-semibold transition-colors"
                >
                  {SiteConfig.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">WhatsApp Trading Desk</span>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-gold hover:underline flex items-center gap-1.5"
                >
                  <WhatsAppSmallIcon />
                  <span>{SiteConfig.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">Premises</span>
                <span className="text-white/70 text-xs leading-relaxed block font-mono">
                  {SiteConfig.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Company Details Line */}
      <div className="border-t border-gold/15 bg-emerald-dark/95">
        <div className="section-container py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs text-white/60 font-body">
            <span>&copy; {currentYear} {SiteConfig.name}. All rights reserved.</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="font-mono text-gold/90 font-medium">UAE Trade Licence: #{SiteConfig.tradeLicence}</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>Established {SiteConfig.establishedYear} · Dubai</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppSmallIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
