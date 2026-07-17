import * as allPackages from "../data/packages";

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
  // 'others' deliberately omitted as it has no standard packages
};

export const getPackage = (score, answers, industry) => {
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
