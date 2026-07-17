import { commonStep3Questions, foundationQuestions } from "../data/common-questions";
import { branchingRules } from "../data/branching-rules";
import * as allIndustries from "../data/industries";

const industryQuestionsMap = {
  salon: allIndustries.salonQuestions,
  gym: allIndustries.gymQuestions,
  clinic: allIndustries.clinicQuestions,
  restaurant: allIndustries.restaurantQuestions,
  hotel: allIndustries.hotelQuestions,
  school: allIndustries.schoolQuestions,
  realestate: allIndustries.realestateQuestions,
  lawfirm: allIndustries.lawfirmQuestions,
  cafirm: allIndustries.cafirmQuestions,
  travel: allIndustries.travelQuestions,
  construction: allIndustries.constructionQuestions,
  interior: allIndustries.interiorQuestions,
  jewellery: allIndustries.jewelleryQuestions,
  retail: allIndustries.retailQuestions,
  electronics: allIndustries.electronicsQuestions,
  photography: allIndustries.photographyQuestions,
  events: allIndustries.eventsQuestions,
  manufacturing: allIndustries.manufacturingQuestions,
  ngo: allIndustries.ngoQuestions,
  others: allIndustries.othersQuestions,
};

export const getVisibleQuestions = (answers, currentStep, industry) => {
  let allQuestions = [];

  // Gather questions for the current step
  if (currentStep === -1) {
    allQuestions = foundationQuestions;
  } else if (currentStep === 3) {
    allQuestions = commonStep3Questions;
  } else {
    // Step 1 and 2 are industry specific
    allQuestions = industryQuestionsMap[industry] || [];
    allQuestions = allQuestions.filter(q => q.step === currentStep);
  }

  // Filter based on branching rules
  return allQuestions.filter(q => {
    // Check if this question is a target of any branching rule
    const rules = branchingRules.filter(r => r.targetQuestionId === q.id && r.industry === industry);
    
    // If no rules target this question, it's always shown
    if (rules.length === 0) return true;
    
    // If rules exist, it must satisfy at least one 'show' rule
    return rules.some(rule => {
      const triggerAnswer = answers[rule.triggerQuestionId];
      if (!triggerAnswer) return false;
      
      const triggerArray = Array.isArray(triggerAnswer) ? triggerAnswer : [triggerAnswer];
      return triggerArray.includes(rule.triggerOptionId);
    });
  });
};

export const getReadableAnswers = (answers, industry) => {
  const allQuestions = [
    ...foundationQuestions,
    ...(industryQuestionsMap[industry] || []),
    ...commonStep3Questions
  ];

  const readable = [];

  for (const [qId, aValue] of Object.entries(answers)) {
    const qObj = allQuestions.find(q => q.id === qId);
    if (!qObj) continue;

    let aText = "";
    if (Array.isArray(aValue)) {
      aText = aValue.map(valId => {
        const opt = qObj.options.find(o => o.id === valId);
        return opt ? opt.label : valId;
      }).join(", ");
    } else {
      if (qObj.inputType === 'text-input') {
        aText = aValue;
      } else {
        const opt = qObj.options.find(o => o.id === aValue);
        aText = opt ? opt.label : aValue;
      }
    }

    readable.push({
      question: qObj.question,
      answer: aText
    });
  }

  return readable;
};

