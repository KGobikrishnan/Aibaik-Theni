import { useEffect } from 'react';
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
    <div className="min-h-screen bg-[#F0F4FF] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.12),_transparent_60%)] text-slate-900 font-sans selection:bg-[#1E3A8A] selection:text-white flex flex-col">
      {/* Minimalist Top Navigation */}
      <CustomerHeader />

      {/* Main Centered Content */}
      <main className="w-full max-w-[420px] mx-auto flex-1 flex flex-col px-4 pt-2">
        {customerStep === 'welcome' && <CustomerWelcome />}
        {customerStep === 'services_selection' && (
          <div className="py-4">
            <ServiceSelectionScreen />
          </div>
        )}
        {customerStep === 'good_features' && (
          <div className="py-4">
            <FeatureSelectionScreen />
          </div>
        )}
        {customerStep === 'good_ai_draft' && (
          <div className="py-4">
            <ReviewDraftScreen />
          </div>
        )}
        {customerStep === 'bad_questions' && (
          <div className="py-4">
            <BadFlowQuestions />
          </div>
        )}
      </main>

      {/* Google Review Modal overlay */}
      <SimulatedGoogleReviewModal />
    </div>
  );
};
