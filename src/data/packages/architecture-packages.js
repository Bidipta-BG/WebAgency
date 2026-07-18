export const architecturePackages = {
  starter: {
    baseFeatures: [
      "Premium mobile-friendly website design",
      "Project gallery (up to 15 projects)",
      "About and team page",
      "Services offered",
      "Contact / consultation form",
      "WhatsApp button",
      "Basic SEO and SSL"
    ],
    setupFee: { min: 7999, max: 11999 },
    monthly: { min: 799, max: 1099 },
    annual: { min: 7990, max: 10990 },
    handover: { min: 18000, max: 26000 }
  },
  growth: {
    baseFeatures: [
      "Everything in Starter, plus:",
      "High-resolution gallery (up to 40 projects)",
      "PDF blueprint / document downloads",
      "RFQ / project enquiry form",
      "Team and credentials page",
      "Awards and press mentions section",
      "Google Analytics setup"
    ],
    setupFee: { min: 14000, max: 20000 },
    monthly: { min: 1499, max: 2199 },
    annual: { min: 14990, max: 21990 },
    handover: { min: 34000, max: 48000 }
  },
  premium: {
    baseFeatures: [
      "Everything in Growth, plus:",
      "Unlimited high-res gallery with 3D render/walkthrough embeds",
      "Secure client login portal with file history and approvals",
      "Large-file blueprint hosting and version control",
      "Multi-office/location pages",
      "Press and publications archive",
      "Advanced SEO and B2B lead capture"
    ],
    setupFee: { min: 28000, max: 42000 },
    monthly: { min: 3199, max: 4499 },
    annual: { min: 31990, max: 44990 },
    handover: { min: 70000, max: 100000 }
  }
};
