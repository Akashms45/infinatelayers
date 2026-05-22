import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-white z-20 reveal-on-scroll">

      {/* Curved Dashed Line Background (Matching Reference) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
        <svg className="w-full h-full min-h-[600px]" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M-50,200 C300,100 200,680 720,620 C1000,580 1150,150 1490,200"
            stroke="#D1D5DB"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          {/* Paper Airplane along the path */}
          <g transform="translate(680, 622) rotate(-6) scale(0.9)">
            <path
              d="M0,0 L24,-12 L10,20 L6,8 Z"
              fill="white"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M6,8 L24,-12"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start max-w-[620px] mx-auto lg:mx-0">
            {/* Serif Heading */}
            <h2
              className="text-[44px] md:text-[56px] text-[#1F1B3E] font-medium mb-8 leading-tight tracking-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              About Us
            </h2>

            <p className="text-[#555555] text-[15px] md:text-[16px] leading-[1.8] mb-6 font-normal">
              At Infinite Layers, we believe 3D printing is more than just transforming digital files—it's about the moments of realization when your ideas become tangible, physical realities. Whether you are seeking rapid prototyping, custom functional parts, or intricate multi-color models, we shape materials around what truly matters to you.
            </p>

            <p className="text-[#555555] text-[15px] md:text-[16px] leading-[1.8] mb-0 font-normal">
              With state-of-the-art additive manufacturing, advanced materials, and a dedicated team of engineers, we make fabrication effortless, precise, and accessible for everyone.
            </p>
          </div>

          {/* Right Column: Overlapping Images */}
          <div className="relative w-full aspect-[5/6] max-w-[500px] mx-auto pb-10 lg:pb-0">

            {/* Back Image (Turquoise Lake & Mountains) */}
            <div className="w-[72%] aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-[#F3F4F6] relative z-10">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
                alt="Banff Lake Moraine Scenic Mountain Lake"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Front Image (Desert Canyon Hiker, Tilted and Overlapping) */}
            <div className="w-[60%] aspect-square rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] bg-[#E5E7EB] absolute bottom-[-4%] right-[2%] z-20 border-[6px] border-white rotate-[8deg] hover:rotate-[3deg] transition-transform duration-500 ease-out">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
                alt="Hiker in Red Rock Canyon Desert Landscape"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

