export const constructionQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "construction",
    "question": "What type of construction work do you do?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "residential-construc",
        "label": "Residential construction (houses, villas, apartments)"
      },
      {
        "id": "commercial-construct",
        "label": "Commercial construction (offices, shops, malls)"
      },
      {
        "id": "renovation-and-inter",
        "label": "Renovation and interior fit-out"
      },
      {
        "id": "civil-and-infrastruc",
        "label": "Civil and infrastructure (roads, bridges)"
      },
      {
        "id": "all-types-of-constru",
        "label": "All types of construction"
      }
    ],
    "required": true,
    "scoring": {
      "commercial-construct": {
        "complexityPoints": 5
      },
      "civil-and-infrastruc": {
        "complexityPoints": 10
      },
      "all-types-of-constru": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "construction",
    "question": "How large is your company?",
    "inputType": "single-select",
    "options": [
      {
        "id": "small-local-contract",
        "label": "Small local contractor"
      },
      {
        "id": "mid-size-constructio",
        "label": "Mid-size construction firm"
      },
      {
        "id": "large-construction-c",
        "label": "Large construction company"
      }
    ],
    "required": true,
    "scoring": {
      "mid-size-constructio": {
        "complexityPoints": 10
      },
      "large-construction-c": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "construction",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "showcase-past-projec",
        "label": "🏘️ Showcase past projects and build credibility"
      },
      {
        "id": "get-project-enquirie",
        "label": "📞 Get project enquiries from new clients"
      },
      {
        "id": "share-your-company-s",
        "label": "📄 Share your company's capabilities and portfolio"
      },
      {
        "id": "target-premium-or-co",
        "label": "🏆 Target premium or corporate clients"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "showcase-past-projec": {
        "complexityPoints": 5
      },
      "get-project-enquirie": {
        "complexityPoints": 5
      },
      "share-your-company-s": {
        "complexityPoints": 5
      },
      "target-premium-or-co": {
        "complexityPoints": 15
      },
      "all-of-the-above": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "construction",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "view-a-gallery-of-co",
        "label": "🖼️ View a gallery of completed projects"
      },
      {
        "id": "download-your-compan",
        "label": "📄 Download your company profile or brochure"
      },
      {
        "id": "request-a-quote-or-f",
        "label": "📞 Request a quote or free consultation"
      },
      {
        "id": "see-your-ongoing-or-",
        "label": "🗺️ See your ongoing or upcoming projects"
      },
      {
        "id": "contact-on-whatsapp",
        "label": "💬 Contact on WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "view-a-gallery-of-co": {
        "complexityPoints": 10
      },
      "download-your-compan": {
        "complexityPoints": 10
      },
      "request-a-quote-or-f": {
        "complexityPoints": 5
      },
      "see-your-ongoing-or-": {
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
    "industry": "construction",
    "question": "How many projects do you want to showcase?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-10-projec",
        "label": "Fewer than 10 projects"
      },
      {
        "id": "10-to-30-projects",
        "label": "10 to 30 projects"
      },
      {
        "id": "more-than-30-project",
        "label": "More than 30 projects"
      }
    ],
    "required": true,
    "scoring": {
      "10-to-30-projects": {
        "complexityPoints": 10
      },
      "more-than-30-project": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "construction",
    "question": "Do you want to showcase ongoing or upcoming projects?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-with-photos-and-",
        "label": "Yes — with photos and status updates"
      },
      {
        "id": "yes-just-basic-infor",
        "label": "Yes — just basic information"
      },
      {
        "id": "no-only-completed-pr",
        "label": "No — only completed projects"
      }
    ],
    "required": true,
    "scoring": {
      "yes-with-photos-and-": {
        "complexityPoints": 15
      },
      "yes-just-basic-infor": {
        "complexityPoints": 5
      }
    }
  }
];
