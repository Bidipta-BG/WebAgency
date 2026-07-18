export const architectureQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "architecture",
    "question": "What type of practice do you run?",
    "inputType": "single-select",
    "options": [
      { "id": "residential", "label": "Residential architecture" },
      { "id": "commercial", "label": "Commercial / corporate architecture" },
      { "id": "structural", "label": "Structural or civil engineering" },
      { "id": "urban-planning", "label": "Urban planning / landscape architecture" },
      { "id": "full-service", "label": "Full-service architecture & engineering firm" }
    ],
    "required": true,
    "scoring": {
      "residential": 5,
      "commercial": 10,
      "structural": 10,
      "urban-planning": 10,
      "full-service": 20
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "architecture",
    "question": "How large is your firm?",
    "inputType": "single-select",
    "options": [
      { "id": "independent", "label": "Independent architect/engineer" },
      { "id": "small", "label": "Small firm (2–10 people)" },
      { "id": "mid", "label": "Mid-size firm (11–30 people)" },
      { "id": "large", "label": "Large firm (30+ people)" }
    ],
    "required": true,
    "scoring": {
      "independent": 0,
      "small": 10,
      "mid": 20,
      "large": 30
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "architecture",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      { "id": "showcase-portfolio", "label": "🖼️ Showcase a high-end project portfolio" },
      { "id": "attract-corporate", "label": "🏢 Attract corporate and institutional clients" },
      { "id": "share-blueprints", "label": "📄 Share blueprints and technical documents with clients" },
      { "id": "build-premium-brand", "label": "🤝 Build a premium, credible brand image" },
      { "id": "all-above", "label": "✨ All of the above" }
    ],
    "required": true,
    "scoring": {
      "showcase-portfolio": 10,
      "attract-corporate": 15,
      "share-blueprints": 15,
      "build-premium-brand": 10,
      "all-above": 25
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "architecture",
    "question": "How do clients currently find your firm?",
    "inputType": "multi-select",
    "options": [
      { "id": "referrals", "label": "Referrals and word of mouth" },
      { "id": "google", "label": "Google search" },
      { "id": "awards", "label": "Industry awards / publications" },
      { "id": "social", "label": "Social media" },
      { "id": "direct", "label": "Direct contact / RFP" }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "architecture",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      { "id": "project-gallery", "label": "🖼️ View a high-resolution project gallery" },
      { "id": "download-blueprints", "label": "📄 Download large PDF blueprints or project documents" },
      { "id": "client-area", "label": "🔐 Access a secure client area for ongoing projects" },
      { "id": "request-consultation", "label": "📞 Request a project consultation or RFQ" },
      { "id": "view-profiles", "label": "👤 View architect/engineer profiles and credentials" },
      { "id": "whatsapp", "label": "💬 Contact on WhatsApp" }
    ],
    "required": true,
    "scoring": {
      "project-gallery": 15,
      "download-blueprints": 15,
      "client-area": 25,
      "request-consultation": 10,
      "view-profiles": 5,
      "whatsapp": 5
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "architecture",
    "question": "How many projects do you want to showcase, and at what quality?",
    "inputType": "single-select",
    "options": [
      { "id": "fewer-15", "label": "Fewer than 15 projects, standard photos" },
      { "id": "15-to-40", "label": "15 to 40 projects, high-res galleries" },
      { "id": "40-plus", "label": "40+ projects with 3D renders / virtual walkthroughs" }
    ],
    "required": true,
    "scoring": {
      "fewer-15": 5,
      "15-to-40": 15,
      "40-plus": 25
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "architecture",
    "question": "What kind of secure client area do you need?",
    "inputType": "single-select",
    "options": [
      { "id": "password-page", "label": "Simple password-protected page per project" },
      { "id": "client-login", "label": "Full client login with file history and comments" },
      { "id": "client-portal", "label": "Client portal with approval/sign-off workflow" }
    ],
    "required": true,
    "scoring": {
      "password-page": 15,
      "client-login": 25,
      "client-portal": 30
    }
  }
];
