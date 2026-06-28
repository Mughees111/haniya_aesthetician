export function getBlogListSchemaJson(): string {
  const posts = [
    {
      slug: 'at-home-aesthetic-treatments-lahore-2026',
      title: "At-Home Aesthetic Treatments in Lahore: What's Actually Safe in 2026",
      date: '2026-06-29',
    },
    {
      slug: 'anti-aging-treatments-south-asian-skin-2026',
      title: 'Anti-Aging Treatments for South Asian Skin: A Complete 2026 Guide',
      date: '2026-06-29',
    },
    {
      slug: 'bridal-skin-prep-aesthetic-timeline-pakistan',
      title: 'Bridal Skin Prep: The 6-Month Aesthetic Timeline Before Your Wedding in Pakistan',
      date: '2026-06-29',
    },
    {
      slug: 'botox-aftercare-tips-for-best-results',
      title: '10 Essential Botox Aftercare Tips for Longer-Lasting, Natural Results',
      date: '2025-12-19',
    },
    {
      slug: 'botox-vs-dermal-fillers-2025-guide',
      title: 'Botox vs Dermal Fillers: Key Differences and Which is Right for You',
      date: '2025-12-18',
    },
    {
      slug: 'prp-therapy-benefits-skin-hair',
      title: 'PRP Therapy: Natural Benefits for Glowing Skin and Hair Restoration',
      date: '2025-12-17',
    },
    {
      slug: 'liquid-rhinoplasty-guide-2025',
      title: 'Liquid Rhinoplasty: The Non-Surgical Nose Job Revolution',
      date: '2025-12-16',
    },
    {
      slug: 'laser-treatments-trends-2025',
      title: 'Top Laser Skin Treatments Trending in Lahore',
      date: '2025-12-15',
    },
  ];

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ghadia Haider Aesthetics Blog',
    description:
      'Expert insights on Botox, fillers, PRP, laser treatments, non-surgical aesthetics, bridal skin prep, and South Asian skincare in Lahore by professional aesthetician Ghadia Haider.',
    url: 'https://ghadia.vercel.app/blogs',
    author: {
      '@type': 'Person',
      name: 'Ghadia Haider',
      url: 'https://ghadia.vercel.app/about',
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://ghadia.vercel.app/blogs/${p.slug}`,
      datePublished: p.date,
      author: { '@type': 'Person', name: 'Ghadia Haider' },
    })),
  });
}
