export const electronicsQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "electronics",
    "question": "What type of electronics do you primarily deal in?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "mobile-phones-and-ac",
        "label": "Mobile phones and accessories"
      },
      {
        "id": "computers-laptops-an",
        "label": "Computers, laptops, and peripherals"
      },
      {
        "id": "home-appliances-tv-a",
        "label": "Home appliances (TV, AC, fridge, etc.)"
      },
      {
        "id": "gadgets-and-smart-de",
        "label": "Gadgets and smart devices"
      },
      {
        "id": "all-types-of-electro",
        "label": "All types of electronics"
      }
    ],
    "required": true,
    "scoring": {
      "home-appliances-tv-a": {
        "complexityPoints": 5
      },
      "gadgets-and-smart-de": {
        "complexityPoints": 5
      },
      "all-types-of-electro": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "electronics",
    "question": "Do you also offer repair or service?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-repair-is-my-mai",
        "label": "Yes — repair is my main business"
      },
      {
        "id": "yes-repair-is-an-add",
        "label": "Yes — repair is an additional service"
      },
      {
        "id": "no-only-retail-sales",
        "label": "No — only retail sales"
      }
    ],
    "required": true,
    "scoring": {
      "yes-repair-is-my-mai": {
        "complexityPoints": 10
      },
      "yes-repair-is-an-add": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "electronics",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "sell-products-online",
        "label": "🛒 Sell products online"
      },
      {
        "id": "show-what-s-in-stock",
        "label": "📋 Show what's in stock and attract customers"
      },
      {
        "id": "get-more-repair-and-",
        "label": "🔧 Get more repair and service bookings"
      },
      {
        "id": "build-brand-awarenes",
        "label": "📢 Build brand awareness in my city"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "sell-products-online": {
        "complexityPoints": 20
      },
      "show-what-s-in-stock": {
        "complexityPoints": 5
      },
      "get-more-repair-and-": {
        "complexityPoints": 10
      },
      "build-brand-awarenes": {
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
    "industry": "electronics",
    "question": "What should customers be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "buy-products-online",
        "label": "🛒 Buy products online"
      },
      {
        "id": "check-product-availa",
        "label": "📋 Check product availability and prices"
      },
      {
        "id": "book-a-repair-or-ser",
        "label": "🔧 Book a repair or service appointment"
      },
      {
        "id": "contact-via-whatsapp",
        "label": "💬 Contact via WhatsApp for price enquiry"
      },
      {
        "id": "visit-the-store-for-",
        "label": "🏪 Visit the store for purchase"
      },
      {
        "id": "compare-products",
        "label": "🔍 Compare products"
      }
    ],
    "required": true,
    "scoring": {
      "buy-products-online": {
        "complexityPoints": 20
      },
      "check-product-availa": {
        "complexityPoints": 5
      },
      "book-a-repair-or-ser": {
        "complexityPoints": 10
      },
      "contact-via-whatsapp": {
        "complexityPoints": 5
      },
      "compare-products": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "electronics",
    "question": "How many products will you list?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-100-produ",
        "label": "Fewer than 100 products"
      },
      {
        "id": "100-to-500-products",
        "label": "100 to 500 products"
      },
      {
        "id": "more-than-500-produc",
        "label": "More than 500 products"
      }
    ],
    "required": true,
    "scoring": {
      "fewer-than-100-produ": {
        "complexityPoints": 5
      },
      "100-to-500-products": {
        "complexityPoints": 15
      },
      "more-than-500-produc": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "electronics",
    "question": "How do you currently manage repair bookings?",
    "inputType": "single-select",
    "options": [
      {
        "id": "walk-in-only",
        "label": "Walk-in only"
      },
      {
        "id": "phone-calls-and-what",
        "label": "Phone calls and WhatsApp"
      },
      {
        "id": "i-want-an-online-rep",
        "label": "I want an online repair booking system"
      }
    ],
    "required": true,
    "scoring": {
      "phone-calls-and-what": {
        "complexityPoints": 5
      },
      "i-want-an-online-rep": {
        "complexityPoints": 15
      }
    }
  }
];
