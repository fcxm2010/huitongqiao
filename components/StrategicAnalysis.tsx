import React from 'react';

const StrategicAnalysis: React.FC = () => {
  return (
    <div className="bg-stone-900 py-16 md:py-24 min-h-screen text-stone-200 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.1 }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">一桥锁江 · 战略态势</h2>
          <div className="h-0.5 w-20 bg-red-700 mx-auto"></div>
          <p className="mt-4 text-stone-400 max-w-2xl mx-auto">
            为何惠通桥被称为“滇缅公路的咽喉”？为何千军万马只能走此一桥？
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Map Visualization Area */}
            <div className="bg-[#222] p-2 rounded border border-stone-700 shadow-2xl relative aspect-video group">
                <img 
                    src="https://photo.7zi.top/2025/11/%E6%83%A0%E9%80%9A%E6%A1%A5%E5%8D%AB%E6%98%9F%E5%9B%BE.webp" 
                    alt="Strategic Map Diagram" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                {/* Simulated Overlay Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white relative z-10"></div>
                </div>
                
                {/* Labels */}
                <div className="absolute top-1/4 left-1/4 text-xs text-stone-300 border px-2 py-1 border-stone-600 bg-black/50">
                    西岸：松山日军阵地
                </div>
                <div className="absolute bottom-1/4 right-1/4 text-xs text-stone-300 border px-2 py-1 border-stone-600 bg-black/50">
                    东岸：中国远征军守备
                </div>
                <div className="absolute top-1/2 left-1/2 mt-6 transform -translate-x-1/2 text-red-500 font-bold tracking-widest text-sm bg-black/80 px-2">
                    惠通桥 (Huitong Bridge)
                </div>

                {/* River Flow */}
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-20 h-full border-l border-r border-dashed border-blue-500/30 skew-x-12 transform translate-x-8"></div>
                </div>
            </div>

            {/* Text Analysis */}
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-stone-800 flex items-center justify-center text-red-600 font-bold text-xl border border-stone-700">01</div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">怒江天险</h3>
                        <p className="text-stone-400 leading-relaxed">
                            怒江两岸山势陡峭，大峡谷垂直落差极大。水流湍急，无法徒涉或架设浮桥。惠通桥是方圆几十公里内唯一的渡江通道。
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-stone-800 flex items-center justify-center text-red-600 font-bold text-xl border border-stone-700">02</div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">隔江对峙</h3>
                        <p className="text-stone-400 leading-relaxed">
                            1942年炸桥后，利用东岸的高地优势（黑山门），中国军队构建了严密的火力网，彻底封锁了江面，使得装备精良的日军两年不得寸进。
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-stone-800 flex items-center justify-center text-red-600 font-bold text-xl border border-stone-700">03</div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">生命线咽喉</h3>
                        <p className="text-stone-400 leading-relaxed">
                            滇缅公路是中国抗战后期的输血管道。一旦惠通桥失守，日军长驱直入，昆明乃至重庆将无险可守。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Location Section */}
        <div className="bg-[#222] p-8 rounded border border-stone-700 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">地理位置</h3>
            <p className="text-stone-400 mb-6">
                惠通桥位于云南省保山市龙陵县腊勐乡与施甸县由旺乡交界的怒江峡谷。
                它是滇缅公路（320国道旧线）的咽喉要道。
            </p>
            <div className="w-full h-80 bg-stone-800 rounded flex flex-col items-center justify-center text-stone-200 relative overflow-hidden group border border-stone-600">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ 
                    backgroundImage: 'url("https://picsum.photos/1000/600?grayscale&blur=2")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent"></div>
                
                <div className="z-10 flex flex-col items-center text-center p-4">
                     <div className="text-red-500 mb-3 animate-bounce drop-shadow-lg">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-6 text-white tracking-wide">云南省保山市 · 惠通桥遗址</h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <a 
                            href="https://map.baidu.com/search/%E6%83%A0%E9%80%9A%E6%A1%A5/@11009580,2853240,13z" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#3385ff] hover:bg-[#2860E8] text-white rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium min-w-[160px]"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            百度地图导航
                        </a>
                        <a 
                            href="https://www.amap.com/search?query=%E6%83%A0%E9%80%9A%E6%A1%A5" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#1C7AFE] hover:bg-blue-600 text-white rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium min-w-[160px]"
                        >
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                            高德/腾讯地图
                        </a>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default StrategicAnalysis;