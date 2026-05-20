import { FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="hero-section flex items-center relative pt-8 pb-20 overflow-hidden">
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

          <div className="relative z-10">
            {/* Tagline */}
            <div className="mb-6">
              <h1 className="hero-title text-[#111111] mb-2 flex items-baseline gap-x-3 flex-wrap leading-[1.1]">
                <span className="font-light">INFINITE</span> <span className="font-extrabold tracking-wide">LAYERS</span>
              </h1>
              <h1 className="hero-title text-[#111111] flex items-baseline gap-x-3 flex-wrap leading-[1.1]">
                <span className="font-extrabold tracking-wide">& 3D PRINTING</span> <span className="font-light tracking-normal" style={{ WebkitTextStroke: '2px #111', WebkitTextFillColor: 'transparent', color: 'transparent' }}>SERVICES</span>
              </h1>
            </div>

            {/* Sub-tagline */}
            <div className="mb-10">
              <h3 className="text-[22px] font-medium text-[#666666] mb-4">
                Bring Your Ideas to Life, Layer by Layer
              </h3>
              <p className="body-text-logit text-[#666666] max-w-[460px]">
                We turn your digital models into high-precision physical objects. From rapid prototyping to small-batch manufacturing, our advanced 3D printing solutions deliver premium quality, durable materials, and rapid turnaround times.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-16">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="border-2 border-[#F5820A] text-[#F5820A] hover:bg-[#F5820A] hover:text-white px-7 py-2.5 rounded-full font-bold text-[14px] transition-all flex items-center gap-2">
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Content (3D Printer SVG Render) */}
        <div className="lg:col-span-6 flex justify-end relative z-0">
          <div className="w-[140%] max-w-[1000px] absolute right-[-150px] top-[-250px] pointer-events-none">
            <svg viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
              <defs>
                <linearGradient id="metal-vertical" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F2F2F2" />
                  <stop offset="50%" stopColor="#D8D8D8" />
                  <stop offset="100%" stopColor="#C0C0C0" />
                </linearGradient>
                <linearGradient id="metal-horizontal" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#E5E5E5" />
                  <stop offset="100%" stopColor="#D4D4D4" />
                </linearGradient>
                <linearGradient id="dark-carbon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3A3A3A" />
                  <stop offset="50%" stopColor="#222222" />
                  <stop offset="100%" stopColor="#111111" />
                </linearGradient>
                <linearGradient id="orange-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFAC4D" />
                  <stop offset="100%" stopColor="#F5820A" />
                </linearGradient>
                <radialGradient id="orange-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFAC4D" stopOpacity="1" />
                  <stop offset="50%" stopColor="#F5820A" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F5820A" stopOpacity="0" />
                </radialGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Holographic light cone from nozzle to bed */}
              <polygon points="400,212 370,285 430,285" fill="url(#orange-glow)" opacity="0.25" />

              {/* 3D Printer Base / Chassis (White & Grey Isometric Solid) */}
              {/* Top Surface of the Base */}
              <polygon points="180,360 400,270 620,360 400,450" fill="#F8F9FA" stroke="#E6E6E6" strokeWidth="2" />
              {/* Front-Left Face */}
              <polygon points="180,360 400,450 400,490 180,400" fill="#ECECEC" stroke="#DCDCDC" strokeWidth="1.5" />
              {/* Front-Right Face */}
              <polygon points="400,450 620,360 620,400 400,490" fill="#DFDFDF" stroke="#CCCCCC" strokeWidth="1.5" />

              {/* LCD Controller Screen on Front-Right Face */}
              <polygon points="450,425 570,375 570,395 450,445" fill="#1A1A1A" stroke="#F5820A" strokeWidth="1.5" />
              <path d="M 465,424 L 520,401 L 520,408 L 465,431 Z" fill="#F5820A" opacity="0.8" />
              <circle cx="550" cy="385" r="4" fill="#F5820A" />

              {/* Guide Rails/Rods for Heated Bed */}
              <line x1="310" y1="307" x2="310" y2="397" stroke="url(#metal-vertical)" strokeWidth="4" strokeLinecap="round" />
              <line x1="490" y1="307" x2="490" y2="397" stroke="url(#metal-vertical)" strokeWidth="4" strokeLinecap="round" />

              {/* Heated Bed */}
              <polygon points="260,340 400,285 540,340 400,395" fill="url(#dark-carbon)" stroke="#CCCCCC" strokeWidth="2" />
              {/* Grid Lines on Bed */}
              <path d="M 295,326 L 400,368 L 505,326" stroke="#444444" strokeWidth="1" />
              <path d="M 330,312 L 400,340 L 470,312" stroke="#444444" strokeWidth="1" />
              <path d="M 330,368 L 400,340 L 470,368" stroke="#444444" strokeWidth="1" />

              {/* 3D Printed Object (Isometric layered vase / model in bright translucent orange) */}
              {/* Layer 1 (Base) */}
              <polygon points="350,340 400,360 450,340 400,320" fill="#F5820A" opacity="0.4" stroke="#D97003" strokeWidth="1" />
              {/* Layer 2 */}
              <polygon points="355,328 400,347 445,328 400,309" fill="#F5820A" opacity="0.5" stroke="#D97003" strokeWidth="1" />
              {/* Layer 3 */}
              <polygon points="360,316 400,334 440,316 400,298" fill="#F5820A" opacity="0.6" stroke="#D97003" strokeWidth="1" />
              {/* Layer 4 */}
              <polygon points="365,304 400,321 435,304 400,287" fill="#F5820A" opacity="0.7" stroke="#D97003" strokeWidth="1" />
              {/* Layer 5 */}
              <polygon points="370,292 400,308 430,292 400,276" fill="#F5820A" opacity="0.8" stroke="#D97003" strokeWidth="1" />
              {/* Layer 6 (Current Active Layer) */}
              <polygon points="375,280 400,295 425,280 400,265" fill="#FFF0E6" opacity="0.9" stroke="#FFAC4D" strokeWidth="1.5" />
              {/* Glowing active print line path */}
              <polygon points="375,280 400,295 425,280 400,265" fill="none" stroke="#FF9E3D" strokeWidth="2.5" filter="url(#glow)" />

              {/* Z-Axis Left Pillar */}
              <rect x="200" y="80" width="16" height="280" fill="url(#metal-vertical)" stroke="#CCCCCC" strokeWidth="1.5" />
              <rect x="204" y="80" width="8" height="280" fill="#B0B0B0" opacity="0.5" />
              {/* Z-Axis Right Pillar */}
              <rect x="584" y="80" width="16" height="280" fill="url(#metal-vertical)" stroke="#CCCCCC" strokeWidth="1.5" />
              <rect x="588" y="80" width="8" height="280" fill="#B0B0B0" opacity="0.5" />

              {/* Top Crossbar */}
              <rect x="200" y="70" width="400" height="15" fill="url(#metal-horizontal)" stroke="#CCCCCC" strokeWidth="1.5" />

              {/* Filament Spool on Top Crossbar */}
              <circle cx="280" cy="40" r="28" fill="#F8F9FA" stroke="#CCCCCC" strokeWidth="2" />
              <circle cx="280" cy="40" r="20" fill="url(#orange-accent)" />
              <circle cx="280" cy="40" r="6" fill="#D0D0D0" />
              {/* Filament Line Feeding Down */}
              <path d="M 308,40 Q 360,80 400,175" fill="none" stroke="#F5820A" strokeWidth="2.5" strokeDasharray="4 4" />

              {/* X-Axis Gantry Rail (Sits just above active layer) */}
              <rect x="216" y="180" width="368" height="14" fill="#2C2C2C" stroke="#111111" strokeWidth="1" rx="2" />
              <rect x="216" y="185" width="368" height="4" fill="url(#metal-horizontal)" />

              {/* Extruder Carriage / Print Head Assembly (Centered on the model) */}
              <rect x="375" y="165" width="50" height="38" rx="4" fill="url(#dark-carbon)" stroke="#111111" strokeWidth="1.5" />
              <circle cx="400" cy="184" r="10" fill="#1A1A1A" stroke="#F5820A" strokeWidth="1" />
              {/* Fan details */}
              <path d="M 393,184 L 407,184 M 400,177 L 400,191 M 395,179 L 405,189 M 395,189 L 405,179" stroke="#555555" strokeWidth="1.5" />
              {/* Brass Nozzle */}
              <polygon points="395,203 405,203 401,213 399,213" fill="#D4AF37" stroke="#AA8010" strokeWidth="1" />
              {/* Hotend block */}
              <rect x="390" y="198" width="20" height="6" fill="#EAEAEA" stroke="#999999" strokeWidth="1" />

              {/* Sparkling / glowing light effects at nozzle tip */}
              <circle cx="400" cy="213" r="3" fill="#FFFFFF" />
              <circle cx="400" cy="213" r="14" fill="url(#orange-glow)" filter="url(#glow)" opacity="0.9" />

              {/* Rising printing dust/sparkles */}
              <circle cx="390" cy="235" r="1.5" fill="#FFAC4D" opacity="0.8" />
              <circle cx="415" cy="245" r="2" fill="#FFAC4D" opacity="0.6" />
              <circle cx="380" cy="255" r="1" fill="#FFAC4D" opacity="0.9" />
              <circle cx="405" cy="265" r="2" fill="#FFAC4D" opacity="0.7" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
