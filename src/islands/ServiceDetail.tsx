import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { getServiceBySlug, services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import { useEffect } from 'react';
import { resolveAsset } from '../utils/resolveAsset';

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-background">
        <div className="text-center p-8 bg-white rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-bold mb-4 text-primary-800">Service Not Found</h1>
          <Button onClick={() => (window.location.href = '/aesthetic-services')} size="lg" variant="gradient">
            View All Services
          </Button>
        </div>
      </div>
    );
  }

  const relatedServices = services
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  const Icon = service.icon;

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.primary.100/20)_0%,transparent_80%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <a
            href="/aesthetic-services"
            className="inline-flex items-center text-primary-700 hover:text-primary-900 mb-8 transition-colors font-medium text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Services
          </a>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary-700" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-900 text-center lg:text-left">
                  {service.title} in Lahore
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.shortDescription} Available for professional treatments in Lahore and surrounding areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    onClick={() => {
                      window.open(
                        `https://wa.me/${siteConfig.personal.whatsapp}?text=Hi, I'm interested in ${service.title} in Lahore`,
                        '_blank'
                      );
                    }}
                    size="lg"
                    variant="gradient"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                  <Button onClick={() => (window.location.href = '/contact')} variant="outline" size="lg">
                    Contact for Details
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-primary-50">
                <div className="aspect-[16/9] rounded-2xl mb-8 overflow-hidden relative shadow-lg">
                  <img
                    src={resolveAsset(service.image)}
                    alt={`${service.title} treatment example in Lahore by Ghadia Haider`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                </div>

                <h2 className="text-3xl font-bold mb-6 text-primary-900">About {service.title} Treatment</h2>
                <div className="prose prose-lg max-w-none mb-8 text-gray-700">
                  {service.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph.replace(/Lahore/g, '<strong>Lahore</strong>')} {/* Highlight Lahore if mentioned */}
                    </p>
                  ))}
                  <p className="mt-4 italic text-gray-500">
                    All treatments are performed with highest safety standards in Lahore clinics or on-call services.
                  </p>
                </div>

                <div className="border-t border-primary-100 pt-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary-900">Key Benefits</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 bg-primary-50/50 p-4 rounded-xl"
                      >
                        <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {service.howToSteps && (
        <section className="py-16 bg-primary-50/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">
              How {service.title} is Performed
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.howToSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New: FAQ Section */}
      {service.faqs && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary-50 to-background rounded-2xl p-6 shadow-md border border-primary-100"
                >
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-br from-background to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,theme(colors.accent/10)_0%,transparent_80%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl border border-primary-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">
              Ready for Your {service.title} Transformation in Lahore?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a personalized consultation to discuss your aesthetic goals and create a custom treatment plan tailored for you in Lahore.
            </p>
            <Button
              onClick={() => {
                window.open(
                  `https://wa.me/${siteConfig.personal.whatsapp}?text=Hi, I would like to book a consultation for ${service.title} in Lahore`,
                  '_blank'
                );
              }}
              size="xl"
              variant="gradient"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Now on WhatsApp
            </Button>
          </motion.div>

          {relatedServices.length > 0 && (
            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4 text-primary-900">
                  Related Aesthetic Services in Lahore
                </h2>
                <p className="text-xl text-gray-600">
                  Explore complementary treatments for enhanced results
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService, index) => (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ServiceCard
                      title={`${relatedService.title} in Lahore`}
                      description={relatedService.shortDescription}
                      icon={relatedService.icon}
                      image={relatedService.image}
                      link={`/services/${relatedService.slug}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}