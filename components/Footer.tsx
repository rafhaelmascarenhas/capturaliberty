import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-16 pb-8 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-gray-900">Mantenha-se Atualizado</h2>
                <p className="text-gray-500 mb-6 font-light">Não perca a oportunidade de estar à frente. Receba novidades no seu e-mail.</p>
                <div className="flex max-w-md bg-white border border-gray-300 rounded-lg p-1 shadow-sm">
                    <input type="email" placeholder="Digite seu e-mail" className="flex-1 bg-transparent px-4 text-gray-900 placeholder-gray-400 focus:outline-none text-sm" />
                    <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-bold uppercase hover:bg-gray-800 transition-colors">Assinar</button>
                </div>
            </div>
            <div className="flex justify-end opacity-20">
                <h1 className="text-8xl font-black italic tracking-tighter text-gray-400 select-none">LIBERTY</h1>
            </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start text-xs text-gray-500">
          <div className="mb-6 md:mb-0">
            <h3 className="text-gray-900 text-lg font-bold mb-1">LIBERTY<span className="font-light">.SNK</span></h3>
            <p>SEU PARCEIRO PERFEITO</p>
          </div>
          
          <div className="flex gap-12">
            <div>
                <h4 className="text-gray-900 font-bold mb-3 uppercase">Loja</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-black">Masculino</a></li>
                    <li><a href="#" className="hover:text-black">Feminino</a></li>
                    <li><a href="#" className="hover:text-black">Lançamentos</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-gray-900 font-bold mb-3 uppercase">Ajuda</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-black">Status do Pedido</a></li>
                    <li><a href="#" className="hover:text-black">Frete & Entrega</a></li>
                    <li><a href="#" className="hover:text-black">Devoluções</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-gray-900 font-bold mb-3 uppercase">Sobre</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-black">Nossa História</a></li>
                    <li><a href="#" className="hover:text-black">Sustentabilidade</a></li>
                    <li><a href="#" className="hover:text-black">Carreiras</a></li>
                </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-gray-400">
             &copy; {new Date().getFullYear()} Liberty Sneakers. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;