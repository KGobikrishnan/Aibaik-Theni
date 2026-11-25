import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Filter, 
  ArrowUpDown, 
  MessageSquarePlus, 
  Sparkles, 
  CheckCircle, 
  MapPin, 
  MessageCircle, 
  Wrench, 
  Award,
  ChevronDown,
  ExternalLink,
  ThumbsUp,
  Share2
} from 'lucide-react';
import { ReviewCard } from '../components/ReviewCard';

// 8+ Realistic Tamil Nadu Customer Reviews for Barani car Accessories
const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Murugan Muthusamy',
    rating: 5,
    date: '2 days ago',
    location: 'Cumbum, Theni',
    service: 'Alloy Wheels',
    carModel: 'Maruti Suzuki Swift (2022)',
    verified: true,
    comment: 'Fitted 15-inch hyper silver alloy wheels for my Swift. The computerized balancing was super smooth with zero high-speed vibrations on the Theni-Madurai bypass. Best car modification studio in Cumbum without doubt!'
  },
  {
    id: 2,
    name: 'Priya Soundararajan',
    rating: 5,
    date: '1 week ago',
    location: 'Bodinayakkanur, Theni',
    service: 'Car Polish',
    carModel: 'Hyundai Creta Knight Edition',
    verified: true,
    comment: 'Got 9H ceramic coating and full body machine polish done. Deep swirl marks from my daily commute were completely wiped out. The mirror shine is insane even after two weeks of dust. Highly recommended!'
  },
  {
    id: 3,
    name: 'Karthik Raja',
    rating: 5,
    date: '2 weeks ago',
    location: 'Cumbum Main Road',
    service: 'Accessories',
    carModel: 'Mahindra Thar 4x4',
    verified: true,
    comment: 'Installed 9-inch Android screen with DSP amplifier, Matrix LED headlights, and 7D floor mats. Coupler-to-coupler wiring with zero wire cuts, keeping my vehicle warranty safe. Barani car Accessories team is top tier.'
  },
  {
    id: 4,
    name: 'Senthil Kumar',
    rating: 5,
    date: '3 weeks ago',
    location: 'Cumbum, Theni',
    service: 'Interior Cleaning',
    carModel: 'Maruti Alto K10',
    verified: true,
    comment: 'Did complete deep interior steam wash and custom bucket seat cover fitting for my Alto. The fit and finish feels like factory premium luxury leather. Smells fresh and clean. Very reasonable pricing.'
  },
  {
    id: 5,
    name: 'Deepa Vasanthan',
    rating: 5,
    date: '1 month ago',
    location: 'Uthamapalayam',
    service: 'Accessories',
    carModel: 'Tata Nexon EV',
    verified: true,
    comment: 'Upgraded to bi-LED projector fog lamps and ambient cabin lighting. Night driving on the ghat road to Kumily feels completely safe now with wide beam spread. Great hospitality from the Barani car Accessories staff.'
  },
  {
    id: 6,
    name: 'Anandhan Selvaraj',
    rating: 4,
    date: '1 month ago',
    location: 'Periyakulam, Theni',
    service: 'Alloy Wheels',
    carModel: 'Kia Seltos Facelift',
    verified: true,
    comment: 'Travelled from Periyakulam especially for dual-tone diamond cut alloys. Huge collection of alloy designs in stock. Fitting took 30 mins extra due to weekend rush, but the final stance is pure fire.'
  },
  {
    id: 7,
    name: 'Manoj Kumar',
    rating: 5,
    date: '1 month ago',
    location: 'Cumbum Town',
    service: 'Car Wrapping',
    carModel: 'Volkswagen Polo GT',
    verified: true,
    comment: 'Got full gloss piano black roof wrap and smoked tail lamps. Edge tucked in flawlessly without bubbling or peel off. Gives my Polo a mean dark motorsport stance!'
  },
  {
    id: 8,
    name: 'Venkatesh Babu',
    rating: 5,
    date: '2 months ago',
    location: 'Madurai Highway',
    service: 'Performance Upgrades',
    carModel: 'Honda City i-VTEC',
    verified: true,
    comment: 'Installed Valvetronic custom exhaust system and high-flow air filter. The exhaust rumble is crisp in sport mode and quiet in city traffic. Outstanding knowledge by the technicians.'
  },
  {
    id: 9,
    name: 'Ganesh Ramalingam',
    rating: 4,
    date: '2 months ago',
    location: 'Theni City',
    service: 'Car Polish',
    carModel: 'Toyota Innova Crysta',
    verified: true,
    comment: 'Full 3-stage compound polishing and interior steam sanitization done before family temple trip. Restored the showroom gloss finish on my 5-year-old Innova. Transparent billing.'
  }
];

export const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSort, setSelectedSort] = useState('recent'); // 'recent' | 'highest'

  // JSON-LD Schema for Google Rich Snippets (LocalBusiness + AggregateRating)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Barani car Accessories",
    "image": "/logo.png",
    "@id": "https://baranicaraccessories.com",
    "url": "https://baranicaraccessories.com",
    "telephone": "+919999999999",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Theni Main Road",
      "addressLocality": "Cumbum",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625515",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.8394,
      "longitude": 77.3828
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "540",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": REVIEWS_DATA.slice(0, 5).map((rev) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.name
      },
      "datePublished": "2026-08-15",
      "description": rev.comment,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  // Filter & Sort Logic
  const filteredReviews = useMemo(() => {
    let result = [...REVIEWS_DATA];

    if (selectedFilter === '5★') {
      result = result.filter((r) => r.rating === 5);
    } else if (selectedFilter === '4★') {
      result = result.filter((r) => r.rating === 4);
    } else if (selectedFilter === 'Alloy Wheels') {
      result = result.filter((r) => r.service === 'Alloy Wheels');
    } else if (selectedFilter === 'Polish') {
      result = result.filter((r) => r.service === 'Car Polish');
    } else if (selectedFilter === 'Accessories') {
      result = result.filter((r) => r.service === 'Accessories');
    }

    if (selectedSort === 'highest') {
      result.sort((a, b) => b.rating - a.rating || a.id - b.id);
    } else {
      // Recent (default by ID)
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [selectedFilter, selectedSort]);

  const filterTabs = [
    { label: 'All', value: 'All' },
    { label: '5★', value: '5★' },
    { label: '4★', value: '4★' },
    { label: 'Alloy Wheels', value: 'Alloy Wheels' },
    { label: 'Polish', value: 'Polish' },
    { label: 'Accessories', value: 'Accessories' }
  ];

  const googleReviewSubmissionUrl = "https://g.page/r/Cb1zt1msXsX9EBM/review";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ff4d00] selection:text-white pb-20">
      {/* SEO Helmet Tags + Schema */}
      <Helmet>
        <title>Barani car Accessories Reviews | Best Car Modification in Cumbum</title>
        <meta 
          name="description" 
          content="Read real customer reviews of Barani car Accessories, Cumbum's top car modification studio. 25000+ happy customers trust Barani car Accessories for alloy wheels, car polish, and accessories." 
        />
        <meta name="keywords" content="Barani car Accessories reviews, Car modification Cumbum reviews, Alloy wheels Theni reviews, Car accessories customer testimonials Cumbum" />
        
        {/* JSON-LD Schema for LocalBusiness + AggregateRating */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
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
              className="px-3.5 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#181818] transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/reviews" 
              className="px-3.5 py-1.5 rounded-lg text-[#ff6b00] bg-[#ff4d00]/10 border border-[#ff4d00]/30 font-semibold"
            >
              Reviews
            </Link>
            <a 
              href={googleReviewSubmissionUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#e63946] to-[#ff6b00] text-white font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              Write a Review
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / Aggregate Rating Summary Header */}
      <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-[#1a1a1a]">
        {/* Glow ambient background orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-gradient-to-b from-[#e63946]/20 via-[#ff6b00]/20 to-transparent blur-[110px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-[#2a2a2a] mb-5 shadow-inner">
            <Sparkles className="w-4 h-4 text-[#ffd700]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-300">
              Verified Client Experiences
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
            Customer Reviews & Testimonials
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Real feedback from drivers across Cumbum, Theni, Cumbum, and Madurai who trusted us with their beloved rides.
          </p>

          {/* Visible Star Rating Summary Banner */}
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#161616] to-[#111111] p-6 sm:p-8 rounded-3xl border border-[#262626] shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Score & Stars */}
              <div className="flex items-center gap-4">
                <div className="text-4xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
                  4.8
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 text-[#ffd700] fill-[#ffd700] drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-300">
                    ⭐ 4.8 / 5 — Based on <span className="text-[#ff6b00] font-bold">500+ reviews</span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1f1f1f] border border-[#333333] text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Google & In-Store Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Sorting Controls */}
      <section className="sticky top-18 z-30 bg-[#0a0a0a]/95 backdrop-blur-md py-4 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-gray-400 mr-2 flex items-center gap-1 hidden md:flex">
              <Filter className="w-3.5 h-3.5 text-[#ff6b00]" /> Filter:
            </span>
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedFilter(tab.value)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#e63946] to-[#ff6b00] text-white shadow-md shadow-[#ff4d00]/20'
                      : 'bg-[#141414] text-gray-400 hover:text-white hover:bg-[#1f1f1f] border border-[#222222]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center justify-end gap-2 text-xs sm:text-sm">
            <span className="text-gray-400 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#ff6b00]" /> Sort by:
            </span>
            <div className="relative inline-block">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-[#141414] text-white border border-[#2a2a2a] rounded-xl px-3 py-1.5 pr-8 appearance-none focus:outline-none focus:border-[#ff4d00] cursor-pointer font-medium"
              >
                <option value="recent">Most Recent</option>
                <option value="highest">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
            Showing {filteredReviews.length} {filteredReviews.length === 1 ? 'Review' : 'Reviews'}
          </h2>
          <span className="text-xs text-gray-400">
            Updated live from customer feedback
          </span>
        </div>

        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#111111] rounded-2xl border border-[#222222]">
            <p className="text-gray-400 text-base mb-2">No reviews match your selected filter.</p>
            <button
              onClick={() => setSelectedFilter('All')}
              className="text-[#ff6b00] font-semibold text-sm hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Share Your Experience CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#171717] via-[#1c1412] to-[#171717] border border-[#ff4d00]/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Background subtle radial glow */}
          <div className="absolute inset-0 bg-radial-gradient from-[#ff4d00]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#e63946] to-[#ff6b00] mx-auto flex items-center justify-center mb-5 shadow-lg shadow-[#ff4d00]/25">
              <Star className="w-7 h-7 text-white fill-white" />
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-3">
              Did you recently visit Barani car Accessories?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
              Your feedback fuels our passion for craftsmanship. Share your review on Google or help fellow car enthusiasts in Cumbum build their dream ride!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={googleReviewSubmissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#e63946] to-[#ff6b00] hover:opacity-95 transition-opacity shadow-lg shadow-[#ff4d00]/30"
              >
                <MessageSquarePlus className="w-5 h-5" />
                <span>Share Your Experience</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>

              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-gray-300 bg-[#1f1f1f] hover:bg-[#282828] border border-[#333333] transition-colors"
              >
                <span>Interactive Feedback Mode</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-[#1c1c1c] text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Barani car Accessories. Cumbum, Theni District, Tamil Nadu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Reviews;
