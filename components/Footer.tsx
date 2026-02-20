import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-12 text-zinc-400">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Logo */}
            <div className="flex-shrink-0">
                <h1 className="text-4xl font-black italic tracking-tighter text-white select-none">
                    LIBERTY<span className="font-thin text-zinc-600">.SNK</span>
                </h1>
                <p className="text-[10px] tracking-[0.3em] uppercase mt-2 text-zinc-600">Seu Parceiro Perfeito</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px] border-b border-zinc-800 pb-2 inline-block md:block">Contato</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center justify-center md:justify-start gap-3 group">
                            <i className="fa-brands fa-whatsapp text-zinc-500 group-hover:text-green-500 transition-colors"></i>
                            <a href="https://wa.me/5537998029530" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                (37) 99802-9530
                            </a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-3 group">
                            <i className="fa-regular fa-envelope text-zinc-500 group-hover:text-blue-500 transition-colors"></i>
                            <a href="mailto:sac.libertysneakers@gmail.com" className="hover:text-white transition-colors">
                                sac.libertysneakers@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px] border-b border-zinc-800 pb-2 inline-block md:block">Redes Sociais</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center justify-center md:justify-start gap-3 group">
                            <i className="fa-brands fa-instagram text-zinc-500 group-hover:text-pink-500 transition-colors"></i>
                            <a href="https://www.instagram.com/libertysnk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                @libertysnk
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-[10px] text-zinc-700 tracking-widest uppercase flex flex-col md:flex-row justify-between items-center gap-4">
             <span>&copy; {new Date().getFullYear()} Liberty Sneakers. Todos os direitos reservados.</span>
             <span className="opacity-50">Designed for Excellence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;