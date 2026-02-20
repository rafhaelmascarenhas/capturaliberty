import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      alert('Bem-vindo à lista VIP!');
      setSubmitted(false);
      setEmail('');
      setName('');
      setPhone('');
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-gray-200 via-gray-100 to-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-gray-100 to-transparent opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Copy & Form */}
        <div className="space-y-8 animate-[fadeIn_1s_ease-out]">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-gray-600 border border-gray-300 rounded-full bg-white uppercase">
              Tecnologia & Conforto
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-gray-900 leading-[0.95] tracking-tight mb-4">
              CONHEÇA O SEU <br />
              <span className="text-gray-500">MAXIMUN DIÁRIO</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-md font-light">
              Mergulhe em uma experiência de conforto duradouro com malha respirável e amortecimento Air Max.
            </p>
          </div>

          {/* Clean Light Form */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden max-w-md">
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Garanta Acesso Antecipado
              </h3>
              <p className="text-sm text-gray-500 mb-6">Cadastre-se para receber novidades e descontos exclusivos.</p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase ml-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-400 focus:bg-white transition-all text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase ml-1">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-400 focus:bg-white transition-all text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase ml-1">E-mail</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-400 focus:bg-white transition-all text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold uppercase tracking-wide py-4 rounded-lg shadow-lg transition-all duration-300 transform active:scale-[0.98] text-sm mt-4"
                >
                  {submitted ? (
                    <span className="animate-pulse">Enviando...</span>
                  ) : (
                    <>
                      Entrar na Lista VIP
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative flex justify-center items-center lg:h-[600px]">
          {/* Subtle Circle Decoration */}
          <div className="absolute w-[350px] h-[350px] bg-gray-300 rounded-full blur-[80px] opacity-40 mix-blend-multiply" />
          
          {/* Hero Image */}
          <div className="relative z-10 w-full max-w-[600px] animate-float">
             <img 
                src="https://picsum.photos/800/800?random=101" 
                alt="Tênis Performance" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }} 
             />
             
             {/* Floating Info Card */}
             <div className="absolute bottom-10 -right-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 hidden md:block">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-play text-xs"></i>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-900">Everyday Fit</p>
                      <p className="text-[10px] text-gray-500">Tecnologia de adaptação</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;