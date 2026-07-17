export const photographyQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "photography",
    "question": "What type of photography do you specialise in?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "wedding-and-pre-wedd",
        "label": "Wedding and pre-wedding photography"
      },
      {
        "id": "portrait-and-persona",
        "label": "Portrait and personal photography"
      },
      {
        "id": "event-and-corporate-",
        "label": "Event and corporate photography"
      },
      {
        "id": "product-and-commerci",
        "label": "Product and commercial photography"
      },
      {
        "id": "fashion-and-lifestyl",
        "label": "Fashion and lifestyle photography"
      },
      {
        "id": "videography-and-reel",
        "label": "Videography and reels"
      }
    ],
    "required": true,
    "scoring": {
      "wedding-and-pre-wedd": {
        "complexityPoints": 5
      },
      "event-and-corporate-": {
        "complexityPoints": 5
      },
      "product-and-commerci": {
        "complexityPoints": 10
      },
      "fashion-and-lifestyl": {
        "complexityPoints": 5
      },
      "videography-and-reel": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "photography",
    "question": "How would you describe your studio?",
    "inputType": "single-select",
    "options": [
      {
        "id": "individual-photograp",
        "label": "Individual photographer"
      },
      {
        "id": "small-studio-with-2-",
        "label": "Small studio with 2–4 photographers"
      },
      {
        "id": "mid-size-studio-with",
        "label": "Mid-size studio with 5+ team members"
      }
    ],
    "required": true,
    "scoring": {
      "small-studio-with-2-": {
        "complexityPoints": 10
      },
      "mid-size-studio-with": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "photography",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "show-my-portfolio-an",
        "label": "🖼️ Show my portfolio and attract premium clients"
      },
      {
        "id": "get-booking-enquirie",
        "label": "📅 Get booking enquiries and confirmations"
      },
      {
        "id": "build-a-high-end-per",
        "label": "💎 Build a high-end personal brand"
      },
      {
        "id": "showcase-my-photogra",
        "label": "🎥 Showcase my photography and video work"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "show-my-portfolio-an": {
        "complexityPoints": 10
      },
      "get-booking-enquirie": {
        "complexityPoints": 10
      },
      "build-a-high-end-per": {
        "complexityPoints": 10
      },
      "showcase-my-photogra": {
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
    "industry": "photography",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "view-my-photo-and-vi",
        "label": "🖼️ View my photo and video portfolio"
      },
      {
        "id": "book-a-photography-s",
        "label": "📅 Book a photography session"
      },
      {
        "id": "view-packages-and-pr",
        "label": "💰 View packages and pricing"
      },
      {
        "id": "download-a-sample-al",
        "label": "📥 Download a sample album or lookbook"
      },
      {
        "id": "read-client-testimon",
        "label": "⭐ Read client testimonials"
      },
      {
        "id": "contact-on-whatsapp",
        "label": "💬 Contact on WhatsApp"
      }
    ],
    "required": true,
    "scoring": {
      "view-my-photo-and-vi": {
        "complexityPoints": 10
      },
      "book-a-photography-s": {
        "complexityPoints": 15
      },
      "view-packages-and-pr": {
        "complexityPoints": 5
      },
      "download-a-sample-al": {
        "complexityPoints": 10
      },
      "read-client-testimon": {
        "complexityPoints": 5
      },
      "contact-on-whatsapp": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "photography",
    "question": "How many photos or projects do you want to showcase?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-30-photos",
        "label": "Fewer than 30 photos"
      },
      {
        "id": "30-to-100-photos",
        "label": "30 to 100 photos"
      },
      {
        "id": "more-than-100-photos",
        "label": "More than 100 photos"
      }
    ],
    "required": true,
    "scoring": {
      "30-to-100-photos": {
        "complexityPoints": 10
      },
      "more-than-100-photos": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "photography",
    "question": "Do you want clients to book and confirm a date online?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-with-a-calendar-",
        "label": "Yes — with a calendar and confirmation"
      },
      {
        "id": "yes-just-a-booking-e",
        "label": "Yes — just a booking enquiry form"
      },
      {
        "id": "no-i-confirm-via-wha",
        "label": "No — I confirm via WhatsApp manually"
      }
    ],
    "required": true,
    "scoring": {
      "yes-with-a-calendar-": {
        "complexityPoints": 15
      },
      "yes-just-a-booking-e": {
        "complexityPoints": 5
      }
    }
  }
];
