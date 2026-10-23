import { SiteConfig } from '@/config/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${SiteConfig.domain}/sitemap.xml`,
  };
}
