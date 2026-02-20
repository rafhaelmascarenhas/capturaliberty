import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('LIBERTY10%OFF');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.nav
        className={`fixed z-50 left-0 transition-all duration-300 ease-out will-change-transform ${
          scrolled
            ? 'top-4 w-full flex justify-center pointer-events-none' 
            : 'top-0 w-full'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={`flex justify-between items-center transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border border-zinc-800 rounded-full py-2 px-6 md:py-4 md:px-8 shadow-2xl w-[95%] md:w-[800px]' // Reduzido py-2 no mobile
            : 'container max-w-6xl mx-auto px-6 py-6 w-full'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="group relative z-50 block">
              <h1 className="text-lg md:text-2xl font-black tracking-tighter text-white select-none">
                LIBERTY<span className="font-thin text-zinc-500">.SNK</span>
              </h1>
            </a>
          </div>

          {/* Spacer - Only on Desktop Scrolled to balance layout */}
          {scrolled && <div className="hidden md:block w-4"></div>}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <button 
                onClick={() => setShowCoupon(true)}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors border border-transparent hover:border-zinc-700 rounded-full px-4 py-2.5"
            >
                <i className="fa-solid fa-tag text-xs"></i>
                <span>10% OFF</span>
            </button>

            <a
              href="#hero-form"
              className="text-[11px] font-black uppercase tracking-[0.15em] px-6 py-2.5 rounded-full transition-all border bg-white text-black border-white hover:bg-zinc-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              QUERO SER AVISADO
            </a>
          </div>

          {/* Mobile Menu Icon - Ajustado para ser mais compacto */}
          <button className="md:hidden text-white p-1 flex-shrink-0" onClick={() => setShowCoupon(true)}>
             <span className="text-[10px] font-bold uppercase text-white tracking-widest border border-zinc-700 px-3 py-1.5 rounded-full bg-zinc-900/80 shadow-lg active:scale-95 transition-transform flex items-center gap-2">
               <i className="fa-solid fa-tag text-[9px] text-zinc-400"></i>
               10% OFF
             </span>
          </button>
        </div>
      </motion.nav>

      {/* Coupon Modal */}
      <AnimatePresence>
        {showCoupon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowCoupon(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-700 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">SEU CUPOM DE DESCONTO</h3>
              <p className="text-zinc-400 text-sm mb-6">Use este código na sua primeira compra em nosso site para garantir 10% OFF.</p>
              <div 
                className="bg-black border border-zinc-800 rounded-lg p-4 mb-6 cursor-pointer group relative hover:border-zinc-600 transition-colors"
                onClick={copyToClipboard}
              >
                <code className="text-xl font-mono font-bold text-white tracking-widest block">LIBERTY10%OFF</code>
                <div className="absolute inset-0 flex items-center justify-center bg-black/90 text-xs font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {copied ? 'CÓDIGO COPIADO' : 'CLIQUE PARA COPIAR'}
                </div>
              </div>
              <button 
                onClick={() => setShowCoupon(false)}
                className="text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
              >
                FECHAR
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;