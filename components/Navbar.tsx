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
          The only AI lesson generator built by actual linguists.
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