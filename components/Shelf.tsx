import React from 'react';
import { Code2, Coffee, Heart, Dog } from 'lucide-react';

interface ShelfProps {
  isDevMode: boolean;
}

const Shelf: React.FC<ShelfProps> = ({ isDevMode }) => {
  if (isDevMode) return null;

  return (
    <section id="shelf" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 bg-purple-100 text-purple-700">
                PERSONAL COLLECTION
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
                The Shelf
            </h2>
            <p className="mt-2 text-gray-500">
                Experimental playground and personal archives.
            </p>
        </div>

        {/* LAB MODE: Physical Shelf */}
        <div className="bg-white p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Shelf illustration background */}
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-gray-100 -z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                <div className="flex flex-col items-center group">
                     <div className="w-32 h-32 rounded-full bg-orange-100 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                        {/* Basketball representation */}
                        <div className="w-24 h-24 rounded-full bg-orange-600 relative overflow-hidden shadow-inner border-2 border-orange-700">
                            <div className="absolute inset-0 border-r border-black/20 w-1/2 rounded-full"></div>
                            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black/20"></div>
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/20"></div>
                        </div>
                     </div>
                     <h4 className="font-bold text-gray-800">Spalding NBA</h4>
                     <span className="text-xs text-gray-400">Sports</span>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="w-32 h-24 mt-8 flex items-end justify-center mb-6 group-hover:scale-110 transition-transform">
                         <img src="https://picsum.photos/150/100?random=car1" alt="Nissan GT-R" className="rounded-lg shadow-lg object-cover" />
                    </div>
                     <h4 className="font-bold text-gray-800">Nissan GT-R</h4>
                     <span className="text-xs text-gray-400">1/64 Mini GT</span>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="w-32 h-24 mt-8 flex items-end justify-center mb-6 group-hover:scale-110 transition-transform">
                         <img src="https://picsum.photos/150/100?random=car2" alt="Porsche" className="rounded-lg shadow-lg object-cover" />
                    </div>
                     <h4 className="font-bold text-gray-800">Porsche 911</h4>
                     <span className="text-xs text-gray-400">Hot Wheels</span>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="w-32 h-24 mt-8 flex items-end justify-center mb-6 group-hover:scale-110 transition-transform">
                         <img src="https://picsum.photos/150/100?random=car3" alt="Skyline" className="rounded-lg shadow-lg object-cover" />
                    </div>
                     <h4 className="font-bold text-gray-800">Skyline Turbo</h4>
                     <span className="text-xs text-gray-400">Tomica Limited</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Shelf;