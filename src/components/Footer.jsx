import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#151515] text-[#AAAAAA] relative pt-24 pb-8 mt-16">
      
      {/* Angular Mountain-like Top Border */}
      <div className="absolute top-0 left-0 w-full h-[80px] -mt-[79px] overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 L0,20 L300,60 L600,10 L900,70 L1200,30 L1440,50 L1440,80 Z" fill="#151515" />
        </svg>
      </div>

      {/* Faint vertical lines/cables hanging in the dark background */}
      <div className="absolute top-0 left-[20%] w-[1px] h-[150px] bg-white/5"></div>
      <div className="absolute top-0 left-[40%] w-[1px] h-[100px] bg-white/5"></div>
      <div className="absolute top-0 left-[60%] w-[1px] h-[200px] bg-white/5"></div>
      
      <div className="container-logit relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-8">
          
          {/* Column 1: About Us (Takes 2 cols) */}
          <div className="md:col-span-2 pr-8">
            <h3 className="text-white font-bold text-[16px] mb-6">
              About Us
            </h3>
            <p className="text-[14px] leading-[1.8] max-w-[320px]">
              Our company is a trusted logistics and cargo solutions provider, dedicated to delivering safe, fast, and reliable service.
            </p>
          </div>

          {/* Column 2: Transport Services */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-6">
              Transport Services
            </h3>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {['Sea Transport', 'Air Transport', 'Land Transport', 'Cargo', 'KCL Trucking'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#F5820A] text-[14px] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: By Industry */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-6">
              By Industry
            </h3>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {['Retail Store', 'Manufacturing Services', 'Health Care', 'Automotive', 'Agriculture'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#F5820A] text-[14px] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[13px]">
            © 2025 LOGIT. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-[#333333] hover:bg-[#F5820A] hover:border-[#F5820A] hover:text-white flex items-center justify-center text-[14px] transition-all">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h4l-1 3h-3v6.95C17.7 21.32 22 17.15 22 12z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#333333] hover:bg-[#F5820A] hover:border-[#F5820A] hover:text-white flex items-center justify-center text-[14px] transition-all">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#333333] hover:bg-[#F5820A] hover:border-[#F5820A] hover:text-white flex items-center justify-center text-[14px] transition-all">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#333333] hover:bg-[#F5820A] hover:border-[#F5820A] hover:text-white flex items-center justify-center text-[14px] transition-all">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
