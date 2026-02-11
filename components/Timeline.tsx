import React from 'react';
import { BookOpen, School } from 'lucide-react';

interface TimelineProps {
  isDevMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isDevMode }) => {
  return (
    <section className={`py-20 px-6 ${isDevMode ? 'bg-[#0B1120]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 ${
                isDevMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700/50' : 'bg-purple-100 text-purple-700'
            }`}>
                {isDevMode ? 'GIT LOG' : 'ACADEMIC TIMELINE'}
            </span>
            <h2 className={`text-3xl font-bold ${isDevMode ? 'text-white' : 'text-gray-900'}`}>
                {isDevMode ? 'Commit History' : 'Education Timeline'}
            </h2>
        </div>

        {isDevMode ? (
            // DEV MODE: Git Log
            <div className="relative border-l-2 border-slate-700 ml-3 space-y-12">
                <div className="relative pl-8 group">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#0B1120]"></span>
                    <div className="text-sm font-mono text-blue-400 mb-1">HEAD {'->'} DevOpen</div>
                    <h3 className="text-xl font-bold text-white">Co-founder & Flutter Dev</h3>
                    <p className="text-slate-400 text-sm mb-2">DevOpen • 2024 - Present</p>
                </div>

                <div className="relative pl-8 group">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-600 ring-4 ring-[#0B1120] group-hover:bg-indigo-500 transition-colors"></span>
                    <div className="text-sm font-mono text-slate-500 mb-1">commit 7a8b9c</div>
                    <h3 className="text-xl font-bold text-slate-200">Flutter Web Developer</h3>
                    <p className="text-slate-400 text-sm mb-2">Shipgrande • 2022 - 2023</p>
                </div>

                <div className="relative pl-8 group">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-600 ring-4 ring-[#0B1120] group-hover:bg-indigo-500 transition-colors"></span>
                    <div className="text-sm font-mono text-slate-500 mb-1">commit 4d5e6f</div>
                    <h3 className="text-xl font-bold text-slate-200">Flutter Developer</h3>
                    <p className="text-slate-400 text-sm mb-2">Tinywall • 2022 - 2023</p>
                </div>

                <div className="relative pl-8 group">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-[#0B1120]"></span>
                    <div className="text-sm font-mono text-slate-600 mb-1">initial commit</div>
                    <h3 className="text-base font-bold text-slate-500">Flutter Developer</h3>
                    <p className="text-slate-500 text-sm mb-2">GOHouse • 2022 - 2023</p>
                </div>
            </div>
        ) : (
            // LAB MODE: Academic Timeline
            <div className="space-y-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 text-purple-600">
                        <School size={20} />
                    </div>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">Yıldız Technical University</h3>
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-purple-100 text-purple-700 w-fit">2021 - 2026</span>
                        </div>
                        <h4 className="text-purple-600 font-medium text-sm mb-2">Bachelor's in Physics</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Focusing on Nuclear Physics and Computational Physics. Bridging analytical problem-solving with software through the Particle Physics Programming course.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 text-gray-400">
                        <School size={20} />
                    </div>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">Anadolu University</h3>
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-200 text-gray-600 w-fit">2024 - 2028</span>
                        </div>
                        <h4 className="text-gray-700 font-medium text-sm mb-2">Visual Communication Design</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Expanding design expertise with formal education in graphic design, typography, and color theory.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 text-gray-400">
                        <BookOpen size={20} />
                    </div>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">École 42</h3>
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-200 text-gray-600 w-fit">2021 - 2023</span>
                        </div>
                        <h4 className="text-gray-700 font-medium text-sm mb-2">Computer Science</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Mastered C/C++ through a rigorous peer-to-peer curriculum. Focused on data structures, algorithms, and system programming.
                        </p>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;