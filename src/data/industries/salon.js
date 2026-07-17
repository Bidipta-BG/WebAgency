export const salonQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "salon",
    "question": "Is your salon currently operating?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-we-are-open-and-",
        "label": "✅ Yes, we are open and serving customers"
      },
      {
        "id": "we-are-opening-soon",
        "label": "🚀 We are opening soon"
      },
      {
        "id": "we-are-still-in-the-",
        "label": "🏗️ We are still in the planning stage"
      }
    ],
    "required": true,
    "scoring": {
      "we-are-opening-soon": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "salon",
    "question": "How many salon locations do you have?",
    "inputType": "single-select",
    "options": [
      {
        "id": "just-one-location",
        "label": "Just one location"
      },
      {
        "id": "2-to-5-locations",
        "label": "2 to 5 locations"
      },
      {
        "id": "more-than-5-location",
        "label": "More than 5 locations"
      }
    ],
    "required": true,
    "scoring": {
      "2-to-5-locations": {
        "complexityPoints": 20
      },
      "more-than-5-location": {
        "complexityPoints": 35
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "salon",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "bring-me-more-new-cu",
        "label": "📈 Bring me more new customers"
      },
      {
        "id": "let-customers-book-a",
        "label": "📅 Let customers book appointments online"
      },
      {
        "id": "help-customers-trust",
        "label": "🤝 Help customers trust us before visiting"
      },
      {
        "id": "show-off-our-work-an",
        "label": "🖼️ Show off our work and services"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "bring-me-more-new-cu": {
        "complexityPoints": 5
      },
      "let-customers-book-a": {
        "complexityPoints": 15
      },
      "help-customers-trust": {
        "complexityPoints": 5
      },
      "show-off-our-work-an": {
        "complexityPoints": 5
      },
      "all-of-the-above": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "salon",
    "question": "How do customers usually contact or find you today?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "whatsapp",
        "label": "WhatsApp"
      },
      {
        "id": "phone-call",
        "label": "Phone call"
      },
      {
        "id": "instagram-facebook",
        "label": "Instagram / Facebook"
      },
      {
        "id": "walk-in-directly",
        "label": "Walk-in directly"
      },
      {
        "id": "google-maps",
        "label": "Google Maps"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "salon",
    "question": "What should customers be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "book-an-appointment",
        "label": "📅 Book an appointment"
      },
      {
        "id": "contact-us-on-whatsa",
        "label": "💬 Contact us on WhatsApp"
      },
      {
        "id": "call-us-directly",
        "label": "📞 Call us directly"
      },
      {
        "id": "view-our-services-an",
        "label": "💅 View our services and prices"
      },
      {
        "id": "see-our-before-and-a",
        "label": "🖼️ See our before and after photos"
      },
      {
        "id": "read-customer-review",
        "label": "⭐ Read customer reviews"
      },
      {
        "id": "get-directions-to-ou",
        "label": "📍 Get directions to our salon"
      }
    ],
    "required": true,
    "scoring": {
      "book-an-appointment": {
        "complexityPoints": 15
      },
      "contact-us-on-whatsa": {
        "complexityPoints": 5
      },
      "view-our-services-an": {
        "complexityPoints": 5
      },
      "see-our-before-and-a": {
        "complexityPoints": 10
      },
      "read-customer-review": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "salon",
    "question": "How do you manage appointments today?",
    "inputType": "single-select",
    "options": [
      {
        "id": "phone-calls",
        "label": "Phone calls"
      },
      {
        "id": "whatsapp-messages",
        "label": "WhatsApp messages"
      },
      {
        "id": "a-diary-or-register",
        "label": "A diary or register"
      },
      {
        "id": "another-booking-app-",
        "label": "Another booking app or software"
      }
    ],
    "required": true,
    "scoring": {
      "another-booking-app-": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "salon",
    "question": "Approximately how many services do you offer?",
    "inputType": "single-select",
    "options": [
      {
        "id": "less-than-20-service",
        "label": "Less than 20 services"
      },
      {
        "id": "between-20-and-50-se",
        "label": "Between 20 and 50 services"
      },
      {
        "id": "more-than-50-service",
        "label": "More than 50 services"
      }
    ],
    "required": true,
    "scoring": {
      "between-20-and-50-se": {
        "complexityPoints": 10
      },
      "more-than-50-service": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q8",
    "step": 2,
    "industry": "salon",
    "question": "How many before & after photos would you like to show?",
    "inputType": "single-select",
    "options": [
      {
        "id": "less-than-20-photos",
        "label": "Less than 20 photos"
      },
      {
        "id": "between-20-and-100-p",
        "label": "Between 20 and 100 photos"
      },
      {
        "id": "more-than-100-photos",
        "label": "More than 100 photos"
      }
    ],
    "required": true,
    "scoring": {
      "between-20-and-100-p": {
        "complexityPoints": 10
      },
      "more-than-100-photos": {
        "complexityPoints": 20
      }
    }
  }
];
