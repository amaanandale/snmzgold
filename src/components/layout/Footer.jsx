import Image from 'next/image';
import Link from 'next/link';
import { SiteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About SNMZ', href: '/#about' },
        { label: 'Gold & Jewellery', href: '/#jewellery' },
        { label: 'Knowledge Centre', href: '/#insights' },
        { label: 'Contact Us', href: '/#contact' },
      ],
    },
    {
      title: 'Markets',
      links: [
        { label: 'Gold Rates (AED)', href: '/gold-prices' },
        { label: '24K TT Bars', href: '/#jewellery' },
        { label: 'Gold Calculator', href: '/gold-prices#calculator' },
        { label: 'Market Insights', href: '/#insights' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Use', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-emerald-dark border-t border-gold/10" role="contentinfo">
      {/* Main footer content */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Official logo — place file at: public/images/brand/snmz-logo.png */}
            <div className="mb-5">
              <Link href="/" aria-label="SNMZ Gold &amp; Diamonds — Home">
                <Image
                  src="/images/brand/snmz-logo.png"
                  alt="SNMZ Gold &amp; Diamonds"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium gold and diamonds for the UAE market. Verified purity,
              transparent pricing and trusted professional standards.
            </p>

            {/* Placeholder for company registration */}
            <div className="space-y-2 text-xs text-white/40">
              <p><span className="text-gold/60">Reg. No.:</span> <em className="placeholder-text">[To be provided]</em></p>
              <p><span className="text-gold/60">UAE Trade Licence:</span> <em className="placeholder-text">[To be provided]</em></p>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {SiteConfig.social.instagram && (
                <SocialLink href={SiteConfig.social.instagram} label="Instagram">
                  <InstagramIcon />
                </SocialLink>
              )}
              {SiteConfig.social.linkedin && (
                <SocialLink href={SiteConfig.social.linkedin} label="LinkedIn">
                  <LinkedInIcon />
                </SocialLink>
              )}
              {SiteConfig.social.twitter && (
                <SocialLink href={SiteConfig.social.twitter} label="Twitter / X">
                  <TwitterIcon />
                </SocialLink>
              )}
              {!SiteConfig.social.instagram && !SiteConfig.social.linkedin && (
                <p className="text-xs text-white/30 italic">[Social links to be provided]</p>
              )}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-gold text-xs font-semibold uppercase tracking-widest font-body mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-gold text-sm font-body transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs font-body text-center sm:text-left">
            &copy; {currentYear} SNMZ Gold & Diamonds. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body text-center">
            Gold &amp; Diamonds &mdash; Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg border border-gold/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
