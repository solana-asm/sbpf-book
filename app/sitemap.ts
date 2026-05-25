import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const baseUrl = 'https://sbpf.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...source.getPages().map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
