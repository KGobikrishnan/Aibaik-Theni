import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  CheckCircle2,
  Star,
  Clock,
  ChevronRight,
  Mic,
  Sparkles,
  Send
} from 'lucide-react';

// Custom SVG Rating Icons
const FiveStarBadgeIcon = () => (
  <svg viewBox="0 0 36 36" className="w-9 h-9 shrink-0" fill="none">
    <rect width="36" height="36" rx="12" fill="#ECFDF5" />
    <path
      d="M18 8.5L20.7 14L26.8 14.9L22.4 19.2L23.4 25.3L18 22.4L12.6 25.3L13.6 19.2L9.2 14.9L15.3 14L18 8.5Z"
      fill="#059669"
      stroke="#047857"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const FourStarBadgeIcon = () => (
  <svg viewBox="0 0 36 36" className="w-9 h-9 shrink-0" fill="none">
    <rect width="36" height="36" rx="12" fill="#FEF3C7" />
    <circle cx="18" cy="18" r="8.5" stroke="#D97706" strokeWidth="2" />
    <circle cx="15" cy="16" r="1.2" fill="#D97706" />
    <circle cx="21" cy="16" r="1.2" fill="#D97706" />
    <path d="M14.5 20.5C15.5 22 17 22.5 18 22.5C19 22.5 20.5 22 21.5 20.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FeedbackShieldIcon = () => (
  <svg viewBox="0 0 36 36" className="w-9 h-9 shrink-0" fill="none">
    <rect width="36" height="36" rx="12" fill="#FFE4E6" />
    <path
      d="M18 9L25 12V17.5C25 22 22 25.5 18 27C14 25.5 11 22 11 17.5V12L18 9Z"
      stroke="#E11D48"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M18 14.5V18.5" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="21.5" r="1" fill="#E11D48" />
  </svg>
);

export const CustomerWelcome = () => {
  const { business, setCustomerStep, setSelectedRating } = useApp();

  const handleSelectRating = (rating) => {
    setSelectedRating(rating);
    setCustomerStep('services_selection');
  };

  return (
    <div className="w-full flex flex-col gap-3.5 animate-fade-in">
      {/* CARD 1: BUSINESS PROFILE & RATING HERO */}
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-5">
        {/* Top Business Row */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-[#EFECE6]">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#141210] border border-[#E5DFD3] flex items-center justify-center">
              {business.logoUrl ? (
                <img
                  src={business.logoUrl}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-black text-white text-2xl font-['Outfit']">K</span>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-0.5 ring-2 ring-white">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="min-w-0 flex-1 text-left">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-md text-[10px] font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3 h-3" /> {business.branch || 'Verified Store'}
            </div>
            <h1 className="text-xl font-black text-[#141210] tracking-tight leading-tight truncate">
              {business.name}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-[#6B655C] font-semibold mt-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="text-[#141210] font-bold">{business.rating || '4.9'}</span>
              <span>({business.totalReviews || '2,450'}+ Google Reviews)</span>
            </div>
          </div>
        </div>

        {/* Hero Question */}
        <div className="mt-4 mb-3.5 text-left">
          <h2 className="text-2xl font-black text-[#141210] tracking-tight leading-snug">
            How was your experience today?
          </h2>
          <p className="text-xs text-[#6B655C] font-medium mt-1">
            Tap your rating below — takes just 15 seconds.
          </p>
        </div>

        {/* 3 Tactile Horizontal Rating Cards */}
        <div className="flex flex-col gap-2.5">
          {/* 5 Stars */}
          <button
            onClick={() => handleSelectRating(5)}
            className="group w-full flex items-center justify-between p-3.5 bg-[#FAF9F6] hover:bg-emerald-50/70 border border-[#E5DFD3] hover:border-emerald-500 rounded-2xl transition-all cursor-pointer active:scale-[0.99] text-left"
          >
            <div className="flex items-center gap-3">
              <FiveStarBadgeIcon />
              <div>
                <div className="font-extrabold text-sm text-[#141210] group-hover:text-emerald-900">
                  Super Loved It!
                </div>
                <div className="text-[11px] font-semibold text-[#6B655C]">
                  5-Star Experience • Share on Google
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8C857B] group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* 4 Stars */}
          <button
            onClick={() => handleSelectRating(4)}
            className="group w-full flex items-center justify-between p-3.5 bg-[#FAF9F6] hover:bg-amber-50/70 border border-[#E5DFD3] hover:border-amber-500 rounded-2xl transition-all cursor-pointer active:scale-[0.99] text-left"
          >
            <div className="flex items-center gap-3">
              <FourStarBadgeIcon />
              <div>
                <div className="font-extrabold text-sm text-[#141210] group-hover:text-amber-900">
                  Good Quality
                </div>
                <div className="text-[11px] font-semibold text-[#6B655C]">
                  4-Star Experience • Quick Review
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8C857B] group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Private Feedback */}
          <button
            onClick={() => setCustomerStep('bad_questions')}
            className="group w-full flex items-center justify-between p-3.5 bg-[#FAF9F6] hover:bg-rose-50/70 border border-[#E5DFD3] hover:border-rose-400 rounded-2xl transition-all cursor-pointer active:scale-[0.99] text-left"
          >
            <div className="flex items-center gap-3">
              <FeedbackShieldIcon />
              <div>
                <div className="font-extrabold text-sm text-[#141210] group-hover:text-rose-900">
                  I have feedback
                </div>
                <div className="text-[11px] font-semibold text-[#6B655C]">
                  Send privately to store manager
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8C857B] group-hover:text-rose-700 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Micro Reassurance */}
        <div className="flex items-center justify-center gap-3 text-[11px] text-[#6B655C] font-semibold mt-4 pt-3 border-t border-[#EFECE6]">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-700" /> ~15s</span>
          <span>•</span>
          <span>No login needed</span>
          <span>•</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> 100% Private</span>
        </div>
      </div>

      {/* CARD 2: HOW KURAL WORKS (3-STEP BENTO) */}
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-4">
        <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#6B655C] mb-3 text-center">
          How Kural AI Works
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-2xl bg-[#F6F4EF] border border-[#E5DFD3]/70 flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-white border border-[#E5DFD3] flex items-center justify-center text-emerald-700 mb-1.5">
              <Mic className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-[#141210]">1. Speak / Tap</div>
            <div className="text-[9.5px] text-[#6B655C] font-medium mt-0.5">Tamil or English</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#F6F4EF] border border-[#E5DFD3]/70 flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-white border border-[#E5DFD3] flex items-center justify-center text-amber-600 mb-1.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-[#141210]">2. AI Drafts</div>
            <div className="text-[9.5px] text-[#6B655C] font-medium mt-0.5">SEO-ready text</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#F6F4EF] border border-[#E5DFD3]/70 flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-white border border-[#E5DFD3] flex items-center justify-center text-[#141210] mb-1.5">
              <Send className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-[#141210]">3. 1-Tap Post</div>
            <div className="text-[9.5px] text-[#6B655C] font-medium mt-0.5">Copy &amp; Open</div>
          </div>
        </div>
      </div>
    </div>
  );
};
