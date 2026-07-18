export const tradesPackages = {
  starter: {
    baseFeatures: [
      "Mobile-friendly website",
      "Services list with descriptions",
      "Click-to-call and WhatsApp buttons",
      "Contact/enquiry form",
      "Google Maps integration",
      "Basic SEO setup",
      "SSL security certificate",
      "1 year hosting included"
    ],
    setupFee: { min: 4999, max: 7999 },
    monthly: { min: 499, max: 699 },
    annual: { min: 4990, max: 6990 },
    handover: { min: 12000, max: 18000 }
  },
  growth: {
    baseFeatures: [
      "Everything in Starter, plus:",
      "Instant quote calculator (flat rate)",
      "Service booking form",
      "Emergency call-out banner/button",
      "Customer reviews section",
      "WhatsApp chat widget",
      "Google Analytics setup"
    ],
    setupFee: { min: 8000, max: 12000 },
    monthly: { min: 999, max: 1499 },
    annual: { min: 9990, max: 14990 },
    handover: { min: 22000, max: 32000 }
  },
  premium: {
    baseFeatures: [
      "Everything in Growth, plus:",
      "Postcode/locality availability checker (multi-city)",
      "Dynamic quote calculator (hours + materials)",
      "Priority emergency dispatch flow",
      "Technician/team profile pages",
      "Service area map",
      "Monthly lead performance report"
    ],
    setupFee: { min: 18000, max: 28000 },
    monthly: { min: 1999, max: 2999 },
    annual: { min: 19990, max: 29990 },
    handover: { min: 45000, max: 65000 }
  }
};
