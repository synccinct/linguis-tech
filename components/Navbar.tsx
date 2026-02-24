import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-800">
        <p className="font-medium">
          linguis.learn · personalised lessons and practice — powered by linguis.lesson
        </p>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                <div className="text-2xl font-bold text-slate-900 tracking-tighter">
                  linguis<span className="text-pink-600">.tech</span>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/notion-sync" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.606 0-.606-.607-.7-1.446-.7-1.12 0-4.853.28-10.73.653-1.865.117-2.985.187-3.517.98zm-2.938 2.61c-.093.56-.093.793.326 1.166l12.795 12.396c.467.42.747.467 1.26.233.793-.326.793-.793.793-1.913V8.453c0-.466 0-.793-.56-.793-.373 0-.653.047-.84.233-.186.187-.233.42-.233.887v8.946l-10.73-10.44c-.28-.28-.466-.326-.84-.28-.653.094-1.586.234-1.97.374zm15.462 10.953c0 .653.56.7 1.166.7.793 0 1.26-.233 1.26-.886V5.234c0-.606-.42-.793-1.073-.793-.56 0-1.353.14-1.353.7v11.62z"/>
                </svg>
                <span>Notion Sync</span>
              </Link>
              <a 
                href="#signup" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 transform duration-200"
              >
                Get Lessons
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/notion-sync"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.606 0-.606-.607-.7-1.446-.7-1.12 0-4.853.28-10.73.653-1.865.117-2.985.187-3.517.98zm-2.938 2.61c-.093.56-.093.793.326 1.166l12.795 12.396c.467.42.747.467 1.26.233.793-.326.793-.793.793-1.913V8.453c0-.466 0-.793-.56-.793-.373 0-.653.047-.84.233-.186.187-.233.42-.233.887v8.946l-10.73-10.44c-.28-.28-.466-.326-.84-.28-.653.094-1.586.234-1.97.374zm15.462 10.953c0 .653.56.7 1.166.7.793 0 1.26-.233 1.26-.886V5.234c0-.606-.42-.793-1.073-.793-.56 0-1.353.14-1.353.7v11.62z"/>
                </svg>
                Notion Sync
              </Link>
              <a 
                href="#signup"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-600 font-bold hover:bg-pink-50"
              >
                Get Free Lessons
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;