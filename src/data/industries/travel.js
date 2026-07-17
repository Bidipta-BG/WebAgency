export const travelQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "travel",
    "question": "What type of travel business do you run?",
    "inputType": "single-select",
    "options": [
      {
        "id": "general-tour-operato",
        "label": "General tour operator"
      },
      {
        "id": "honeymoon-and-leisur",
        "label": "Honeymoon and leisure packages"
      },
      {
        "id": "adventure-and-trekki",
        "label": "Adventure and trekking"
      },
      {
        "id": "corporate-travel-man",
        "label": "Corporate travel management"
      },
      {
        "id": "international-travel",
        "label": "International travel specialist"
      },
      {
        "id": "pilgrimage-and-relig",
        "label": "Pilgrimage and religious tours"
      }
    ],
    "required": true,
    "scoring": {
      "honeymoon-and-leisur": {
        "complexityPoints": 5
      },
      "adventure-and-trekki": {
        "complexityPoints": 5
      },
      "corporate-travel-man": {
        "complexityPoints": 15
      },
      "international-travel": {
        "complexityPoints": 10
      },
      "pilgrimage-and-relig": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "travel",
    "question": "How many packages do you typically offer?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-10-packag",
        "label": "Fewer than 10 packages"
      },
      {
        "id": "10-to-30-packages",
        "label": "10 to 30 packages"
      },
      {
        "id": "31-to-100-packages",
        "label": "31 to 100 packages"
      },
      {
        "id": "more-than-100-packag",
        "label": "More than 100 packages"
      }
    ],
    "required": true,
    "scoring": {
      "10-to-30-packages": {
        "complexityPoints": 10
      },
      "31-to-100-packages": {
        "complexityPoints": 20
      },
      "more-than-100-packag": {
        "complexityPoints": 35
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "travel",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "showcase-your-tour-p",
        "label": "🌍 Showcase your tour packages and attract travellers"
      },
      {
        "id": "get-enquiries-and-bo",
        "label": "💬 Get enquiries and bookings from customers"
      },
      {
        "id": "let-customers-book-a",
        "label": "💳 Let customers book and pay online directly"
      },
      {
        "id": "attract-corporate-tr",
        "label": "🏢 Attract corporate travel clients"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "showcase-your-tour-p": {
        "complexityPoints": 5
      },
      "get-enquiries-and-bo": {
        "complexityPoints": 10
      },
      "let-customers-book-a": {
        "complexityPoints": 20
      },
      "attract-corporate-tr": {
        "complexityPoints": 15
      },
      "all-of-the-above": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "travel",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "browse-and-filter-to",
        "label": "🔍 Browse and filter tour packages"
      },
      {
        "id": "send-an-enquiry-or-g",
        "label": "💬 Send an enquiry or get a custom quote"
      },
      {
        "id": "book-and-pay-online-",
        "label": "💳 Book and pay online directly"
      },
      {
        "id": "view-destination-pho",
        "label": "📸 View destination photos and travel stories"
      },
      {
        "id": "check-availability-o",
        "label": "📅 Check availability of specific dates"
      },
      {
        "id": "submit-a-corporate-t",
        "label": "💼 Submit a corporate travel requirement"
      },
      {
        "id": "contact-via-whatsapp",
        "label": "💬 Contact via WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "browse-and-filter-to": {
        "complexityPoints": 15
      },
      "send-an-enquiry-or-g": {
        "complexityPoints": 5
      },
      "book-and-pay-online-": {
        "complexityPoints": 20
      },
      "view-destination-pho": {
        "complexityPoints": 5
      },
      "check-availability-o": {
        "complexityPoints": 10
      },
      "submit-a-corporate-t": {
        "complexityPoints": 15
      },
      "contact-via-whatsapp": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "travel",
    "question": "Do you want customers to pay online for bookings?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-full-payment-onl",
        "label": "Yes — full payment online"
      },
      {
        "id": "yes-advance-token-pa",
        "label": "Yes — advance/token payment only"
      },
      {
        "id": "no-enquiry-only-paym",
        "label": "No — enquiry only, payment offline"
      }
    ],
    "required": true,
    "scoring": {
      "yes-full-payment-onl": {
        "complexityPoints": 20
      },
      "yes-advance-token-pa": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "travel",
    "question": "How many destinations or itineraries do you want to feature?",
    "inputType": "single-select",
    "options": [
      {
        "id": "up-to-30",
        "label": "Up to 30"
      },
      {
        "id": "31-to-100",
        "label": "31 to 100"
      },
      {
        "id": "more-than-100",
        "label": "More than 100"
      }
    ],
    "required": true,
    "scoring": {
      "up-to-30": {
        "complexityPoints": 10
      },
      "31-to-100": {
        "complexityPoints": 20
      },
      "more-than-100": {
        "complexityPoints": 30
      }
    }
  }
];
