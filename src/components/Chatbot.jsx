import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { predefinedQuestions, getBotResponse } from '../configurations/ChatbotKnowledge.js';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 Welcome to Arvion Technologies. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesContainerRef = useRef(null);
  const latestMessageRef = useRef(null);

  // Auto-scroll to show the latest message clearly on screen
  const scrollToLatest = () => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToLatest();
    }, 80);
    return () => clearTimeout(timer);
  }, [messages, isOpen]);

  // Handle opening with a delay to attract attention
  useEffect(() => {
    const timer = setTimeout(() => {
      // Opt-in automatic opening could go here if requested
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { text, isBot: false }];
    setMessages(newMessages);
    setInputValue('');

    // Simulate typing delay for bot
    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages([...newMessages, { text: response, isBot: true }]);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const renderFormattedMessage = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <div className="relative">
            {/* Water Wave / Ripple Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 0.25, 0], scale: [0.9, 1.2, 1.5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-[#ff7f32] -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 0.15, 0], scale: [0.9, 1.4, 1.8] }}
              transition={{
                duration: 2.5,
                delay: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-[#ff7f32] -z-20"
            />

            {/* Glowing Backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 blur-md opacity-40 -z-10 animate-pulse"></div>

            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="relative w-14 h-14 bg-gradient-to-r from-[#ff8c42] to-[#ff7f32] text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 cursor-pointer group border border-white/30"
            >
              {/* Ping badge */}
              <span className="absolute top-2 right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>

              <FaComments size={24} className="group-hover:rotate-12 transition-transform duration-300 drop-shadow" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute bottom-0 right-0 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-5rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#ff8c42] to-[#ff7f32] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <FaComments size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Arvion Technologies Assistant</h3>
                  <p className="text-[10px] text-white/80">Online & ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-3">
              {messages.map((msg, idx) => {
                const isLatest = idx === messages.length - 1;
                return (
                  <div
                    key={idx}
                    ref={isLatest ? latestMessageRef : null}
                    className={`max-w-[85%] rounded-2xl p-3 text-sm whitespace-pre-line leading-relaxed ${msg.isBot
                      ? 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm self-start shadow-sm'
                      : 'bg-[#ff7f32] text-white rounded-tr-sm self-end shadow-sm'
                      }`}
                  >
                    {renderFormattedMessage(msg.text)}
                  </div>
                );
              })}
            </div>

            {/* Suggested Questions Section (Kept below messages, above input bar) */}
            <div className="bg-slate-50 border-t border-slate-100 px-3 py-2">
              <div
                className="flex items-center gap-1.5 overflow-x-auto py-0.5"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex-shrink-0 mr-1">
                  Suggested:
                </span>
                {predefinedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="flex-shrink-0 text-xs bg-white text-[#ff7f32] border border-orange-200 px-3 py-1 rounded-full hover:bg-[#ff7f32] hover:text-white transition-all shadow-2xs whitespace-nowrap cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#ff7f32] focus:ring-2 focus:ring-orange-50 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-[#ff7f32] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff8c42] transition-colors"
              >
                <FaPaperPlane size={14} className="-ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
