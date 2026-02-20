import React from 'react';
import { PRODUCTS } from '../constants';

const ProductTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4 uppercase tracking-tight">
            DESTAQUES DA <span className="text-zinc-500">CURADORIA</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-light">
            Modelos selecionados para quem valoriza a união entre design e funcionalidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-square bg-zinc-900 flex items-center justify-center p-8 relative overflow-hidden">
                 {/* Badges */}
                 <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    {product.badges?.map(badge => (
                        <span key={badge} className="text-[10px] font-bold bg-white text-black px-2 py-1 rounded-full uppercase tracking-wider">{badge}</span>
                    ))}
                 </div>

                 {/* Image Placeholder - User will replace this */}
                 <div className="w-full h-full bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 font-mono text-xs uppercase tracking-widest relative z-0 group-hover:scale-105 transition-transform duration-700">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                 </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                 <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-wide">{product.name}</h3>
                        <p className="text-zinc-500 text-sm font-medium">{product.colorway}</p>
                    </div>
                 </div>
                 
                 <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-zinc-400 text-xs uppercase tracking-widest">Em Breve</span>
                    <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
                        <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-xs"></i>
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeaser;