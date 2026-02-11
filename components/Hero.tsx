import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isDevMode: boolean;
  toggleMode: () => void;
}

const Hero: React.FC<HeroProps> = ({ isDevMode, toggleMode }) => {
  return (
    <section id="hero" className="relative pt-20 pb-10 px-6 overflow-hidden">
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
            ? "I'm a Developer and Product Designer. Specializing in high-performance Mobile Architecture, Flutter cross-platform development, and UI/UX Design."
            : "Physics Student at YTU specializing in Nuclear Physics and Quantum Computing. Bridging complex analytical problems with software."}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-14">
          <a 
            href={isDevMode ? "https://github.com/Sena-dogan" : "#projects"}
            target={isDevMode ? "_blank" : "_self"}
            rel={isDevMode ? "noopener noreferrer" : ""}
            className={`px-6 py-3 rounded-lg font-medium transition-colors inline-block ${
            isDevMode
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 font-mono'
            : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg'
          }`}>
            {isDevMode ? 'View GitHub ->' : 'View Research'}
          </a>
          <a href="mailto:senadgn@proton.me" className={`px-6 py-3 rounded-lg font-medium border transition-colors inline-block ${
            isDevMode
            ? 'border-slate-700 text-slate-300 hover:bg-slate-800 font-mono'
            : 'bg-white border-2 border-purple-200 text-purple-700 hover:border-purple-300 hover:bg-purple-50 shadow-sm'
          }`}>
            {isDevMode ? 'Contact Me' : 'Contact'}
          </a>
        </div>

        {/* Mode Toggle - Central */}
        <div className="flex justify-center mb-16">
          <div 
            onClick={toggleMode}
            className={`flex items-center gap-3 px-6 py-3 rounded-full border cursor-pointer transition-all duration-300 group ${
               isDevMode 
               ? 'bg-slate-800 border-indigo-500/30 text-indigo-300 hover:bg-slate-700 hover:border-indigo-500/60 shadow-lg shadow-indigo-900/10'
               : 'bg-white border-2 border-purple-300 text-purple-700 font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 hover:border-purple-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]'
            }`}
          >
            {isDevMode ? (
               <>
                 <div className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                 </div>
                 <span className="text-sm font-mono font-bold">Switch to Lab Mode</span>
               </>
            ) : (
                <>
                 <div className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                 </div>
                 <span className="text-sm font-bold">Switch to Dev Mode</span>
               </>
            )}
          </div>
        </div>

        {/* Dynamic Visual Content */}
        <div className="relative max-w-4xl mx-auto">
          {isDevMode ? (
            // DEV MODE: Code Editor
            <div className="relative w-full flex flex-col items-center justify-center pt-8">
               {/* Floating Elements - Dev Mode */}
               <div className="absolute -top-16 right-0 md:-right-12 text-indigo-500/40 opacity-70 animate-bounce delay-1000 font-mono text-6xl md:text-8xl font-bold select-none z-0">
                  {`{ }`}
               </div>
               <div className="absolute -bottom-16 left-0 md:-left-12 text-blue-500/40 opacity-70 animate-bounce font-mono text-6xl md:text-8xl font-bold select-none z-0">
                  {`</>`}
               </div>
               <div className="absolute top-12 -left-6 md:-left-24 text-slate-500/30 opacity-50 animate-pulse font-mono text-5xl md:text-7xl font-bold select-none z-0">
                  0101
               </div>

              <div className="relative z-10 rounded-xl overflow-hidden bg-[#1E1E1E] shadow-2xl border border-slate-700 text-left font-mono text-sm w-full">
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
                    <span className="text-slate-500 select-none mr-4">4</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this</span>.role = <span className="text-green-400">'Developer && Product Designer'</span>;<br/>
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
{/* Toggle moved to main area */}
              
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