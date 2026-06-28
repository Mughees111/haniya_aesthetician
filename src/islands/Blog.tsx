import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import Button from '../components/Button';
import { siteConfig } from '../config/siteConfig';

const blogPosts = [
  {
    slug: 'at-home-aesthetic-treatments-lahore-2026',
    title: "At-Home Aesthetic Treatments in Lahore: What's Actually Safe in 2026",
    excerpt:
      "Wondering which aesthetic treatments can safely come to your home in Lahore? A professional aesthetician breaks down what travels well, what doesn't, and what to ask before booking.",
    date: 'June 29, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80',
  },
  {
    slug: 'anti-aging-treatments-south-asian-skin-2026',
    title: 'Anti-Aging Treatments for South Asian Skin: A Complete 2026 Guide',
    excerpt:
      "South Asian skin ages differently — more pigmentation, slower superficial wrinkling, but unique challenges. Here's what actually works in 2026 for Pakistani skin tones.",
    date: 'June 29, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  },
  {
    slug: 'bridal-skin-prep-aesthetic-timeline-pakistan',
    title: 'Bridal Skin Prep: The 6-Month Aesthetic Timeline Before Your Wedding in Pakistan',
    excerpt:
      "A professional aesthetician's month-by-month guide to glowing bridal skin — covering Botox, fillers, PRP, laser, and skin prep for Pakistani brides.",
    date: 'June 29, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
  },
  {
    slug: 'botox-aftercare-tips-for-best-results',
    title: '10 Essential Botox Aftercare Tips for Longer-Lasting, Natural Results in 2025',
    excerpt: 'Discover expert-recommended aftercare steps to maximize your Botox treatment and avoid common mistakes for smoother, youthful skin.',
    date: 'December 19, 2025',
    readTime: '6 min read',
    image: 'https://www.scenicdermatology.com/wp-content/uploads/Needle-for-Botox-Injection-and-Face.webp', // From search
    content: `
      <p>Botox remains one of the most popular non-surgical treatments in 2025 for reducing fine lines and achieving a refreshed look. But did you know that proper aftercare is key to getting the best, longest-lasting results?</p>
      
      <h2>Immediate Aftercare (First 4-6 Hours)</h2>
      <ul>
        <li>Stay upright – avoid lying down to prevent migration.</li>
        <li>Gently exercise facial muscles (frown, smile, raise eyebrows) to help absorption.</li>
        <li>No touching or massaging the treated area.</li>
      </ul>
      
      <h2>First 24 Hours</h2>
      <ul>
        <li>Avoid strenuous exercise, saunas, or hot showers.</li>
        <li>Skip alcohol and blood-thinning medications if possible.</li>
        <li>No facials, peels, or other treatments.</li>
      </ul>
      
      <h2>Long-Term Tips</h2>
      <p>Protect your skin with SPF daily, stay hydrated, and schedule touch-ups every 3-6 months. Following these steps ensures natural, glowing results that last.</p>
      
      <p>Ready for your Botox transformation? <a href="/contact">Book a consultation today</a>.</p>
    `
  },
  {
    slug: 'botox-vs-dermal-fillers-2025-guide',
    title: 'Botox vs Dermal Fillers: Key Differences and Which is Right for You in 2025',
    excerpt: 'Confused about Botox and fillers? This complete comparison explains how they work, results, and ideal uses for natural rejuvenation.',
    date: 'December 18, 2025',
    readTime: '8 min read',
    image: 'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/22133-lip-fillers-1177813558',
    content: `
      <p>In 2025, injectables like Botox and dermal fillers dominate non-surgical aesthetics. But they target different concerns.</p>
      
      <h2>Botox: For Dynamic Wrinkles</h2>
      <p>Relaxes muscles to smooth expression lines (forehead, crow's feet, frown lines). Results in 3-14 days, lasts 3-6 months.</p>
      
      <h2>Dermal Fillers: For Volume Loss</h2>
      <p>Adds plumpness to lips, cheeks, and static lines. Instant results, lasts 6-18 months.</p>
      
      <h2>Best Combo Approach</h2>
      <p>Many clients combine both for comprehensive rejuvenation – Botox for movement lines, fillers for volume.</p>
      
      <p>Consult a certified aesthetician to create your personalized plan.</p>
    `
  },
  {
    slug: 'prp-therapy-benefits-skin-hair',
    title: 'PRP Therapy in 2025: Natural Benefits for Glowing Skin and Hair Restoration',
    excerpt: "Explore how Platelet-Rich Plasma uses your body's healing power for radiant skin and thicker hair – the regenerative trend of the year.",
    date: 'December 17, 2025',
    readTime: '7 min read',
    image: 'https://columbiaskinclinic.com/wp-content/uploads/2018/12/vampire-facial-columbia-skin-clinic.jpg',
    content: `
      <p>PRP (Platelet-Rich Plasma) therapy, often called the "vampire facial," harnesses your blood's growth factors for natural regeneration.</p>
      
      <h2>Skin Benefits</h2>
      <ul>
        <li>Boosts collagen for firmer texture</li>
        <li>Reduces fine lines and acne scars</li>
        <li>Improves overall glow and hydration</li>
      </ul>
      
      <h2>Hair Restoration</h2>
      <p>Stimulates dormant follicles, thickens hair, and slows loss – ideal for early thinning.</p>
      
      <p>Results build over 3-6 months with a series of sessions. Safe, minimal downtime.</p>
    `
  },
  {
    slug: 'liquid-rhinoplasty-guide-2025',
    title: 'Liquid Rhinoplasty: The Non-Surgical Nose Job Revolution in 2025',
    excerpt: 'Learn about this 15-minute procedure using fillers for subtle nose reshaping – no surgery, no downtime.',
    date: 'December 16, 2025',
    readTime: '5 min read',
    image: 'https://media.allure.com/photos/5b8454276e1ab2329f88c60b/16:9/w_1280,c_limit/liquid-rhinoplasty-before-after-social.jpg',
    content: `
      <p>Liquid rhinoplasty uses dermal fillers to refine nose shape without incisions.</p>
      
      <h2>Ideal For</h2>
      <ul>
        <li>Smoothing bumps</li>
        <li>Lifting droopy tips</li>
        <li>Improving symmetry</li>
      </ul>
      
      <h2>Advantages</h2>
      <p>Instant results, reversible, minimal swelling, back to work same day.</p>
      
      <p>Perfect for testing changes before considering surgical options.</p>
    `
  },
  {
    slug: 'laser-treatments-trends-2025',
    title: 'Top Laser Skin Treatments Trending in Lahore for 2025',
    excerpt: 'From hair removal to rejuvenation – discover safe, effective laser options for smoother skin in Pakistan\'s climate.',
    date: 'December 15, 2025',
    readTime: '6 min read',
    image: 'https://dermsurgery.net/wp-content/uploads/2024/09/Untitled-design-2024-09-12T105216.382.png',
    content: `
      <p>Laser technology advances rapidly in 2025, offering precise solutions for Pakistani skin types.</p>
      
      <h2>Popular Treatments</h2>
      <ul>
        <li>Permanent hair reduction</li>
        <li>Pigmentation and sun spot removal</li>
        <li>Acne scar improvement</li>
        <li>Skin tightening and glow</li>
      </ul>
      
      <h2>Tips for Lahore</h2>
      <p>Avoid sun exposure pre/post treatment, use high SPF, and choose clinics with FDA-approved devices.</p>
    `
  }
];

export default function Blog() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-primary-900"
          >
            Aesthetics Insights & Tips
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice on the latest non-surgical treatments, aftercare, and beauty trends in Lahore from certified aesthetician Ghadia Haider.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50/50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <a href={`/blogs/${post.slug}`} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Ghadia Haider
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-primary-900 hover:text-primary-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <span className="text-primary-600 font-medium hover:underline">
                      Read More →
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  `https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'd love personalized aesthetic advice`,
                  '_blank'
                )
              }
            >
              Book a Consultation for Personalized Advice
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}