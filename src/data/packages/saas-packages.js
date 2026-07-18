export const saasPackages = {
  starter: {
    baseFeatures: [
      "Modern mobile-friendly landing page",
      "Product overview / features section",
      "Beta waitlist signup form",
      "Simple 2–3 tier pricing section",
      "Contact form",
      "Basic SEO and SSL",
      "1 year hosting included"
    ],
    setupFee: { min: 6999, max: 9999 },
    monthly: { min: 699, max: 999 },
    annual: { min: 6990, max: 9990 },
    handover: { min: 16000, max: 24000 }
  },
  growth: {
    baseFeatures: [
      "Everything in Starter, plus:",
      "Free trial / sign-up flow",
      "Pricing comparison table (4+ tiers)",
      "Basic documentation section",
      "Blog / changelog page",
      "Demo booking form",
      "Google Analytics setup"
    ],
    setupFee: { min: 12000, max: 18000 },
    monthly: { min: 1399, max: 1999 },
    annual: { min: 13990, max: 19990 },
    handover: { min: 30000, max: 42000 }
  },
  premium: {
    baseFeatures: [
      "Everything in Growth, plus:",
      "Full documentation platform with search + API reference",
      "Enterprise/custom pricing tier with sales-lead capture",
      "Customer logos and case studies section",
      "Integrations / marketplace page",
      "Status page and changelog system",
      "Advanced SEO and conversion analytics"
    ],
    setupFee: { min: 24000, max: 38000 },
    monthly: { min: 2699, max: 3999 },
    annual: { min: 26990, max: 39990 },
    handover: { min: 60000, max: 90000 }
  }
};
