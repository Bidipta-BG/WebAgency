import React from 'react';

const QuestionCard = ({ question, answer, onAnswer }) => {
  const isMulti = question.inputType === 'multi-select';
  
  const handleOptionClick = (optionId) => {
    if (isMulti) {
      const current = Array.isArray(answer) ? answer : [];
      if (current.includes(optionId)) {
        onAnswer(question.id, current.filter(id => id !== optionId));
      } else {
        onAnswer(question.id, [...current, optionId]);
      }
    } else {
      onAnswer(question.id, optionId);
    }
  };

  const isSelected = (optionId) => {
    if (isMulti) {
      return Array.isArray(answer) && answer.includes(optionId);
    }
    return answer === optionId;
  };

  return (
    <div className="bg-surface-highlight/50 rounded-xl shadow-sm border border-white/10 p-6 mb-6">
      <h3 className="text-xl font-bold text-white mb-2">{question.question}</h3>
      {question.subtext && <p className="text-slate-400 mb-4">{question.subtext}</p>}
      
      <div className="space-y-3 mt-4">
        {question.inputType?.includes('text') ? (
          <textarea
            value={answer || ''}
            onChange={(e) => onAnswer(question.id, e.target.value)}
            placeholder={question.options?.[0]?.label?.replace('Placeholder: e.g. ', '') || "Type your answer here..."}
            className="w-full h-32 px-4 py-3 rounded-lg border bg-surface-muted text-white placeholder-slate-500 border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
          />
        ) : (
          question.options?.map(option => (
            <div 
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center ${
                isSelected(option.id) 
                  ? 'border-accent bg-accent/10 shadow-md shadow-accent/10' 
                  : 'border-white/10 hover:border-accent/50 hover:bg-white/5'
              }`}
            >
              <div className={`w-5 h-5 flex-shrink-0 flex items-center justify-center mr-3 ${
                isMulti ? 'rounded-md' : 'rounded-full'
              } border ${
                isSelected(option.id) ? 'bg-accent border-accent' : 'border-white/20'
              }`}>
                {isSelected(option.id) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`font-medium ${isSelected(option.id) ? 'text-white' : 'text-slate-300'}`}>
                {option.label}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
