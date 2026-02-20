import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BeamsBackground } from './ui/beams-background';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert('Sua solicitação de acesso prioritário foi recebida.');
      setSubmitted(false);
      setEmail('');
      setName('');
      setPhone('');
    }, 1500);
  };

  return (
    <BeamsBackground className="flex items-center pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden bg-black text-white" intensity="strong">
      
      {/* O Background Glow manual foi removido em favor do BeamsBackground */}

      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-12 items-center relative z-10">
        
        {/* 1. Copy Premium e Segura */}
        <div className="lg:col-start-1 lg:row-start-1 text-center lg:text-left mb-2 lg:mb-0">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-sans font-bold leading-[1.05] tracking-tight mb-4 drop-shadow-2xl">
            GARANTA ACESSO <br />
            PRIORITÁRIO À <br />
            <span className="text-zinc-400">PRÓXIMA COLEÇÃO.</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md">
            Cadastre-se para receber notificações antecipadas sobre lançamentos limitados e assegure sua oportunidade de compra antes da abertura oficial.
          </p>
        </div>

        {/* 2. Sneaker Visual */}
        <div className="relative flex justify-center items-center h-[280px] md:h-[400px] lg:h-full lg:col-start-2 lg:row-start-1 lg:row-span-2 -my-4 lg:my-0 pointer-events-none">
          <motion.div
            className="relative z-10 w-full max-w-[320px] md:max-w-[450px] lg:max-w-[650px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
             <img 
                src="/tenislibertyhero.webp"
                alt="Liberty One Edition"
                className="w-full h-full object-contain drop-shadow-2xl"
             />
          </motion.div>
        </div>
        
        {/* 3. Form - "Lista de Espera" Vibe */}
        <div className="lg:col-start-1 lg:row-start-2 relative z-20">
            <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] max-w-md mx-auto lg:mx-0 mt-2 lg:mt-8 relative overflow-hidden group">
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-white/10 transition-colors duration-500"></div>

                <h3 className="text-lg font-bold text-white mb-1 relative z-10 uppercase tracking-wide">
                  Lista de Espera Oficial
                </h3>
                <p className="text-xs text-zinc-400 mb-5 relative z-10">
                  Devido à produção controlada, as vagas para a pré-venda são limitadas. Preencha seus dados para solicitar inclusão.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                <div className="space-y-3">
                    <input
                      type="text"
                      required
                      value={name}
                      placeholder="SEU NOME COMPLETO"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/70 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner backdrop-blur-sm"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      placeholder="SEU WHATSAPP"
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/70 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner backdrop-blur-sm"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      placeholder="SEU MELHOR E-MAIL"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/70 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner backdrop-blur-sm"
                    />
                </div>
                <button
                    type="submit"
                    disabled={submitted}
                    className="w-full bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-widest py-4 rounded-lg shadow-lg transition-all duration-300 transform active:scale-[0.98] text-xs mt-2"
                >
                    {submitted ? (
                    <span className="animate-pulse">SOLICITANDO...</span>
                    ) : (
                    'ENTRAR PARA LISTA VIP'
                    )}
                </button>
                </form>
            </div>
        </div>

      </div>
    </BeamsBackground>
  );
};

export default Hero;