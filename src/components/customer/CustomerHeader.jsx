import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const CustomerHeader = () => {
  const { resetCustomerFlow, lang, setLang } = useApp();

  return (
    <header className="w-full max-w-[420px] mx-auto px-5 pt-5 pb-3 flex items-center justify-between">
      {/* Left: Royal Blue Kural Wordmark + Speech-Star Icon */}
      <button
        onClick={resetCustomerFlow}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer text-left"
        title="Kural (குரல்)"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1E3A8A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M12 8.2l.9 1.9 2.1.3-1.5 1.5.3 2.1-1.8-1-1.8 1 .3-2.1-1.5-1.5 2.1-.3.9-1.9z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" />
        </svg>
        <div className="flex items-center gap-1.5">
          <span className="text-[17px] font-bold tracking-[-0.02em] text-[#1E3A8A]">
            Kural
          </span>
          <span className="text-sm font-medium text-[#2563EB]">குரல்</span>
        </div>
      </button>

      {/* Right: 3-Segment Language Toggle with Royal Blue Active Pill */}
      <div className="inline-flex items-center bg-white/80 backdrop-blur-xs p-1 rounded-full border border-blue-100 text-xs font-medium relative shadow-2xs">
        {[
          { id: 'tanglish', label: 'Tanglish' },
          { id: 'tamil', label: 'தமிழ்' },
          { id: 'en', label: 'EN' }
        ].map((item) => {
          const isActive = lang === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setLang(item.id)}
              className={`relative px-2.5 py-1 rounded-full transition-colors cursor-pointer z-10 ${
                isActive ? 'text-white font-semibold' : 'text-slate-500 hover:text-[#1E3A8A]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="langThumb"
                  transition={{ type: 'spring', stiffness: 480, damping: 34 }}
                  className="absolute inset-0 bg-[#1E3A8A] rounded-full shadow-sm -z-10"
                />
              )}
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
