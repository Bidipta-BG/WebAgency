export const eventsQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "events",
    "question": "What type of events do you plan?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "weddings-and-recepti",
        "label": "Weddings and receptions"
      },
      {
        "id": "corporate-events-and",
        "label": "Corporate events and conferences"
      },
      {
        "id": "birthday-and-anniver",
        "label": "Birthday and anniversary parties"
      },
      {
        "id": "destination-and-trav",
        "label": "Destination and travel events"
      },
      {
        "id": "social-and-cultural-",
        "label": "Social and cultural events"
      },
      {
        "id": "all-types-of-events",
        "label": "All types of events"
      }
    ],
    "required": true,
    "scoring": {
      "weddings-and-recepti": {
        "complexityPoints": 5
      },
      "corporate-events-and": {
        "complexityPoints": 10
      },
      "destination-and-trav": {
        "complexityPoints": 10
      },
      "all-types-of-events": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "events",
    "question": "How large is your team?",
    "inputType": "single-select",
    "options": [
      {
        "id": "just-me-individual-p",
        "label": "Just me — individual planner"
      },
      {
        "id": "small-team-of-2-5-pe",
        "label": "Small team of 2–5 people"
      },
      {
        "id": "medium-company-with-",
        "label": "Medium company with 6–20 staff"
      },
      {
        "id": "large-event-manageme",
        "label": "Large event management company"
      }
    ],
    "required": true,
    "scoring": {
      "small-team-of-2-5-pe": {
        "complexityPoints": 5
      },
      "medium-company-with-": {
        "complexityPoints": 15
      },
      "large-event-manageme": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "events",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "show-past-events-and",
        "label": "🖼️ Show past events and attract new clients"
      },
      {
        "id": "get-event-planning-e",
        "label": "📞 Get event planning enquiries"
      },
      {
        "id": "build-a-premium-even",
        "label": "💼 Build a premium event management brand"
      },
      {
        "id": "let-clients-see-pack",
        "label": "📋 Let clients see packages and pricing"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "show-past-events-and": {
        "complexityPoints": 10
      },
      "get-event-planning-e": {
        "complexityPoints": 5
      },
      "build-a-premium-even": {
        "complexityPoints": 10
      },
      "let-clients-see-pack": {
        "complexityPoints": 5
      },
      "all-of-the-above": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "events",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "view-photos-and-vide",
        "label": "🖼️ View photos and videos of past events"
      },
      {
        "id": "see-event-planning-p",
        "label": "📋 See event planning packages"
      },
      {
        "id": "get-a-custom-quote",
        "label": "💬 Get a custom quote"
      },
      {
        "id": "schedule-an-initial-",
        "label": "📅 Schedule an initial consultation"
      },
      {
        "id": "contact-on-whatsapp",
        "label": "💬 Contact on WhatsApp"
      },
      {
        "id": "read-client-reviews-",
        "label": "🏆 Read client reviews and testimonials"
      }
    ],
    "required": true,
    "scoring": {
      "view-photos-and-vide": {
        "complexityPoints": 10
      },
      "see-event-planning-p": {
        "complexityPoints": 5
      },
      "get-a-custom-quote": {
        "complexityPoints": 10
      },
      "schedule-an-initial-": {
        "complexityPoints": 10
      },
      "contact-on-whatsapp": {
        "complexityPoints": 5
      },
      "read-client-reviews-": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "events",
    "question": "How many events do you want to showcase?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-10-events",
        "label": "Fewer than 10 events"
      },
      {
        "id": "10-to-30-events",
        "label": "10 to 30 events"
      },
      {
        "id": "more-than-30-events",
        "label": "More than 30 events"
      }
    ],
    "required": true,
    "scoring": {
      "10-to-30-events": {
        "complexityPoints": 10
      },
      "more-than-30-events": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "events",
    "question": "Do you have standard packages or is everything custom?",
    "inputType": "single-select",
    "options": [
      {
        "id": "standard-packages-fi",
        "label": "Standard packages — fixed price and inclusions"
      },
      {
        "id": "fully-custom-every-e",
        "label": "Fully custom — every event is different"
      },
      {
        "id": "mix-of-both",
        "label": "Mix of both"
      }
    ],
    "required": true,
    "scoring": {
      "standard-packages-fi": {
        "complexityPoints": 5
      },
      "fully-custom-every-e": {
        "complexityPoints": 10
      },
      "mix-of-both": {
        "complexityPoints": 10
      }
    }
  }
];
