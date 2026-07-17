export const manufacturingQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "manufacturing",
    "question": "What type of manufacturing do you do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "food-processing-and-",
        "label": "Food processing and packaging"
      },
      {
        "id": "textiles-and-garment",
        "label": "Textiles and garments"
      },
      {
        "id": "engineering-and-meta",
        "label": "Engineering and metal parts"
      },
      {
        "id": "chemicals-and-materi",
        "label": "Chemicals and materials"
      },
      {
        "id": "furniture-and-wood-p",
        "label": "Furniture and wood products"
      },
      {
        "id": "plastics-and-packagi",
        "label": "Plastics and packaging materials"
      },
      {
        "id": "general-and-mixed-ma",
        "label": "General and mixed manufacturing"
      }
    ],
    "required": true,
    "scoring": {
      "food-processing-and-": {
        "complexityPoints": 5
      },
      "textiles-and-garment": {
        "complexityPoints": 5
      },
      "engineering-and-meta": {
        "complexityPoints": 10
      },
      "chemicals-and-materi": {
        "complexityPoints": 10
      },
      "furniture-and-wood-p": {
        "complexityPoints": 5
      },
      "plastics-and-packagi": {
        "complexityPoints": 5
      },
      "general-and-mixed-ma": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "manufacturing",
    "question": "Who are your primary customers?",
    "inputType": "single-select",
    "options": [
      {
        "id": "other-businesses-b2b",
        "label": "Other businesses (B2B wholesale)"
      },
      {
        "id": "retailers-and-distri",
        "label": "Retailers and distributors"
      },
      {
        "id": "end-consumers-b2c-di",
        "label": "End consumers (B2C direct)"
      },
      {
        "id": "both-b2b-and-b2c",
        "label": "Both B2B and B2C"
      },
      {
        "id": "export-international",
        "label": "Export / international buyers"
      }
    ],
    "required": true,
    "scoring": {
      "other-businesses-b2b": {
        "complexityPoints": 15
      },
      "retailers-and-distri": {
        "complexityPoints": 10
      },
      "end-consumers-b2c-di": {
        "complexityPoints": 5
      },
      "both-b2b-and-b2c": {
        "complexityPoints": 15
      },
      "export-international": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "manufacturing",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "show-our-products-an",
        "label": "📋 Show our products and attract business buyers"
      },
      {
        "id": "get-bulk-order-enqui",
        "label": "📩 Get bulk order enquiries"
      },
      {
        "id": "reach-export-and-int",
        "label": "🌍 Reach export and international buyers"
      },
      {
        "id": "build-credibility-wi",
        "label": "🏆 Build credibility with certifications and capacity"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "show-our-products-an": {
        "complexityPoints": 10
      },
      "get-bulk-order-enqui": {
        "complexityPoints": 10
      },
      "reach-export-and-int": {
        "complexityPoints": 20
      },
      "build-credibility-wi": {
        "complexityPoints": 5
      },
      "all-of-the-above": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "manufacturing",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "view-product-catalog",
        "label": "📋 View product catalogue with specifications"
      },
      {
        "id": "submit-a-bulk-enquir",
        "label": "📩 Submit a bulk enquiry or RFQ"
      },
      {
        "id": "download-product-dat",
        "label": "📄 Download product datasheets or company profile"
      },
      {
        "id": "see-your-factory-mac",
        "label": "🏭 See your factory, machinery, and capacity"
      },
      {
        "id": "contact-for-export-i",
        "label": "🌍 Contact for export inquiries"
      },
      {
        "id": "contact-on-whatsapp",
        "label": "💬 Contact on WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "view-product-catalog": {
        "complexityPoints": 10
      },
      "submit-a-bulk-enquir": {
        "complexityPoints": 10
      },
      "download-product-dat": {
        "complexityPoints": 10
      },
      "see-your-factory-mac": {
        "complexityPoints": 5
      },
      "contact-for-export-i": {
        "complexityPoints": 15
      },
      "contact-on-whatsapp": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "manufacturing",
    "question": "How many product categories do you have?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-10-catego",
        "label": "Fewer than 10 categories"
      },
      {
        "id": "10-to-30-categories",
        "label": "10 to 30 categories"
      },
      {
        "id": "more-than-30-categor",
        "label": "More than 30 categories"
      }
    ],
    "required": true,
    "scoring": {
      "10-to-30-categories": {
        "complexityPoints": 10
      },
      "more-than-30-categor": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "manufacturing",
    "question": "Do you export your products?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-export-is-a-majo",
        "label": "Yes — export is a major part of our business"
      },
      {
        "id": "yes-we-export-occasi",
        "label": "Yes — we export occasionally"
      },
      {
        "id": "no-only-domestic-sal",
        "label": "No — only domestic sales currently"
      },
      {
        "id": "we-want-to-start-exp",
        "label": "We want to start exporting"
      }
    ],
    "required": true,
    "scoring": {
      "yes-export-is-a-majo": {
        "complexityPoints": 20
      },
      "yes-we-export-occasi": {
        "complexityPoints": 10
      },
      "we-want-to-start-exp": {
        "complexityPoints": 5
      }
    }
  }
];
