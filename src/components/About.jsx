import React from 'react';

export default function About() {
  return (
    <section id="about" className="pt-10 pb-20 relative z-20 bg-white">
      <div className="w-[94%] max-w-[1800px] mx-auto px-2 lg:px-6">
        
        {/* Text Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16">
          <h2 className="text-[50px] md:text-[64px] font-semibold text-[#1F1B3E] leading-tight flex-1 tracking-tight px-4">
            About Us
          </h2>
          <div className="flex-1 max-w-[500px] pt-4 lg:pt-6 text-right lg:text-left ml-auto px-4">
            <p className="text-[#4B5563] text-[13px] md:text-[14px] leading-[1.8] font-medium">
              Infinite Layers is a recently established 3D printing business dedicated to transforming your digital concepts into physical realities. Specializing in state-of-the-art additive manufacturing, rapid prototyping, and custom small-batch production, we serve creators, designers, and engineers alike. Our mission is to provide industry-grade layer resolution and reliable, premium-quality materials to bring any vision to life, layer by layer.
            </p>
          </div>
        </div>

      </div>

      {/* Graphic Section with Image and Sphere */}
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto">
        <div className="relative w-full h-[350px] md:h-[450px] mt-24">
          
          {/* Split Sphere Container */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[320px] md:w-[380px] h-[320px] md:h-[380px] z-10 pointer-events-none">
            
            {/* Top Hemisphere Wrapper for Drop Shadow */}
            <div className="absolute inset-0 drop-shadow-xl" style={{ transform: 'translateX(-35px)' }}>
              
              {/* Semicircle Mask Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden" style={{ clipPath: 'inset(0 0 50% 0)' }}>
                
                {/* Perfect 3D Sphere Background */}
                <div className="absolute inset-0"
                     style={{
                       background: 'radial-gradient(circle at 35% 25%, #E6E1FF 0%, #9B8DF2 30%, #563FD1 65%, #231269 100%)',
                     }}>
                </div>
                
                {/* 3D Rim Lighting applied to the full sphere before clipping */}
                <div className="absolute inset-0 rounded-full" 
                     style={{ boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.4), inset 20px 20px 40px rgba(255,255,255,0.7)' }}>
                </div>
                
              </div>
            </div>

            {/* Bottom Hemisphere Wrapper for Drop Shadow */}
            <div className="absolute inset-0 drop-shadow-2xl" style={{ transform: 'translateX(35px)' }}>
              
              {/* Semicircle Mask Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden" style={{ clipPath: 'inset(50% 0 0 0)' }}>
                
                {/* Perfect 3D Sphere Background */}
                <div className="absolute inset-0"
                     style={{
                       background: 'radial-gradient(circle at 35% 25%, #E6E1FF 0%, #9B8DF2 30%, #563FD1 65%, #231269 100%)',
                     }}>
                </div>
                
                {/* 3D Rim Lighting */}
                <div className="absolute inset-0 rounded-full" 
                     style={{ boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.4), inset 20px 20px 40px rgba(255,255,255,0.7)' }}>
                </div>
                
                {/* Deep 3D Shadow at the cut edge */}
                <div className="absolute top-[50%] left-0 w-full h-[60px]" 
                     style={{ background: 'linear-gradient(to bottom, rgba(20,10,60,0.8) 0%, transparent 100%)' }}>
                </div>
                
              </div>
            </div>
            
          </div>

          {/* Mountain Image Background */}
          <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#F8F9FA] relative z-0 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?auto=format&fit=crop&q=80&w=2000" 
              alt="Light sea of clouds" 
              className="w-full h-full object-cover"
            />
            {/* Very soft subtle blue overlay just to tie it into the theme without darkening */}
            <div className="absolute inset-0 bg-[#8C7AF0]/5 mix-blend-color"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
