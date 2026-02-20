import React from 'react';
import { PRODUCTS } from '../constants';

const ProductTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight uppercase">
              New <span className="text-gray-500">Releases</span>
            </h2>
            <p className="text-gray-400 mt-2 font-light">Explore the latest technology and style.</p>
          </div>
          <button className="text-white border-b border-white pb-1 hover:text-gray-300 transition-colors font-medium uppercase text-xs tracking-widest">
            View All Collections
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Image Container */}
              <div className="h-64 w-full relative bg-[#222] flex items-center justify-center overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-3/4 h-auto object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                     <h3 className="text-lg font-bold text-white leading-tight">{product.name}</h3>
                     <span className="text-white font-bold text-lg">${product.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{product.colorway}</p>
                
                <div className="flex items-center gap-2 mb-4">
                    {/* Fake color swatches */}
                    <div className="w-4 h-4 rounded-full bg-black border border-white/20"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-500 border border-transparent opacity-50"></div>
                    <div className="w-4 h-4 rounded-full bg-white border border-transparent opacity-50"></div>
                </div>

                <button className="w-full bg-[#333] text-white py-2 rounded text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                    Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeaser;