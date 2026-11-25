import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { NEGATIVE_ISSUE_TAGS } from '../../data/mockData';
import { ArrowLeft, ShieldAlert, CheckCircle2, Send, AlertTriangle } from 'lucide-react';

export const BadFlowQuestions = () => {
  const { setCustomerStep, submitBadFeedback, business, resetCustomerFlow } = useApp();

  const [selectedIssues, setSelectedIssues] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [wantsCallback, setWantsCallback] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const toggleIssue = (label) => {
    if (selectedIssues.includes(label)) {
      setSelectedIssues(selectedIssues.filter((i) => i !== label));
    } else {
      setSelectedIssues([...selectedIssues, label]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBadFeedback({
      name,
      contactInfo,
      contactType: contactInfo.includes('@') ? 'email' : (contactInfo ? 'phone' : 'none'),
      issues: selectedIssues,
      comment,
      rating: 2
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs flex flex-col items-center justify-center min-h-[460px] p-6 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-[#141210] tracking-tight">
          Thank you for letting us know
        </h2>
        <p className="text-xs text-[#6B655C] mt-2 leading-relaxed max-w-xs font-medium">
          Your feedback has been sent privately to the management team at <strong className="text-[#141210]">{business.name}</strong>.
          {wantsCallback && contactInfo && (
            <span className="block mt-2 text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
              Our manager will reach out to you shortly to resolve this.
            </span>
          )}
        </p>

        <div className="mt-5 w-full p-4 bg-[#F6F4EF] rounded-2xl border border-[#E5DFD3] text-left">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-extrabold text-[#141210]">100% Private Feedback</div>
              <div className="text-[11px] text-[#6B655C] mt-0.5 font-medium">
                This was sent directly to the store owner and was NOT posted publicly on Google.
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={resetCustomerFlow}
          className="mt-6 w-full py-3.5 bg-[#141210] hover:bg-[#292520] text-white rounded-2xl text-xs font-bold transition-colors cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-[#E5DFD3] shadow-xs p-5 text-left animate-fade-in">
      <button
        onClick={() => setCustomerStep('welcome')}
        className="flex items-center gap-1.5 text-xs font-bold text-[#6B655C] hover:text-[#141210] mb-4 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-black text-[#141210] leading-tight">
            We&apos;re sorry for the issue
          </h2>
          <p className="text-xs text-[#6B655C] font-medium">
            Help {business.name} make this right
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-extrabold text-[#141210] mb-2">
            What went wrong?
          </label>
          <div className="flex flex-wrap gap-2">
            {NEGATIVE_ISSUE_TAGS.map((tag) => {
              const isSelected = selectedIssues.includes(tag.label);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleIssue(tag.label)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-[#F6F4EF] text-[#141210] border-[#E5DFD3] hover:border-[#C8C0B0]'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-extrabold text-[#141210] mb-1.5">
            Tell us more (optional)
          </label>
          <textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share details so we can fix it..."
            className="w-full text-xs p-3 bg-[#F6F4EF] border border-[#E5DFD3] rounded-2xl outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-[#141210]"
          />
        </div>

        <div className="space-y-2.5 pt-2 border-t border-[#EFECE6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name (Optional)"
              className="text-xs p-3 bg-[#F6F4EF] border border-[#E5DFD3] rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-emerald-600"
            />
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Phone / Email"
              className="text-xs p-3 bg-[#F6F4EF] border border-[#E5DFD3] rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <label className="flex items-center gap-2 pt-1 text-xs font-semibold text-[#6B655C] cursor-pointer">
            <input
              type="checkbox"
              checked={wantsCallback}
              onChange={(e) => setWantsCallback(e.target.checked)}
              className="rounded text-emerald-700 focus:ring-emerald-600"
            />
            <span>Have a store manager call/message me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-extrabold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" /> Send Privately to Manager
        </button>
      </form>
    </div>
  );
};
