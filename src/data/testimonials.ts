export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    service: 'Botox Treatment',
    rating: 5,
    review: 'Ghadia is extremely professional and skilled. My Botox results look so natural, and she made me feel comfortable throughout the entire process. Highly recommend her services!'
  },
  {
    id: '2',
    name: 'Fatima Khan',
    service: 'Dermal Fillers',
    rating: 5,
    review: 'I was nervous about getting fillers, but Ghadia explained everything clearly and delivered exactly what I wanted. The results are beautiful and natural. She truly has an artistic eye!'
  },
  {
    id: '3',
    name: 'Aisha Rahman',
    service: 'PRP Therapy',
    rating: 5,
    review: 'After a few PRP sessions for my hair, I noticed significant improvement in hair thickness and growth. Ghadia is knowledgeable, professional, and truly cares about her clients results.'
  },
  {
    id: '4',
    name: 'Zara Ali',
    service: 'Laser Treatment',
    rating: 5,
    review: 'The laser hair removal treatment was so effective! Ghadia made sure I was comfortable and explained each step. Her attention to detail and hygiene standards are exceptional.'
  },
  {
    id: '5',
    name: 'Mariam Hassan',
    service: 'Liquid Rhinoplasty',
    rating: 5,
    review: 'I wanted a subtle change to my nose shape without surgery. Ghadia delivered perfect results! She understood exactly what I wanted and the outcome is better than I imagined.'
  },
  {
    id: '6',
    name: 'Nadia Malik',
    service: 'Hydia Facial',
    rating: 5,
    review: 'My skin has never looked better! The Hydia Facial left my skin glowing and hydrated. Ghadia is not only skilled but also provides excellent skincare advice. Will definitely be back!'
  },
  {
    id: '7',
    name: 'Hira Siddiqui',
    service: 'Fat Dissolver',
    rating: 5,
    review: 'The fat dissolver treatment for my double chin worked wonderfully. Ghadia was honest about expectations and the results exceeded them. Professional service from start to finish.'
  },
  {
    id: '8',
    name: 'Amina Farooq',
    service: 'Skin Tightening',
    rating: 5,
    review: 'I am amazed by the skin tightening results! My face looks lifted and more youthful. Ghadia is a true expert in her field and I trust her completely with my aesthetic treatments.'
  }
];
