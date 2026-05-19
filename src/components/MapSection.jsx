import React from 'react';

export default function MapSection() {
  return (
    <section id="trusted" className="pt-10 pb-32 relative bg-white overflow-hidden">
      
      {/* Left faint airplane */}
      <div className="absolute left-[-50px] bottom-10 w-[400px] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 400 200" fill="none" stroke="#111111" strokeWidth="1">
          <path d="M 50,150 L 350,150 M 100,150 L 150,100 L 250,100 L 300,150 M 150,100 L 200,50 L 250,100" />
          <ellipse cx="200" cy="150" rx="150" ry="20" />
          <path d="M 100,130 L 50,80 L 150,130" />
        </svg>
      </div>

      {/* Right faint crane */}
      <div className="absolute right-[5%] top-[10%] w-[150px] opacity-[0.05] pointer-events-none">
         <svg viewBox="0 0 200 200" fill="none" stroke="#111111" strokeWidth="1">
            <rect x="50" y="100" width="100" height="40" />
            <line x1="100" y1="100" x2="100" y2="20" />
            <line x1="50" y1="20" x2="150" y2="20" />
            <circle cx="100" cy="20" r="5" />
         </svg>
      </div>

      <div className="container-logit relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="section-title-logit text-[#111111]">
            GLOBAL SHIPPING THROUGHOUT <span className="text-[#F5820A]">WORLDWIDE</span>
          </h2>
        </div>

        <div className="relative max-w-[900px] mx-auto aspect-[2/1]">
          
          {/* Dotted World Map */}
          <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" className="text-[#E5E5E5]">
            <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
            
            <g fill="url(#dots)">
              {/* North America */}
              <path d="M150 150 Q 200 100, 300 120 T 350 200 T 200 250 Z" />
              {/* South America */}
              <path d="M250 270 Q 300 280, 320 350 T 280 450 T 230 350 Z" />
              {/* Europe/Africa */}
              <path d="M450 120 Q 550 80, 600 150 T 550 250 T 500 400 T 450 250 Z" />
              {/* Asia */}
              <path d="M580 100 Q 750 50, 850 150 T 750 250 T 600 200 Z" />
              {/* Australia */}
              <path d="M750 350 Q 800 320, 850 380 T 780 450 Z" />
            </g>
          </svg>

          {/* Pins */}
          {[
            { top: '35%', left: '26%' },
            { top: '65%', left: '35%' },
            { top: '30%', left: '50%' },
            { top: '60%', left: '55%' },
            { top: '25%', left: '60%' },
            { top: '38%', left: '75%' },
            { top: '75%', left: '80%' },
          ].map((pos, i) => (
            <div key={i} className="absolute w-2.5 h-2.5 bg-[#F5820A] shadow-md shadow-[#F5820A]/50 transform rotate-45" style={{ top: pos.top, left: pos.left }}></div>
          ))}

          {/* Highlight Popover */}
          <div className="absolute top-[35%] left-[38%] bg-white border border-[#E0E0E0] shadow-xl p-2 rounded-lg flex items-center gap-3 z-10 min-w-[160px]">
            <div className="w-12 h-9 rounded overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=150" alt="Hub" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#111111] leading-tight">Worldwide</span>
              <span className="text-[10px] text-[#666666]">Main Location</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
