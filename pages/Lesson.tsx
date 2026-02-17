import React from 'react';
import { Cpu, Layers, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lesson: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-pink-400 text-sm font-medium mb-6"
          >
            <Cpu size={16} />
            <span>The AI Engine</span>
          </div>
          <h1 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            linguis.lesson
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-xl md:text-2xl text-slate-400 mb-8 font-light"
          >
            The engine behind your lessons
          </p>
          <p 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            An AI lesson engine that turns real-world stories into level-appropriate, age-aware language lessons in minutes.
          </p>
        </div>
      </section>

      {/* What it does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What linguis.lesson does</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                linguis.lesson is the AI engine that powers linguis.learn. It takes a simple brief—language, level, age group, learning goal and interests—and builds a complete lesson around a current story in the news or culture.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Each lesson includes a graded reading text, comprehension tasks, vocabulary and grammar drawn from the text, and a guided writing activity, all in the target language.
              </p>
            </div>
            <div data-aos="fade-left" className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
               {/* Visual representation of engine inputs */}
               <div className="space-y-4">
                  <div 
                    data-aos="fade-up" 
                    data-aos-delay="100"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200"
                  >
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">1</div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase">Input</span>
                      <span className="font-semibold text-slate-800">Brief & Parameters</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />
                  </div>
                  <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg shadow-lg border border-slate-800 text-white"
                  >
                    <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase">Processing</span>
                      <span className="font-semibold">linguis.lesson Engine</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />
                  </div>
                  <div 
                    data-aos="fade-up" 
                    data-aos-delay="300"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">3</div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase">Output</span>
                      <span className="font-semibold text-slate-800">Complete Lesson Pack</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-4">
              <Layers className="text-pink-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          </div>
          
          <div 
            data-aos="zoom-in"
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Under the hood, linguis.lesson combines curated content sources, language-level profiles (CEFR and HSK), grammar pattern banks and vocabulary frequency data. It selects an age-appropriate story, adapts the text to the right difficulty, and then designs tasks that match the learner’s profile. The result is a consistent framework you can trust, instead of a random AI output you have to rebuild from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12" data-aos="fade-up">Who it’s for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              data-aos="fade-left" 
              data-aos-delay="0"
              className="p-8 border-l-4 border-pink-500 bg-slate-50 rounded-r-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Teachers</h3>
              <p className="text-slate-600">Who want faster, better lesson prep without sacrificing quality.</p>
            </div>
            <div 
              data-aos="fade-left" 
              data-aos-delay="100"
              className="p-8 border-l-4 border-pink-500 bg-slate-50 rounded-r-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Schools</h3>
              <p className="text-slate-600">That need coherent, current materials across multiple languages and levels.</p>
            </div>
            <div 
              data-aos="fade-left" 
              data-aos-delay="200"
              className="p-8 border-l-4 border-pink-500 bg-slate-50 rounded-r-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Creators</h3>
              <p className="text-slate-600">Who want to spin their own content into structured language lessons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where to see it */}
      <section className="py-20 bg-slate-900 text-white text-center">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in-up">
            <Target className="mx-auto text-pink-500 mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">Where you see it today</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Right now, you see linguis.lesson in the weekly current-events lessons from linguis.learn and in my private beta lesson generator for teachers. Over time, it will also power interactive practice, student apps and analytics.
            </p>
            
            <a 
              href="/#signup" 
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all"
            >
              Get weekly lessons from linguis.learn
            </a>
         </div>
      </section>
    </div>
  );
};

export default Lesson;