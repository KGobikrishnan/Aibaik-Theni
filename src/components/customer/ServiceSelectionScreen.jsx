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
      {/* Top Royal Blue Progress Card */}
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setCustomerStep('welcome')}
              className="flex items-center gap-1.5 text-xs font-bold text-blue-100 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <span className="text-[11px] font-extrabold bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20">
              Step 1 of 2
            </span>
          </div>

          <div className="w-full bg-blue-950/40 h-1.5 rounded-full overflow-hidden mb-3.5">
            <div className="bg-amber-400 h-full w-1/2 rounded-full transition-all duration-300" />
          </div>

          <div className="text-left">
            <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
              {business.name}
            </p>
            <h2 className="text-xl font-black text-white tracking-tight mt-0.5">
              Which service did you get today?
            </h2>
            <p className="text-xs text-blue-100 font-medium mt-1">
              Select one or more items (or skip if general visit).
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-extrabold text-slate-900">
              Services ({selectedServices.length} selected)
            </span>
            {selectedServices.length > 0 && (
              <button
                onClick={handleClearAll}
                className="flex items-center gap-1 text-[11px] font-bold text-[#1E40AF] hover:text-[#1E3A8A] cursor-pointer"
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
                      ? 'bg-blue-50/80 border-[#1E40AF] ring-1 ring-[#1E40AF]'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#1E40AF] text-white'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-extrabold text-xs text-slate-900 leading-snug">
                      {srv.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                      {srv.category}
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                      isSelected
                        ? 'bg-[#1E40AF] border-[#1E40AF] text-white'
                        : 'bg-white border-slate-300'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <button
        onClick={handleNext}
        className="w-full py-4 px-5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-2xl font-extrabold text-sm shadow-sm flex items-center justify-between transition-all cursor-pointer active:scale-[0.99]"
      >
        <span>{selectedServices.length > 0 ? 'Continue with Selected' : 'Skip & Continue'}</span>
        <ArrowRight className="w-4 h-4 text-amber-300" />
      </button>
    </div>
  );
};
