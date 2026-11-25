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
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-5">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setCustomerStep('welcome')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#6B655C] hover:text-[#141210] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-[11px] font-extrabold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200/80">
            Step 1 of 2
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#F6F4EF] h-2 rounded-full overflow-hidden mb-4">
          <div className="bg-emerald-700 h-full w-1/2 rounded-full transition-all duration-300" />
        </div>

        <div className="text-left">
          <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            {business.name}
          </p>
          <h2 className="text-xl font-black text-[#141210] tracking-tight mt-0.5">
            Which service did you get today?
          </h2>
          <p className="text-xs text-[#6B655C] font-medium mt-1">
            Select one or more items (or skip if general visit).
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-extrabold text-[#141210]">
            Services ({selectedServices.length} selected)
          </span>
          {selectedServices.length > 0 && (
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
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
                    ? 'bg-emerald-50/70 border-emerald-600 ring-1 ring-emerald-600'
                    : 'bg-[#FAF9F6] border-[#E5DFD3] hover:border-[#C8C0B0]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white border border-[#E5DFD3] text-[#141210]'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-xs text-[#141210] leading-snug">
                    {srv.name}
                  </div>
                  <div className="text-[10px] text-[#6B655C] font-medium mt-0.5 line-clamp-1">
                    {srv.category}
                  </div>
                </div>

                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                    isSelected
                      ? 'bg-emerald-700 border-emerald-700 text-white'
                      : 'bg-white border-[#D6D0C4]'
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
        className="w-full py-4 px-5 bg-[#141210] hover:bg-[#292520] text-white rounded-2xl font-extrabold text-sm shadow-md flex items-center justify-between transition-all cursor-pointer active:scale-[0.99]"
      >
        <span>{selectedServices.length > 0 ? 'Continue with Selected' : 'Skip & Continue'}</span>
        <ArrowRight className="w-4 h-4 text-emerald-400" />
      </button>
    </div>
  );
};
