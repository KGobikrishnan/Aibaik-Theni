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
    <div className="min-h-screen bg-[#09090B] text-zinc-100 font-sans flex flex-col justify-between selection:bg-amber-400 selection:text-zinc-950 relative overflow-hidden">
      {/* Ambient Luxury Aurora Glows */}
      <div className="fixed -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[340px] bg-gradient-to-tr from-indigo-600/25 via-amber-500/15 to-emerald-500/20 blur-[110px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="fixed bottom-0 -right-24 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="fixed top-1/2 -left-24 w-80 h-80 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Floating Glass Header */}
      <CustomerHeader />

      {/* Main Centered App Shell */}
      <main className="w-full max-w-[480px] mx-auto flex-1 flex flex-col pt-2 pb-10 px-4 relative z-10">
        {customerStep === 'welcome' && <CustomerWelcome />}
        {customerStep === 'services_selection' && <ServiceSelectionScreen />}
        {customerStep === 'good_features' && <FeatureSelectionScreen />}
        {customerStep === 'good_ai_draft' && <ReviewDraftScreen />}
        {customerStep === 'bad_questions' && <BadFlowQuestions />}
      </main>

      {/* Luxury Powered-by Footer */}
      <footer className="w-full py-4 px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[11px] font-semibold text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <span>Powered by <strong className="text-zinc-100">Kural (குரல்)</strong> • AI Review Studio</span>
        </div>
      </footer>

      {/* Google Review Modal overlay */}
      <SimulatedGoogleReviewModal />
    </div>
  );
};
