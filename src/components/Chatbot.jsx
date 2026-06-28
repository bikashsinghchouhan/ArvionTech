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
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
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
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 cursor-pointer rounded-full bg-[#ff7f32] text-white flex items-center justify-center shadow-2xl shadow-orange-500/40 hover:bg-[#ff8c42] transition-colors"
          >
            <FaComments size={24} />
          </motion.button>
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
            className="absolute bottom-0 right-0 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100"
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
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.isBot
                    ? 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm self-start shadow-sm'
                    : 'bg-[#ff7f32] text-white rounded-tr-sm self-end shadow-sm'
                    }`}
                >
                  {msg.text}
                </div>
              ))}

              {/* Quick Actions (only show at the end if the last message is from the bot) */}
              {messages[messages.length - 1].isBot && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {predefinedQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      className="text-[11px] bg-orange-50 text-[#ff7f32] border border-orange-200 px-3 py-1.5 rounded-full hover:bg-[#ff7f32] hover:text-white transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
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
