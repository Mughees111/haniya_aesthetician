import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import SEO from '../components/SEO';
import { testimonials } from '../data/testimonials';

export default function Reviews() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <>
      <SEO
        title="Client Reviews"
        description="Read what my clients say about their aesthetic treatment experiences. Real reviews from satisfied clients sharing their transformation stories."
        keywords="client reviews, testimonials, aesthetic treatment reviews, beauty treatment feedback"
      />

      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="gradient-text">Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Hear what my clients have to say about their treatment experiences
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex flex-col items-center bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-8 h-8 ${
                      i < Math.floor(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">
                {averageRating.toFixed(1)} out of 5
              </div>
              <div className="text-gray-600">
                Based on {testimonials.length} reviews
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="flex justify-center mb-6">
                <Quote className="w-16 h-16 text-primary-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Why Clients <span className="gradient-text">Choose Me</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">4+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">5.0</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-100">
                <p className="text-center text-gray-700 text-lg leading-relaxed">
                  Every review reflects my commitment to delivering safe, professional, and results-driven aesthetic treatments. Your satisfaction and confidence are my top priorities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the <span className="gradient-text">Difference</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied clients and start your aesthetic journey today
            </p>
            <motion.a
              href="https://wa.me/93221401833?text=Hi, I would like to book a consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-rose-500 text-white hover:shadow-lg hover:shadow-primary-300/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
