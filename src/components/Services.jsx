import React from 'react';
import { Printer, Layers, Cpu } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-24 bg-white relative reveal-on-scroll">
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
              <h3 className="font-bold text-lg text-[#111111] mb-3">Post-Processing & Assembly</h3>
              <p className="text-[13px] text-[#666666] leading-relaxed max-w-[220px] mx-auto">
                Support removal, chemical washing, UV curing, precision sanding, and multi-part assembly to deliver ready-to-use finished products.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
