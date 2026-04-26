import React, { useState } from 'react';

/**
 * ClassAction AI: Claim Scanner UI
 * 
 * Pain Point: People don't know what settlements they qualify for.
 * Solution: User connects their purchase history, and we simulate the AI scanning for active lawsuits.
 */

export const ClaimScanner = () => {
  const [scanActive, setScanActive] = useState(false);
  const [foundClaims, setFoundClaims] = useState<number | null>(null);

  const handleScan = () => {
    setScanActive(true);
    console.log(`[ClassAction] 🕵️‍♂️ Initiating Receipt & Email Scan...`);
    
    // Simulate AI scanning and finding money
    setTimeout(() => {
      setScanActive(false);
      setFoundClaims(450);
    }, 3000);
  };

  const handleSubmit = () => {
    alert('Redirecting to Stripe ($15 flat fee) to officially file the court claims...');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        <h2 className="text-3xl font-black text-slate-900">Settlement Scanner</h2>
        <p className="text-slate-600">Securely connect your purchase history so our AI can cross-reference it against the National Class Action Database.</p>

        {!scanActive && foundClaims === null && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <button 
              onClick={handleScan}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-black transition text-lg"
            >
              Start Secure Scan
            </button>
          </div>
        )}

        {scanActive && (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <p className="text-slate-500 font-mono text-sm animate-pulse">Scanning 14,204 active settlements...</p>
            <p className="text-slate-400 text-xs mt-2">Checking Apple iPhone Battery Throttling Case...</p>
          </div>
        )}

        {foundClaims !== null && (
          <div className="bg-green-100 p-8 rounded-2xl border border-green-300">
            <h3 className="text-xl font-bold text-green-900 mb-2">Money Found!</h3>
            <p className="text-5xl font-black text-green-700 mb-6">${foundClaims}.00</p>
            <p className="text-green-800 text-sm mb-8">You qualify for 2 active settlements (Tech Hardware, Data Breach). The deadline to file is in 14 days.</p>
            
            <button 
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white font-black py-4 rounded-xl hover:bg-green-700 transition text-lg shadow-lg shadow-green-600/20"
            >
              Auto-File Claims ($15)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ClaimScanner;
