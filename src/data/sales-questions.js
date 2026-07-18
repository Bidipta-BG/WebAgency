export const salesQuestions = [
  {
    id: "SA1",
    step: 4, // newly added step
    industry: "common",
    question: "Do you already own a domain, or do you need one?",
    inputType: "single-select",
    options: [
      { id: "own-domain", label: "Already own a domain (just needs pointing/DNS setup)" },
      { id: "new-in", label: "Need a new domain — .in / .co.in" },
      { id: "new-com", label: "Need a new domain — .com" },
      { id: "new-org", label: "Need a new domain — .org / .net" },
      { id: "new-premium", label: "Need a premium/brandable domain" }
    ],
    scoring: {
      "new-com": { complexityPoints: 2 },
      "new-org": { complexityPoints: 2 },
      "new-premium": { complexityPoints: 10 }
    },
    priceModifiers: {
      "new-com": { annual: { addMin: 400, addMax: 700 } },
      "new-org": { annual: { addMin: 200, addMax: 500 } },
      "new-premium": { annual: { addMin: 2000, addMax: 15000 } }
    }
  },
  {
    id: "SA2",
    step: 4,
    industry: "common",
    question: "Who will the domain be registered under?",
    inputType: "single-select",
    options: [
      { id: "client-account", label: "Client's own registrar account (we just configure it)" },
      { id: "agency-manage", label: "We register and manage it for the client" }
    ],
    scoring: {
      "agency-manage": { complexityPoints: 2 }
    },
    priceModifiers: {
      "agency-manage": { annual: { addMin: 300, addMax: 500 } }
    }
  },
  {
    id: "SB1",
    step: 4,
    industry: "common",
    question: "What kind of hosting does this project need?",
    inputType: "single-select",
    options: [
      { id: "shared", label: "Shared hosting (standard)" },
      { id: "vps", label: "VPS / cloud hosting" },
      { id: "dedicated", label: "Dedicated server" },
      { id: "client-hosting", label: "Client already has hosting — we just deploy" }
    ],
    scoring: {
      "vps": { complexityPoints: 10 },
      "dedicated": { complexityPoints: 20 },
      "client-hosting": { complexityPoints: 5 }
    },
    priceModifiers: {
      "vps": { monthly: { addMin: 500, addMax: 1500 } },
      "dedicated": { monthly: { addMin: 2000, addMax: 5000 } },
      "client-hosting": { setupFee: { addMin: 1000, addMax: 2000 } }
    }
  },
  {
    id: "SB2",
    step: 4,
    industry: "common",
    question: "Server location preference?",
    inputType: "single-select",
    options: [
      { id: "india", label: "Standard India-based server" },
      { id: "international", label: "International server — US/EU" },
      { id: "compliance", label: "Specific data-residency requirement (compliance)" }
    ],
    scoring: {
      "international": { complexityPoints: 10 },
      "compliance": { complexityPoints: 20 }
    },
    priceModifiers: {
      "international": { monthly: { addMin: 1000, addMax: 3000 } },
      "compliance": { setupFee: { addMin: 5000, addMax: 15000 } }
    }
  },
  {
    id: "SC1",
    step: 4,
    industry: "common",
    question: "Does the client need professional email addresses?",
    inputType: "single-select",
    options: [
      { id: "none", label: "Not needed" },
      { id: "cpanel", label: "Basic email via hosting cPanel (up to 5 accounts)" },
      { id: "google", label: "Google Workspace" },
      { id: "microsoft", label: "Microsoft 365" }
    ],
    scoring: {
      "google": { complexityPoints: 5 },
      "microsoft": { complexityPoints: 5 }
    },
    priceModifiers: {
      "google": { monthly: { addMin: 150, addMax: 250, perUnitOf: "SC2" } },
      "microsoft": { monthly: { addMin: 150, addMax: 300, perUnitOf: "SC2" } }
    }
  },
  {
    id: "SC2",
    step: 4,
    industry: "common",
    question: "How many email accounts are needed? (If Google/Microsoft)",
    inputType: "number-input",
    options: [
      { id: "count", label: "Accounts" }
    ],
    scoring: {
      _perUnit: { complexityPoints: 1, applyAfter: 5 }
    }
  },
  {
    id: "SD1",
    step: 4,
    industry: "common",
    question: "What level of SSL/security does this project need?",
    inputType: "single-select",
    options: [
      { id: "standard", label: "Standard free SSL (Let's Encrypt)" },
      { id: "wildcard", label: "Wildcard SSL" },
      { id: "ev", label: "Extended Validation (EV) SSL" }
    ],
    scoring: {
      "wildcard": { complexityPoints: 10 },
      "ev": { complexityPoints: 15 }
    },
    priceModifiers: {
      "wildcard": { annual: { addMin: 3000, addMax: 6000 } },
      "ev": { annual: { addMin: 8000, addMax: 15000 } }
    }
  },
  {
    id: "SD2",
    step: 4,
    industry: "common",
    question: "Additional security add-ons?",
    inputType: "multi-select",
    options: [
      { id: "none", label: "None needed right now" },
      { id: "backups", label: "Daily automated backups" },
      { id: "firewall", label: "Firewall + malware scanning" },
      { id: "ddos", label: "DDoS protection / CDN" }
    ],
    scoring: {
      "backups": { complexityPoints: 5 },
      "firewall": { complexityPoints: 10 },
      "ddos": { complexityPoints: 10 }
    },
    priceModifiers: {
      "backups": { monthly: { addMin: 300, addMax: 800 } },
      "firewall": { monthly: { addMin: 500, addMax: 1500 } },
      "ddos": { monthly: { addMin: 1000, addMax: 3000 } }
    }
  },
  {
    id: "SE1",
    step: 4,
    industry: "common",
    question: "Any preference on how the site is built?",
    inputType: "single-select",
    options: [
      { id: "no-pref", label: "No preference — developer's choice" },
      { id: "wordpress", label: "WordPress" },
      { id: "webflow", label: "Webflow" },
      { id: "shopify", label: "Shopify" },
      { id: "custom-tech", label: "Client has a strong technical requirement" }
    ],
    scoring: {
      "wordpress": { complexityPoints: 10 },
      "webflow": { complexityPoints: 10 },
      "shopify": { complexityPoints: 15 },
      "custom-tech": { complexityPoints: 20 }
    },
    priceModifiers: {
      "wordpress": { setupFee: { addMin: 2000, addMax: 5000 } },
      "webflow": { annual: { addMin: 1500, addMax: 4000 } },
      "shopify": { monthly: { addMin: 2500, addMax: 25000 } }
    }
  },
  {
    id: "SF1",
    step: 4,
    industry: "common",
    question: "What level of design work is expected?",
    inputType: "single-select",
    options: [
      { id: "template", label: "Template-based design, light customisation" },
      { id: "semi-custom", label: "Semi-custom design" },
      { id: "full-custom", label: "Fully custom / premium brand design" }
    ],
    scoring: {
      "semi-custom": { complexityPoints: 15 },
      "full-custom": { complexityPoints: 25 }
    },
    priceModifiers: {
      "semi-custom": { setupFee: { addMin: 5000, addMax: 15000 } },
      "full-custom": { setupFee: { addMin: 15000, addMax: 40000 } }
    }
  },
  {
    id: "SF2",
    step: 4,
    industry: "common",
    question: "Does the client have brand guidelines ready?",
    inputType: "single-select",
    options: [
      { id: "ready", label: "Client has a ready brand guide" },
      { id: "mini-kit", label: "Client has a logo only, needs a mini brand kit" },
      { id: "full-brand", label: "Client needs a full brand identity built" }
    ],
    scoring: {
      "mini-kit": { complexityPoints: 10 },
      "full-brand": { complexityPoints: 20 }
    },
    priceModifiers: {
      "mini-kit": { setupFee: { addMin: 3000, addMax: 8000 } },
      "full-brand": { setupFee: { addMin: 10000, addMax: 25000 } }
    }
  },
  {
    id: "SG1",
    step: 4,
    industry: "common",
    question: "Who is providing the written content?",
    inputType: "single-select",
    options: [
      { id: "client", label: "Client provides all content, ready to use" },
      { id: "agency-basic", label: "Agency writes basic content" },
      { id: "agency-premium", label: "Agency writes premium/SEO-optimised copywriting" }
    ],
    scoring: {
      "agency-basic": { complexityPoints: 10 },
      "agency-premium": { complexityPoints: 15 }
    },
    priceModifiers: {
      "agency-basic": { setupFee: { addMin: 3000, addMax: 8000 } },
      "agency-premium": { setupFee: { addMin: 8000, addMax: 20000 } }
    }
  },
  {
    id: "SG2",
    step: 4,
    industry: "common",
    question: "Photography/imagery — what's available?",
    inputType: "single-select",
    options: [
      { id: "client", label: "Client has professional photos ready" },
      { id: "stock", label: "Need licensed stock photography" },
      { id: "photoshoot", label: "Need a professional photoshoot arranged" }
    ],
    scoring: {
      "stock": { complexityPoints: 5 },
      "photoshoot": { complexityPoints: 15 }
    },
    priceModifiers: {
      "stock": { setupFee: { addMin: 3000, addMax: 8000 } },
      "photoshoot": { setupFee: { addMin: 5000, addMax: 25000 } }
    }
  },
  {
    id: "SG3",
    step: 4,
    industry: "common",
    question: "Are there more pages needed than the package's limit?",
    inputType: "number-input",
    options: [
      { id: "count", label: "Additional Pages" }
    ],
    scoring: {
      _perUnit: { complexityPoints: 3 }
    },
    priceModifiers: {
      _perUnit: { setupFee: { addMin: 1000, addMax: 2500 } }
    }
  },
  {
    id: "SH1",
    step: 4,
    industry: "common",
    question: "Which payment gateway should be integrated?",
    inputType: "single-select",
    options: [
      { id: "none", label: "No payment gateway needed" },
      { id: "razorpay", label: "Razorpay / PayU" },
      { id: "international", label: "International gateway (Stripe / PayPal)" }
    ],
    scoring: {
      "razorpay": { complexityPoints: 5 },
      "international": { complexityPoints: 15 }
    },
    priceModifiers: {
      "international": { setupFee: { addMin: 3000, addMax: 8000 } }
    }
  },
  {
    id: "SI1",
    step: 4,
    industry: "common",
    question: "Third-party integrations beyond the package?",
    inputType: "multi-select",
    options: [
      { id: "none", label: "None beyond the package" },
      { id: "crm", label: "CRM integration (Zoho, Salesforce, HubSpot)" },
      { id: "sms", label: "SMS gateway for notifications" },
      { id: "whatsapp", label: "WhatsApp Business API" },
      { id: "erp", label: "ERP / inventory / booking software integration" }
    ],
    scoring: {
      "crm": { complexityPoints: 15 },
      "sms": { complexityPoints: 10 },
      "whatsapp": { complexityPoints: 15 },
      "erp": { complexityPoints: 25 }
    },
    priceModifiers: {
      "crm": { setupFee: { addMin: 5000, addMax: 15000 } },
      "sms": { setupFee: { addMin: 3000, addMax: 6000 } },
      "whatsapp": { setupFee: { addMin: 5000, addMax: 12000 } },
      "erp": { setupFee: { addMin: 15000, addMax: 40000 } }
    }
  },
  {
    id: "SJ1",
    step: 4,
    industry: "common",
    question: "Does the site need to support more than one language?",
    inputType: "single-select",
    options: [
      { id: "single", label: "Single language only" },
      { id: "one-extra", label: "+1 additional language" },
      { id: "multi", label: "3 or more languages" }
    ],
    scoring: {
      "one-extra": { complexityPoints: 10 },
      "multi": { complexityPoints: 20 }
    },
    priceModifiers: {
      "one-extra": { setupFee: { addMin: 5000, addMax: 10000 } },
      "multi": { setupFee: { addMin: 15000, addMax: 30000 } }
    }
  },
  {
    id: "SK1",
    step: 4,
    industry: "common",
    question: "How many stakeholders are involved in approving?",
    inputType: "single-select",
    options: [
      { id: "single", label: "Single point of contact — quick decisions" },
      { id: "committee", label: "Committee/multiple approvers" }
    ],
    scoring: {
      "committee": { complexityPoints: 10 }
    },
    priceModifiers: {
      "committee": { setupFee: { addMultiplier: 1.15 } }
    }
  },
  {
    id: "SK2",
    step: 4,
    industry: "common",
    question: "How many rounds of revisions does the client expect?",
    inputType: "single-select",
    options: [
      { id: "standard", label: "Standard — 2 rounds included" },
      { id: "one-extra", label: "1 extra round needed" },
      { id: "unlimited", label: "Open-ended/unlimited revisions" }
    ],
    scoring: {
      "one-extra": { complexityPoints: 5 },
      "unlimited": { complexityPoints: 20 }
    },
    priceModifiers: {
      "one-extra": { setupFee: { addMin: 2000, addMax: 5000 } },
      "unlimited": { setupFee: { addMin: 10000, addMax: 20000 } }
    }
  },
  {
    id: "SL1",
    step: 4,
    industry: "common",
    question: "What support level does the client want after launch?",
    inputType: "single-select",
    options: [
      { id: "standard", label: "Standard — email support" },
      { id: "priority", label: "Priority — 24-hour response" },
      { id: "dedicated", label: "Dedicated/same-day support" }
    ],
    scoring: {
      "priority": { complexityPoints: 10 },
      "dedicated": { complexityPoints: 15 }
    },
    priceModifiers: {
      "priority": { monthly: { addMin: 500, addMax: 1000 } },
      "dedicated": { monthly: { addMin: 2000, addMax: 5000 } }
    }
  },
  {
    id: "SL2",
    step: 4,
    industry: "common",
    question: "Does the client's team need training to manage the site?",
    inputType: "single-select",
    options: [
      { id: "none", label: "No training needed" },
      { id: "basic", label: "Basic 1-hour walkthrough" },
      { id: "docs", label: "Full documentation + video tutorials" },
      { id: "ongoing", label: "Ongoing training retainer" }
    ],
    scoring: {
      "docs": { complexityPoints: 10 },
      "ongoing": { complexityPoints: 10 }
    },
    priceModifiers: {
      "docs": { setupFee: { addMin: 3000, addMax: 8000 } },
      "ongoing": { monthly: { addMin: 2000, addMax: 2000 } }
    }
  },
  {
    id: "SM1",
    step: 4,
    industry: "common",
    question: "What level of handover documentation is needed? (If Handover plan)",
    inputType: "single-select",
    options: [
      { id: "standard", label: "Standard handover — code + basic setup notes" },
      { id: "full-docs", label: "Full technical documentation" },
      { id: "support", label: "Handover + 30-day post-handover support" },
      { id: "training", label: "Handover + knowledge-transfer training" }
    ],
    scoring: {
      "full-docs": { complexityPoints: 10 },
      "support": { complexityPoints: 15 },
      "training": { complexityPoints: 20 }
    },
    priceModifiers: {
      "full-docs": { handover: { addMin: 5000, addMax: 10000 } },
      "support": { handover: { addMin: 8000, addMax: 15000 } },
      "training": { handover: { addMin: 10000, addMax: 25000 } }
    }
  }
];
