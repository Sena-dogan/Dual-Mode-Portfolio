import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonaCards from './components/PersonaCards';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Shelf from './components/Shelf';
import { Code, FlaskConical } from 'lucide-react';

const App: React.FC = () => {
  const [isDevMode, setIsDevMode] = useState<boolean>(false);

  const toggleMode = () => {
    setIsDevMode(!isDevMode);
  };

  useEffect(() => {
    // Smooth background color transition for the body
    document.body.style.backgroundColor = isDevMode ? '#0F172A' : '#FAFAFA';
    document.body.style.transition = 'background-color 0.5s ease';
  }, [isDevMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDevMode ? 'bg-[#0F172A] text-slate-200' : 'bg-lab-bg text-lab-text bg-grid-lab'}`}>
      
      {/* Optional: Dev Mode specific grid overlay */}
      {isDevMode && <div className="fixed inset-0 pointer-events-none bg-grid-dev opacity-20 z-0"></div>}
      
      <Header isDevMode={isDevMode} toggleMode={toggleMode} />
      
      <main className="relative z-10">
        <Hero isDevMode={isDevMode} toggleMode={toggleMode} />
        
        {/* Persona Cards Section */}
        <PersonaCards isDevMode={isDevMode} />
        
        {/* Content Section Divider */}
        <div className={`h-px w-full my-8 ${isDevMode ? 'bg-slate-800' : 'bg-gray-200'}`}></div>

        <Projects isDevMode={isDevMode} />
        <Skills isDevMode={isDevMode} />
        <Shelf isDevMode={isDevMode} />
        <Timeline isDevMode={isDevMode} />
      </main>

      <footer className={`py-12 px-6 border-t ${isDevMode ? 'bg-[#020617] border-slate-800 text-slate-500' : 'bg-white border-gray-100 text-gray-400'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-mono">
            © 2026 Sena Doğan. {isDevMode ? 'Built with Code & Physics' : 'Designed with Science & Code.'}
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
               {isDevMode ? <Code size={14} /> : <FlaskConical size={14} />}
               {isDevMode ? 'System Status: Operational' : 'Lab Mode Active'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;