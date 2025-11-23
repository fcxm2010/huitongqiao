import React from 'react';

const Heroes: React.FC = () => {
  return (
    <div className="bg-[#f5f2ea] py-16 md:py-24 min-h-screen text-stone-800">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">英雄群像</h2>
            <p className="text-stone-600">每一颗螺丝钉，都凝结着爱国者的血汗。</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Liang Jinshan */}
            <div className="bg-white rounded-sm shadow-xl overflow-hidden border-t-4 border-red-900 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto relative bg-stone-200">
                     <img 
                        src="https://picsum.photos/400/500?grayscale" 
                        alt="Liang Jinshan" 
                        className="w-full h-full object-cover sepia"
                     />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">梁金山</h3>
                    <span className="text-red-800 text-xs uppercase tracking-widest mb-4 block">爱国华侨领袖</span>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        祖籍保山。1930年代，他目睹家乡怒江天险阻隔交通，慨然变卖在缅甸的家产，独资捐建惠通桥。
                        抗战爆发后，他又捐献汽车80辆，并在日军占领后拒绝出任伪职，其民族气节令人钦佩。
                    </p>
                </div>
            </div>

            {/* Nanyang Mechanics */}
            <div className="bg-white rounded-sm shadow-xl overflow-hidden border-t-4 border-stone-600 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto relative bg-stone-200">
                     <img 
                        src="https://picsum.photos/401/501?grayscale" 
                        alt="Nanyang Mechanics" 
                        className="w-full h-full object-cover sepia"
                     />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">南洋机工</h3>
                    <span className="text-stone-500 text-xs uppercase tracking-widest mb-4 block">South Seas Mechanics</span>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        全称“南洋华侨机工回国服务团”。3000多名南洋华侨青年，响应号召回国。
                        他们驾驶卡车日夜穿梭在惠通桥上，在日军空袭和险恶路况中，运送了当时中国唯一的国际援助物资。
                    </p>
                </div>
            </div>
         </div>

         {/* Unknown Soldiers */}
         <div className="mt-12 bg-stone-800 text-stone-300 p-8 rounded-sm text-center">
            <h4 className="text-lg font-bold text-white mb-2">致敬无名英雄</h4>
            <p className="max-w-3xl mx-auto">
                以及那些在炸桥行动中牺牲的工兵，在对峙岁月中坚守战壕的远征军战士，和为修桥献出生命的民工。
                他们的名字可能无人知晓，但他们的功绩永世长存。
            </p>
         </div>
       </div>
    </div>
  );
};

export default Heroes;