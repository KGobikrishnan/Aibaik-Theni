import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, ShieldCheck, Mic, Sparkles, Send } from 'lucide-react';

const LANG_COPY = {
  tanglish: {
    question: 'Ungal experience eppadi irunthuchu?',
    ctaHigh: 'Continue & Write AI Review',
    ctaLow: 'Send Private Feedback to Owner',
    labels: {
      5: '5.0 ★ — Super! Romba Pudichiruku',
      4: '4.0 ★ — Nalla Irunthuchu!',
      3: '3.0 ★ — Okay, Improve Pannalam',
      2: '2.0 ★ —Konjam Disappointed',
      1: '1.0 ★ — Romba Mosam, Sorry'
    }
  },
  tamil: {
    question: 'உங்கள் அனுபவம் எப்படி இருந்தது?',
    ctaHigh: 'தொடர்ந்து AI Review எழுதவும்',
    ctaLow: 'கடை உரிமையாளருக்கு நேரடியாக தெரிவிக்கவும்',
    labels: {
      5: '5.0 ★ — அருமை! மிகவும் பிடித்தது',
      4: '4.0 ★ — நன்றாக இருந்தது!',
      3: '3.0 ★ — பரவாயில்லை, மேம்படுத்தலாம்',
      2: '2.0 ★ — சற்று ஏமாற்றம்',
      1: '1.0 ★ — மிகவும் மோசம்'
    }
  },
  en: {
    question: 'How was your experience today?',
    ctaHigh: 'Continue & Write AI Review',
    ctaLow: 'Send Private Feedback to Owner',
    labels: {
      5: '5.0 ★ — Super! Loved It',
      4: '4.0 ★ — Good Quality & Service',
      3: '3.0 ★ — Okay, Can Improve',
      2: '2.0 ★ — Not Satisfied',
      1: '1.0 ★ — Poor Experience'
    }
  }
};

export const CustomerWelcome = () => {
  const { business, setCustomerStep, setSelectedRating } = useApp();
  const [lang, setLang] = useState('tanglish');
  const [stars, setStars] = useState(5);

  const copy = LANG_COPY[lang];
  const initials = (business.name || 'K')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const handleContinue = () => {
    setSelectedRating(stars);
    if (stars >= 4) {
      setCustomerStep('services_selection');
    } else {
      setCustomerStep('bad_questions');
    }
  };

  return (
    <div className="w-full flex flex-col gap-3.5 animate-fade-in">
      {/* MAIN CARD: ROYAL BLUE BANNER + CRISP WHITE BODY */}
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
        {/* Top Royal Blue Banner */}
        <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] p-5 text-white relative overflow-hidden">
          {/* Subtle decorative orbs */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 right-12 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />

          {/* Top Row: Kural Pill + Language Switcher */}
          <div className="flex items-center justify-between gap-2 mb-5 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs border border-white/20 text-xs font-extrabold">
              <span className="text-amber-400">★</span>
              <span>Kural</span>
              <span className="text-blue-100 font-bold">குரல்</span>
              <span className="flex items-end gap-0.5 ml-0.5 h-3">
                <span className="w-0.5 h-1.5 bg-amber-400 rounded-full" />
                <span className="w-0.5 h-3 bg-amber-400 rounded-full" />
                <span className="w-0.5 h-2 bg-amber-400 rounded-full" />
              </span>
            </div>

            {/* Language Switcher Pill */}
            <div className="inline-flex items-center bg-blue-950/40 p-0.5 rounded-full border border-white/15 text-[11px] font-bold">
              {[
                { id: 'tanglish', label: 'Tanglish' },
                { id: 'tamil', label: 'தமிழ்' },
                { id: 'en', label: 'EN' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLang(item.id)}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    lang === item.id
                      ? 'bg-white text-[#1E3A8A] shadow-xs'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Business Identity Row */}
          <div className="flex items-center gap-3.5 relative z-10 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FFFBEB] border-2 border-[#FDE68A] flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
              {business.logoUrl ? (
                <img
                  src={business.logoUrl}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-black text-[#1E3A8A] text-lg tracking-tight">
                  {initials}
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-xl font-black text-white tracking-tight leading-tight truncate">
                  {business.name}
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 text-[10px] font-bold">
                  Verified
                </span>
              </div>
              <p className="text-xs text-blue-100 font-medium mt-0.5 truncate">
                {business.branch || 'Main Branch'} • {business.category || 'Local Business'}
              </p>
            </div>
          </div>
        </div>

        {/* White Body: Interactive 5-Star Rating */}
        <div className="p-6 text-center">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            {copy.question}
          </h2>

          {/* 5 Interactive Amber Stars */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 my-5">
            {[1, 2, 3, 4, 5].map((num) => {
              const isSelected = stars === num;
              const isFilled = num <= stars;
              return (
                <button
                  key={num}
                  onClick={() => setStars(num)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                    isSelected
                      ? 'bg-[#FFFBEB] border-2 border-[#FDE68A] shadow-xs scale-105'
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                  aria-label={`${num} stars`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors ${
                      isFilled ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-slate-200 fill-slate-200'
                    }`}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Dynamic Rating Label */}
          <div className="text-sm font-extrabold text-[#D97706] mb-5">
            {copy.labels[stars]}
          </div>

          {/* Primary Action CTA */}
          <button
            onClick={handleContinue}
            className={`w-full py-3.5 px-5 rounded-2xl font-extrabold text-sm shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99] ${
              stars >= 4
                ? 'bg-[#1E40AF] hover:bg-[#1E3A8A] text-white'
                : 'bg-rose-600 hover:bg-rose-700 text-white'
            }`}
          >
            <span>{stars >= 4 ? copy.ctaHigh : copy.ctaLow}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Trust Footnote */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-semibold mt-4 pt-3 border-t border-slate-100">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>No login needed • 100% Secure</span>
          </div>
        </div>
      </div>

      {/* HOW KURAL WORKS 3-STEP STRIP */}
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xs p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1E40AF] flex items-center justify-center mb-1.5">
              <Mic className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-slate-900">1. Speak / Tap</div>
            <div className="text-[9.5px] text-slate-500 font-medium mt-0.5">Tamil or English</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-slate-900">2. AI Drafts</div>
            <div className="text-[9.5px] text-slate-500 font-medium mt-0.5">SEO-ready text</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
              <Send className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-extrabold text-slate-900">3. 1-Tap Post</div>
            <div className="text-[9.5px] text-slate-500 font-medium mt-0.5">Copy &amp; Open</div>
          </div>
        </div>
      </div>
    </div>
  );
};
