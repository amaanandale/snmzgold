import Link from 'next/link';
import { SiteConfig } from '@/config/site';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Footer Component — Aligned like Tora Bullion.
 *
 * Implements:
 * - 4 clean left-aligned columns:
 *   * Col 1 (Brand): "SNMZ Gold & Diamonds", tagline "Licensed precious metals & physical bullion trading desk in Dubai."
 *   * Col 2 (Bullion): "Gold Bars (24K)", "10 Tola TT Bars", "Silver Bullion (999)", "Minted Coins", "Shop Catalogue".
 *   * Col 3 (Live Rates): "Gold Spot Rate (AED)", "Silver Spot Rate (AED)", "Why Dubai?", "Buyback Policy".
 *   * Col 4 (Trading Desk): Office location (F03, Al Fadan Building, Al Dhagaya, Deira, Dubai), WhatsApp desk (+971 52 754 9259), Hours (Mon–Sat: 9:00 AM – 7:00 PM GST).
 * - Mobile View: Stacks vertically with clear left alignment (text-left items-start), zero centered misalignment.
 * - Cleaned up: Removed bulky registration paragraphs & legal boilerplate. Discreet single-line bottom copyright.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = getWhatsAppUrl('contact');

  return (
    <footer className="bg-[#0B0F17] border-t border-[#252F3F] w-full max-w-full overflow-hidden text-left" role="contentinfo">
      {/* Main footer content container */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-left items-start">
          {/* ── Col 1: Brand ────────────────────────────────────────────────── */}
          <div className="flex flex-col items-start text-left">
            <Link
              href="/"
              aria-label="SNMZ Gold &amp; Diamonds — Home"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded mb-3"
            >
              <LogoIcon size="md" className="hover:opacity-95 transition-opacity" />
            </Link>

            <h3 className="font-heading font-bold text-base text-white tracking-tight mb-1.5">
              SNMZ Gold &amp; Diamonds
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs font-body">
              Licensed precious metals &amp; physical bullion trading desk in Dubai.
            </p>
          </div>

          {/* ── Col 2: Bullion ──────────────────────────────────────────────── */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-amber-400 text-xs font-semibold uppercase tracking-widest font-mono mb-3.5">
              Bullion
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-body text-left">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Gold Bars (24K)
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition-colors">
                  10 Tola TT Bars
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Silver Bullion (999)
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Minted Coins
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Shop Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Live Rates ───────────────────────────────────────────── */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-amber-400 text-xs font-semibold uppercase tracking-widest font-mono mb-3.5">
              Live Rates
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-body text-left">
              <li>
                <Link href="/gold-prices" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Gold Spot Rate (AED)
                </Link>
              </li>
              <li>
                <Link href="/silver-prices" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Silver Spot Rate (AED)
                </Link>
              </li>
              <li>
                <Link href="/why-dubai" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Why Dubai?
                </Link>
              </li>
              <li>
                <Link href="/gold-prices#buyback" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Buyback Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Trading Desk ─────────────────────────────────────────── */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-amber-400 text-xs font-semibold uppercase tracking-widest font-mono mb-3.5">
              Trading Desk
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm font-body text-left">
              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">Office Location</span>
                <span className="text-gray-300 text-xs leading-relaxed font-mono block">
                  {SiteConfig.address}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">WhatsApp Desk</span>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-amber-400 hover:underline inline-flex items-center gap-1.5"
                >
                  <WhatsAppSmallIcon />
                  <span>{SiteConfig.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-white/40 block">Hours</span>
                <span className="text-gray-300 text-xs font-mono block">
                  Mon–Sat: 9:00 AM – 7:00 PM GST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Discreet Single-Line Bottom Copyright ──────────────────────────── */}
      <div className="border-t border-[#252F3F] bg-[#070A0F]">
        <div className="section-container py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-white/50 font-body text-left">
          <p className="text-left">
            &copy; {currentYear} SNMZ Gold &amp; Diamonds. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
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
