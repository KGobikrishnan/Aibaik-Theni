import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const LANG_COPY = {
  tanglish: {
    eyebrow: 'SHARE YOUR EXPERIENCE',
    question: 'Ungal experience eppadi irunthuchu?',
    moods: { good: 'Good', average: 'Average', bad: 'Bad' },
    status: {
      5: '5.0 — Super! Romba pudichiruku',
      4: '4.0 — Nalla irunthuchu!',
      3: '3.0 — Paravala, improve pannalam',
      2: '2.0 — Konjam disappointed',
      1: '1.0 — Sorry! Direct-ah owner kitta sollunga'
    },
    ctaHigh: 'Continue with Kural AI',
    ctaLow: 'Send Private Feedback',
    footerPrefix: 'Speak naturally in Tamil, Tanglish, or English — ',
    footerBold: 'Kural turns your voice into a polished Google Review in 10 seconds.',
    meta: ['Voice or Tap', 'No Login Required', 'Kural (குரல்)']
  },
  tamil: {
    eyebrow: 'உங்கள் அனுபவத்தைப் பகிரவும்',
    question: 'உங்கள் அனுபவம் எப்படி இருந்தது?',
    moods: { good: 'நன்று', average: 'பரவாயில்லை', bad: 'சரியில்லை' },
    status: {
      5: '5.0 — அருமை! மிகவும் பிடித்தது',
      4: '4.0 — நன்றாக இருந்தது!',
      3: '3.0 — பரவாயில்லை, மேம்படுத்தலாம்',
      2: '2.0 — சற்று ஏமாற்றம்',
      1: '1.0 — மன்னிக்கவும்! உரிமையாளரிடம் நேரடியாக தெரிவிக்கவும்'
    },
    ctaHigh: 'Kural AI உடன் தொடரவும்',
    ctaLow: 'நேரடி கருத்து அனுப்பவும்',
    footerPrefix: 'தமிழ், Tanglish அல்லது ஆங்கிலத்தில் இயல்பாகப் பேசுங்கள் — ',
    footerBold: 'Kural உங்கள் குரலை 10 வினாடிகளில் Google Review-ஆக மாற்றும்.',
    meta: ['பேச்சு அல்லது தட்டு', 'Login தேவையில்லை', 'Kural (குரல்)']
  },
  en: {
    eyebrow: 'SHARE YOUR EXPERIENCE',
    question: 'How was your experience today?',
    moods: { good: 'Good', average: 'Average', bad: 'Bad' },
    status: {
      5: '5.0 — Super! Loved it',
      4: '4.0 — Good quality & service',
      3: '3.0 — Okay, room to improve',
      2: '2.0 — Somewhat disappointed',
      1: '1.0 — Sorry! Tell the owner directly'
    },
    ctaHigh: 'Continue with Kural AI',
    ctaLow: 'Send Private Feedback',
    footerPrefix: 'Speak naturally in Tamil, Tanglish, or English — ',
    footerBold: 'Kural turns your voice into a polished Google Review in 10 seconds.',
    meta: ['Voice or Tap', 'No Login Required', 'Kural (குரல்)']
  }
};

const toTitleCase = (str = '') =>
  str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

export const CustomerWelcome = () => {
  const { business, setCustomerStep, setSelectedRating, lang } = useApp();
  const [stars, setStars] = useState(5);
  const [logoError, setLogoError] = useState(false);

  const copy = LANG_COPY[lang] || LANG_COPY.tanglish;
  const displayName = toTitleCase(business.name || 'Aibaik Restaurant Theni');
  const initials = displayName
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const activeMood = stars >= 4 ? 'good' : stars === 3 ? 'average' : 'bad';

  const handleSelectMood = (mood) => {
    const mapped = mood === 'good' ? 5 : mood === 'average' ? 3 : 1;
    setStars(mapped);
    setSelectedRating(mapped);
  };

  const handleSelectStar = (num) => {
    setStars(num);
    setSelectedRating(num);
  };

  const handleContinue = () => {
    setSelectedRating(stars);
    if (stars >= 4) {
      setCustomerStep('services_selection');
    } else {
      setCustomerStep('bad_questions');
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* SINGLE ELEVATED TACTILE WHITE SHEET */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.06)] border border-black/[0.04] overflow-hidden"
      >
        {/* Editorial Shop Identity Header with Soft Royal Blue Tint */}
        <div className="px-7 pt-7 pb-6 bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] border-b border-blue-100/80 flex items-center gap-3.5 text-left">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white font-bold tracking-tight text-base flex items-center justify-center shadow-md shadow-blue-900/20 shrink-0 overflow-hidden">
            {business.logoUrl && !logoError ? (
              <img
                src={business.logoUrl}
                alt={displayName}
                onError={() => setLogoError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h1 className="text-[19px] font-bold tracking-[-0.02em] text-slate-900 leading-tight truncate">
                {displayName}
              </h1>
              <BadgeCheck className="w-4 h-4 text-[#059669] shrink-0" strokeWidth={1.75} />
            </div>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              Theni • {business.rating || '3.8'} ★ on Google ({business.totalReviews || 215}+ reviews)
            </p>
          </div>
        </div>

        {/* Unified Tactile Star & Mood Interaction */}
        <div className="px-7 py-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.12em] font-semibold text-slate-400 mb-2">
            {copy.eyebrow}
          </div>
          <h2 className="text-[22px] font-bold tracking-[-0.02em] text-slate-900 leading-snug">
            {copy.question}
          </h2>

          {/* 5 Floating Tactile Stars (No Square Borders) */}
          <div className="flex items-center justify-center gap-3 my-6">
            {[1, 2, 3, 4, 5].map((num) => {
              const isFilled = num <= stars;
              return (
                <motion.button
                  key={num}
                  type="button"
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 24 }}
                  onClick={() => handleSelectStar(num)}
                  className="w-11 h-11 flex items-center justify-center cursor-pointer focus:outline-none"
                  aria-label={`${num} stars`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-9 h-9 transition-colors duration-200"
                    fill={isFilled ? '#F59E0B' : '#E2E8F0'}
                    stroke={isFilled ? '#F59E0B' : '#E2E8F0'}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </motion.button>
              );
            })}
          </div>

          {/* Single Morphing Sentiment Strip */}
          <div className="inline-flex items-center bg-slate-100/80 p-1 rounded-full border border-slate-200/70 text-xs font-medium">
            {[
              {
                id: 'good',
                label: copy.moods.good,
                activeClass: 'bg-[#EFF6FF] text-[#1E3A8A] ring-1 ring-[#2563EB]/30 font-semibold'
              },
              {
                id: 'average',
                label: copy.moods.average,
                activeClass: 'bg-amber-50 text-amber-800 ring-1 ring-amber-300 font-semibold'
              },
              {
                id: 'bad',
                label: copy.moods.bad,
                activeClass: 'bg-rose-50 text-rose-700 ring-1 ring-rose-300 font-semibold'
              }
            ].map((m) => {
              const isActive = activeMood === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleSelectMood(m.id)}
                  className={`relative px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    isActive ? m.activeClass : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          {/* Smooth AnimatePresence Caption Line */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`${stars}-${lang}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="mt-3 text-xs font-semibold text-slate-600"
            >
              {copy.status[stars]}
            </motion.p>
          </AnimatePresence>

          {/* Signature Royal Blue Gradient CTA Button */}
          <button
            type="button"
            onClick={handleContinue}
            className="w-full mt-7 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#172554] hover:to-[#1D4ED8] text-white font-semibold text-[15px] tracking-[-0.01em] shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99]"
          >
            <span>{stars >= 4 ? copy.ctaHigh : copy.ctaLow}</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>
      </motion.div>

      {/* Borderless "About Kural" Brand Signature */}
      <footer className="max-w-[420px] mx-auto px-7 pt-6 pb-8 text-center">
        <p className="text-xs leading-relaxed text-slate-500">
          {copy.footerPrefix}
          <span className="text-[#1E3A8A] font-semibold">{copy.footerBold}</span>
        </p>

        <div className="w-8 h-[1px] bg-blue-200/80 mx-auto my-4" />

        <div className="flex items-center justify-center gap-3 text-[11px] font-medium text-slate-400">
          <span>{copy.meta[0]}</span>
          <span>•</span>
          <span>{copy.meta[1]}</span>
          <span>•</span>
          <span className="text-[#1E3A8A] font-semibold">{copy.meta[2]}</span>
        </div>
      </footer>
    </div>
  );
};
