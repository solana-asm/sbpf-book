import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://sbpf.dev/sitemap.xml',
    host: 'https://sbpf.dev',
  };
}
