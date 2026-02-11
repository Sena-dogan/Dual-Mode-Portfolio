import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isDevMode: boolean;
  toggleMode: () => void;
}

const Hero: React.FC<HeroProps> = ({ isDevMode, toggleMode }) => {
  return (
    <section className="relative pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDevMode ? 'text-white' : 'text-gray-900'}`}>
          {isDevMode ? 'Exploring the Universe,' : 'Analyzing the Universe,'}
          <br />
          <span className={`${isDevMode ? 'text-indigo-500' : 'text-purple-600'}`}>
            {isDevMode ? 'One Line of Code at a Time.' : 'One Particle at a Time.'}
          </span>
        </h1>

        <p className={`max-w-2xl mx-auto text-lg mb-12 ${isDevMode ? 'text-slate-400 font-mono' : 'text-gray-600'}`}>
          {isDevMode
            ? "Co-founder of DevOpen. Specializing in high-performance Mobile Architecture, Flutter cross-platform development, and UI/UX Design."
            : "Physics Student & Researcher at YTU specializing in Nuclear Physics and Quantum Computing. Bridging complex analytical problems with software."}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <a href="https://github.com/Sena-dogan" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-lg font-medium transition-colors inline-block ${
            isDevMode
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 font-mono'
            : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}>
            {isDevMode ? 'View GitHub ->' : 'View Research'}
          </a>
          <a href="mailto:senadgn@proton.me" className={`px-6 py-3 rounded-lg font-medium border transition-colors inline-block ${
            isDevMode
            ? 'border-slate-700 text-slate-300 hover:bg-slate-800 font-mono'
            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}>
            {isDevMode ? 'Contact Me' : 'Contact'}
          </a>
        </div>

        {/* Dynamic Visual Content */}
        <div className="relative max-w-4xl mx-auto">
          {isDevMode ? (
            // DEV MODE: Code Editor
            <div className="rounded-xl overflow-hidden bg-[#1E1E1E] shadow-2xl border border-slate-700 text-left font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-black/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-slate-500 text-xs">profile.js — sena.dev</div>
              </div>
              <div className="p-6 text-slate-300 overflow-x-auto">
                <div className="leading-relaxed">
                  <span className="text-slate-500 select-none mr-4">1</span> <span className="text-purple-400">class</span> <span className="text-yellow-400">Sena</span> <span className="text-purple-400">extends</span> <span className="text-yellow-400">Developer</span> {'{'}<br/>
                  <span className="text-slate-500 select-none mr-4">2</span> &nbsp;&nbsp;<span className="text-blue-400">constructor</span>() {'{'}<br/>
                  <span className="text-slate-500 select-none mr-4">3</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">super</span>();<br/>
                  <span className="text-slate-500 select-none mr-4">4</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this</span>.role = <span className="text-green-400">'Co-founder & Dev'</span>;<br/>
                  <span className="text-slate-500 select-none mr-4">5</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this</span>.location = <span className="text-green-400">'Istanbul, TR'</span>;<br/>
                  <span className="text-slate-500 select-none mr-4">6</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this</span>.stack = [<span className="text-green-400">'Flutter'</span>, <span className="text-green-400">'C++'</span>];<br/>
                  <span className="text-slate-500 select-none mr-4">7</span> &nbsp;&nbsp;{'}'}<br/>
                  <span className="text-slate-500 select-none mr-4">8</span> <br/>
                  <span className="text-slate-500 select-none mr-4">9</span> &nbsp;&nbsp;<span className="text-yellow-400">create</span>(<span className="text-orange-400">product</span>) {'{'}<br/>
                  <span className="text-slate-500 select-none mr-4">10</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> `<span className="text-green-400">Building ${'{'}product.name{'}'}...</span>`;<br/>
                  <span className="text-slate-500 select-none mr-4">11</span> &nbsp;&nbsp;{'}'}<br/>
                  <span className="text-slate-500 select-none mr-4">12</span> {'}'}
                </div>
              </div>
              <div className="px-4 py-1 bg-[#007acc] text-white text-xs flex justify-between">
                <span>main*</span>
                <span>JavaScript UTF-8</span>
              </div>
            </div>
          ) : (
            // LAB MODE: E=mc2 Visual
            <div className="relative w-full flex flex-col items-center justify-center pt-8">
              {/* Glass Cards in Background */}
              <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-100 rounded-2xl rotate-12 opacity-50 blur-sm"></div>
              <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-60 blur-md"></div>
              
              {/* Main Formula */}
              <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/60 p-12 rounded-3xl shadow-xl flex flex-col items-center mb-20">
                 <h2 className="text-7xl md:text-9xl font-serif italic font-bold text-slate-800">
                   E=mc<sup className="text-5xl md:text-7xl">2</sup>
                 </h2>
                 <p className="mt-4 text-xl md:text-2xl font-mono text-purple-600/80">
                   Energy = Milk × Coffee²
                 </p>
              </div>
              
              {/* Toggle outside the visual, below it */}
              <div 
                onClick={toggleMode}
                className="relative z-10 flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-purple-100 cursor-pointer hover:bg-white transition-all shadow-sm"
              >
                <div className="w-8 h-4 bg-slate-200 rounded-full p-0.5 transition-colors duration-300">
                    <div className="w-3 h-3 bg-white rounded-full shadow-sm translate-x-0 transition-transform duration-300"></div>
                </div>
                <span className="text-sm font-medium text-slate-600">Switch to Developer Mode</span>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 text-purple-300 opacity-50 animate-bounce delay-700">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div className="absolute bottom-10 right-10 text-purple-300 opacity-50 animate-bounce">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;