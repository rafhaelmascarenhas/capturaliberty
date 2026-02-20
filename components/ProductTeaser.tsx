import React from 'react';
import { PRODUCTS } from '../constants';
import { motion } from 'framer-motion';

const ProductTeaser: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-sans font-bold text-white mb-4 uppercase tracking-tight"
          >
            SELEÇÃO <span className="text-zinc-500">EXCLUSIVA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto font-light"
          >
            Modelos que unem design autêntico e conforto para o seu dia a dia.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
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

                 {/* Image Placeholder */}
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
                    <span className="text-white font-bold text-sm tracking-wide">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
                        <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-xs"></i>
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTeaser;