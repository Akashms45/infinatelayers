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
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    if (window.__isScrollSpyActive) {
      window.__isScrollSpyActive = false;
      return;
    }

    if (currentPath === '/all-products') {
      // Instantly snap to top of the All Products page
      window.scrollTo(0, 0);
    } else if (currentPath && currentPath !== '/') {
      const id = currentPath.replace(/^\/|\/$/g, '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If coming back from all-products, wait for DOM to mount then scroll
        const timer = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // Return to top of landing page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath]);

  if (currentPath === '/all-products') {
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
