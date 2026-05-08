import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import './Chatbot.css';

// Shateen Brand Knowledge Base
const SHATEEN_KNOWLEDGE = {
  greeting: "Hey there! 👋 Welcome to Shateen. I'm here to help you learn about what we do, how we work, and how we can help your business grow. What's on your mind?",
  
  responses: [
    {
      keywords: ['what do you do', 'what does shateen do', 'services', 'what you do', 'offerings', 'what can you do'],
      response: "Shateen is a creative partnership that focuses on shaping digital experiences rather than just pushing pixels. Whether it's solving a complex business puzzle or building a brand story from the ground up, the goal is to create something that resonates and actually works for the people using it. We specialize in web development, performance marketing, SEO, and cybersecurity. 🚀"
    },
    {
      keywords: ['who are you', 'team', 'about', 'founders', 'who is shateen', 'members'],
      response: "We're a Strategist and a Storyteller — a duo that believes every great product starts with understanding people, not just pixels. With over a year of hands-on experience across diverse industries, we approach every project with deep empathy and a commitment to craft. Think of us as your creative partners, not just another agency. 🤝"
    },
    {
      keywords: ['web', 'website', 'development', 'build', 'app', 'application'],
      response: "We craft high-performance websites that don't just look beautiful — they convert visitors into customers. Every site we build is designed with your audience in mind, focusing on speed, accessibility, and a seamless user experience. From landing pages to full-scale web applications, we've got you covered. 💻"
    },
    {
      keywords: ['marketing', 'ads', 'meta', 'google', 'leads', 'advertising', 'campaign'],
      response: "Our performance marketing approach is rooted in strategy and empathy. We run Meta and Google ad campaigns that generate consistent, quality leads — not just impressions. We focus on understanding your ideal customer and crafting messages that actually resonate with them. 📈"
    },
    {
      keywords: ['seo', 'search', 'ranking', 'organic', 'traffic'],
      response: "SEO isn't just about keywords — it's about making sure the right people find you at the right time. We optimize your digital presence with a blend of technical expertise and content strategy to drive organic growth that compounds over time. 🔍"
    },
    {
      keywords: ['security', 'cyber', 'penetration', 'testing', 'hack', 'protect'],
      response: "In today's digital landscape, security isn't optional — it's essential. We provide penetration testing and cybersecurity services to identify vulnerabilities before they become problems. Think of it as a health check for your digital assets. 🔒"
    },
    {
      keywords: ['price', 'cost', 'budget', 'how much', 'pricing', 'charge', 'rate', 'package'],
      response: "Every project is unique, so we tailor our pricing to fit your specific needs and goals. We believe in transparent, value-based pricing — no hidden fees, no surprises. The best way to get a clear picture is to book a quick call with us, and we'll walk you through everything. Want to schedule one? 💰"
    },
    {
      keywords: ['contact', 'reach', 'call', 'book', 'meeting', 'connect', 'hire', 'start'],
      response: "We'd love to chat! The easiest way to connect is to book a free 30-minute strategy call with us. We'll listen to your challenges, share some initial ideas, and see if we're a good fit for each other. You can book directly through our website — look for the 'Book a Meeting' button! 📞"
    },
    {
      keywords: ['why', 'different', 'unique', 'special', 'choose', 'better'],
      response: "What makes us different? We genuinely care. We're not a faceless agency — we're two people who obsess over the details and treat every project like it's our own. We prioritize the 'why' behind every decision and the 'feel' behind every interaction. When you work with Shateen, you get creative partners who are invested in your success. ✨"
    },
    {
      keywords: ['process', 'how do you work', 'workflow', 'approach', 'methodology'],
      response: "Our process is simple but intentional:\n\n1️⃣ **Listen** — We start by deeply understanding your business and goals\n2️⃣ **Strategize** — We map out the smartest path to get you there\n3️⃣ **Create** — We build functional, beautiful solutions with care\n4️⃣ **Refine** — We iterate based on real feedback until it's right\n\nThroughout it all, you're never in the dark — we believe in open, honest collaboration."
    },
    {
      keywords: ['portfolio', 'work', 'projects', 'examples', 'case study', 'clients'],
      response: "We've worked with businesses across diverse industries — from e-commerce to real estate — helping them grow through strategic digital solutions. You can check out some of our recent work in the 'Our Works' section on this page. Each project tells a story of collaboration and real results. 🎨"
    },
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'sup', 'yo'],
      response: "Hey! Great to have you here 😊 How can I help you today? Whether you're curious about our services, want to discuss a project idea, or just want to know more about Shateen — I'm all ears!"
    },
    {
      keywords: ['thanks', 'thank you', 'bye', 'goodbye', 'see you', 'later'],
      response: "Thank you for stopping by! If you ever need anything, we're just a message away. Wishing you an amazing day ahead! 🧡"
    }
  ],

  fallback: "That's a great question! While I might not have the perfect answer right now, our team would love to discuss this with you personally. Feel free to book a free strategy call — we're always happy to chat and explore how we can help. 😊"
};

function findBestResponse(input) {
  const lowerInput = input.toLowerCase().trim();
  
  let bestMatch = null;
  let bestScore = 0;

  for (const item of SHATEEN_KNOWLEDGE.responses) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (lowerInput.includes(keyword)) {
        score += keyword.split(' ').length; // Longer keyword matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch ? bestMatch.response : SHATEEN_KNOWLEDGE.fallback;
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

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), type: 'user', text: trimmed, time: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay for natural feel
    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const botResponse = findBestResponse(trimmed);
      const botMsg = { id: Date.now() + 1, type: 'bot', text: botResponse, time: new Date() };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, delay);
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
    "What do you do?",
    "Who's the team?",
    "Show me pricing",
    "Book a meeting"
  ];

  const handleQuickAction = (text) => {
    setInput(text);
    const userMsg = { id: Date.now(), type: 'user', text, time: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const botResponse = findBestResponse(text);
      const botMsg = { id: Date.now() + 1, type: 'bot', text: botResponse, time: new Date() };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, delay);
    setInput('');
  };

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
                Online
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
                <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
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

        {/* Quick Actions (only show if few messages) */}
        {messages.length <= 2 && (
          <div className="chatbot__quick-actions">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="chatbot__quick-btn"
                onClick={() => handleQuickAction(action)}
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
            placeholder="Ask me anything about Shateen..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            id="chatbot-input"
          />
          <button
            className="chatbot__send"
            onClick={handleSend}
            disabled={!input.trim()}
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
