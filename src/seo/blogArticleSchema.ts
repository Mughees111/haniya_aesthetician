import { siteConfig } from '../config/siteConfig';
import { blogDetailPosts } from '../data/blogDetailPosts';
import { resolveAsset } from '../utils/resolveAsset';

const ISO_DATES: Record<string, string> = {
  'June 29, 2026': '2026-06-29',
  'December 19, 2025': '2025-12-19',
  'December 18, 2025': '2025-12-18',
  'December 17, 2025': '2025-12-17',
  'December 16, 2025': '2025-12-16',
  'December 15, 2025': '2025-12-15',
};

export function buildBlogArticleSchemaJson(slug: string): string | null {
  const post = blogDetailPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const plain = post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const excerpt = (post as any).excerpt ?? plain.slice(0, 200);
  const isoDate = ISO_DATES[post.date] ?? post.date;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: excerpt,
    image: post.heroImage,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${siteConfig.seo.siteUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ghadia Haider Aesthetics',
      logo: {
        '@type': 'ImageObject',
        url: resolveAsset(siteConfig.personal.image),
      },
    },
    datePublished: isoDate,
    dateModified: isoDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.seo.siteUrl}/blogs/${slug}`,
    },
    keywords: `aesthetics Lahore, ${post.title}`,
    inLanguage: 'en-PK',
    locationCreated: {
      '@type': 'City',
      name: 'Lahore',
    },
  };

  return JSON.stringify(articleSchema);
}
