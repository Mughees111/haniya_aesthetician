export function getBlogListSchemaJson(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ghadia Haider Aesthetics Blog',
    description:
      'Expert insights on Botox, fillers, PRP, laser treatments, and non-surgical aesthetics in Lahore.',
  });
}
