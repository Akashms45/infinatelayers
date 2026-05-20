import React from 'react';
import { Heart, Bookmark, MessageCircle, Share, ArrowLeft } from 'lucide-react';

const filters = [
  "Guides", "News", "Learn", "Creators", "Digital Freebies", "Exchanges", "Connect"
];

const products = [
  { id: 1, title: 'White Abstract Sphere', author: 'Wade Warren', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: '3D Printed Skull', author: 'Savannah Nguyen', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', img: 'https://images.unsplash.com/photo-1563207153-f404bf40d3a5?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Green Yoda Print', author: 'Ronald Richards', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/men/22.jpg', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Pink Donut', author: 'Robert Fox', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/men/46.jpg', img: 'https://images.unsplash.com/photo-1550747528-569d65942bc2?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Pink Robot', author: 'Wade Warren', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Glass Triangle', author: 'Savannah Nguyen', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600' },
  { id: 7, title: 'Pink Abstract', author: 'Ronald Richards', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/men/22.jpg', img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=600' },
  { id: 8, title: 'Yellow Cat Block', author: 'Robert Fox', likes: 223, saves: 4, comments: 34, shares: 17, avatar: 'https://randomuser.me/api/portraits/men/46.jpg', img: 'https://images.unsplash.com/photo-1581090586937-236b9dd89524?auto=format&fit=crop&q=80&w=600' }
];

export default function AllProducts() {
  return (
    <div className="min-h-screen pt-8 pb-24 relative z-10 overflow-hidden">

      {/* Faint Grid Background (Matching Hero Section) */}
      <div className="absolute left-[-20%] top-[-10%] w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-16">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              className="px-6 py-2.5 rounded-full border border-gray-200 bg-white text-[#1F1B3E] font-semibold text-[14px] hover:border-[#F5820A] hover:text-[#F5820A] transition-colors shadow-sm"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-[32px] p-4 flex flex-col gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300">

              {/* Product Image */}
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Product Info */}
              <div className="px-3 pb-2 pt-1">
                <span className="text-[16px] font-bold text-[#111111] block text-center md:text-left">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
