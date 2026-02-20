import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="group">
          <h1 className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${scrolled ? 'text-black' : 'text-gray-900'}`}>
            LIBERTY<span className="font-light">.SNK</span>
          </h1>
        </a>

        <a
          href="#contact"
          className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all border ${
            scrolled 
              ? 'text-black border-black hover:bg-black hover:text-white' 
              : 'text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white'
          }`}
        >
          Fale Conosco
        </a>
      </div>
    </nav>
  );
};

export default Navbar;