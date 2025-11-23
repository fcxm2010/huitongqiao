import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HistoryTimeline from './components/HistoryTimeline';
import StrategicAnalysis from './components/StrategicAnalysis';
import Heroes from './components/Heroes';
import Memorial from './components/Memorial';
import Gallery from './components/Gallery';
import AIGuide from './components/AIGuide';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <main>
            <Hero onExplore={() => setCurrentView(ViewState.HISTORY)} />
            {/* Introduction Teaser */}
            <div className="py-20 bg-[#f5f2ea] text-center border-b border-stone-300">
              <div className="max-w-4xl mx-auto px-4">
                <div className="w-16 h-1 bg-red-800 mx-auto mb-6"></div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">关于惠通桥</h2>
                <p className="text-stone-700 leading-relaxed text-lg">
                  惠通桥位于滇缅公路（中国段）核心路段，横跨怒江天险。它不仅是一座交通枢纽，更是一座历史的丰碑。
                  在抗日战争最艰难的岁月里，它是中国与外部世界联系的唯一陆路通道的咽喉。
                  今天，我们通过数字化方式重建这段记忆，邀请您一同走进那段峥嵘岁月。
                </p>
              </div>
            </div>
          </main>
        );
      case ViewState.HISTORY:
        return <HistoryTimeline />;
      case ViewState.STRATEGIC:
        return <StrategicAnalysis />;
      case ViewState.HEROES:
        return <Heroes />;
      case ViewState.MEMORIAL:
        return <Memorial />;
      case ViewState.GALLERY:
        return <Gallery />;
      case ViewState.GUIDE:
        return <AIGuide />;
      default:
        return <Hero onExplore={() => setCurrentView(ViewState.HISTORY)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-red-900 selection:text-white">
      <Header currentView={currentView} onChangeView={setCurrentView} />
      <div className="flex-grow bg-[#f5f2ea]">
        {renderView()}
      </div>
      <Footer />
    </div>
  );
};

export default App;