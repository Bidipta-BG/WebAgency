import { commonStep3Questions, foundationQuestions } from "../data/common-questions";
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

export const calculateScore = (answers, industry) => {
  let score = 0;
  
  // Combine all questions possible to extract scores
  const allQuestions = [
    ...foundationQuestions,
    ...commonStep3Questions,
    ...(industryQuestionsMap[industry] || [])
  ];

  for (const [questionId, answer] of Object.entries(answers)) {
    const question = allQuestions.find(q => q.id === questionId);
    if (!question || !question.scoring) continue;
    
    const answersArray = Array.isArray(answer) ? answer : [answer];
    for (const optionId of answersArray) {
      if (question.scoring[optionId]) {
        score += question.scoring[optionId].complexityPoints || 0;
      }
    }
  }
  
  return score;
};
