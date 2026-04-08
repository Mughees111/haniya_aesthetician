import { getServiceBySlug } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import { resolveAsset } from '../utils/resolveAsset';

/** Matches the JSON-LD shape previously emitted by ServiceDetail + SEO. */
export function buildServiceSchemaJson(slug: string): string | null {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: `${service.title} in Lahore`,
    description: `${service.seo.description} Available in Lahore by certified aesthetician Ghadia Haider.`,
    procedureType: 'Aesthetic Treatment',
    areaServed: {
      '@type': 'City',
      name: 'Lahore',
      addressCountry: 'Pakistan',
    },
    provider: {
      '@type': 'Person',
      name: siteConfig.personal.name,
      telephone: siteConfig.personal.phone,
      email: siteConfig.personal.email,
      url: siteConfig.seo.siteUrl,
    },
    priceRange: '$$',
    image: resolveAsset(service.image),
  };

  const schema = {
    ...serviceSchema,
    ...(service.faqs && {
      '@graph': [
        serviceSchema,
        {
          '@type': 'FAQPage',
          '@id': `${siteConfig.seo.siteUrl}/services/${slug}#faq`,
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    }),
    ...(service.howToSteps && {
      '@type': 'HowTo',
      name: `How ${service.title} is Performed in Lahore`,
      description: `Step-by-step guide to professional ${service.title.toLowerCase()} treatment.`,
      step: service.howToSteps.map((step, index) => ({
        '@type': 'HowToStep',
        name: `Step ${index + 1}`,
        text: step,
      })),
    }),
  };

  return JSON.stringify(schema);
}
