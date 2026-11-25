import React, { useState } from 'react';
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
  { id: 'modifications', title: 'Custom Modifications', icon: Wrench },
  { id: 'audio_lighting', title: 'Audio & Lighting', icon: Volume2 },
  { id: 'accessories', title: 'Car Accessories', icon: Sparkles },
  { id: 'workmanship', title: 'Clean Finish', icon: Star },
  { id: 'pricing', title: 'Fair Pricing', icon: DollarSign },
  { id: 'fast', title: 'Fast & On-Time', icon: Clock },
  { id: 'detailing', title: 'Detailing & Polish', icon: SprayCan },
  { id: 'trust', title: 'Friendly Staff', icon: ThumbsUp }
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
      {/* Top Progress & Heading */}
      <div className="w-full glass-card rounded-3xl p-5">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setCustomerStep('services_selection')}
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-[11px] font-extrabold bg-amber-400/10 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-400/20">
            Step 2 of 2
          </span>
        </div>

        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-full w-full rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
        </div>

        <div className="text-left">
          <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
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
                  className="text-[10px] font-bold bg-white/[0.06] text-zinc-200 px-2.5 py-1 rounded-lg border border-white/10"
                >
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Highlights Chips */}
      <div className="w-full glass-card rounded-3xl p-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-extrabold text-white">
            Tap highlights ({selectedGoodTags.length} selected)
          </span>
          {selectedGoodTags.length > 0 && (
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
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
                    ? 'bg-amber-400/10 border-amber-400/60 shadow-[0_0_16px_rgba(251,191,36,0.12)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 text-zinc-950'
                        : 'bg-white/[0.06] border border-white/10 text-zinc-200'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs text-white truncate">
                    {item.title}
                  </span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Voice or Text Note */}
      <div className="w-full glass-card rounded-3xl p-4 text-left">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-extrabold text-white">
            Speak or type a quick note <span className="text-zinc-500 font-medium">(optional)</span>
          </span>
          <span className="text-[10px] font-bold text-zinc-500">
            {customerComment.length}/100
          </span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            maxLength={100}
            value={customerComment}
            onChange={(e) => setCustomerComment(e.target.value)}
            placeholder="e.g. Service romba nalla irunthuchu..."
            className="flex-1 text-xs p-3 bg-white/[0.05] border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-amber-400/60 focus:bg-white/[0.08] text-white placeholder-zinc-500 transition-all"
          />
          <button
            type="button"
            onClick={handleVoiceInput}
            title="Speak in Tamil, Tanglish, or English"
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all cursor-pointer ${
              isListening
                ? 'bg-rose-500 text-white animate-pulse-ring'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_16px_rgba(79,70,229,0.4)]'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-[10.5px] text-zinc-400 font-medium mt-2">
          Tap the mic to speak naturally in Tamil, Tanglish, or English.
        </p>
      </div>

      {/* Generate CTA */}
      <button
        onClick={handleGenerate}
        className="w-full py-4 px-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 rounded-2xl font-extrabold text-sm shadow-[0_0_25px_rgba(245,158,11,0.28)] flex items-center justify-between transition-all cursor-pointer active:scale-[0.99]"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Generate My 5-Star Review
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
