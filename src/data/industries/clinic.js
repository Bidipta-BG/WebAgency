export const clinicQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "clinic",
    "question": "What type of medical facility do you run?",
    "inputType": "single-select",
    "options": [
      {
        "id": "general-physician-cl",
        "label": "General physician clinic"
      },
      {
        "id": "dental-clinic",
        "label": "Dental clinic"
      },
      {
        "id": "skin-and-dermatology",
        "label": "Skin and dermatology clinic"
      },
      {
        "id": "eye-care-centre",
        "label": "Eye care centre"
      },
      {
        "id": "physiotherapy-or-reh",
        "label": "Physiotherapy or rehabilitation centre"
      },
      {
        "id": "multi-specialty-hosp",
        "label": "Multi-specialty hospital or clinic"
      }
    ],
    "required": true,
    "scoring": {
      "dental-clinic": {
        "complexityPoints": 5
      },
      "skin-and-dermatology": {
        "complexityPoints": 5
      },
      "eye-care-centre": {
        "complexityPoints": 5
      },
      "physiotherapy-or-reh": {
        "complexityPoints": 5
      },
      "multi-specialty-hosp": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "clinic",
    "question": "How many doctors or specialists work at your facility?",
    "inputType": "single-select",
    "options": [
      {
        "id": "just-1-doctor",
        "label": "Just 1 doctor"
      },
      {
        "id": "2-to-5-doctors",
        "label": "2 to 5 doctors"
      },
      {
        "id": "6-to-15-doctors",
        "label": "6 to 15 doctors"
      },
      {
        "id": "more-than-15-doctors",
        "label": "More than 15 doctors"
      }
    ],
    "required": true,
    "scoring": {
      "2-to-5-doctors": {
        "complexityPoints": 10
      },
      "6-to-15-doctors": {
        "complexityPoints": 20
      },
      "more-than-15-doctors": {
        "complexityPoints": 35
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "clinic",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "attract-more-patient",
        "label": "👥 Attract more patients"
      },
      {
        "id": "let-patients-book-ap",
        "label": "📅 Let patients book appointments online"
      },
      {
        "id": "build-trust-and-cred",
        "label": "🏆 Build trust and credibility with new patients"
      },
      {
        "id": "share-health-informa",
        "label": "📚 Share health information and educate patients"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "attract-more-patient": {
        "complexityPoints": 5
      },
      "let-patients-book-ap": {
        "complexityPoints": 15
      },
      "build-trust-and-cred": {
        "complexityPoints": 5
      },
      "share-health-informa": {
        "complexityPoints": 10
      },
      "all-of-the-above": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "clinic",
    "question": "How do patients currently contact you?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "phone-call",
        "label": "Phone call"
      },
      {
        "id": "whatsapp",
        "label": "WhatsApp"
      },
      {
        "id": "walk-in-directly",
        "label": "Walk-in directly"
      },
      {
        "id": "google-search",
        "label": "Google search"
      },
      {
        "id": "referrals-from-other",
        "label": "Referrals from other doctors"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "clinic",
    "question": "What should patients be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "book-an-appointment-",
        "label": "📅 Book an appointment online"
      },
      {
        "id": "view-doctor-profiles",
        "label": "👨‍⚕️ View doctor profiles and specialisations"
      },
      {
        "id": "read-health-articles",
        "label": "📖 Read health articles and tips"
      },
      {
        "id": "know-about-available",
        "label": "🧪 Know about available tests and services"
      },
      {
        "id": "contact-us-on-whatsa",
        "label": "💬 Contact us on WhatsApp"
      },
      {
        "id": "get-directions-to-th",
        "label": "📍 Get directions to the clinic"
      },
      {
        "id": "call-us-directly",
        "label": "📞 Call us directly"
      }
    ],
    "required": true,
    "scoring": {
      "book-an-appointment-": {
        "complexityPoints": 15
      },
      "view-doctor-profiles": {
        "complexityPoints": 10
      },
      "read-health-articles": {
        "complexityPoints": 10
      },
      "know-about-available": {
        "complexityPoints": 5
      },
      "contact-us-on-whatsa": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "clinic",
    "question": "How are appointments managed today?",
    "inputType": "single-select",
    "options": [
      {
        "id": "manually-by-receptio",
        "label": "Manually by reception staff"
      },
      {
        "id": "through-whatsapp-mes",
        "label": "Through WhatsApp messages"
      },
      {
        "id": "through-a-clinic-man",
        "label": "Through a clinic management software"
      },
      {
        "id": "patients-just-walk-i",
        "label": "Patients just walk in"
      }
    ],
    "required": true,
    "scoring": {
      "manually-by-receptio": {
        "complexityPoints": 5
      },
      "through-whatsapp-mes": {
        "complexityPoints": 5
      },
      "through-a-clinic-man": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "clinic",
    "question": "Do you offer any additional services?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "diagnostic-lab-and-b",
        "label": "Diagnostic lab and blood tests"
      },
      {
        "id": "in-house-pharmacy",
        "label": "In-house pharmacy"
      },
      {
        "id": "emergency-or-24-hour",
        "label": "Emergency or 24-hour services"
      },
      {
        "id": "ambulance-services",
        "label": "Ambulance services"
      },
      {
        "id": "none-of-the-above",
        "label": "None of the above"
      }
    ],
    "required": true,
    "scoring": {
      "diagnostic-lab-and-b": {
        "complexityPoints": 10
      },
      "in-house-pharmacy": {
        "complexityPoints": 10
      },
      "emergency-or-24-hour": {
        "complexityPoints": 15
      },
      "ambulance-services": {
        "complexityPoints": 10
      }
    }
  }
];
