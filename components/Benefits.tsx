import React from 'react';
import { BENEFITS } from '../constants';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 uppercase tracking-tight leading-none">
              POR QUE ESCOLHER <br/> <span className="text-zinc-500">A LIBERTY</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
              Focamos na qualidade, não na quantidade. Cada par é criado para oferecer estilo e conforto sem abrir mão da durabilidade.
            </p>
          </motion.div>
          
          {/* Decorative element */}
          <motion.div 
             className="hidden md:block w-32 h-px bg-gradient-to-r from-zinc-800 to-transparent"
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5 }}
             style={{ originX: 0 }}
          ></motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {BENEFITS.map((benefit) => (
            <motion.div 
              key={benefit.id} 
              variants={cardVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;