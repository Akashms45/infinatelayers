import React from 'react';

const users = [
  {
    id: 1,
    name: 'Waldo Broodryk',
    handle: '@waldobroodryk',
    followers: '128k',
    designs: '263',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    images: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1610447385257-2e1966a3ed58?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1604147706283-d7119b1b822a?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 2,
    name: 'Brooklyn Simmons',
    handle: 'Printer 🖨️',
    followers: '165k',
    designs: '365',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    images: [
      'https://images.unsplash.com/photo-1580979666060-d261e4e24395?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 3,
    name: 'Darrell Steward',
    handle: 'Modeller ⚙️',
    followers: '65k',
    designs: '1642',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1581090586937-236b9dd89524?auto=format&fit=crop&q=80&w=400'
    ]
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
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
          <a href="#all-products" className="border-2 border-[#F5820A] text-[#F5820A] hover:bg-[#F5820A] hover:text-white px-7 py-2.5 rounded-full font-bold text-[14px] transition-all shadow-sm inline-block">
            View all
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-[40px] p-6 pb-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col">
              
              {/* Image Gallery */}
              <div className="flex justify-center items-center -space-x-4 mb-8 mt-2">
                {/* Left Image */}
                <div className="w-[105px] h-[125px] rounded-[24px] overflow-hidden relative z-0 shadow-sm opacity-90">
                  <img src={user.images[0]} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Center Image */}
                <div className="w-[145px] h-[160px] rounded-[30px] overflow-hidden relative z-10 shadow-2xl">
                  <img src={user.images[1]} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Right Image */}
                <div className="w-[105px] h-[125px] rounded-[24px] overflow-hidden relative z-0 shadow-sm opacity-90">
                  <img src={user.images[2]} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* User Info */}
              <div className="text-center mb-10">
                <h3 className="text-[20px] font-bold text-[#1F1B3E] flex items-center justify-center gap-1.5">
                  {user.name}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#5200FF"/>
                    <path d="M16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711L10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929C6.68342 10.9024 7.31658 10.9024 7.70711 11.2929L10 13.5858L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289Z" fill="white"/>
                  </svg>
                </h3>
                <p className="text-[14px] text-[#8C8C9A] mt-1 font-medium">{user.handle}</p>
              </div>

              {/* Footer / Stats */}
              <div className="flex items-center justify-between mt-auto px-1">
                <img src={user.avatar} alt={user.name} className="w-11 h-11 rounded-full object-cover shadow-sm border border-gray-100" />
                
                <div className="flex gap-6 items-center">
                  <div className="text-center">
                    <p className="font-extrabold text-[#1F1B3E] text-[16px] leading-tight">{user.followers}</p>
                    <p className="text-[11.5px] text-[#8C8C9A] font-medium tracking-wide uppercase">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-extrabold text-[#1F1B3E] text-[16px] leading-tight">{user.designs}</p>
                    <p className="text-[11.5px] text-[#8C8C9A] font-medium tracking-wide uppercase">Designs</p>
                  </div>
                </div>
                
                <button className="flex items-center gap-1.5 bg-[#F6F6F9] px-4 py-2.5 rounded-full text-[13px] font-bold text-[#1F1B3E] hover:bg-[#EAEAEF] transition-colors">
                  Follow 
                  <span className="flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full shadow-sm text-[16px] leading-none pb-[2px] ml-0.5">
                    +
                  </span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
