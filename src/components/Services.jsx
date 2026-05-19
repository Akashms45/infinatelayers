import React from 'react';
import { Package, ShieldCheck, Flame } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container-logit text-center">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-title-logit text-[#111111] mb-4">
            WHAT WE <span className="text-[#F5820A]">PROVIDE</span>
          </h2>
          <p className="body-text-logit text-[#666666] max-w-[450px] mx-auto">
            Ship provide shipping services with 1.1 million destination and cover tecuer up to 1.5 million of total tons teu what services can we provide.
          </p>
        </div>

        {/* Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center group pt-6">
            <div className="w-[180px] h-[100px] rounded-t-full bg-[#FFF0E6] flex items-center justify-center -mb-8 transition-colors duration-300">
              <Package size={32} className="text-[#F5820A] mt-4" />
            </div>
            <div className="bg-white px-6 pt-12 pb-6 text-center z-10 w-full relative">
              <h3 className="font-bold text-lg text-[#111111] mb-3">Easy Delivery</h3>
              <p className="text-[13px] text-[#666666] leading-relaxed max-w-[220px] mx-auto">
                Scheduled shipping routes come with precise tracking. Don't track—always know to final destination.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center group pt-6">
            <div className="w-[180px] h-[100px] rounded-t-full bg-white flex items-center justify-center -mb-8 transition-colors duration-300">
              {/* Minimalist line art truck icon */}
              <div className="text-[#F5820A] mt-4 relative flex items-center justify-center">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                </svg>
                <div className="absolute right-0 top-0 w-2 h-2 bg-[#F5820A] rounded-full flex items-center justify-center">
                   <svg className="w-1 h-1 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                </div>
              </div>
            </div>
            <div className="bg-white px-6 pt-12 pb-6 text-center z-10 w-full relative">
              <h3 className="font-bold text-lg text-[#111111] mb-3">Secure Delivery</h3>
              <p className="text-[13px] text-[#666666] leading-relaxed max-w-[220px] mx-auto">
                Receive delivery with advance notification keeping you informed at every step.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center group pt-6">
            <div className="w-[180px] h-[100px] rounded-t-full bg-[#FFF0E6] flex items-center justify-center -mb-8 transition-colors duration-300">
              <div className="relative mt-4">
                 <svg className="w-8 h-8 text-[#F5820A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                 </svg>
                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <svg className="w-4 h-4 text-[#F5820A]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5,12.5v1.5h-11v-1.5H17.5 M17.5,11h-11C5.67,11,5,11.67,5,12.5v1.5C5,14.83,5.67,15.5,6.5,15.5h11c.83,0,1.5-.67,1.5-1.5v-1.5 C19,11.67,18.33,11,17.5,11L17.5,11z M12,2c-3.31,0-6,2.69-6,6c0,1.25,0.38,2.4,1.03,3.34c0.23,0.34,0.51,0.67,0.85,1.01 l1.52,1.52h5.19l1.52-1.52c0.34-0.34,0.62-0.67,0.85-1.01C17.62,10.4,18,9.25,18,8C18,4.69,15.31,2,12,2L12,2z M12,12 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C16,10.21,14.21,12,12,12L12,12z"/></svg>
                 </div>
              </div>
            </div>
            <div className="bg-white px-6 pt-12 pb-6 text-center z-10 w-full relative">
              <h3 className="font-bold text-lg text-[#111111] mb-3">Express Parcel</h3>
              <p className="text-[13px] text-[#666666] leading-relaxed max-w-[220px] mx-auto">
                Get your parcel delivered quickly and securely with reliable express shipping service.
              </p>
            </div>
          </div>

        </div>

        {/* Faint Ship Background Image right side */}
        <div className="absolute right-0 bottom-10 w-[30%] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 400 300" fill="none" stroke="#111111" strokeWidth="2">
            <path d="M 50,200 L 100,250 L 350,250 L 350,150 L 100,150 Z" />
            <path d="M 50,200 L 100,150" />
            <rect x="150" y="100" width="40" height="50" />
            <rect x="200" y="100" width="40" height="50" />
            <rect x="250" y="100" width="40" height="50" />
            <rect x="300" y="100" width="40" height="50" />
          </svg>
        </div>

      </div>
    </section>
  );
}
