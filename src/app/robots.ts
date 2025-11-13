import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    // Use an array of rule objects to be explicit and compatible with
    // different consumers and the expected Next.js Robots format.
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://mayurasolar.xyz/sitemap.xml',
  };
}
