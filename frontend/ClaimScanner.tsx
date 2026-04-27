import React, { useState } from 'react';

/**
 * ClassAction AI: Settlement Scanner
 * (Phase 7.1 Action-Ready)
 */

export const ClaimScanner = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);

  const handleAction = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setDone(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-black text-slate-900">ClassAction AI: Settlement Scanner</h2>
        <p className="text-slate-600">We scan your history to find if you were part of any major corporate data breaches or consumer settlements.</p>

        {!analyzing && !done && (
          <div className="bg-white p-12 rounded-2xl border-2 border-dashed border-slate-200 cursor-pointer hover:bg-slate-50 transition" onClick={handleAction}>
            <p className="font-bold text-slate-700">Click to start Scan</p>
          </div>
        )}

        {analyzing && (
          <div className="bg-white p-12 rounded-2xl flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mb-6"></div>
            <p className="text-slate-500 font-mono text-sm animate-pulse">Running Sovereign Logic...</p>
          </div>
        )}

        {done && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left">
            <h3 className="text-xl font-black text-slate-900 mb-4">Success: Actionable Opportunity Detected</h3>
            <div className="flex flex-col gap-4 mt-8">
              <button className="w-full py-4 bg-slate-100 text-slate-900 border border-slate-300 font-bold rounded-xl hover:bg-slate-200 transition text-lg">
                Generate Settlement Claim ()
              </button>
              <button 
                onClick={() => alert('Sovereign Dispatch: Certified Filing includes Proof of Service. Proceeding to checkout ()...')}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition text-lg shadow-xl shadow-slate-900/20 flex flex-col items-center gap-0"
              >
                <span>Mail it for me (Certified)</span>
                <span className="text-[10px] font-normal opacity-70 uppercase tracking-tighter">Certified Mail + Tracking • $59</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimScanner;
