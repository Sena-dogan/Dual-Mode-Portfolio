import React from 'react';
import { Flame, Smartphone, ArrowRight } from 'lucide-react';

interface PersonaCardsProps {
  isDevMode: boolean;
}

const PersonaCards: React.FC<PersonaCardsProps> = ({ isDevMode }) => {
  return (
    <section className={`pt-10 pb-12 px-6 ${isDevMode ? 'bg-[#0F172A]' : 'bg-transparent'}`}>
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Physicist Card - Lab Mode Style */}
          <div className={`rounded-3xl p-8 shadow-sm border relative overflow-hidden group hover:shadow-md transition-all ${
             isDevMode ? 'bg-[#1E293B] border-slate-700' : 'bg-white border-gray-100'
          }`}>
             {/* Badge */}
             <div className="absolute top-6 right-6 px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Lab Mode</div>
             
             <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
               <Flame size={24} />
             </div>
             
             <h3 className={`text-2xl font-bold mb-4 ${isDevMode ? 'text-white' : 'text-gray-900'}`}>The Physicist</h3>
             <p className={`mb-8 leading-relaxed ${isDevMode ? 'text-slate-400' : 'text-gray-600'}`}>
               Delving into the fundamental building blocks of matter. Experience with Particle Physics, RadCat simulation frameworks, and research at CERN.
             </p>
             
             <div className="flex flex-wrap gap-2 mb-8">
               {['Particle Physics', 'CERN', 'RadCat'].map(tag => (
                 <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    isDevMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'
                 }`}>{tag}</span>
               ))}
             </div>
             
             <a href="#" className="inline-flex items-center text-orange-600 font-semibold hover:gap-2 transition-all">
               View Research <ArrowRight size={16} className="ml-1" />
             </a>
          </div>

          {/* Developer Card - Dev Mode Style */}
          <div className={`rounded-3xl p-8 shadow-sm border relative overflow-hidden group hover:shadow-md transition-all ${
             isDevMode ? 'bg-[#1E293B] border-slate-700' : 'bg-white border-gray-100'
          }`}>
             {/* Badge */}
             <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Dev Mode</div>
             
             <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
               <Smartphone size={24} />
             </div>
             
             <h3 className={`text-2xl font-bold mb-4 ${isDevMode ? 'text-white' : 'text-gray-900'}`}>The Developer</h3>
             <p className={`mb-8 leading-relaxed ${isDevMode ? 'text-slate-400' : 'text-gray-600'}`}>
               Architecting seamless digital experiences. Specializing in high-performance Mobile Architecture, Flutter cross-platform development, and UI/UX.
             </p>
             
             <div className="flex flex-wrap gap-2 mb-8">
               {['Mobile Architect', 'Flutter', 'Ecole 42'].map(tag => (
                 <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    isDevMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'
                 }`}>{tag}</span>
               ))}
             </div>
             
             <a href="https://github.com/Sena-dogan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
               View GitHub <ArrowRight size={16} className="ml-1" />
             </a>
          </div>
       </div>
    </section>
  );
};

export default PersonaCards;