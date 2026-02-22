import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// CONFIGURAÇÃO DE URL DO WEBHOOK
// Substitua pela sua URL do n8n, Make, Zapier, etc.
const WEBHOOK_URL = 'https://webhooks.techjg.com.br/webhook/73155c33-ae44-4834-8499-d80cc65a4fcf';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Estado para armazenar UTMs
  const [utms, setUtms] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: ''
  });

  // Effect para capturar UTMs da URL ao carregar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || ''
    });
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validação Simples
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setLoading(true);

    try {
      // Prepara o payload com dados do lead + UTMs
      const payload = {
        name,
        phone,
        email,
        createdAt: new Date().toISOString(),
        source: 'Liberty Landing Page',
        ...utms // Espalha os parâmetros UTM no objeto enviado
      };

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess(true);
        // Limpa os campos do formulário
        setName('');
        setPhone('');
        setEmail('');
      } else {
        throw new Error('Erro na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setErrorMessage('Ocorreu um erro ao conectar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
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
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl max-w-md mx-auto lg:mx-0 mt-2 lg:mt-8 relative overflow-hidden group min-h-[340px] flex flex-col justify-center">
                {/* Borda sutil */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none transition-colors duration-500"></div>

                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                      ACESSO GARANTIDO
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Você receberá novidades em breve.
                    </p>
                  </motion.div>
                ) : (
                  <>
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
                            value={name}
                            placeholder="SEU NOME"
                            onChange={(e) => setName(e.target.value)}
                            disabled={loading}
                            className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          <input
                            type="tel"
                            value={phone}
                            placeholder="SEU WHATSAPP"
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={loading}
                            className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          <input
                            type="email"
                            value={email}
                            placeholder="SEU E-MAIL"
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-medium tracking-wide shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                      </div>
                      
                      {errorMessage && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-red-400 text-[10px] md:text-xs bg-red-900/20 p-2 rounded border border-red-900/30"
                        >
                          {errorMessage}
                        </motion.p>
                      )}

                      <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-widest py-4 rounded-lg shadow-lg transition-all duration-300 transform active:scale-[0.98] text-xs mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                          {loading ? 'ENVIANDO...' : 'ENTRAR NA LISTA VIP'}
                      </button>
                    </form>
                  </>
                )}
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;