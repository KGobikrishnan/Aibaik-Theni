import React from 'react';
import { useApp } from '../../context/AppContext';
import { BARANI_SERVICES } from '../../data/mockData';
import {
  ShieldCheck,
  Check,
  Volume2,
  Armchair,
  Zap,
  Wrench,
  SprayCan,
  ArrowRight,
  ArrowLeft,
  RotateCcw
} from 'lucide-react';

const ICON_MAP = {
  Volume2,
  Armchair,
  Zap,
  Wrench,
  ShieldCheck,
  SprayCan
};

export const ServiceSelectionScreen = () => {
  const {
    business,
    setCustomerStep,
    selectedServices,
    setSelectedServices
  } = useApp();

  const toggleService = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleClearAll = () => {
    setSelectedServices([]);
  };

  const handleNext = () => {
    setCustomerStep('good_features');
  };

  return (
    <div className="w-full flex flex-col gap-3.5 animate-fade-in">
      {/* Top Progress & Store Header */}
      <div className="w-full glass-card rounded-3xl p-5">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setCustomerStep('welcome')}
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-[11px] font-extrabold bg-amber-400/10 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-400/20">
            Step 1 of 2
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-full w-1/2 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
        </div>

        <div className="text-left">
          <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
            {business.name}
          </p>
          <h2 className="text-xl font-black text-white tracking-tight mt-0.5">
            Which service did you get today?
          </h2>
          <p className="text-xs text-zinc-400 font-medium mt-1">
            Select one or more items (or skip if general visit).
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full glass-card rounded-3xl p-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-extrabold text-white">
            Services ({selectedServices.length} selected)
          </span>
          {selectedServices.length > 0 && (
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Clear
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {BARANI_SERVICES.map((srv) => {
            const isSelected = selectedServices.includes(srv.name);
            const IconComponent = ICON_MAP[srv.iconName] || Wrench;

            return (
              <button
                key={srv.id}
                onClick={() => toggleService(srv.name)}
                className={`relative p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 active:scale-[0.98] ${
                  isSelected
                    ? 'bg-amber-400/10 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.12)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-amber-400 text-zinc-950'
                      : 'bg-white/[0.06] border border-white/10 text-zinc-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-xs text-white leading-snug">
                    {srv.name}
                  </div>
                  <div className="text-[10px] text-zinc-400 font-medium mt-0.5 line-clamp-1">
                    {srv.category}
                  </div>
                </div>

                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                    isSelected
                      ? 'bg-amber-400 border-amber-400 text-zinc-950'
                      : 'bg-white/[0.05] border-white/20'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <button
        onClick={handleNext}
        className="w-full py-4 px-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 rounded-2xl font-extrabold text-sm shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center justify-between transition-all cursor-pointer active:scale-[0.99]"
      >
        <span>{selectedServices.length > 0 ? 'Continue with Selected' : 'Skip & Continue'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
