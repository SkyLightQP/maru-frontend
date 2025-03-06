import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['ads.txt', '/diary$', '/'],
      disallow: ['/diary/', '/register']
    },
    sitemap: 'https://maruu.space/sitemap.xml'
  };
}
