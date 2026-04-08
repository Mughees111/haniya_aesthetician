/**
 * Runs after `astro build`. Writes dist/sitemap.xml for static hosting.
 * When adding routes, update STATIC_PATHS, BLOG_SLUGS, or SERVICE_SLUGS below.
 */
import { writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SITE = 'https://ghadia.vercel.app';

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

const BLOG_SLUGS = [
  'botox-aftercare-tips-for-best-results',
  'botox-vs-dermal-fillers-2025-guide',
  'prp-therapy-benefits-skin-hair',
  'liquid-rhinoplasty-guide-2025',
  'laser-treatments-trends-2025',
];

const SERVICE_SLUGS = [
  'botox',
  'dermal-fillers',
  'liquid-rhinoplasty',
  'laser-treatments',
  'prp-therapy',
  'fat-dissolver',
  'skin-tightening',
  'fibroplasty',
  'whitening-injections',
  'hydia-facial',
  'skin-tag-mole-removal',
  'face-reshaping',
];

function loc(path) {
  if (path === '/') return `${SITE}/`;
  return `${SITE}${path}`;
}

function priority(path) {
  if (path === '/') return '1.0';
  if (path === '/aesthetic-services' || path === '/contact' || path === '/blogs')
    return '0.9';
  return '0.8';
}

function changefreq(path) {
  if (path.startsWith('/blogs/')) return 'monthly';
  if (path.startsWith('/services/')) return 'monthly';
  if (path === '/blogs') return 'weekly';
  return 'weekly';
}

const allPaths = [
  ...STATIC_PATHS,
  ...BLOG_SLUGS.map((s) => `/blogs/${s}`),
  ...SERVICE_SLUGS.map((s) => `/services/${s}`),
];

const urlEntries = allPaths
  .map(
    (p) => `  <url>
    <loc>${loc(p)}</loc>
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

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

if (!existsSync(distDir)) {
  console.error('generate-sitemap: dist/ not found. Run astro build first.');
  process.exit(1);
}

const outFile = join(distDir, 'sitemap.xml');
writeFileSync(outFile, xml, 'utf8');
console.log(`Sitemap written: ${outFile} (${allPaths.length} URLs)`);
