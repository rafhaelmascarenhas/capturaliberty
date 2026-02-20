import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 uppercase tracking-tight leading-none">
              PADRÃO DE <br/> <span className="text-zinc-500">EXCELÊNCIA</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
              Nossa produção é focada na qualidade, não na quantidade. Cada par é resultado de um processo rigoroso de design e engenharia para entregar o máximo em conforto e estilo atemporal.
            </p>
          </div>
          {/* Decorative element */}
          <div className="hidden md:block w-32 h-px bg-gradient-to-r from-zinc-800 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="mb-8 w-16 h-16 bg-black border border-zinc-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-zinc-500 transition-all duration-300 relative z-10">
                <i className={`fa-solid ${benefit.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide relative z-10">{benefit.title}</h3>
              
              <div className="w-12 h-px bg-zinc-700 mb-4 group-hover:w-full group-hover:bg-white/20 transition-all duration-500 relative z-10"></div>
              
              <p className="text-zinc-500 leading-relaxed text-sm font-normal group-hover:text-zinc-300 transition-colors duration-300 relative z-10">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;