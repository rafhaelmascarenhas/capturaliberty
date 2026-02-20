import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductTeaser from './components/ProductTeaser';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-black text-gray-900 selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Benefits />
      <ProductTeaser />
      <Footer />
    </div>
  );
}

export default App;