export const ngoQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "ngo",
    "question": "What is the focus of your NGO or non-profit?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "education-and-litera",
        "label": "Education and literacy"
      },
      {
        "id": "healthcare-and-medic",
        "label": "Healthcare and medical aid"
      },
      {
        "id": "environment-and-cons",
        "label": "Environment and conservation"
      },
      {
        "id": "women-empowerment-an",
        "label": "Women empowerment and safety"
      },
      {
        "id": "child-welfare-and-ri",
        "label": "Child welfare and rights"
      },
      {
        "id": "rural-development",
        "label": "Rural development"
      },
      {
        "id": "disaster-relief-and-",
        "label": "Disaster relief and rehabilitation"
      },
      {
        "id": "multiple-causes",
        "label": "Multiple causes"
      }
    ],
    "required": true,
    "scoring": {
      "healthcare-and-medic": {
        "complexityPoints": 5
      },
      "disaster-relief-and-": {
        "complexityPoints": 5
      },
      "multiple-causes": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "ngo",
    "question": "What is the scale of your organisation?",
    "inputType": "single-select",
    "options": [
      {
        "id": "small-local-or-commu",
        "label": "Small local or community NGO"
      },
      {
        "id": "state-or-regional-le",
        "label": "State or regional level"
      },
      {
        "id": "national-level",
        "label": "National level"
      },
      {
        "id": "international-or-fcr",
        "label": "International or FCRA-registered"
      }
    ],
    "required": true,
    "scoring": {
      "state-or-regional-le": {
        "complexityPoints": 10
      },
      "national-level": {
        "complexityPoints": 20
      },
      "international-or-fcr": {
        "complexityPoints": 30
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "ngo",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "receive-online-donat",
        "label": "💰 Receive online donations"
      },
      {
        "id": "raise-awareness-abou",
        "label": "📢 Raise awareness about our cause"
      },
      {
        "id": "find-volunteers-and-",
        "label": "🙋 Find volunteers and supporters"
      },
      {
        "id": "apply-for-grants-and",
        "label": "📋 Apply for grants and showcase credibility"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "receive-online-donat": {
        "complexityPoints": 20
      },
      "raise-awareness-abou": {
        "complexityPoints": 5
      },
      "find-volunteers-and-": {
        "complexityPoints": 10
      },
      "apply-for-grants-and": {
        "complexityPoints": 10
      },
      "all-of-the-above": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "ngo",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "donate-online",
        "label": "💰 Donate online"
      },
      {
        "id": "sign-up-as-a-volunte",
        "label": "🙋 Sign up as a volunteer"
      },
      {
        "id": "read-about-our-work-",
        "label": "📖 Read about our work and impact"
      },
      {
        "id": "download-annual-repo",
        "label": "📥 Download annual reports or project documents"
      },
      {
        "id": "partner-with-us-corp",
        "label": "🤝 Partner with us (corporate CSR)"
      },
      {
        "id": "share-our-campaigns-",
        "label": "📢 Share our campaigns on social media"
      }
    ],
    "required": true,
    "scoring": {
      "donate-online": {
        "complexityPoints": 20
      },
      "sign-up-as-a-volunte": {
        "complexityPoints": 10
      },
      "read-about-our-work-": {
        "complexityPoints": 5
      },
      "download-annual-repo": {
        "complexityPoints": 10
      },
      "partner-with-us-corp": {
        "complexityPoints": 15
      },
      "share-our-campaigns-": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "ngo",
    "question": "Do you want to accept online donations?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-upi-credit-card-",
        "label": "Yes — UPI, credit card, net banking"
      },
      {
        "id": "yes-but-only-upi-for",
        "label": "Yes — but only UPI for now"
      },
      {
        "id": "no-donors-contact-us",
        "label": "No — donors contact us directly"
      }
    ],
    "required": true,
    "scoring": {
      "yes-upi-credit-card-": {
        "complexityPoints": 20
      },
      "yes-but-only-upi-for": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "ngo",
    "question": "Do you have government registration or FCRA?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-80g-and-12a-regi",
        "label": "Yes — 80G and 12A registered"
      },
      {
        "id": "yes-fcra-registered-",
        "label": "Yes — FCRA registered for foreign donations"
      },
      {
        "id": "in-process-of-regist",
        "label": "In process of registration"
      },
      {
        "id": "no-registration-yet",
        "label": "No registration yet"
      }
    ],
    "required": true,
    "scoring": {
      "yes-80g-and-12a-regi": {
        "complexityPoints": 5
      },
      "yes-fcra-registered-": {
        "complexityPoints": 10
      }
    }
  }
];
