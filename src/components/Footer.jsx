import React from 'react';

export default function Footer() {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    window.__isScrollSpyActive = false;
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer id="footer" className="bg-[#151515] text-[#AAAAAA] relative pt-12 pb-6 mt-12">

      {/* Angular Mountain-like Top Border */}
      <div className="absolute top-0 left-0 w-full h-[80px] -mt-[79px] overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 L0,20 L300,60 L600,10 L900,70 L1200,30 L1440,50 L1440,80 Z" fill="#151515" />
        </svg>
      </div>

      {/* Faint vertical lines/cables hanging in the dark background */}
      <div className="absolute top-0 left-[20%] w-[1px] h-[100px] bg-white/5"></div>
      <div className="absolute top-0 left-[40%] w-[1px] h-[70px] bg-white/5"></div>
      <div className="absolute top-0 left-[60%] w-[1px] h-[120px] bg-white/5"></div>

      <div className="container-logit relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10 pt-4">

          {/* Column 1: Logo and Address */}
          <div className="md:col-span-2 pr-8 flex flex-col items-start">
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="inline-block mb-5 group">
              <img
                src="/logo1.png?v=1"
                alt="Infinite Layers Logo"
                className="h-20 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>
            <p className="text-[14px] leading-relaxed text-[#8C8C9A] max-w-[280px]">
              Infinite Layers Hub<br />
              102 Industrial Design Blvd, Suite 3D<br />
              Innovate Valley, CA 94025
            </p>
          </div>

          {/* Column 2: Quick Links (Navbar Sections) */}
          <div>
            <h3 className="text-white font-bold text-[15px] mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Solutions', path: '/services' },
                { name: 'Products', path: '/products' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="hover:text-[#F5820A] text-[13.5px] transition-colors font-medium text-[#8C8C9A]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories (All Product Filters) */}
          <div>
            <h3 className="text-white font-bold text-[15px] mb-5">
              Categories
            </h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {["Guides", "News", "Learn", "Creators", "Digital Freebies", "Exchanges", "Connect"].map((filter) => (
                <li key={filter}>
                  <a
                    href="/all-products"
                    onClick={(e) => handleNavClick(e, '/all-products')}
                    className="hover:text-[#F5820A] text-[13.5px] transition-colors font-medium text-[#8C8C9A]"
                  >
                    {filter}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#2A2A2A] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-[#666666]">
            © 2025 Infinite Layers. All rights reserved.
          </span>
          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#333333] hover:bg-[#F5820A] hover:border-[#F5820A] hover:text-white flex items-center justify-center text-[14px] text-[#8C8C9A] transition-all"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#333333] hover:bg-[#F5820A] hover:border-[#F5820A] hover:text-white flex items-center justify-center text-[14px] text-[#8C8C9A] transition-all"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h4l-1 3h-3v6.95C17.7 21.32 22 17.15 22 12z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#333333] hover:bg-[#F5820A] hover:border-[#F5820A] hover:text-white flex items-center justify-center text-[14px] text-[#8C8C9A] transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.012 14.06 1.012 11.999 1.01c-5.438 0-9.863 4.37-9.867 9.8-.001 1.77.47 3.5 1.362 5.061L2.5 21.5l5.848-1.514zM16.126 13.7c-.228-.113-1.354-.663-1.56-.738-.206-.075-.357-.11-.508.113-.15.228-.582.738-.713.888-.13.15-.262.163-.49.05-.228-.113-.96-.35-1.83-1.12-.676-.598-1.133-1.336-1.266-1.562-.132-.227-.014-.35.1-.462.103-.1.228-.263.34-.395.114-.132.15-.226.228-.376.075-.15.037-.282-.018-.395-.056-.113-.508-1.217-.696-1.666-.184-.438-.364-.378-.508-.385-.13-.006-.282-.007-.432-.007-.15 0-.395.056-.601.282-.206.227-.787.763-.787 1.86 0 1.096.8 2.15.91 2.302.113.15 1.574 2.39 3.812 3.352.533.23 0 .428.847.74.316.311.665.378.892.427.228.05.733.15 1.25.163.518.013.91-.188 1.133-.3.223-.113 1.137-.464 1.354-.738.217-.275.228-.526.15-.638c-.078-.113-.263-.228-.49-.34z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
