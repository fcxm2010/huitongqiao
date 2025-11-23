import React from 'react';

// Using placeholder images with varied dimensions to simulate a masonry feel
const galleryItems = [
  { id: 1, src: "https://picsum.photos/600/400?random=1", title: "怒江峡谷", desc: "险峻的怒江大峡谷，惠通桥横跨其上。" },
  { id: 2, src: "https://picsum.photos/400/600?random=2", title: "桥塔遗址", desc: "岁月斑驳的桥塔，见证了战火硝烟。" },
  { id: 3, src: "https://picsum.photos/600/600?random=3", title: "运输车队", desc: "当年通过滇缅公路的物资车队（示意图）。" },
  { id: 4, src: "https://picsum.photos/500/350?random=4", title: "远征军老兵", desc: "向保家卫国的英雄致敬。" },
  { id: 5, src: "https://picsum.photos/400/500?random=5", title: "今日惠通桥", desc: "静静伫立在江面上的文物保护单位。" },
  { id: 6, src: "https://picsum.photos/600/450?random=6", title: "松山战场眺望", desc: "从松山阵地俯瞰惠通桥与怒江。" },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-stone-50 py-16 md:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">光影记忆</h2>
          <p className="mt-4 text-stone-600">凝固的历史瞬间</p>
        </div>

        {/* Micro Drama Section */}
        <div className="mb-16">
            <div className="flex flex-col md:flex-row bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl border border-stone-800">
                {/* Video Placeholder / Poster */}
                <div className="md:w-2/3 relative aspect-video bg-black group cursor-pointer">
                    <img 
                        src="https://photo.7zi.top/dmgl/%E6%A8%AA%E7%89%88%E8%83%8C%E6%99%AF%E6%B5%B7%E6%8A%A5.webp" 
                        alt="Micro Drama Poster" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>
                    <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                        特别呈现
                    </div>
                </div>

                {/* Info */}
                <div className="md:w-1/3 p-8 md:p-10 text-stone-300 flex flex-col justify-center relative">
                    {/* Decorative texture */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
                    
                    <div className="relative z-10">
                        <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">Original Series</div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">微短剧<br/>《滇缅公路》</h3>
                        <div className="w-12 h-1 bg-stone-700 mb-6"></div>
                        <p className="text-stone-400 leading-relaxed mb-8 text-sm text-justify">
                            重现那段血泪交织的岁月。本剧以电影级的质感，还原了南洋机工、筑路民工以及守桥战士在滇缅公路上的英勇事迹。通过微短剧的形式，让历史不再是冰冷的文字，而是鲜活的影像。
                            <br/><br/>
                            <span className="italic text-stone-500">"每一公里路，都是一条命。"</span>
                        </p>
                        <button className="self-start group flex items-center gap-2 px-6 py-3 border border-stone-600 hover:border-red-800 hover:bg-red-900/20 text-stone-300 hover:text-red-500 transition-all duration-300">
                            <span className="uppercase tracking-widest text-xs font-bold">观看全集</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-stone-200">
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 sepia-[0.2]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-stone-300 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;