export const mediaQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "media",
    "question": "What type of content do you create?",
    "inputType": "single-select",
    "options": [
      { "id": "podcast", "label": "Podcast" },
      { "id": "influencer", "label": "Influencer / personal brand content" },
      { "id": "local-news", "label": "Local news or blog outlet" },
      { "id": "band", "label": "Band or musician" },
      { "id": "multiple", "label": "Multiple formats (video, audio, written)" }
    ],
    "required": true,
    "scoring": {
      "podcast": 5,
      "influencer": 5,
      "local-news": 10,
      "band": 5,
      "multiple": 15
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "media",
    "question": "How do you currently monetise or grow your audience?",
    "inputType": "single-select",
    "options": [
      { "id": "not-monetising", "label": "Not monetising yet — building an audience" },
      { "id": "sponsorships", "label": "Sponsorships / brand deals" },
      { "id": "subscription", "label": "Subscription or membership (Patreon, etc.)" },
      { "id": "ticket-sales", "label": "Ticket/merch sales" },
      { "id": "multiple", "label": "Multiple monetisation streams" }
    ],
    "required": true,
    "scoring": {
      "not-monetising": 0,
      "sponsorships": 5,
      "subscription": 15,
      "ticket-sales": 10,
      "multiple": 20
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "media",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      { "id": "content-hub", "label": "🎧 Create a hub for all my content outside social media" },
      { "id": "convert-paying", "label": "💰 Convert followers into paying subscribers/members" },
      { "id": "sell-tickets", "label": "🎟️ Sell tickets for shows or events" },
      { "id": "publish-articles", "label": "📰 Publish articles and grow readership" },
      { "id": "all-above", "label": "✨ All of the above" }
    ],
    "required": true,
    "scoring": {
      "content-hub": 10,
      "convert-paying": 20,
      "sell-tickets": 15,
      "publish-articles": 10,
      "all-above": 25
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "media",
    "question": "Where does your audience currently find you?",
    "inputType": "multi-select",
    "options": [
      { "id": "youtube-spotify", "label": "YouTube / Spotify" },
      { "id": "insta-tiktok", "label": "Instagram / TikTok" },
      { "id": "twitter", "label": "Twitter / X" },
      { "id": "existing-site", "label": "Existing website" },
      { "id": "word-of-mouth", "label": "Word of mouth" }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "media",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      { "id": "embedded-player", "label": "🎧 Listen to or watch embedded audio/video content" },
      { "id": "membership", "label": "💳 Subscribe via Patreon or a membership integration" },
      { "id": "ticket-sales", "label": "🎟️ Buy tickets for an event or tour" },
      { "id": "read-articles", "label": "📰 Read articles or blog posts" },
      { "id": "merch-store", "label": "🛍️ Browse and buy merchandise" },
      { "id": "contact", "label": "💬 Contact for bookings or press" }
    ],
    "required": true,
    "scoring": {
      "embedded-player": 15,
      "membership": 20,
      "ticket-sales": 15,
      "read-articles": 10,
      "merch-store": 15,
      "contact": 5
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "media",
    "question": "Which platform should the embedded player pull from?",
    "inputType": "single-select",
    "options": [
      { "id": "spotify-apple", "label": "Spotify / Apple Podcasts embed" },
      { "id": "youtube", "label": "YouTube embed" },
      { "id": "self-hosted", "label": "Self-hosted audio/video player" },
      { "id": "multiple", "label": "Multiple platforms combined" }
    ],
    "required": true,
    "scoring": {
      "spotify-apple": 10,
      "youtube": 10,
      "self-hosted": 15,
      "multiple": 20
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "media",
    "question": "How do you want ticket sales handled?",
    "inputType": "single-select",
    "options": [
      { "id": "link-out", "label": "Link out to an existing ticketing platform" },
      { "id": "on-site", "label": "Full on-site ticket purchase with payment gateway" },
      { "id": "both", "label": "Both — on-site for some events, links for others" }
    ],
    "required": true,
    "scoring": {
      "link-out": 5,
      "on-site": 25,
      "both": 15
    }
  }
];
