export const jewelleryQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "jewellery",
    "question": "What type of jewellery do you primarily sell?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "traditional-and-gold",
        "label": "Traditional and gold jewellery"
      },
      {
        "id": "bridal-and-wedding-s",
        "label": "Bridal and wedding sets"
      },
      {
        "id": "silver-or-925-sterli",
        "label": "Silver or 925 sterling jewellery"
      },
      {
        "id": "handcrafted-or-artis",
        "label": "Handcrafted or artisan jewellery"
      },
      {
        "id": "imitation-and-fashio",
        "label": "Imitation and fashion jewellery"
      },
      {
        "id": "diamond-and-fine-jew",
        "label": "Diamond and fine jewellery"
      }
    ],
    "required": true,
    "scoring": {
      "bridal-and-wedding-s": {
        "complexityPoints": 5
      },
      "handcrafted-or-artis": {
        "complexityPoints": 5
      },
      "diamond-and-fine-jew": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "jewellery",
    "question": "How do you sell your jewellery?",
    "inputType": "single-select",
    "options": [
      {
        "id": "only-through-a-physi",
        "label": "Only through a physical store"
      },
      {
        "id": "through-physical-sto",
        "label": "Through physical store and also online"
      },
      {
        "id": "only-online-no-physi",
        "label": "Only online — no physical store"
      },
      {
        "id": "through-instagram-or",
        "label": "Through Instagram or WhatsApp catalogue"
      }
    ],
    "required": true,
    "scoring": {
      "through-physical-sto": {
        "complexityPoints": 15
      },
      "only-online-no-physi": {
        "complexityPoints": 20
      },
      "through-instagram-or": {
        "complexityPoints": 10
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "jewellery",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "sell-jewellery-onlin",
        "label": "🛒 Sell jewellery online"
      },
      {
        "id": "showcase-my-collecti",
        "label": "🖼️ Showcase my collection and attract store visitors"
      },
      {
        "id": "build-a-premium-bran",
        "label": "💍 Build a premium brand image"
      },
      {
        "id": "take-custom-order-en",
        "label": "📞 Take custom order enquiries"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "sell-jewellery-onlin": {
        "complexityPoints": 20
      },
      "showcase-my-collecti": {
        "complexityPoints": 5
      },
      "build-a-premium-bran": {
        "complexityPoints": 10
      },
      "take-custom-order-en": {
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
    "industry": "jewellery",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "browse-and-buy-jewel",
        "label": "🛒 Browse and buy jewellery online"
      },
      {
        "id": "view-collection-by-c",
        "label": "📖 View collection by category"
      },
      {
        "id": "request-a-custom-jew",
        "label": "💍 Request a custom jewellery order"
      },
      {
        "id": "see-prices-and-weigh",
        "label": "💰 See prices and weight details"
      },
      {
        "id": "contact-on-whatsapp-",
        "label": "💬 Contact on WhatsApp for orders"
      },
      {
        "id": "get-directions-to-th",
        "label": "🏪 Get directions to the showroom"
      }
    ],
    "required": true,
    "scoring": {
      "browse-and-buy-jewel": {
        "complexityPoints": 20
      },
      "view-collection-by-c": {
        "complexityPoints": 5
      },
      "request-a-custom-jew": {
        "complexityPoints": 10
      },
      "see-prices-and-weigh": {
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
    "industry": "jewellery",
    "question": "How many products do you want to list?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-50-produc",
        "label": "Fewer than 50 products"
      },
      {
        "id": "50-to-200-products",
        "label": "50 to 200 products"
      },
      {
        "id": "more-than-200-produc",
        "label": "More than 200 products"
      }
    ],
    "required": true,
    "scoring": {
      "50-to-200-products": {
        "complexityPoints": 15
      },
      "more-than-200-produc": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "jewellery",
    "question": "Do you want to accept online payment?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-full-payment-onl",
        "label": "Yes — full payment online"
      },
      {
        "id": "yes-advance-booking-",
        "label": "Yes — advance booking only, rest on delivery"
      },
      {
        "id": "no-cod-or-in-person-",
        "label": "No — COD or in-person payment only"
      }
    ],
    "required": true,
    "scoring": {
      "yes-full-payment-onl": {
        "complexityPoints": 15
      },
      "yes-advance-booking-": {
        "complexityPoints": 10
      }
    }
  }
];
