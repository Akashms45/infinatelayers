import React from 'react';

export default function CTABanner() {
  return (
    <section className="pt-24 pb-32 relative overflow-hidden bg-white">
      
      {/* Large Chevron Cutout Image */}
      <div className="absolute right-0 top-0 w-[55%] h-[120%] z-0 clip-chevron hidden md:block" style={{ top: '-10%' }}>
        <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200" alt="Cargo Ship" className="w-full h-full object-cover" />
      </div>
      
      {/* CSS for clip-chevron */}
      <style dangerouslySetInnerHTML={{__html: `
        .clip-chevron {
          clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 50%);
        }
      `}} />

      <div className="container-logit relative z-10 flex">
        <div className="max-w-[400px]">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#111111] leading-[1.2] mb-8 font-condensed uppercase tracking-wide">
            TRACK TODAY TO<br/>
            STAY ON TRACKX<br/>
            WITH EVERY FORM.
          </h2>
          <button className="bg-[#F5820A] hover:bg-[#D97003] text-white px-8 py-3 rounded-full font-bold text-[14px] transition-all shadow-md shadow-[#F5820A]/30">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
