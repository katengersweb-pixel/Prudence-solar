import type { ProductItem, StatItem, GalleryItem, ReviewItem, HeroSlide, OfficeLocation, G2G3PackageTier, TeamMember } from '../types';

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
    value: 7,
    suffix: '+',
    label: 'Years of Experience',
    iconName: 'calendar',
    description: 'Over 7 years of trusted solar engineering & scientific consultation.'
  },
  {
    id: 'stat-residential',
    value: 150,
    suffix: '+',
    label: 'Residential Customers',
    iconName: 'home',
    description: 'Independent homes, villas, and housing societies powered by solar.'
  },
  {
    id: 'stat-commercial',
    value: 175,
    suffix: '+',
    label: 'Commercial Customers',
    iconName: 'building',
    description: 'Commercial establishments, industries, institutions, and businesses.'
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
    imagePosition: 'center',
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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: '3 kW Residential Rooftop Solar Plant',
    location: 'Hyderabad, Telangana',
    capacity: '3 kW On-Grid',
    category: 'Residential',
    image: '/assets/gallery/installation-3.jpg',
    description: 'Elevated hot-dip galvanized rooftop structure with DCR bifacial panels and high-yield generation.'
  },
  {
    id: 'gal-2',
    title: 'Elevated Structure Foundation & Pedestals',
    location: 'Secunderabad, Telangana',
    capacity: '5 kW Structural Base',
    category: 'Residential',
    image: '/assets/gallery/installation-2.jpg',
    description: 'Reinforced concrete pedestals ensuring zero terrace puncture and maximum wind resistance.'
  },
  {
    id: 'gal-3',
    title: '4 kW Home Solar Installation',
    location: 'Chirala, Andhra Pradesh',
    capacity: '4 kW On-Grid',
    category: 'Residential',
    image: '/assets/gallery/installation-8.jpg',
    description: 'PM Surya Ghar subsidy-approved residential rooftop solar installation with high customer satisfaction.'
  },
  {
    id: 'gal-4',
    title: 'Polycab On-Grid Inverter & Protection Units',
    location: 'Warangal, Telangana',
    capacity: 'Inverter & ACDB/DCDB',
    category: 'Commercial & Residential',
    image: '/assets/gallery/installation-10.jpg',
    description: 'Class-II SPD surge protection, dual earthing, and high-efficiency smart solar inverter.'
  },
  {
    id: 'gal-5',
    title: 'Solar Power Backup & Hybrid Inverter Room',
    location: 'Khammam, Telangana',
    capacity: 'Hybrid Inverter Setup',
    category: 'Residential',
    image: '/assets/gallery/installation-13.jpg',
    description: 'Safe indoor battery and inverter room layout with clean cable management and industrial circuit breakers.'
  },
  {
    id: 'gal-6',
    title: 'Heavy-Duty Rooftop Solar Array',
    location: 'Guntur, Andhra Pradesh',
    capacity: '5 kW Elevated Structure',
    category: 'Residential',
    image: '/assets/gallery/installation-7.jpg',
    description: 'Hot-dip galvanized structure with optimal south-facing azimuth angle for all-season peak generation.'
  },
  {
    id: 'gal-7',
    title: 'Commissioned Solar Inverter & Grid Sync',
    location: 'Hyderabad, Telangana',
    capacity: '3 kW Grid-Tied System',
    category: 'Residential',
    image: '/assets/gallery/installation-9.jpg',
    description: 'Fully inspected and commissioned net-metering solar system delivering up to 90% monthly bill savings.'
  },
  {
    id: 'gal-8',
    title: 'Commercial Rooftop Solar at Retail Complex',
    location: 'Vijayawada, Andhra Pradesh',
    capacity: '10 kW Commercial',
    category: 'Commercial',
    image: '/assets/gallery/installation-5.jpg',
    description: 'Elevated commercial solar plant over retail store, maximizing daytime operational power offset.'
  },
  {
    id: 'gal-9',
    title: 'Residential Rooftop Solar System',
    location: 'Secunderabad, Telangana',
    capacity: '3.3 kW On-Grid',
    category: 'Residential',
    image: '/assets/gallery/installation-1.jpg',
    description: 'Complete PM Surya Ghar handover with high-efficiency Tier-1 solar modules.'
  },
  {
    id: 'gal-10',
    title: 'Precision Structural Underside & Framing',
    location: 'Hyderabad, Telangana',
    capacity: 'Engineering Detail',
    category: 'Technical Engineering',
    image: '/assets/gallery/installation-15.jpg',
    description: 'Heavy-duty C-channel framing and anodized aluminum clamps engineered for 150+ km/h wind loads.'
  },
  {
    id: 'gal-11',
    title: '100% Copper Earthing & Inverter Wiring',
    location: 'Nalgonda, Telangana',
    capacity: 'Electrical Commissioning',
    category: 'Technical Engineering',
    image: '/assets/gallery/installation-4.jpg',
    description: 'Certified 1 Core × 6 sq. mm pure copper grounding and MNRE-compliant distribution cabling.'
  },
  {
    id: 'gal-12',
    title: 'Sunset View of Completed Rooftop Solar Plant',
    location: 'Bapatla District, Andhra Pradesh',
    capacity: '5 kW On-Grid',
    category: 'Residential',
    image: '/assets/gallery/installation-12.jpg',
    description: 'Zero-maintenance rooftop solar installation providing green energy and direct electricity savings.'
  },
  {
    id: 'gal-13',
    title: 'Evening Commissioning & Inspection',
    location: 'Khammam, Telangana',
    capacity: '4 kW Night View',
    category: 'Residential',
    image: '/assets/gallery/installation-14.jpg',
    description: 'Final engineering quality check and verification of module stability and cable connections.'
  },
  {
    id: 'gal-14',
    title: 'High-Efficiency Terrace Solar Installation',
    location: 'Hyderabad, Telangana',
    capacity: '3 kW On-Grid',
    category: 'Residential',
    image: '/assets/gallery/installation-11.jpg',
    description: 'Elevated G+2 terrace installation allowing full usable terrace space below the panels.'
  }
];

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
      'H.No: 2-14-2, Challa Subba Reddy House,',
      'Audipudi Village, Karamchedu Mandal,',
      'Near Chirala, Bapatla District,',
      'Andhra Pradesh – 523170.'
    ],
    state: 'Andhra Pradesh',
    pin: '523170',
    careOf: 'Challa Subba Reddy House',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Audipudi+Village,+Karamchedu+Mandal,+Near+Chirala,+Bapatla+District,+Andhra+Pradesh+523170',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Audipudi+Village,+Karamchedu+Mandal,+Near+Chirala,+Bapatla+District,+Andhra+Pradesh+523170'
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

/**
 * Official Promotional Package Prices for DCR N-Type TOPCon Bifacial Solar
 * On-Grid Rooftop Systems for G+2 / G+3 Building (Elevated Structure) - GST Included.
 */
export const G2_G3_PACKAGES: G2G3PackageTier[] = [
  { capacity: 1, grossPrice: 96000, subsidy: 30000, netPrice: 66000, phase: 'Single' },
  { capacity: 2, grossPrice: 169000, subsidy: 60000, netPrice: 109000, phase: 'Single' },
  { capacity: 3, grossPrice: 229000, subsidy: 78000, netPrice: 151000, phase: 'As approved' },
  { capacity: 4, grossPrice: 274000, subsidy: 78000, netPrice: 196000, phase: 'As approved' },
  { capacity: 5, grossPrice: 334000, subsidy: 78000, netPrice: 256000, phase: 'Single phase', notes: '3-Phase available at ₹3,55,000' },
  { capacity: 6, grossPrice: 428000, subsidy: 78000, netPrice: 350000, phase: 'Three phase' },
  { capacity: 7, grossPrice: 482000, subsidy: 78000, netPrice: 404000, phase: 'Three phase' },
  { capacity: 8, grossPrice: 534000, subsidy: 78000, netPrice: 456000, phase: 'Three phase' },
  { capacity: 9, grossPrice: 593000, subsidy: 78000, netPrice: 515000, phase: 'Three phase' },
  { capacity: 10, grossPrice: 656000, subsidy: 78000, netPrice: 578000, phase: 'Three phase' }
];

export interface SolarEstimateResult {
  grossPrice: number;
  subsidy: number;
  netPrice: number;
  phase: string;
  structure: string;
  isExactPackage: boolean;
}

/**
 * Calculate solar system costs based on official G+2 / G+3 Building pricing table.
 */
export function calculateG2G3Estimate(capacity: number, isCommercial: boolean = false): SolarEstimateResult {
  if (isCommercial) {
    const grossPrice = Math.round(capacity * 55000);
    return {
      grossPrice,
      subsidy: 0,
      netPrice: grossPrice,
      phase: capacity >= 5 ? 'Three phase' : 'As approved',
      structure: 'Commercial Rooftop Structure',
      isExactPackage: false
    };
  }

  // Exact package match check
  const exactMatch = G2_G3_PACKAGES.find((p) => p.capacity === capacity);
  if (exactMatch) {
    return {
      grossPrice: exactMatch.grossPrice,
      subsidy: exactMatch.subsidy,
      netPrice: exactMatch.netPrice,
      phase: exactMatch.phase,
      structure: 'G+2 / G+3 Building (Elevated Structure)',
      isExactPackage: true
    };
  }

  let grossPrice: number;
  let phase = 'Single';

  if (capacity <= 1) {
    grossPrice = 96000;
    phase = 'Single';
  } else if (capacity >= 10) {
    // 10 kW package is 6,56,000; additional capacity at 65,600/kW
    grossPrice = Math.round(656000 + (capacity - 10) * 65600);
    phase = 'Three phase';
  } else {
    // Linear interpolation between the two adjacent integer tiers
    const lower = G2_G3_PACKAGES.filter((p) => p.capacity <= capacity).pop() || G2_G3_PACKAGES[0];
    const upper = G2_G3_PACKAGES.find((p) => p.capacity > capacity) || G2_G3_PACKAGES[G2_G3_PACKAGES.length - 1];

    if (lower.capacity === upper.capacity) {
      grossPrice = lower.grossPrice;
      phase = lower.phase;
    } else {
      const fraction = (capacity - lower.capacity) / (upper.capacity - lower.capacity);
      grossPrice = Math.round(lower.grossPrice + fraction * (upper.grossPrice - lower.grossPrice));
      phase = upper.phase;
    }
  }

  // PM Surya Ghar CFA Subsidy
  let subsidy = 0;
  if (capacity >= 3) {
    subsidy = 78000;
  } else if (capacity >= 2) {
    subsidy = 60000;
  } else if (capacity >= 1) {
    subsidy = 30000;
  }

  const netPrice = Math.max(0, grossPrice - subsidy);

  return {
    grossPrice,
    subsidy,
    netPrice,
    phase,
    structure: 'G+2 / G+3 Building (Elevated Structure)',
    isExactPackage: false
  };
}

/**
 * Prudence Industries Leadership & Technical Installation Team
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'challa-rajasekharareddy',
    name: 'Challa Rajasekharareddy',
    qualifications: 'M.Sc., Ph.D.',
    designation: 'Managing Partner and Director',
    roleCategory: 'leadership',
    roleCategoryLabel: 'Executive Leadership',
    initials: 'CR',
    avatarColor: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
    image: '/assets/team/challa-rajasekharareddy.jpg',
    imagePosition: 'center 12%',
    shortBio:
      'Spearheading strategic vision, research-driven solar engineering, and high-efficiency photovoltaic deployments across residential and commercial sectors.',
    fullBio: [
      'Dr. Challa Rajasekharareddy holds an M.Sc. and Ph.D. with deep academic and scientific foundations in advanced energy materials and technology. As Managing Partner and Director at Prudence Industries, he spearheads the company’s long-term strategic direction, scientific solar consultation, and technological innovations.',
      'Under his leadership, Prudence Solar has successfully delivered over 325+ residential and commercial rooftop solar projects across Telangana and Andhra Pradesh, prioritizing Tier-1 photovoltaic standards, optimal azimuth angles, and maximum generation yield.',
      'He actively champions the adoption of next-generation DCR N-Type TOPCon bifacial modules, custom-engineered elevated mounting structures, and robust DISCOM net-metering integration.'
    ],
    expertise: [
      'Photovoltaic Research & Technology',
      'Strategic Solar Governance',
      'High-Yield Rooftop System Design',
      'Commercial Solar Feasibility',
      'Quality Assurance & Tier-1 Standards'
    ]
  },
  {
    id: 'saiempu-swapna',
    name: 'Saiempu Swapna',
    qualifications: 'MBA, LLB',
    designation: 'Managing Partner and Director',
    roleCategory: 'leadership',
    roleCategoryLabel: 'Executive Leadership',
    initials: 'SS',
    avatarColor: 'linear-gradient(135deg, #102B50 0%, #1E3A8A 100%)',
    image: '/assets/team/saiempu-swapna.svg',
    shortBio:
      'Guiding corporate governance, financial strategy, and end-to-end PM Surya Ghar government subsidy coordination for swift, hassle-free approvals.',
    fullBio: [
      'Saiempu Swapna brings a rare and powerful synthesis of business leadership and legal acumen, holding both an MBA in corporate management and an LLB in law. As Managing Partner and Director, she steers Prudence Industries’ operational excellence, regulatory compliance, and customer success.',
      'She oversees the dedicated subsidy facilitation cell for the central PM Surya Ghar: Muft Bijli Yojana, ensuring every residential rooftop solar customer receives seamless portal registrations, timely DISCOM inspections, and direct CFA bank disbursements without procedural delays.',
      'Her governance ensures strict ethical standards, transparent customer agreements, and strong partnerships with nationalized banking institutions for zero-hassle solar financing.'
    ],
    expertise: [
      'Corporate & Financial Governance',
      'DISCOM Regulatory Compliance',
      'PM Surya Ghar Subsidy Management',
      'Customer Relationship & Transparent Contracts',
      'Solar Project Financing & Legal Oversight'
    ]
  },
  {
    id: 'satyanarayana',
    name: 'Mr. Satyanarayana',
    qualifications: 'M.Tech',
    designation: 'Technical Expert – Installations',
    roleCategory: 'technical',
    roleCategoryLabel: 'Engineering & Installation Lead',
    initials: 'SN',
    avatarColor: 'linear-gradient(135deg, #1E5114 0%, #4D922D 100%)',
    image: '/assets/team/satyanarayana.jpg',
    imagePosition: 'center 15%',
    shortBio:
      'Leading electrical engineering, high-voltage grid synchronization, and structural design validation for zero-loss rooftop performance.',
    fullBio: [
      'Holding an M.Tech in power engineering, Mr. Satyanarayana heads the technical design, electrical engineering, and grid synchronization team at Prudence Solar. He brings extensive hands-on experience in sizing string inverters, multi-MPPT optimization, and AC/DC distribution safety.',
      'He conducts rigorous pre-installation site feasibility assessments, shadow-loss simulation modeling, and electrical safety audits to ensure full compliance with CEA (Central Electricity Authority) and state DISCOM standards.',
      'His meticulous approach to chemical earthing, Class-II surge protection devices (SPDs), and dual-axis lightning arrestors guarantees lifetime durability for every installed system.'
    ],
    expertise: [
      'Power Systems & Grid Synchronization',
      'Inverter Sizing & MPPT Design',
      'Shadow Analysis & Solar Simulation',
      'Lightning & Surge Protection (SPD Class II)',
      'Technical DISCOM Inspection Approvals'
    ]
  },
  {
    id: 'raju',
    name: 'Mr. Raju',
    qualifications: 'B.Tech',
    designation: 'Expert – Installations',
    roleCategory: 'technical',
    roleCategoryLabel: 'Rooftop Fabrication & Execution Lead',
    initials: 'RJ',
    avatarColor: 'linear-gradient(135deg, #78350F 0%, #D97706 100%)',
    image: '/assets/team/raju.svg',
    shortBio:
      'Directing on-site fabrication, heavy-duty elevated structure mounting, and precision module alignment for extreme weather resilience.',
    fullBio: [
      'Mr. Raju holds a B.Tech in engineering with specialized expertise in on-ground structural fabrication and mechanical assemblies. As Prudence Solar’s Expert in Installations, he leads the on-ground fabrication and installation crews across all residential and commercial sites.',
      'Specializing in hot-dip galvanized iron (GI) structures and elevated rooftop mounts (G+1, G+2, G+3 buildings), Mr. Raju ensures structural integrity capable of withstanding wind loads exceeding 150 km/h without piercing terrace water-proofing.',
      'From module clamping torque checks to weather-proof UV-resistant cabling, his rigorous on-site supervision guarantees rapid project turnaround and spotless execution.'
    ],
    expertise: [
      'On-Site Installation Supervision',
      'Hot-Dip Galvanized Structure Erection',
      'Elevated Rooftop Mounting (G+2 / G+3)',
      'Torque & UV-Resistant Cable Management',
      'Field Safety & Rapid Commissioning'
    ]
  }
];
