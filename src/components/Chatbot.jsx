import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './Chatbot.css';

// Shateen Brand Knowledge Base (used as local fallback and system prompt)
const SHATEEN_KNOWLEDGE = {
  greeting: "Hey there! 👋 Welcome to Shateen. I'm here to help you learn about what we do and how we can help your business grow. What's on your mind?",
  
  responses: [
    {
      keywords: ['hi', 'hello', 'hey', 'hai', 'sup', 'yo'],
      response: "Hey! 😊 Great to have you here. How can I help you today? I can tell you about our web development, marketing, or cybersecurity services!"
    },
    {
      keywords: ['what do you do', 'services', 'offerings', 'work', 'do'],
      response: "Shateen is a creative partner for digital growth. We specialize in **Web Development**, **Performance Marketing**, **SEO**, and **Cybersecurity Audits**. 🚀"
    },
    {
      keywords: ['who are you', 'team', 'about', 'shateen'],
      response: "We're a duo of a Strategist and a Storyteller who believe in understanding people, not just pixels. We treat every project like our own! 🤝"
    },
    {
      keywords: ['contact', 'call', 'book', 'meeting', 'reach', 'connect'],
      response: "We'd love to chat! You can reach us directly at **+91 8608442802** or book a free 30-minute strategy call by clicking the **'Book a Meeting'** button in the corner! 📞"
    },
    {
      keywords: ['price', 'cost', 'pricing', 'budget'],
      response: "Every project is unique, so we tailor our pricing to your goals. Book a call with us for a custom quote! 💰"
    },
    {
      keywords: ['seo', 'search', 'ranking'],
      response: "We help you rank on the first page of Google through technical SEO and content strategy. 🔍"
    },
    {
      keywords: ['security', 'cyber', 'hack', 'protect'],
      response: "We offer penetration testing and security audits to keep your digital assets safe from vulnerabilities. 🛡️"
    },
    {
      keywords: ['ceo', 'founder', 'pugazhenthi', 'owner', 'boss', 'head'],
      response: "Our CEO & Founder is **Pugazhenthi J**. He's a visionary leader dedicated to blending modern technology with creative storytelling! 🚀"
    }
  ],
  fallback: "That's an interesting point! While I focus on Shateen's services, our team would love to discuss this with you in detail. Would you like to book a quick call? 😊"
};

const SHATEEN_CONTEXT = `
You are the AI assistant for Shateen. Tone: Professional, friendly, creative. 
CEO & Founder: Pugazhenthi J.
Contact Number: +91 8608442802.
Services: Web Dev, Performance Marketing, SEO, Cybersecurity. 
Goal: Be helpful and encourage booking a meeting.
`;

function findLocalResponse(input) {
  const lowerInput = input.toLowerCase().trim();
  const match = SHATEEN_KNOWLEDGE.responses.find(item => 
    item.keywords.some(keyword => lowerInput.includes(keyword))
  );
  return match ? match.response : SHATEEN_KNOWLEDGE.fallback;
}

async function getGeminiResponse(userMessage, history) {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!API_KEY || API_KEY.length < 10) {
    return findLocalResponse(userMessage);
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    // Using gemini-flash-latest for better reliability and quota management
    const model = genAI.getGenerativeModel({ 
      model: "gemini-flash-latest",
      systemInstruction: SHATEEN_CONTEXT
    });

    const chat = model.startChat({
      history: history.slice(-6).map(msg => ({
        role: msg.type === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    // If Gemini fails, we use the improved local knowledge base
    return findLocalResponse(userMessage);
  }
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: SHATEEN_KNOWLEDGE.greeting, time: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (customText = null) => {
    const textToSend = customText || input.trim();
    if (!textToSend || isTyping) return;

    const userMsg = { id: Date.now(), type: 'user', text: textToSend, time: new Date() };
    setMessages(prev => [...prev, userMsg]);
    
    if (!customText) setInput('');
    setIsTyping(true);

    // Prepare history
    const history = messages.slice(1);

    const botResponse = await getGeminiResponse(textToSend, history);
    
    const botMsg = { id: Date.now() + 1, type: 'bot', text: botResponse, time: new Date() };
    setIsTyping(false);
    setMessages(prev => [...prev, botMsg]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const quickActions = [
    "What services do you offer?",
    "How do I book a meeting?",
    "Who is the CEO?",
    "What is your contact number?",
    "Show me your process"
  ];

  return (
    <>
      {/* Floating Bot Head */}
      <div
        className={`shateen-bot-container ${isOpen ? 'shateen-bot-container--hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        id="chatbot-trigger"
      >
        <div className="chat-bubble">Hai!</div>
        <div className="bot-head-3d">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF9F43' }} />
                <stop offset="100%" style={{ stopColor: '#FF6B6B' }} />
              </linearGradient>
            </defs>
            <path d="M40,80 Q50,95 60,80" fill="none" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="50" r="40" fill="url(#headGrad)" />
            <circle className="bot-eye" cx="35" cy="45" r="5" fill="white" />
            <circle className="bot-eye" cx="65" cy="45" r="5" fill="white" />
            <path d="M35,65 Q50,75 65,65" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Chat Window */}
      <div className={`chatbot ${isOpen ? 'chatbot--open' : ''}`} id="chatbot-window">
        {/* Header */}
        <div className="chatbot__header">
          <div className="chatbot__header-info">
            <div className="chatbot__avatar">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="chatbot__header-title">Shateen AI</h4>
              <span className="chatbot__header-status">
                <span className="chatbot__status-dot" />
                {import.meta.env.VITE_GEMINI_API_KEY ? 'Powered by Gemini' : 'Online'}
              </span>
            </div>
          </div>
          <button
            className="chatbot__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot__messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chatbot__message chatbot__message--${msg.type}`}>
              {msg.type === 'bot' && (
                <div className="chatbot__message-avatar">
                  <Sparkles size={12} />
                </div>
              )}
              <div className="chatbot__message-bubble">
                <p dangerouslySetInnerHTML={{ 
                  __html: msg.text
                    .replace(/\n/g, '<br/>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                }} />
                <span className="chatbot__message-time">{formatTime(msg.time)}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot__message chatbot__message--bot">
              <div className="chatbot__message-avatar">
                <Sparkles size={12} />
              </div>
              <div className="chatbot__message-bubble chatbot__typing">
                <span className="chatbot__typing-dot" />
                <span className="chatbot__typing-dot" />
                <span className="chatbot__typing-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 2 && (
          <div className="chatbot__quick-actions">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="chatbot__quick-btn"
                onClick={() => handleSend(action)}
              >
                {action}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chatbot__input-area">
          <input
            ref={inputRef}
            type="text"
            className="chatbot__input"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            id="chatbot-input"
          />
          <button
            className="chatbot__send"
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;


