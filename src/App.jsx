import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import AllProducts from './components/AllProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (hash === '#all-products') {
    return (
      <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-[#F5820A] selection:text-white relative">
        <Navbar />
        <AllProducts />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-[#F5820A] selection:text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
