export const automotiveQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "automotive",
    "question": "What best describes your automotive business?",
    "inputType": "single-select",
    "options": [
      { "id": "new-car-showroom", "label": "🚘 New car showroom / dealership" },
      { "id": "used-car-dealer", "label": "🚗 Used car dealer" },
      { "id": "two-wheeler-dealer", "label": "🏍️ Two-wheeler dealership" },
      { "id": "mechanic-garage", "label": "🔧 Mechanic or repair garage" },
      { "id": "car-wash", "label": "🧽 Car wash or detailing centre" },
      { "id": "auto-parts", "label": "⚙️ Auto parts and accessories shop" }
    ],
    "required": true,
    "scoring": {
      "new-car-showroom": 15,
      "used-car-dealer": 10,
      "two-wheeler-dealer": 10,
      "mechanic-garage": 0,
      "car-wash": 0,
      "auto-parts": 5
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "automotive",
    "question": "How many vehicles or service bays do you operate?",
    "inputType": "single-select",
    "options": [
      { "id": "small-setup", "label": "Small setup (fewer than 20 vehicles / 1–2 bays)" },
      { "id": "medium-setup", "label": "Medium (20–100 vehicles / 3–5 bays)" },
      { "id": "large-setup", "label": "Large (100+ vehicles / 6+ bays, multi-branch)" }
    ],
    "required": true,
    "scoring": {
      "small-setup": 0,
      "medium-setup": 15,
      "large-setup": 30
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "automotive",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      { "id": "showcase-inventory", "label": "📋 Showcase inventory and attract buyers" },
      { "id": "get-service-bookings", "label": "🔧 Get more service or repair bookings" },
      { "id": "test-drive-booking", "label": "🚗 Let customers book a test drive" },
      { "id": "build-trust", "label": "🤝 Build trust as a certified/authorised dealer" },
      { "id": "all-of-above", "label": "✨ All of the above" }
    ],
    "required": true,
    "scoring": {
      "showcase-inventory": 10,
      "get-service-bookings": 10,
      "test-drive-booking": 15,
      "build-trust": 5,
      "all-of-above": 25
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "automotive",
    "question": "How do customers currently find or contact you?",
    "inputType": "multi-select",
    "options": [
      { "id": "portals", "label": "CarDekho / CarWale / OLX" },
      { "id": "walk-in", "label": "Walk-in directly" },
      { "id": "whatsapp", "label": "WhatsApp" },
      { "id": "phone", "label": "Phone call" },
      { "id": "google", "label": "Google search" }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "automotive",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      { "id": "browse-inventory", "label": "🔍 Browse and filter vehicle inventory (make, model, year, price)" },
      { "id": "book-test-drive", "label": "🚗 Book a test drive" },
      { "id": "book-service", "label": "🔧 Book a service or repair appointment" },
      { "id": "emi-calculator", "label": "💰 Use an EMI / loan calculator" },
      { "id": "view-photos", "label": "📸 View vehicle photos and specifications" },
      { "id": "contact-whatsapp", "label": "💬 Contact on WhatsApp" },
      { "id": "get-directions", "label": "📍 Get directions to the showroom or garage" }
    ],
    "required": true,
    "scoring": {
      "browse-inventory": 20,
      "book-test-drive": 15,
      "book-service": 15,
      "emi-calculator": 10,
      "view-photos": 5,
      "contact-whatsapp": 5,
      "get-directions": 0
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "automotive",
    "question": "How many vehicles do you want listed at a time?",
    "inputType": "single-select",
    "options": [
      { "id": "fewer-20", "label": "Fewer than 20 vehicles" },
      { "id": "20-to-100", "label": "20 to 100 vehicles" },
      { "id": "more-100", "label": "More than 100 vehicles" }
    ],
    "required": true,
    "scoring": {
      "fewer-20": 0,
      "20-to-100": 15,
      "more-100": 25
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "automotive",
    "question": "How do you currently manage service bookings?",
    "inputType": "single-select",
    "options": [
      { "id": "walk-in-only", "label": "Walk-in / phone only" },
      { "id": "whatsapp-manual", "label": "WhatsApp or manual register" },
      { "id": "garage-software", "label": "A garage/service management software" }
    ],
    "required": true,
    "scoring": {
      "walk-in-only": 0,
      "whatsapp-manual": 5,
      "garage-software": 15
    }
  }
];
