import React, { useState, useEffect } from 'react';
import { Check, Newspaper, BookOpen, Clock, Globe, Zap, Sparkles, FileText, Printer, Layout, Users, Star, Bot, UserCheck, CheckCircle2, User, ArrowRight, School } from 'lucide-react';
import { LanguageOption, StudentGroup } from '../types';

const getWeekNumber = (date: Date) => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
];

// Mock data for real-time preview
const PREVIEWS: Record<LanguageOption, { title: string; content: string; vocab: string[] }> = {
  'English (EFL)': {
    title: "Space Tourism: The Next Frontier",
    content: "As commercial space flights become a reality, we look at how tourism is reaching for the stars. Billionaires are racing to build hotels in orbit, but critics argue the environmental cost is too high for just a few minutes of weightlessness.",
    vocab: ["orbit", "commercial", "frontier"]
  },
  'German': {
    title: "Weltraumtourismus: Die nächste Grenze",
    content: "Da kommerzielle Raumflüge Realität werden, betrachten wir, wie der Tourismus nach den Sternen greift. Milliardäre wetteifern darum, Hotels in der Umlaufbahn zu bauen, aber Kritiker argumentieren, dass die Umweltkosten zu hoch sind.",
    vocab: ["Umlaufbahn", "kommerziell", "Grenze"]
  },
  'French': {
    title: "Le tourisme spatial : La nouvelle frontière",
    content: "Alors que les vols spatiaux commerciaux deviennent une réalité, nous examinons comment le tourisme vise les étoiles. Les milliardaires font la course pour construire des hôtels en orbite, mais les critiques soulignent le coût environnemental.",
    vocab: ["orbite", "commercial", "frontière"]
  },
  'Spanish': {
    title: "Turismo espacial: La próxima frontera",
    content: "A medida que los vuelos espaciales comerciales se convierten en realidad, observamos cómo el turismo alcanza las estrellas. Los multimillonarios compiten por construir hoteles en órbita, pero los críticos argumentan sobre el coste ambiental.",
    vocab: ["órbita", "comercial", "frontera"]
  },
  'Mandarin': {
    title: "太空旅游：下一个前沿",
    content: "随着商业太空飞行成为现实，我们要看看旅游业是如何摘星的。亿万富翁们正争相在轨道上建造酒店，但批评人士认为，为了几分钟的失重体验，环境代价太高了。",
    vocab: ["轨道", "商业", "前沿"]
  }
};

const LANGUAGES_DISPLAY = ['English (EFL)', 'German', 'French', 'Spanish', 'Mandarin'];

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageOption[]>([]);
  const [studentGroup, setStudentGroup] = useState<StudentGroup | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  // Cycling text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % LANGUAGES_DISPLAY.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = (lang: LanguageOption) => {
    setSelectedLanguages(prev => 
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  // Determine which preview to show (most recently selected, or default to English/Placeholder)
  const activePreviewLang: LanguageOption | null = selectedLanguages.length > 0 
    ? selectedLanguages[selectedLanguages.length - 1] 
    : null;

  const previewData = activePreviewLang ? PREVIEWS[activePreviewLang] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(2deg); }
            50% { transform: translateY(-15px) rotate(4deg); }
          }
          .animate-paper-float {
            animation: float 8s ease-in-out infinite;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 z-0 opacity-40" 
             style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy */}
            <div className="max-w-2xl">
              <h1 
                data-aos="fade-up"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]"
              >
                <span className="relative inline-block mr-3">
                  Fresh
                  <svg className="absolute w-full h-[15px] -bottom-2 left-0 text-pink-500 -z-10" viewBox="0 0 100 15" preserveAspectRatio="none">
                     <path d="M0,13 L100,5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
                Lesson Content. Every Week. <br />
                <span className="text-pink-600 transition-opacity duration-500 block mt-2">
                  For {LANGUAGES_DISPLAY[currentLangIndex]}
                </span>
              </h1>
              
              <p 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="text-xl text-slate-600 mb-8 leading-relaxed font-medium"
              >
                Save hours of prep every week. Get graded, classroom-ready reading materials based on this week's top stories—delivered straight to your inbox.
              </p>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex flex-col items-start gap-6"
              >
                <a 
                  href="#signup" 
                  className="bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Get Free Weekly Lessons
                </a>
                
                {/* Social Proof */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-4">
                     {AVATARS.map((src, i) => (
                       <img 
                          key={i} 
                          src={src} 
                          alt={`Member ${i+1}`}
                          className="w-10 h-10 rounded-full border-2 border-white object-cover ring-1 ring-slate-100"
                       />
                     ))}
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-transform hover:scale-[1.02]">
                    <div className="text-sm font-medium text-slate-700">
                      Join <span className="font-bold text-slate-900">1,000+</span> educators
                    </div>
                    <div className="bg-blue-100 text-blue-600 rounded-full p-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-slate-500" data-aos="fade-up" data-aos-delay="300">
                 <Check size={16} className="text-green-500" />
                 <span>Free for teachers</span>
                 <span className="mx-2">·</span>
                 <Check size={16} className="text-green-500" />
                 <span>Unsubscribe anytime</span>
              </div>
            </div>

            {/* Right Column: Visual Product Shot */}
            <div className="hidden lg:flex relative h-[700px] items-center justify-center perspective-[1000px]" data-aos="fade-left" data-aos-delay="200">
               {/* 1. Glow / Backlight */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
                  {/* Hot Pink Orb */}
                  <div className="absolute top-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[90px] mix-blend-multiply animate-pulse"></div>
                  {/* Navy/Blue Orb */}
                  <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-900/20 rounded-full blur-[90px] mix-blend-multiply"></div>
               </div>
               
               {/* 2. Floating Animation Wrapper */}
               <div className="relative w-full max-w-[480px] animate-paper-float">
                  
                  {/* Bottom Sheet */}
                  <div className="absolute inset-0 bg-white rounded-xl border border-slate-100 shadow-lg transform -rotate-6 scale-[0.95] origin-center -z-20"></div>
                  
                  {/* Middle Sheet */}
                  <div className="absolute inset-0 bg-white rounded-xl border border-slate-100 shadow-lg transform -rotate-3 scale-[0.98] origin-center -z-10"></div>

                  {/* Main Sheet */}
                  <div className="relative bg-white rounded-xl border border-slate-100 p-8 sm:p-10 h-auto min-h-[620px] overflow-hidden 
                                  shadow-[0_2px_10px_rgba(0,0,0,0.06),0_20px_40px_-5px_rgba(0,0,0,0.1),0_50px_100px_-20px_rgba(219,39,119,0.25)]">
                     
                     {/* Paper Header */}
                     <div className="flex justify-between items-start mb-6 border-b-2 border-slate-100 pb-4">
                        <div>
                           <div className="text-2xl font-bold text-slate-900 tracking-tighter">
                              linguis<span className="text-pink-600">.tech</span>
                           </div>
                           <div className="flex gap-2 mt-2">
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wide rounded">Level: B1</span>
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wide rounded">Target: Future Forms</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                              Week {getWeekNumber(new Date())}
                           </div>
                        </div>
                     </div>
                     
                     {/* Paper Content: Real Article Look */}
                     <div className="relative">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                           Space Tourism: The Next Frontier?
                        </h2>
                        
                        <div className="font-serif text-lg text-slate-600 leading-relaxed space-y-4">
                           <p>
                              As commercial <span className="font-semibold text-slate-800 bg-pink-50/50 px-1 rounded">space flights</span> become a reality, we look at how tourism is finally reaching for the stars.
                           </p>
                           <p className="relative">
                              Billionaires are racing to build hotels in 
                              <span className="relative inline-block mx-1 font-semibold text-slate-800">
                                 orbit
                                 {/* Hand drawn circle */}
                                 <svg className="absolute -top-3 -left-4 w-[150%] h-[160%] text-blue-500 pointer-events-none opacity-90" viewBox="0 0 100 60" preserveAspectRatio="none">
                                    <path d="M5,30 Q25,5 50,5 T95,30 Q75,55 50,55 T5,30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                 </svg>

                                 {/* Handwritten Note pointing down to this word */}
                                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 transform -rotate-12 flex flex-col items-center pointer-events-none">
                                    <span className="font-handwriting text-blue-600 text-lg font-bold whitespace-nowrap">Great vocab!</span>
                                    <svg className="w-5 h-5 text-blue-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                       <path d="M12 2v14M12 16l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                 </div>
                              </span>, 
                              but critics argue the environmental cost is too high for just a few minutes of weightlessness.
                           </p>

                           <p>
                              Is this the future of travel, or just a new playground for the super-rich?
                           </p>
                        </div>
                        
                        {/* Discussion Preview */}
                        <div className="mt-8 pt-6 border-t-2 border-slate-100">
                           <div className="flex items-center gap-2 mb-3">
                              <div className="bg-slate-900 text-white rounded-full p-1">
                                 <Zap size={12} />
                              </div>
                              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Discussion Points</h3>
                           </div>
                           <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 font-medium">
                              <li>Would you pay to go to space?</li>
                              <li>What are the risks of commercial travel?</li>
                           </ul>
                        </div>
                     </div>

                     {/* Premium Badge */}
                     <div className="absolute -right-12 top-8 bg-pink-600 text-white text-xs font-bold py-1 px-12 rotate-45 shadow-sm">
                        VERIFIED
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Peach Dot Grid Background - subtle */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#f472b6 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          
          {/* Visual Bridge: Transformation Badge */}
          <div className="flex items-center justify-center gap-6 mb-12">
             {/* Old Way */}
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
               <FileText className="text-slate-500" size={28} strokeWidth={2} />
             </div>

             {/* Arrow */}
             <div className="text-slate-300">
                <ArrowRight size={32} strokeWidth={3} />
             </div>

             {/* New Way */}
             <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-200 ring-4 ring-pink-50">
               <Layout className="text-white" size={28} strokeWidth={2} />
             </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Stop hunting for texts. Start teaching the world.
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Textbooks can't keep up. We bridge the gap between outdated curriculums and real life with <strong className="text-slate-900 font-bold">fresh, graded news stories</strong> delivered to your inbox every week.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pill 1 */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-pink-200 hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-4 text-left group">
               <div className="relative bg-pink-50 p-2.5 rounded-lg text-pink-600 group-hover:bg-pink-100 transition-colors flex items-center justify-center">
                  <Zap size={24} strokeWidth={0} fill="currentColor" className="opacity-20 absolute" />
                  <Zap size={24} strokeWidth={2.5} className="relative z-10" />
               </div>
               <div>
                  <div className="font-bold text-slate-900 leading-tight">Cut prep time</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Save ~3 hours/week</div>
               </div>
            </div>

            {/* Pill 2 */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-pink-200 hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-4 text-left group">
               <div className="relative bg-pink-50 p-2.5 rounded-lg text-pink-600 group-hover:bg-pink-100 transition-colors flex items-center justify-center">
                  <Sparkles size={24} strokeWidth={0} fill="currentColor" className="opacity-20 absolute" />
                  <Sparkles size={24} strokeWidth={2.5} className="relative z-10" />
               </div>
               <div>
                  <div className="font-bold text-slate-900 leading-tight">Engage students</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">100% current events</div>
               </div>
            </div>

            {/* Pill 3 */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-pink-200 hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-4 text-left group">
               <div className="relative bg-pink-50 p-2.5 rounded-lg text-pink-600 group-hover:bg-pink-100 transition-colors flex items-center justify-center">
                  <School size={24} strokeWidth={0} fill="currentColor" className="opacity-20 absolute" />
                  <School size={24} strokeWidth={2.5} className="relative z-10" />
               </div>
               <div>
                  <div className="font-bold text-slate-900 leading-tight">Real Classrooms</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Print & Go ready</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
         {/* Dot Grid Background (White/Grey with low opacity) */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Everything you need for a perfect lesson.</h2>
            <p className="text-xl text-slate-400 font-light">No more scrambling for resources. One email, zero stress.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="0"
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/50 hover:bg-slate-800 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="bg-slate-900/50 rounded-xl p-4 mb-6 border border-slate-700 group-hover:border-pink-500/30 transition-colors">
                <Globe className="text-pink-500 fill-pink-500/20" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Level Content</h3>
              <p className="text-slate-300 leading-relaxed">
                Graded reading materials for 5 languages. Whether you teach beginners or advanced learners, we've got you covered.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/50 hover:bg-slate-800 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="bg-slate-900/50 rounded-xl p-4 mb-6 border border-slate-700 group-hover:border-pink-500/30 transition-colors">
                <Newspaper className="text-pink-500 fill-pink-500/20" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fresh, Real-World Topics</h3>
              <p className="text-slate-300 leading-relaxed">
                Ditch the boring dialogs. Engage students with this week's biggest stories in entertainment, tech, and world affairs.
              </p>
            </div>

            {/* Card 3 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/50 hover:bg-slate-800 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="bg-slate-900/50 rounded-xl p-4 mb-6 border border-slate-700 group-hover:border-pink-500/30 transition-colors">
                 <BookOpen className="text-pink-500 fill-pink-500/20" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">The 'Zero-Prep' Toolkit</h3>
              <p className="text-slate-300 leading-relaxed">
                More than just a text. Get comprehension questions, vocab lists, grammar drills, and writing tasks—formatted and ready to print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="py-24 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Not just another generic AI worksheet.</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Most AI tools hallucinate or sound robotic. We do it differently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div 
              className="bg-white p-8 rounded-2xl shadow-sm border border-pink-100 flex flex-col items-center text-center" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
               <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 text-pink-600">
                 <Bot size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Structured by AI</h3>
               <p className="text-slate-600 leading-relaxed">
                 We scan global news to find the perfect stories, extracting key vocabulary and grammar patterns instantly.
               </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-2xl shadow-sm border border-pink-100 flex flex-col items-center text-center relative overflow-hidden" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
               <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                 <CheckCircle2 size={12} /> Verified
               </div>
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                 <UserCheck size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Refined by Humans</h3>
               <p className="text-slate-600 leading-relaxed">
                 Every lesson is reviewed by a language specialist to ensure it is age-appropriate and culturally accurate.
               </p>
            </div>
          </div>

          {/* Founder Signature */}
          <div className="flex flex-col items-center justify-center text-center" data-aos="fade-up" data-aos-delay="300">
             <div className="bg-white p-1 rounded-full border-2 border-slate-200 mb-4 shadow-sm">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
                   <User size={32} className="text-slate-400" />
                </div>
             </div>
             <p className="text-slate-900 font-bold text-lg mb-1">Built by a Linguist & AI Architect</p>
             <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Who actually teaches languages</p>
          </div>
        </div>
      </section>

      {/* Vision / Mission Section */}
      <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight" data-aos="fade-up">This is just the beginning.</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left" data-aos="fade-up" data-aos-delay="100">
              <div>
                  <p className="text-lg text-slate-300 leading-relaxed font-light">
                      We are building the world's first <span className="text-white font-semibold">Language-First AI Studio</span>.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed font-light mt-4">
                      While we start by delivering high-quality static lessons to your inbox, our goal is to give you tools that adapt to every single student.
                  </p>
              </div>
              <div>
                  <p className="text-lg text-slate-300 leading-relaxed font-light">
                      No generic content. No hallucinations. Just perfect practice, generated in seconds.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-pink-500 font-medium">
                     <ArrowRight size={20} />
                     <span>Building the future of language teaching</span>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form & Preview */}
      <section id="signup" className="py-24 bg-white" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-slate-900 p-8 text-center border-b border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-2">Join the weekly lesson list</h2>
              <p className="text-slate-400">Get fresh materials every week.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row">
              {/* Form Section */}
              <div className="lg:w-1/2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 relative">
                {submitted ? (
                  <div className="text-center py-24 h-full flex flex-col justify-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm animate-bounce-short">
                      <Check className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                    <p className="text-slate-600 mb-6">Keep an eye on your inbox for the next pack of lessons.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-pink-600 font-medium hover:text-pink-700 hover:underline"
                    >
                      Add another email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:scale-[1.01] outline-none transition-all duration-200 shadow-sm"
                        placeholder="teacher@school.edu"
                      />
                    </div>

                    <div>
                      <span className="block text-sm font-semibold text-slate-700 mb-3 ml-1">
                        Which languages do you teach?
                      </span>
                      <div className="flex flex-wrap gap-3">
                        {(['English (EFL)', 'German', 'French', 'Spanish', 'Mandarin'] as LanguageOption[]).map((lang) => (
                          <button
                            key={lang}
                            type="button"
                            onClick={() => toggleLanguage(lang)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                              selectedLanguages.includes(lang)
                                ? 'bg-pink-600 text-white shadow-md ring-2 ring-pink-600 ring-offset-1'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:shadow-sm'
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-sm font-semibold text-slate-700 mb-3 ml-1">
                        Who do you mainly teach?
                      </span>
                      <div className="grid grid-cols-3 gap-4">
                        {(['Teens', 'Adults', 'Both'] as StudentGroup[]).map((group) => (
                          <button
                            key={group}
                            type="button"
                            onClick={() => setStudentGroup(group)}
                            className={`py-3 px-4 rounded-xl text-sm font-medium border-2 transition-all duration-200 transform hover:-translate-y-0.5 ${
                              studentGroup === group
                                ? 'border-pink-600 bg-pink-50 text-pink-700 shadow-md'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:shadow-sm'
                            }`}
                          >
                            {group}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {isSubmitting ? 'Signing up...' : 'Send me the next pack'}
                      {!isSubmitting && <Zap size={18} />}
                    </button>

                    <p className="text-xs text-slate-400 text-center leading-relaxed px-4">
                      You’ll also be the first to hear when I open early access to the full linguis.learn platform and new tools from linguis.lesson. No spam, no sharing your email.
                    </p>
                  </form>
                )}
              </div>

              {/* Preview Section - Visual Feedback */}
              <div className="lg:w-1/2 bg-slate-50 p-8 md:p-12 flex flex-col items-center justify-center border-t lg:border-t-0 border-slate-100">
                <div className="w-full max-w-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <Sparkles size={16} className="text-pink-500" />
                      <span>Real-time Preview</span>
                    </div>
                    {activePreviewLang && (
                       <span className="text-xs font-bold text-slate-300 px-2 py-1 bg-slate-200 rounded uppercase">Mock</span>
                    )}
                  </div>

                  {previewData ? (
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                       {/* Mock Document Header */}
                       <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-400"></div>
                             <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                             <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          </div>
                          <span className="text-slate-400 text-xs font-mono">lesson_gen_v1.pdf</span>
                       </div>
                       
                       {/* Mock Content */}
                       <div className="p-6 md:p-8 space-y-6">
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                              {activePreviewLang}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                              {studentGroup === 'Teens' ? 'Level B1' : studentGroup === 'Adults' ? 'Level B2' : 'All Levels'}
                            </span>
                          </div>

                          <div className="space-y-3">
                             <h4 className="text-xl font-bold text-slate-900 leading-tight">
                               {previewData.title}
                             </h4>
                             <p className="text-sm text-slate-600 leading-relaxed">
                               {previewData.content}
                             </p>
                          </div>

                          <div className="pt-4 border-t border-slate-100">
                             <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Included Materials</p>
                             <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                   <FileText size={14} className="text-pink-500" />
                                   <span>Full Article</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                   <Layout size={14} className="text-pink-500" />
                                   <span>Comprehension</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                   <Zap size={14} className="text-pink-500" />
                                   <span>{previewData.vocab.length} Vocab items</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                   <Printer size={14} className="text-pink-500" />
                                   <span>Printable PDF</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  ) : (
                    <div className="bg-white/50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center h-64 flex flex-col items-center justify-center transition-all duration-300">
                       <Layout className="text-slate-300 mb-4" size={48} />
                       <p className="text-slate-500 font-medium">Select a language to generate a preview</p>
                       <p className="text-slate-400 text-sm mt-2">See what your weekly lesson will look like</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;