export const foundationQuestions = [
  {
    id: "Q0A",
    step: -1, // Pre-industry selector
    industry: "common",
    question: "What would you like to build?",
    subtext: "Select the platform that best suits your business needs.",
    inputType: "single-select",
    options: [
      { id: "website", label: "🌐 A Website" },
      { id: "app", label: "📱 A Mobile App" },
      { id: "both", label: "🌐📱 Both a Website and a Mobile App" }
    ],
    required: true,
    scoring: {
      "website": { complexityPoints: 0 },
      "app": { complexityPoints: 40 },
      "both": { complexityPoints: 65 }
    }
  },
  {
    id: "Q0B",
    step: -1,
    industry: "common",
    question: "How would you like to manage it after we deliver it?",
    subtext: "Choose how you want to handle maintenance and hosting.",
    inputType: "single-select",
    options: [
      { id: "managed", label: "🤝 Managed Plan — You build and maintain it, I pay monthly" },
      { id: "handover", label: "📦 Handover Plan — Deliver me the full code, I'll manage it myself" }
    ],
    required: true,
    scoring: {}
  }
];

export const commonStep3Questions = [
  {
    id: "QCS1",
    step: 3,
    industry: "common",
    question: "Do you already have a website or app?",
    inputType: "single-select",
    options: [
      { id: "no-website", label: "No, I don't have one yet" },
      { id: "need-redesign", label: "Yes, but I need a complete redesign" },
      { id: "need-improvements", label: "Yes, I just need some improvements" }
    ],
    required: true,
    scoring: {
      "no-website": { complexityPoints: 0 },
      "need-redesign": { complexityPoints: 5 },
      "need-improvements": { complexityPoints: 0 }
    }
  },
  {
    id: "QCS2",
    step: 3,
    industry: "common",
    question: "Which of these do you already have?",
    subtext: "Select all that apply.",
    inputType: "multi-select",
    options: [
      { id: "logo", label: "✅ A business logo" },
      { id: "photos", label: "📸 Professional photos or videos" },
      { id: "brand-colors", label: "🎨 Brand colors and style guide" },
      { id: "domain", label: "🌐 A domain name" },
      { id: "reviews", label: "⭐ Customer reviews or testimonials" },
      { id: "none", label: "❌ None of these" }
    ],
    required: true,
    scoring: {
      "none": { complexityPoints: 10 }
    }
  },
  {
    id: "QCS3",
    step: 3,
    industry: "common",
    question: "When do you want it ready?",
    inputType: "single-select",
    options: [
      { id: "7-days", label: "Within 7 days" },
      { id: "15-days", label: "Within 15 days" },
      { id: "30-days", label: "Within 30 days" },
      { id: "no-hurry", label: "No hurry — take your time" }
    ],
    required: true,
    scoring: {
      "7-days": { complexityPoints: 15 },
      "15-days": { complexityPoints: 8 },
      "30-days": { complexityPoints: 3 },
      "no-hurry": { complexityPoints: 0 }
    }
  }
];

export const contactFields = [
  { id: "businessName", label: "Business Name", type: "text", required: true },
  { id: "ownerName", label: "Your Name", type: "text", required: true },
  { id: "mobile", label: "Mobile/WhatsApp Number", type: "tel", required: true },
  { id: "email", label: "Email Address", type: "email", required: false },
  { id: "city", label: "City", type: "text", required: true }
];
