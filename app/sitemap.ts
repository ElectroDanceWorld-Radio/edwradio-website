import type { MetadataRoute } from 'next';
import { getNewsArticles } from './[lang]/components/getNewsArticles';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://edwradio.com';

const locales = ['en', 'es'] as const;
const staticRoutes = ['', '/about', '/music', '/news', '/products'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  // News article detail pages for each locale
  const articles = getNewsArticles();
  for (const article of articles) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/news/${article.id}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
