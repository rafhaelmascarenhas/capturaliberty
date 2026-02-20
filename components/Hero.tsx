import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert('Cadastro realizado com sucesso! Em breve entraremos em contato.');
      setSubmitted(false);
      setEmail('');
      setName('');
      setPhone('');
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-12 md:pt-24 md:pb-12 overflow-hidden bg-black text-white">
      {/* Background Otimizado */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%)'
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-12 items-center relative z-10">
        
        {/* 1. Copy Mais Natural */}
        <div className="lg:col-start-1 lg:row-start-1 text-center lg:text-left mb-2 lg:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl xl:text-6xl font-sans font-bold leading-[1.05] tracking-tight mb-4 drop-shadow-lg"
          >
            A PRÓXIMA <br />
            COLEÇÃO ESTÁ <br />
            <span className="text-zinc-400">CHEGANDO.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-300 text-base md:text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md"
          >
            Cadastre-se para saber em primeira mão quando os novos modelos estiverem disponíveis.
          </motion.p>
        </div>

        {/* 2. Sneaker Visual - Otimizado */}
        <div className="relative flex justify-center items-center h-[280px] md:h-[400px] lg:h-full lg:col-start-2 lg:row-start-1 lg:row-span-2 -my-4 lg:my-0 pointer-events-none">
          <motion.div
            className="relative z-10 w-full max-w-[320px] md:max-w-[450px] lg:max-w-[650px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
             <motion.img 
                src="/tenislibertyhero.webp"
                alt="Liberty One Edition"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                // Prioridade de carregamento
             />
          </motion.div>
        </div>
        
        {/* 3. Form */}
        <motion.div 
          className="lg:col-start-1 lg:row-start-2 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl max-w-md mx-auto lg:mx-0 mt-2 lg:mt-8 relative overflow-hidden group">
                {/* Borda sutil */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none transition-colors duration-500"></div>

                <h3 className="text-lg font-bold text-white mb-1 relative z-10 uppercase tracking-wide">
                  FIQUE POR DENTRO
                </h3>
                <p className="text-xs text-zinc-400 mb-5 relative z-10">
                  Preencha seus dados para receber o aviso de lançamento.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                <div className="space-y-3">
                    <input
                      type="text"
                      required
                      value={name}
                      placeholder="SEU NOME"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      placeholder="SEU WHATSAPP"
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      placeholder="SEU E-MAIL"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner"
                    />
                </div>
                <button
                    type="submit"
                    disabled={submitted}
                    className="w-full bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-widest py-4 rounded-lg shadow-lg transition-all duration-300 transform active:scale-[0.98] text-xs mt-2"
                >
                    {submitted ? (
                    <span className="animate-pulse">ENVIANDO...</span>
                    ) : (
                    'QUERO SER AVISADO'
                    )}
                </button>
                </form>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;