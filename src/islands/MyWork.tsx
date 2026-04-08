import { motion } from 'framer-motion';
import { Palette, Play, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { resolveAsset } from '../utils/resolveAsset';

import beforeAfer1 from '../assets/beforeAfter/1.jpeg';
import beforeAfer2 from '../assets/beforeAfter/2.jpeg';
import beforeAfer3 from '../assets/beforeAfter/3.jpeg';
import beforeAfer4 from '../assets/beforeAfter/4.jpeg';
import beforeAfer5 from '../assets/beforeAfter/5.jpeg';
import beforeAfer7 from '../assets/beforeAfter/7.jpeg';
import laserVideo1 from '../assets/videos/laser1.mp4';
import prpVideo from '../assets/videos/prp1.mp4';
import facePRP from '../assets/videos/facePRP.mp4';
import PRP from '../assets/videos/PRP.mp4';

import m1 from '../assets/digitalmarketing/crystalAesthetic1.jpeg';
import m2 from '../assets/digitalmarketing/crystalaesthetic2.jpeg';
import m3 from '../assets/digitalmarketing/crystalaesthetic3.jpeg';
import m4 from '../assets/digitalmarketing/crystalaesthetic4.jpeg';
import m5 from '../assets/digitalmarketing/primarycare1.jpeg';
import m6 from '../assets/digitalmarketing/primarycare2.jpeg';
import m7 from '../assets/digitalmarketing/primarycare3.jpeg';
import m8 from '../assets/digitalmarketing/qp1.jpeg';

const galleryItems = [
  { media: laserVideo1, title: 'Carbon Laser Facial', type: 'video' },
  { media: beforeAfer1, title: 'Micro-Needling + PRP', type: 'image' },
  { media: facePRP, title: 'PRP Facial Treatment', type: 'video' },
  { media: beforeAfer2, title: 'Botox & Fillers', type: 'image' },
  { media: beforeAfer3, title: 'Non-Surgical Nose Reshaping', type: 'image' },
  { media: prpVideo, title: 'PRP Vampire Facial', type: 'video' },
  { media: beforeAfer4, title: 'Fibroblast Plasma', type: 'image' },
  { media: PRP, title: 'PRP', type: 'video' },
  { media: beforeAfer5, title: 'Lip Enhancement', type: 'image' },
  { media: beforeAfer7, title: 'Double Chin Reduction', type: 'image' },
];

const marketingGallery = [
  { media: m1, title: 'Instagram Post Design', type: 'image' },
  { media: m2, title: 'Reels Cover', type: 'image' },
  { media: m3, title: 'Brand Story Highlight', type: 'image' },
  { media: m4, title: 'Promotional Graphic', type: 'image' },
  { media: m5, title: 'Clinic Branding', type: 'image' },
  { media: m6, title: 'Service Promotion', type: 'image' },
  { media: m7, title: 'Social Media Ad', type: 'image' },
  { media: m8, title: 'Before/After Template', type: 'image' },
];

const BRAND = 'Ghadia Haider';

/** Rich alt for Google Images — aesthetic before/after stills */
function aestheticImageAlt(title: string) {
  return `${title} — before and after aesthetic photo, ${BRAND} aesthetician Lahore Pakistan. Ghadia aesthetic clinic, skin and injectable treatment results.`;
}

/** Rich alt — marketing portfolio stills */
function marketingImageAlt(title: string) {
  return `${title} — ${BRAND} digital marketing & social design for beauty clinics, Lahore Pakistan aesthetic branding.`;
}

/** Video labels for accessibility + video SEO */
function aestheticVideoLabel(title: string) {
  return `${title} — treatment video by ${BRAND}, Ghadia aesthetician Lahore Pakistan | professional aesthetic procedures`;
}

const MY_WORK_HERO_VIDEO_LABEL = `${BRAND} My Work portfolio — aesthetic transformations background video, PRP and laser treatments Lahore`;

export default function MyWork() {
  const [activeTab, setActiveTab] = useState<'aesthetic' | 'marketing'>('aesthetic');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentGallery = activeTab === 'aesthetic' ? galleryItems : marketingGallery;

  return (
    <>
      {/* Hero with Background Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          title={MY_WORK_HERO_VIDEO_LABEL}
          aria-label={MY_WORK_HERO_VIDEO_LABEL}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={resolveAsset(prpVideo)} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-transparent to-rose-900/40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Real <span className="gradient-text">Transformations</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-4">
                That Speak for Themselves
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Every treatment is performed with precision, care, and artistry.
              Watch and see the confidence I help my clients rediscover.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('aesthetic')}
                className={`flex items-center justify-center gap-3 px-8 py-5 rounded-full text-lg font-semibold transition-all ${activeTab === 'aesthetic'
                  ? 'bg-white text-primary-600 shadow-2xl'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
                  }`}
              >
                <Sparkles className="w-6 h-6" />
                Aesthetic Results
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('marketing')}
                className={`flex items-center justify-center gap-3 px-8 py-5 rounded-full text-lg font-semibold transition-all ${activeTab === 'marketing'
                  ? 'bg-white text-primary-600 shadow-2xl'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
                  }`}
              >
                <Palette className="w-6 h-6" />
                Marketing Designs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Responsive Grid */}
      <section className="py-20 sm:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {currentGallery.map((item, index) => {
              const isMarketing = activeTab === 'marketing';
              const imageAlt = isMarketing
                ? marketingImageAlt(item.title)
                : aestheticImageAlt(item.title);
              const videoLabel =
                item.type === 'video' ? aestheticVideoLabel(item.title) : '';

              return (
              <motion.div
                key={`${activeTab}-${index}-${item.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => {
                  if (item.type === 'video') {
                    const modal = document.getElementById(`video-modal-${index}`);
                    if (modal instanceof HTMLDialogElement) modal.showModal();
                  }
                }}
              >
                {item.type === 'video' ? (
                  <>
                    {/* Preview Video - Muted */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      title={videoLabel}
                      aria-label={videoLabel}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    >
                      <source src={resolveAsset(item.media)} type="video/mp4" />
                    </video>

                    {/* Play Icon on Hover/Tap */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={resolveAsset(item.media)}
                    alt={imageAlt}
                    title={`${item.title} — ${BRAND} | Ghadia aesthetician Lahore`}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                )}

                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                  <div className="text-white">
                    <h3 className="text-base sm:text-lg font-semibold">{item.title || 'Social Media Design'}</h3>
                    <p className="text-xs sm:text-sm opacity-90 mt-1">
                      {item.type === 'video' ? 'Tap to Watch Full' : 'Before & After'}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-28 relative overflow-hidden bg-gradient-to-br from-primary-50 via-rose-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              Ready for Your Own <span className="gradient-text">Glow-Up</span>?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed px-4">
              Let’s create your dream look together – naturally, safely, beautifully.
            </p>

            <motion.a
              href="https://wa.me/93221401833?text=Hi! I'd love to book a consultation and see more of your amazing work!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 text-xl font-semibold rounded-full bg-gradient-to-r from-primary-600 to-rose-600 text-white shadow-2xl hover:shadow-primary-400/50 transition-all"
            >
              Book Your Consultation
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Video Modals - Full Screen with Sound */}
      {galleryItems
        .filter(item => item.type === 'video')
        .map((item, index) => {
          const originalIndex = galleryItems.findIndex(g => g.media === item.media);
          return (
            <dialog key={originalIndex} id={`video-modal-${originalIndex}`} className="modal backdrop:bg-black/90">
              <div className="modal-box max-w-4xl w-full p-0 bg-black rounded-3xl overflow-hidden">
                <button
                  onClick={(e) => e.currentTarget.closest('dialog')?.close()}
                  className="btn btn-circle btn-ghost text-white text-3xl absolute top-4 right-4 z-10 hover:bg-white/20"
                >
                  ×
                </button>
                <video
                  controls
                  autoPlay
                  muted
                  title={`Full video: ${aestheticVideoLabel(item.title)}`}
                  aria-label={aestheticVideoLabel(item.title)}
                  className="w-full aspect-video">
                  <source src={resolveAsset(item.media)} type="video/mp4" />
                  Your browser does not support video.
                </video>
              </div>
            </dialog>
          );
        })}
    </>
  );
}