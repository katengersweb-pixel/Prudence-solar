export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'residential' | 'commercial' | 'lighting' | 'agriculture' | 'security';
  image: string;
  badge?: string;
  specs: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: 'calendar' | 'sun' | 'users';
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  capacity?: string;
  category: string;
  image: string;
  description?: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  systemType?: string;
}

export interface HeroSlide {
  id: string;
  tagline: string;
  headline: string;
  prefixText?: string;
  highlightWord?: string;
  suffixText?: string;
  highlightText: string;
  description: string;
  image: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface OfficeLocation {
  id: string;
  badge: string;
  name: string;
  company: string;
  addressLines: string[];
  state: string;
  pin: string;
  careOf?: string;
  directionsUrl: string;
  searchUrl: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  solution: string;
  city: string;
  monthlyBill?: string;
  message?: string;
}
