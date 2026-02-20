import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full bg-[#F3F4F6] min-h-screen text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Footer />
    </main>
  );
};

export default App;