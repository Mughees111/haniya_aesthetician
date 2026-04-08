import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Phone } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { siteConfig } from '../config/siteConfig';
import { resolveAsset } from '../utils/resolveAsset';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

import laserVideo1 from '../assets/videos/laser1.mp4';
import prpVideo from '../assets/videos/prp1.mp4';
import facePRP from '../assets/videos/facePRP.mp4';

/** SEO: profile + media labels for Google Images & video discovery */
const PROFILE_IMG_ALT =
  'Ghadia Haider — professional aesthetician portrait in Lahore, Pakistan. Ghadia aesthetician: Botox, dermal fillers, PRP therapy, laser and skin treatments.';
const PROFILE_IMG_TITLE =
  'Ghadia Haider | Ghadia Aesthetician Lahore — certified professional aesthetician portfolio photo';
const HERO_BG_VIDEO_LABEL =
  'Ghadia Haider aesthetic clinic Lahore — background PRP facial rejuvenation treatment atmosphere video';
const LASER_THERAPY_VIDEO_LABEL =
  'Laser therapy treatment video — Ghadia Haider advanced laser skin rejuvenation in Lahore, Pakistan | aesthetic laser results';
const PRP_HOME_VIDEO_LABEL =
  'PRP facial rejuvenation treatment video — Ghadia Haider aesthetician Lahore, Pakistan | platelet-rich plasma skin therapy';

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero Section - Fully Mobile Responsive */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          title={HERO_BG_VIDEO_LABEL}
          aria-label={HERO_BG_VIDEO_LABEL}
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30"
        >
          <source src={resolveAsset(facePRP)} type="video/mp4" />
        </video>

        {/* Soft Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 to-rose-100/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full text-primary-700 font-medium text-sm mb-6 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                {siteConfig.personal.experience} Years of Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="block gradient-text">Glow Naturally</span>
                <span className="block text-gray-800 mt-3 text-3xl sm:text-4xl md:text-5xl">
                  {siteConfig.personal.tagline}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg sm:text-xl text-gray-700 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {siteConfig.personal.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Button
                  onClick={() => window.open(`https://wa.me/${siteConfig.personal.whatsapp}?text=Hi, I'm interested in aesthetic treatments in Lahore`, '_blank')}
                  size="lg"
                  variant="gradient"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
                <Button onClick={() => (window.location.href = '/aesthetic-services')} size="lg">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              {/* Stats - Mobile Friendly (Vertical on small screens) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center lg:text-left"
              >
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold gradient-text">500+</div>
                  <div className="text-lg text-gray-600 mt-1">Happy Clients in Lahore</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold gradient-text">50+</div>
                  <div className="text-lg text-gray-600 mt-1">Advanced Treatments</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-lg text-gray-600">5-Star Rated Service</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/80">
                <img
                  src={resolveAsset(siteConfig.personal.image)}
                  alt={PROFILE_IMG_ALT}
                  title={PROFILE_IMG_TITLE}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-bottom-10 lg:-left-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl w-80"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{siteConfig.personal.name}</div>
                    <div className="text-base text-gray-600">Certified Aesthetic Expert in Lahore</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Already good, minor mobile tweaks */}
      <section className="py-20 sm:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Signature Aesthetic Treatments in <span className="gradient-text">Lahore</span>
              {/* My <span className="gradient-text">Signature Treatments</span> */}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Premium, personalized services including Botox, fillers, PRP, laser therapy, and more – all performed with precision and care
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard
                  title={`${service.title} in Lahore`}
                  description={service.shortDescription}
                  icon={service.icon}
                  image={service.image}
                  link={`/services/${service.slug}`}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => (window.location.href = '/aesthetic-services')} variant="outline" size="lg">
              Discover All Treatments
            </Button>
          </div>
        </div>
      </section>

      {/* Real Transformations - Videos Mobile Responsive */}
      <section className="py-20 sm:py-24 bg-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">My Real Transformations</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See the gentle, precise treatments I personally perform
            </p>
          </motion.div>

          <div className="grid gap-10 max-w-5xl mx-auto">
            {/* Stack vertically on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => (document.getElementById('laser-modal') as HTMLDialogElement | null)?.showModal()}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                title={LASER_THERAPY_VIDEO_LABEL}
                aria-label={LASER_THERAPY_VIDEO_LABEL}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              >
                <source src={resolveAsset(laserVideo1)} type="video/mp4" />
              </video>
              {/* Hover overlay same as before */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-white">Advanced Laser Therapy</h3>
                <p className="text-base sm:text-lg text-white/90 mt-2">Tap to watch full treatment</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5-7-5z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => (document.getElementById('prp-modal') as HTMLDialogElement | null)?.showModal()}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                title={PRP_HOME_VIDEO_LABEL}
                aria-label={PRP_HOME_VIDEO_LABEL}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              >
                <source src={resolveAsset(prpVideo)} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-white">PRP Facial Rejuvenation</h3>
                <p className="text-base sm:text-lg text-white/90 mt-2">Tap to watch full treatment</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5-7-5z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => (window.location.href = '/my-work')} size="lg">
              View Full Gallery & Results
            </Button>
          </div>
        </div>

        {/* Modals - Fixed paths using imported variables */}
        <dialog id="laser-modal" className="modal backdrop:bg-black/90">
          <div className="modal-box max-w-4xl w-full p-0 bg-transparent rounded-3xl overflow-hidden">
            <button className="btn btn-circle btn-ghost text-white absolute top-4 right-4 z-10" onClick={(e) => e.currentTarget.closest('dialog')?.close()}>
              ✕
            </button>
            <video
              controls
              autoPlay
              title={`Full length: ${LASER_THERAPY_VIDEO_LABEL}`}
              aria-label={LASER_THERAPY_VIDEO_LABEL}
              className="w-full aspect-video"
            >
              <source src={resolveAsset(laserVideo1)} type="video/mp4" />
            </video>
          </div>
        </dialog>

        <dialog id="prp-modal" className="modal backdrop:bg-black/90">
          <div className="modal-box max-w-4xl w-full p-0 bg-transparent rounded-3xl overflow-hidden">
            <button className="btn btn-circle btn-ghost text-white absolute top-4 right-4 z-10" onClick={(e) => e.currentTarget.closest('dialog')?.close()}>
              ✕
            </button>
            <video
              controls
              autoPlay
              title={`Full length: ${PRP_HOME_VIDEO_LABEL}`}
              aria-label={PRP_HOME_VIDEO_LABEL}
              className="w-full aspect-video"
            >
              <source src={resolveAsset(prpVideo)} type="video/mp4" />
            </video>
          </div>
        </dialog>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              What <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from people who trusted me with their aesthetic journey in Lahore
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => (window.location.href = '/reviews')} variant="outline" size="lg">
              Read All Reviews
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 gradient-bg relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Your Journey to <span className="gradient-text">Radiant Beauty</span> Starts Here
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Book a personalized consultation for Botox, fillers, PRP, laser treatments, and more — tailored to your goals with safe, natural-looking results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open(
                    `https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'd like to book a consultation in Lahore`,
                    '_blank'
                  )
                }
                size="lg"
                variant="gradient"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button onClick={() => (window.location.href = '/contact')} variant="outline" size="lg">
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}