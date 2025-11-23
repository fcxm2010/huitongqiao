import React, { useState } from 'react';
import { Flower } from 'lucide-react';

const Memorial: React.FC = () => {
  const [flowers, setFlowers] = useState(1942);
  const [hasLaidFlower, setHasLaidFlower] = useState(false);

  const handleLayFlower = () => {
    if (!hasLaidFlower) {
      setFlowers(prev => prev + 1);
      setHasLaidFlower(true);
    }
  };

  return (
    <div className="bg-stone-900 min-h-screen flex flex-col items-center justify-center py-16 px-4">
       <div className="max-w-2xl w-full text-center space-y-8">
          
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">在线祭奠</h2>
            <p className="text-stone-400 font-serif italic text-lg">
              "山河无恙，魂归故里"
            </p>
          </div>

          {/* Main Interactive Area */}
          <div className="bg-[#222] border border-stone-700 p-12 rounded-lg shadow-2xl relative overflow-hidden group">
              {/* Candle Glow Effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                  <div className="text-6xl text-stone-600 mb-6 group-hover:text-stone-500 transition-colors">
                     碑
                  </div>
                  <p className="text-stone-300 mb-8 leading-relaxed">
                     向滇缅抗战中牺牲的英烈致敬<br/>
                     向惠通桥的守护者致敬
                  </p>

                  <button 
                    onClick={handleLayFlower}
                    disabled={hasLaidFlower}
                    className={`
                        flex items-center gap-3 px-8 py-3 rounded-full text-lg font-medium transition-all duration-500
                        ${hasLaidFlower 
                            ? 'bg-stone-800 text-orange-500 cursor-default border border-stone-700' 
                            : 'bg-stone-100 text-stone-900 hover:bg-orange-50 hover:scale-105 shadow-lg hover:shadow-orange-900/20'}
                    `}
                  >
                    <Flower className={`${hasLaidFlower ? '' : 'animate-pulse'}`} size={24} />
                    {hasLaidFlower ? '已献花' : '敬献鲜花'}
                  </button>

                  <div className="mt-6 text-stone-500 font-mono text-sm">
                    今日已有 <span className="text-orange-500 font-bold">{flowers.toLocaleString()}</span> 人次祭奠
                  </div>
              </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-600 uppercase tracking-widest pt-8 border-t border-stone-800">
             <div>铭记历史</div>
             <div>珍爱和平</div>
             <div>缅怀先烈</div>
             <div>吾辈自强</div>
          </div>
       </div>
    </div>
  );
};

export default Memorial;