import React from 'react';
import { ArrowRight, CornerRightDown } from 'lucide-react';
import { GiLobArrow } from 'react-icons/gi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col">
          <h2 className="text-[50px] md:text-[65px] font-bold text-[#111111] leading-[1.1] tracking-tight mb-6">
            Get in <span className="inline-block w-[60px] md:w-[80px] h-[3px] bg-[#111111] align-middle mb-[15px] ml-2"></span><br/>
            touch with us
          </h2>
          <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[500px]">
            We're here to help! Whether you have a question about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you.
          </p>
          
          <div className="mb-6">
            <p className="text-[#666666] text-[15px] mb-1">Email:</p>
            <p className="text-[22px] md:text-[24px] font-bold text-[#111111]">hello@infinatelayers.com</p>
          </div>
          
          <div className="mb-6">
            <p className="text-[#666666] text-[15px] mb-1">Phone:</p>
            <p className="text-[22px] md:text-[24px] font-bold text-[#111111]">+1 234 567 78</p>
          </div>

        </div>

        {/* Right Form Card */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100">
          <form className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#111111] ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your first name..." 
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#111111] ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your last name..." 
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#111111] ml-1">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#111111] ml-1">How can we help you?</label>
              <textarea 
                placeholder="Enter your message..." 
                rows="5"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end mt-4">
              <button type="button" className="flex items-center gap-3 bg-[#111111] text-white px-7 py-4 rounded-[30px] font-semibold text-[15px] hover:bg-black transition-colors group shadow-lg">
                Send Message 
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} className="text-[#111111]" />
                </span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
