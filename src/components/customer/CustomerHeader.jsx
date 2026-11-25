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
  CheckCircle2,
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
        color: '#065F46',
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
        <div className="max-w-[480px] mx-auto flex items-center justify-between bg-white/90 backdrop-blur-md border border-[#E5DFD3] rounded-2xl px-3.5 py-2 shadow-xs">
          {/* Brand Logo */}
          <button
            onClick={resetCustomerFlow}
            className="flex items-center gap-2 hover:opacity-85 transition-opacity cursor-pointer text-left"
            title="Kural (குரல்)"
          >
            <img
              src="/kural.png"
              alt="Kural (குரல்)"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowQrModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#141210] hover:bg-[#292520] text-white rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-[0.97]"
            >
              <QrCode className="w-3.5 h-3.5 text-emerald-400" />
              <span>Standee QR</span>
            </button>

            <button
              onClick={() => setShowMenuDropdown(!showMenuDropdown)}
              className="w-9 h-9 flex items-center justify-center bg-[#F6F4EF] hover:bg-[#ECE7DD] text-[#141210] rounded-xl border border-[#E5DFD3] transition-colors cursor-pointer"
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
            <div className="absolute top-2 right-0 w-72 bg-white rounded-2xl shadow-xl border border-[#E5DFD3] p-2 space-y-1 animate-fade-in z-50">
              <button
                onClick={() => {
                  handleShare();
                  setShowMenuDropdown(false);
                }}
                className="w-full flex items-center justify-between p-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
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
                className="flex items-center justify-between p-3 hover:bg-[#F6F4EF] rounded-xl text-xs font-bold text-[#141210] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-700" /> Google Business Profile
                </span>
                <ChevronRight className="w-4 h-4 text-[#8C857B]" />
              </a>

              <button
                onClick={() => {
                  setShowInfoModal(true);
                  setShowMenuDropdown(false);
                }}
                className="w-full flex items-center justify-between p-3 hover:bg-[#F6F4EF] rounded-xl text-xs font-bold text-[#141210] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700" /> Store Info &amp; Address
                </span>
                <ChevronRight className="w-4 h-4 text-[#8C857B]" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* QR / STANDEE MODAL */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/70 backdrop-blur-xs animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-[390px] bg-white rounded-3xl shadow-2xl border border-[#E5DFD3] p-5 flex flex-col items-center my-auto">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-1.5 text-[#6B655C] hover:text-[#141210] bg-[#F6F4EF] hover:bg-[#ECE7DD] rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full flex items-center gap-2.5 pr-8 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center text-white shrink-0">
                <QrCode className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <h2 className="text-base font-black text-[#141210] leading-tight">
                  QR Standee Hub
                </h2>
                <p className="text-[11px] text-[#6B655C] font-medium">
                  Scan or download counter standee
                </p>
              </div>
            </div>

            {/* Standee Preview Card */}
            <div className="w-full bg-[#F6F4EF] rounded-2xl border border-[#E5DFD3] p-4 flex flex-col items-center">
              <div className="w-full flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-[#E5DFD3] mb-3 text-left">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#141210] shrink-0 flex items-center justify-center">
                  {business.logoUrl ? (
                    <img src={business.logoUrl} alt={business.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-black text-white text-sm">K</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-black text-[#141210] truncate">{business.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5 text-[10px] text-[#6B655C] font-bold">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500 shrink-0" />
                    <span>{business.rating || '4.9'} Rating</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-extrabold">Kural Verified</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-2xl border border-[#E5DFD3] shadow-xs">
                <KuralQrCode
                  id="hub-qr-code-canvas"
                  value={currentLiveUrl}
                  size={205}
                  color="#065F46"
                  iconSrc="/kural-icon.png"
                />
              </div>

              <p className="text-[11px] text-[#6B655C] font-semibold mt-2.5 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Point camera to leave a 5-star review</span>
              </p>
            </div>

            {/* 3 Action Buttons */}
            <div className="grid grid-cols-3 gap-2 w-full mt-3.5">
              <button
                onClick={handleCopyLink}
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-[#F6F4EF] hover:bg-[#ECE7DD] text-[#141210] border border-[#E5DFD3] rounded-xl transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="text-[10px] font-bold">{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 mb-1" />
                <span className="text-[10px] font-bold">Share Link</span>
              </button>

              <button
                onClick={handleDownloadQr}
                disabled={isDownloading}
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-[#141210] hover:bg-[#292520] text-white rounded-xl transition-colors cursor-pointer disabled:opacity-50"
              >
                <Download className={`w-4 h-4 mb-1 ${isDownloading ? 'animate-bounce' : ''}`} />
                <span className="text-[10px] font-bold">{isDownloading ? 'Saving...' : 'Standee PNG'}</span>
              </button>
            </div>

            <div className="w-full mt-3 py-1.5 px-3 bg-[#F6F4EF] rounded-xl border border-[#E5DFD3] flex items-center justify-center gap-2 text-[10px] font-bold text-[#6B655C]">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-700" /> Anonymous</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-700" /> Secure</span>
              <span>•</span>
              <span>No App Needed</span>
            </div>
          </div>
        </div>
      )}

      {/* Store Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/70 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-[#E5DFD3] relative text-left">
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 p-1.5 text-[#6B655C] hover:text-[#141210] bg-[#F6F4EF] rounded-xl cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-3">
              <Store className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-black text-[#141210]">{business.name}</h3>
            <p className="text-xs text-emerald-700 font-bold mt-0.5">{business.branch}</p>

            <div className="mt-4 space-y-3 text-xs text-[#6B655C] font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C857B] shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span>{business.rating} / 5.0 Rating ({business.totalReviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Verified Kural Partner Store</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5DFD3] flex justify-end">
              <button
                onClick={() => setShowInfoModal(false)}
                className="px-5 py-2.5 bg-[#141210] hover:bg-[#292520] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
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
