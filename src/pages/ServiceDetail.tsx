import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { getServiceBySlug, services } from '../data/services';
import { siteConfig } from '../config/siteConfig';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/aesthetic-services')}>
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.seo.description,
    procedureType: 'Aesthetic Treatment',
  };

  return (
    <>
      <SEO
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        schema={serviceSchema}
      />

      <section className="pt-32 pb-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/aesthetic-services"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="sticky top-24">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-rose-100 rounded-3xl flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-primary-600" />
                </div>
                <h1 className="text-5xl font-bold mb-6 text-gray-900">{service.title}</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => {
                      window.open(
                        `https://wa.me/${siteConfig.personal.whatsapp}?text=Hi, I'm interested in ${service.title}`,
                        '_blank'
                      );
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                  <Button onClick={() => navigate('/contact')} variant="outline">
                    Contact Me
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-rose-100 rounded-2xl mb-8 flex items-center justify-center">
                <Icon className="w-24 h-24 text-primary-400" />
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Treatment</h2>
              <div className="prose prose-lg max-w-none mb-8">
                {service.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-t border-primary-100 pt-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
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
            className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-3xl p-12 text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a consultation to discuss your goals and create a personalized treatment plan
            </p>
            <Button
              onClick={() => {
                window.open(
                  `https://wa.me/${siteConfig.personal.whatsapp}?text=Hi, I would like to book a consultation for ${service.title}`,
                  '_blank'
                );
              }}
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Now on WhatsApp
            </Button>
          </motion.div>

          {relatedServices.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">
                  Related <span className="gradient-text">Services</span>
                </h2>
                <p className="text-xl text-gray-600">
                  You might also be interested in these treatments
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService, index) => (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard
                      title={relatedService.title}
                      description={relatedService.shortDescription}
                      icon={relatedService.icon}
                      link={`/services/${relatedService.slug}`}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
