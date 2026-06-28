import { motion } from 'framer-motion';
import { Award, Heart, Shield, Sparkles, TrendingUp, Users, MapPin, Briefcase } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { resolveAsset } from '../utils/resolveAsset';
import { aboutHighlights, lahoreServiceAreas } from '../data/faqContent';
import Button from '../components/Button';
import OnCallHighlightSection from '../components/OnCallHighlightSection';

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
    {
      title: 'Injectable aesthetics',
      detail: 'Botox, dermal fillers, fat dissolver, liquid rhinoplasty, and structural facial contouring with emphasis on symmetry and natural movement.',
    },
    {
      title: 'Skin & hair rejuvenation',
      detail: 'PRP for face and scalp, laser protocols for pigmentation and texture, HydraFacial, skin tightening, and brightening treatments.',
    },
    {
      title: 'Advanced non-surgical care',
      detail: 'Fibroplasty, face reshaping, skin tag and mole removal — performed with sterile technique and clear aftercare guidance.',
    },
    {
      title: 'Clinic & brand support',
      detail: 'On-call aesthetic services for practices plus digital marketing for beauty brands — Meta ads, content, and visual branding.',
    },
  ];

  const milestones = [
    { year: '2020+', label: 'Started hands-on aesthetic training and clinic assisting in Lahore' },
    { year: '2021–2023', label: 'Built experience across injectables, laser, PRP, and client consultation in multi-clinic settings' },
    { year: '2023–2025', label: 'Expanded on-call collaborations and independent client base across Lahore' },
    { year: 'Today', label: 'Full portfolio of treatments, real results gallery, and clinic partnership availability nationwide' },
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
              About <span className="gradient-text">Ghadia Haider</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional aesthetician in Lahore — 4+ years delivering Botox, fillers, PRP, laser, and non-surgical skin treatments with a consultation-first, results-driven approach
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
                  className="w-full h-full profile-photo"
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
                Lahore Aesthetician · Injectables · Skin Rejuvenation
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am Ghadia Haider — a professional aesthetician based in Lahore with more than four years of practical experience in advanced, non-surgical cosmetic procedures. My work spans Botox, dermal fillers, PRP therapy, laser skin treatments, liquid rhinoplasty, fat dissolver injections, and comprehensive facial rejuvenation plans tailored to each client's anatomy and lifestyle.
                </p>
                <p>
                  What sets my practice apart is consistency: the same level of care whether you are a private client preparing for an event, someone addressing long-term skin concerns, or a clinic director looking for a dependable on-call aesthetician. I have supported multiple clinics and professionals where punctuality, sterile technique, and honest communication are non-negotiable.
                </p>
                <p>
                  I do not believe in over-treating or chasing viral trends. Every recommendation is grounded in facial mapping — understanding where volume is lost, which muscles create lines, and how laser or PRP can support skin quality over time. That is how results stay natural months later, not just on the day of treatment.
                </p>
                <p>
                  Alongside clinical aesthetics, I work as a digital marketing specialist for beauty and wellness brands — helping clinics grow through Meta advertising, content strategy, and polished visual design. This dual background means I understand both the treatment room and how credible results should be presented online.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button onClick={() => (window.location.href = '/aesthetic-services')} variant="gradient">
                  View All Treatments
                </Button>
                <Button onClick={() => (window.location.href = '/my-work')} variant="outline">
                  See My Work & Results
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building expertise through real clinic hours, client trust, and continuous skill development
            </p>
          </motion.div>
          <div className="space-y-6">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg items-start"
              >
                <div className="shrink-0 w-24 text-center">
                  <div className="text-lg font-bold gradient-text">{item.year}</div>
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OnCallHighlightSection />

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

            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-primary-500 to-rose-500 rounded-full shrink-0"></div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-5">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Approach</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl font-bold text-gray-900">Serving Lahore & Beyond</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Based in Lahore, I work with clients across major neighbourhoods and partner with clinics nationwide for scheduled on-call aesthetic services. If you are searching for a professional aesthetician near DHA, Gulberg, or Johar Town — or need injectable support for your practice — reach out to discuss availability.
              </p>
              <div className="flex flex-wrap gap-2">
                {lahoreServiceAreas.map((area) => (
                  <span key={area} className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-primary-800 shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Clinic collaborations</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                I provide on-call coverage for Botox, fillers, PRP, laser sessions, and other non-surgical treatments — ideal for busy clinics that need an experienced aesthetician without full-time hiring overhead.
              </p>
              <Button
                onClick={() =>
                  window.open(
                    `https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I am interested in clinic collaboration / on-call aesthetic services`,
                    '_blank'
                  )
                }
                variant="gradient"
              >
                Discuss Collaboration
              </Button>
            </motion.div>
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
