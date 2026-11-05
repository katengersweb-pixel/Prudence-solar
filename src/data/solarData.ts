import type { ProductItem, StatItem, GalleryItem, ReviewItem, HeroSlide, OfficeLocation } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    tagline: 'CLEAN ENERGY FOR A BRIGHTER TOMORROW',
    headline: 'Power Your Future with',
    prefixText: 'Smarter ',
    highlightWord: 'Solar',
    suffixText: ' Solutions.',
    highlightText: 'Smarter Solar Solutions.',
    description: 'Discover reliable solar products and solutions designed to help you make better use of clean energy.',
    image: '/assets/hero/hero-residential.jpg',
    primaryCtaText: 'Explore Solar Solutions',
    secondaryCtaText: 'Get a Free Quote'
  },
  {
    id: 'slide-2',
    tagline: 'EXPERT INSTALLATION & LIFETIME SUPPORT',
    headline: 'Engineered Precision for',
    prefixText: 'Rooftop ',
    highlightWord: 'Solar',
    suffixText: ' Performance.',
    highlightText: 'Rooftop Solar Performance.',
    description: 'Certified solar engineers deploying Tier-1 photovoltaic technology with optimal orientation for maximum energy yield.',
    image: '/assets/hero/solar-field-array.jpg',
    primaryCtaText: 'View Installations',
    secondaryCtaText: 'Book a Site Survey'
  },
  {
    id: 'slide-3',
    tagline: 'GOVERNMENT SUBSIDY ASSISTANCE',
    headline: 'Empower Your Home with',
    prefixText: 'PM Surya ',
    highlightWord: 'Ghar',
    suffixText: ' Yojana.',
    highlightText: 'PM Surya Ghar Yojana.',
    description: 'Get up to ₹78,000 in direct government subsidy for residential rooftop solar with complete approval assistance.',
    image: '/assets/hero/pm-modi-surya-ghar.jpg',
    imagePosition: 'center top',
    primaryCtaText: 'Calculate Subsidy',
    secondaryCtaText: 'Check Eligibility'
  },
  {
    id: 'slide-4',
    tagline: 'HIGH-EFFICIENCY COMMERCIAL SYSTEMS',
    headline: 'Scalable Green Power for',
    prefixText: 'Industries & ',
    highlightWord: 'Solar',
    suffixText: ' Parks.',
    highlightText: 'Industries & Solar Parks.',
    description: 'Cut operational electricity expenses by up to 80% with high-capacity on-grid solar systems backed by 25-year warranties.',
    image: '/assets/products/on-grid-solar.jpg',
    primaryCtaText: 'Commercial Solutions',
    secondaryCtaText: 'Speak to an Expert'
  }
];

export const COMPANY_STATS: StatItem[] = [
  {
    id: 'stat-experience',
    value: 10,
    suffix: '+',
    label: 'Years of Experience',
    iconName: 'calendar',
    description: 'A decade of pioneering solar engineering & scientific consultation.'
  },
  {
    id: 'stat-projects',
    value: 1500,
    suffix: '+',
    label: 'Projects Completed',
    iconName: 'sun',
    description: 'Residential rooftops, commercial plants & rural installations.'
  },
  {
    id: 'stat-customers',
    value: 2500,
    suffix: '+',
    label: 'Customers Served',
    iconName: 'users',
    description: 'Families, farm owners, institutions, and growing businesses.'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'solar-panels',
    title: 'Quality Solar Panels',
    subtitle: 'Mono-PERC & Bi-facial Modules',
    description: 'High efficiency panels for homes and businesses engineered for maximum daylight absorption and durability under all Indian climate conditions.',
    category: 'residential',
    image: '/assets/products/solar-panels.jpg',
    badge: 'Tier-1 Rated',
    specs: ['Up to 22.8% Cell Efficiency', '25-Year Linear Power Warranty', 'Anti-Reflective Tempered Glass', 'PID & Salt Mist Resistant']
  },
  {
    id: 'street-lights',
    title: 'Solar Street Lights',
    subtitle: 'All-in-One Integrated LED',
    description: 'Reliable lighting for streets and outdoor spaces equipped with intelligent twilight dusk-to-dawn sensors, long-life LiFePO4 batteries, and weather-proof casing.',
    category: 'lighting',
    image: '/assets/products/solar-street-light.jpg',
    badge: 'Dusk to Dawn',
    specs: ['Intelligent Motion Sensing', 'LiFePO4 Lithium Battery', 'IP66 Weatherproof Rating', 'Zero Grid Electricity Cost']
  },
  {
    id: 'on-grid-systems',
    title: 'On-Grid Solar Systems',
    subtitle: 'Net-Metered Grid Connected',
    description: 'Efficient grid-connected rooftop solutions designed to sync with your local electrical utility grid, export surplus electricity, and drastically reduce electric bills.',
    category: 'commercial',
    image: '/assets/products/on-grid-solar.jpg',
    badge: 'Net Metering Ready',
    specs: ['Bi-directional Net Metering', 'Smart Mobile App Monitoring', '98.5% Inverter Efficiency', 'PM Surya Ghar Approved']
  },
  {
    id: 'solar-motors',
    title: 'Solar Motors & Pumps',
    subtitle: 'Agricultural & Borewell Pumping',
    description: 'Powerful and durable solar pump solutions built for farmers and estates, ensuring continuous water pumping directly from borewells without depending on erratic grid power.',
    category: 'agriculture',
    image: '/assets/products/solar-pump.jpg',
    badge: 'Farm Direct',
    specs: ['DC / AC Submersible Motors', 'Automatic MPPT Controller', 'Low Maintenance Operation', 'Works on Direct Sunlight']
  },
  {
    id: 'water-heaters',
    title: 'Solar Water Heaters',
    subtitle: 'Evacuated Tube Collector (ETC)',
    description: 'Clean hot water using solar energy with insulated triple-layer vacuum glass tubes and high-grade stainless steel storage tanks that retain water heat overnight.',
    category: 'residential',
    image: '/assets/products/solar-water-heater.jpg',
    badge: 'Hot Water 24/7',
    specs: ['High-Borosilicate Vacuum Tubes', 'PUF Insulation (Heat Retention 48h)', 'Rust-Proof Inner SS Tank', 'Electricity Savings of 70%']
  },
  {
    id: 'security-cameras',
    title: 'Solar Security Cameras',
    subtitle: '4G / Wi-Fi Standalone CCTV',
    description: 'Smart and secure surveillance solutions powered by dedicated solar panel and battery, delivering non-stop 24/7 remote monitoring even during blackouts or in remote properties.',
    category: 'security',
    image: '/assets/products/security-camera.jpg',
    badge: 'Continuous 4G Live',
    specs: ['Full HD Color Night Vision', 'Built-in 4G SIM / Wi-Fi Support', 'PIR Human Motion Detection', 'Solar Recharge Continuous']
  },
  {
    id: 'solar-gi-structures',
    title: 'Solar Module Structures (GI)',
    subtitle: 'Pre-Galvanized Iron Rooftop Mounting',
    description: 'High-strength Galvanized Iron (GI) module mounting structures engineered for flat and pitched roofs, offering high wind resistance and easy bolt-on installation.',
    category: 'structures',
    image: '/assets/products/solar-gi-structures.jpg',
    badge: 'Corrosion Resistant',
    specs: ['High Tensile GI Steel (80-120 GSM)', 'Up to 150 km/h Wind Speed Certified', 'Optimal 15° to 30° Tilt Angle', 'Rooftop & Ground Mount Compatible']
  },
  {
    id: 'hot-dip-galvanized-structures',
    title: 'Hot-Dip Galvanized Iron Solar Mounting Structures',
    subtitle: 'Heavy-Duty 80-Micron Zinc Coated Steel',
    description: 'Industrial-grade hot-dip galvanized mounting structures with 80+ micron zinc coating, built for superior 25+ year outdoor corrosion resistance in extreme weather environments.',
    category: 'structures',
    image: '/assets/products/hot-dip-galvanized-structures.jpg',
    badge: '80μm Zinc Coated',
    specs: ['IS 2062 Grade Steel Specification', '80+ Micron Hot-Dip Galvanization', '25+ Years Rust-Free Lifespan', 'Custom Elevated & Superstructure Designs']
  },
  {
    id: 'mounting-frames-accessories',
    title: 'Solar Panel Mounting Frames and Accessories',
    subtitle: 'Hardware, Rails, Clamps & Fasteners',
    description: 'Complete range of precision engineered solar mounting accessories including anodized aluminum rails, mid-clamps, end-clamps, L-feet brackets, and SS-304 fastener hardware.',
    category: 'structures',
    image: '/assets/products/mounting-frames-accessories.jpg',
    badge: 'SS-304 Hardware',
    specs: ['Anodized Extruded Aluminum Rails', 'Mid-Clamps & End-Clamps (30-40mm)', 'Stainless Steel SS-304 Fasteners', 'EPDM Rubber Gaskets & Cable Clips']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 15 }, (_, i) => ({
  id: `gal-${i + 1}`,
  title: `Solar Installation ${i + 1}`,
  location: 'Varanasi & UP',
  capacity: 'Rooftop Solar',
  category: 'Residential & Commercial',
  image: `/assets/gallery/installation-${i + 1}.jpg`,
  description: 'On-site rooftop solar installation engineered by Prudence Solar & Scientific Solutions.'
}));

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'Great service and professional team. Our electricity bills have reduced significantly since the installation. The team handled all PM Surya Ghar paperwork and net metering without any hassle.',
    author: 'Rajesh Sharma',
    role: 'Homeowner',
    location: 'Varanasi',
    rating: 5,
    systemType: '5 kW On-Grid System'
  },
  {
    id: 'rev-2',
    quote: 'Prudence Solar provided high quality Tier-1 panels and clean cable management on our factory roof. Their after-sales support and generation monitoring app are truly remarkable.',
    author: 'Sunil Verma',
    role: 'Managing Director, Verma Mills',
    location: 'Prayagraj',
    rating: 5,
    systemType: '30 kW Commercial Plant'
  },
  {
    id: 'rev-3',
    quote: 'Installed a 5HP solar pump system on our farm. It pumps water effortlessly from 7 AM to 5 PM every sunny day. Diesel expenses have completely gone to zero. Highly recommended!',
    author: 'Rameshwar Yadav',
    role: 'Agricultural Farmer',
    location: 'Mirzapur',
    rating: 5,
    systemType: '5 HP Solar Water Pump'
  },
  {
    id: 'rev-4',
    quote: 'The team was transparent about the costs, expected generation, and government subsidy. Everything was completed on schedule with strict adherence to safety standards.',
    author: 'Dr. Priya Tripathi',
    role: 'Clinic Director',
    location: 'Varanasi',
    rating: 5,
    systemType: '8 kW Solar Rooftop'
  }
];

export const COMPANY_NAME = 'Prudence Industries Pvt. Limited';

export const OFFICES: OfficeLocation[] = [
  {
    id: 'office-hyderabad',
    badge: 'Office 1 – Hyderabad, Telangana',
    name: 'Hyderabad, Telangana',
    company: 'Prudence Industries Pvt. Limited',
    addressLines: [
      'Sy No: 93, H.No: 4-59/5,',
      'Mondayapally Road, Thunkunta, Shameerpet,',
      'Medchal Malkajgiri, Hyderabad,',
      'Telangana – 500078.'
    ],
    state: 'Telangana',
    pin: '500078',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Thumkunta,+Shameerpet,+Medchal-Malkajgiri,+Hyderabad,+Telangana+500078',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Thumkunta,+Shameerpet,+Medchal-Malkajgiri,+Hyderabad,+Telangana+500078'
  },
  {
    id: 'office-andhra-pradesh',
    badge: 'Office 2 – Andhra Pradesh',
    name: 'Andhra Pradesh',
    company: 'Prudence Industries Pvt. Limited',
    addressLines: [
      'H.No: 2-42/2,',
      'Challa Subba Reddy,',
      'Audipudi, Karamchedu,',
      'Bapatla, Andhra Pradesh – 523170.',
      'C/o Challa Subba Reddy.'
    ],
    state: 'Andhra Pradesh',
    pin: '523170',
    careOf: 'C/o Challa Subba Reddy.',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Audipudi,+Karamchedu,+Bapatla,+Andhra+Pradesh+523170',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Audipudi,+Karamchedu,+Bapatla,+Andhra+Pradesh+523170'
  }
];

export const getGmailComposeUrl = (
  email: string,
  subject = 'Solar Solutions Enquiry - Prudence Industries'
): string => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
};

export const CONTACT_INFO = {
  companyName: 'Prudence Industries Pvt. Limited',
  phones: ['+91 9515969797', '+91 9390445571'],
  emails: [
    'solar@prudencescientificsolutions.com',
    'sales@prudencescientific.com',
    'rsrc@prudencescientific.com'
  ],
  email: 'solar@prudencescientificsolutions.com',
  offices: OFFICES,
  hours: 'Monday – Saturday: 9:30 AM – 7:00 PM',
  whatsappNumber: '+919515969797',
  whatsappText: 'Hello Prudence Industries, I would like to enquire about solar solutions for my property.'
};
