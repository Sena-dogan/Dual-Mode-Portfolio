import React from 'react';
import { Cloud, Terminal, Beaker } from 'lucide-react';

interface HeaderProps {
  isDevMode: boolean;
  toggleMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDevMode, toggleMode }) => {
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-500 ${isDevMode ? 'bg-dev-bg/80 border-b border-slate-800' : 'bg-white/80 border-b border-gray-100'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDevMode ? 'bg-indigo-600' : 'bg-purple-600'} text-white`}>
             {isDevMode ? <Terminal size={20} /> : <Cloud size={20} />}
          </div>
          <span className={`text-xl font-bold tracking-tight ${isDevMode ? 'text-white font-mono' : 'text-gray-900 font-sans'}`}>
            {isDevMode ? 'Sena.dev' : 'Sena Doğan'}
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {isDevMode ? (
            <>
              {[
                { name: '~/home', id: 'hero' },
                { name: '~/projects', id: 'projects' },
                { name: '~/stack', id: 'skills' },
                { name: '~/experiences', id: 'timeline' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-mono text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </>
          ) : (
            <>
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Research', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                // { name: 'Shelf', id: 'shelf' },
                { name: 'Education', id: 'timeline' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </>
          )}
        </nav>

        {/* Toggle Switch */}
        <button
          onClick={toggleMode}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
            isDevMode
              ? 'bg-slate-800 border-indigo-500/50 text-indigo-400 hover:bg-slate-700'
              : 'bg-white border-purple-200 text-purple-700 hover:bg-purple-50'
          }`}
        >
          {isDevMode ? (
            <>
              <Beaker size={16} />
              <span className="text-xs font-mono font-bold">Switch to Lab Mode</span>
            </>
          ) : (
            <>
              <Terminal size={16} />
              <span className="text-xs font-bold">Switch to Dev Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;