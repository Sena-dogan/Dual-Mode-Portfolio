import React from 'react';
import { SkillElement } from '../types';

interface SkillsProps {
  isDevMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDevMode }) => {
  const elements: SkillElement[] = [
    { symbol: 'Fl', name: 'Flutter', number: 1, category: 'Mobile', color: 'bg-indigo-500' },
    { symbol: 'Da', name: 'Dart', number: 2, category: 'Lang', color: 'bg-blue-500' },
    { symbol: 'Cp', name: 'C/C++', number: 3, category: 'Sys', color: 'bg-green-500' },
    { symbol: 'Fi', name: 'Figma', number: 4, category: 'Design', color: 'bg-red-500' },
    { symbol: 'Qt', name: 'Qt 6', number: 6, category: 'GUI', color: 'bg-amber-500' },
    { symbol: 'Sw', name: 'SwiftUI', number: 12, category: 'iOS', color: 'bg-orange-500' },
    { symbol: 'Py', name: 'Python', number: 14, category: 'Script', color: 'bg-yellow-500' },
    { symbol: 'Fb', name: 'Firebase', number: 8, category: 'Backend', color: 'bg-teal-500' },
    { symbol: 'Gi', name: 'Git', number: 17, category: 'Tool', color: 'bg-slate-500' },
    { symbol: 'Qb', name: 'QBronze', number: 88, category: 'Cert', color: 'bg-purple-500' },
  ];

  return (
    <section className={`py-20 px-6 ${isDevMode ? 'bg-[#0f172a]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 ${
                isDevMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700/50' : 'bg-purple-100 text-purple-700'
            }`}>
                {isDevMode ? 'STACK TRACE' : 'COMPETENCIES'}
            </span>
          <h2 className={`text-3xl font-bold ${isDevMode ? 'text-white' : 'text-gray-900'}`}>
            {isDevMode ? 'Stack Trace' : 'The Laboratory'}
          </h2>
          <p className={`mt-2 ${isDevMode ? 'text-slate-400 font-mono text-sm' : 'text-gray-500'}`}>
             {isDevMode ? '// Current technological dependencies' : 'Periodic Table of Skills'}
          </p>
        </div>

        {isDevMode ? (
          // DEV MODE: Code Block
          <div className="bg-[#1e293b] rounded-xl p-8 border border-slate-700 font-mono shadow-2xl relative overflow-hidden">
             {/* Decorative Braces */}
             <div className="absolute top-4 right-8 text-8xl text-slate-800 select-none font-serif opacity-50">{'}'}</div>
             <div className="absolute top-4 right-24 text-8xl text-slate-800 select-none font-serif opacity-50">{'{'}</div>

             <pre className="text-sm md:text-base leading-relaxed overflow-x-auto">
                <code>
                    <span className="text-purple-400">const</span> <span className="text-yellow-400">myStack</span> <span className="text-purple-400">=</span> {'{'}<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"mobile"</span>: [<span className="text-green-400">"Flutter"</span>, <span className="text-green-400">"SwiftUI"</span>],<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"design"</span>: [<span className="text-green-400">"Figma"</span>, <span className="text-green-400">"UI/UX"</span>],<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"backend"</span>: [<span className="text-green-400">"Firebase"</span>, <span className="text-green-400">"Node.js"</span>],<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"languages"</span>: [<span className="text-green-400">"Dart"</span>, <span className="text-green-400">"C/C++"</span>, <span className="text-green-400">"Python"</span>],<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"tools"</span>: {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">"version_control"</span>: <span className="text-green-400">"Git"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">"state_mgmt"</span>: <span className="text-green-400">"Riverpod/Bloc"</span><br/>
                    &nbsp;&nbsp;{'}'}<br/>
                    {'}'};
                </code>
             </pre>

             {/* Circular Stats */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700">
                {[
                    { val: 'Expert', label: 'Flutter', color: 'border-blue-500 text-blue-400' },
                    { val: 'Expert', label: 'Figma', color: 'border-pink-500 text-pink-400' },
                    { val: 'Mid', label: 'C/C++', color: 'border-green-500 text-green-400' },
                    { val: 'Mid', label: 'Dart', color: 'border-cyan-500 text-cyan-400' },
                ].map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center">
                        <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center font-bold text-sm ${stat.color} mb-2 bg-slate-800`}>
                            {stat.val}
                        </div>
                        <span className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</span>
                    </div>
                ))}
             </div>
          </div>
        ) : (
          // LAB MODE: Periodic Table
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {elements.map((el) => (
              <div key={el.symbol} className="bg-white p-4 aspect-square rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group cursor-default">
                <div className="flex justify-between items-start">
                  <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-700 to-gray-900 group-hover:text-purple-600 transition-colors`}>
                    {el.symbol}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{el.number}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{el.name}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">{el.category}</div>
                </div>
                {/* Colored Bar at bottom */}
                <div className={`absolute bottom-0 left-4 right-4 h-1 ${el.color} rounded-t-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;