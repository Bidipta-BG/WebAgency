import React from 'react';

const industriesList = [
  { id: 'salon', name: 'Salon & Spa', emoji: '💇' },
  { id: 'gym', name: 'Gym & Fitness', emoji: '🏋️' },
  { id: 'clinic', name: 'Clinic & Hospital', emoji: '🏥' },
  { id: 'restaurant', name: 'Restaurant & Café', emoji: '🍽️' },
  { id: 'hotel', name: 'Hotel & Hospitality', emoji: '🏨' },
  { id: 'school', name: 'School & Coaching', emoji: '🎓' },
  { id: 'realestate', name: 'Real Estate', emoji: '🏠' },
  { id: 'lawfirm', name: 'Law Firm', emoji: '⚖️' },
  { id: 'cafirm', name: 'CA & Accounting', emoji: '📊' },
  { id: 'travel', name: 'Travel Agency', emoji: '✈️' },
  { id: 'construction', name: 'Construction', emoji: '🏗️' },
  { id: 'interior', name: 'Interior Designer', emoji: '🛋️' },
  { id: 'jewellery', name: 'Jewellery', emoji: '💍' },
  { id: 'retail', name: 'Retail Shop', emoji: '🛍️' },
  { id: 'electronics', name: 'Electronics Store', emoji: '📱' },
  { id: 'photography', name: 'Photography', emoji: '📷' },
  { id: 'events', name: 'Event Planner', emoji: '🎉' },
  { id: 'manufacturing', name: 'Manufacturing', emoji: '🏭' },
  { id: 'ngo', name: 'NGO / Non-Profit', emoji: '🤝' },
  { id: 'automotive', name: 'Automotive & Dealerships', emoji: '🚗' },
  { id: 'trades', name: 'Trades & Home Services', emoji: '🛠️' },
  { id: 'coaching', name: 'Consulting & Coaching', emoji: '🎯' },
  { id: 'finance', name: 'Finance & Insurance', emoji: '💼' },
  { id: 'architecture', name: 'Architecture & Engineering', emoji: '🏛️' },
  { id: 'saas', name: 'Tech Startups & SaaS', emoji: '💻' },
  { id: 'media', name: 'Entertainment & Media', emoji: '🎙️' },
  { id: 'logistics', name: 'Transportation & Logistics', emoji: '🚚' },
  { id: 'others', name: 'Others', emoji: '⚙️' }
];

const IndustrySelector = ({ selectedIndustry, onSelect, onNext, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto w-full animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">Select your industry</h2>
        <p className="text-lg text-slate-400 mt-2">We'll tailor the questions to your specific business type.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {industriesList.map(ind => (
          <div 
            key={ind.id}
            onClick={() => onSelect(ind.id)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center text-center ${
              selectedIndustry === ind.id 
                ? 'border-accent bg-accent/10 shadow-md shadow-accent/10 transform scale-105' 
                : 'border-white/10 hover:border-accent/50 hover:bg-white/5 hover:shadow-sm'
            }`}
          >
            <span className="text-4xl mb-3 block">{ind.emoji}</span>
            <span className={`font-semibold ${selectedIndustry === ind.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
              {ind.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-10 border-t pt-6">
        <button 
          onClick={onBack}
          className="px-6 py-3 text-slate-400 font-medium hover:text-white transition-colors"
        >
          ← Back
        </button>
        <button 
          onClick={onNext}
          disabled={!selectedIndustry}
          className={`px-10 py-3 rounded-lg font-bold text-white transition-all shadow-lg ${
            !selectedIndustry 
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

export default IndustrySelector;
