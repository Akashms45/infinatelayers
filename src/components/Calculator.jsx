import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState('ship');

  return (
    <section id="calculator" className="pt-40 pb-20 relative z-20">
      <div className="container-logit">
        
        <div className="max-w-[850px] ml-auto mr-4 lg:mr-[10%]">
          
          {/* Tabs Row */}
          <div className="flex border-b border-[#E0E0E0]">
            {[
              { id: 'ship', label: 'Ship Transport' },
              { id: 'air', label: 'Air Transport' },
              { id: 'road', label: 'Road Transport' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-4 text-center font-bold text-[14px] transition-all border-b-2 focus:outline-none ${
                  activeTab === tab.id 
                    ? 'border-[#F5820A] text-[#F5820A]' 
                    : 'border-transparent text-[#666666] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <div className="pt-10 pb-6 flex flex-col gap-10">
            
            {/* Row 1: Destination */}
            <div>
              <span className="block text-[13px] font-bold text-[#111111] uppercase mb-5">
                DELIVER DESTINATION
              </span>
              <div className="flex flex-col gap-5 relative">
                {/* Vertical connect line */}
                <div className="absolute left-[5px] top-[14px] bottom-[14px] w-[1px] bg-[#E0E0E0]"></div>
                
                {/* Origin */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-[10px] w-2.5 h-2.5 rounded-full bg-[#666666]"></div>
                  <input 
                    type="text" 
                    placeholder="Port Origin"
                    className="w-full max-w-[400px] bg-transparent border-b border-[#E0E0E0] py-2 text-[14px] text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#F5820A] transition-colors"
                  />
                </div>
                
                {/* Destination */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-[10px] w-2.5 h-2.5 rounded-full bg-[#F5820A]"></div>
                  <input 
                    type="text" 
                    placeholder="Port Destination"
                    className="w-full max-w-[400px] bg-transparent border-b border-[#E0E0E0] py-2 text-[14px] text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#F5820A] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Type & Calculate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              
              <div>
                <span className="block text-[13px] font-bold text-[#111111] uppercase mb-3">
                  WHAT ARE YOU SHIPPING
                </span>
                <div className="relative">
                  <select 
                    className="w-full max-w-[300px] bg-transparent border-b border-[#E0E0E0] py-2 pl-6 pr-8 text-[14px] text-[#666666] focus:outline-none focus:border-[#F5820A] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Choose</option>
                    <option value="standard">Standard Box</option>
                    <option value="heavy">Heavy Machinery</option>
                    <option value="fragile">Fragile Goods</option>
                  </select>
                  <div className="absolute left-0 top-3 w-2.5 h-2.5 bg-[#F5820A] rounded-sm transform rotate-45 pointer-events-none"></div>
                </div>
              </div>

              <div className="flex items-end gap-6">
                <div className="flex-grow">
                  <span className="block text-[13px] font-bold text-[#111111] uppercase mb-3">
                    CALCULATE
                  </span>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="+1 2674"
                      className="w-full bg-transparent border-b border-[#E0E0E0] py-2 pl-6 text-[14px] text-[#666666] focus:outline-none focus:border-[#F5820A] transition-colors"
                    />
                    <div className="absolute left-0 top-3 w-2.5 h-2.5 bg-[#F5820A] rounded-sm transform rotate-45 pointer-events-none"></div>
                  </div>
                </div>
                
                <button className="w-[50px] h-[50px] rounded-full bg-[#F5820A] hover:bg-[#D97003] text-white flex items-center justify-center transition-all flex-shrink-0 shadow-lg">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
