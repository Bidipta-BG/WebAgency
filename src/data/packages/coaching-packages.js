export const coachingPackages = {
  starter: {
    baseFeatures: [
      "Mobile-friendly website",
      "About/bio and credentials page",
      "Programmes and pricing page",
      "Calendly/Zoom booking link embed",
      "Contact form and WhatsApp button",
      "Basic SEO setup",
      "SSL and hosting"
    ],
    setupFee: { min: 5999, max: 8999 },
    monthly: { min: 599, max: 799 },
    annual: { min: 5990, max: 7990 },
    handover: { min: 14000, max: 20000 }
  },
  growth: {
    baseFeatures: [
      "Everything in Starter, plus:",
      "Custom in-site booking form",
      "Paywalled single course with video hosting",
      "Client testimonials and results section",
      "Email capture / lead magnet page",
      "WhatsApp chat widget",
      "Google Analytics setup"
    ],
    setupFee: { min: 10000, max: 16000 },
    monthly: { min: 1199, max: 1799 },
    annual: { min: 11990, max: 17990 },
    handover: { min: 26000, max: 40000 }
  },
  premium: {
    baseFeatures: [
      "Everything in Growth, plus:",
      "Full membership portal with login area",
      "Drip-fed multi-course content system",
      "Payment gateway with subscription billing",
      "Community/discussion space (basic)",
      "Multiple coach/consultant profiles",
      "Advanced SEO and funnel analytics"
    ],
    setupFee: { min: 20000, max: 32000 },
    monthly: { min: 2299, max: 3499 },
    annual: { min: 22990, max: 34990 },
    handover: { min: 50000, max: 75000 }
  }
};
