import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Detect if scrolled past threshold
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px: hide
        setIsVisible(false);
      } else {
        // Scrolling up or near top: show
        setIsVisible(true);
      }

      // 3. Scroll Spy: Detect active landing page section
      if (window.location.pathname !== '/all-products') {
        const sections = [
          { id: 'home', path: '/' },
          { id: 'about', path: '/about' },
          { id: 'services', path: '/services' },
          { id: 'products', path: '/products' },
          { id: 'contact', path: '/contact' }
        ];

        let currentActiveSection = '/';
        const viewportHeight = window.innerHeight;

        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // A section is active if its top covers the upper part of the viewport and its bottom is below that
            if (rect.top <= viewportHeight * 0.4 && rect.bottom >= viewportHeight * 0.3) {
              currentActiveSection = section.path;
            }
          }
        }

        // Force 'contact' section active if scrolled to the absolute bottom of the page
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 120;
        if (isAtBottom) {
          currentActiveSection = '/contact';
        }

        // Only update if it actually changed to prevent redundant popstate loops
        if (window.location.pathname !== currentActiveSection) {
          window.__isScrollSpyActive = true;
          window.history.replaceState(null, '', currentActiveSection);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    window.__isScrollSpyActive = false;
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Decorative Lines Container */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none z-0 hidden lg:flex">
        <div className="w-full max-w-[1350px] mx-auto relative h-[800px]">

          <div className="absolute top-[20px] left-[-15px] right-[-15px] h-[70px]">

            {/* Right Capsule (Draws Top Line, Right Curve, Bottom Line as a single contiguous shape) */}
            <div className="absolute top-[-0.2px] left-[30px] right-0 h-full border-t-2 border-b-2 border-r-2 border-[#111111] rounded-r-[35px]"></div>

            {/* White Mask to hide the top-left part of the border (starts the line at x=350px) */}
            <div className="absolute top-[-2px] left-[20px] w-[345px] xl:w-[445px] h-[6px] bg-white"></div>

            {/* Left Curve anchored perfectly to the bottom border of the capsule */}
            <div className="absolute top-[100%] left-0 w-[31px] h-[31px] border-t-2 border-l-2 border-[#111111] rounded-tl-[30px] mt-[-2px]"></div>

            {/* Vertical Line overlapping the left curve by 1px */}
            <div className="absolute top-[100%] left-0 w-[2px] h-[800px] bg-gradient-to-b from-[#111111] via-[#111111] to-transparent mt-[28px]"></div>

          </div>

        </div>
      </div>

      {/* Spacer to hold the layout height of the header when it becomes fixed */}
      <div className="h-[92px] relative z-50">
        <header
          className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3 md:py-4 border-b border-[#111111]/5'
            : 'bg-transparent pt-6 pb-3'
            } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="container-logit w-full flex items-center justify-between">

            {/* Logo */}
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-1 group decoration-none relative z-10">
              <img
                src="/logo.png"
                alt="Infinite Layers Logo"
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
              />
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-10 relative z-10">
              <a
                href="/"
                onClick={(e) => handleNavClick(e, '/')}
                className={`text-[14px] transition-colors ${currentPath === '/' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#666666] hover:text-[#111111]'}`}
              >
                Home
              </a>
              <a
                href="/about"
                onClick={(e) => handleNavClick(e, '/about')}
                className={`text-[14px] transition-colors ${currentPath === '/about' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#666666] hover:text-[#111111]'}`}
              >
                About
              </a>
              <a
                href="/services"
                onClick={(e) => handleNavClick(e, '/services')}
                className={`text-[14px] transition-colors ${currentPath === '/services' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#666666] hover:text-[#111111]'}`}
              >
                Solutions
              </a>
              <a
                href="/products"
                onClick={(e) => handleNavClick(e, '/products')}
                className={`text-[14px] transition-colors ${currentPath === '/products' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#666666] hover:text-[#111111]'}`}
              >
                Products
              </a>
            </nav>

            {/* Contact Us Button */}
            <div className="flex items-center gap-4 relative z-10">
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="bg-[#F5820A] hover:bg-[#D97003] text-white px-8 py-3 rounded-full font-bold text-[14px] transition-all shadow-md shadow-[#F5820A]/20"
              >
                Contact Us
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#111111] focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#E0E0E0] shadow-lg py-6 px-8 flex flex-col gap-4">
              <a
                href="/"
                className={`text-[16px] py-1 transition-colors ${currentPath === '/' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#111111]'}`}
                onClick={(e) => handleNavClick(e, '/')}
              >
                Home
              </a>
              <a
                href="/about"
                className={`text-[16px] py-1 transition-colors ${currentPath === '/about' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#111111]'}`}
                onClick={(e) => handleNavClick(e, '/about')}
              >
                About
              </a>
              <a
                href="/services"
                className={`text-[16px] py-1 transition-colors ${currentPath === '/services' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#111111]'}`}
                onClick={(e) => handleNavClick(e, '/services')}
              >
                Solutions
              </a>
              <a
                href="/products"
                className={`text-[16px] py-1 transition-colors ${currentPath === '/products' ? 'font-bold text-[#F5820A]' : 'font-semibold text-[#111111]'}`}
                onClick={(e) => handleNavClick(e, '/products')}
              >
                Products
              </a>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
