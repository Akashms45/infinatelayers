import React, { useState, useEffect } from 'react';
import { products } from '../data/products';

const filters = [
  "All", "Keychains", "Monuments", "Miniatures", "Statues", "HueForge"
];

function ProductCardImage({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
        No Image
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <img src={images[0]} alt={title} className="w-full h-full object-cover" />
    );
  }

  return (
    <div className="w-full h-full relative">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      {/* Indicator dots for multiple images */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/25 px-2 py-1 rounded-full backdrop-blur-xs">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-[#F5820A] w-3' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AllProducts() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat && filters.includes(cat)) {
        setActiveFilter(cat);
      } else {
        setActiveFilter('All');
      }
    };

    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    const newSearch = filter === 'All' ? '' : `?category=${filter}`;
    window.history.pushState(null, '', `/all-products${newSearch}`);
  };

  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen pt-8 pb-24 relative z-10 overflow-hidden">

      {/* Faint Grid Background (Matching Hero Section) */}
      <div className="absolute left-[-20%] top-[-10%] w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-16">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-2.5 rounded-full border font-semibold text-[14px] transition-all duration-300 shadow-sm cursor-pointer ${
                activeFilter === filter
                  ? 'border-[#F5820A] text-[#F5820A] bg-[#F5820A]/5 scale-105'
                  : 'border-gray-200 bg-white text-[#1F1B3E] hover:border-[#F5820A] hover:text-[#F5820A]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-[32px] p-4 flex flex-col gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300">

              {/* Product Image */}
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-100 relative">
                <ProductCardImage images={item.images} title={item.title} />
              </div>

              {/* Product Info */}
              <div className="px-3 pb-2 pt-1 flex flex-col gap-1.5">
                <span className="text-[16px] font-bold text-[#111111] block text-center md:text-left">{item.title}</span>
                <span className="text-[14px] font-bold text-[#F5820A] block text-center md:text-left">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#666666] text-lg font-medium">No products found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}

