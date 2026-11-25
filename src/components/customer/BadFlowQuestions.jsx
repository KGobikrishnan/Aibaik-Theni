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
      <div className="w-full glass-card rounded-3xl flex flex-col items-center justify-center min-h-[460px] p-6 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Thank you for letting us know
        </h2>
        <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-xs font-medium">
          Your feedback has been sent privately to the management team at <strong className="text-white">{business.name}</strong>.
          {wantsCallback && contactInfo && (
            <span className="block mt-2 text-emerald-300 font-bold bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl">
              Our manager will reach out to you shortly to resolve this.
            </span>
          )}
        </p>

        <div className="mt-5 w-full p-4 bg-white/[0.04] rounded-2xl border border-white/10 text-left">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-extrabold text-white">100% Private Feedback</div>
              <div className="text-[11px] text-zinc-400 mt-0.5 font-medium">
                This was sent directly to the store owner and was NOT posted publicly on Google.
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={resetCustomerFlow}
          className="mt-6 w-full py-3.5 bg-white hover:bg-zinc-200 text-zinc-950 rounded-2xl text-xs font-extrabold transition-colors cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full glass-card rounded-3xl p-5 text-left animate-fade-in">
      <button
        onClick={() => setCustomerStep('welcome')}
        className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white mb-4 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-black text-white leading-tight">
            We&apos;re sorry for the issue
          </h2>
          <p className="text-xs text-zinc-400 font-medium">
            Help {business.name} make this right
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-extrabold text-white mb-2">
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
                      ? 'bg-rose-500 text-white border-rose-500 shadow-[0_0_14px_rgba(244,63,94,0.3)]'
                      : 'bg-white/[0.04] text-zinc-200 border-white/10 hover:border-white/20'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-extrabold text-white mb-1.5">
            Tell us more (optional)
          </label>
          <textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share details so we can fix it..."
            className="w-full text-xs p-3 bg-white/[0.05] border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-amber-400/60 focus:bg-white/[0.08] text-white placeholder-zinc-500"
          />
        </div>

        <div className="space-y-2.5 pt-2 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name (Optional)"
              className="text-xs p-3 bg-white/[0.05] border border-white/10 rounded-xl outline-none focus:bg-white/[0.08] focus:ring-2 focus:ring-amber-400/60 text-white placeholder-zinc-500"
            />
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Phone / Email"
              className="text-xs p-3 bg-white/[0.05] border border-white/10 rounded-xl outline-none focus:bg-white/[0.08] focus:ring-2 focus:ring-amber-400/60 text-white placeholder-zinc-500"
            />
          </div>

          <label className="flex items-center gap-2 pt-1 text-xs font-semibold text-zinc-400 cursor-pointer">
            <input
              type="checkbox"
              checked={wantsCallback}
              onChange={(e) => setWantsCallback(e.target.checked)}
              className="rounded text-amber-400 focus:ring-amber-400 bg-zinc-900 border-white/20"
            />
            <span>Have a store manager call/message me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-extrabold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-[0_0_20px_rgba(225,29,72,0.3)]"
        >
          <Send className="w-4 h-4" /> Send Privately to Manager
        </button>
      </form>
    </div>
  );
};
