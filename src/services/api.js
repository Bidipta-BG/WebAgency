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
// const API_BASE_URL = 'http://localhost:3001/api';

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
export const submitEstimate = async (data, editId = null) => {
    try {
        const url = editId ? `${API_BASE_URL}/axomitlab/leads/${editId}` : `${API_BASE_URL}/axomitlab/leads`;
        const method = editId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Error submitting estimate:", error);
        throw error;
    }
};

export const submitContactForm = async (data) => {
    try {
        const { subject, message, ...restLeadInfo } = data;
        const readableAnswers = [];
        if (subject) readableAnswers.push({ question: "Subject", answer: subject });
        if (message) readableAnswers.push({ question: "Message", answer: message });

        const response = await fetch(`${API_BASE_URL}/axomitlab/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formType: 'contact',
                leadInfo: restLeadInfo,
                readableAnswers: readableAnswers
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
};

export const submitMarketingForm = async (data, answers) => {
    try {
        const response = await fetch(`${API_BASE_URL}/axomitlab/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formType: 'marketing-enquiry',
                leadInfo: data,
                answers: answers
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error submitting marketing form:", error);
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

export const getLead = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/axomitlab/leads/${id}`);
        if (!response.ok) throw new Error('Failed to fetch lead');
        const json = await response.json();
        return json.data || null;
    } catch (error) {
        console.error("Error fetching lead:", error);
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

/**
 * Devotional Apps API Methods
 */

export const getAppGallery = async (appSlug) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${appSlug}/gallery`);
        if (!response.ok) throw new Error(`Failed to fetch ${appSlug} gallery`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${appSlug} gallery:`, error);
        throw error;
    }
};

export const createAppCategory = async (appSlug, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${appSlug}/category`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error(`Error creating category for ${appSlug}:`, error);
        throw error;
    }
};

export const createAppImage = async (appSlug, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${appSlug}/image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error(`Error creating image for ${appSlug}:`, error);
        throw error;
    }
};

export const createAppHeroSection = async (appSlug, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${appSlug}/hero-section`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error(`Error creating hero section for ${appSlug}:`, error);
        throw error;
    }
};

/**
 * Global File Upload to S3
 */
export const uploadFileToS3 = async (file, folder) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        if (folder) {
            formData.append('folder', folder);
        }

        const response = await fetch(`${API_BASE_URL}/upload/file`, {
            method: 'POST',
            body: formData,
            // Note: Don't set Content-Type header manually when using FormData, browser will set it with boundary
        });
        
        // Handle HTML 404 errors gracefully
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} - Ensure the backend endpoint exists.`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};
