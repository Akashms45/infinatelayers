import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#F5820A] text-white hover:bg-[#D97003] shadow-lg shadow-[#F5820A]/20 transition-all duration-300 transform cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} className="stroke-[2.5]" />
    </button>
  );
}
