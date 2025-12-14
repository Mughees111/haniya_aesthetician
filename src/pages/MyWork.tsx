import { motion } from 'framer-motion';
import { Image, Video, Palette } from 'lucide-react';
import SEO from '../components/SEO';
import { useState } from 'react';

export default function MyWork() {
  const [activeTab, setActiveTab] = useState<'aesthetic' | 'marketing'>('aesthetic');

  const tabs = [
    { id: 'aesthetic' as const, label: 'Aesthetic Work', icon: Image },
    { id: 'marketing' as const, label: 'Marketing Designs', icon: Palette }
  ];

  const aestheticWork = [
    { id: 1, title: 'Botox Treatment', category: 'Before/After', type: 'image' },
    { id: 2, title: 'Dermal Fillers', category: 'Before/After', type: 'image' },
    { id: 3, title: 'Lip Enhancement', category: 'Before/After', type: 'image' },
    { id: 4, title: 'PRP Therapy Results', category: 'Before/After', type: 'image' },
    { id: 5, title: 'Liquid Rhinoplasty', category: 'Before/After', type: 'image' },
    { id: 6, title: 'Treatment Procedure', category: 'Video', type: 'video' },
    { id: 7, title: 'Skin Tightening', category: 'Before/After', type: 'image' },
    { id: 8, title: 'Face Reshaping', category: 'Before/After', type: 'image' },
    { id: 9, title: 'Laser Treatment', category: 'Before/After', type: 'image' }
  ];

  const marketingWork = [
    { id: 1, title: 'Instagram Post Design', category: 'Social Media' },
    { id: 2, title: 'Facebook Ad Creative', category: 'Advertising' },
    { id: 3, title: 'Promotional Reel', category: 'Video Content' },
    { id: 4, title: 'Brand Story Highlight', category: 'Social Media' },
    { id: 5, title: 'Service Promotion', category: 'Advertising' },
    { id: 6, title: 'Educational Content', category: 'Social Media' },
    { id: 7, title: 'Campaign Design', category: 'Advertising' },
    { id: 8, title: 'Testimonial Post', category: 'Social Media' },
    { id: 9, title: 'Before/After Showcase', category: 'Content Creation' }
  ];

  const currentWork = activeTab === 'aesthetic' ? aestheticWork : marketingWork;

  return (
    <>
      <SEO
        title="My Work"
        description="View my portfolio of aesthetic treatments and digital marketing projects. Real results, professional work, and creative designs for beauty businesses."
        keywords="aesthetic portfolio, treatment results, before after, beauty marketing portfolio, design work"
      />

      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from aesthetic treatments and creative digital marketing projects
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-rose-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {currentWork.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-100 to-rose-100 cursor-pointer"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    {activeTab === 'aesthetic' && item.type === 'video' ? (
                      <Video className="w-16 h-16 text-primary-400 mb-4" />
                    ) : (
                      <Image className="w-16 h-16 text-primary-400 mb-4" />
                    )}
                    <div className="text-2xl font-bold text-primary-600/50 mb-2">
                      {item.title}
                    </div>
                    <div className="text-sm text-primary-500/70 font-medium">
                      {item.category}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                    <div className="text-white text-center">
                      <div className="font-semibold text-lg mb-1">{item.title}</div>
                      <div className="text-sm text-white/80">{item.category}</div>
                      <div className="mt-3 text-xs text-white/70">
                        Click to view full image
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Want to See <span className="gradient-text">More</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              These are placeholder images. Connect with me to see my complete portfolio of aesthetic treatments and digital marketing projects
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://wa.me/93221401833?text=Hi, I would like to see your complete portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-rose-500 text-white hover:shadow-lg hover:shadow-primary-300/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
