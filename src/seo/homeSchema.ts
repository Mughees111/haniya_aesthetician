import { siteConfig } from '../config/siteConfig';
import { services } from '../data/services';
import { resolveAsset } from '../utils/resolveAsset';

export function getHomeSchemaJson(): string {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.personal.name,
    jobTitle: 'Professional Aesthetician',
    description: siteConfig.personal.description,
    image: resolveAsset(siteConfig.personal.image),
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.personal.phone,
    email: siteConfig.personal.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    areaServed: {
      '@type': 'City',
      name: 'Lahore',
    },
    knowsAbout: [
      'Botox',
      'Dermal Fillers',
      'PRP Therapy',
      'Laser Treatments',
      'Aesthetic Medicine',
      'Anti-Aging',
    ],
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aesthetic Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
        },
      })),
    },
  };
  return JSON.stringify(homeSchema);
}
