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
        className={`fixed z-50 left-0 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'top-4 w-full flex justify-center'
            : 'top-0 w-full'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full py-3 px-6 shadow-2xl w-[95%] md:w-auto'
            : 'container max-w-6xl mx-auto px-6 py-6 w-full'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="group relative z-50">
              <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white select-none">
                LIBERTY<span className="font-thin text-zinc-500">.SNK</span>
              </h1>
            </a>
          </div>

          {/* Spacer - Only on Desktop Scrolled */}
          {scrolled && <div className="hidden md:block w-16"></div>}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6 flex-shrink-0">
            <button 
                onClick={() => setShowCoupon(true)}
                className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors relative group"
            >
                CONVITE ESPECIAL
            </button>

            <a
              href="#hero-form"
              className="text-[10px] font-black uppercase tracking-[0.15em] px-5 py-2.5 rounded-full transition-all border bg-white text-black border-white hover:bg-zinc-200 shadow-md"
            >
              LISTA DE ESPERA
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white p-2 flex-shrink-0" onClick={() => setShowCoupon(true)}>
             <span className="text-[10px] font-bold uppercase text-zinc-300 tracking-widest border border-zinc-700 px-3 py-1 rounded-full">CONVITE</span>
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
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-700 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">CONVITE DE BOAS-VINDAS</h3>
              <p className="text-zinc-400 text-sm mb-6">Como cortesia pelo seu interesse, oferecemos um benefício especial para sua primeira aquisição.</p>
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