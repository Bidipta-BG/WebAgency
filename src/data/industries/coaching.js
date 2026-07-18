export const coachingQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "coaching",
    "question": "What type of coaching or consulting do you offer?",
    "inputType": "single-select",
    "options": [
      { "id": "business-coach", "label": "Business or executive coaching" },
      { "id": "life-coach", "label": "Life or wellness coaching" },
      { "id": "academic-tutor", "label": "Academic tutoring" },
      { "id": "career-coach", "label": "Career or interview coaching" },
      { "id": "fitness-coach", "label": "Fitness or nutrition coaching" },
      { "id": "multiple", "label": "Multiple coaching services" }
    ],
    "required": true,
    "scoring": {
      "business-coach": 5,
      "life-coach": 0,
      "academic-tutor": 0,
      "career-coach": 0,
      "fitness-coach": 0,
      "multiple": 10
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "coaching",
    "question": "How do you currently deliver sessions?",
    "inputType": "single-select",
    "options": [
      { "id": "1-on-1", "label": "1-on-1 sessions only" },
      { "id": "group", "label": "Group sessions / cohorts" },
      { "id": "courses", "label": "Pre-recorded courses" },
      { "id": "mixed", "label": "A mix of live sessions and courses" }
    ],
    "required": true,
    "scoring": {
      "1-on-1": 0,
      "group": 10,
      "courses": 15,
      "mixed": 20
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "coaching",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      { "id": "book-session", "label": "📅 Let clients book a session directly" },
      { "id": "sell-course", "label": "🎓 Sell a pre-recorded course or programme" },
      { "id": "build-brand", "label": "🤝 Build my personal brand and credibility" },
      { "id": "membership", "label": "👥 Run a membership community" },
      { "id": "all-above", "label": "✨ All of the above" }
    ],
    "required": true,
    "scoring": {
      "book-session": 15,
      "sell-course": 20,
      "build-brand": 5,
      "membership": 20,
      "all-above": 30
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "coaching",
    "question": "How do clients currently find and book you?",
    "inputType": "multi-select",
    "options": [
      { "id": "social", "label": "Instagram / LinkedIn" },
      { "id": "calendly", "label": "Calendly or similar booking link" },
      { "id": "referrals", "label": "Referrals" },
      { "id": "whatsapp", "label": "WhatsApp" },
      { "id": "word-of-mouth", "label": "Word of mouth" }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "coaching",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      { "id": "book-session", "label": "📅 Book a call/session via Zoom or Calendly integration" },
      { "id": "paywalled-course", "label": "🎓 Access a paywalled video course" },
      { "id": "membership-portal", "label": "👥 Join a membership portal" },
      { "id": "view-programmes", "label": "📋 View programmes and pricing" },
      { "id": "read-testimonials", "label": "⭐ Read client testimonials and results" },
      { "id": "whatsapp", "label": "💬 Contact on WhatsApp" }
    ],
    "required": true,
    "scoring": {
      "book-session": 15,
      "paywalled-course": 20,
      "membership-portal": 20,
      "view-programmes": 5,
      "read-testimonials": 5,
      "whatsapp": 5
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "coaching",
    "question": "Which booking tool do you want integrated?",
    "inputType": "single-select",
    "options": [
      { "id": "calendly", "label": "Calendly" },
      { "id": "zoom", "label": "Zoom scheduler" },
      { "id": "custom", "label": "I want a custom in-site booking form instead" }
    ],
    "required": true,
    "scoring": {
      "calendly": 10,
      "zoom": 10,
      "custom": 15
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "coaching",
    "question": "How do you want your course/membership content delivered?",
    "inputType": "single-select",
    "options": [
      { "id": "simple-login", "label": "Simple login area with video lessons" },
      { "id": "drip-fed", "label": "Drip-fed content released over weeks" },
      { "id": "platform-integration", "label": "Integration with an existing course platform (Teachable, Kajabi, etc.)" }
    ],
    "required": true,
    "scoring": {
      "simple-login": 20,
      "drip-fed": 25,
      "platform-integration": 15
    }
  }
];
