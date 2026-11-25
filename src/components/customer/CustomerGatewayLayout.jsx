import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { CustomerHeader } from './CustomerHeader';
import { CustomerWelcome } from './CustomerWelcome';
import { ServiceSelectionScreen } from './ServiceSelectionScreen';
import { FeatureSelectionScreen } from './FeatureSelectionScreen';
import { ReviewDraftScreen } from './ReviewDraftScreen';
import { SimulatedGoogleReviewModal } from './SimulatedGoogleReviewModal';
import { BadFlowQuestions } from './BadFlowQuestions';

export const CustomerGatewayLayout = () => {
  const { customerStep, loadMerchantBySlug } = useApp();
  const { shopSlug } = useParams();

  useEffect(() => {
    if (shopSlug && loadMerchantBySlug) {
      loadMerchantBySlug(shopSlug);
    }
  }, [shopSlug, loadMerchantBySlug]);

  return (
    <div className="min-h-screen bg-kural-grid text-[#141210] font-sans flex flex-col justify-between selection:bg-emerald-700 selection:text-white relative">
      {/* Top Floating Header */}
      <CustomerHeader />

      {/* Main Centered App Shell */}
      <main className="w-full max-w-[480px] mx-auto flex-1 flex flex-col pt-2 pb-10 px-4 relative z-10">
        {customerStep === 'welcome' && <CustomerWelcome />}
        {customerStep === 'services_selection' && <ServiceSelectionScreen />}
        {customerStep === 'good_features' && <FeatureSelectionScreen />}
        {customerStep === 'good_ai_draft' && <ReviewDraftScreen />}
        {customerStep === 'bad_questions' && <BadFlowQuestions />}
      </main>

      {/* Subtle Powered-by Footer */}
      <footer className="w-full py-4 px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#E5DFD3] text-[11px] font-semibold text-[#6B655C] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span>Powered by <strong className="text-[#141210]">Kural (குரல்)</strong> • Your Customer&apos;s Voice</span>
        </div>
      </footer>

      {/* Google Review Modal overlay */}
      <SimulatedGoogleReviewModal />
    </div>
  );
};
