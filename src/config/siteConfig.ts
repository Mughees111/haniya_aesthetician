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
    // 'https://ghadia.qwpcorp.com/haniya.jpeg', // Direct URL daalo (image ka actual path), import ki jagah
    tagline: 'Advanced Aesthetic & Anti-Aging Treatments',
    description: 'Delivering safe, results-driven aesthetic procedures with 4+ years of hands-on experience. Specializing in Botox, dermal fillers, PRP therapy, laser treatments, and on-call services across Lahore.',
    
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
      image: 'https://ghadia.qwpcorp.com/haniya.jpeg', // Direct URL
      description: 'Certified aesthetician with 4+ years experience specializing in Botox, dermal fillers, PRP therapy, laser treatments, fat dissolver injections, liquid rhinoplasty, and advanced anti-aging procedures. Available for clinic collaborations and on-call services nationwide in Lahore.',
      url: 'https://ghadia.qwpcorp.com',
      telephone: '+923297941191',
      email: 'ddrghadia@gmail.com',
      knowsAbout: ['Botox', 'Dermal Fillers', 'PRP Therapy', 'Laser Treatments', 'Anti-Aging Treatments', 'Aesthetic Medicine'],
      areaServed: 'Lahore', // Agar specific cities hain to array mein daal do: ['Karachi', 'Lahore', 'Islamabad']
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
    defaultTitle: 'Ghadia Haider - Professional Aesthetician | Botox, Fillers & PRP in Lahore',
    defaultDescription: 'Certified professional aesthetician offering Botox, dermal fillers, PRP therapy, laser treatments, liquid rhinoplasty, and fat dissolver injections. 4+ years experience with safe, natural results. Available nationwide for clinics and on-call services.',
    siteUrl: 'https://ghadia.qwpcorp.com',
    keywords: 'professional aesthetician, botox Lahore, dermal fillers Lahore, prp therapy Lahore, laser treatment Lahore, lip fillers, anti aging treatments, botox near me, fillers near me, liquid rhinoplasty, fat dissolver injections, aesthetic treatments Lahore, beauty expert Lahore, skin rejuvenation',
  },
};

export type SiteConfig = typeof siteConfig;