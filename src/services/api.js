// This file serves as a central place to handle all data fetching and submissions.
// When you are ready to connect a real backend, you only need to update the logic here.

// Mock Pricing Data (Move this to your Database later)
const PRICING_CONFIG = {
    basePrice: 150000,
    labels: {
        totalProject: "Total Project Value",
        agreement: "Setup Fee",
        emi: "Monthly Subscription",
        amc: "Support & Maintenance"
    },
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

// Live API Endpoint
const API_BASE_URL = 'https://api.thevibecoderagency.online/api';

/**
 * Fetch Pricing Configuration
 */
export const fetchPricingConfig = async () => {
    try {
        // Restoring the original endpoint structure: /api/axomitlab/config
        const response = await fetch(`${API_BASE_URL}/axomitlab/config`);
        const json = await response.json();
        return json.success ? json.data : PRICING_CONFIG;
    } catch (error) {
        console.warn("Using fallback pricing config due to API error:", error);
        return PRICING_CONFIG;
    }
};

/**
 * Submit Cost Estimate Lead
 * Replace with: await axios.post('/api/leads/estimate', data);
 */
export const submitEstimate = async (data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/axomitlab/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formType: 'estimate',
                leadInfo: data.leadInfo,
                selection: {
                    projectType: data.projectType,
                    complexity: data.complexity,
                    addons: data.addons,
                    deliveryMode: data.deliveryMode,
                    tenureYears: data.tenureYears,
                    payUpfront: data.payUpfront
                },
                quotation: {
                    currency: "INR",
                    totalProjectValue: data.quotation.totalProjectValue,
                    upfrontFee: data.quotation.upfrontFee,
                    monthlySubscription: data.quotation.monthlySubscription,
                    subscriptionDuration: data.quotation.subscriptionDuration,
                    deliveryTime: data.quotation.deliveryTime,
                    includesMaintenance: true,
                    maintenanceCost: data.quotation.maintenanceCost
                }
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error submitting estimate:", error);
        throw error;
    }
};

export const submitContactForm = async (data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/axomitlab/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formType: 'contact',
                leadInfo: data
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
};

export const getLeads = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/axomitlab/leads`);
        if (!response.ok) throw new Error('Failed to fetch leads');
        const json = await response.json();
        // The API returns { success: true, count: N, data: [...] }
        return json.data || [];
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw error;
    }
};

export const updateLead = async (id, updates) => {
    try {
        const response = await fetch(`${API_BASE_URL}/axomitlab/leads/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates),
        });
        if (!response.ok) throw new Error('Failed to update lead');
        return await response.json();
    } catch (error) {
        console.error("Error updating lead:", error);
        throw error;
    }
};
