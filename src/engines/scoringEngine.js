import { commonStep3Questions, foundationQuestions } from "../data/common-questions";
import * as allIndustries from "../data/industries";
import { salesQuestions } from "../data/sales-questions";

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

export const calculateScore = (answers, industry, salesAnswers = {}) => {
  let score = 0;
  
  // Combine all questions possible to extract scores
  const allQuestions = [
    ...foundationQuestions,
    ...commonStep3Questions,
    ...(industryQuestionsMap[industry] || []),
    ...salesQuestions
  ];

  const calculateForAnswers = (ansObj) => {
    for (const [questionId, answer] of Object.entries(ansObj)) {
      if (answer === undefined || answer === null || answer === '') continue;

      const question = allQuestions.find(q => q.id === questionId);
      if (!question || !question.scoring) continue;
      
      if (question.inputType === 'number-input') {
        if (question.scoring._perUnit) {
          let numValue = Number(answer) || 0;
          let applyAfter = question.scoring._perUnit.applyAfter || 0;
          let billableUnits = Math.max(0, numValue - applyAfter);
          score += billableUnits * (question.scoring._perUnit.complexityPoints || 0);
        }
      } else {
        const answersArray = Array.isArray(answer) ? answer : [answer];
        for (const optionId of answersArray) {
          if (question.scoring[optionId]) {
            score += question.scoring[optionId].complexityPoints || 0;
          }
        }
      }
    }
  };

  calculateForAnswers(answers);
  if (salesAnswers) {
    calculateForAnswers(salesAnswers);
  }
  
  return score;
};
