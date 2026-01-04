import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { siteConfig } from '../config/siteConfig';

const blogPosts = [
  {
    slug: 'botox-aftercare-tips-for-best-results',
    title: '10 Essential Botox Aftercare Tips for Longer-Lasting, Natural Results in 2025',
    date: 'December 19, 2025',
    readTime: '6 min read',
    author: 'Ghadia Haider',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5af28848f93fd44828871bd5/bd9ba773-b388-4077-be13-5d160af51eed/image4.jpg', // High-quality relevant
    content: `
      <p>Botox is one of the most sought-after non-surgical treatments in 2025, delivering smooth, youthful skin without downtime. However, the secret to achieving the best, longest-lasting results lies in proper aftercare.</p>
      
      <h2>Immediate Aftercare (First 4 Hours)</h2>
      <ul>
        <li>Stay upright – avoid lying down to prevent product migration.</li>
        <li>Gently exercise facial muscles (smile, frown, raise eyebrows) every 10-15 minutes.</li>
        <li>No touching, rubbing, or massaging the treated areas.</li>
        <li>Avoid makeup application on injection sites.</li>
      </ul>
      
      <h2>First 24-48 Hours</h2>
      <ul>
        <li>No strenuous exercise, yoga, or heavy lifting.</li>
        <li>Avoid saunas, steam rooms, hot showers, or extreme heat.</li>
        <li>Skip alcohol and blood-thinning supplements (if advised).</li>
        <li>No facials, chemical peels, or laser treatments.</li>
      </ul>
      
      <h2>Week 1 and Beyond</h2>
      <p>Use gentle skincare, stay hydrated, apply broad-spectrum SPF daily, and schedule maintenance treatments every 3-6 months for optimal longevity.</p>
      
      <p>Following these steps ensures natural, glowing results that enhance your confidence.</p>
      
      <p class="font-semibold mt-8">Ready to experience professional Botox in Lahore? Book your personalized consultation today.</p>
    `
  },
  {
    slug: 'botox-vs-dermal-fillers-2025-guide',
    title: 'Botox vs Dermal Fillers: Key Differences and Which is Right for You in 2025',
    date: 'December 18, 2025',
    readTime: '8 min read',
    author: 'Ghadia Haider',
    heroImage: 'https://iconicbeautyaesthetics.com/wp-content/uploads/2022/02/botox-filler-infographic-1024x672.jpg',
    content: `
      <p>With non-surgical aesthetics booming in 2025, Botox and dermal fillers remain top choices – but they serve different purposes.</p>
      
      <h2>Botox: Movement Lines</h2>
      <p>Relaxes muscles to soften dynamic wrinkles (forehead lines, crow's feet, frown lines). Onset: 3-14 days. Duration: 3-6 months.</p>
      
      <h2>Dermal Fillers: Volume & Structure</h2>
      <p>Restores lost volume, enhances lips/cheeks, and fills static lines. Instant results. Duration: 6-18 months.</p>
      
      <h2>Perfect Combination</h2>
      <p>Many clients combine both for full-face rejuvenation – Botox for expression lines, fillers for volume and contour.</p>
      
      <p>Consultation is key to creating a customized plan that matches your goals and facial anatomy.</p>
    `
  },
  {
    slug: 'prp-therapy-benefits-skin-hair',
    title: 'PRP Therapy in 2025: Natural Benefits for Glowing Skin and Hair Restoration',
    date: 'December 17, 2025',
    readTime: '7 min read',
    author: 'Ghadia Haider',
    heroImage: 'https://media.allure.com/photos/6630123d7f40ca74d6a6c0ca/16:9/w_2560%2Cc_limit/vampire-facial.jpg',
    content: `
      <p>PRP (Platelet-Rich Plasma) therapy, popularly known as the "vampire facial," uses your body's own growth factors for natural regeneration – a leading trend in 2025.</p>
      
      <h2>Skin Rejuvenation Benefits</h2>
      <ul>
        <li>Boosts collagen and elastin production</li>
        <li>Improves texture, tone, and glow</li>
        <li>Reduces fine lines, acne scars, and pigmentation</li>
      </ul>
      
      <h2>Hair Restoration</h2>
      <p>Strengthens follicles, promotes thicker growth, and slows hair loss – especially effective in early stages.</p>
      
      <p>Safe, minimal side effects, gradual natural results over 3-6 months with a recommended series of sessions.</p>
    `
  },
  {
    slug: 'liquid-rhinoplasty-guide-2025',
    title: 'Liquid Rhinoplasty: The Non-Surgical Nose Job Revolution in 2025',
    date: 'December 16, 2025',
    readTime: '5 min read',
    author: 'Ghadia Haider',
    heroImage: 'https://media.allure.com/photos/5a13252594953253aa194624/16:9/w_2560%2Cc_limit/jesa-nose-job-before-after.jpg',
    content: `
      <p>Liquid rhinoplasty uses hyaluronic acid fillers to reshape the nose without surgery – perfect for subtle refinements.</p>
      
      <h2>Common Corrections</h2>
      <ul>
        <li>Smoothing dorsal humps</li>
        <li>Lifting droopy tips</li>
        <li>Improving symmetry and profile</li>
      </ul>
      
      <h2>Key Advantages</h2>
      <p>15-30 minute procedure, instant results, no general anesthesia, reversible, minimal swelling, return to work same day.</p>
      
      <p>Ideal for those testing changes before considering surgical options or wanting quick enhancement.</p>
    `
  },
  {
    slug: 'laser-treatments-trends-2025',
    title: 'Top Laser Skin Treatments Trending in Lahore for 2025',
    date: 'December 15, 2025',
    readTime: '6 min read',
    author: 'Ghadia Haider',
    heroImage: 'https://drharpe.com/wp-content/uploads/2023/09/Pretty-lady-with-laser-hair-removal.jpg',
    content: `
      <p>Laser technology continues to advance in 2025, offering safe, effective solutions tailored to South Asian skin types.</p>
      
      <h2>Most Popular Treatments</h2>
      <ul>
        <li>Full-body laser hair reduction</li>
        <li>Pigmentation and melasma correction</li>
        <li>Acne scar resurfacing</li>
        <li>Skin tightening and rejuvenation</li>
      </ul>
      
      <h2>Lahore-Specific Tips</h2>
      <p>Avoid direct sun exposure before/after sessions, use high SPF daily, and choose clinics with latest FDA-approved devices for optimal safety and results.</p>
    `
  }
];

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blogs">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.content.slice(0, 200),
    image: post.heroImage,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ghadia Haider Aesthetics',
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.personal.image
      }
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.seo.siteUrl}/blogs/${slug}`
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | Ghadia Haider Blog`}
        description={post.excerpt || 'Expert aesthetics insights and tips from certified aesthetician Ghadia Haider in Lahore.'}
        keywords="aesthetics blog, beauty tips lahore, botox guide, prp therapy, non surgical treatments"
        image={post.heroImage}
        url={`${siteConfig.seo.siteUrl}/blogs/${slug}`}
        schema={articleSchema}
      />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blogs" className="inline-flex items-center text-primary-700 hover:text-primary-900 mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" /> {post.readTime}
              </span>
            </div>
          </motion.header>

          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-12 border-t border-primary-100 text-center">
            <h3 className="text-3xl font-bold mb-6 text-primary-900">
              Ready to Start Your Aesthetic Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Book a personalized consultation to discuss your goals and create a custom treatment plan.
            </p>
            <Button
              size="xl"
              variant="gradient"
              onClick={() => window.open(`https://wa.me/${siteConfig.personal.whatsapp}`, '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact via WhatsApp
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}