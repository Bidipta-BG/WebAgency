export const financeQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "finance",
    "question": "What type of financial services do you offer?",
    "inputType": "multi-select",
    "options": [
      { "id": "insurance", "label": "Insurance (life, health, general)" },
      { "id": "loans", "label": "Loans and lending" },
      { "id": "wealth", "label": "Wealth / investment management" },
      { "id": "mutual-funds", "label": "Mutual funds / stock advisory" },
      { "id": "tax", "label": "Tax and financial planning" },
      { "id": "multiple", "label": "Multiple services" }
    ],
    "required": true,
    "scoring": {
      "insurance": 5,
      "loans": 5,
      "wealth": 10,
      "mutual-funds": 10,
      "tax": 5,
      "multiple": 15
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "finance",
    "question": "How large is your firm?",
    "inputType": "single-select",
    "options": [
      { "id": "solo", "label": "Solo advisor / broker" },
      { "id": "small", "label": "Small firm (2–10 people)" },
      { "id": "mid", "label": "Mid-size firm (11–30 people)" },
      { "id": "large", "label": "Large firm (30+ people)" }
    ],
    "required": true,
    "scoring": {
      "solo": 0,
      "small": 10,
      "mid": 20,
      "large": 30
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "finance",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      { "id": "build-trust", "label": "🤝 Build trust and appear secure/credible" },
      { "id": "get-leads", "label": "📞 Get more qualified leads for consultations" },
      { "id": "calculators", "label": "🧮 Let clients calculate EMI, loans, or returns" },
      { "id": "collect-kyc", "label": "📄 Collect KYC documents securely online" },
      { "id": "all-above", "label": "✨ All of the above" }
    ],
    "required": true,
    "scoring": {
      "build-trust": 10,
      "get-leads": 10,
      "calculators": 15,
      "collect-kyc": 20,
      "all-above": 30
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "finance",
    "question": "How do clients currently find and reach you?",
    "inputType": "multi-select",
    "options": [
      { "id": "referrals", "label": "Referrals from existing clients" },
      { "id": "google", "label": "Google search" },
      { "id": "aggregators", "label": "Insurance/loan aggregator platforms" },
      { "id": "social", "label": "Social media" },
      { "id": "direct", "label": "Direct contact" }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "finance",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      { "id": "calculator", "label": "🧮 Use an EMI / loan / SIP calculator" },
      { "id": "kyc-upload", "label": "📄 Securely upload KYC documents" },
      { "id": "book-consultation", "label": "📅 Book a consultation" },
      { "id": "compare-plans", "label": "📋 Compare plans or products" },
      { "id": "read-guides", "label": "📖 Read financial guides and articles" },
      { "id": "whatsapp", "label": "💬 Contact on WhatsApp" }
    ],
    "required": true,
    "scoring": {
      "calculator": 15,
      "kyc-upload": 20,
      "book-consultation": 10,
      "compare-plans": 15,
      "read-guides": 10,
      "whatsapp": 5
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "finance",
    "question": "What type of calculator(s) do you need?",
    "inputType": "multi-select",
    "options": [
      { "id": "emi", "label": "EMI / loan calculator" },
      { "id": "sip", "label": "SIP / investment return calculator" },
      { "id": "insurance-prem", "label": "Insurance premium estimator" },
      { "id": "tax-savings", "label": "Tax savings calculator" }
    ],
    "required": true,
    "scoring": {
      "emi": 10,
      "sip": 10,
      "insurance-prem": 10,
      "tax-savings": 10
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "finance",
    "question": "What level of document security do you need?",
    "inputType": "single-select",
    "options": [
      { "id": "basic-upload", "label": "Basic secure upload form (encrypted, emailed to me)" },
      { "id": "client-login", "label": "Client login area to track document status" },
      { "id": "full-portal", "label": "Full client portal with document history and messaging" }
    ],
    "required": true,
    "scoring": {
      "basic-upload": 15,
      "client-login": 25,
      "full-portal": 30
    }
  }
];
