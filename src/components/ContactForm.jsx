"use client";
import React, { useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';
import { submitContactForm } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'Website Development',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (formData.phone.length < 7) {
            newErrors.phone = "Enter a valid phone number";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            // Include subject and message in the lead data
            const leadData = {
                ...formData,
                source: "Contact Page Form"
            };
            await submitContactForm(leadData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: 'Website Development', message: '' });
        } catch (error) {
            console.error("Submission failed", error);
            setErrors({ submit: "Failed to send message. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-12 rounded-[3.5rem] bg-surface-muted border border-accent/20 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                    <Check className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 12 hours.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent font-bold hover:underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <div className="p-8 md:p-12 rounded-[3rem] bg-surface-muted border border-surface-highlight shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full bg-surface border ${errors.name ? 'border-red-500' : 'border-surface-highlight'} rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors`}
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full bg-surface border ${errors.email ? 'border-red-500' : 'border-surface-highlight'} rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors`}
                            placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.email}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                    <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={(phone) => {
                            setFormData({ ...formData, phone });
                            if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        enableSearch={true}
                        disableSearchIcon={true}
                        containerClass="w-full relative"
                        inputClass={`!w-full !bg-surface !border ${errors.phone ? '!border-red-500' : '!border-surface-highlight'} !rounded-xl !text-white !outline-none !transition-colors !h-[50px] !pl-14 !text-base`}
                        buttonClass="!bg-transparent !border-none !left-2 hover:!bg-surface-highlight !rounded-lg !transition-colors"
                        dropdownClass="!bg-surface-muted !text-slate-200 !border-surface-highlight !rounded-xl !shadow-2xl !mt-2 custom-phone-dropdown"
                        searchClass="!bg-surface !text-white !border-surface-highlight !rounded-lg !p-2 !w-[90%] !mx-2 !my-2"
                        searchStyle={{margin: '0', width: '90%'}}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                    <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-surface border border-surface-highlight rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors appearance-none"
                    >
                        <option>Website Development</option>
                        <option>Mobile App Development</option>
                        <option>Digital Marketing</option>
                        <option>AI Solutions</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-surface border border-surface-highlight rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors h-32 resize-none"
                        placeholder="Tell us about your project vision..."
                    ></textarea>
                </div>

                {errors.submit && <p className="text-red-500 text-sm text-center font-bold">{errors.submit}</p>}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent-bright transition-all shadow-lg shadow-accent/20 active:scale-[0.98] disabled:opacity-70"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending Inquiry...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
