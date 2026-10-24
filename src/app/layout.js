import { SiteConfig } from '@/config/site';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import './globals.css';

export const metadata = {
  metadataBase: new URL(SiteConfig.domain),
  title: {
    default: 'SNMZ Gold & Diamonds | Gold Rates in Dubai',
    template: '%s | SNMZ Gold & Diamonds',
  },
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: [{ name: 'SNMZ Gold & Diamonds' }],
  creator: 'SNMZ Gold & Diamonds',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SiteConfig.domain,
    siteName: SiteConfig.name,
    title: 'SNMZ Gold & Diamonds | Gold Rates in Dubai',
    description: SiteConfig.description,
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'SNMZ Gold & Diamonds — Premium Gold & Diamonds, Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNMZ Gold & Diamonds | Gold Rates in Dubai',
    description: SiteConfig.description,
    images: ['/images/og/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        {/* WhatsApp floating button — globally visible on all pages */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
