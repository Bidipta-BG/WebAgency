export const hotelQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "hotel",
    "question": "What type of property do you run?",
    "inputType": "single-select",
    "options": [
      {
        "id": "hotel-2-to-5-star",
        "label": "Hotel (2 to 5 star)"
      },
      {
        "id": "resort-or-retreat",
        "label": "Resort or retreat"
      },
      {
        "id": "guesthouse-or-lodge",
        "label": "Guesthouse or lodge"
      },
      {
        "id": "boutique-hotel-or-he",
        "label": "Boutique hotel or heritage property"
      },
      {
        "id": "homestay-or-bed-brea",
        "label": "Homestay or bed & breakfast"
      },
      {
        "id": "serviced-apartment",
        "label": "Serviced apartment"
      }
    ],
    "required": true,
    "scoring": {
      "hotel-2-to-5-star": {
        "complexityPoints": 5
      },
      "resort-or-retreat": {
        "complexityPoints": 10
      },
      "boutique-hotel-or-he": {
        "complexityPoints": 10
      },
      "serviced-apartment": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "hotel",
    "question": "How many rooms does your property have?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-10-rooms",
        "label": "Fewer than 10 rooms"
      },
      {
        "id": "10-to-30-rooms",
        "label": "10 to 30 rooms"
      },
      {
        "id": "31-to-100-rooms",
        "label": "31 to 100 rooms"
      },
      {
        "id": "more-than-100-rooms",
        "label": "More than 100 rooms"
      }
    ],
    "required": true,
    "scoring": {
      "10-to-30-rooms": {
        "complexityPoints": 10
      },
      "31-to-100-rooms": {
        "complexityPoints": 20
      },
      "more-than-100-rooms": {
        "complexityPoints": 35
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "hotel",
    "question": "What is the main thing you want your website to do?",
    "inputType": "single-select",
    "options": [
      {
        "id": "get-more-direct-book",
        "label": "🛎️ Get more direct bookings (without OTA commission)"
      },
      {
        "id": "showcase-rooms-and-f",
        "label": "🖼️ Showcase rooms and facilities to attract guests"
      },
      {
        "id": "build-reputation-and",
        "label": "⭐ Build reputation and get better reviews"
      },
      {
        "id": "target-corporate-and",
        "label": "💼 Target corporate and business travellers"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "get-more-direct-book": {
        "complexityPoints": 20
      },
      "showcase-rooms-and-f": {
        "complexityPoints": 5
      },
      "build-reputation-and": {
        "complexityPoints": 5
      },
      "target-corporate-and": {
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
    "industry": "hotel",
    "question": "Where do guests currently find and book your property?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "oyo-or-similar-aggre",
        "label": "OYO or similar aggregator"
      },
      {
        "id": "makemytrip-or-goibib",
        "label": "MakeMyTrip or Goibibo"
      },
      {
        "id": "booking-com-or-airbn",
        "label": "Booking.com or Airbnb"
      },
      {
        "id": "direct-phone-or-what",
        "label": "Direct phone or WhatsApp"
      },
      {
        "id": "google-search",
        "label": "Google search"
      },
      {
        "id": "walk-in",
        "label": "Walk-in"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "hotel",
    "question": "What should guests be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "check-availability-a",
        "label": "📅 Check availability and book directly"
      },
      {
        "id": "view-room-types-and-",
        "label": "🛏️ View room types and photos"
      },
      {
        "id": "see-amenities-and-fa",
        "label": "🏊 See amenities and facilities"
      },
      {
        "id": "view-tariff-and-pric",
        "label": "💰 View tariff and pricing"
      },
      {
        "id": "submit-corporate-or-",
        "label": "💼 Submit corporate or group booking inquiry"
      },
      {
        "id": "get-directions-and-l",
        "label": "📍 Get directions and location info"
      },
      {
        "id": "contact-us-on-whatsa",
        "label": "💬 Contact us on WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "check-availability-a": {
        "complexityPoints": 20
      },
      "view-room-types-and-": {
        "complexityPoints": 5
      },
      "see-amenities-and-fa": {
        "complexityPoints": 5
      },
      "view-tariff-and-pric": {
        "complexityPoints": 5
      },
      "submit-corporate-or-": {
        "complexityPoints": 15
      },
      "contact-us-on-whatsa": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "hotel",
    "question": "Do you want guests to book and pay directly on your site?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-i-want-online-pa",
        "label": "Yes — I want online payment and instant confirmation"
      },
      {
        "id": "no-i-want-them-to-en",
        "label": "No — I want them to enquire and I'll confirm manually"
      },
      {
        "id": "i-want-both-options",
        "label": "I want both options"
      }
    ],
    "required": true,
    "scoring": {
      "yes-i-want-online-pa": {
        "complexityPoints": 20
      },
      "no-i-want-them-to-en": {
        "complexityPoints": 5
      },
      "i-want-both-options": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "hotel",
    "question": "Do you have additional facilities to showcase?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "restaurant-or-dining",
        "label": "Restaurant or dining"
      },
      {
        "id": "swimming-pool",
        "label": "Swimming pool"
      },
      {
        "id": "spa-or-wellness-cent",
        "label": "Spa or wellness centre"
      },
      {
        "id": "conference-or-event-",
        "label": "Conference or event hall"
      },
      {
        "id": "adventure-activities",
        "label": "Adventure activities"
      },
      {
        "id": "none-of-the-above",
        "label": "None of the above"
      }
    ],
    "required": true,
    "scoring": {
      "restaurant-or-dining": {
        "complexityPoints": 5
      },
      "swimming-pool": {
        "complexityPoints": 5
      },
      "spa-or-wellness-cent": {
        "complexityPoints": 5
      },
      "conference-or-event-": {
        "complexityPoints": 10
      },
      "adventure-activities": {
        "complexityPoints": 5
      }
    }
  }
];
