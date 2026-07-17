export const gymQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "gym",
    "question": "Is your gym or fitness studio currently operating?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-we-are-open-and-",
        "label": "✅ Yes, we are open and have active members"
      },
      {
        "id": "we-are-opening-soon",
        "label": "🚀 We are opening soon"
      },
      {
        "id": "we-are-still-plannin",
        "label": "🏗️ We are still planning"
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
    "industry": "gym",
    "question": "What type of fitness centre are you running?",
    "inputType": "single-select",
    "options": [
      {
        "id": "general-gym-with-equ",
        "label": "General gym with equipment"
      },
      {
        "id": "yoga-or-meditation-s",
        "label": "Yoga or meditation studio"
      },
      {
        "id": "crossfit-or-function",
        "label": "CrossFit or functional fitness"
      },
      {
        "id": "dance-or-performing-",
        "label": "Dance or performing arts studio"
      },
      {
        "id": "martial-arts-school",
        "label": "Martial arts school"
      },
      {
        "id": "multi-discipline-fit",
        "label": "Multi-discipline fitness centre"
      }
    ],
    "required": true,
    "scoring": {
      "crossfit-or-function": {
        "complexityPoints": 5
      },
      "dance-or-performing-": {
        "complexityPoints": 5
      },
      "martial-arts-school": {
        "complexityPoints": 5
      },
      "multi-discipline-fit": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "gym",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "get-more-new-members",
        "label": "📈 Get more new members to join"
      },
      {
        "id": "let-people-register-",
        "label": "📅 Let people register or book a trial class online"
      },
      {
        "id": "show-our-classes-tra",
        "label": "💪 Show our classes, trainers, and facilities"
      },
      {
        "id": "build-our-reputation",
        "label": "🏆 Build our reputation and stand out from competitors"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "get-more-new-members": {
        "complexityPoints": 5
      },
      "let-people-register-": {
        "complexityPoints": 15
      },
      "show-our-classes-tra": {
        "complexityPoints": 5
      },
      "build-our-reputation": {
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
    "industry": "gym",
    "question": "How do interested people contact you today?",
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
        "id": "instagram-or-faceboo",
        "label": "Instagram or Facebook"
      },
      {
        "id": "walk-in-directly",
        "label": "Walk-in directly"
      },
      {
        "id": "google-search",
        "label": "Google search"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "gym",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "view-membership-plan",
        "label": "📋 View membership plans and pricing"
      },
      {
        "id": "book-a-free-trial-cl",
        "label": "📅 Book a free trial class"
      },
      {
        "id": "sign-up-or-register-",
        "label": "🧾 Sign up or register online"
      },
      {
        "id": "see-the-class-schedu",
        "label": "🗓️ See the class schedule"
      },
      {
        "id": "view-trainer-profile",
        "label": "👤 View trainer profiles"
      },
      {
        "id": "see-our-gym-and-faci",
        "label": "📸 See our gym and facilities"
      },
      {
        "id": "contact-us-on-whatsa",
        "label": "💬 Contact us on WhatsApp"
      },
      {
        "id": "read-success-stories",
        "label": "🏆 Read success stories and transformations"
      }
    ],
    "required": true,
    "scoring": {
      "view-membership-plan": {
        "complexityPoints": 5
      },
      "book-a-free-trial-cl": {
        "complexityPoints": 15
      },
      "sign-up-or-register-": {
        "complexityPoints": 20
      },
      "see-the-class-schedu": {
        "complexityPoints": 10
      },
      "view-trainer-profile": {
        "complexityPoints": 5
      },
      "see-our-gym-and-faci": {
        "complexityPoints": 5
      },
      "contact-us-on-whatsa": {
        "complexityPoints": 5
      },
      "read-success-stories": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "gym",
    "question": "How do you currently manage memberships?",
    "inputType": "single-select",
    "options": [
      {
        "id": "manually-with-a-regi",
        "label": "Manually with a register or spreadsheet"
      },
      {
        "id": "via-whatsapp-and-pho",
        "label": "Via WhatsApp and phone calls"
      },
      {
        "id": "using-a-gym-manageme",
        "label": "Using a gym management software"
      },
      {
        "id": "no-system-currently",
        "label": "No system currently"
      }
    ],
    "required": true,
    "scoring": {
      "manually-with-a-regi": {
        "complexityPoints": 10
      },
      "via-whatsapp-and-pho": {
        "complexityPoints": 5
      },
      "using-a-gym-manageme": {
        "complexityPoints": 15
      },
      "no-system-currently": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "gym",
    "question": "How often does your class schedule change?",
    "inputType": "single-select",
    "options": [
      {
        "id": "rarely-it-stays-the-",
        "label": "Rarely — it stays the same for months"
      },
      {
        "id": "every-month",
        "label": "Every month"
      },
      {
        "id": "every-week",
        "label": "Every week"
      },
      {
        "id": "almost-every-day",
        "label": "Almost every day"
      }
    ],
    "required": true,
    "scoring": {
      "every-month": {
        "complexityPoints": 5
      },
      "every-week": {
        "complexityPoints": 10
      },
      "almost-every-day": {
        "complexityPoints": 15
      }
    }
  }
];
