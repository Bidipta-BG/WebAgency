export const retailQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "retail",
    "question": "What do you primarily sell?",
    "inputType": "single-select",
    "options": [
      {
        "id": "clothing-and-fashion",
        "label": "Clothing and fashion"
      },
      {
        "id": "home-decor-and-furni",
        "label": "Home decor and furniture"
      },
      {
        "id": "gifts-and-lifestyle-",
        "label": "Gifts and lifestyle products"
      },
      {
        "id": "stationery-and-offic",
        "label": "Stationery and office supplies"
      },
      {
        "id": "hardware-or-tools",
        "label": "Hardware or tools"
      },
      {
        "id": "general-merchandise-",
        "label": "General merchandise (multiple categories)"
      }
    ],
    "required": true,
    "scoring": {
      "home-decor-and-furni": {
        "complexityPoints": 5
      },
      "general-merchandise-": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "retail",
    "question": "Where do you currently sell?",
    "inputType": "single-select",
    "options": [
      {
        "id": "only-at-my-physical-",
        "label": "Only at my physical store"
      },
      {
        "id": "at-my-store-and-also",
        "label": "At my store and also on WhatsApp or Instagram"
      },
      {
        "id": "on-e-commerce-platfo",
        "label": "On e-commerce platforms like Meesho or Amazon"
      },
      {
        "id": "i-want-to-start-sell",
        "label": "I want to start selling online — not doing it yet"
      }
    ],
    "required": true,
    "scoring": {
      "at-my-store-and-also": {
        "complexityPoints": 10
      },
      "on-e-commerce-platfo": {
        "complexityPoints": 10
      },
      "i-want-to-start-sell": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "retail",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "sell-products-online",
        "label": "🛒 Sell products online and grow revenue"
      },
      {
        "id": "showcase-my-products",
        "label": "🏪 Showcase my products and get people to visit the store"
      },
      {
        "id": "run-my-own-branded-o",
        "label": "📦 Run my own branded online store"
      },
      {
        "id": "build-my-brand-and-s",
        "label": "📢 Build my brand and stand out from competitors"
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
      "showcase-my-products": {
        "complexityPoints": 5
      },
      "run-my-own-branded-o": {
        "complexityPoints": 20
      },
      "build-my-brand-and-s": {
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
    "industry": "retail",
    "question": "What should customers be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "browse-and-buy-produ",
        "label": "🛒 Browse and buy products online"
      },
      {
        "id": "view-a-product-catal",
        "label": "📖 View a product catalogue"
      },
      {
        "id": "search-for-specific-",
        "label": "🔎 Search for specific products"
      },
      {
        "id": "view-prices-and-offe",
        "label": "💰 View prices and offers"
      },
      {
        "id": "contact-on-whatsapp-",
        "label": "💬 Contact on WhatsApp to order"
      },
      {
        "id": "find-my-store-locati",
        "label": "🏪 Find my store location"
      }
    ],
    "required": true,
    "scoring": {
      "browse-and-buy-produ": {
        "complexityPoints": 20
      },
      "view-a-product-catal": {
        "complexityPoints": 5
      },
      "search-for-specific-": {
        "complexityPoints": 10
      },
      "view-prices-and-offe": {
        "complexityPoints": 5
      },
      "contact-on-whatsapp-": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "retail",
    "question": "How many products do you want to list?",
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
    "industry": "retail",
    "question": "Do you want to accept online payments?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-full-payment-and",
        "label": "Yes — full payment and delivery management"
      },
      {
        "id": "yes-just-payment-i-l",
        "label": "Yes — just payment, I'll manage delivery manually"
      },
      {
        "id": "no-whatsapp-order-co",
        "label": "No — WhatsApp order confirmation and offline payment"
      }
    ],
    "required": true,
    "scoring": {
      "yes-full-payment-and": {
        "complexityPoints": 20
      },
      "yes-just-payment-i-l": {
        "complexityPoints": 15
      }
    }
  }
];
