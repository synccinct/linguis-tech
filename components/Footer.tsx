import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-slate-900 tracking-tighter mb-6 inline-block">
               linguis<span className="text-pink-600">.tech</span>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-md">
              linguis.tech is a language-first AI studio. I design tools that help teachers, 
              tutors and course creators build richer lessons with less prep—and give learners 
              more personalised, engaging practice in the languages they care about.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-600 hover:text-pink-600 transition-colors">
                  linguis.learn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} linguis.tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;