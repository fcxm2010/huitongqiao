import React from 'react';
import { TimelineEvent } from '../types';

const events: TimelineEvent[] = [
  {
    year: "1935",
    title: "爱国义举，始建通车",
    description: "爱国华侨领袖梁金山先生（Liang Jinshan）目睹家乡交通闭塞，慷慨变卖家产，捐资修建惠通桥。聘请美国工程师设计，结束了怒江千百年来人马舟渡的历史，成为连接滇西的关键通道。"
  },
  {
    year: "1938",
    title: "抢通滇缅，生命线成",
    description: "随着抗战全面爆发，沿海港口相继沦陷。滇缅公路紧急抢通，惠通桥由柔性吊桥改建为载重更强的钢缆悬索桥，成为中国接收国际援华物资的唯一陆路通道的咽喉。"
  },
  {
    year: "1942.05.05",
    title: "惊天一爆，断桥阻敌",
    description: "日军攻陷龙陵，先头部队化装成难民混入人流试图夺桥。危急关头，守桥宪兵鸣枪示警，工兵营长张祖武果断按下起爆器。随着一声巨响，惠通桥坠入怒江。这一炸，将日军阻隔于怒江西岸，保卫了昆明和大后方。"
  },
  {
    year: "1944",
    title: "反攻修通，铁流滚滚",
    description: "中国远征军发起滇西大反攻。随着松山战役的惨烈胜利，工程部队在战火中抢修便桥。大军跨越怒江天险，向西追歼残敌，收复国土。"
  },
  {
    year: "现今",
    title: "功成身退，历史丰碑",
    description: "随着下游红旗桥及后续高速公路大桥的建成，惠通桥完成了它的历史使命。如今它作为国家级文物保护单位，静静伫立在怒江之上，诉说着那段血与火的岁月。"
  }
];

const HistoryTimeline: React.FC = () => {
  return (
    <div className="bg-[#fdfbf7] py-16 md:py-24 min-h-screen relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-red-800 font-bold tracking-widest text-xs uppercase mb-2 block">Chronology</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">历史回眸</h2>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto font-serif italic">
            从爱国华侨的慷慨捐赠，到工兵营长的决绝一按。
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-red-900/30"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#fdfbf7] border-2 border-red-800 rounded-full z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-10 md:ml-0 md:w-[45%]">
                  <div className="bg-white p-8 shadow-lg border-t-4 border-red-900 hover:shadow-xl transition-shadow duration-300">
                    <span className="inline-block text-5xl font-serif font-bold text-stone-200 absolute -top-6 right-4 z-0 select-none">
                      {event.year.split('.')[0]}
                    </span>
                    <div className="relative z-10">
                        <span className="block text-red-800 font-bold text-sm mb-2 tracking-widest">{event.year}</span>
                        <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{event.title}</h3>
                        <p className="text-stone-600 leading-relaxed text-justify text-sm">
                        {event.description}
                        </p>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;