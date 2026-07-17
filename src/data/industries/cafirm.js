export const cafirmQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "cafirm",
    "question": "What services does your firm primarily offer?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "income-tax-filing-an",
        "label": "Income tax filing and returns"
      },
      {
        "id": "gst-registration-and",
        "label": "GST registration and filing"
      },
      {
        "id": "audit-and-assurance",
        "label": "Audit and assurance"
      },
      {
        "id": "company-or-llp-regis",
        "label": "Company or LLP registration"
      },
      {
        "id": "financial-planning-a",
        "label": "Financial planning and advisory"
      },
      {
        "id": "all-of-the-above",
        "label": "All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "audit-and-assurance": {
        "complexityPoints": 5
      },
      "company-or-llp-regis": {
        "complexityPoints": 5
      },
      "financial-planning-a": {
        "complexityPoints": 5
      },
      "all-of-the-above": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "cafirm",
    "question": "How large is your practice?",
    "inputType": "single-select",
    "options": [
      {
        "id": "solo-ca-or-consultan",
        "label": "Solo CA or consultant"
      },
      {
        "id": "small-firm-with-2-5-",
        "label": "Small firm with 2–5 team members"
      },
      {
        "id": "mid-size-firm-with-6",
        "label": "Mid-size firm with 6–20 members"
      },
      {
        "id": "large-firm-with-20-p",
        "label": "Large firm with 20+ professionals"
      }
    ],
    "required": true,
    "scoring": {
      "small-firm-with-2-5-": {
        "complexityPoints": 5
      },
      "mid-size-firm-with-6": {
        "complexityPoints": 15
      },
      "large-firm-with-20-p": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "cafirm",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "get-new-clients-to-c",
        "label": "🤝 Get new clients to contact you"
      },
      {
        "id": "build-trust-and-show",
        "label": "🏆 Build trust and show your expertise"
      },
      {
        "id": "let-clients-book-a-c",
        "label": "📅 Let clients book a consultation"
      },
      {
        "id": "share-tax-tips-and-f",
        "label": "📚 Share tax tips and financial guides"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "get-new-clients-to-c": {
        "complexityPoints": 5
      },
      "build-trust-and-show": {
        "complexityPoints": 5
      },
      "let-clients-book-a-c": {
        "complexityPoints": 10
      },
      "share-tax-tips-and-f": {
        "complexityPoints": 10
      },
      "all-of-the-above": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "cafirm",
    "question": "How do clients currently find your firm?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "referrals-from-exist",
        "label": "Referrals from existing clients"
      },
      {
        "id": "google-search",
        "label": "Google search"
      },
      {
        "id": "professional-network",
        "label": "Professional networks and ICAI"
      },
      {
        "id": "social-media-like-li",
        "label": "Social media like LinkedIn"
      },
      {
        "id": "direct-walk-in",
        "label": "Direct walk-in"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "cafirm",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "learn-about-your-ser",
        "label": "📋 Learn about your services in detail"
      },
      {
        "id": "book-a-free-or-paid-",
        "label": "📅 Book a free or paid consultation"
      },
      {
        "id": "read-articles-on-tax",
        "label": "📰 Read articles on tax and finance"
      },
      {
        "id": "use-a-tax-or-gst-cal",
        "label": "🧮 Use a tax or GST calculator tool"
      },
      {
        "id": "download-tax-checkli",
        "label": "📥 Download tax checklists or guides"
      },
      {
        "id": "contact-on-whatsapp",
        "label": "💬 Contact on WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "learn-about-your-ser": {
        "complexityPoints": 5
      },
      "book-a-free-or-paid-": {
        "complexityPoints": 10
      },
      "read-articles-on-tax": {
        "complexityPoints": 10
      },
      "use-a-tax-or-gst-cal": {
        "complexityPoints": 15
      },
      "download-tax-checkli": {
        "complexityPoints": 10
      },
      "contact-on-whatsapp": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "cafirm",
    "question": "Do you want a tax or GST calculator on your site?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-income-tax-calcu",
        "label": "Yes — income tax calculator"
      },
      {
        "id": "yes-gst-calculator",
        "label": "Yes — GST calculator"
      },
      {
        "id": "yes-both",
        "label": "Yes — both"
      },
      {
        "id": "no-not-needed",
        "label": "No — not needed"
      }
    ],
    "required": true,
    "scoring": {
      "yes-income-tax-calcu": {
        "complexityPoints": 10
      },
      "yes-gst-calculator": {
        "complexityPoints": 10
      },
      "yes-both": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "cafirm",
    "question": "Do you publish content regularly?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-i-write-articles",
        "label": "Yes — I write articles and want a full blog"
      },
      {
        "id": "yes-just-basic-updat",
        "label": "Yes — just basic updates and news"
      },
      {
        "id": "no-i-want-static-con",
        "label": "No — I want static content only"
      }
    ],
    "required": true,
    "scoring": {
      "yes-i-write-articles": {
        "complexityPoints": 10
      },
      "yes-just-basic-updat": {
        "complexityPoints": 5
      }
    }
  }
];
