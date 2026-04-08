import { motion } from 'framer-motion';
import { Sparkles, Heart, Clock, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { useEffect } from 'react';

export default function AestheticServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Elegant Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Dreamy Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-rose-50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30" />

        {/* Soft Floating Blurs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-300/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-primary-700 font-medium mb-8 shadow-xl border border-white/50"
            >
              <Sparkles className="w-5 h-5" />
              4+ Years of Expertise in Aesthetic Excellence
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Discover Your
              <br />
              <span className="gradient-text text-6xl md:text-8xl">Natural Glow</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Advanced aesthetic treatments performed with precision, artistry, and a deep understanding of facial harmony.
              Every procedure is tailored to enhance your unique beauty — safely and naturally.
            </motion.p>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/60">
                <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                <p className="text-gray-600">Custom treatment plans based on your goals & facial structure</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/60">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safe & Professional</h3>
                <p className="text-gray-600">Highest standards of hygiene and medical-grade techniques</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/60">
                <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lasting Results</h3>
                <p className="text-gray-600">Natural-looking enhancements that stand the test of time</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Signature Treatments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully curated services designed to rejuvenate, enhance, and restore your confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  image={service.image}
                  link={`/services/${service.slug}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/60 via-rose-100/60 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

        {/* Floating Blurs */}
        <div className="absolute top-10 left-20 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-rose-300/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/95 backdrop-blur-xl rounded-4xl p-16 shadow-3xl max-w-5xl mx-auto text-center border border-white/50"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Not Sure Where to <span className="gradient-text">Start</span>?
            </h2>
            <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your perfect treatment begins with a conversation.
              Let’s discuss your concerns and create a plan that brings out the most confident version of you.
            </p>

            <motion.a
              href="https://wa.me/93221401833?text=Hi! I'd love to book a consultation and learn more about your aesthetic treatments"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-6 text-2xl font-semibold rounded-full bg-gradient-to-r from-primary-600 to-rose-600 text-white shadow-2xl hover:shadow-primary-400/50 transition-all duration-300"
            >
              <Sparkles className="w-8 h-8" />
              Book Your Free Consultation
            </motion.a>

            <p className="text-lg text-gray-600 mt-8">
              Quick response • Personalized advice • No obligation
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}