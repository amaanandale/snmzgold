'use client';

import { useState, useEffect } from 'react';
import { SiteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waUrl = SiteConfig.whatsapp
    ? whatsappUrl(SiteConfig.whatsapp, 'Hello, I would like to enquire about SNMZ Gold & Diamonds.')
    : '#contact';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-emerald-dark/95 backdrop-blur-md shadow-emerald border-b border-gold/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-18 lg:h-20">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="SNMZ Gold & Diamonds — Home"
          >
            {/* Logo placeholder — replace with SVG from /public/logo/ */}
            <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform duration-300">
              <span className="text-emerald-dark font-display font-bold text-lg leading-none">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-white text-lg leading-tight tracking-tight">
                SNMZ
              </span>
              <span className="text-gold text-xs font-body font-medium uppercase tracking-widest leading-none">
                Gold & Diamonds
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {SiteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-gold text-sm font-body font-medium tracking-wide transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href={waUrl}
              variant="primary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact SNMZ on WhatsApp"
            >
              <WhatsAppIcon />
              Enquire Now
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-white/80 hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="bg-emerald-dark/98 backdrop-blur-md border-t border-gold/10 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {SiteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-white/80 hover:text-gold font-body font-medium border-b border-white/5 last:border-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5">
            <Button
              href={waUrl}
              variant="primary"
              className="w-full justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
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
