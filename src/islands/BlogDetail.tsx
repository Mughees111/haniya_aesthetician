import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Phone } from 'lucide-react';
import Button from '../components/Button';
import { siteConfig } from '../config/siteConfig';
import { blogDetailPosts } from '../data/blogDetailPosts';

export default function BlogDetail({ slug }: { slug: string }) {
  const post = blogDetailPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <a href="/blogs">
            <Button>Back to Blog</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <a href="/blogs" className="inline-flex items-center text-primary-700 hover:text-primary-900 mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
          </a>

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
              onClick={() =>
                window.open(
                  `https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I have a question about your blog`,
                  '_blank'
                )
              }
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