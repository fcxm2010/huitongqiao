import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col bg-stone-900">
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://photo.7zi.top/2025/11/%E7%82%B8%E6%AF%81%E6%83%A0%E9%80%9A%E6%A1%A5.webp" 
          alt="Nu River Canyon" 
          className="w-full h-full object-cover object-bottom opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 border-l-4 border-red-700 pl-4">
              <span className="text-red-500 font-bold tracking-widest text-sm uppercase">The Throat of Nu River</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-100 leading-tight">
              怒江咽喉<br />
              <span className="text-red-700">惠通桥</span>
            </h1>
            
            {/* Slogan */}
            <div className="border-t border-stone-700 pt-8 max-w-xl">
              <p className="text-2xl md:text-3xl font-serif text-stone-300 leading-relaxed italic">
                "一座桥，断了日寇的铁蹄；<br/>
                一条江，守住了中华的后方。"
              </p>
            </div>
            
            {/* Action */}
            <div className="pt-8">
              <button 
                onClick={onExplore}
                className="group relative px-8 py-4 bg-transparent border border-stone-500 text-stone-300 hover:border-red-600 hover:text-red-500 transition-all duration-500"
              >
                <span className="absolute inset-0 w-0 bg-red-900/10 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
                <span className="relative font-medium tracking-widest">开启历史卷轴</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Data Dashboard */}
      <div className="relative border-t border-stone-800 bg-[#111] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="group cursor-default">
              <div className="text-stone-500 text-xs uppercase tracking-widest mb-1 group-hover:text-red-500 transition-colors">始建年份</div>
              <div className="text-4xl font-serif text-stone-100">1935</div>
            </div>
            <div className="group cursor-default">
              <div className="text-stone-500 text-xs uppercase tracking-widest mb-1 group-hover:text-red-500 transition-colors">炸桥阻敌</div>
              <div className="text-4xl font-serif text-stone-100">1942<span className="text-lg text-stone-500">.05.05</span></div>
            </div>
            <div className="group cursor-default">
              <div className="text-stone-500 text-xs uppercase tracking-widest mb-1 group-hover:text-red-500 transition-colors">老桥全长</div>
              <div className="text-4xl font-serif text-stone-100">123<span className="text-lg text-stone-500">米</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;