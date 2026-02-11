import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, AlertTriangle, Cpu, Users, Layers, ArrowLeft, ChevronLeft, ChevronRight, Maximize2, ZoomIn } from 'lucide-react';

interface JobInspectorDetailsProps {
  onClose: () => void;
}

const JobInspectorDetails: React.FC<JobInspectorDetailsProps> = ({ onClose }) => {
  const [brandingIndex, setBrandingIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const brandingImages = [
    "/Branding1.jpg", "/Branding2.jpg", "/Branding3.jpg", "/Branding4.jpg",
    "/Branding5.jpg", "/Branding6.jpg", "/Branding7.jpg", "/Branding8.jpg"
  ];

  const mockupImages = [
    { src: "/Mockup1.jpg", caption: "GadgetAI Analysis & Scoring" },
    { src: "/Mockup2.jpg", caption: "Community-Driven Verification" },
    { src: "/Mockup3.jpg", caption: "Personalized Matching (Fit vs. Unfit)" },
    { src: "/Mockup4.jpg", caption: "Job Detail View" }
  ];

  const nextBranding = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setBrandingIndex((prev) => (prev === brandingImages.length - 1 ? 0 : prev + 1));
  };

  const prevBranding = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setBrandingIndex((prev) => (prev === 0 ? brandingImages.length - 1 : prev - 1));
  };

  const toggleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };


  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-[#0F172A] text-slate-200 fade-in-animation">
      
      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={toggleLightbox}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); toggleLightbox(); }}
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
          >
            <X size={24} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); prevBranding(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft size={32} />
          </button>
          
          <img 
            src={brandingImages[brandingIndex]} 
            alt="Branding Fullscreen" 
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={(e) => { e.stopPropagation(); toggleLightbox(); }}
          />

          <button 
            onClick={(e) => { e.stopPropagation(); nextBranding(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm">
             {brandingIndex + 1} / {brandingImages.length}
          </div>
        </div>
      )}



      {/* Back Button - Sticky (Desktop & Mobile) */}
      <div className="fixed top-6 left-6 z-50">
        <button 
          onClick={onClose}
           className="bg-slate-800/80 backdrop-blur-md px-4 py-3 rounded-full hover:bg-slate-700 transition-all border border-slate-700 shadow-lg flex items-center gap-2 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Go Back</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto pb-20">
        
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <img 
            src="/Job_Inspector2.jpg" 
            alt="Job Inspector Hero" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="flex flex-wrap gap-3 mb-4">
               <span className="px-3 py-1 bg-blue-600/90 rounded-full text-xs font-bold text-white shadow-lg">InovaTIM Innovation Competition</span>
               <span className="px-3 py-1 bg-purple-600/90 rounded-full text-xs font-bold text-white shadow-lg">Lead Design & Dev</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">Job Inspector</h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light">AI-Powered Job Market Guardian</p>
          </div>
        </div>

        <div className="px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-16">
            
            {/* Project Overview */}
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Layers size={24} /></span>
                Project Overview
              </h2>
              <p className="text-xl font-medium text-slate-300 italic mb-6 border-l-4 border-blue-500 pl-4">
                "Jobs, Rated by You."
              </p>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Job Inspector is an AI-powered platform designed to fight against <strong>"Ghost Jobs"</strong> and fake listings, which are a growing problem in the labor market.
                </p>
                <p>
                  In a market where 70% of job seekers feel listings are misleading, Job Inspector provides transparency. Our platform scans listings using <strong>GadgetAI</strong>, combines them with community feedback, and assigns a "Trust Score" to every job post.
                </p>
              </div>
            </section>

            {/* Branding & Design */}
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Users size={24} /></span>
                Branding & UI Design
              </h2>
              <div className="mb-8 text-slate-400 leading-relaxed">
                <p className="mb-4">
                  <strong>A detective's precision meets a user-friendly interface.</strong>
                </p>
                <p>
                  For the design, I aimed to create a visual language that builds trust while preventing users from getting lost in complex job descriptions. I merged the "Job Inspector" detective metaphor with a modern, clean UI.
                </p>
                
                {/* Inspiration Section */}
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 my-6">
                  <h3 className="text-purple-300 font-bold mb-2 flex items-center gap-2">
                    ✨ Inspiration Behind the Brand
                  </h3>
                  <p className="text-sm mb-3">
                    The name <strong>"Job Inspector"</strong> and our AI assistant <strong>"Gadget AI"</strong> are playful nods to the classic cartoon <em>Inspector Gadget</em>, emphasizing our role as a detective in the job market.
                  </p>
                  <p className="text-sm">
                    For the rating system, we drew inspiration from <strong>Rotten Tomatoes</strong>. Just as they rate movies "Fresh" or "Rotten", we classify jobs as "Solid Choice" or "Zombie Job" to give users an instant, recognizable verdict on quality.
                  </p>
                </div>

                <ul className="mt-4 space-y-2 list-disc list-inside marker:text-purple-500">
                  <li><strong>Clear Color Coding:</strong> Distinctions to instantly signal safety (Fit Job) or caution (Unfit/Zombie Job).</li>
                  <li><strong>The GadgetAI Persona:</strong> Designed to feel like a helpful assistant that interprets data in a friendly, human-readable way.</li>
                </ul>
              </div>
              
              {/* Branding Carousel */}
              <div 
                className="relative group rounded-2xl overflow-hidden bg-black/50 border border-slate-700 aspect-[16/9] md:aspect-[21/9] cursor-zoom-in"
                onClick={toggleLightbox}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                   <img 
                      src={brandingImages[brandingIndex]} 
                      alt={`Branding asset ${brandingIndex + 1}`} 
                      className="max-h-full max-w-full object-contain"
                   />
                </div>

                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={20} />
                </div>
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevBranding}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-purple-600 transition-colors text-white z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextBranding}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-purple-600 transition-colors text-white z-10"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {brandingImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                          e.stopPropagation();
                          setBrandingIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === brandingIndex ? "bg-purple-500 w-6" : "bg-white/50 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Interface & Key Features */}
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <span className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Cpu size={24} /></span>
                Interface & Key Features
              </h2>
              <p className="text-slate-400 mb-8">
                We developed both the mobile and web interfaces using Flutter for a seamless cross-platform experience. Here are the key features:
              </p>

              <div className="space-y-12">
                
                {/* Feature 1 */}
                <div className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-3">1. GadgetAI Analysis & Scoring</h3>
                  <p className="text-slate-400 mb-6 text-sm">
                    Our AI model (powered by Llama 3.1) analyzes job descriptions to detect red flags. It categorizes listings with unique ratings like "Zombie Job" (inactive) or "Solid Choice" (reliable).
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img src={mockupImages[0].src} alt="AI Analysis Mockup" className="w-full" />
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-3">2. Community-Driven Verification</h3>
                  <p className="text-slate-400 mb-6 text-sm">
                    AI is powerful, but human experience is essential. The "Candidates Say" section allows real applicants to share their experiences, bringing transparency to the hiring process.
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img src={mockupImages[1].src} alt="Community Verification Mockup" className="w-full" />
                  </div>
                </div>

                 {/* Feature 3 */}
                 <div className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-3">3. Personalized Matching</h3>
                  <p className="text-slate-400 mb-6 text-sm">
                    Instead of generic lists, the system analyzes the user's skills against the job requirements. It instantly tags listings as a "Fit Job" or "Unfit Job", saving the user time.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src={mockupImages[2].src} alt="Fit Job Card" className="w-full" />
                     </div>
                     <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src={mockupImages[3].src} alt="Job Detail View" className="w-full" />
                     </div>
                  </div>
                </div>

              </div>
            </section>

          </div>

          {/* Sidebar - Technical Stack */}
          <div className="md:col-span-1">
             <div className="sticky top-24 space-y-8">
                
                <div className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700 shadow-xl">
                  <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2">Technical Architecture</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Frontend</div>
                      <div className="text-slate-300 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span> Flutter (Web & Mobile)
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Backend</div>
                      <div className="text-slate-300 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span> Nest.js
                      </div>
                      <div className="text-slate-300 font-medium flex items-center gap-2 mt-1">
                         <span className="w-2 h-2 rounded-full bg-cyan-400"></span> PostgreSQL
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">AI Integration</div>
                      <div className="text-slate-300 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span> Azure AI Services
                      </div>
                      <div className="text-slate-300 font-medium flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Llama 3.1
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 rounded-2xl p-6 border border-blue-700/30">
                  <h3 className="text-lg font-bold text-blue-100 mb-2">My Role</h3>
                  <p className="text-blue-200/80 text-sm leading-relaxed">
                     As the Lead Design & Software Developer, I was responsible for the end-to-end product design, branding, and the Flutter frontend implementation.
                  </p>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
};

export default JobInspectorDetails;
