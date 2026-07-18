export const logisticsQuestions = [
  {
    id: "Q1",
    step: 1,
    industry: "logistics",
    question: "What type of transportation or logistics service do you provide?",
    inputType: "multi-select",
    options: [
      { id: "trucking", label: "Trucking / freight transport" },
      { id: "courier", label: "Courier or parcel delivery" },
      { id: "packers-movers", label: "Packers and movers (household/office relocation)" },
      { id: "freight-forwarding", label: "Freight forwarding / customs clearance" },
      { id: "warehousing", label: "Warehousing and supply chain" },
      { id: "multiple-services", label: "Multiple logistics services" }
    ],
    required: true,
    scoring: {
      "trucking": { complexityPoints: 10 },
      "courier": { complexityPoints: 5 },
      "packers-movers": { complexityPoints: 5 },
      "freight-forwarding": { complexityPoints: 15 },
      "warehousing": { complexityPoints: 10 },
      "multiple-services": { complexityPoints: 20 }
    }
  },
  {
    id: "Q2",
    step: 1,
    industry: "logistics",
    question: "How large is your fleet or operation?",
    inputType: "single-select",
    options: [
      { id: "small", label: "Small (fewer than 10 vehicles)" },
      { id: "medium", label: "Medium (10 to 50 vehicles)" },
      { id: "large", label: "Large (50+ vehicles / multi-city operations)" }
    ],
    required: true,
    scoring: {
      "small": { complexityPoints: 0 },
      "medium": { complexityPoints: 15 },
      "large": { complexityPoints: 30 }
    }
  },
  {
    id: "Q3",
    step: 2,
    industry: "logistics",
    question: "What is the main thing you want your website to do?",
    inputType: "single-select",
    options: [
      { id: "get-enquiries", label: "📦 Get more shipment or booking enquiries" },
      { id: "track-shipment", label: "📍 Let customers track their shipment in real time" },
      { id: "instant-quote", label: "💰 Let customers get an instant freight/shipping quote" },
      { id: "build-credibility", label: "🤝 Build credibility with B2B clients for long-term contracts" },
      { id: "all", label: "✨ All of the above" }
    ],
    required: true,
    scoring: {
      "get-enquiries": { complexityPoints: 10 },
      "track-shipment": { complexityPoints: 20 },
      "instant-quote": { complexityPoints: 15 },
      "build-credibility": { complexityPoints: 10 },
      "all": { complexityPoints: 30 }
    }
  },
  {
    id: "Q4",
    step: 2,
    industry: "logistics",
    question: "How do clients currently book or contact you?",
    inputType: "multi-select",
    options: [
      { id: "phone", label: "Phone call" },
      { id: "whatsapp", label: "WhatsApp" },
      { id: "email", label: "Email / direct enquiry" },
      { id: "referrals", label: "Referrals from existing clients" },
      { id: "marketplaces", label: "Freight marketplaces / aggregators" }
    ],
    required: false,
    scoring: {}
  },
  {
    id: "Q5",
    step: 2,
    industry: "logistics",
    question: "What should visitors be able to do on your website?",
    inputType: "multi-select",
    options: [
      { id: "track-shipment", label: "📍 Track a shipment or delivery by ID" },
      { id: "instant-quote", label: "💰 Get an instant quote based on weight/distance/route" },
      { id: "view-routes", label: "📋 View service routes and coverage areas" },
      { id: "book-pickup", label: "📅 Book a pickup or schedule a shipment" },
      { id: "download-rates", label: "📄 Download rate cards or service brochures" },
      { id: "whatsapp-contact", label: "💬 Contact on WhatsApp" },
      { id: "view-fleet", label: "🚛 View fleet types and capacity" }
    ],
    required: true,
    scoring: {
      "track-shipment": { complexityPoints: 20 },
      "instant-quote": { complexityPoints: 15 },
      "view-routes": { complexityPoints: 5 },
      "book-pickup": { complexityPoints: 15 },
      "download-rates": { complexityPoints: 5 },
      "whatsapp-contact": { complexityPoints: 5 },
      "view-fleet": { complexityPoints: 5 }
    }
  },
  {
    id: "Q6",
    step: 2,
    industry: "logistics",
    question: "What kind of shipment tracking do you need?",
    inputType: "single-select",
    options: [
      { id: "simple-status", label: "Simple status lookup (Booked / In Transit / Delivered)" },
      { id: "live-gps", label: "Live GPS map tracking" },
      { id: "software-integration", label: "Integration with an existing fleet/tracking software" }
    ],
    required: true,
    scoring: {
      "simple-status": { complexityPoints: 15 },
      "live-gps": { complexityPoints: 25 },
      "software-integration": { complexityPoints: 20 }
    }
  },
  {
    id: "Q7",
    step: 2,
    industry: "logistics",
    question: "How should the instant quote be calculated?",
    inputType: "single-select",
    options: [
      { id: "flat-rate", label: "Flat rate by route/zone" },
      { id: "weight-distance", label: "Calculated by weight + distance" },
      { id: "weight-distance-cargo", label: "Calculated by weight + distance + cargo type (fragile, refrigerated, etc.)" }
    ],
    required: true,
    scoring: {
      "flat-rate": { complexityPoints: 10 },
      "weight-distance": { complexityPoints: 15 },
      "weight-distance-cargo": { complexityPoints: 20 }
    }
  }
];
