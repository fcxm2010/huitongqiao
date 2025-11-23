import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/gemini';
import { Send, Loader2, User, Bot } from 'lucide-react';

const AIGuide: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '您好！我是这里的AI历史导览员“守桥人”。我可以为您讲述惠通桥的建造始末、1942年的惊天一炸，以及它在抗战中的战略地位。请问您想了解什么？',
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "抱歉，连接出现了问题，请稍后再试。",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-stone-100 min-h-screen pt-6 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-[calc(100vh-140px)] flex flex-col">
        
        {/* Header area */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center justify-center gap-2">
            <Bot className="text-orange-600" /> AI 历史导览
          </h2>
          <p className="text-stone-600 text-sm mt-2">基于 Gemini 技术，为您解答关于惠通桥的一切疑问</p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden flex flex-col">
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                  
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-stone-700 text-white' : 'bg-orange-600 text-white'
                  }`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>

                  {/* Bubble */}
                  <div className={`p-4 rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-800 text-white rounded-tr-none' 
                      : 'bg-stone-50 border border-stone-100 text-stone-800 rounded-tl-none'
                  }`}>
                    <div className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                      {msg.text}
                    </div>
                    <div className={`text-xs mt-2 ${msg.role === 'user' ? 'text-stone-400' : 'text-stone-400'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                 <div className="flex flex-row gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-stone-50 border border-stone-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="animate-spin text-orange-600" size={20} />
                    <span className="text-stone-500 text-sm">正在查阅历史档案...</span>
                  </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-stone-50 border-t border-stone-200">
            <div className="relative flex items-center gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="问问关于惠通桥的故事..."
                className="w-full bg-white text-stone-800 border border-stone-300 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 resize-none h-14 shadow-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-orange-600 hover:bg-orange-50 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="text-center mt-2 text-xs text-stone-400">
              AI 可能产生不准确的信息，请以史实资料为准。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGuide;