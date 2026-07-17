export const realestateQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "realestate",
    "question": "What best describes your real estate business?",
    "inputType": "single-select",
    "options": [
      {
        "id": "property-developer-o",
        "label": "Property developer or builder"
      },
      {
        "id": "individual-real-esta",
        "label": "Individual real estate agent or broker"
      },
      {
        "id": "real-estate-agency-o",
        "label": "Real estate agency or firm"
      },
      {
        "id": "property-rental-busi",
        "label": "Property rental business"
      },
      {
        "id": "commercial-property-",
        "label": "Commercial property specialist"
      }
    ],
    "required": true,
    "scoring": {
      "property-developer-o": {
        "complexityPoints": 10
      },
      "real-estate-agency-o": {
        "complexityPoints": 5
      },
      "property-rental-busi": {
        "complexityPoints": 5
      },
      "commercial-property-": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "realestate",
    "question": "How many properties do you typically list or sell per year?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-10-proper",
        "label": "Fewer than 10 properties"
      },
      {
        "id": "10-to-50-properties",
        "label": "10 to 50 properties"
      },
      {
        "id": "51-to-200-properties",
        "label": "51 to 200 properties"
      },
      {
        "id": "more-than-200-proper",
        "label": "More than 200 properties"
      }
    ],
    "required": true,
    "scoring": {
      "10-to-50-properties": {
        "complexityPoints": 10
      },
      "51-to-200-properties": {
        "complexityPoints": 20
      },
      "more-than-200-proper": {
        "complexityPoints": 35
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "realestate",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "showcase-properties-",
        "label": "🏘️ Showcase properties and attract buyers or tenants"
      },
      {
        "id": "generate-leads-and-e",
        "label": "📞 Generate leads and enquiries for your properties"
      },
      {
        "id": "launch-a-new-housing",
        "label": "🏗️ Launch a new housing project or development"
      },
      {
        "id": "build-your-personal-",
        "label": "🤝 Build your personal or agency brand"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "showcase-properties-": {
        "complexityPoints": 10
      },
      "generate-leads-and-e": {
        "complexityPoints": 5
      },
      "launch-a-new-housing": {
        "complexityPoints": 15
      },
      "build-your-personal-": {
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
    "industry": "realestate",
    "question": "How do buyers and tenants find your listings today?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "99acres-or-magicbric",
        "label": "99acres or MagicBricks"
      },
      {
        "id": "nobroker-or-housing-",
        "label": "NoBroker or Housing.com"
      },
      {
        "id": "instagram-or-faceboo",
        "label": "Instagram or Facebook"
      },
      {
        "id": "word-of-mouth-and-re",
        "label": "Word of mouth and referrals"
      },
      {
        "id": "whatsapp-groups",
        "label": "WhatsApp groups"
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
    "industry": "realestate",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "search-and-filter-pr",
        "label": "🔍 Search and filter properties"
      },
      {
        "id": "view-property-photos",
        "label": "📸 View property photos and virtual tours"
      },
      {
        "id": "use-an-emi-calculato",
        "label": "💰 Use an EMI calculator"
      },
      {
        "id": "submit-a-property-en",
        "label": "📋 Submit a property enquiry"
      },
      {
        "id": "view-properties-on-a",
        "label": "🗺️ View properties on a map"
      },
      {
        "id": "schedule-a-site-visi",
        "label": "📞 Schedule a site visit"
      },
      {
        "id": "contact-agent-on-wha",
        "label": "💬 Contact agent on WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "search-and-filter-pr": {
        "complexityPoints": 20
      },
      "view-property-photos": {
        "complexityPoints": 10
      },
      "use-an-emi-calculato": {
        "complexityPoints": 10
      },
      "submit-a-property-en": {
        "complexityPoints": 5
      },
      "view-properties-on-a": {
        "complexityPoints": 15
      },
      "schedule-a-site-visi": {
        "complexityPoints": 10
      },
      "contact-agent-on-wha": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "realestate",
    "question": "Do you want to list properties directly on your own website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-i-want-a-full-pr",
        "label": "Yes — I want a full property listing system I can manage"
      },
      {
        "id": "no-i-ll-just-show-a-",
        "label": "No — I'll just show a few featured properties manually"
      },
      {
        "id": "i-want-a-basic-listi",
        "label": "I want a basic listing — no advanced filter needed"
      }
    ],
    "required": true,
    "scoring": {
      "yes-i-want-a-full-pr": {
        "complexityPoints": 20
      },
      "no-i-ll-just-show-a-": {
        "complexityPoints": 5
      },
      "i-want-a-basic-listi": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "realestate",
    "question": "Do you want to promote a specific project or development?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-a-single-residen",
        "label": "Yes — a single residential project"
      },
      {
        "id": "yes-multiple-project",
        "label": "Yes — multiple projects at once"
      },
      {
        "id": "no-i-want-a-general-",
        "label": "No — I want a general portfolio site"
      }
    ],
    "required": true,
    "scoring": {
      "yes-a-single-residen": {
        "complexityPoints": 10
      },
      "yes-multiple-project": {
        "complexityPoints": 20
      }
    }
  }
];
