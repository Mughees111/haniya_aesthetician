import { motion } from 'framer-motion';
import { Award, Heart, Shield, Sparkles, TrendingUp, Users } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { resolveAsset } from '../utils/resolveAsset';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict hygiene protocols and medical-grade products for maximum client safety'
    },
    {
      icon: Heart,
      title: 'Client-Centered',
      description: 'Personalized treatments tailored to each client\'s unique needs and goals'
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'Continuous learning and staying updated with latest aesthetic techniques'
    },
    {
      icon: Award,
      title: 'Professional',
      description: 'High standards of professionalism, ethics, and responsibility in every treatment'
    }
  ];

  const expertise = [
    'Advanced Aesthetic Procedures',
    'Anti-Aging Treatments',
    'Facial Contouring & Reshaping',
    'Skin Rejuvenation',
    'Injectable Treatments',
    'Laser Technology',
    'Medical-Grade Skincare',
    'Digital Marketing for Beauty Brands'
  ];

  return (
    <>
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about enhancing natural beauty through safe, professional aesthetic treatments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={resolveAsset(siteConfig.personal.image)}
                  alt={siteConfig.personal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text">{siteConfig.personal.experience}</div>
                  <div className="text-gray-600 font-medium">Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Professional Aesthetician & Digital Marketing Specialist
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am a professional Aesthetician with over 4 years of practical experience in advanced aesthetic and non-surgical cosmetic procedures. I specialize in delivering natural-looking, safe, and personalized results tailored to each client's facial structure and skin needs.
                </p>
                <p>
                  My approach to aesthetics is built on precision, hygiene, confidence, and continuous learning. I have worked with multiple clinics and professionals, providing on-call aesthetic services where expertise, responsibility, and professionalism are essential.
                </p>
                <p>
                  Alongside aesthetics, I also work as a Digital Marketing Specialist, helping beauty brands and clinics grow through strategic Meta Ads, high-quality content creation, and visually appealing designs.
                </p>
                <p>
                  I am highly confident in my work, detail-oriented, and committed to enhancing beauty while maintaining medical ethics and client safety.
                </p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every treatment and client interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Areas of <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600">
                Specialized skills and knowledge gained through years of practice
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-br from-primary-500 to-rose-500 rounded-full"></div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why <span className="gradient-text">Choose Me</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Client-Focused</h3>
                <p className="text-gray-600">
                  Every treatment is customized based on individual facial structure, skin type, and aesthetic goals
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Results-Driven</h3>
                <p className="text-gray-600">
                  Focused on achieving natural, beautiful results that enhance your features rather than change them
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Professional Standards</h3>
                <p className="text-gray-600">
                  Strict adherence to hygiene protocols, medical ethics, and industry best practices
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
