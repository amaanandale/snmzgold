'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { getWhatsAppUrl, getOfficePhoneUrl } from '@/lib/whatsapp';

/**
 * Main application Header for SNMZ Gold & Diamonds.
 *
 * Implements:
 * - Direct logo link to `/`
 * - Clean primary navigation: Live Prices (dropdown: Gold Price, Silver Price), Shop, Gallery, Why Dubai?, Blogs, Contact
 * - Contextual WhatsApp Enquiry
 * - Responsive desktop dropdown & mobile drawer
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

  const waEnquiryUrl = getWhatsAppUrl('homepage');
  const officePhoneUrl = getOfficePhoneUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-emerald-dark/95 backdrop-blur-md shadow-emerald border-b border-gold/20'
          : 'bg-emerald-dark/90 backdrop-blur-md border-b border-gold/10'
      }`}
      role="banner"
    >
      {/* Announcement Bar — visible on laptop screen (lg+) and above */}
      {showAnnouncement && <AnnouncementBar />}

      {/* Main Navbar */}
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20 transition-all duration-300">
          {/* Official logo — always navigates to / */}
          <Link
            href="/"
            className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded py-1"
            aria-label="SNMZ Gold & Diamonds — Home"
          >
            <LogoIcon
              size="md"
              className="group-hover:opacity-95 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Main navigation"
          >
            {SiteConfig.nav.map((item) => {
              if (item.hasDropdown) {
                const isDropdownActive = item.items?.some((sub) => sub.href === pathname);
                return (
                  <div
                    key={item.label}
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
                      className={`inline-flex items-center gap-1.5 text-[13px] xl:text-sm font-body tracking-normal transition-colors duration-200 py-2 focus:outline-none focus-visible:text-gold ${
                        isDropdownActive
                          ? 'text-gold font-semibold'
                          : 'text-white/85 hover:text-gold font-medium'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          pricesOpen
                            ? 'rotate-180 text-gold'
                            : isDropdownActive
                            ? 'text-gold'
                            : 'text-white/60'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-64 rounded-xl bg-emerald-dark/98 border border-gold/25 p-2 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
                        pricesOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {item.items.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setPricesOpen(false)}
                            className={`flex flex-col gap-0.5 rounded-lg p-2.5 transition-colors group/item ${
                              isSubActive ? 'bg-gold/15 text-gold' : 'hover:bg-gold/10'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                                  isSubActive ? 'text-gold' : 'text-white group-hover/item:text-gold'
                                }`}
                              >
                                {subItem.label}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold/15 text-gold font-mono">
                                AED
                              </span>
                            </div>
                            {subItem.description && (
                              <span className="text-[11px] text-white/60 line-clamp-1 group-hover/item:text-white/80">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] xl:text-sm font-body tracking-normal transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-gold font-semibold border-b-2 border-gold/70 pb-0.5'
                      : 'text-white/85 hover:text-gold font-medium'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={officePhoneUrl}
              className="text-xs font-mono text-white/70 hover:text-gold transition-colors hidden xl:inline-block"
              title="Call SNMZ Dubai Office"
            >
              {SiteConfig.phoneDisplay}
            </a>

            <Button
              href={waEnquiryUrl}
              variant="primary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact SNMZ on WhatsApp"
              className="shadow-sm hover:shadow-gold transition-all"
            >
              <WhatsAppIcon />
              Enquire Now
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-white/85 hover:text-gold transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="bg-emerald-dark/98 backdrop-blur-lg border-t border-gold/15 px-5 pb-6 pt-3 shadow-2xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {SiteConfig.nav.map((item) => {
              if (item.hasDropdown) {
                const isDropdownActive = item.items?.some((sub) => sub.href === pathname);
                return (
                  <div key={item.label} className="border-b border-white/5 pb-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setMobilePricesOpen(!mobilePricesOpen)}
                      className={`w-full flex items-center justify-between py-2 px-3 font-body text-sm hover:text-gold ${
                        isDropdownActive ? 'text-gold font-semibold' : 'text-white/90 font-medium'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          mobilePricesOpen ? 'rotate-180 text-gold' : isDropdownActive ? 'text-gold' : 'text-white/50'
                        }`}
                      />
                    </button>
                    {mobilePricesOpen && (
                      <div className="pl-4 pr-2 flex flex-col gap-1 mt-1">
                        {item.items.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className={`py-2 px-3 text-xs rounded-md flex items-center justify-between transition-colors ${
                                isSubActive
                                  ? 'text-gold bg-gold/15 font-semibold'
                                  : 'text-white/80 hover:text-gold hover:bg-white/5'
                              }`}
                            >
                              <span className="font-medium">{subItem.label}</span>
                              <span className="text-[10px] text-gold/60 font-mono">AED Live</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2.5 px-3 rounded-lg font-body text-sm border-b border-white/5 last:border-0 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-gold bg-white/5 font-semibold'
                      : 'text-white/85 hover:text-gold hover:bg-white/5 font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={isActive ? 'text-gold text-xs' : 'text-gold/40 text-xs'}>→</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Direct Contact Actions */}
          <div className="mt-4 pt-3 border-t border-gold/15 flex flex-col gap-2">
            <Button
              href={waEnquiryUrl}
              variant="primary"
              className="w-full justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Enquire on WhatsApp
            </Button>

            <a
              href={officePhoneUrl}
              className="text-center py-2 text-xs font-mono text-white/70 hover:text-gold transition-colors"
            >
              Office: {SiteConfig.phoneDisplay}
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
