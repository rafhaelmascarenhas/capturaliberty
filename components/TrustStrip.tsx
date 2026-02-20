import React from 'react';

const TrustStrip: React.FC = () => {
  return (
    <div className="w-full bg-black border-y border-white/5 py-6 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Simulate Logos using FontAwesome for simplicity as real logos require SVGs */}
           <div className="flex flex-wrap justify-center md:justify-between w-full gap-8 md:gap-0">
             <span className="text-2xl font-black italic flex items-center gap-2"><i className="fa-brands fa-nike text-3xl"></i> NIKE</span>
             <span className="text-2xl font-black italic flex items-center gap-2"><i className="fa-brands fa-adidas text-3xl"></i> ADIDAS</span>
             <span className="text-2xl font-black italic flex items-center gap-2"><i className="fa-solid fa-basketball text-3xl"></i> JORDAN</span>
             <span className="text-2xl font-black italic flex items-center gap-2"><i className="fa-solid fa-n text-3xl"></i> NEW BALANCE</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;