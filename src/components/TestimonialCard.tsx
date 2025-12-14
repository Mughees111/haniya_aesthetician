import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  service: string;
  rating: number;
  review: string;
}

export default function TestimonialCard({ name, service, rating, review }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">"{review}"</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-primary-600">{service}</p>
      </div>
    </motion.div>
  );
}
