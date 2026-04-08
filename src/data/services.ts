import {
  Sparkles,
  Zap,
  Syringe,
  Droplets,
  Wind,
  Scissors,
  Activity,
  RefreshCw,
  Heart,
  Sun,
  Shield,
  Shapes
} from 'lucide-react';
import botox from '../assets/botox.jpeg';
import face_prp from '../assets/face_prp.jpeg';
import fat_dissolver from '../assets/fat_dissolver.jpeg';
import fibroplastybotox from '../assets/fibroplasty.jpeg';
import filler from '../assets/filler.jpeg';
import hair_prp from '../assets/hair_prp.jpeg';
import hydra_facial from '../assets/hydra_facial.jpeg';
import laser from '../assets/laser.jpeg';
import liquid_rhinoplasty from '../assets/liquid_rhinoplasty.jpeg';
import skin_tightning from '../assets/skin_tightning.jpeg';
import whitening_injection from '../assets/whitening_injection.jpeg';
import skinTag from '../assets/skinTag.jpeg';
import faceReshaping from '../assets/faceReshaping.jpeg';

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: any;
  image: string | { src: string };
  howToSteps?: string[];
  faqs?: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };

}

export const services: Service[] = [
  {
    id: '1',
    title: 'Botox Treatment',
    slug: 'botox',
    shortDescription: 'Non-surgical treatment for wrinkles and fine lines, delivering natural-looking results.',
    fullDescription: `Botox is a non-surgical aesthetic treatment used to reduce the appearance of fine lines and wrinkles by relaxing targeted facial muscles. I perform Botox procedures with precise facial mapping to ensure natural expressions, symmetry, and long-lasting results.

Each treatment begins with a detailed consultation to assess muscle movement, skin condition, and desired outcomes. Only high-quality products and sterile techniques are used to maintain maximum safety and effectiveness.

Botox can be performed in clinical settings and selected cases as an on-call service, following professional standards.`,
    benefits: [
      'Reduces wrinkles & fine lines',
      'Non-surgical & quick procedure',
      'Natural-looking results',
      'Minimal downtime',
      'Long-lasting effects'
    ],
    icon: Sparkles,
    image: botox,
    seo: {
      title: 'Botox Treatment',
      description: 'Expert Botox treatments for wrinkles, fine lines, and facial rejuvenation performed by a certified aesthetician with 4+ years experience.',
      keywords: 'botox, wrinkle treatment, anti-aging, facial rejuvenation, aesthetic treatment'
    },
    howToSteps: [
      'Consultation and facial assessment',
      'Skin cleansing and marking',
      'Precise Botox injections',
      'Post-treatment care instructions',
      'Follow-up for optimal results'
    ],
    faqs: [
      { question: 'How long does Botox last?', answer: 'Results typically last 3-6 months.' },
      { question: 'Is Botox painful?', answer: 'Minimal discomfort with fine needles and optional numbing.' },
      { question: 'When do results appear?', answer: 'Visible in 3-7 days, full effect in 2 weeks.' }
    ]

  },
  {
    id: '2',
    title: 'Dermal Fillers',
    slug: 'dermal-fillers',
    shortDescription: 'Restore volume, enhance contours, and achieve natural facial harmony.',
    fullDescription: `Dermal fillers are injectable treatments designed to restore lost volume, smooth wrinkles, and enhance facial contours. I specialize in creating natural, balanced results that complement your unique facial structure.

Using premium hyaluronic acid-based fillers, I carefully assess facial anatomy to achieve symmetry and harmony. Common treatment areas include cheeks, lips, nasolabial folds, and under-eye hollows.

Every procedure is performed with precision, prioritizing client safety, comfort, and satisfaction. Results are immediate and can last from 6 to 18 months depending on the product and treatment area.`,
    benefits: [
      'Restores facial volume',
      'Enhances natural features',
      'Immediate visible results',
      'Non-surgical procedure',
      'Customized to facial structure'
    ],
    icon: Droplets,
    image: filler,
    seo: {
      title: 'Dermal Fillers',
      description: 'Professional dermal filler treatments to restore volume and enhance facial contours with natural-looking results.',
      keywords: 'dermal fillers, facial fillers, lip fillers, cheek augmentation, aesthetic injections'
    },
    howToSteps: [
      'Facial analysis and consultation',
      'Skin preparation and numbing',
      'Strategic filler placement',
      'Gentle molding for symmetry',
      'Aftercare guidance'
    ],
    faqs: [
      { question: 'How long do fillers last?', answer: '6-18 months depending on area and product.' },
      { question: 'Is there downtime?', answer: 'Minimal – possible mild swelling for 1-2 days.' },
      { question: 'Are fillers reversible?', answer: 'Yes, hyaluronic acid fillers can be dissolved if needed.' }
    ]
  },
  {
    id: '3',
    title: 'Liquid Rhinoplasty',
    slug: 'liquid-rhinoplasty',
    shortDescription: 'Non-surgical nose reshaping for improved symmetry and balance.',
    fullDescription: `Liquid rhinoplasty is a non-surgical nose reshaping procedure using dermal fillers to correct imperfections, improve symmetry, and enhance nasal contours without surgery.

This advanced technique allows for precise adjustments to the nose bridge, tip, and profile. The procedure is ideal for clients seeking subtle improvements without the downtime and risks associated with surgical rhinoplasty.

I perform comprehensive facial analysis before treatment to ensure the results complement overall facial harmony. The procedure takes approximately 30 minutes with immediate results that can last 12-18 months.`,
    benefits: [
      'Non-surgical nose reshaping',
      'No downtime required',
      'Immediate results',
      'Reversible procedure',
      'Enhances facial symmetry'
    ],
    icon: Wind,
    image: liquid_rhinoplasty,
    seo: {
      title: 'Liquid Rhinoplasty',
      description: 'Non-surgical nose reshaping with dermal fillers for improved facial symmetry and balance.',
      keywords: 'liquid rhinoplasty, non-surgical nose job, nose fillers, nose reshaping, aesthetic nose treatment'
    },
    howToSteps: [
      'Nasal and facial profile assessment',
      'Discussion of goals',
      'Topical numbing',
      'Precise filler injection',
      'Symmetry adjustment',
      'Immediate result review'
    ],
    faqs: [
      { question: 'How long does it last?', answer: '12-18 months.' },
      { question: 'Is it painful?', answer: 'Minimal discomfort with numbing.' },
      { question: 'Can it make the nose smaller?', answer: 'Creates illusion of refinement through better proportions.' }
    ]
  },
  {
    id: '4',
    title: 'Laser Treatments',
    slug: 'laser-treatments',
    shortDescription: 'Advanced laser technology for skin rejuvenation, hair removal, and pigmentation.',
    fullDescription: `I offer a comprehensive range of laser treatments designed to address various skin concerns including hair removal, pigmentation, acne scars, skin rejuvenation, and vascular lesions.

Using state-of-the-art laser technology, each treatment is customized based on skin type, concern, and desired outcome. Laser treatments are safe, effective, and provide long-lasting results with minimal downtime.

All procedures follow strict safety protocols with proper skin assessment and post-treatment care guidance. Multiple sessions may be required for optimal results depending on the treatment type.`,
    benefits: [
      'Treats multiple skin concerns',
      'Safe for various skin types',
      'Long-lasting results',
      'Minimal downtime',
      'Advanced technology'
    ],
    icon: Zap,
    image: laser,
    seo: {
      title: 'Laser Treatments',
      description: 'Professional laser treatments for hair removal, skin rejuvenation, and pigmentation correction.',
      keywords: 'laser treatment, laser hair removal, skin rejuvenation, pigmentation treatment, laser therapy'
    },
    howToSteps: [
      'Skin type and concern assessment',
      'Protective eyewear placement',
      'Laser application in targeted areas',
      'Cooling and soothing post-treatment',
      'Aftercare instructions'
    ],
    faqs: [
      { question: 'How many sessions needed?', answer: 'Varies by concern – usually 4-8 sessions.' },
      { question: 'Is laser safe?', answer: 'Yes, when performed by trained professionals.' },
      { question: 'Any downtime?', answer: 'Minimal redness for a few hours.' }
    ]
  },
  {
    id: '5',
    title: 'PRP Therapy',
    slug: 'prp-therapy',
    shortDescription: 'Natural regenerative treatment for hair restoration and facial rejuvenation.',
    fullDescription: `Platelet-Rich Plasma (PRP) therapy is a natural regenerative treatment that uses your own blood to stimulate collagen production, improve skin texture, and promote hair growth.

For facial rejuvenation, PRP improves skin tone, reduces fine lines, and enhances overall skin quality. For hair restoration, it strengthens hair follicles and promotes new growth in areas of thinning.

The procedure involves drawing a small amount of blood, processing it to concentrate the platelets, and injecting it into targeted areas. Results develop gradually over several weeks with optimal outcomes after a series of treatments.`,
    benefits: [
      'Natural regenerative therapy',
      'Stimulates collagen production',
      'Promotes hair growth',
      'Improves skin texture',
      'Minimal side effects'
    ],
    icon: Activity,
    image: hair_prp,
    seo: {
      title: 'PRP Therapy (Hair & Face)',
      description: 'Natural PRP therapy for hair restoration and facial rejuvenation using your body\'s own healing properties.',
      keywords: 'PRP therapy, platelet rich plasma, hair restoration, facial rejuvenation, natural treatment'
    },
    howToSteps: [
      'Blood draw',
      'Centrifugation to isolate PRP',
      'Skin/scalp preparation',
      'PRP injection or microneedling',
      'Post-care guidance'
    ],
    faqs: [
      { question: 'How many sessions?', answer: '3-4 sessions recommended.' },
      { question: 'Is PRP painful?', answer: 'Mild discomfort with numbing.' },
      { question: 'When do results show?', answer: 'Skin: 3-4 weeks; Hair: 3-6 months.' }
    ]
  },
  {
    id: '6',
    title: 'Fat Dissolver Injections',
    slug: 'fat-dissolver',
    shortDescription: 'Non-surgical fat reduction for targeted areas like double chin and jowls.',
    fullDescription: `Fat dissolver injections are non-surgical treatments designed to reduce stubborn fat deposits in targeted areas such as the double chin, jowls, and other small pockets of fat.

The treatment uses a synthetic form of deoxycholic acid, which breaks down fat cells naturally processed and eliminated by the body. This results in a more contoured and defined appearance.

Treatment sessions typically last 15-20 minutes with minimal discomfort. Multiple sessions may be required depending on the treatment area and desired results. Results are gradual and long-lasting when combined with a healthy lifestyle.`,
    benefits: [
      'Non-surgical fat reduction',
      'Targets stubborn areas',
      'Permanent fat cell removal',
      'Natural-looking contours',
      'Minimal downtime'
    ],
    icon: Scissors,
    image: fat_dissolver,
    seo: {
      title: 'Fat Dissolver Injections',
      description: 'Non-surgical fat reduction treatments to eliminate stubborn fat and enhance facial contours.',
      keywords: 'fat dissolver, double chin treatment, fat reduction, non-surgical liposuction, contouring'
    },
    howToSteps: [
      'Area marking and assessment',
      'Local numbing',
      'Precise injections',
      'Post-treatment massage',
      'Aftercare advice'
    ],
    faqs: [
      { question: 'How many sessions?', answer: '2-4 sessions usually.' },
      { question: 'Is it permanent?', answer: 'Yes, destroyed fat cells do not return.' },
      { question: 'Any swelling?', answer: 'Temporary swelling for a few days.' }
    ]
  },
  {
    id: '7',
    title: 'Skin Tightening',
    slug: 'skin-tightening',
    shortDescription: 'Advanced treatments to firm and lift sagging skin for a youthful appearance.',
    fullDescription: `Skin tightening treatments use advanced technology to stimulate collagen and elastin production, resulting in firmer, tighter, and more youthful-looking skin.

These non-invasive procedures are ideal for addressing mild to moderate skin laxity on the face, neck, and body. The treatments work by heating deeper layers of skin, triggering the body's natural healing response and collagen remodeling.

Results develop gradually over several months as new collagen forms. Multiple sessions are typically recommended for optimal results. The procedures are comfortable with no downtime, making them perfect for busy lifestyles.`,
    benefits: [
      'Non-surgical skin firming',
      'Stimulates collagen production',
      'No downtime required',
      'Natural-looking results',
      'Long-lasting effects'
    ],
    icon: RefreshCw,
    image: skin_tightning,
    seo: {
      title: 'Skin Tightening',
      description: 'Advanced non-surgical skin tightening treatments to firm and lift sagging skin naturally.',
      keywords: 'skin tightening, skin firming, non-surgical facelift, collagen stimulation, anti-aging'
    },
    howToSteps: [
      'Skin cleansing',
      'Device application with controlled energy',
      'Collagen stimulation phase',
      'Cooling and soothing',
      'Post-treatment care'
    ],
    faqs: [
      { question: 'How many sessions?', answer: '3-6 sessions for best results.' },
      { question: 'Is there downtime?', answer: 'None – resume activities immediately.' },
      { question: 'When do results appear?', answer: 'Gradual over 3-6 months.' }
    ]
  },
  {
    id: '8',
    title: 'Fibroplasty',
    slug: 'fibroplasty',
    shortDescription: 'Non-surgical procedure to tighten and lift skin using plasma technology.',
    fullDescription: `Fibroplasty, also known as plasma pen treatment, is a revolutionary non-surgical procedure that uses plasma energy to tighten, lift, and rejuvenate the skin.

This treatment is particularly effective for eyelid lifting, wrinkle reduction, and skin tightening around delicate areas. The plasma pen creates tiny controlled injuries that stimulate natural healing and collagen production.

The procedure is precise and targeted, making it ideal for areas where surgical intervention would be complex. Results are long-lasting with proper aftercare. Some initial downtime is expected as the skin heals and regenerates.`,
    benefits: [
      'Non-surgical skin tightening',
      'Effective for delicate areas',
      'Long-lasting results',
      'Stimulates collagen',
      'Precise treatment'
    ],
    icon: Zap,
    image: fibroplastybotox,
    seo: {
      title: 'Fibroplasty',
      description: 'Non-surgical fibroplasty treatment using plasma technology for skin tightening and lifting.',
      keywords: 'fibroplasty, plasma pen, skin tightening, eyelid lift, non-surgical lift'
    },
    howToSteps: [
      'Skin preparation and numbing',
      'Plasma pen application in grid pattern',
      'Controlled micro-injuries',
      'Healing stimulation',
      'Aftercare protocol'
    ],
    faqs: [
      { question: 'How long is recovery?', answer: '5-7 days of small crusts.' },
      { question: 'Is it painful?', answer: 'Topical numbing used for comfort.' },
      { question: 'How long do results last?', answer: 'Up to 3 years with good skincare.' }
    ]
  },
  {
    id: '9',
    title: 'Whitening Injections',
    slug: 'whitening-injections',
    shortDescription: 'Safe skin brightening treatments for even skin tone and radiant complexion.',
    fullDescription: `Whitening injections are advanced treatments designed to brighten skin tone, reduce pigmentation, and achieve a more radiant and even complexion.

These treatments use powerful antioxidants, primarily glutathione, which work at the cellular level to reduce melanin production and promote overall skin health. The treatment is administered through a series of IV or intramuscular injections.

Results develop gradually over several weeks with optimal outcomes achieved through a complete treatment course. Regular maintenance sessions help sustain the brightening effects. All treatments are performed following strict medical protocols for safety.`,
    benefits: [
      'Brightens overall skin tone',
      'Reduces pigmentation',
      'Powerful antioxidant effects',
      'Promotes skin health',
      'Gradual natural results'
    ],
    icon: Sun,
    image: whitening_injection,
    seo: {
      title: 'Whitening Injections',
      description: 'Professional skin whitening injections for brighter, more even skin tone and radiant complexion.',
      keywords: 'whitening injections, glutathione, skin brightening, pigmentation treatment, skin whitening'
    },
    howToSteps: [
      'Consultation and dosage planning',
      'IV or IM administration',
      'Series of sessions',
      'Maintenance schedule',
      'Skincare support'
    ],
    faqs: [
      { question: 'How many sessions needed?', answer: '10-15 initial sessions.' },
      { question: 'Are results permanent?', answer: 'Maintenance required for sustained effect.' },
      { question: 'Is it safe?', answer: 'Yes, when administered professionally.' }
    ]
  },
  {
    id: '10',
    title: 'Hydia Facial',
    slug: 'hydia-facial',
    shortDescription: 'Deep hydration facial treatment for glowing, refreshed skin.',
    fullDescription: `The Hydia Facial is a premium hydration treatment that combines deep cleansing, exfoliation, extraction, and intense hydration to reveal glowing, healthy skin.

This multi-step treatment uses advanced technology and medical-grade serums to address various skin concerns including dehydration, dullness, fine lines, and uneven texture. The treatment is customized based on individual skin needs and concerns.

Results are immediate with plumper, more radiant skin after just one session. Regular treatments help maintain optimal skin health and address aging concerns. The procedure is gentle, relaxing, and suitable for all skin types with no downtime.`,
    benefits: [
      'Deep skin hydration',
      'Immediate glowing results',
      'Suitable for all skin types',
      'No downtime required',
      'Addresses multiple concerns'
    ],
    icon: Droplets,
    image: hydra_facial,
    seo: {
      title: 'Hydia Facial',
      description: 'Luxury hydration facial treatment for deep cleansing and glowing, refreshed skin.',
      keywords: 'hydia facial, hydrafacial, hydration treatment, facial treatment, skin rejuvenation'
    },
    howToSteps: [
      'Deep cleansing',
      'Gentle exfoliation',
      'Extraction',
      'Hydration infusion',
      'Protection and glow finish'
    ],
    faqs: [
      { question: 'How often should I get it?', answer: 'Monthly for maintenance.' },
      { question: 'Is there downtime?', answer: 'None – instant glow.' },
      { question: 'Suitable for sensitive skin?', answer: 'Yes, fully customizable.' }
    ]
  },
  {
    id: '11',
    title: 'Skin Tag & Mole Removal',
    slug: 'skin-tag-mole-removal',
    shortDescription: 'Safe removal of skin tags and moles for smooth, clear skin.',
    fullDescription: `Professional skin tag and mole removal services using safe, effective techniques for clear, smooth skin. Each removal is performed with precision and care to minimize scarring.

Before any removal, a thorough assessment is conducted to determine the appropriate removal method. Common techniques include electrocautery, cryotherapy, or surgical excision depending on the size and location.

All procedures follow strict hygiene and safety protocols. Post-treatment care instructions are provided to ensure optimal healing. Most removals are quick with minimal discomfort and fast recovery.`,
    benefits: [
      'Safe professional removal',
      'Minimal scarring',
      'Quick procedure',
      'Fast recovery',
      'Clear smooth skin'
    ],
    icon: Shield,
    image: skinTag,
    seo: {
      title: 'Skin Tag & Mole Removal',
      description: 'Professional and safe removal of skin tags and moles with minimal scarring.',
      keywords: 'skin tag removal, mole removal, skin lesion removal, aesthetic dermatology'
    },
    howToSteps: [
      'Assessment of lesion',
      'Local anesthetic',
      'Precise removal technique',
      'Wound care',
      'Healing follow-up'
    ],
    faqs: [
      { question: 'Is removal painful?', answer: 'Minimal with local anesthetic.' },
      { question: 'Will it leave a scar?', answer: 'Minimal or none in most cases.' },
      { question: 'How long to heal?', answer: '5-10 days.' }
    ]
  },
  {
    id: '12',
    title: 'Face Reshaping',
    slug: 'face-reshaping',
    shortDescription: 'Non-surgical facial contouring for enhanced definition and symmetry.',
    fullDescription: `Face reshaping is a comprehensive non-surgical approach to facial contouring that combines various aesthetic techniques to enhance facial definition, symmetry, and overall harmony.

This treatment may include strategic use of dermal fillers, muscle relaxants, and other advanced techniques to sculpt the face, define the jawline, enhance cheekbones, and create balanced proportions.

Each treatment plan is highly customized based on facial analysis, bone structure, and aesthetic goals. The approach is artistic and technical, ensuring results that look natural and complement your unique features. Results are immediate with continued improvement as treatments settle.`,
    benefits: [
      'Customized facial contouring',
      'Enhanced facial symmetry',
      'Non-surgical approach',
      'Natural-looking results',
      'Comprehensive treatment'
    ],
    icon: Shapes,
    image: faceReshaping,
    seo: {
      title: 'Face Reshaping',
      description: 'Non-surgical facial contouring and reshaping for enhanced definition, symmetry, and facial harmony.',
      keywords: 'face reshaping, facial contouring, jawline definition, non-surgical facelift, facial sculpting'
    },
    howToSteps: [
      'Full facial analysis',
      'Custom treatment planning',
      'Combination of fillers & relaxants',
      'Precise sculpting',
      'Final symmetry check'
    ],
    faqs: [
      { question: 'How long do results last?', answer: '6-18 months depending on techniques.' },
      { question: 'Is it noticeable?', answer: 'Subtle and natural enhancement.' },
      { question: 'Can it slim the face?', answer: 'Yes, through contouring and definition.' }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
