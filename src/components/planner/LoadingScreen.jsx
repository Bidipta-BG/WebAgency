import React, { useState, useEffect, useRef } from 'react';

const messages = [
  "🤖 AI Consultant is reviewing your answers...",
  "📊 Analyzing your industry requirements...",
  "🧠 Our AI is matching the best features for you...",
  "⚙️ Architecting your custom technology stack...",
  "💰 Crunching numbers to give you the best pricing...",
  "✨ Finalizing your personalized estimate..."
];

const LoadingScreen = ({ onComplete, isEditMode }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const hasCompleted = useRef(false); // Guard to prevent double-call

  useEffect(() => {
    hasCompleted.current = false; // Reset on mount

    if (isEditMode) {
      // Skip the artificial AI delay for sales team
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onComplete();
      }
      return;
    }

    // Cycle through messages every 600ms for regular customers
    const interval = setInterval(() => {
      setCurrentMessage(prev => {
        if (prev >= messages.length - 1) {
          clearInterval(interval);
          if (!hasCompleted.current) {
            hasCompleted.current = true;
            setTimeout(onComplete, 500); // Complete after last message — only once
          }
          return prev;
        }
        return prev + 1;
      });
    }, 1400);

    return () => clearInterval(interval);
  }, []); // Empty deps — run only on actual mount, not on every render

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
        <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          ✨
        </div>
      </div>
      
      <div className="h-12 overflow-hidden flex items-center justify-center">
        <p key={currentMessage} className="text-xl font-medium text-slate-300 animate-fade-in-up text-center">
          {messages[currentMessage]}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
