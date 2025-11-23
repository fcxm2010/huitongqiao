import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-serif font-bold text-stone-200">惠通桥纪念馆</h3>
          <p className="text-sm mt-1">铭记历史，珍爱和平</p>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors">关于我们</span>
          <span className="hover:text-white cursor-pointer transition-colors">参观指南</span>
          <span className="hover:text-white cursor-pointer transition-colors">版权声明</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-stone-800 text-center text-xs">
        &copy; {new Date().getFullYear()} Huitong Bridge Memorial. Powered by React & Gemini.
      </div>
    </footer>
  );
};

export default Footer;