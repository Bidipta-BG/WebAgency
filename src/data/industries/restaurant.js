export const restaurantQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "restaurant",
    "question": "What type of food business do you run?",
    "inputType": "single-select",
    "options": [
      {
        "id": "restaurant-with-dine",
        "label": "Restaurant with dine-in"
      },
      {
        "id": "caf-or-coffee-shop",
        "label": "Café or coffee shop"
      },
      {
        "id": "cloud-kitchen-or-del",
        "label": "Cloud kitchen or delivery-only"
      },
      {
        "id": "bakery-or-sweet-shop",
        "label": "Bakery or sweet shop"
      },
      {
        "id": "bar-or-lounge",
        "label": "Bar or lounge"
      },
      {
        "id": "food-truck-or-street",
        "label": "Food truck or street food"
      },
      {
        "id": "multiple-outlets-wit",
        "label": "Multiple outlets with different concepts"
      }
    ],
    "required": true,
    "scoring": {
      "cloud-kitchen-or-del": {
        "complexityPoints": 10
      },
      "bakery-or-sweet-shop": {
        "complexityPoints": 5
      },
      "bar-or-lounge": {
        "complexityPoints": 5
      },
      "multiple-outlets-wit": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "restaurant",
    "question": "How many locations do you operate from?",
    "inputType": "single-select",
    "options": [
      {
        "id": "just-one-location",
        "label": "Just one location"
      },
      {
        "id": "2-to-5-locations",
        "label": "2 to 5 locations"
      },
      {
        "id": "more-than-5-location",
        "label": "More than 5 locations"
      }
    ],
    "required": true,
    "scoring": {
      "2-to-5-locations": {
        "complexityPoints": 20
      },
      "more-than-5-location": {
        "complexityPoints": 35
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "restaurant",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "bring-more-dine-in-c",
        "label": "👥 Bring more dine-in customers"
      },
      {
        "id": "let-customers-order-",
        "label": "🛵 Let customers order food online for delivery"
      },
      {
        "id": "show-our-menu-and-at",
        "label": "📖 Show our menu and attract foodies"
      },
      {
        "id": "allow-customers-to-r",
        "label": "🪑 Allow customers to reserve a table"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "bring-more-dine-in-c": {
        "complexityPoints": 5
      },
      "let-customers-order-": {
        "complexityPoints": 20
      },
      "show-our-menu-and-at": {
        "complexityPoints": 5
      },
      "allow-customers-to-r": {
        "complexityPoints": 15
      },
      "all-of-the-above": {
        "complexityPoints": 30
      }
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "restaurant",
    "question": "How do customers find or order from you today?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "zomato",
        "label": "Zomato"
      },
      {
        "id": "swiggy",
        "label": "Swiggy"
      },
      {
        "id": "instagram-or-faceboo",
        "label": "Instagram or Facebook"
      },
      {
        "id": "phone-call",
        "label": "Phone call"
      },
      {
        "id": "walk-in-directly",
        "label": "Walk-in directly"
      },
      {
        "id": "whatsapp",
        "label": "WhatsApp"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "restaurant",
    "question": "What should customers be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "view-our-full-menu",
        "label": "📖 View our full menu"
      },
      {
        "id": "order-food-online-fo",
        "label": "🛵 Order food online for delivery"
      },
      {
        "id": "reserve-a-table",
        "label": "🪑 Reserve a table"
      },
      {
        "id": "see-photos-of-our-fo",
        "label": "📸 See photos of our food and ambiance"
      },
      {
        "id": "view-special-offers-",
        "label": "🎉 View special offers and deals"
      },
      {
        "id": "contact-us-on-whatsa",
        "label": "💬 Contact us on WhatsApp"
      },
      {
        "id": "get-directions-to-ou",
        "label": "📍 Get directions to our restaurant"
      }
    ],
    "required": true,
    "scoring": {
      "view-our-full-menu": {
        "complexityPoints": 5
      },
      "order-food-online-fo": {
        "complexityPoints": 20
      },
      "reserve-a-table": {
        "complexityPoints": 15
      },
      "see-photos-of-our-fo": {
        "complexityPoints": 5
      },
      "view-special-offers-": {
        "complexityPoints": 5
      },
      "contact-us-on-whatsa": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "restaurant",
    "question": "Do you want your own online ordering system or will you use Zomato/Swiggy?",
    "inputType": "single-select",
    "options": [
      {
        "id": "i-want-my-own-orderi",
        "label": "I want my own ordering system on my website"
      },
      {
        "id": "i-ll-continue-using-",
        "label": "I'll continue using Zomato and Swiggy — just link them"
      },
      {
        "id": "i-want-both",
        "label": "I want both"
      }
    ],
    "required": true,
    "scoring": {
      "i-want-my-own-orderi": {
        "complexityPoints": 20
      },
      "i-want-both": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "restaurant",
    "question": "How many tables do you have for reservations?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-10-tables",
        "label": "Fewer than 10 tables"
      },
      {
        "id": "10-to-30-tables",
        "label": "10 to 30 tables"
      },
      {
        "id": "more-than-30-tables",
        "label": "More than 30 tables"
      }
    ],
    "required": true,
    "scoring": {
      "fewer-than-10-tables": {
        "complexityPoints": 5
      },
      "10-to-30-tables": {
        "complexityPoints": 10
      },
      "more-than-30-tables": {
        "complexityPoints": 15
      }
    }
  }
];
