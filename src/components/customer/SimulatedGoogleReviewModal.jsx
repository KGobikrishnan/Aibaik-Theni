import { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { Copy, Check, ExternalLink, Star, X, CheckCircle2, Heart } from 'lucide-react';

export const SimulatedGoogleReviewModal = () => {
  const {
    showGoogleModal,
    setShowGoogleModal,
    aiDraft,
    business,
    resetCustomerFlow
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (showGoogleModal) {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.6 }
      });
    }
  }, [showGoogleModal]);

  if (!showGoogleModal) return null;

  const handleCopyText = () => {
    navigator.clipboard.writeText(aiDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitReview = () => {
    navigator.clipboard.writeText(aiDraft);
    setCopied(true);

    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.5 }
    });

    window.open(business.googlePlaceUrl || 'https://g.page/r/Cb1zt1msXsX9EBM/review', '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in text-left">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-6">
        <button
          onClick={() => {
            setShowGoogleModal(false);
            setIsSubmitted(false);
            resetCustomerFlow();
          }}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-4 flex flex-col items-center text-center animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-[#1E40AF] flex items-center justify-center text-white shadow-lg mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Nandri! Thank you!
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1.5 max-w-xs leading-relaxed">
              Your feedback means a lot to <strong className="text-slate-900">{business.name}</strong>. Google Maps has been opened with your copied review.
            </p>

            <div className="my-5 p-3.5 bg-amber-50 rounded-2xl border border-amber-200 w-full flex flex-col items-center">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> 5-Star Review Ready to Paste
              </span>
            </div>

            <button
              onClick={() => {
                setShowGoogleModal(false);
                setIsSubmitted(false);
                resetCustomerFlow();
              }}
              className="w-full py-3 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-black text-[#1E40AF] text-sm">
                G
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">Post to Google</h3>
                <p className="text-[11px] text-slate-500 font-medium">Copy &amp; paste on Google Maps</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 mb-4">
              <p className="text-xs text-slate-800 font-medium leading-relaxed italic">
                &quot;{aiDraft}&quot;
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyText}
                className="flex-1 py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <button
                onClick={handleSubmitReview}
                className="flex-[2] py-3 px-4 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Copy &amp; Open Google</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
