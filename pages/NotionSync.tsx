import React, { useEffect } from 'react';
import { ArrowRight, Copy, Cloud, FastForward, Activity, Globe, GraduationCap, Server } from 'lucide-react';
import AOS from 'aos';

const NotionLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.606 0-.606-.607-.7-1.446-.7-1.12 0-4.853.28-10.73.653-1.865.117-2.985.187-3.517.98zm-2.938 2.61c-.093.56-.093.793.326 1.166l12.795 12.396c.467.42.747.467 1.26.233.793-.326.793-.793.793-1.913V8.453c0-.466 0-.793-.56-.793-.373 0-.653.047-.84.233-.186.187-.233.42-.233.887v8.946l-10.73-10.44c-.28-.28-.466-.326-.84-.28-.653.094-1.586.234-1.97.374zm15.462 10.953c0 .653.56.7 1.166.7.793 0 1.26-.233 1.26-.886V5.234c0-.606-.42-.793-1.073-.793-.56 0-1.353.14-1.353.7v11.62z"/>
  </svg>
);

const NotionSync: React.FC = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900">
      {/* Section 1: The Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Muted Peach Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#E91E63 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Copy */}
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E91E63]/10 text-[#E91E63] text-xs font-bold tracking-wider mb-6">
                PREMIUM NOTION SYSTEMS
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                High-Performance Language Hubs for <span className="text-[#E91E63]">Notion</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Plug our GCP-powered linguistic engine directly into your workspace. We build specialized, autonomous Notion systems for healthcare professionals, serious expats, and premium language tutors.
              </p>
              <button 
                onClick={() => document.getElementById('module-library')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
              >
                Browse the Library <ArrowRight size={20} />
              </button>
            </div>

            {/* Right Column: Visual */}
            <div className="relative" data-aos="fade-left">
              {/* Abstract representation of Notion DB + GCP */}
              <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                  <NotionLogo />
                  <span className="font-semibold text-sm text-slate-700">Clinical Spanish / Database</span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center px-4 gap-4">
                      <div className="w-4 h-4 rounded bg-slate-200"></div>
                      <div className="w-1/3 h-2 rounded bg-slate-200"></div>
                      <div className="w-1/4 h-2 rounded bg-[#E91E63]/20 ml-auto"></div>
                    </div>
                  ))}
                </div>
                
                {/* Glowing Data Line */}
                <div className="absolute -right-6 top-1/2 w-24 h-1 bg-gradient-to-r from-[#E91E63] to-transparent transform -translate-y-1/2 hidden lg:block"></div>
                
                {/* Cloud Icon */}
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg border border-slate-100 hidden lg:flex items-center justify-center">
                  <Server className="text-[#E91E63]" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Muted Peach Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#E91E63 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Not just another empty template. <br/>A connected teaching engine.
            </h2>
            <p className="text-lg text-slate-600">
              Most Notion templates are just empty databases you still have to fill manually. Linguis modules plug your workspace directly into our secure cloud engine—so the heavy lifting happens automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E91E63]/10 transition-colors">
                <Copy className="text-slate-600 group-hover:text-[#E91E63] transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Snap it into your workspace.</h3>
              <p className="text-slate-600 leading-relaxed">
                Duplicate our custom Notion modules with one click. They look and feel like the beautiful, organized templates you love, but they come secretly wired for action.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E91E63]/10 transition-colors">
                <Cloud className="text-slate-600 group-hover:text-[#E91E63] transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Give the engine a command.</h3>
              <p className="text-slate-600 leading-relaxed">
                Need a B2 Spanish text about this week's space launch? Type your request directly into Notion. Our backend engine (powered securely by Google Cloud) wakes up, processes it, and generates the content.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E91E63]/10 transition-colors">
                <FastForward className="text-slate-600 group-hover:text-[#E91E63] transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Watch your curriculum build itself.</h3>
              <p className="text-slate-600 leading-relaxed">
                In seconds, your once-empty page populates with graded reading texts, vocabulary lists, and grammar drills. No switching tabs. Just a perfectly formatted lesson.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Module Library */}
      <section id="module-library" className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">The Module Library</h2>
            <p className="text-slate-400">Select a specialized system to upgrade your workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Healthcare */}
            <div className="app-store-card" data-aos="fade-up" data-aos-delay="100">
              <div className="badge">🩺 FOR HEALTHCARE</div>
              <h3 className="text-2xl font-bold mb-4">Clinical Spanish "Shift-Ready" Hub</h3>
              <p className="text-slate-300 mb-8 flex-grow">
                Don't just study Spanish; arrive for your shift prepared for triage.
              </p>
              <button className="w-full py-3 px-4 rounded-lg border border-white/20 hover:bg-white hover:text-[#0F172A] transition-colors font-medium flex items-center justify-center gap-2">
                View Medical Module <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 2: Expats */}
            <div className="app-store-card" data-aos="fade-up" data-aos-delay="200">
              <div className="badge">🇯🇵 FOR EXPATS & RELOCATION</div>
              <h3 className="text-2xl font-bold mb-4">JLPT N2 "Last 90 Days" Success Engine</h3>
              <p className="text-slate-300 mb-8 flex-grow">
                Stop guessing your exam readiness. Track your coverage with mathematical precision.
              </p>
              <button className="w-full py-3 px-4 rounded-lg border border-white/20 hover:bg-white hover:text-[#0F172A] transition-colors font-medium flex items-center justify-center gap-2">
                View JLPT Module <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 3: Tutors */}
            <div className="app-store-card" data-aos="fade-up" data-aos-delay="300">
              <div className="badge">📈 FOR INDEPENDENT EDUCATORS</div>
              <h3 className="text-2xl font-bold mb-4">Tutor CRM + Automated CEFR Analytics</h3>
              <p className="text-slate-300 mb-8 flex-grow">
                Charge more by providing automated, professional diagnostic audits for your students.
              </p>
              <button className="w-full py-3 px-4 rounded-lg border border-white/20 hover:bg-white hover:text-[#0F172A] transition-colors font-medium flex items-center justify-center gap-2">
                View Tutor CRM <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing Philosophy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Simple, scalable pricing.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Box: The Template */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" data-aos="fade-right">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Activity className="text-slate-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">The Hub (One-Time Purchase)</h3>
              <p className="text-slate-600">
                Buy the Notion module once. It is yours forever. Fully customizable, beautifully designed, and ready to organize your workflow immediately.
              </p>
            </div>

            {/* Right Box: The Engine */}
            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white" data-aos="fade-left">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Server className="text-[#E91E63]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">The Engine (AI Credits)</h3>
              <p className="text-slate-300">
                Subscribe to AI credits to activate the GCP backend for autonomous generation, audio shadowing, and analytics. The AI is your 24/7 personal linguistic assistant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotionSync;
