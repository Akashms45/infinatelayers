import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section flex items-center relative pt-8 pb-20 overflow-hidden">
      <div className="container-logit grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col justify-center pt-8 relative">
          
          {/* Faint Grid Background */}
          <div className="absolute left-[-20%] top-[-10%] w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0" 
               style={{
                 backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
               }}>
          </div>
          
          {/* Faint Background Drawing (Cranes/Containers) behind text area */}
          <div className="absolute left-[-10%] bottom-[-10%] w-[80%] h-auto opacity-[0.03] pointer-events-none z-0">
            <svg viewBox="0 0 600 300" fill="none" stroke="#111111" strokeWidth="1">
              <path d="M 50,300 L 50,50 L 250,50" />
              <path d="M 100,300 L 100,100 L 250,100" />
              <rect x="300" y="200" width="60" height="40" />
              <rect x="300" y="240" width="60" height="40" />
              <rect x="370" y="240" width="60" height="40" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Tagline */}
            <div className="mb-6">
              <h1 className="hero-title text-[#111111] mb-2 flex items-center gap-2 flex-wrap leading-[1]">
                <span className="font-light">FLEXIBLE</span> <span className="font-extrabold tracking-wide">L</span>
                <div className="w-[80px] h-[36px] md:w-[90px] md:h-[40px] bg-[#FFF0E6] rounded-full overflow-hidden flex items-center justify-center relative shadow-inner mx-1 border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50a5f?auto=format&fit=crop&q=80&w=200" alt="Ship" className="w-full h-full object-cover" />
                </div>
                <span className="font-extrabold tracking-wide">GISTICS</span>
              </h1>
              <h1 className="hero-title text-[#111111] flex items-center gap-4 leading-[1]">
                <span className="font-extrabold tracking-wide">& CARGO</span> <span className="font-light tracking-normal" style={{ WebkitTextStroke: '2px #111', color: 'transparent' }}>SERVICES</span>
              </h1>
            </div>

            {/* Sub-tagline */}
            <div className="mb-10">
              <h3 className="text-[22px] font-medium text-[#666666] mb-4">
                Deliver Packages in any Way
              </h3>
              <p className="body-text-logit text-[#666666] max-w-[460px]">
                Our logistics service goes beyond transportation. At your service, we provide end-to-end solutions for all your shipping needs, ensuring your cargo reaches its destination on time, every time, no matter what.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-16">
              <a href="#contact" className="border-2 border-[#F5820A] text-[#F5820A] hover:bg-[#F5820A] hover:text-white px-7 py-2.5 rounded-full font-bold text-[14px] transition-all">
                Consultation
              </a>
              <a href="#calculator" className="w-12 h-12 rounded-full bg-[#F5820A] hover:bg-[#D97003] text-white flex items-center justify-center transition-all shadow-md shadow-[#F5820A]/30">
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Avatars & Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
                ].map((src, index) => (
                  <img 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" 
                    src={src} 
                    alt={`User ${index + 1}`} 
                  />
                ))}
              </div>
              <div className="text-[13px] text-[#666666] font-medium flex flex-col ml-2">
                <span className="flex items-center gap-1 font-bold text-[#111111]">
                  5.0 <Star size={12} className="fill-[#F5820A] text-[#F5820A]" />
                </span>
                <span>64+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content (Cargo Ship Render) */}
        <div className="lg:col-span-6 flex justify-end relative z-0">
          <div className="w-[140%] max-w-[1000px] absolute right-[-150px] top-[-250px] pointer-events-none">
            <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
              {/* Ship Hull (White) */}
              <path d="M 50,300 C 50,340 100,380 200,380 L 750,380 L 750,260 L 100,260 Z" fill="#F8F9FA" />
              <path d="M 50,300 C 50,340 100,380 200,380 L 750,380 L 750,260 L 100,260 Z" stroke="#E0E0E0" strokeWidth="2" />
              <path d="M 100,260 L 150,220 L 750,220 L 750,260 Z" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1" />
              <path d="M 180,380 L 180,410 C 180,420 190,420 190,410 L 190,380 Z" fill="#E0E0E0" />
              <circle cx="120" cy="280" r="8" fill="#E0E0E0" />
              
              {/* Container grid simplified */}
              <g fill="#F5820A" stroke="#D97003" strokeWidth="1">
                {[...Array(6)].map((_, col) => (
                  <React.Fragment key={col}>
                    <rect x={250 + col*85} y={210} width="80" height="40" />
                    <rect x={250 + col*85} y={165} width="80" height="40" />
                    <rect x={280 + col*85} y={120} width="80" height="40" />
                  </React.Fragment>
                ))}
              </g>

              {/* Ship Bridge */}
              <rect x="600" y="50" width="120" height="70" fill="#FFFFFF" stroke="#E0E0E0" />
              <rect x="620" y="30" width="80" height="20" fill="#FFFFFF" stroke="#E0E0E0" />
              <rect x="600" y="60" width="120" height="15" fill="#111111" />
              <line x1="680" y1="10" x2="680" y2="-20" stroke="#666666" strokeWidth="2" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
