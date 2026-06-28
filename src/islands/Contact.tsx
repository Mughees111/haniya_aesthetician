import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, MapPin, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useEffect } from 'react';

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Fastest & preferred way',
      value: siteConfig.personal.whatsapp,
      link: `https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'd love to discuss your aesthetic services`,
      color: 'from-green-500 to-emerald-600',
      glow: 'shadow-green-300/50'
    },
    {
      icon: Phone,
      title: 'Phone Call',
      description: 'Direct consultation',
      value: siteConfig.personal.phone,
      link: `tel:${siteConfig.personal.phone}`,
      color: 'from-primary-500 to-rose-500',
      glow: 'shadow-primary-300/50'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'For detailed inquiries',
      value: siteConfig.personal.email,
      link: `mailto:${siteConfig.personal.email}`,
      color: 'from-indigo-500 to-purple-600',
      glow: 'shadow-indigo-300/50'
    }
  ];

  const socialLinks = [
    { icon: Instagram, link: siteConfig.social.instagram, color: 'hover:text-pink-600' },
    { icon: Facebook, link: siteConfig.social.facebook, color: 'hover:text-blue-600' },
    { icon: Linkedin, link: siteConfig.social.linkedin, color: 'hover:text-blue-700' }
  ];

  const servicesOffered = [
    'On-Call & At-Home Aesthetic Sessions',
    'Clinic Collaborations & Partnerships',
    'Personalized Client Consultations',
    'Advanced Facial & Body Treatments',
    'Digital Marketing for Beauty Brands',
    'Training & Workshop Inquiries'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section - More Elegant & Highlighted Message */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-rose-50 to-white opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-primary-700 font-medium mb-8 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Always Here to Help You Glow
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Let's <span className="gradient-text">Connect</span>
            </h1>

            {/* Highlighted Key Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-800 font-medium max-w-4xl mx-auto leading-relaxed px-6"
            >
              For <span className="text-primary-600 font-semibold">clinic collaborations</span>,{' '}
              <span className="text-rose-600 font-semibold">on-call aesthetic services</span>, or{' '}
              <span className="text-primary-600 font-semibold">personal consultations</span> —{' '}
              <span className="italic text-gray-900">I'm just one message away.</span>
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.icon === MessageCircle ? '_blank' : undefined}
                  rel={method.icon === MessageCircle ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{method.title}</h3>
                  <p className="text-gray-600 mb-5 text-lg">{method.description}</p>
                  <p className="text-primary-700 font-semibold text-xl">{method.value}</p>
                  <ArrowRight className="w-6 h-6 text-primary-600 mx-auto mt-6 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-4 transition-all duration-300" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info + Services Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Here for <span className="gradient-text">You</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-10">
                With years of expertise and a passion for natural beauty, I offer professional, safe, and personalized aesthetic services tailored to your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Based In</div>
                    <div className="text-gray-600 text-lg">{siteConfig.personal.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Flexible Hours</div>
                    <div className="text-gray-600 text-lg">Available for on-call & scheduled appointments</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-6">Follow My Journey</h3>
                <div className="flex gap-5">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -4 }}
                        className={`w-14 h-14 bg-gradient-to-br from-primary-100 to-rose-100 rounded-2xl flex items-center justify-center text-gray-700 ${social.color} shadow-lg transition-all`}
                      >
                        <Icon className="w-7 h-7" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">Services I Offer</h3>
              <div className="grid grid-cols-1 gap-5">
                {servicesOffered.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-gradient-to-r from-primary-50 to-rose-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-rose-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-800 font-medium text-lg">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-rose-100/50 to-white" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-lg rounded-4xl p-16 shadow-3xl max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to <span className="gradient-text">Begin</span>?
            </h2>
            <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Message me on WhatsApp — I reply quickly and personally to every inquiry.
            </p>
            <motion.a
              href={`https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi ${siteConfig.personal.name.split(' ')[0]}, I'm interested in your aesthetic services!`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-6 text-2xl font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl hover:shadow-green-400/60 transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8" />
              Start Conversation on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}