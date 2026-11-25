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
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-700 selection:text-white relative">
      {/* Top Bar */}
      <CustomerHeader />

      {/* Main Centered App Shell */}
      <main className="w-full max-w-[460px] mx-auto flex-1 flex flex-col pt-1 pb-8 px-3.5 relative z-10">
        {customerStep === 'welcome' && <CustomerWelcome />}
        {customerStep === 'services_selection' && <ServiceSelectionScreen />}
        {customerStep === 'good_features' && <FeatureSelectionScreen />}
        {customerStep === 'good_ai_draft' && <ReviewDraftScreen />}
        {customerStep === 'bad_questions' && <BadFlowQuestions />}
      </main>

      {/* Clean Footer */}
      <footer className="w-full py-4 px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-500 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>Powered by <strong className="text-slate-900">Kural (குரல்)</strong> • Your Customer&apos;s Voice</span>
        </div>
      </footer>

      {/* Google Review Modal overlay */}
      <SimulatedGoogleReviewModal />
    </div>
  );
};
