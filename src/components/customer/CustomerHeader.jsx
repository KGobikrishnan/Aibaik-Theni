import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KuralQrCode, downloadBrandedQrStandee } from '../common/KuralQrCode';
import {
  QrCode,
  MoreHorizontal,
  X,
  Share2,
  Globe,
  MapPin,
  Star,
  Download,
  Copy,
  Smartphone,
  ShieldCheck,
  ChevronRight,
  Lock,
  Sparkles,
  Store
} from 'lucide-react';

export const CustomerHeader = () => {
  const { business, resetCustomerFlow } = useApp();
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const currentLiveUrl = window.location.href;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: business.name,
        text: `Leave a review for ${business.name}!`,
        url: currentLiveUrl
      }).catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentLiveUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadQr = async () => {
    try {
      setIsDownloading(true);
      await downloadBrandedQrStandee({
        businessName: business.name,
        url: currentLiveUrl,
        color: '#4F46E5',
        iconSrc: '/kural-icon.png'
      });
    } catch (err) {
      console.error('Error downloading QR Standee:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <header className="w-full pt-4 pb-2 px-4 relative z-40">
        <div className="max-w-[480px] mx-auto flex items-center justify-between glass-card rounded-2xl px-3.5 py-2.5">
          {/* Brand Logo */}
          <button
            onClick={resetCustomerFlow}
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer text-left"
            title="Kural (குரல்)"
          >
            <img
              src="/kural-icon.png"
              alt="Kural (குரல்)"
              className="h-9 w-9 rounded-xl object-contain shadow-md"
            />
            <div>
              <div className="text-sm font-black tracking-tight text-white leading-none flex items-center gap-1.5">
                <span>Kural</span>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded-md">
                  குரல்
                </span>
              </div>
              <div className="text-[10px] text-zinc-400 font-medium mt-0.5">
                AI Review Studio
              </div>
            </div>
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowQrModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 rounded-xl text-xs font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer active:scale-[0.97]"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Standee QR</span>
            </button>

            <button
              onClick={() => setShowMenuDropdown(!showMenuDropdown)}
              className="w-9 h-9 flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 rounded-xl border border-white/10 transition-colors cursor-pointer"
              title="Menu Options"
            >
              {showMenuDropdown ? (
                <X className="w-4 h-4" />
              ) : (
                <MoreHorizontal className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Dropdown */}
        {showMenuDropdown && (
          <div className="max-w-[480px] mx-auto relative">
            <div className="absolute top-2 right-0 w-72 bg-[#141417]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 p-2 space-y-1 animate-fade-in z-50">
              <button
                onClick={() => {
                  handleShare();
                  setShowMenuDropdown(false);
                }}
                className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Share Review Link
                </span>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-md">
                  {copiedLink ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <a
                href={business.googlePlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowMenuDropdown(false)}
                className="flex items-center justify-between p-3 hover:bg-white/[0.06] rounded-xl text-xs font-bold text-zinc-200 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" /> Google Business Profile
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>

              <button
                onClick={() => {
                  setShowInfoModal(true);
                  setShowMenuDropdown(false);
                }}
                className="w-full flex items-center justify-between p-3 hover:bg-white/[0.06] rounded-xl text-xs font-bold text-zinc-200 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" /> Store Info &amp; Address
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* QR / STANDEE MODAL */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-[390px] bg-[#141417] rounded-3xl shadow-2xl border border-white/10 p-5 flex flex-col items-center my-auto">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full flex items-center gap-2.5 pr-8 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <QrCode className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <h2 className="text-base font-black text-white leading-tight">
                  QR Standee Hub
                </h2>
                <p className="text-[11px] text-zinc-400 font-medium">
                  Scan or download counter standee
                </p>
              </div>
            </div>

            {/* Standee Preview Card */}
            <div className="w-full bg-white/[0.03] rounded-2xl border border-white/10 p-4 flex flex-col items-center">
              <div className="w-full flex items-center gap-2.5 bg-white/[0.05] p-2.5 rounded-xl border border-white/10 mb-3 text-left">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-zinc-900 shrink-0 flex items-center justify-center border border-white/10">
                  {business.logoUrl ? (
                    <img src={business.logoUrl} alt={business.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-black text-white text-sm">K</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-black text-white truncate">{business.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5 text-[10px] text-zinc-400 font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                    <span>{business.rating || '4.9'} Rating</span>
                    <span>•</span>
                    <span className="text-amber-300 font-extrabold">Kural Verified</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-2xl shadow-lg">
                <KuralQrCode
                  id="hub-qr-code-canvas"
                  value={currentLiveUrl}
                  size={205}
                  color="#4F46E5"
                  iconSrc="/kural-icon.png"
                />
              </div>

              <p className="text-[11px] text-zinc-400 font-semibold mt-2.5 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>Point camera to leave a 5-star review</span>
              </p>
            </div>

            {/* 3 Action Buttons */}
            <div className="grid grid-cols-3 gap-2 w-full mt-3.5">
              <button
                onClick={handleCopyLink}
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/10 rounded-xl transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-[10px] font-bold">{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 mb-1" />
                <span className="text-[10px] font-bold">Share Link</span>
              </button>

              <button
                onClick={handleDownloadQr}
                disabled={isDownloading}
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
              >
                <Download className={`w-4 h-4 mb-1 ${isDownloading ? 'animate-bounce' : ''}`} />
                <span className="text-[10px] font-extrabold">{isDownloading ? 'Saving...' : 'Standee PNG'}</span>
              </button>
            </div>

            <div className="w-full mt-3 py-1.5 px-3 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-400" /> Anonymous</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-amber-400" /> Secure</span>
              <span>•</span>
              <span>No App Needed</span>
            </div>
          </div>
        </div>
      )}

      {/* Store Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-sm bg-[#141417] rounded-3xl p-6 shadow-2xl border border-white/10 relative text-left">
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white bg-white/[0.06] rounded-xl cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3">
              <Store className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-black text-white">{business.name}</h3>
            <p className="text-xs text-amber-400 font-bold mt-0.5">{business.branch}</p>

            <div className="mt-4 space-y-3 text-xs text-zinc-400 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>{business.rating} / 5.0 Rating ({business.totalReviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Kural Partner Store</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowInfoModal(false)}
                className="px-5 py-2.5 bg-white text-zinc-950 hover:bg-zinc-200 rounded-xl text-xs font-extrabold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
