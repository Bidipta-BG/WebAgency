// BRANCHING RULES — All 20 Industries
// Each rule: if the user's answer to triggerQuestionId includes triggerOptionId,
// then the targetQuestionId is shown. Otherwise it stays hidden.
// Option IDs here EXACTLY match the generated option IDs in the industry JS files.

export const branchingRules = [

  // ─────────────────────────────────────────────────────────────────────────
  // SALON & SPA
  // Q6 (how do you manage appointments?) → shown if Q5 includes "book-an-appointment"
  // Q7 (how many services?) → shown if Q5 includes "view-our-services-an"
  // Q8 (how many photos?) → shown if Q5 includes "see-our-before-and-a"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "salon", triggerQuestionId: "Q5", triggerOptionId: "book-an-appointment", action: "show", targetQuestionId: "Q6" },
  { industry: "salon", triggerQuestionId: "Q5", triggerOptionId: "view-our-services-an", action: "show", targetQuestionId: "Q7" },
  { industry: "salon", triggerQuestionId: "Q5", triggerOptionId: "see-our-before-and-a", action: "show", targetQuestionId: "Q8" },

  // ─────────────────────────────────────────────────────────────────────────
  // GYM & FITNESS
  // Q6 (how manage memberships?) → shown if Q5 includes "sign-up-or-register-"
  // Q7 (how often class schedule changes?) → shown if Q5 includes "see-the-class-schedu"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "gym", triggerQuestionId: "Q5", triggerOptionId: "sign-up-or-register-", action: "show", targetQuestionId: "Q6" },
  { industry: "gym", triggerQuestionId: "Q5", triggerOptionId: "see-the-class-schedu", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // CLINIC & HOSPITAL
  // Q6 (how manage appointments?) → shown if Q5 includes "book-an-appointment-"
  // Q7 (additional services?) → shown if Q1 is "multi-specialty-hosp" OR Q2 is "6-to-15-doctors" or "more-than-15-doctors"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "clinic", triggerQuestionId: "Q5", triggerOptionId: "book-an-appointment-", action: "show", targetQuestionId: "Q6" },
  { industry: "clinic", triggerQuestionId: "Q1", triggerOptionId: "multi-specialty-hosp", action: "show", targetQuestionId: "Q7" },
  { industry: "clinic", triggerQuestionId: "Q2", triggerOptionId: "6-to-15-doctors", action: "show", targetQuestionId: "Q7" },
  { industry: "clinic", triggerQuestionId: "Q2", triggerOptionId: "more-than-15-doctors", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // RESTAURANT & CAFÉ
  // Q6 (own ordering system or Zomato?) → shown if Q5 includes "order-food-online-fo"
  // Q7 (how many tables?) → shown if Q5 includes "reserve-a-table"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "restaurant", triggerQuestionId: "Q5", triggerOptionId: "order-food-online-fo", action: "show", targetQuestionId: "Q6" },
  { industry: "restaurant", triggerQuestionId: "Q5", triggerOptionId: "reserve-a-table", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // HOTEL & HOSPITALITY
  // Q6 (book and pay directly?) → shown if Q5 includes "check-availability-a"
  // Q7 (additional facilities?) → shown if Q2 is "10-to-30-rooms", "31-to-100-rooms", or "more-than-100-rooms"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "hotel", triggerQuestionId: "Q5", triggerOptionId: "check-availability-a", action: "show", targetQuestionId: "Q6" },
  { industry: "hotel", triggerQuestionId: "Q2", triggerOptionId: "10-to-30-rooms", action: "show", targetQuestionId: "Q7" },
  { industry: "hotel", triggerQuestionId: "Q2", triggerOptionId: "31-to-100-rooms", action: "show", targetQuestionId: "Q7" },
  { industry: "hotel", triggerQuestionId: "Q2", triggerOptionId: "more-than-100-rooms", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // SCHOOL & COACHING
  // Q6 (how conduct classes?) → shown if Q5 includes "attend-or-access-onl"
  // Q7 (fee payment online?) → shown if Q5 includes "pay-fees-online"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "school", triggerQuestionId: "Q5", triggerOptionId: "attend-or-access-onl", action: "show", targetQuestionId: "Q6" },
  { industry: "school", triggerQuestionId: "Q5", triggerOptionId: "pay-fees-online", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // REAL ESTATE
  // Q6 (list properties on own site?) → shown if Q5 includes "search-and-filter-pr"
  // Q7 (promote specific project?) → shown if Q3 is "launch-a-new-housing"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "realestate", triggerQuestionId: "Q5", triggerOptionId: "search-and-filter-pr", action: "show", targetQuestionId: "Q6" },
  { industry: "realestate", triggerQuestionId: "Q3", triggerOptionId: "launch-a-new-housing", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // LAW FIRM
  // Q6 (publish legal content?) → shown if Q5 includes "read-legal-articles-"
  // Q7 (free resources or guides?) → shown if Q5 includes "download-legal-guide"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "lawfirm", triggerQuestionId: "Q5", triggerOptionId: "read-legal-articles-", action: "show", targetQuestionId: "Q6" },
  { industry: "lawfirm", triggerQuestionId: "Q5", triggerOptionId: "download-legal-guide", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // CA & ACCOUNTING FIRM
  // Q6 (tax/GST calculator?) → shown if Q5 includes "use-a-tax-or-gst-cal"
  // Q7 (publish content?) → shown if Q5 includes "read-articles-on-tax"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "cafirm", triggerQuestionId: "Q5", triggerOptionId: "use-a-tax-or-gst-cal", action: "show", targetQuestionId: "Q6" },
  { industry: "cafirm", triggerQuestionId: "Q5", triggerOptionId: "read-articles-on-tax", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // TRAVEL AGENCY
  // Q6 (customers pay online?) → shown if Q5 includes "book-and-pay-online-"
  // Q7 (how many destinations?) → shown if Q5 includes "browse-and-filter-to"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "travel", triggerQuestionId: "Q5", triggerOptionId: "book-and-pay-online-", action: "show", targetQuestionId: "Q6" },
  { industry: "travel", triggerQuestionId: "Q5", triggerOptionId: "browse-and-filter-to", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // CONSTRUCTION
  // Q6 (how many projects to showcase?) → shown if Q5 includes "view-a-gallery-of-co"
  // Q7 (showcase ongoing/upcoming?) → shown if Q5 includes "see-your-ongoing-or-"
  // ─────────────────────────────────────────────────────────────────────────
  { industry: "construction", triggerQuestionId: "Q5", triggerOptionId: "view-a-gallery-of-co", action: "show", targetQuestionId: "Q6" },
  { industry: "construction", triggerQuestionId: "Q5", triggerOptionId: "see-your-ongoing-or-", action: "show", targetQuestionId: "Q7" },

  // ─────────────────────────────────────────────────────────────────────────
  // AUTOMOTIVE
  { industry: "automotive", triggerQuestionId: "Q5", triggerOptionId: "browse-inventory", action: "show", targetQuestionId: "Q6" },
  { industry: "automotive", triggerQuestionId: "Q5", triggerOptionId: "book-service", action: "show", targetQuestionId: "Q7" },

  // TRADES & HOME SERVICES
  { industry: "trades", triggerQuestionId: "Q5", triggerOptionId: "area-checker", action: "show", targetQuestionId: "Q6" },
  { industry: "trades", triggerQuestionId: "Q5", triggerOptionId: "instant-quote", action: "show", targetQuestionId: "Q7" },

  // COACHING
  { industry: "coaching", triggerQuestionId: "Q5", triggerOptionId: "book-session", action: "show", targetQuestionId: "Q6" },
  { industry: "coaching", triggerQuestionId: "Q5", triggerOptionId: "paywalled-course", action: "show", targetQuestionId: "Q7" },
  { industry: "coaching", triggerQuestionId: "Q5", triggerOptionId: "membership-portal", action: "show", targetQuestionId: "Q7" },

  // FINANCE
  { industry: "finance", triggerQuestionId: "Q5", triggerOptionId: "calculator", action: "show", targetQuestionId: "Q6" },
  { industry: "finance", triggerQuestionId: "Q5", triggerOptionId: "kyc-upload", action: "show", targetQuestionId: "Q7" },

  // ARCHITECTURE
  { industry: "architecture", triggerQuestionId: "Q5", triggerOptionId: "project-gallery", action: "show", targetQuestionId: "Q6" },
  { industry: "architecture", triggerQuestionId: "Q5", triggerOptionId: "client-area", action: "show", targetQuestionId: "Q7" },

  // SAAS
  { industry: "saas", triggerQuestionId: "Q5", triggerOptionId: "pricing-tiers", action: "show", targetQuestionId: "Q6" },
  { industry: "saas", triggerQuestionId: "Q5", triggerOptionId: "documentation", action: "show", targetQuestionId: "Q7" },

  // MEDIA
  { industry: "media", triggerQuestionId: "Q5", triggerOptionId: "embedded-player", action: "show", targetQuestionId: "Q6" },
  { industry: "media", triggerQuestionId: "Q5", triggerOptionId: "ticket-sales", action: "show", targetQuestionId: "Q7" },

  // LOGISTICS
  { industry: "logistics", triggerQuestionId: "Q5", triggerOptionId: "track-shipment", action: "show", targetQuestionId: "Q6" },
  { industry: "logistics", triggerQuestionId: "Q5", triggerOptionId: "instant-quote", action: "show", targetQuestionId: "Q7" }
];
// NOTE: Interior, Jewellery, Retail, Electronics, Photography, Events,
// Manufacturing, NGO — these industries have no conditional questions per the
// master document, so no branching rules are needed for them.
// "Others" industry also has no conditional branching.
