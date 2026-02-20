import React, { useRef, useState, useEffect } from 'react';
import { BENEFITS } from '../constants';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Benefits: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* Background Grid Pattern Sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6 uppercase tracking-tight leading-none">
              POR QUE ESCOLHER <br/> <span className="text-zinc-500">A LIBERTY</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
              Focamos na qualidade, não na quantidade. Cada par é criado para oferecer estilo e conforto sem abrir mão da durabilidade.
            </p>
          </motion.div>
          
          <motion.div 
             className="hidden md:block w-40 h-px bg-gradient-to-r from-zinc-700 to-transparent"
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5 }}
             style={{ originX: 0 }}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <SpotlightCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Card com Efeito Spotlight (Corrigido e Otimizado)
const SpotlightCard = ({ benefit }: { benefit: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-zinc-800 bg-zinc-900/30 shadow-2xl rounded-xl px-8 py-10 transition-colors hover:border-zinc-700/50"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-white shadow-inner border border-zinc-700/50">
           <i className={`fa-solid ${benefit.icon} text-lg`}></i>
        </div>
        
        <h3 className="mb-4 text-lg font-bold text-zinc-100 uppercase tracking-wide">
          {benefit.title}
        </h3>
        
        <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default Benefits;