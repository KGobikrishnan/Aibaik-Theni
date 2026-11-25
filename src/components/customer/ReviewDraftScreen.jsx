import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowLeft,
  Sparkles,
  Star,
  Copy,
  ExternalLink,
  Edit2,
  RotateCw,
  Check
} from 'lucide-react';

export const ReviewDraftScreen = () => {
  const {
    setCustomerStep,
    aiDraft,
    setAiDraft,
    aiTones,
    aiKeywords,
    generateLiveAiReview,
    isGeneratingAi,
    business,
    setShowGoogleModal,
    selectedServices,
    selectedRating
  } = useApp();

  const [activeTone, setActiveTone] = useState('seo');
  const [isEditingCard, setIsEditingCard] = useState(false);

  const serviceContext = selectedServices && selectedServices.length > 0
    ? selectedServices.join(' & ')
    : 'car modifications & accessories';

  const is5Star = Number(selectedRating) >= 5;

  const tones = [
    {
      id: 'seo',
      title: 'Local SEO',
      draft: aiTones?.seo || (is5Star
        ? `5-star experience at ${business.name}! Outstanding work on ${serviceContext}. Clean finish, genuine products, and friendly staff. Highly recommended!`
        : `Good 4-star experience at ${business.name}. Got ${serviceContext} done with neat installation and fair pricing.`)
    },
    {
      id: 'enthusiastic',
      title: 'Warm',
      draft: aiTones?.enthusiastic || (is5Star
        ? `Loved visiting ${business.name}! The ${serviceContext} work turned out amazing. Super friendly team and fast service!`
        : `Really happy with the service at ${business.name}! The ${serviceContext} work turned out great.`)
    },
    {
      id: 'short',
      title: 'Short',
      draft: aiTones?.short || (is5Star
        ? `Great visit to ${business.name}. Got ${serviceContext} done. Fast service and top quality!`
        : `Decent and prompt service for ${serviceContext} at ${business.name}. Fair pricing.`)
    },
    {
      id: 'detailed',
      title: 'Detailed',
      draft: aiTones?.detailed || (is5Star
        ? `Visited ${business.name} today for ${serviceContext} and was super impressed. Top-tier craftsmanship, genuine parts, and great value for money.`
        : `Got ${serviceContext} done at ${business.name}. Skilled team, genuine parts, and prompt delivery.`)
    }
  ];

  const activeKeywords = aiKeywords && aiKeywords.length > 0
    ? aiKeywords
    : ['great service', 'friendly staff', 'fast checkout', 'clean finish'];

  useEffect(() => {
    const selectedToneObj = tones.find((t) => t.id === activeTone);
    if (selectedToneObj && selectedToneObj.draft) {
      setAiDraft(selectedToneObj.draft);
    }
  }, [aiTones, activeTone]);

  const handleSelectTone = (tone) => {
    setActiveTone(tone.id);
    setAiDraft(tone.draft);
    setIsEditingCard(false);
  };

  const handleRegenerate = () => {
    generateLiveAiReview();
  };

  const handleProceedToGoogle = () => {
    if (aiDraft) {
      navigator.clipboard.writeText(aiDraft);
    }
    const url = business.googlePlaceUrl || 'https://g.page/r/Cb1zt1msXsX9EBM/review';
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowGoogleModal(true);
  };

  return (
    <div className="w-full flex flex-col gap-3.5 animate-fade-in">
      {/* Royal Blue Header Card */}
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setCustomerStep('good_features')}
              className="flex items-center gap-1.5 text-xs font-bold text-blue-100 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <button
              onClick={handleRegenerate}
              disabled={isGeneratingAi}
              className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer disabled:opacity-50"
            >
              <RotateCw className={`w-3 h-3 ${isGeneratingAi ? 'animate-spin' : ''}`} />
              <span>{isGeneratingAi ? 'Crafting...' : 'New Variation'}</span>
            </button>
          </div>

          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/15 text-amber-300 border border-white/20 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Kural Review Studio</span>
            </div>
            <h2 className="text-xl font-black text-white tracking-tight">
              Your AI-Crafted Review
            </h2>
            <p className="text-xs text-blue-100 font-medium mt-0.5">
              Pick a tone or edit before posting to Google Maps.
            </p>
          </div>

          {/* Segmented Tone Switcher */}
          <div className="grid grid-cols-4 gap-1 bg-blue-950/40 p-1 rounded-2xl border border-white/15 mt-4">
            {tones.map((t) => {
              const isSelected = activeTone === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelectTone(t)}
                  className={`py-2 px-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#1E3A8A] shadow-xs'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {t.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Google Maps Preview Body */}
        <div className="p-5 text-left">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-[#1E40AF] font-black flex items-center justify-center text-xs">
                G
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">Google Maps Preview</div>
                <div className="text-[10.5px] text-slate-500 font-medium">{business.name}</div>
              </div>
            </div>

            <button
              onClick={() => setIsEditingCard(!isEditingCard)}
              className="text-xs font-bold text-[#1E40AF] hover:text-[#1E3A8A] flex items-center gap-1 cursor-pointer bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200"
            >
              {isEditingCard ? <Check className="w-3.5 h-3.5" /> : <Edit2 className="w-3.5 h-3.5" />}
              <span>{isEditingCard ? 'Done' : 'Edit'}</span>
            </button>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 text-amber-400 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-slate-900 text-xs font-black ml-1">{selectedRating || 5}.0</span>
          </div>

          {/* Draft Area */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 mb-3 min-h-[95px] flex items-center">
            {isGeneratingAi ? (
              <div className="w-full space-y-2 py-1">
                <div className="flex items-center gap-2 text-[#1E40AF] text-xs font-bold animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Kural AI is crafting your review...</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full w-full animate-pulse" />
                <div className="h-2 bg-slate-200 rounded-full w-3/4 animate-pulse" />
              </div>
            ) : isEditingCard ? (
              <textarea
                value={aiDraft}
                onChange={(e) => setAiDraft(e.target.value)}
                rows={4}
                className="w-full text-xs font-medium text-slate-900 bg-white p-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-[#1E40AF]"
              />
            ) : (
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                &quot;{aiDraft}&quot;
              </p>
            )}
          </div>

          {/* Keywords */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {activeKeywords.slice(0, 4).map((kw, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200"
              >
                #{kw.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Copy & Open Google CTA */}
      <button
        onClick={handleProceedToGoogle}
        disabled={isGeneratingAi}
        className="w-full py-4 px-5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-2xl font-extrabold text-sm shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99] disabled:opacity-50"
      >
        <Copy className="w-4 h-4 text-amber-300" />
        <span>Copy &amp; Open Google Review</span>
        <ExternalLink className="w-4 h-4 text-amber-300" />
      </button>
      <p className="text-[11px] text-center text-slate-500 font-medium">
        Automatically copies text &amp; opens Google Maps in 1 tap.
      </p>
    </div>
  );
};
