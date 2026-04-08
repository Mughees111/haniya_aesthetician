import { siteConfig } from '../config/siteConfig';
import { blogDetailPosts } from '../data/blogDetailPosts';
import { resolveAsset } from '../utils/resolveAsset';

export function buildBlogArticleSchemaJson(slug: string): string | null {
  const post = blogDetailPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const plain = post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: plain.slice(0, 200),
    image: post.heroImage,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ghadia Haider Aesthetics',
      logo: {
        '@type': 'ImageObject',
        url: resolveAsset(siteConfig.personal.image),
      },
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.seo.siteUrl}/blogs/${slug}`,
    },
  };

  return JSON.stringify(articleSchema);
}
