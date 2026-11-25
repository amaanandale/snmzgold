import Link from 'next/link';
import { SiteConfig } from '@/config/site';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

/**
 * Footer Component — Aligned with Tora Bullion Mobile & Desktop Architecture.
 *
 * Implements:
 * - Mobile Format:
 *   * Top brand block: Official logo + established description + row of 4 rounded social icon buttons
 *   * 2-Column Grid:
 *     - QUICK LINKS (Blogs, Shop Catalogue, Gold Rates 24K, Silver Rates 999, Bullion Gallery, Contact)
 *     - OUR LOCATIONS (Dubai Trading Office: F03, Al Fadan Building, Al Dhagaya, Deira, Dubai)
 *   * Dedicated CONTACT Block: WhatsApp, Email, and Open Hours with gold outline icons
 * - Desktop Format (lg:grid-cols-4):
 *   * Col 1: Brand, established year, description, social icons
 *   * Col 2: Quick Links (Bullion, Rates, Gallery, Blogs, Contact)
 *   * Col 3: Our Locations (Single official Dubai Trading Office)
 *   * Col 4: Contact (WhatsApp, Email, Open Hours)
 * - Clean Single-Line Bottom Copyright: "© 2026 SNMZ Gold & Diamonds. All rights reserved." (No Privacy/Terms links)
 * - Strict palette: Metallic Warm Gold (#D4AF37) accents with high contrast readable typography
 */
export function Footer({ isDarkHome = false }) {
  const currentYear = new Date().getFullYear();
  const waUrl = getWhatsAppUrl('contact');
  const officePhone = getOfficePhoneUrl();

  return (
    <footer
      className={`w-full max-w-full overflow-hidden text-left ${
        isDarkHome
          ? 'bg-[#06090E] border-t-2 border-[#1E2633]'
          : 'bg-[#0B0F17] border-t border-[#252F3F]'
      }`}
      role="contentinfo"
    >
      {/* Main footer content container */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 text-left items-start">
          {/* ── Col 1: Brand & Socials ────────────────────────────────────────── */}
          <div className="flex flex-col items-start text-left">
            <Link
              href="/"
              aria-label="SNMZ Gold &amp; Diamonds — Home"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded mb-3"
            >
              <LogoIcon size="md" className="hover:opacity-95 transition-opacity" />
            </Link>

            <div className="w-12 h-0.5 bg-[#D4AF37]/50 mb-3" />

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs font-body mb-5">
              Established in {SiteConfig.establishedYear || '2025'} in Dubai. Certified gold &amp; silver bullion with expert investment guidance and competitive pricing.
            </p>

            {/* Social Media Buttons Row */}
            <div className="flex items-center gap-2.5">
              <a
                href={SiteConfig.social?.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl border border-[#252F3F] bg-[#161C26] hover:border-[#D4AF37] hover:bg-[#1C2330] flex items-center justify-center text-[#D4AF37] transition-all shadow-xs"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl border border-[#252F3F] bg-[#161C26] hover:border-[#D4AF37] hover:bg-[#1C2330] flex items-center justify-center text-[#D4AF37] transition-all shadow-xs"
              >
                <FacebookIcon />
              </a>
              <a
                href={SiteConfig.social?.twitter || 'https://x.com'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-10 h-10 rounded-xl border border-[#252F3F] bg-[#161C26] hover:border-[#D4AF37] hover:bg-[#1C2330] flex items-center justify-center text-[#D4AF37] transition-all shadow-xs"
              >
                <XIcon />
              </a>
              <a
                href={SiteConfig.social?.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-[#252F3F] bg-[#161C26] hover:border-[#D4AF37] hover:bg-[#1C2330] flex items-center justify-center text-[#D4AF37] transition-all shadow-xs"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* ── 2-Column Container on Mobile / 2 Separate Columns on Desktop ── */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:contents">
            {/* ── Col 2: QUICK LINKS ────────────────────────────────────────── */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest font-mono mb-4">
                QUICK LINKS
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-body text-left">
                <li>
                  <Link href="/blogs" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                    Shop Catalogue
                  </Link>
                </li>
                <li>
                  <Link href="/gold-prices" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                    Gold Rates (24K)
                  </Link>
                </li>
                <li>
                  <Link href="/silver-prices" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                    Silver Rates (999)
                  </Link>
                </li>
                <li>
                  <Link href="/why-dubai" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                    Why Dubai
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                    Bullion Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Col 3: OUR LOCATIONS (Restored Single Official Location) ──── */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest font-mono mb-4">
                OUR LOCATIONS
              </h3>
              <div className="space-y-5 text-xs sm:text-sm font-body text-left">
                {/* Official Dubai Trading Office */}
                <div className="flex items-start gap-2.5">
                  <MapPinIcon className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm leading-tight mb-1">
                      Dubai
                    </h4>
                    <p className="text-gray-300 text-xs font-body leading-relaxed max-w-[200px] sm:max-w-xs">
                      {SiteConfig.address || 'F03, Al Fadan Building, Al Dhagaya, Deira, Dubai'}
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:underline font-mono text-xs block mt-1"
                    >
                      {SiteConfig.whatsappDisplay || '+971 52 754 9259'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Col 4: CONTACT (Dedicated Block with Icons) ────────────────── */}
          <div className="flex flex-col items-start text-left pt-6 lg:pt-0 border-t lg:border-t-0 border-[#252F3F] w-full">
            <h3 className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest font-mono mb-4">
              CONTACT
            </h3>
            <div className="space-y-4 text-xs sm:text-sm font-body text-left w-full">
              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#161C26] border border-[#252F3F] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <PhoneOutlineIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm leading-tight">
                    WhatsApp
                  </h4>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#D4AF37] font-mono text-xs block mt-0.5 transition-colors"
                  >
                    {SiteConfig.whatsappDisplay || '+971 52 754 9259'}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#161C26] border border-[#252F3F] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <EmailOutlineIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm leading-tight">
                    Email
                  </h4>
                  <a
                    href={`mailto:${SiteConfig.email || 'desk@snmzgold.com'}`}
                    className="text-gray-300 hover:text-[#D4AF37] font-mono text-xs block mt-0.5 transition-colors"
                  >
                    {SiteConfig.email || 'desk@snmzgold.com'}
                  </a>
                </div>
              </div>

              {/* Open Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#161C26] border border-[#252F3F] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <ClockOutlineIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm leading-tight">
                    Open Hours
                  </h4>
                  <span className="text-gray-300 font-mono text-xs block mt-0.5">
                    Monday – Saturday: 9:00 AM – 7:00 PM GST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Discreet Single-Line Bottom Copyright (No Privacy/Terms Links) ── */}
      <div
        className={`${
          isDarkHome
            ? 'border-t border-[#1E2633] bg-[#04060A]'
            : 'border-t border-[#252F3F] bg-[#070A0F]'
        }`}
      >
        <div className="section-container py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-white/50 font-body text-left">
          <p className="text-left">
            &copy; {currentYear} SNMZ Gold &amp; Diamonds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Inline SVG Icons ──────────────────────────────────────────────────────── */

function MapPinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneOutlineIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailOutlineIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockOutlineIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
