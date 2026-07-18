export const mediaPackages = {
  starter: {
    baseFeatures: [
      "Mobile-friendly website",
      "Embedded latest episodes/content (Spotify/YouTube)",
      "About / bio page",
      "Social media links hub",
      "Contact form for bookings/press",
      "Basic SEO and SSL",
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
      "Multi-episode/content archive with search",
      "Merch showcase or link-out store",
      "Ticket link-out for events",
      "Newsletter signup",
      "Blog/article section",
      "Google Analytics setup"
    ],
    setupFee: { min: 8500, max: 13000 },
    monthly: { min: 999, max: 1499 },
    annual: { min: 9990, max: 14990 },
    handover: { min: 23000, max: 34000 }
  },
  premium: {
    baseFeatures: [
      "Everything in Growth, plus:",
      "Membership/subscription integration (Patreon or custom)",
      "Full on-site ticket sales with payment gateway",
      "Full merch store with cart and checkout",
      "Multi-source media aggregation (podcast + video + articles)",
      "Press kit / media kit download page",
      "Advanced SEO and audience analytics"
    ],
    setupFee: { min: 18000, max: 28000 },
    monthly: { min: 1999, max: 2999 },
    annual: { min: 19990, max: 29990 },
    handover: { min: 45000, max: 65000 }
  }
};
