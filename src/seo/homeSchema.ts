import { siteConfig } from '../config/siteConfig';
import { services } from '../data/services';
import { homeFaqs } from '../data/faqContent';
import { resolveAsset } from '../utils/resolveAsset';

export function getHomeSchemaJson(): string {
  const personSchema = {
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
    areaServed: siteConfig.business.schema.areaServed.map((name) => ({
      '@type': 'City',
      name,
    })),
    knowsAbout: siteConfig.business.schema.knowsAbout,
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aesthetic Services in Lahore',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: `${siteConfig.seo.siteUrl}/services/${service.slug}`,
        },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return JSON.stringify([personSchema, faqSchema]);
}
