export const financePackages = {
  starter: {
    baseFeatures: [
      "Professional, trust-focused website design",
      "Services and products offered",
      "Advisor profile and credentials",
      "Contact / consultation request form",
      "WhatsApp button",
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
      "EMI/loan or SIP calculator tool",
      "Basic secure document upload form",
      "Plan/product comparison page",
      "Client testimonials",
      "WhatsApp chat widget",
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
      "Multiple financial calculators (EMI, SIP, tax, insurance)",
      "Secure client login portal for KYC document tracking",
      "Encrypted document storage and status updates",
      "Advisor/team directory",
      "Financial blog / market updates section",
      "Advanced SEO and compliance-friendly structure"
    ],
    setupFee: { min: 26000, max: 40000 },
    monthly: { min: 2999, max: 4499 },
    annual: { min: 29990, max: 44990 },
    handover: { min: 65000, max: 95000 }
  }
};
