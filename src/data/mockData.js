export const INITIAL_BUSINESS = {
  id: "aibaik-theni",
  slug: "aibaik-theni",
  name: "Aibaik Restaurant Theni",
  branch: "Opposite Vetri Cinemas, Theni",
  category: "Arabian BBQ, Shawarma & Family Dining",
  ownerName: "Aibaik Restaurant",
  email: "contact@aibaiktheni.com",
  phone: "097919 14411",
  plan: "Pro Enterprise",
  monthlyScanLimit: 5000,
  logoUrl: "/aibaik-logo.png",
  bannerUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
  tagline: "Authentic Arabian Charcoal BBQ, Shawarma & Mandi Biryani in Theni",
  address: "Opposite Vetri Cinemas, RMTC Colony, Unjampatti, Virapandi, Theni, Tamil Nadu 625531",
  googlePlaceUrl: "https://www.google.com/search?kgmid=%2Fg%2F11msv0jzd_",
  verified: true,
  rating: 3.8,
  totalReviews: 215,
  status: "ACTIVE",
  createdAt: "2023-01-10"
};

export const INITIAL_MERCHANTS_LIST = [
  INITIAL_BUSINESS
];

// Product & Services Catalogue for Barani car Accessories
export const BARANI_SERVICES = [
  {
    id: 'audio_systems',
    name: 'Android Touch Screen & Audio Systems',
    category: 'Electronics & Audio',
    badge: 'Popular',
    desc: 'Touchscreen Android infotainment, DSP amplifiers, subwoofers & premium speakers.',
    iconName: 'Volume2',
    color: 'from-blue-600 to-indigo-600',
    tags: ['Android Infotainment', 'Subwoofer & Bass', 'Component Speakers', 'Reverse HD Camera']
  },
  {
    id: 'custom_seat_covers',
    name: 'Custom Seat Covers & Interior Upholstery',
    category: 'Interior Styling',
    badge: 'Best Seller',
    desc: 'Bucket fitting leatherette covers, steering wraps, armrest & 7D floor mats.',
    iconName: 'Armchair',
    color: 'from-purple-600 to-pink-600',
    tags: ['Bucket Leather Covers', '7D Luxury Floor Mats', 'Steering Leather Wrap', 'Roof Lining']
  },
  {
    id: 'lighting_upgrade',
    name: 'Projector Headlights & Ambient Lighting',
    category: 'Lighting & Styling',
    badge: 'Trending',
    desc: 'High-power LED headlamps, fog projectors, DRL matrix & app-controlled ambient lights.',
    iconName: 'Zap',
    color: 'from-amber-500 to-orange-600',
    tags: ['App Ambient Lights', 'High-Beam LED & HIDs', 'Bi-LED Projector Fog Lamps', 'Dynamic DRLs']
  },
  {
    id: 'body_mods_alloys',
    name: 'Body Styling, Spoilers & Alloy Wheels',
    category: 'Exterior Mods',
    badge: 'Hot Upgrade',
    desc: 'Sporty diffusers, spoilers, side skirts, chrome de-chrome & alloy wheel fittings.',
    iconName: 'Wrench',
    color: 'from-emerald-600 to-teal-600',
    tags: ['Sporty Spoilers', 'Body Kits & Diffusers', 'Roof Rails & Footsteps', 'De-chroming']
  },
  {
    id: 'sunfilm_ppf',
    name: 'Ceramic Coating, PPF & Sun Control Films',
    category: 'Paint & Detailing',
    badge: 'Protection',
    desc: 'Heat rejection sun control films, ceramic paint protection & scratch-resistant PPF.',
    iconName: 'ShieldCheck',
    color: 'from-teal-500 to-cyan-600',
    tags: ['Heat Shield Sun Films', '9H Ceramic Coating', 'Paint Protection Film (PPF)', 'Underbody Coating']
  },
  {
    id: 'detailing_cleaning',
    name: 'Deep Interior Cleaning & Foam Wash',
    category: 'Detailing',
    badge: 'Maintenance',
    desc: 'Odor removal, steam interior cleaning, windshield polishing & foam spa wash.',
    iconName: 'SprayCan',
    color: 'from-rose-500 to-red-600',
    tags: ['Steam Interior Spa', 'Foam Body Wash', 'Glass Stain Removal', 'Headlight Restoration']
  }
];

export const FEATURE_TAGS = [
  { id: "modifications", title: "Custom Modifications", desc: "Expert styling & fittings", iconName: "Wrench", defaultSelected: true },
  { id: "audio_lighting", title: "Audio & Lighting", desc: "Premium stereo & LED lights", iconName: "Volume2", defaultSelected: true },
  { id: "accessories", title: "Car Accessories", desc: "Quality seat covers & parts", iconName: "Sparkles", defaultSelected: true },
  { id: "workmanship", title: "Workmanship & Finish", desc: "Flawless & clean installation", iconName: "ShieldCheck", defaultSelected: false },
  { id: "pricing", title: "Best Pricing & Value", desc: "Affordable & transparent rates", iconName: "DollarSign", defaultSelected: false },
  { id: "service", title: "Friendly & Fast Service", desc: "Helpful staff & quick delivery", iconName: "Clock", defaultSelected: false },
  { id: "interior_cleaning", title: "Detailing & Polishing", desc: "Spotless interior & exterior", iconName: "SprayCan", defaultSelected: false },
  { id: "trust", title: "Trusted Experience", desc: "25000+ happy customers since 2019", iconName: "ThumbsUp", defaultSelected: false }
];

export const NEGATIVE_ISSUE_TAGS = [
  { id: "fitting_issue", label: "🔧 Fitting or Alignment Issue" },
  { id: "wait_time", label: "⏳ Delay in Service / Delivery" },
  { id: "product_quality", label: "📦 Product / Part Quality" },
  { id: "staff_response", label: "😐 Staff Communication" },
  { id: "billing", label: "💳 Pricing or Billing Query" },
  { id: "electrical", label: "⚡ Wiring or Audio Issue" }
];

export const INITIAL_FEEDBACK_ENTRIES = [
  {
    id: "FB-1001",
    merchantId: "barani-cars",
    customerName: "Karthik Raja",
    contactInfo: "+91 98401 54321",
    contactType: "phone",
    sentiment: "NEEDS_ATTENTION",
    rating: 2,
    issues: ["Delay in Service / Delivery"],
    comment: "Seat cover installation took 1 hour longer than promised. Quality is good though.",
    status: "NEW",
    priority: "HIGH",
    touchpoint: "Fitting Bay (QR-01)",
    createdAt: "2026-08-20T11:30:00Z",
    notes: [
      { id: "n1", author: "Barani car Accessories Manager", text: "Customer contacted and resolved.", timestamp: "2026-08-20T12:00:00Z" }
    ]
  }
];

export const INITIAL_QR_STANDS = [
  {
    id: "QR-01",
    merchantId: "barani-cars",
    name: "Barani car Accessories Reception Counter",
    location: "Main Fitting Lounge",
    scans: 1240,
    goodCount: 1180,
    convertedReviews: 920,
    negativeInterceptions: 15,
    active: true,
    createdAt: "2026-01-15"
  }
];

export const INITIAL_ANALYTICS_DATA = {
  totalScans: 2840,
  totalPositiveConversions: 2450,
  totalNegativeInterceptions: 28,
  averageRating: 4.9,
  conversionRate: 86.3
};

// Fallback dynamic generator so ANY slug returns Barani car Accessories or formatted store profile
export const getMerchantBySlugOrFallback = (slug, existingList = INITIAL_MERCHANTS_LIST) => {
  if (!slug || slug === 'barani-cars' || slug === 'barani') return INITIAL_BUSINESS;
  
  const normalized = slug.toLowerCase().trim();
  const found = existingList.find(m => m.slug.toLowerCase() === normalized || m.id.toLowerCase() === normalized);
  if (found) return found;

  const formattedName = normalized
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id: `m-custom-${normalized}`,
    slug: normalized,
    name: formattedName,
    branch: "Main Branch",
    category: "Car Modifications & Accessories",
    ownerName: "Manager",
    email: `contact@${normalized.replace(/[^a-z0-9]/g, '')}.com`,
    phone: "+91 98421 23456",
    plan: "Pro Enterprise",
    monthlyScanLimit: 5000,
    logoUrl: "/logo.png",
    bannerUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    tagline: `Welcome to ${formattedName}! Scan to share your 5-star experience.`,
    address: "Theni Main Road, Cumbum, Theni District, Tamil Nadu",
    googlePlaceUrl: `https://maps.google.com/?q=${encodeURIComponent(formattedName + ' Cumbum')}`,
    verified: true,
    rating: 4.9,
    totalReviews: 1200,
    status: "ACTIVE",
    createdAt: new Date().toISOString().split('T')[0]
  };
};

import { generateSmartReviewSuite } from './reviewGenerator';

// Client-side AI Review Generator customized for Car Accessories & Modifications
export const generateClientSideAiReview = ({
  businessName = "Barani car Accessories",
  businessCategory = "Car Modifications & Accessories",
  selectedServices = [],
  tags = [],
  customerComment = "",
  rating = 5,
  tone = "seo"
}) => {
  return generateSmartReviewSuite({
    businessName,
    businessCategory,
    selectedServices,
    tags,
    customerComment,
    rating,
    tone
  });
};
