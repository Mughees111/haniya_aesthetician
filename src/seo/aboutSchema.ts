import { siteConfig } from '../config/siteConfig';
import { resolveAsset } from '../utils/resolveAsset';

export function getAboutSchemaJson(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.personal.name,
      jobTitle: 'Professional Aesthetician',
      description: siteConfig.personal.description,
      image: resolveAsset(siteConfig.personal.image),
      url: `${siteConfig.seo.siteUrl}/about`,
      telephone: siteConfig.personal.phone,
      email: siteConfig.personal.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      knowsAbout: siteConfig.business.schema.knowsAbout,
      areaServed: siteConfig.business.schema.areaServed,
    },
  };
  return JSON.stringify(schema);
}
