export const lawfirmQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "lawfirm",
    "question": "What type of legal practice do you run?",
    "inputType": "single-select",
    "options": [
      {
        "id": "individual-advocate-",
        "label": "Individual advocate or consultant"
      },
      {
        "id": "small-law-firm-2-10-",
        "label": "Small law firm (2–10 lawyers)"
      },
      {
        "id": "mid-size-law-firm-11",
        "label": "Mid-size law firm (11–30 lawyers)"
      },
      {
        "id": "large-full-service-l",
        "label": "Large full-service law firm (30+ lawyers)"
      }
    ],
    "required": true,
    "scoring": {
      "small-law-firm-2-10-": {
        "complexityPoints": 5
      },
      "mid-size-law-firm-11": {
        "complexityPoints": 15
      },
      "large-full-service-l": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "lawfirm",
    "question": "Which area of law do you specialise in?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "corporate-and-busine",
        "label": "Corporate and business law"
      },
      {
        "id": "family-and-matrimoni",
        "label": "Family and matrimonial law"
      },
      {
        "id": "criminal-law",
        "label": "Criminal law"
      },
      {
        "id": "civil-and-property-d",
        "label": "Civil and property disputes"
      },
      {
        "id": "intellectual-propert",
        "label": "Intellectual property"
      },
      {
        "id": "labour-and-employmen",
        "label": "Labour and employment law"
      },
      {
        "id": "all-areas-full-servi",
        "label": "All areas — full service"
      }
    ],
    "required": true,
    "scoring": {
      "corporate-and-busine": {
        "complexityPoints": 5
      },
      "intellectual-propert": {
        "complexityPoints": 5
      },
      "all-areas-full-servi": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "lawfirm",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "build-credibility-an",
        "label": "👤 Build credibility and trust with potential clients"
      },
      {
        "id": "get-more-client-enqu",
        "label": "📞 Get more client enquiries and consultations"
      },
      {
        "id": "share-legal-knowledg",
        "label": "📚 Share legal knowledge through articles and blogs"
      },
      {
        "id": "showcase-case-victor",
        "label": "🏆 Showcase case victories and expertise"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "build-credibility-an": {
        "complexityPoints": 5
      },
      "get-more-client-enqu": {
        "complexityPoints": 10
      },
      "share-legal-knowledg": {
        "complexityPoints": 10
      },
      "showcase-case-victor": {
        "complexityPoints": 5
      },
      "all-of-the-above": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "lawfirm",
    "question": "How do clients currently find you?",
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
        "id": "bar-council-or-legal",
        "label": "Bar council or legal directories"
      },
      {
        "id": "social-media",
        "label": "Social media"
      },
      {
        "id": "direct-contact",
        "label": "Direct contact"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "lawfirm",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "request-a-free-consu",
        "label": "📞 Request a free consultation"
      },
      {
        "id": "read-legal-articles-",
        "label": "📚 Read legal articles and FAQs"
      },
      {
        "id": "view-lawyer-profiles",
        "label": "👩‍⚖️ View lawyer profiles and expertise"
      },
      {
        "id": "read-about-specific-",
        "label": "📋 Read about specific practice areas"
      },
      {
        "id": "download-legal-guide",
        "label": "📩 Download legal guides or documents"
      },
      {
        "id": "contact-on-whatsapp",
        "label": "💬 Contact on WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "request-a-free-consu": {
        "complexityPoints": 10
      },
      "read-legal-articles-": {
        "complexityPoints": 10
      },
      "view-lawyer-profiles": {
        "complexityPoints": 5
      },
      "read-about-specific-": {
        "complexityPoints": 5
      },
      "download-legal-guide": {
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
    "industry": "lawfirm",
    "question": "Do you want to publish regular legal content?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-i-want-a-full-bl",
        "label": "Yes — I want a full blog with regular articles"
      },
      {
        "id": "yes-just-a-basic-faq",
        "label": "Yes — just a basic FAQ section"
      },
      {
        "id": "no-just-static-infor",
        "label": "No — just static information pages"
      }
    ],
    "required": true,
    "scoring": {
      "yes-i-want-a-full-bl": {
        "complexityPoints": 10
      },
      "yes-just-a-basic-faq": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "lawfirm",
    "question": "Do you offer any free resources or guides?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-downloadable-pdf",
        "label": "Yes — downloadable PDFs and legal guides"
      },
      {
        "id": "yes-but-i-need-help-",
        "label": "Yes — but I need help creating them"
      },
      {
        "id": "no-not-at-this-time",
        "label": "No — not at this time"
      }
    ],
    "required": true,
    "scoring": {
      "yes-downloadable-pdf": {
        "complexityPoints": 10
      },
      "yes-but-i-need-help-": {
        "complexityPoints": 5
      }
    }
  }
];
