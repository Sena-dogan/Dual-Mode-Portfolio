import React, { useState } from 'react';
import { Project } from '../types';
import { Triangle, Infinity, BarChart2, Github, Cpu, Smartphone, ArrowRight, Shield, Search } from 'lucide-react';
import JobInspectorDetails from './JobInspectorDetails';

interface ProjectsProps {
  isDevMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDevMode }) => {
  // State to manage the image source. 
  // We use a direct string path because browser-native ES modules cannot import images directly.
  const [jobInspectorSrc, setJobInspectorSrc] = useState("/Job_Inspector2.jpg");
  const [showJobInspector, setShowJobInspector] = useState(false);

  const labProjects: Project[] = [
    {
      id: 'radcat',
      title: 'RadCat Project',
      description: 'Desktop software for controlling nuclear physics devices. Implemented real-time data acquisition and signal processing using C++ and Qt 6.',
      tags: ['Qt 6', 'C++', 'Physics'],
      icon: Triangle,
      link: 'https://github.com/Sena-dogan/RadCat',
    },
    {
      id: 'qbronze',
      title: 'QBronze',
      description: 'Quantum programming certification from QWorld, focusing on the mathematical foundations and implementation of quantum algorithms.',
      tags: ['Quantum', 'Math', 'QWorld'],
      icon: Infinity,
      link: '/QBronze151-105.jpg',
    },
    {
      id: 'root',
      title: 'ROOT Analysis',
      description: 'Statistical analysis and visualization for high-energy physics, applied within the Particle Physics Programming curriculum at YTU.',
      tags: ['Data Analysis', 'CERN', 'Statistics'],
      icon: BarChart2,
      link: 'https://github.com/Sena-dogan/programming-particle-physics',
    },
  ];

  return (
    <>
      {showJobInspector && <JobInspectorDetails onClose={() => setShowJobInspector(false)} />}
      
      <section id="projects" className={`scroll-mt-28 py-20 px-6 ${isDevMode ? 'bg-[#0B1120]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 ${
              isDevMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700/50' : 'bg-purple-100 text-purple-700'
            }`}>
              {isDevMode ? 'LATEST WORK' : 'ACADEMIC FOCUS'}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold ${isDevMode ? 'text-white' : 'text-gray-900'}`}>
              {isDevMode ? 'Recent Main Projects' : 'Key Research Projects'}
            </h2>
            {!isDevMode && <p className="mt-2 text-gray-500">Key research areas and active laboratory projects.</p>}
          </div>

          {isDevMode ? (
            <>
              {/* DEV MODE LAYOUT: Recent Main Projects (RescuPaws & RadCat) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                
                {/* RescuPaws Card */}
                <div className="group relative rounded-2xl overflow-hidden bg-[#1E293B] border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                  <div className="aspect-video bg-[#2D2B55] relative overflow-hidden">
                     <img 
                       src="https://github.com/Sena-dogan/RescuPaws/raw/main/assets/banners/banner_paws.jpg" 
                       alt="RescuPaws App Screens" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-90 z-10"></div>
                     
                     <div className="absolute top-4 right-4 z-20">
                         <div className="bg-purple-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <Smartphone size={12} /> Mobile App
                         </div>
                     </div>
                     
                     <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-3xl font-bold text-white drop-shadow-md tracking-tight">RescuPaws</h3>
                        <p className="text-purple-200 text-xs font-mono opacity-90">formerly "Pati Pati"</p>
                     </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-blue-300 border border-slate-600">Flutter</span>
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-teal-300 border border-slate-600">Riverpod</span>
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-orange-300 border border-slate-600">Firebase</span>
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-pink-300 border border-slate-600">Figma</span>
                    </div>
                    
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                      A modern, Tinder-style pet adoption application designed to bridge the gap between homeless pets and loving families. 
                      Features <strong>"2-Tap Adoption"</strong>, secure authentication, and a premium UI/UX that makes adoption celebrated, not complicated.
                    </p>

                    <div className="flex gap-4 mt-auto">
                      <a href="https://github.com/Sena-dogan/RescuPaws" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-white hover:bg-slate-700 border border-slate-600 transition-colors w-full justify-center">
                        <Github size={16} /> Source Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* RadCat Card */}
                <div className="group relative rounded-2xl overflow-hidden bg-[#1E293B] border border-slate-700 hover:border-green-500/30 transition-all duration-300 flex flex-col">
                  <div className="aspect-video bg-[#0B1120] relative overflow-hidden flex items-center justify-center">
                     <img 
                       src="https://github.com/yagizdkurt/RadCat/raw/main/res/RadCat.png" 
                       alt="RadCat Logo" 
                       className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500 relative z-0"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-60 z-10"></div>

                     <div className="absolute top-4 right-4 z-20">
                         <div className="bg-green-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <Cpu size={12} /> Open Source
                         </div>
                     </div>

                     <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-3xl font-bold text-white drop-shadow-md tracking-tight">RadCat</h3>
                        <p className="text-green-200 text-xs font-mono opacity-90">v1.0.0 Release</p>
                     </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-green-300 border border-slate-600">C++</span>
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-green-300 border border-slate-600">Qt 6</span>
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-yellow-300 border border-slate-600">Automation</span>
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-blue-300 border border-slate-600">Serial Comm</span>
                    </div>

                    <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                      <strong>Open-Source Radiation Device Automation Framework.</strong> Connect, control, and automate detectors and X-ray sources in one modular system. 
                      Designed to be modular, community-driven, and free forever.
                    </p>
                    
                    <div className="flex gap-4 mt-auto">
                      <a href="https://github.com/Sena-dogan/RadCat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-white hover:bg-slate-700 border border-slate-600 transition-colors w-full justify-center">
                        <Github size={16} /> View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hackathon Projects Section */}
              <div className="mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 bg-indigo-900/50 text-indigo-300 border border-indigo-700/50">
                  HACKATHONS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Hackathon Projects
                </h2>
                <p className="mt-2 text-slate-400">Rapid prototypes and innovative solutions built under pressure.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Job Inspector */}
                <div className="group relative rounded-2xl overflow-hidden bg-[#1E293B] border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                    {/* Image area */}
                    <div className="aspect-video bg-[#0f172a] relative overflow-hidden">
                        <img
                          src={jobInspectorSrc}
                          alt="Job Inspector"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={() => {
                            // Fallback to a high-quality relevant placeholder if the local file is not found
                            console.warn(`Failed to load image at: ${jobInspectorSrc}. Switching to placeholder.`);
                            setJobInspectorSrc("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80");
                          }}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-90 z-10 pointer-events-none"></div>
                        <div className="absolute top-4 right-4 z-20">
                            <div className="bg-blue-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                <Search size={12} /> AI Platform
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-3xl font-bold text-white drop-shadow-md tracking-tight">Job Inspector</h3>
                            <p className="text-blue-200 text-xs font-mono opacity-90">InovaTIM Innovation Contest</p>
                        </div>
                    </div>
                    {/* Content area */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-blue-300 border border-slate-600">Flutter</span>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-pink-300 border border-slate-600">Nest.js</span>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-indigo-300 border border-slate-600">Azure AI</span>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-cyan-300 border border-slate-600">PostgreSQL</span>
                        </div>
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                            Next-gen AI-powered job search platform detecting <strong>"ghost jobs"</strong> and fake listings.
                            Uses GadgetAI to analyze job posts and provide transparency scores to job seekers.
                        </p>
                        <div className="flex gap-4 mt-auto">
                          <button 
                            onClick={() => setShowJobInspector(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-white hover:bg-slate-700 border border-slate-600 transition-colors w-full justify-center"
                          >
                            <ArrowRight size={16} /> View Details
                          </button>
                        </div>
                    </div>
                </div>

                {/* LegalLens */}
                <div className="group relative rounded-2xl overflow-hidden bg-[#1E293B] border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                    {/* Image area */}
                    <div className="aspect-video bg-[#2D2B55] relative overflow-hidden">
                        <img
                          src="https://github.com/Sena-dogan/LegalLens/raw/main/docs/mockups/Slide%201.png"
                          alt="LegalLens"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-90 z-10"></div>
                        <div className="absolute top-4 right-4 z-20">
                            <div className="bg-indigo-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                <Shield size={12} /> Privacy AI
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-3xl font-bold text-white drop-shadow-md tracking-tight">LegalLens</h3>
                            <p className="text-indigo-200 text-xs font-mono opacity-90">AI-Powered Privacy Guardian</p>
                        </div>
                    </div>
                    {/* Content area */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-blue-300 border border-slate-600">Flutter</span>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-teal-300 border border-slate-600">Riverpod</span>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-orange-300 border border-slate-600">Firebase</span>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-purple-300 border border-slate-600">AI</span>
                        </div>
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                            Analyzes and summarizes privacy policies using <strong>Artificial Intelligence</strong>.
                            Empowers users by extracting key points from lengthy legal texts to ensure data transparency.
                        </p>
                        <div className="flex gap-4 mt-auto">
                          <a href="https://github.com/Sena-dogan/LegalLens" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-white hover:bg-slate-700 border border-slate-600 transition-colors w-full justify-center">
                            <Github size={16} /> Source Code
                          </a>
                        </div>
                    </div>
                </div>
              </div>

              {/* Side Projects Section */}
              <div className="mb-12 mt-20">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 bg-green-900/50 text-green-300 border border-green-700/50">
                  SIDE HUSTLES
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Side Projects
                </h2>
                <p className="mt-2 text-slate-400">Experimental apps and tools built for fun and learning.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { title: "Scoob", link: "https://github.com/Sena-dogan/scoob", desc: "Dog breeds information app.", tech: "Flutter/BloC" },
                    { title: "MotivaLux", link: "https://github.com/Sena-dogan/MotivaLux", desc: "Daily motivation and productivity.", tech: "Flutter/Riverpod" },
                    { title: "GroG", link: "https://github.com/Sena-dogan/GroG", desc: "Cocktail & drink recipe app.", tech: "Flutter/Riverpod" },
                    { title: "TodoBee", link: "https://github.com/Sena-dogan/TodoBee", desc: "Learning SwiftUI.", tech: "SwiftUI" }
                 ].map((project, idx) => (
                    <a 
                      key={idx} 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="group bg-[#1E293B] border border-slate-700 p-6 rounded-2xl hover:border-purple-500/50 hover:bg-[#253045] transition-all duration-300 flex flex-col"
                    >
                       <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-slate-800 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                             <Github size={20} />
                          </div>
                          <ArrowRight size={16} className="text-slate-500 group-hover:text-white -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                       </div>
                       
                       <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                       <p className="text-slate-400 text-sm mb-4 flex-1">{project.desc}</p>
                       
                       <div className="flex items-center gap-2 mt-auto">
                          <span className="text-xs font-mono text-slate-500 px-2 py-1 bg-slate-900 rounded">{project.tech}</span>
                       </div>
                    </a>
                 ))}
              </div>


            </>
          ) : (
            // LAB MODE LAYOUT
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {labProjects.map((project) => (
                <div key={project.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    {project.icon && <project.icon size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">{project.description}</p>
                  <a 
                    href={project.link || '#'} 
                    target={project.link ? "_blank" : "_self"}
                    rel={project.link ? "noopener noreferrer" : ""}
                    className={`inline-flex items-center text-sm font-semibold ${
                      project.link 
                        ? "text-purple-600 hover:text-purple-800 cursor-pointer" 
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    View Details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;