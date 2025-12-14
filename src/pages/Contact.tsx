import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Fastest way to reach me',
      value: siteConfig.personal.whatsapp,
      link: `https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I would like to know more about your services`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call for consultations',
      value: siteConfig.personal.phone,
      link: `tel:${siteConfig.personal.phone}`,
      color: 'from-primary-500 to-rose-500'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me a message',
      value: siteConfig.personal.email,
      link: `mailto:${siteConfig.personal.email}`,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      link: siteConfig.social.instagram,
      color: 'hover:text-pink-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      link: siteConfig.social.facebook,
      color: 'hover:text-blue-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: siteConfig.social.linkedin,
      color: 'hover:text-blue-700'
    }
  ];

  const consultationTypes = [
    'Clinic Collaborations',
    'On-Call Aesthetic Services',
    'Individual Consultations',
    'Digital Marketing Services',
    'Treatment Inquiries',
    'General Questions'
  ];

  return (
    <>
      <SEO
        title="Contact Me"
        description={`Get in touch with ${siteConfig.personal.name} for clinic collaborations, on-call aesthetic services, consultations, or digital marketing inquiries.`}
        keywords="contact aesthetician, book consultation, aesthetic services inquiry, clinic collaboration"
      />

      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For clinic collaborations, on-call aesthetic services, or consultations, feel free to reach out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.icon === MessageCircle ? '_blank' : undefined}
                  rel={method.icon === MessageCircle ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="text-primary-600 font-medium">{method.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why <span className="gradient-text">Contact Me</span>?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you're a clinic looking for a professional aesthetician, a client seeking aesthetic treatments, or a beauty brand needing digital marketing services, I'm here to help.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">{siteConfig.personal.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Availability</div>
                    <div className="text-gray-600">Flexible scheduling for consultations</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Connect on Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`w-12 h-12 bg-gradient-to-br from-primary-50 to-rose-50 rounded-full flex items-center justify-center text-gray-700 ${social.color} transition-colors duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">What I Offer</h3>
              <ul className="space-y-3">
                {consultationTypes.map((type, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-primary-500 to-rose-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{type}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The best way to reach me is through WhatsApp. I respond quickly and we can discuss your needs in detail.
            </p>
            <motion.a
              href={`https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi ${siteConfig.personal.name}, I would like to discuss your services`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg hover:shadow-green-300/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Message on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
