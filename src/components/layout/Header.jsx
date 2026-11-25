'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiteConfig } from '@/config/site';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

/**
 * Main application Header for SNMZ Gold & Diamonds.
 *
 * Implements:
 * - Unified dark obsidian styling (#0B0F17 / #161C26) with crisp #252F3F borders
 * - Strict viewport alignment: w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 * - Desktop (hidden md:flex): Shop Bullion, Live Rates dropdown, Why Dubai, Contact, WhatsApp Desk
 * - Mobile (flex md:hidden): Amber-400 hamburger button in #161C26 container
 * - Smoothly expanding full-width drawer with touch-friendly links & gold WhatsApp button
 */
export function Header({ showAnnouncement = true }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pricesOpen, setPricesOpen] = useState(false);
  const [mobilePricesOpen, setMobilePricesOpen] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPricesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const waEnquiryUrl = getWhatsAppUrl('homepage');
  const officePhoneUrl = getOfficePhoneUrl();

  const isPricesActive = pathname.startsWith('/gold-prices') || pathname.startsWith('/silver-prices');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F17]/95 backdrop-blur-md shadow-2xl border-b border-[#252F3F]'
          : 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-[#252F3F]/80'
      }`}
      role="banner"
    >
      {/* Announcement Bar — visible on laptop screen (lg+) and above */}
      {showAnnouncement && <AnnouncementBar />}

      {/* Main Navbar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 transition-all duration-300">
          {/* Official brand logo — navigates to / */}
          <Link
            href="/"
            className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-1"
            aria-label="SNMZ Gold & Diamonds — Home"
          >
            <LogoIcon
              size="md"
              className="group-hover:opacity-95 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation (hidden md:flex) */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            {/* 1. Shop Bullion */}
            <Link
              href="/shop"
              className={`text-xs lg:text-sm font-body tracking-wide transition-colors duration-200 py-1 ${
                pathname === '/shop'
                  ? 'text-[#D4AF37] font-semibold border-b-2 border-[#D4AF37] pb-0.5'
                  : 'text-white/85 hover:text-[#D4AF37] font-medium'
              }`}
            >
              Shop Bullion
            </Link>

            {/* 2. Live Rates Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setPricesOpen(true)}
              onMouseLeave={() => setPricesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPricesOpen((prev) => !prev)}
                aria-expanded={pricesOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 text-xs lg:text-sm font-body tracking-wide transition-colors duration-200 py-2 focus:outline-none focus-visible:text-[#D4AF37] ${
                  isPricesActive
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-white/85 hover:text-[#D4AF37] font-medium'
                }`}
              >
                <span>Live Rates</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    pricesOpen
                      ? 'rotate-180 text-[#D4AF37]'
                      : isPricesActive
                      ? 'text-[#D4AF37]'
                      : 'text-white/60'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-1 w-64 rounded-xl bg-[#161C26] border border-[#252F3F] p-2 shadow-2xl backdrop-blur-xl transition-all duration-200 z-50 ${
                  pricesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <Link
                  href="/gold-prices"
                  onClick={() => setPricesOpen(false)}
                  className={`flex flex-col gap-0.5 rounded-lg p-2.5 transition-colors group/item ${
                    pathname === '/gold-prices' ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                        pathname === '/gold-prices' ? 'text-[#D4AF37]' : 'text-white group-hover/item:text-[#D4AF37]'
                      }`}
                    >
                      Gold Price
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] font-mono">
                      AED Spot
                    </span>
                  </div>
                  <span className="text-[11px] text-white/50 line-clamp-1 group-hover/item:text-white/75">
                    Live 24K, 22K, 21K, 18K per gram
                  </span>
                </Link>

                <Link
                  href="/silver-prices"
                  onClick={() => setPricesOpen(false)}
                  className={`flex flex-col gap-0.5 rounded-lg p-2.5 transition-colors group/item ${
                    pathname === '/silver-prices' ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                        pathname === '/silver-prices' ? 'text-[#D4AF37]' : 'text-white group-hover/item:text-[#D4AF37]'
                      }`}
                    >
                      Silver Price
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">
                      999 Spot
                    </span>
                  </div>
                  <span className="text-[11px] text-white/50 line-clamp-1 group-hover/item:text-white/75">
                    Live 999 physical silver in AED
                  </span>
                </Link>
              </div>
            </div>

            {/* 3. Why Dubai */}
            <Link
              href="/why-dubai"
              className={`text-xs lg:text-sm font-body tracking-wide transition-colors duration-200 py-1 ${
                pathname === '/why-dubai'
                  ? 'text-[#D4AF37] font-semibold border-b-2 border-[#D4AF37] pb-0.5'
                  : 'text-white/85 hover:text-[#D4AF37] font-medium'
              }`}
            >
              Why Dubai
            </Link>

            {/* 4. Contact */}
            <Link
              href="/#contact"
              className={`text-xs lg:text-sm font-body tracking-wide transition-colors duration-200 py-1 ${
                pathname === '/#contact'
                  ? 'text-[#D4AF37] font-semibold border-b-2 border-[#D4AF37] pb-0.5'
                  : 'text-white/85 hover:text-[#D4AF37] font-medium'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop WhatsApp CTA Button (hidden md:flex) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={officePhoneUrl}
              className="text-xs font-mono text-white/60 hover:text-[#D4AF37] transition-colors hidden xl:inline-block mr-1"
              title="Call SNMZ Dubai Office"
            >
              {SiteConfig.phoneDisplay}
            </a>

            <a
              href={waEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp Desk"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0B0F17] font-body font-bold text-xs lg:text-sm hover:opacity-95 transition-all shadow-[0_2px_12px_rgba(212,175,55,0.2)] whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

          {/* Mobile Hamburger Icon Button (flex md:hidden) */}
          <button
            type="button"
            className="flex md:hidden items-center justify-center text-amber-400 bg-[#161C26] border border-[#252F3F] p-2 rounded-lg hover:border-amber-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer (flex md:hidden) */}
      <div
        id="mobile-nav"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden w-full ${
          mobileOpen ? 'max-h-[34rem] opacity-100 border-b border-[#252F3F]' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="bg-[#0B0F17] border-t border-[#252F3F] px-4 py-5 shadow-2xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {/* Shop Bullion Link */}
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-3.5 rounded-xl font-body text-sm border-b border-white/5 transition-colors flex items-center justify-between ${
                pathname === '/shop'
                  ? 'text-[#D4AF37] bg-white/5 font-semibold'
                  : 'text-white/90 hover:text-[#D4AF37] hover:bg-white/5 font-medium'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Shop Bullion</span>
              </span>
              <span className="text-[#D4AF37] text-xs">→</span>
            </Link>

            {/* Live Rates Sub-accordion */}
            <div className="border-b border-white/5 py-1">
              <button
                type="button"
                onClick={() => setMobilePricesOpen(!mobilePricesOpen)}
                className={`w-full flex items-center justify-between py-2.5 px-3.5 font-body text-sm hover:text-[#D4AF37] ${
                  isPricesActive ? 'text-[#D4AF37] font-semibold' : 'text-white/90 font-medium'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Live Rates</span>
                </span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobilePricesOpen ? 'rotate-180 text-[#D4AF37]' : isPricesActive ? 'text-[#D4AF37]' : 'text-white/50'
                  }`}
                />
              </button>

              {mobilePricesOpen && (
                <div className="pl-6 pr-2 flex flex-col gap-1 mt-1 mb-1">
                  <Link
                    href="/gold-prices"
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 px-3 text-xs rounded-lg flex items-center justify-between transition-colors ${
                      pathname === '/gold-prices'
                        ? 'text-[#D4AF37] bg-[#D4AF37]/15 font-semibold'
                        : 'text-white/80 hover:text-[#D4AF37] hover:bg-white/5'
                    }`}
                  >
                    <span>Gold Price (24K, 22K, 21K, 18K)</span>
                    <span className="text-[10px] text-[#D4AF37] font-mono">AED Live</span>
                  </Link>

                  <Link
                    href="/silver-prices"
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 px-3 text-xs rounded-lg flex items-center justify-between transition-colors ${
                      pathname === '/silver-prices'
                        ? 'text-[#D4AF37] bg-[#D4AF37]/15 font-semibold'
                        : 'text-white/80 hover:text-[#D4AF37] hover:bg-white/5'
                    }`}
                  >
                    <span>Silver Price (999 Purity)</span>
                    <span className="text-[10px] text-white/60 font-mono">AED Live</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Why Dubai Link */}
            <Link
              href="/why-dubai"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-3.5 rounded-xl font-body text-sm border-b border-white/5 transition-colors flex items-center justify-between ${
                pathname === '/why-dubai'
                  ? 'text-[#D4AF37] bg-white/5 font-semibold'
                  : 'text-white/90 hover:text-[#D4AF37] hover:bg-white/5 font-medium'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Why Dubai</span>
              </span>
              <span className="text-[#D4AF37] text-xs">→</span>
            </Link>

            {/* Bullion Gallery Link */}
            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-3.5 rounded-xl font-body text-sm border-b border-white/5 transition-colors flex items-center justify-between ${
                pathname === '/gallery'
                  ? 'text-[#D4AF37] bg-white/5 font-semibold'
                  : 'text-white/90 hover:text-[#D4AF37] hover:bg-white/5 font-medium'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Bullion Gallery</span>
              </span>
              <span className="text-[#D4AF37] text-xs">→</span>
            </Link>

            {/* Contact Link */}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-3.5 rounded-xl font-body text-sm transition-colors flex items-center justify-between ${
                pathname === '/#contact'
                  ? 'text-[#D4AF37] bg-white/5 font-semibold'
                  : 'text-white/90 hover:text-[#D4AF37] hover:bg-white/5 font-medium'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Contact Desk</span>
              </span>
              <span className="text-[#D4AF37] text-xs">→</span>
            </Link>
          </nav>

          {/* Mobile Gold "Chat on WhatsApp Desk" Button */}
          <div className="mt-5 pt-4 border-t border-[#252F3F] flex flex-col gap-2.5">
            <a
              href={waEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0B0F17] font-body font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(212,175,55,0.25)] hover:opacity-95 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp Desk</span>
            </a>

            <a
              href={officePhoneUrl}
              className="text-center py-2 text-xs font-mono text-white/60 hover:text-[#D4AF37] transition-colors"
            >
              Trading Office: {SiteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ChevronDownIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
