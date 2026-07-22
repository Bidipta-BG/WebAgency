"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, CheckCircle2, TrendingUp, Loader2 } from 'lucide-react';
import { submitMarketingForm } from '@/services/api';

const industriesList = [
    { id: 'salon', name: 'Salon & Spa' },
    { id: 'gym', name: 'Gym & Fitness' },
    { id: 'clinic', name: 'Clinic & Hospital' },
    { id: 'restaurant', name: 'Restaurant & Café' },
    { id: 'hotel', name: 'Hotel & Hospitality' },
    { id: 'school', name: 'School & Coaching' },
    { id: 'realestate', name: 'Real Estate' },
    { id: 'lawfirm', name: 'Law Firm' },
    { id: 'cafirm', name: 'CA & Accounting' },
    { id: 'travel', name: 'Travel Agency' },
    { id: 'construction', name: 'Construction' },
    { id: 'interior', name: 'Interior Designer' },
    { id: 'jewellery', name: 'Jewellery' },
    { id: 'retail', name: 'Retail Shop' },
    { id: 'electronics', name: 'Electronics Store' },
    { id: 'photography', name: 'Photography' },
    { id: 'events', name: 'Event Planner' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'ngo', name: 'NGO / Non-Profit' },
    { id: 'automotive', name: 'Automotive & Dealerships' },
    { id: 'trades', name: 'Trades & Home Services' },
    { id: 'coaching', name: 'Consulting & Coaching' },
    { id: 'finance', name: 'Finance & Insurance' },
    { id: 'architecture', name: 'Architecture & Engineering' },
    { id: 'saas', name: 'Tech Startups & SaaS' },
    { id: 'media', name: 'Entertainment & Media' },
    { id: 'logistics', name: 'Transportation & Logistics' },
    { id: 'others', name: 'Others' }
];

const checkListItems = [
    { id: 'website', label: 'I have a live website' },
    { id: 'gmb', label: 'I have a Google Business Profile (Google Maps)' },
    { id: 'instagram', label: 'I have an Instagram page' },
    { id: 'facebook', label: 'I have a Facebook page' },
    { id: 'linkedin', label: 'I have a LinkedIn page' },
    { id: 'ads', label: 'I run paid ads (Google/Meta Ads)' },
    { id: 'content', label: 'I post content regularly' },
    { id: 'none', label: 'None of the above — starting from scratch' }
];

const budgetOptions = [
    "Under ₹5,000/month",
    "₹5,000 – ₹15,000/month",
    "₹15,000 – ₹30,000/month",
    "₹30,000+/month",
    "I'm not sure yet"
];

export default function MarketingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        city: '',
        industry: '',
        presence: [],
        budget: ''
    });

    const handleCheck = (id) => {
        if (id === 'none') {
            setFormData(prev => ({ ...prev, presence: ['none'] }));
            return;
        }
        setFormData(prev => {
            const newPresence = prev.presence.filter(p => p !== 'none');
            if (newPresence.includes(id)) {
                return { ...prev, presence: newPresence.filter(p => p !== id) };
            } else {
                return { ...prev, presence: [...newPresence, id] };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const leadInfo = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                businessName: formData.businessName,
                city: formData.city
            };
            const answers = {
                industry: formData.industry,
                presence: formData.presence,
                budget: formData.budget
            };
            
            await submitMarketingForm(leadInfo, answers);
            setIsSuccess(true);
        } catch (error) {
            console.error("Failed to submit", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-surface-muted min-h-screen">
            <Navbar />
            
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Column: Hero Content */}
                    <div className="sticky top-32">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold mb-6 border border-accent/20">
                            <Target className="w-4 h-4" />
                            AI-Powered Marketing
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Your website is ready! <br/>
                            <span className="text-accent">Now let's get customers.</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                            We use advanced AI tools to speed up content creation, optimize your Google Business profile, and run high-converting ad campaigns. Tell us where you currently stand, and we'll craft a custom growth strategy.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span>Google Business Profile Optimization</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span>Social Media Content Management</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span>Targeted Paid Ad Campaigns</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span>SEO & Online Visibility</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="bg-surface p-8 lg:p-10 rounded-[2rem] border border-surface-highlight shadow-2xl">
                        {isSuccess ? (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <TrendingUp className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                                <p className="text-slate-400 text-lg max-w-sm mx-auto">
                                    Thank you! Our marketing experts will review your online presence and call you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Get a Free Marketing Assessment</h3>
                                <p className="text-slate-400 text-sm mb-8">Fill out this quick form so we understand your business.</p>

                                {/* Section A: About You */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-2">Your Name *</label>
                                            <input required type="text" className="w-full bg-surface-highlight border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number *</label>
                                            <input required type="tel" className="w-full bg-surface-highlight border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Email Address *</label>
                                        <input required type="email" className="w-full bg-surface-highlight border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                                    </div>
                                </div>

                                {/* Section B: Your Business */}
                                <div className="space-y-4 pt-4 border-t border-surface-highlight">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-2">Business Name</label>
                                            <input type="text" className="w-full bg-surface-highlight border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-2">City</label>
                                            <input type="text" className="w-full bg-surface-highlight border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Industry Type</label>
                                        <select required className="w-full bg-surface-highlight border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent appearance-none" value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})}>
                                            <option value="">Select an industry...</option>
                                            {industriesList.map(ind => (
                                                <option key={ind.id} value={ind.id}>{ind.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Section C: Checklist */}
                                <div className="space-y-4 pt-4 border-t border-surface-highlight">
                                    <label className="block text-sm font-medium text-slate-400 mb-4">Your Current Online Presence (Tick all that apply)</label>
                                    <div className="space-y-3">
                                        {checkListItems.map(item => (
                                            <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.presence.includes(item.id) ? 'bg-accent border-accent' : 'border-slate-600 bg-surface-highlight group-hover:border-slate-400'}`}>
                                                    {formData.presence.includes(item.id) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                                </div>
                                                <span className="text-slate-300 text-sm">{item.label}</span>
                                                <input type="checkbox" className="hidden" checked={formData.presence.includes(item.id)} onChange={() => handleCheck(item.id)} />
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Section D: Budget */}
                                <div className="space-y-4 pt-4 border-t border-surface-highlight">
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Expected Monthly Marketing Budget</label>
                                    <select required className="w-full bg-surface-highlight border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent appearance-none" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                                        <option value="">Select budget range...</option>
                                        {budgetOptions.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-white font-bold text-lg py-4 rounded-xl hover:bg-accent-bright transition-all shadow-lg shadow-accent/20 flex justify-center items-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Send My Details — We\'ll Call You'}
                                </button>
                                <p className="text-center text-xs text-slate-500 mt-4">
                                    No spam. Our team will call you within 24 hours.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
