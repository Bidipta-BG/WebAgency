export const interiorQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "interior",
    "question": "What type of interior design work do you do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "residential-interior",
        "label": "Residential interior design"
      },
      {
        "id": "commercial-interior-",
        "label": "Commercial interior design"
      },
      {
        "id": "both-residential-and",
        "label": "Both residential and commercial"
      },
      {
        "id": "furniture-design-and",
        "label": "Furniture design and custom manufacturing"
      },
      {
        "id": "space-planning-and-c",
        "label": "Space planning and consultancy only"
      }
    ],
    "required": true,
    "scoring": {
      "commercial-interior-": {
        "complexityPoints": 5
      },
      "both-residential-and": {
        "complexityPoints": 10
      },
      "furniture-design-and": {
        "complexityPoints": 10
      },
      "space-planning-and-c": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "interior",
    "question": "How would you describe your studio?",
    "inputType": "single-select",
    "options": [
      {
        "id": "independent-designer",
        "label": "Independent designer (working alone)"
      },
      {
        "id": "small-studio-with-2-",
        "label": "Small studio with 2–5 designers"
      },
      {
        "id": "medium-studio-with-6",
        "label": "Medium studio with 6–15 team members"
      },
      {
        "id": "large-design-firm-wi",
        "label": "Large design firm with 15+ people"
      }
    ],
    "required": true,
    "scoring": {
      "small-studio-with-2-": {
        "complexityPoints": 5
      },
      "medium-studio-with-6": {
        "complexityPoints": 15
      },
      "large-design-firm-wi": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "interior",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "showcase-my-portfoli",
        "label": "🖼️ Showcase my portfolio and attract premium clients"
      },
      {
        "id": "get-enquiries-and-co",
        "label": "📞 Get enquiries and consultation bookings"
      },
      {
        "id": "build-a-luxury-or-pr",
        "label": "💎 Build a luxury or premium brand image"
      },
      {
        "id": "show-my-range-of-des",
        "label": "📐 Show my range of design styles and capabilities"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "showcase-my-portfoli": {
        "complexityPoints": 10
      },
      "get-enquiries-and-co": {
        "complexityPoints": 5
      },
      "build-a-luxury-or-pr": {
        "complexityPoints": 10
      },
      "show-my-range-of-des": {
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
    "industry": "interior",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "view-my-portfolio-an",
        "label": "🖼️ View my portfolio and past projects"
      },
      {
        "id": "book-a-design-consul",
        "label": "📅 Book a design consultation"
      },
      {
        "id": "see-service-packages",
        "label": "💰 See service packages and pricing"
      },
      {
        "id": "download-a-lookbook-",
        "label": "📥 Download a lookbook or design catalogue"
      },
      {
        "id": "contact-on-whatsapp",
        "label": "💬 Contact on WhatsApp"
      },
      {
        "id": "browse-furniture-or-",
        "label": "🛋️ Browse furniture or product catalogue"
      }
    ],
    "required": true,
    "scoring": {
      "view-my-portfolio-an": {
        "complexityPoints": 10
      },
      "book-a-design-consul": {
        "complexityPoints": 10
      },
      "see-service-packages": {
        "complexityPoints": 5
      },
      "download-a-lookbook-": {
        "complexityPoints": 10
      },
      "contact-on-whatsapp": {
        "complexityPoints": 5
      },
      "browse-furniture-or-": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "interior",
    "question": "How many portfolio projects do you want to feature?",
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
    "industry": "interior",
    "question": "Do you have a lookbook or design catalogue ready?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-i-have-a-ready-p",
        "label": "Yes — I have a ready PDF lookbook"
      },
      {
        "id": "no-i-need-help-creat",
        "label": "No — I need help creating one"
      },
      {
        "id": "i-want-an-interactiv",
        "label": "I want an interactive online catalogue instead"
      }
    ],
    "required": true,
    "scoring": {
      "yes-i-have-a-ready-p": {
        "complexityPoints": 5
      },
      "no-i-need-help-creat": {
        "complexityPoints": 10
      },
      "i-want-an-interactiv": {
        "complexityPoints": 15
      }
    }
  }
];
