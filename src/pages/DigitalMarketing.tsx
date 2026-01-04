import { motion } from 'framer-motion';
import { TrendingUp, Palette, Video, Target, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { siteConfig } from '../config/siteConfig';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function DigitalMarketing() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Target,
      title: 'Meta (Facebook & Instagram) Ads',
      description: 'Strategic ad campaigns designed to attract and convert your ideal clients. Targeted advertising that delivers measurable results for beauty and aesthetic businesses.',
      features: [
        'Audience research and targeting',
        'Ad copy and creative design',
        'Campaign management and optimization',
        'Performance tracking and reporting'
      ]
    },
    {
      icon: Palette,
      title: 'Canva Post Designing',
      description: 'Eye-catching, professionally designed social media posts that capture attention and build your brand identity in the beauty industry.',
      features: [
        'Custom post designs',
        'Brand-consistent templates',
        'Promotional graphics',
        'Story and highlight designs'
      ]
    },
    {
      icon: Video,
      title: 'Reels & Video Editing',
      description: 'Engaging video content optimized for social media platforms. From treatment showcases to educational content that builds trust with your audience.',
      features: [
        'Professional video editing',
        'Trendy reel creation',
        'Before/after showcases',
        'Educational content videos'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Aesthetic Content Strategy',
      description: 'Comprehensive content planning that builds authority, attracts clients, and grows your aesthetic practice through strategic social media presence.',
      features: [
        'Content calendar planning',
        'Hashtag research and strategy',
        'Engagement optimization',
        'Brand voice development'
      ]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <SEO
        title="Digital Marketing Services"
        description="Professional digital marketing services for beauty and aesthetic clinics. Meta Ads, social media design, video editing, and content strategy to grow your practice."
        keywords="digital marketing, beauty marketing, aesthetic clinic marketing, Meta Ads, Instagram marketing, social media design"
      />

      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital <span className="gradient-text">Marketing</span> Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized digital marketing for beauty clinics, salons, and aesthetic brands
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Grow Your Beauty Business Online
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition to aesthetics, I provide digital marketing services specifically designed for beauty clinics, salons, and personal brands. My goal is to create visually appealing, conversion-focused content that builds trust and attracts clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a deep understanding of both the beauty industry and digital marketing, I help aesthetic professionals establish a strong online presence, reach their target audience, and convert followers into loyal clients.
            </p>
          </motion.div>
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
              Services <span className="gradient-text">Offered</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored for the beauty industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why Choose My <span className="gradient-text">Marketing Services</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold gradient-text">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Industry Expertise</h3>
                <p className="text-gray-700">
                  Deep understanding of the beauty and aesthetic industry from both practitioner and marketing perspectives
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold gradient-text">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Visual Excellence</h3>
                <p className="text-gray-700">
                  Creating aesthetically pleasing content that resonates with beauty-conscious audiences
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold gradient-text">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Results-Focused</h3>
                <p className="text-gray-700">
                  Strategies designed to attract clients, build trust, and grow your aesthetic practice
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Grow</span> Your Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how digital marketing can help you attract more clients and build your brand
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate('/contact')} size="lg">
                Get Started
              </Button>
              <Button onClick={() => navigate('/my-work')} variant="outline" size="lg">
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
