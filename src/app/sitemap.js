import { SiteConfig } from '@/config/site';
import { getBlogIndex } from '@/content/blogs';

/**
 * Next.js sitemap — auto-generated from all known public routes.
 * Updates automatically when new blog articles are added to blogs.js.
 *
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const baseUrl = SiteConfig.domain;

  // Static routes
  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' },
    { url: `${baseUrl}/gold-prices`, priority: 0.95, changeFrequency: 'hourly' },
    { url: `${baseUrl}/why-dubai`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${baseUrl}/blogs`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/gold-news`, priority: 0.80, changeFrequency: 'daily' },
    { url: `${baseUrl}/economic-news`, priority: 0.75, changeFrequency: 'daily' },
    { url: `${baseUrl}/who-we-are`, priority: 0.70, changeFrequency: 'monthly' },
  ].map((route) => ({
    ...route,
    lastModified: new Date().toISOString(),
  }));

  // Blog article routes — auto-generated
  const blogRoutes = getBlogIndex().map((article) => ({
    url: `${baseUrl}/blogs/${article.slug}`,
    lastModified: article.updatedAt
      ? new Date(article.updatedAt).toISOString()
      : new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}
