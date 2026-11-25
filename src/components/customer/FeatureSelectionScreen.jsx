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
    if (!SpeechRecognition) {
      return;
    }
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
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-5">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setCustomerStep('services_selection')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#6B655C] hover:text-[#141210] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-[11px] font-extrabold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200/80">
            Step 2 of 2
          </span>
        </div>

        <div className="w-full bg-[#F6F4EF] h-2 rounded-full overflow-hidden mb-4">
          <div className="bg-emerald-700 h-full w-full rounded-full transition-all duration-300" />
        </div>

        <div className="text-left">
          <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            {business.name}
          </p>
          <h2 className="text-xl font-black text-[#141210] tracking-tight mt-0.5">
            What did you like most?
          </h2>
          {selectedServices && selectedServices.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              {selectedServices.map((srv, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold bg-[#F6F4EF] text-[#141210] px-2.5 py-1 rounded-lg border border-[#E5DFD3]"
                >
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Highlights Chips */}
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-extrabold text-[#141210]">
            Tap highlights ({selectedGoodTags.length} selected)
          </span>
          {selectedGoodTags.length > 0 && (
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
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
                    ? 'bg-emerald-50/70 border-emerald-600 ring-1 ring-emerald-600'
                    : 'bg-[#FAF9F6] border-[#E5DFD3] hover:border-[#C8C0B0]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-emerald-700 text-white'
                        : 'bg-white border border-[#E5DFD3] text-[#141210]'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs text-[#141210] truncate">
                    {item.title}
                  </span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Voice or Text Note */}
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-4 text-left">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-extrabold text-[#141210]">
            Speak or type a quick note <span className="text-[#8C857B] font-medium">(optional)</span>
          </span>
          <span className="text-[10px] font-bold text-[#8C857B]">
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
            className="flex-1 text-xs p-3 bg-[#F6F4EF] border border-[#E5DFD3] rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-[#141210] placeholder-[#8C857B] transition-all"
          />
          <button
            type="button"
            onClick={handleVoiceInput}
            title="Speak in Tamil, Tanglish, or English"
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all cursor-pointer ${
              isListening
                ? 'bg-rose-600 text-white animate-pulse-ring'
                : 'bg-emerald-700 hover:bg-emerald-800 text-white'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-[10.5px] text-[#6B655C] font-medium mt-2">
          Tap the mic to speak naturally in Tamil, Tanglish, or English.
        </p>
      </div>

      {/* Generate CTA */}
      <button
        onClick={handleGenerate}
        className="w-full py-4 px-5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-extrabold text-sm shadow-md flex items-center justify-between transition-all cursor-pointer active:scale-[0.99]"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Generate My 5-Star Review
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
