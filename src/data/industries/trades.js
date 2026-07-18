export const tradesQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "trades",
    "question": "What type of home service do you provide?",
    "inputType": "multi-select",
    "options": [
      { "id": "plumbing", "label": "Plumbing" },
      { "id": "electrical", "label": "Electrical" },
      { "id": "hvac", "label": "HVAC / AC repair" },
      { "id": "cleaning", "label": "Cleaning / maid services" },
      { "id": "pest-control", "label": "Pest control" },
      { "id": "handyman", "label": "Handyman / general repairs" },
      { "id": "multiple", "label": "Multiple services" }
    ],
    "required": true,
    "scoring": {
      "plumbing": 0,
      "electrical": 0,
      "hvac": 5,
      "cleaning": 0,
      "pest-control": 0,
      "handyman": 0,
      "multiple": 15
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "trades",
    "question": "How many technicians or staff do you have?",
    "inputType": "single-select",
    "options": [
      { "id": "solo", "label": "Just me (solo operator)" },
      { "id": "small-team", "label": "2 to 10 staff" },
      { "id": "large-team", "label": "More than 10 staff / multiple teams" }
    ],
    "required": true,
    "scoring": {
      "solo": 0,
      "small-team": 10,
      "large-team": 20
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "trades",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      { "id": "get-leads", "label": "📞 Get more local leads fast" },
      { "id": "emergency", "label": "⚡ Handle emergency/urgent call-outs" },
      { "id": "instant-quote", "label": "💰 Let customers get an instant quote" },
      { "id": "build-trust", "label": "🤝 Build trust with reviews and certifications" },
      { "id": "all-above", "label": "✨ All of the above" }
    ],
    "required": true,
    "scoring": {
      "get-leads": 10,
      "emergency": 15,
      "instant-quote": 15,
      "build-trust": 5,
      "all-above": 25
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "trades",
    "question": "How do customers currently find or contact you?",
    "inputType": "multi-select",
    "options": [
      { "id": "google", "label": "Google search / Google Maps" },
      { "id": "portals", "label": "Justdial / Urban Company / Sulekha" },
      { "id": "whatsapp", "label": "WhatsApp" },
      { "id": "word-of-mouth", "label": "Word of mouth / referrals" },
      { "id": "phone", "label": "Phone call" }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "trades",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      { "id": "area-checker", "label": "📍 Check if you serve their area (postcode/locality checker)" },
      { "id": "instant-quote", "label": "💰 Get an instant hourly/service quote" },
      { "id": "emergency-btn", "label": "⚡ Use an emergency call-out button" },
      { "id": "book-appointment", "label": "📅 Book a service appointment" },
      { "id": "read-reviews", "label": "⭐ Read customer reviews" },
      { "id": "whatsapp", "label": "💬 Contact on WhatsApp" },
      { "id": "view-services", "label": "📋 View service list and pricing" }
    ],
    "required": true,
    "scoring": {
      "area-checker": 15,
      "instant-quote": 15,
      "emergency-btn": 10,
      "book-appointment": 15,
      "read-reviews": 5,
      "whatsapp": 5,
      "view-services": 5
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "trades",
    "question": "Do you want a postcode/area availability checker?",
    "inputType": "single-select",
    "options": [
      { "id": "single-city", "label": "Yes — check a single city with specific localities" },
      { "id": "multi-city", "label": "Yes — check across multiple cities" },
      { "id": "everywhere", "label": "No — I serve everywhere in my city" }
    ],
    "required": true,
    "scoring": {
      "single-city": 10,
      "multi-city": 20,
      "everywhere": 0
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "trades",
    "question": "How do you want quotes calculated?",
    "inputType": "single-select",
    "options": [
      { "id": "flat-rate", "label": "Simple flat rate per service type" },
      { "id": "hours-materials", "label": "Calculated by hours + materials" },
      { "id": "custom-quote", "label": "Custom quote — I'll confirm manually after enquiry" }
    ],
    "required": true,
    "scoring": {
      "flat-rate": 10,
      "hours-materials": 15,
      "custom-quote": 5
    }
  }
];
