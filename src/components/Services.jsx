import React from 'react';
import { Printer, Layers, Cpu } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-24 bg-white relative">
      <div className="container-logit text-center">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-title-logit text-[#111111] mb-4">
            WHAT WE <span className="text-[#F5820A]">PROVIDE</span>
          </h2>
          <p className="body-text-logit text-[#666666] max-w-[450px] mx-auto">
            We deliver state-of-the-art 3D printing and additive manufacturing solutions. From concept to physical model, we handle all your technical specifications with premium precision.
          </p>
        </div>

        {/* Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center group pt-6">
            <div className="w-[180px] h-[140px] rounded-t-full bg-[#FFF0E6] flex items-center justify-center mb-2 transition-colors duration-300">
              <Printer className="w-12 h-12 text-[#F5820A]" />
            </div>
            <div className="bg-white px-6 pt-4 pb-6 text-center z-10 w-full relative">
              <h3 className="font-bold text-lg text-[#111111] mb-3">Rapid Prototyping</h3>
              <p className="text-[13px] text-[#666666] leading-relaxed max-w-[220px] mx-auto">
                Transform your digital CAD models into functional physical models quickly for design validation and form testing.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center group pt-4">
            <div className="w-[180px] h-[140px] rounded-t-full bg-white flex items-center justify-center mb-2 transition-colors duration-300">
              <Layers className="w-12 h-12 text-[#F5820A]" />
            </div>
            <div className="bg-white px-6 pt-4 pb-6 text-center z-10 w-full relative">
              <h3 className="font-bold text-lg text-[#111111] mb-3">Custom Production</h3>
              <p className="text-[13px] text-[#666666] leading-relaxed max-w-[220px] mx-auto">
                Produce durable, high-quality end-use parts and low-volume manufacturing batches without costly tooling.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center group pt-4">
            <div className="w-[180px] h-[140px] rounded-t-full bg-[#FFF0E6] flex items-center justify-center mb-2 transition-colors duration-300">
              <Cpu className="w-12 h-12 text-[#F5820A]" />
            </div>
            <div className="bg-white px-6 pt-4 pb-6 text-center z-10 w-full relative">
              <h3 className="font-bold text-lg text-[#111111] mb-3">Design Optimization</h3>
              <p className="text-[13px] text-[#666666] leading-relaxed max-w-[220px] mx-auto">
                Expert consultancy to optimize your designs for additive manufacturing, ensuring structural integrity and cost efficiency.
              </p>
            </div>
          </div>

        </div>

        {/* Faint 3D Grid outline */}
        <div className="absolute right-4 bottom-10 w-[30%] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 400 300" fill="none" stroke="#111111" strokeWidth="1.5">
            <polygon points="200,50 320,110 200,170 80,110" />
            <polygon points="80,110 200,170 200,290 80,230" />
            <polygon points="320,110 200,170 200,290 320,230" />
            <line x1="140" y1="140" x2="260" y2="80" strokeDasharray="3 3" />
            <line x1="260" y1="200" x2="140" y2="260" strokeDasharray="3 3" />
          </svg>
        </div>

      </div>
    </section>
  );
}
