import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Decorative Lines Container */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none z-0 hidden lg:flex">
        <div className="w-full max-w-[1350px] mx-auto relative h-[800px]">

          <div className="absolute top-[20px] left-[-15px] right-[-15px] h-[70px]">

            {/* Right Capsule (Draws Top Line, Right Curve, Bottom Line as a single contiguous shape) */}
            <div className="absolute top-[-0.2px] left-[30px] right-0 h-full border-t-2 border-b-2 border-r-2 border-[#111111] rounded-r-[35px]"></div>

            {/* White Mask to hide the top-left part of the border (starts the line at x=350px) */}
            <div className="absolute top-[-2px] left-[20px] w-[345px] xl:w-[445px] h-[6px] bg-white"></div>

            {/* Left Curve anchored perfectly to the bottom border of the capsule */}
            <div className="absolute top-[100%] left-0 w-[31px] h-[31px] border-t-2 border-l-2 border-[#111111] rounded-tl-[30px] mt-[-2px]"></div>

            {/* Vertical Line overlapping the left curve by 1px */}
            <div className="absolute top-[100%] left-0 w-[2px] h-[800px] bg-gradient-to-b from-[#111111] via-[#111111] to-transparent mt-[28px]"></div>

          </div>

        </div>
      </div>

      <header className="navbar relative z-50 pt-8 pb-4">
        <div className="container-logit w-full flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group decoration-none relative z-10 bg-white px-6">
            <span className="font-condensed text-[32px] tracking-widest text-[#111111] flex items-center font-bold">
              L
              <span className="relative flex items-center justify-center mx-[3px] w-[28px] h-[28px] bg-[#F5820A] rounded-full overflow-hidden shadow-inner">
                <svg className="w-4 h-4 text-white transform -rotate-45 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
              </span>
              GIT
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 bg-white px-6 relative z-10">
            <a href="#" className="text-[14px] font-bold text-[#111111] hover:text-[#F5820A] transition-colors">Home</a>
            <a href="#about" className="text-[14px] font-semibold text-[#666666] hover:text-[#111111] transition-colors">About</a>
            <a href="#services" className="text-[14px] font-semibold text-[#666666] hover:text-[#111111] transition-colors">Solutions</a>
            <a href="#products" className="text-[14px] font-semibold text-[#666666] hover:text-[#111111] transition-colors">Products</a>
          </nav>

          {/* Contact Us Button */}
          <div className="flex items-center gap-4 bg-white px-6 relative z-10">
            <a href="#contact" className="bg-[#F5820A] hover:bg-[#D97003] text-white px-8 py-3 rounded-full font-bold text-[14px] transition-all shadow-md shadow-[#F5820A]/20">
              Contact Us
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white z-50 border-b border-[#E0E0E0] shadow-lg py-6 px-8 flex flex-col gap-4">
          <a href="#" className="text-[16px] font-bold py-1" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-[16px] font-semibold py-1" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" className="text-[16px] font-semibold py-1" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <a href="#products" className="text-[16px] font-semibold py-1" onClick={() => setMobileMenuOpen(false)}>Products</a>
        </div>
      )}
    </>
  );
}
