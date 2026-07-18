export const saasQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "saas",
    "question": "What stage is your startup at?",
    "inputType": "single-select",
    "options": [
      { "id": "pre-launch", "label": "Pre-launch / building an MVP" },
      { "id": "launched", "label": "Launched, early traction" },
      { "id": "growing", "label": "Growing with paying customers" },
      { "id": "established", "label": "Established SaaS with multiple product tiers" }
    ],
    "required": true,
    "scoring": {
      "pre-launch": 5,
      "launched": 10,
      "growing": 15,
      "established": 25
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "saas",
    "question": "What type of product do you offer?",
    "inputType": "single-select",
    "options": [
      { "id": "b2c-app", "label": "B2C mobile/web app" },
      { "id": "b2b-saas", "label": "B2B SaaS product" },
      { "id": "dev-tool", "label": "Developer tool / API product" },
      { "id": "enterprise", "label": "Enterprise software" }
    ],
    "required": true,
    "scoring": {
      "b2c-app": 5,
      "b2b-saas": 15,
      "dev-tool": 15,
      "enterprise": 25
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "saas",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      { "id": "beta-waitlist", "label": "📝 Capture beta waitlist signups" },
      { "id": "convert-paying", "label": "💳 Convert visitors into paying sign-ups" },
      { "id": "host-docs", "label": "📚 Host product documentation" },
      { "id": "build-credibility", "label": "🤝 Build credibility for investors and enterprise clients" },
      { "id": "all-above", "label": "✨ All of the above" }
    ],
    "required": true,
    "scoring": {
      "beta-waitlist": 15,
      "convert-paying": 20,
      "host-docs": 15,
      "build-credibility": 10,
      "all-above": 30
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "saas",
    "question": "How do users currently discover your product?",
    "inputType": "multi-select",
    "options": [
      { "id": "product-hunt", "label": "Product Hunt / launch platforms" },
      { "id": "social", "label": "Social media / Twitter-LinkedIn" },
      { "id": "referrals", "label": "Word of mouth / referrals" },
      { "id": "paid-ads", "label": "Paid ads" },
      { "id": "organic", "label": "Organic search" }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "saas",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      { "id": "join-waitlist", "label": "📝 Join a beta waitlist" },
      { "id": "free-trial", "label": "💳 Sign up and start a free trial" },
      { "id": "pricing-tiers", "label": "💰 View a complex pricing tier comparison table" },
      { "id": "documentation", "label": "📚 Browse product documentation" },
      { "id": "read-blog", "label": "📖 Read a blog or changelog" },
      { "id": "book-demo", "label": "💬 Book a demo call" }
    ],
    "required": true,
    "scoring": {
      "join-waitlist": 15,
      "free-trial": 20,
      "pricing-tiers": 15,
      "documentation": 15,
      "read-blog": 10,
      "book-demo": 10
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "saas",
    "question": "How many pricing tiers do you need to display?",
    "inputType": "single-select",
    "options": [
      { "id": "simple-tiers", "label": "2 to 3 simple tiers" },
      { "id": "matrix-tiers", "label": "4+ tiers with feature comparison matrix" },
      { "id": "custom-tier", "label": "Custom/enterprise quote-based tier as well" }
    ],
    "required": true,
    "scoring": {
      "simple-tiers": 5,
      "matrix-tiers": 15,
      "custom-tier": 20
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "saas",
    "question": "How extensive is your documentation?",
    "inputType": "single-select",
    "options": [
      { "id": "basic-docs", "label": "A few basic getting-started pages" },
      { "id": "full-docs", "label": "Full multi-section docs with search" },
      { "id": "docs-api", "label": "Full docs plus API reference" }
    ],
    "required": true,
    "scoring": {
      "basic-docs": 10,
      "full-docs": 20,
      "docs-api": 25
    }
  }
];
