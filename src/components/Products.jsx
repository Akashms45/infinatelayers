import React from 'react';

const products = [
  {
    id: 1,
    title: 'High-Precision Mechanical Gears',
    category: 'Engineering Prototypes',
    description: 'Industrial nylon and tough resin mechanical gears custom printed with extreme tolerances for mechanical assemblies and kinetic prototyping.',
    images: [
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1615840287214-7fe58a8f3685?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1550747528-569d65942bc2?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 2,
    title: 'Custom Anatomical & Dental Models',
    category: 'Biocompatible Resins',
    description: 'High-precision dental arches, surgical guides, and skeletal replicas produced with dental-grade resin for absolute anatomical accuracy.',
    images: [
      'https://images.unsplash.com/photo-1580979666060-d261e4e24395?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 3,
    title: 'Detailed Architectural Layouts',
    category: 'Scale Architecture',
    description: 'Intricate multi-layer scaling models for architectural planning, urban development mockups, and structural engineering showcases.',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1581090586937-236b9dd89524?auto=format&fit=crop&q=80&w=400'
    ]
  }
];

export default function Products() {
  const handleViewAllClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', '/all-products');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section id="products" className="pt-10 pb-24 bg-white relative overflow-hidden">

      {/* Faint Grid Background (Matching Hero Section) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-12 px-2">
          <h2 className="text-[40px] md:text-[50px] font-bold text-[#1F1B3E] tracking-tight">
            Products
          </h2>
          <a
            href="/all-products"
            onClick={handleViewAllClick}
            className="border-2 border-[#F5820A] text-[#F5820A] hover:bg-[#F5820A] hover:text-white px-7 py-2.5 rounded-full font-bold text-[14px] transition-all shadow-sm inline-block"
          >
            View all
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-[40px] p-6 pb-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col">

              {/* Image Gallery - Unchanged Visuals */}
              <div className="flex justify-center items-center -space-x-4 mb-8 mt-2">
                {/* Left Image */}
                <div className="w-[105px] h-[125px] rounded-[24px] overflow-hidden relative z-0 shadow-sm opacity-90">
                  <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Center Image */}
                <div className="w-[145px] h-[160px] rounded-[30px] overflow-hidden relative z-10 shadow-2xl">
                  <img src={product.images[1]} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Right Image */}
                <div className="w-[105px] h-[125px] rounded-[24px] overflow-hidden relative z-0 shadow-sm opacity-90">
                  <img src={product.images[2]} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center flex flex-col flex-grow px-2">
                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#1F1B3E] leading-snug mb-3">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#666666] leading-relaxed max-w-[320px] mx-auto">
                  {product.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
