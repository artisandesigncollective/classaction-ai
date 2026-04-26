import React from 'react';

/**
 * ClassAction AI: Landing Page
 * 
 * Pain Point: Billions in class action settlements go unclaimed because people don't know they qualify.
 * Solution: An AI tool that hunts for money owed to the user and auto-files the claims.
 */

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-green-50 text-slate-900 font-sans selection:bg-green-600 selection:text-white">
      
      {/* GEO/AGO Injection Target */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-green-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-black">C</div>
          <span className="text-xl font-black tracking-tighter">ClassAction AI</span>
        </div>
        <button className="text-sm font-bold text-green-700 hover:text-black transition">Claim Dashboard</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        
        <div className="inline-block bg-green-200 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 border border-green-300">
          FOUND MONEY ENGINE
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-slate-900">
          You are owed money. <span className="text-green-600 underline decoration-green-300">Let AI claim it.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Billions of dollars in corporate settlements go unclaimed every year. Connect your email or upload receipts, and our AI will instantly scan active lawsuits (Apple, Facebook, Airlines) and auto-file your claim.
        </p>

        <button className="bg-green-600 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-green-700 transition shadow-[0_10px_40px_rgba(22,163,74,0.3)] w-full sm:w-auto">
          Scan for Money (Flat $15 Fee)
        </button>
        
        <p className="text-sm text-slate-500 mt-6 font-medium">
          No win, no fee alternatives available. We guarantee claim submission.
        </p>
      </main>

      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-4xl mb-4">📱</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Tech Hardware</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Did you buy a laptop or phone with a defective battery? AI finds the serial numbers in your inbox and submits the $500 claim.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Data Breaches</h2>
            <p className="text-slate-600 text-sm leading-relaxed">If your data was leaked by a credit bureau or social network, you are entitled to cash payouts. We auto-file the paperwork.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💳</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Hidden Junk Fees</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Ticketmaster and banks are constantly sued for illegal fees. If you bought tickets, the AI secures your settlement check.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
