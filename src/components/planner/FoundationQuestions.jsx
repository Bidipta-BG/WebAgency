import React, { useEffect } from 'react';
import QuestionCard from './QuestionCard';
import { foundationQuestions } from '../../data/common-questions';

const FoundationQuestions = ({ answers, onAnswer, onNext, isSalesMode }) => {
  // Pre-fill default answers if empty
  useEffect(() => {
    if (!answers.Q0A) onAnswer('Q0A', 'website');
    if (!answers.Q0B) onAnswer('Q0B', 'managed');
  }, []);

  return (
    <div className="max-w-3xl mx-auto w-full animate-fade-in-up">
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          100% Free & No Commitment
        </div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Meet Your AI Consultant.</h2>
        <p className="text-xl text-slate-400 mt-3 max-w-2xl mx-auto text-center">Answer a few questions and our AI will analyse your requirements and generate a personalised pricing estimate.</p>
      </div>

      <div className="space-y-6">
        {foundationQuestions.map(q => (
          <QuestionCard 
            key={q.id}
            question={q}
            answer={answers[q.id]}
            onAnswer={onAnswer}
            isSalesMode={isSalesMode}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button 
          onClick={onNext}
          className="px-10 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-bright shadow-lg shadow-accent/25 transition-all transform hover:-translate-y-1"
        >
          Generate My Estimate →
        </button>
      </div>
    </div>
  );
};

export default FoundationQuestions;
