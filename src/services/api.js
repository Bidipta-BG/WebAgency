// This file serves as a central place to handle all data fetching and submissions.
// When you are ready to connect a real backend, you only need to update the logic here.

// Mock Pricing Data (Move this to your Database later)
const PRICING_CONFIG = {
    basePrice: 150000,
    projectTypes: {
        mobile: { multiplier: 1.5, weeks: 4 },
        both: { multiplier: 2.2, weeks: 8 },
        default: { multiplier: 1, weeks: 4 }
    },
    complexities: {
        standard: { multiplier: 1.5, weeks: 6 },
        enterprise: { multiplier: 2.5, weeks: 16 },
        default: { multiplier: 1, weeks: 0 }
    },
    powerUps: [
        {
            id: 'ai',
            label: 'AI Integration',
            info: 'Chatbots, Recommendations, Automation',
            baseCost: 80000,
            baseTime: 2,
            subs: [
                { id: 'ai-chat', label: 'Custom Chatbot', cost: 30000, time: 1 },
                { id: 'ai-rec', label: 'Recommendation Engine', cost: 50000, time: 2 },
                { id: 'ai-gen', label: 'Generative Content', cost: 60000, time: 2 },
            ]
        },
        {
            id: 'payment',
            label: 'Payment Gateway',
            info: 'Razorpay, Stripe, UPI Integration',
            baseCost: 20000,
            baseTime: 1,
            subs: [
                { id: 'pay-dom', label: 'Domestic (UPI/Cards)', cost: 10000, time: 0.5 },
                { id: 'pay-intl', label: 'International (Stripe/PayPal)', cost: 25000, time: 1 },
                { id: 'pay-sub', label: 'Subscription Logic', cost: 30000, time: 1 },
            ]
        },
        {
            id: 'admin',
            label: 'Admin Panel',
            info: 'Dashboard to manage users & content',
            baseCost: 40000,
            baseTime: 2,
            subs: [
                { id: 'adm-basic', label: 'Basic CRUD', cost: 15000, time: 1 },
                { id: 'adm-analytics', label: 'Analytics Dashboard', cost: 35000, time: 1.5 },
                { id: 'adm-roles', label: 'Role-Based Access', cost: 20000, time: 1 },
            ]
        },
        {
            id: 'seo',
            label: 'Advanced SEO',
            info: 'Ranking optimization & Analytics',
            baseCost: 25000,
            baseTime: 1,
            subs: [
                { id: 'seo-tech', label: 'Technical SEO', cost: 10000, time: 0.5 },
                { id: 'seo-blog', label: 'Blog System', cost: 20000, time: 1 },
            ]
        },
        {
            id: 'chat',
            label: 'Real-time Chat',
            info: 'Live support or user-to-user chat',
            baseCost: 35000,
            baseTime: 2,
            subs: [
                { id: 'chat-p2p', label: 'User-to-User', cost: 25000, time: 1 },
                { id: 'chat-group', label: 'Group Groups', cost: 35000, time: 1.5 },
            ]
        },
        {
            id: 'multi',
            label: 'Multilingual',
            info: 'Support for local & intl languages',
            baseCost: 30000,
            baseTime: 1.5,
            subs: [
                { id: 'lang-2', label: 'Bi-lingual', cost: 15000, time: 0.5 },
                { id: 'lang-auto', label: 'Auto-Translate API', cost: 25000, time: 1 },
            ]
        },
    ]
};

// --- API Methods ---

/**
 * Fetch Pricing Configuration
 * Replace this return with: return await axios.get('/api/pricing-config');
 */
export const fetchPricingConfig = async () => {
    // Simulate network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRICING_CONFIG);
        }, 500);
    });
};

/**
 * Submit Cost Estimate Lead
 * Replace with: await axios.post('/api/leads/estimate', data);
 */
export const submitEstimate = async (data) => {
    console.log("Submitting Estimate to Backend:", data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: "Estimate sent successfully" });
        }, 1000);
    });
};

/**
 * Submit General Contact Form
 * Replace with: await axios.post('/api/leads/contact', data);
 */
export const submitContactForm = async (data) => {
    console.log("Submitting Contact Form to Backend:", data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: "Contact request received" });
        }, 1000);
    });
};
