import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  DollarSign,
  Star,
  ThumbsUp,
  Clock,
  Volume2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Wrench,
  SprayCan,
  Mic,
  MicOff,
  Check
} from 'lucide-react';

const HIGHLIGHT_OPTIONS = [
  { id: 'charcoal_bbq', title: 'Charcoal BBQ & Grills', icon: Wrench },
  { id: 'shawarma_mandi', title: 'Shawarma & Mandi', icon: Volume2 },
  { id: 'taste_freshness', title: 'Taste & Freshness', icon: Sparkles },
  { id: 'portion_value', title: 'Portion & Pricing', icon: DollarSign },
  { id: 'fast_service', title: 'Fast Service', icon: Clock },
  { id: 'family_ambience', title: 'Family Ambience', icon: Star },
  { id: 'hygiene', title: 'Hygienic Dining', icon: SprayCan },
  { id: 'friendly_staff', title: 'Friendly Staff', icon: ThumbsUp }
];

export const FeatureSelectionScreen = () => {
  const {
    business,
    setCustomerStep,
    selectedServices,
    selectedGoodTags,
    setSelectedGoodTags,
    customerComment,
    setCustomerComment,
    generateLiveAiReview
  } = useApp();

  const [isListening, setIsListening] = useState(false);

  const toggleTag = (title) => {
    if (selectedGoodTags.includes(title)) {
      setSelectedGoodTags(selectedGoodTags.filter((t) => t !== title));
    } else {
      setSelectedGoodTags([...selectedGoodTags, title]);
    }
  };

  const handleClearAll = () => {
    setSelectedGoodTags([]);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    if (isListening) {
      setIsListening(false);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setCustomerComment((prev) => (prev ? `${prev} ${transcript}` : transcript).slice(0, 100));
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const handleGenerate = async () => {
    setCustomerStep('good_ai_draft');
    await generateLiveAiReview();
  };

  return (
    <div className="w-full flex flex-col gap-3.5 animate-fade-in">
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
        {/* Royal Blue Header */}
        <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setCustomerStep('services_selection')}
              className="flex items-center gap-1.5 text-xs font-bold text-blue-100 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <span className="text-[11px] font-extrabold bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20">
              Step 2 of 2
            </span>
          </div>

          <div className="w-full bg-blue-950/40 h-1.5 rounded-full overflow-hidden mb-3.5">
            <div className="bg-amber-400 h-full w-full rounded-full transition-all duration-300" />
          </div>

          <div className="text-left">
            <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
              {business.name}
            </p>
            <h2 className="text-xl font-black text-white tracking-tight mt-0.5">
              What did you like most?
            </h2>
            {selectedServices && selectedServices.length > 0 && (
              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                {selectedServices.map((srv, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold bg-white/15 text-white px-2.5 py-0.5 rounded-full border border-white/20"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Highlights Chips */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-extrabold text-slate-900">
              Tap highlights ({selectedGoodTags.length} selected)
            </span>
            {selectedGoodTags.length > 0 && (
              <button
                onClick={handleClearAll}
                className="flex items-center gap-1 text-[11px] font-bold text-[#1E40AF] hover:text-[#1E3A8A] cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {HIGHLIGHT_OPTIONS.map((item) => {
              const isSelected = selectedGoodTags.includes(item.title);
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => toggleTag(item.title)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 active:scale-[0.98] ${
                    isSelected
                      ? 'bg-blue-50/80 border-[#1E40AF] ring-1 ring-[#1E40AF]'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#1E40AF] text-white'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-xs text-slate-900 truncate">
                      {item.title}
                    </span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#1E40AF] shrink-0 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Voice or Text Note */}
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xs p-4 text-left">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-extrabold text-slate-900">
            Speak or type a quick note <span className="text-slate-400 font-medium">(optional)</span>
          </span>
          <span className="text-[10px] font-bold text-slate-400">
            {customerComment.length}/100
          </span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            maxLength={100}
            value={customerComment}
            onChange={(e) => setCustomerComment(e.target.value)}
            placeholder="e.g. Al Faham BBQ Chicken & Shawarma romba super!"
            className="flex-1 text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white text-slate-900 placeholder-slate-400 transition-all"
          />
          <button
            type="button"
            onClick={handleVoiceInput}
            title="Speak in Tamil, Tanglish, or English"
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all cursor-pointer ${
              isListening
                ? 'bg-rose-600 text-white animate-pulse-ring'
                : 'bg-[#1E40AF] hover:bg-[#1E3A8A] text-white'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-[10.5px] text-slate-500 font-medium mt-2">
          Tap the mic to speak naturally in Tamil, Tanglish, or English.
        </p>
      </div>

      {/* Generate CTA */}
      <button
        onClick={handleGenerate}
        className="w-full py-4 px-5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-2xl font-extrabold text-sm shadow-sm flex items-center justify-between transition-all cursor-pointer active:scale-[0.99]"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Generate My 5-Star Review
        </span>
        <ArrowRight className="w-4 h-4 text-amber-300" />
      </button>
    </div>
  );
};
