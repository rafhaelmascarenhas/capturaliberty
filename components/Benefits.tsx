import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4 uppercase tracking-tight">
              Descubra o <span className="text-gray-400">Futuro</span>
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Dê um passo em direção ao amortecimento leve e malha respirável. Tecnologia que redefine o seu conforto diário, seja nas ruas ou em movimento.
            </p>
          </div>
          <div>
             <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors text-sm uppercase tracking-wide">
                Saiba Mais
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <i className={`fa-solid ${benefit.icon} text-2xl text-gray-900`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-normal">
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