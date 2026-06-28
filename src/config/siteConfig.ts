import profileImg from './haniya.jpeg'; // Yeh rakh sakte ho components ke liye, lekin schema mein URL use karo

export const siteConfig = {
  personal: {
    name: 'Ghadia Haider',
    title: 'Professional Aesthetician',
    experience: '4+ years',
    phone: '+923297941191',
    whatsapp: '+923297941191',
    email: 'ddrghadia@gmail.com',
    location: 'Lahore (Available Nationwide for Clinic Collaborations & On-Call Services)', // Yahan apna city add kar do e.g., 'Karachi, Lahore & Islamabad'
    image: profileImg,
    // 'https://ghadia.vercel.app/haniya.jpeg', // Direct URL daalo (image ka actual path), import ki jagah
    tagline: 'Precision Aesthetics · Natural Results · Lahore',
    description:
      'Ghadia Haider is a Lahore-based professional aesthetician with 4+ years of hands-on experience in Botox, dermal fillers, PRP, laser rejuvenation, and advanced non-surgical treatments. I work with private clients and clinics — combining facial mapping, medical-grade hygiene, and honest consultation so results look refined, not overdone.',
    
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
  business: {
    name: 'Ghadia Haider - Professional Aesthetician',
    type: 'Aesthetic Medicine',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person', // Better for freelance/mobile aesthetician (ProfessionalService deprecated hai)
      name: 'Ghadia Haider',
      jobTitle: 'Professional Aesthetician',
      image: 'https://ghadia.vercel.app/haniya.jpeg', // Direct URL
      description:
        'Professional aesthetician in Lahore with 4+ years experience in Botox, dermal fillers, PRP therapy, laser treatments, liquid rhinoplasty, fat dissolver, and skin rejuvenation. Available for private consultations, clinic collaborations, and on-call aesthetic services across Pakistan.',
      url: 'https://ghadia.vercel.app',
      telephone: '+923297941191',
      email: 'ddrghadia@gmail.com',
      knowsAbout: [
        'Botox',
        'Dermal Fillers',
        'PRP Therapy',
        'Laser Skin Rejuvenation',
        'Liquid Rhinoplasty',
        'Anti-Aging Treatments',
        'Non-Surgical Aesthetics',
        'Clinic On-Call Aesthetic Services',
      ],
      areaServed: ['Lahore', 'DHA Lahore', 'Gulberg', 'Johar Town', 'Model Town', 'Bahria Town'],
      priceRange: '$$',
    },
  },
  colors: {
    primary: {
      50: '#F4F0FB',
      100: '#E6DCF6',
      200: '#D0B9EE',
      300: '#B996E5',
      400: '#9E6FD9',
      500: '#7C4CCB',
      600: '#5A31AE',
      700: '#3A1B75',
      800: '#2E155E',
      900: '#1F0E3F',
    },
    secondary: {
      50: '#FBF8FD',
      100: '#F3ECF9',
      200: '#E6DCF6',
      300: '#D7C6EF',
      400: '#C6A7E2',
      500: '#B28BD6',
      600: '#9A6BC6',
      700: '#7C4FA8',
      800: '#5E3A7D',
      900: '#3F2654',
    },
    accent: '#D6B4E8',
    background: '#FFFCFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      light: '#6B7280',
      inverted: '#FFFFFF',
    },
  },
  seo: {
    titleTemplate: '%s | Ghadia Haider - Professional Aesthetician in Lahore',
    defaultTitle:
      'Ghadia Haider | Professional Aesthetician Lahore — Botox, Fillers, PRP & Laser',
    defaultDescription:
      'Book Ghadia Haider — Lahore aesthetician for Botox, dermal fillers, PRP, laser, liquid rhinoplasty & skin rejuvenation. 4+ years experience, natural results, clinic collaborations & on-call services. DHA, Gulberg & across Lahore.',
    siteUrl: 'https://ghadia.vercel.app',
    keywords:
      'Ghadia Haider aesthetician, Ghadia aesthetician Lahore, professional aesthetician Lahore, best aesthetician Lahore, aesthetician near me Lahore, on-call aesthetician Lahore, at-home aesthetic treatments Lahore, home visit aesthetician Pakistan, mobile aesthetician Lahore, IV drip at home Lahore, injectables at home Lahore, certified aesthetician Pakistan, medical aesthetician Lahore, freelance aesthetician Lahore, on-call aesthetician Pakistan, clinic collaboration aesthetician, injectable specialist Lahore, Botox Lahore, Botox price Lahore, Botox injections DHA, forehead Botox Lahore, crow\'s feet Botox, dermal fillers Lahore, lip fillers Lahore, cheek fillers Lahore, jawline filler Lahore, under eye filler Lahore, PRP therapy Lahore, PRP facial Lahore, vampire facial Lahore, hair PRP Lahore, laser skin rejuvenation Lahore, laser treatment Lahore, pigmentation laser Lahore, melasma treatment Lahore, acne scar laser Lahore, skin tightening Lahore, non-surgical facelift Lahore, anti-aging treatments Lahore, liquid rhinoplasty Lahore, non-surgical nose job Lahore, fat dissolver Lahore, double chin injection Lahore, fibroplasty Lahore, plasma pen Lahore, HydraFacial Lahore, hydrafacial Lahore, skin whitening injection Lahore, glutathione injection Lahore, skin tag removal Lahore, mole removal Lahore, face reshaping Lahore, facial contouring Lahore, bridal skin treatment Lahore, wedding glow facial Lahore, aesthetic clinic Gulberg, beauty clinic DHA Lahore, cosmetic treatments Johar Town, med spa Lahore, skin rejuvenation Lahore, medical aesthetics Pakistan, aesthetic portfolio Lahore, before after Botox Lahore',
  },
};

export type SiteConfig = typeof siteConfig;