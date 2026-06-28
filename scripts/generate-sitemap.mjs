/**
 * Runs after `astro build`. Writes dist/sitemap.xml for static hosting.
 */
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SITE = 'https://ghadia.vercel.app';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const STATIC_PATHS = [
  '/',
  '/about',
  '/aesthetic-services',
  '/digital-marketing',
  '/my-work',
  '/reviews',
  '/contact',
  '/blogs',
];

function readSlugs(filePath, pattern) {
  const source = readFileSync(join(ROOT, filePath), 'utf8');
  return [...source.matchAll(pattern)].map((match) => match[1]);
}

const BLOG_SLUGS = readSlugs('src/data/blogDetailPosts.ts', /slug:\s*'([^']+)'/g);
const SERVICE_SLUGS = readSlugs('src/data/services.ts', /slug:\s*'([^']+)'/g);

function loc(path) {
  if (path === '/') return `${SITE}/`;
  return `${SITE}${path}`;
}

function priority(path) {
  if (path === '/') return '1.0';
  if (path === '/about' || path === '/aesthetic-services' || path === '/contact' || path === '/blogs')
    return '0.9';
  if (path.startsWith('/services/')) return '0.85';
  return '0.8';
}

function changefreq(path) {
  if (path.startsWith('/blogs/')) return 'monthly';
  if (path.startsWith('/services/')) return 'monthly';
  if (path === '/blogs' || path === '/') return 'weekly';
  return 'weekly';
}

const lastmod = new Date().toISOString().slice(0, 10);

const allPaths = [
  ...STATIC_PATHS,
  ...BLOG_SLUGS.map((s) => `/blogs/${s}`),
  ...SERVICE_SLUGS.map((s) => `/services/${s}`),
];

const urlEntries = allPaths
  .map(
    (p) => `  <url>
    <loc>${loc(p)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq(p)}</changefreq>
    <priority>${priority(p)}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const distDir = join(ROOT, 'dist');

if (!existsSync(distDir)) {
  console.error('generate-sitemap: dist/ not found. Run astro build first.');
  process.exit(1);
}

const outFile = join(distDir, 'sitemap.xml');
writeFileSync(outFile, xml, 'utf8');
console.log(`Sitemap written: ${outFile} (${allPaths.length} URLs, lastmod ${lastmod})`);
