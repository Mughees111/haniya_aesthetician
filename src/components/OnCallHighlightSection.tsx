import { motion } from 'framer-motion';
import { Home, Droplets, Syringe, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { onCallHighlight } from '../data/onCallTreatments';

const icons = [Syringe, Droplets, Sparkles, ShieldCheck];

function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.personal.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
}

export default function OnCallHighlightSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Rich backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-[#2a1455]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-glow-drift" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-400/15 rounded-full blur-3xl animate-glow-drift-reverse" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(26,14,63,0.4)_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-rose-100 text-sm font-medium mb-6 backdrop-blur-sm">
              <Home className="w-4 h-4" />
              {onCallHighlight.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {onCallHighlight.title}
            </h2>
            <p className="text-lg sm:text-xl text-primary-100/90 max-w-3xl mx-auto leading-relaxed">
              {onCallHighlight.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {onCallHighlight.treatments.map((item, index) => {
              const Icon = icons[index] ?? Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-rose-400 flex items-center justify-center mb-4 shadow-glow-soft">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-100/80 leading-relaxed">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-primary-200/70 max-w-2xl mx-auto mb-10"
          >
            {onCallHighlight.note}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={whatsappUrl(onCallHighlight.whatsappOnCall)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glow-button inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-rose-400 via-primary-400 to-primary-500 text-white"
            >
              <Sparkles className="w-5 h-5" />
              {onCallHighlight.ctaPrimary}
            </motion.a>
            <motion.a
              href={whatsappUrl(onCallHighlight.whatsappQualify)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              {onCallHighlight.ctaSecondary}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
