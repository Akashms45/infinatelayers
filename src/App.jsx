import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import AllProducts from './components/AllProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [currentPath]);

  if (currentPath === '/all-products') {
    return (
      <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-[#F5820A] selection:text-white relative">
        <Navbar />
        <AllProducts />
        <Footer />
        <GoToTop />
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
      <GoToTop />
    </div>
  );
}

export default App;
