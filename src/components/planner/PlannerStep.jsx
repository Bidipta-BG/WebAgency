import React from 'react';
import QuestionCard from './QuestionCard';

const PlannerStep = ({ title, subtext, questions, answers, onAnswer, onNext, onBack, isNextDisabled, isSalesMode }) => {
  return (
    <div className="max-w-3xl mx-auto w-full animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        {subtext && <p className="text-lg text-slate-400 mt-2">{subtext}</p>}
      </div>

      <div className="space-y-6">
        {questions.map((q) => (
          <QuestionCard 
            key={q.id} 
            question={q} 
            answer={answers[q.id]} 
            onAnswer={onAnswer} 
            isSalesMode={isSalesMode}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-10">
        <button 
          onClick={onBack}
          className="px-6 py-3 text-slate-400 font-medium hover:text-white transition-colors"
        >
          ← Back
        </button>
        <button 
          onClick={onNext}
          disabled={isNextDisabled}
          className={`px-8 py-3 rounded-lg font-bold text-white transition-all shadow-lg ${
            isNextDisabled 
              ? 'bg-white/10 text-white/30 cursor-not-allowed' 
              : 'bg-accent hover:bg-accent-bright hover:shadow-accent/30'
          }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default PlannerStep;
