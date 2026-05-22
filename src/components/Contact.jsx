import React, { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendContactForm } from '../email';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    sendContactForm(form.current)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setStatus('success');
        form.current.reset();
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setErrorMessage(error.text || 'An unexpected error occurred. Please try again.');
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 bg-white relative reveal-on-scroll">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col">
          <h2 className="text-[36px] sm:text-[50px] md:text-[65px] font-bold text-[#111111] leading-[1.1] tracking-tight mb-6">
            Get in <span className="inline-block w-[40px] sm:w-[60px] md:w-[80px] h-[3px] bg-[#111111] align-middle mb-[10px] md:mb-[15px] ml-2"></span><br/>
            touch with us
          </h2>
          <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[500px]">
            Have a 3D model or design you want to print? We focus entirely on manufacturing the exact 3D physical products you need with premium-grade materials and high precision. Get in touch with our 3D models printing business to start production on your custom objects today!
          </p>
          
          <div className="mb-6">
            <p className="text-[#666666] text-[15px] mb-1">Email Us:</p>
            <p className="text-[22px] md:text-[24px] font-bold text-[#111111]">
              <a href="mailto:infinatelayers@gmail.com" className="hover:text-[#F5820A] transition-colors">infinatelayers@gmail.com</a>
            </p>
          </div>
          
          <div className="mb-6">
            <p className="text-[#666666] text-[15px] mb-1">Call Our Office:</p>
            <p className="text-[22px] md:text-[24px] font-bold text-[#111111]">+91 63633 47092</p>
          </div>

        </div>

        {/* Right Form Card */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 bg-[#FFF0E6] text-[#F5820A] rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-[24px] font-bold text-[#111111] mb-3">Thank You!</h3>
              <p className="text-[#666666] text-[14px] leading-relaxed max-w-[340px] mb-8">
                Your message has been sent successfully. Our 3D printing experts will review your request and get back to you shortly!
              </p>
              <button 
                onClick={() => setStatus('idle')} 
                className="bg-[#111111] hover:bg-[#F5820A] text-white px-8 py-3 rounded-full font-bold text-[14px] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              
              {status === 'error' && (
                <div className="flex items-start gap-3 bg-red-50 text-red-700 p-4 rounded-2xl border border-red-100 text-[13px] leading-relaxed">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Could not send message:</span> {errorMessage || 'Connection failed.'} Please try again or email us directly at <a href="mailto:infinatelayers@gmail.com" className="underline font-bold">infinatelayers@gmail.com</a>.
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-[#111111] ml-1">Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="Enter your full name..." 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-[#111111] ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="user_phone"
                    required
                    placeholder="Enter your phone number..." 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#111111] ml-1">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="Enter your email address..." 
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#111111] ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  placeholder="Enter your message..." 
                  rows="5"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FCFCFD] text-[14px] outline-none focus:border-[#F5820A] focus:ring-1 focus:ring-[#F5820A] transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end mt-4">
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={`flex items-center gap-3 bg-[#111111] text-white px-7 py-4 rounded-[30px] font-semibold text-[15px] hover:bg-black transition-colors group shadow-lg ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} className="text-[#111111]" />
                  </span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
