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

// Custom Luxury SVG Rating Icons
const FiveStarBadgeIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0" fill="none">
    <rect width="40" height="40" rx="14" fill="url(#goldGrad)" fillOpacity="0.16" />
    <rect x="0.5" y="0.5" width="39" height="39" rx="13.5" stroke="#FBBF24" strokeOpacity="0.35" />
    <path
      d="M20 9.5L23 15.6L29.7 16.6L24.8 21.3L26 28L20 24.8L14 28L15.2 21.3L10.3 16.6L17 15.6L20 9.5Z"
      fill="#FBBF24"
      stroke="#FDE68A"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="40" y2="40">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#FDE047" />
      </linearGradient>
    </defs>
  </svg>
);

const FourStarBadgeIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0" fill="none">
    <rect width="40" height="40" rx="14" fill="#6366F1" fillOpacity="0.15" />
    <rect x="0.5" y="0.5" width="39" height="39" rx="13.5" stroke="#818CF8" strokeOpacity="0.35" />
    <circle cx="20" cy="20" r="9.5" stroke="#A5B4FC" strokeWidth="2" />
    <circle cx="16.8" cy="17.8" r="1.3" fill="#A5B4FC" />
    <circle cx="23.2" cy="17.8" r="1.3" fill="#A5B4FC" />
    <path d="M16 22.5C17.2 24.2 18.8 24.8 20 24.8C21.2 24.8 22.8 24.2 24 22.5" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FeedbackShieldIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0" fill="none">
    <rect width="40" height="40" rx="14" fill="#F43F5E" fillOpacity="0.14" />
    <rect x="0.5" y="0.5" width="39" height="39" rx="13.5" stroke="#FB7185" strokeOpacity="0.3" />
    <path
      d="M20 10L28 13.5V19.5C28 24.5 24.5 28.5 20 30C15.5 28.5 12 24.5 12 19.5V13.5L20 10Z"
      stroke="#FDA4AF"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M20 16V20.5" stroke="#FDA4AF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="23.8" r="1.1" fill="#FDA4AF" />
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
      {/* CARD 1: LUXURY BUSINESS PROFILE & RATING HERO */}
      <div className="w-full glass-card rounded-3xl p-5 relative overflow-hidden">
        {/* Subtle top-right gold glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/15 blur-2xl rounded-full pointer-events-none" />

        {/* Top Business Row */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-900 border border-white/15 shadow-lg flex items-center justify-center">
              {business.logoUrl ? (
                <img
                  src={business.logoUrl}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-black text-amber-400 text-2xl font-['Outfit']">K</span>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-zinc-950 rounded-full p-0.5 ring-2 ring-[#09090B]">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>

          <div className="min-w-0 flex-1 text-left">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-md text-[10px] font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3 h-3" /> {business.branch || 'Verified Store'}
            </div>
            <h1 className="text-xl font-black text-white tracking-tight leading-tight truncate">
              {business.name}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold mt-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-white font-bold">{business.rating || '4.9'}</span>
              <span>({business.totalReviews || '2,450'}+ Google Reviews)</span>
            </div>
          </div>
        </div>

        {/* Hero Question */}
        <div className="mt-4 mb-4 text-left">
          <h2 className="text-2xl font-black text-white tracking-tight leading-snug">
            How was your experience today?
          </h2>
          <p className="text-xs text-zinc-400 font-medium mt-1">
            Tap your rating below — AI crafts your review in 15 seconds.
          </p>
        </div>

        {/* 3 Luxury Interactive Rating Cards */}
        <div className="flex flex-col gap-2.5">
          {/* 5 Stars */}
          <button
            onClick={() => handleSelectRating(5)}
            className="group w-full flex items-center justify-between p-3.5 bg-white/[0.04] hover:bg-amber-400/[0.08] border border-white/10 hover:border-amber-400/50 rounded-2xl transition-all cursor-pointer active:scale-[0.99] text-left shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <FiveStarBadgeIcon />
              <div>
                <div className="font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors">
                  Super Loved It!
                </div>
                <div className="text-[11px] font-medium text-zinc-400">
                  5-Star Experience • Share on Google
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* 4 Stars */}
          <button
            onClick={() => handleSelectRating(4)}
            className="group w-full flex items-center justify-between p-3.5 bg-white/[0.04] hover:bg-indigo-500/[0.08] border border-white/10 hover:border-indigo-400/50 rounded-2xl transition-all cursor-pointer active:scale-[0.99] text-left shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <FourStarBadgeIcon />
              <div>
                <div className="font-extrabold text-sm text-white group-hover:text-indigo-300 transition-colors">
                  Good Quality
                </div>
                <div className="text-[11px] font-medium text-zinc-400">
                  4-Star Experience • Quick Review
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Private Feedback */}
          <button
            onClick={() => setCustomerStep('bad_questions')}
            className="group w-full flex items-center justify-between p-3.5 bg-white/[0.04] hover:bg-rose-500/[0.08] border border-white/10 hover:border-rose-400/40 rounded-2xl transition-all cursor-pointer active:scale-[0.99] text-left shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <FeedbackShieldIcon />
              <div>
                <div className="font-extrabold text-sm text-white group-hover:text-rose-300 transition-colors">
                  I have feedback
                </div>
                <div className="text-[11px] font-medium text-zinc-400">
                  Send privately to store manager
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-300 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Micro Reassurance */}
        <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-400 font-semibold mt-4 pt-3 border-t border-white/10">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-400" /> ~15s</span>
          <span className="text-zinc-600">•</span>
          <span>No login needed</span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Private</span>
        </div>
      </div>

      {/* CARD 2: HOW KURAL WORKS (LUXURY BENTO) */}
      <div className="w-full glass-card rounded-3xl p-4">
        <div className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mb-3 text-center">
          How Kural AI Works
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-1.5">
              <Mic className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-white">1. Speak / Tap</div>
            <div className="text-[9.5px] text-zinc-400 font-medium mt-0.5">Tamil or English</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400 mb-1.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-white">2. AI Drafts</div>
            <div className="text-[9.5px] text-zinc-400 font-medium mt-0.5">SEO-ready text</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-1.5">
              <Send className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-white">3. 1-Tap Post</div>
            <div className="text-[9.5px] text-zinc-400 font-medium mt-0.5">Copy &amp; Open</div>
          </div>
        </div>
      </div>
    </div>
  );
};
