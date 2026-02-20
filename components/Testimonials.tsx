import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#fafafa] text-gray-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
            Let Their Stories <br/>
            <span className="text-gray-500">Inspire You</span>
           </h2>
           <p className="text-gray-500">Real runners. Real comfort.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h4 className="font-bold text-lg mb-4 text-gray-900 leading-tight">"{t.text}"</h4>
                <div className="mb-4 text-yellow-400 flex gap-1 text-xs">
                    {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                    ))}
                    <span className="text-gray-400 ml-2 font-mono text-xs">{t.rating}.0</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="text-gray-900 font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;