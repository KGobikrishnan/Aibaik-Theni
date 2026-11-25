import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  MessageCircle, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Flame
} from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

const SERVICES_DATA = [
  {
    id: 'alloy-wheels',
    iconKey: 'alloys',
    name: 'Alloy Wheels & Tyre Upgrades',
    badge: 'Trending Mod',
    description: 'Premium alloy wheel fitting, precision 3D wheel alignment, and performance tyre upgrades for all car segments.',
    highlights: [
      'Multi-spoke, Concave & Diamond Cut Alloys',
      'Computerized High-Speed Balancing',
      'Tubeless Performance Tyres (R13 - R20)',
      'Hub-centric ring & lug nut styling'
    ]
  },
  {
    id: 'car-polishing',
    iconKey: 'polish',
    name: 'Car Polishing & Ceramic Coating',
    badge: 'Popular Detailing',
    description: 'Multi-stage paint correction, high-gloss machine compound polish, and 9H / 10H ceramic shield protection.',
    highlights: [
      '3-Step Swirl & Scratch Elimination',
      'Ultra Hydrophobic Paint Protection',
      'Mirror Finish Glass Polish & Sealant',
      'UV & Heat Damage Protection'
    ]
  },
  {
    id: 'interior-cleaning',
    iconKey: 'interior',
    name: 'Deep Interior Detailing & Seat Covers',
    badge: 'Best Seller',
    description: 'Deep germicidal steam interior detailing, custom bucket-fitting leatherette seat covers, and 7D luxury mats.',
    highlights: [
      'OEM Bucket Fitting Seat Upholstery',
      'Roof, Door Pad & Floor Steam Wash',
      'Dashboard & Trim Conditioning',
      'Odor Elimination & Anti-Bacterial Treatment'
    ]
  },
  {
    id: 'car-accessories',
    iconKey: 'accessories',
    name: 'Car Accessories & Infotainment',
    badge: 'Custom Fit',
    description: 'Touchscreen Android audio systems, high-output LED lighting, aerodynamic spoilers, and body styling kits.',
    highlights: [
      'DSP Android Screens with Apple CarPlay / Auto',
      'Projector Fog Lamps & Matrix DRLs',
      'Component Speakers & Under-seat Bass Tubes',
      'Side Footsteps, Roof Rails & Diffusers'
    ]
  },
  {
    id: 'performance-upgrades',
    iconKey: 'performance',
    name: 'Performance Upgrades & Tuning',
    badge: 'Motorsport Spec',
    description: 'Custom performance exhaust systems, throttle controllers, sports suspension dampers, and engine tuning support.',
    highlights: [
      'Valvetronic & Cat-Back Exhaust Systems',
      'Performance Air Intakes & Filters',
      'Stiffer Suspension & Lowering Springs',
      'Brake Pad Upgrades & Engine Bay Dress-up'
    ]
  },
  {
    id: 'car-wrapping',
    iconKey: 'wrapping',
    name: 'Car Wrapping & Custom Liveries',
    badge: 'Hot Custom',
    description: 'Full body vinyl color wraps, de-chroming, carbon fiber roof wraps, and custom motorsport racing liveries.',
    highlights: [
      'Gloss, Satin & Matte Premium Cast Films',
      'Full Piano Black Roof & Pillar De-chroming',
      'Smoked Headlight & Tail-lamp Films',
      'Paint Protection Film (PPF) Armour'
    ]
  }
];

export const Services = () => {
  const whatsappBookingUrl = "https://wa.me/919999999999?text=Hi%20Barani%20Cars,%20I%20would%20like%20to%20book%20a%20service%20consultation%20for%20my%20car.";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ff4d00] selection:text-white pb-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services | Barani car Accessories Cumbum - Premium Car Modification Studio</title>
        <meta 
          name="description" 
          content="Explore Barani car Accessories' premium car modification services in Cumbum: Alloy wheels, ceramic coating, custom seat covers, Android audio systems, car wrapping & performance upgrades." 
        />
        <meta name="keywords" content="Car modifications Cumbum, Alloy wheels Theni, Car polishing Cumbum, Seat covers Theni, Android car screen, Barani car Accessories services" />
      </Helmet>

      {/* Navigation Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e63946] to-[#ff6b00] flex items-center justify-center font-black text-white text-xl font-['Outfit'] shadow-[0_0_15px_rgba(255,107,0,0.4)]">
              B
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-wider font-['Outfit'] uppercase block leading-none">
                Barani <span className="text-[#ff6b00]">Cars</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase">
                Cumbum • Est. 2019
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
            <Link 
              to="/services" 
              className="px-3.5 py-1.5 rounded-lg text-[#ff6b00] bg-[#ff4d00]/10 border border-[#ff4d00]/30 font-semibold"
            >
              Services
            </Link>
            <Link 
              to="/reviews" 
              className="px-3.5 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#181818] transition-colors"
            >
              Reviews
            </Link>
            <a 
              href={whatsappBookingUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#e63946] to-[#ff6b00] text-white font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Booking
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#1a1a1a]">
        {/* Glow ambient background orbs */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#e63946]/20 via-[#ff6b00]/25 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#e63946]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-[#2a2a2a] mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-ping" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-300">
              #1 Automotive Studio in Theni District
            </span>
          </div>

          {/* Primary SEO Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit'] mb-6 max-w-4xl mx-auto leading-tight sm:leading-none">
            Premium Car Modifications in <span className="bg-gradient-to-r from-[#e63946] via-[#ff6b00] to-[#ffaa00] text-transparent bg-clip-text">Cumbum</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform your ride with state-of-the-art craftsmanship, imported styling accessories, custom interior upholstery, and motorsport upgrades.
          </p>

          {/* Trust stats counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-[#1f1f1f]">
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-[#ff6b00]">25,000+</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Happy Drivers</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-emerald-400">4.9 ★</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Google Rating</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-amber-400">Est. 2019</div>
              <div className="text-xs text-gray-400 font-medium mt-1">7+ Yrs Craftsmanship</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-[#e63946]">100%</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Genuine Parts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff6b00] mb-3">
            <Flame className="w-4 h-4" />
            Full-Spectrum Customization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-3">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Everything your car needs, under one roof. From race-inspired mods to luxury executive detailing.
          </p>
        </div>

        {/* 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Workshop Highlights & Quality Promise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-b from-[#161616] to-[#0f0f0f] border border-[#262626] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#ff6b00] text-xs font-bold tracking-widest uppercase mb-2 block">
                Why Drivers Choose Barani car Accessories
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-4">
                State-of-the-Art Fitting Bay in Cumbum
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                We believe your car is an extension of your personality. Our technicians use dedicated tools, clean-room detailing protocols, and certified wiring harnesses to guarantee performance without voiding vehicle safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>Coupler-to-coupler wiring</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>Dust-free film installation</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>Warranty on all electronics</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>Comfortable AC customer lounge</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-[#2a2a2a] flex flex-col justify-between text-center lg:text-left">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-['Outfit']">Ready to upgrade your car?</h4>
                <p className="text-gray-400 text-sm mb-6">
                  Visit our showroom on Theni Main Road, Cumbum or chat with our styling experts directly on WhatsApp.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-300 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#ff4d00]" />
                    <span>Theni Main Road, Cumbum, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-[#ff4d00]" />
                    <span>Open Mon – Sun: 9:00 AM – 9:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#e63946] to-[#ff6b00] hover:opacity-95 transition-opacity shadow-lg shadow-[#ff4d00]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  to="/reviews"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-gray-200 bg-[#1e1e1e] hover:bg-[#282828] border border-[#333333] transition-colors"
                >
                  <span>Customer Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#1c1c1c] text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Barani car Accessories. Transform your ride in Cumbum, Theni District, Tamil Nadu.</p>
      </footer>
    </div>
  );
};

export default Services;
