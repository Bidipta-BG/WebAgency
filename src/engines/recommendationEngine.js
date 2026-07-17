// This engine parses the answers and builds a list of "reasons" for the package
// and a dynamic list of features.

const salonReasonBuilders = [
  (answers) => {
    if (answers.Q3 === "book-appointments" || (answers.Q5 && answers.Q5.includes("book-appointment"))) {
      return { reason: "You want customers to book appointments online." };
    }
    return {};
  },
  (answers) => {
    if (answers.Q5 && answers.Q5.includes("contact-whatsapp")) {
      return { reason: "You want customers to contact you on WhatsApp." };
    }
    return {};
  },
  (answers) => {
    if (answers.Q5 && answers.Q5.includes("view-services")) {
      return { reason: "You'd like to showcase your services and pricing." };
    }
    return {};
  },
  (answers) => {
    if (answers.Q2 === "two-to-five" || answers.Q2 === "more-than-five") {
      return { reason: "You need a solution that supports multiple salon locations." };
    }
    return {};
  }
];

const industryReasonBuilders = {
  salon: salonReasonBuilders
};

export const buildRecommendation = (answers, pkgResult, industry) => {
  const reasons = [];
  const features = [...pkgResult.baseFeatures];

  // Industry-specific reason builders
  const builders = industryReasonBuilders[industry] || [];
  builders.forEach(builder => {
    const result = builder(answers);
    if (result.reason) reasons.push(result.reason);
    if (result.feature && !features.includes(result.feature)) features.push(result.feature);
  });
  
  // App multiplier logic for reasons
  if (answers.Q0A === "app") {
    reasons.push("You requested a Mobile App build.");
  }
  
  if (answers.QCS3 === "7-days") {
    reasons.push("You requested rush delivery within 7 days.");
  }
  
  if (answers.QCS2 && answers.QCS2.includes("none")) {
    reasons.push("You need help with asset creation (logos, photos, etc).");
  }

  // Fallback reason if none triggered
  if (reasons.length === 0) {
    reasons.push("Based on the complexity and goals of your business.");
  }

  return { reasons, features };
};
