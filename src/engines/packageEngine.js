import * as allPackages from "../data/packages";
import { salesQuestions } from "../data/sales-questions";

const industryPackagesMap = {
  salon: allPackages.salonPackages,
  gym: allPackages.gymPackages,
  clinic: allPackages.clinicPackages,
  restaurant: allPackages.restaurantPackages,
  hotel: allPackages.hotelPackages,
  school: allPackages.schoolPackages,
  realestate: allPackages.realestatePackages,
  lawfirm: allPackages.lawfirmPackages,
  cafirm: allPackages.cafirmPackages,
  travel: allPackages.travelPackages,
  construction: allPackages.constructionPackages,
  interior: allPackages.interiorPackages,
  jewellery: allPackages.jewelleryPackages,
  retail: allPackages.retailPackages,
  electronics: allPackages.electronicsPackages,
  photography: allPackages.photographyPackages,
  events: allPackages.eventsPackages,
  manufacturing: allPackages.manufacturingPackages,
  ngo: allPackages.ngoPackages,
  automotive: allPackages.automotivePackages,
  trades: allPackages.tradesPackages,
  coaching: allPackages.coachingPackages,
  finance: allPackages.financePackages,
  architecture: allPackages.architecturePackages,
  saas: allPackages.saasPackages,
  media: allPackages.mediaPackages,
  logistics: allPackages.logisticsPackages,
  // 'others' deliberately omitted as it has no standard packages
};

export const getPackage = (score, answers, industry, salesAnswers = {}) => {
  const packages = industryPackagesMap[industry];
  if (!packages) return null;

  // Determine base package based on score tier
  let packageName = "starter";
  let pkg = packages.starter;
  
  if (score > 30 && score <= 65) {
    packageName = "growth";
    pkg = packages.growth;
  } else if (score > 65) {
    packageName = "premium";
    pkg = packages.premium;
  }

  // Clone prices to apply modifiers
  let setupFee = { ...pkg.setupFee };
  let monthly = { ...pkg.monthly };
  let annual = { ...pkg.annual };
  let handover = { ...pkg.handover };

  // Apply modifiers
  // Rush delivery (QCS3)
  if (answers.QCS3 === "7-days") {
    setupFee.min = Math.round(setupFee.min * 1.25);
    setupFee.max = Math.round(setupFee.max * 1.25);
  } else if (answers.QCS3 === "15-days") {
    setupFee.min = Math.round(setupFee.min * 1.10);
    setupFee.max = Math.round(setupFee.max * 1.10);
  }

  // Missing assets (QCS2)
  if (answers.QCS2 && answers.QCS2.includes("none")) {
    setupFee.min += 2000;
    setupFee.max += 2000;
  }

  // Multi-location (Salon specific example modifier)
  if (answers.Q2 === "two-to-five") {
    setupFee.min += 2000;
    setupFee.max += 3000;
  } else if (answers.Q2 === "more-than-five") {
    setupFee.min += 5000;
    setupFee.max += 8000;
  }

  // App multiplier (Q0A)
  if (answers.Q0A === "app") {
    setupFee.min = Math.round(setupFee.min * 2.5);
    setupFee.max = Math.round(setupFee.max * 2.5);
    monthly.min = Math.round(monthly.min * 2.5);
    monthly.max = Math.round(monthly.max * 2.5);
    annual.min = Math.round(annual.min * 2.5);
    annual.max = Math.round(annual.max * 2.5);
    handover.min = Math.round(handover.min * 2.5);
    handover.max = Math.round(handover.max * 2.5);
  }

  // --- NEW: Apply Sales Answer Modifiers ---
  if (salesAnswers) {
    for (const [qId, ans] of Object.entries(salesAnswers)) {
      if (ans === undefined || ans === null || ans === '') continue;
      const question = salesQuestions.find(q => q.id === qId);
      if (!question || !question.priceModifiers) continue;

      if (question.inputType === 'number-input') {
        if (question.priceModifiers._perUnit) {
          let numValue = Number(ans) || 0;
          if (numValue > 0) {
            const mods = question.priceModifiers._perUnit;
            if (mods.setupFee) {
              if (mods.setupFee.addMin) setupFee.min += (mods.setupFee.addMin * numValue);
              if (mods.setupFee.addMax) setupFee.max += (mods.setupFee.addMax * numValue);
            }
            if (mods.monthly) {
              if (mods.monthly.addMin) monthly.min += (mods.monthly.addMin * numValue);
              if (mods.monthly.addMax) monthly.max += (mods.monthly.addMax * numValue);
            }
            if (mods.annual) {
              if (mods.annual.addMin) annual.min += (mods.annual.addMin * numValue);
              if (mods.annual.addMax) annual.max += (mods.annual.addMax * numValue);
            }
            if (mods.handover) {
              if (mods.handover.addMin) handover.min += (mods.handover.addMin * numValue);
              if (mods.handover.addMax) handover.max += (mods.handover.addMax * numValue);
            }
          }
        }
      } else {
        const answersArray = Array.isArray(ans) ? ans : [ans];
        for (const optionId of answersArray) {
          const mods = question.priceModifiers[optionId];
          if (mods) {
            let multiplier = 1;
            
            if (mods.setupFee && mods.setupFee.perUnitOf && salesAnswers[mods.setupFee.perUnitOf]) {
               multiplier = Number(salesAnswers[mods.setupFee.perUnitOf]) || 1;
            } else if (mods.monthly && mods.monthly.perUnitOf && salesAnswers[mods.monthly.perUnitOf]) {
               multiplier = Number(salesAnswers[mods.monthly.perUnitOf]) || 1;
            } else if (mods.annual && mods.annual.perUnitOf && salesAnswers[mods.annual.perUnitOf]) {
               multiplier = Number(salesAnswers[mods.annual.perUnitOf]) || 1;
            }

            if (mods.setupFee) {
              if (mods.setupFee.addMin) setupFee.min += (mods.setupFee.addMin * multiplier);
              if (mods.setupFee.addMax) setupFee.max += (mods.setupFee.addMax * multiplier);
              if (mods.setupFee.addMultiplier) {
                 setupFee.min = Math.round(setupFee.min * mods.setupFee.addMultiplier);
                 setupFee.max = Math.round(setupFee.max * mods.setupFee.addMultiplier);
              }
            }
            if (mods.monthly) {
              if (mods.monthly.addMin) monthly.min += (mods.monthly.addMin * multiplier);
              if (mods.monthly.addMax) monthly.max += (mods.monthly.addMax * multiplier);
            }
            if (mods.annual) {
              if (mods.annual.addMin) annual.min += (mods.annual.addMin * multiplier);
              if (mods.annual.addMax) annual.max += (mods.annual.addMax * multiplier);
            }
            if (mods.handover) {
              if (mods.handover.addMin) handover.min += (mods.handover.addMin * multiplier);
              if (mods.handover.addMax) handover.max += (mods.handover.addMax * multiplier);
            }
          }
        }
      }
    }
  }

  return {
    packageName,
    score,
    pricing: {
      setupFee,
      monthly,
      annual,
      handover
    },
    baseFeatures: pkg.baseFeatures
  };
};
