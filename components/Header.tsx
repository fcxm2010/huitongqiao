import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onChangeView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '首页', value: ViewState.HOME },
    { label: '历史回眸', value: ViewState.HISTORY },
    { label: '一桥锁江', value: ViewState.STRATEGIC },
    { label: '英雄群像', value: ViewState.HEROES },
    { label: '影像长廊', value: ViewState.GALLERY },
    { label: '在线祭奠', value: ViewState.MEMORIAL },
    { label: 'AI 导览', value: ViewState.GUIDE },
  ];

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] text-stone-100 shadow-xl border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex flex-col justify-center cursor-pointer"
            onClick={() => onChangeView(ViewState.HOME)}
          >
            <div className="flex items-center">
               <div className="w-1 h-8 bg-red-900 mr-3"></div>
               <span className="text-2xl font-serif font-bold tracking-widest text-stone-100">惠通桥</span>
            </div>
            <span className="ml-4 text-[10px] uppercase tracking-[0.3em] text-stone-500">Huitong Bridge Memorial</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${
                  currentView === item.value
                    ? 'text-red-500 border-red-600'
                    : 'text-stone-400 border-transparent hover:text-stone-200 hover:border-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="xl:hidden bg-[#1a1a1a] border-t border-stone-800 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 text-base font-medium border-l-4 ${
                  currentView === item.value
                    ? 'text-red-500 border-red-600 bg-stone-900'
                    : 'text-stone-400 border-transparent hover:text-white hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;