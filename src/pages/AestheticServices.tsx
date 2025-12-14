import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { services } from '../data/services';

export default function AestheticServices() {
  return (
    <>
      <SEO
        title="Aesthetic Services"
        description="Comprehensive aesthetic and anti-aging treatments including Botox, dermal fillers, laser treatments, PRP therapy, and more. Professional services with 4+ years of experience."
        keywords="aesthetic services, botox, dermal fillers, laser treatment, PRP therapy, skin treatments, anti-aging"
      />

      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Aesthetic <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Each procedure is performed with professional assessment, strict hygiene protocols, and a focus on achieving natural, balanced results.
            </p>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                With over 4 years of hands-on experience, I provide advanced aesthetic treatments that combine medical precision with artistic vision. Every client receives a personalized consultation to ensure treatments align with their unique features and goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  link={`/services/${service.slug}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Not Sure Which <span className="gradient-text">Treatment</span> Is Right For You?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every face is unique, and so should be your treatment plan. Book a consultation to discuss your aesthetic goals and receive personalized recommendations.
            </p>
            <motion.a
              href={`https://wa.me/93221401833?text=Hi, I would like to know more about your aesthetic services`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-rose-500 text-white hover:shadow-lg hover:shadow-primary-300/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
