import { useEffect, useState } from 'react';

export const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const doneTimer = setTimeout(() => {
      onFinish?.();
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] transition-opacity duration-400 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-4 flex items-center justify-center shadow-2xl">
          <img
            src="/kural.gif"
            alt="Kural (குரல்)"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-black tracking-tight">
            Kural <span className="text-amber-300 font-bold">குரல்</span>
          </h1>
          <p className="text-xs text-blue-100 font-medium mt-1">
            Your Customer&apos;s Voice
          </p>
        </div>
      </div>
    </div>
  );
};

