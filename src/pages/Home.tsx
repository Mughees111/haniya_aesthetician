import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import SEO from '../components/SEO';
import { siteConfig } from '../config/siteConfig';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

export default function Home() {
  const navigate = useNavigate();
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <SEO schema={siteConfig.business.schema} />

      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="bg-white px-4 py-2 rounded-full text-primary-600 font-medium text-sm shadow-lg">
                  {siteConfig.personal.experience} of Excellence
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Professional Aesthetician</span>
                <br />
                <span className="text-gray-800">{siteConfig.personal.tagline}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {siteConfig.personal.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button onClick={() => navigate('/aesthetic-services')} size="lg">
                  View My Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => navigate('/contact')} variant="outline" size="lg">
                  Contact Me
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-4xl font-bold gradient-text">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="h-12 w-px bg-primary-200"></div>
                <div>
                  <div className="text-4xl font-bold gradient-text">50+</div>
                  <div className="text-gray-600">Treatments</div>
                </div>
                <div className="h-12 w-px bg-primary-200"></div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-600">5 Star Rated</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={siteConfig.personal.image}
                  alt={siteConfig.personal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-rose-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certified Professional</div>
                    <div className="text-sm text-gray-600">Licensed Aesthetician</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Expertise</span> Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional aesthetic treatments tailored to enhance your natural beauty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

          <div className="text-center mt-12">
            <Button onClick={() => navigate('/aesthetic-services')} variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">My Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-rose-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white/30 mb-2">Before/After</div>
                    <div className="text-white/50">Client Result {item}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="font-semibold">Treatment Result</div>
                    <div className="text-sm">View full gallery</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => navigate('/my-work')} size="lg">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Client Reviews</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what my clients have to say
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => navigate('/reviews')} variant="outline" size="lg">
              Read All Reviews
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Look?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a consultation today and let's discuss your aesthetic goals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate('/contact')} size="lg">
                Get In Touch
              </Button>
              <Button onClick={() => navigate('/aesthetic-services')} variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
