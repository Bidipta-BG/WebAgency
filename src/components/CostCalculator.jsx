import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Calculator, Send, Info, AlertCircle, Clock, Zap, Calendar, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { fetchPricingConfig, submitEstimate } from '../services/api';

const CostCalculator = () => {
    const [step, setStep] = useState(1);
    const [projectType, setProjectType] = useState('');
    const [complexity, setComplexity] = useState('');

    // Pricing Config State (Loaded from API)
    const [isLoadingConfig, setIsLoadingConfig] = useState(true);
    const [powerUps, setPowerUps] = useState([]);
    const [basePrice, setBasePrice] = useState(0);

    // Revised Add-ons State
    const [addons, setAddons] = useState([]);

    const [leadInfo, setLeadInfo] = useState({ name: '', email: '', phone: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [tenureYears, setTenureYears] = useState(1);
    const [payUpfront, setPayUpfront] = useState(false);

    const [deliveryMode, setDeliveryMode] = useState('standard');
    const [customMonths, setCustomMonths] = useState(null);
    const [activeTooltip, setActiveTooltip] = useState(null);

    // Initialize Data from API
    useEffect(() => {
        const loadConfig = async () => {
            try {
                const config = await fetchPricingConfig();
                setPowerUps(config.powerUps);
                setBasePrice(config.basePrice);
            } catch (error) {
                console.error("Failed to load pricing config", error);
            } finally {
                setIsLoadingConfig(false);
            }
        };
        loadConfig();
    }, []);

    // Duration Logic (Weeks)
    const getBaseDurationWeeks = () => {
        let weeks = 4; // Base
        if (projectType === 'mobile') weeks += 4;
        if (projectType === 'both') weeks += 8;

        if (complexity === 'standard') weeks += 6;
        if (complexity === 'enterprise') weeks += 16;

        // Addons impact loop
        powerUps.forEach(p => {
            if (addons.includes(p.id)) {
                weeks += p.baseTime;
                // Add sub-feature times
                p.subs.forEach(sub => {
                    if (addons.includes(sub.id)) weeks += sub.time;
                });
            }
        });

        return weeks;
    };

    const getMultiplier = () => {
        let mult = 1;
        if (projectType === 'mobile') mult *= 1.5;
        if (projectType === 'both') mult *= 2.2;

        if (complexity === 'standard') mult *= 1.5;
        if (complexity === 'enterprise') mult *= 2.5;

        return mult;
    };

    const calculateTotal = () => {
        let total = basePrice * getMultiplier();

        // Addons cost loop
        powerUps.forEach(p => {
            if (addons.includes(p.id)) {
                total += p.baseCost;
                // Add sub-feature costs
                p.subs.forEach(sub => {
                    if (addons.includes(sub.id)) total += sub.cost;
                });
            }
        });

        // Delivery Speed Impact
        if (deliveryMode === 'express') {
            total *= 1.20;
        } else if (deliveryMode === 'custom' && customMonths) {
            const standardWeeks = getBaseDurationWeeks();
            const customWeeks = customMonths * 4;
            if (customWeeks < standardWeeks) {
                total *= 1.15;
            }
        }

        return Math.round(total);
    };

    const rawTotal = calculateTotal();
    const baseDurationWeeks = Math.ceil(getBaseDurationWeeks());

    // Custom Min Duration (cannot be unreasonably fast) 
    // Let's say min duration is 60% of base
    const minDurationWeeks = Math.max(4, Math.ceil(baseDurationWeeks * 0.6));

    // Final Duration Display
    let finalDurationDisplay = `${baseDurationWeeks} Weeks`;
    if (deliveryMode === 'express') {
        finalDurationDisplay = `${Math.ceil(baseDurationWeeks * 0.7)} Weeks`;
    } else if (deliveryMode === 'custom' && customMonths) {
        finalDurationDisplay = `${customMonths} Months`;
    }

    const finalTotal = payUpfront ? Math.round(rawTotal * 0.9) : rawTotal;

    // Range Calculation (+20% Buffer for estimations)
    const minTotal = finalTotal;
    const maxTotal = Math.round(finalTotal * 1.2);

    const agreementCharge = Math.round(minTotal * 0.10); // Based on minimum estimate
    const amountForEMI = minTotal - agreementCharge;

    // Max Values for Display (User Requested Upper Limit)
    const maxAgreementCharge = Math.round(maxTotal * 0.10);
    const maxAmountForEMI = maxTotal - maxAgreementCharge;

    // EMI Ranges
    const minEMI = payUpfront ? 0 : (tenureYears > 0 ? Math.round(amountForEMI / (tenureYears * 12)) : 0);
    const maxEMI = payUpfront ? 0 : (tenureYears > 0 ? Math.round((maxTotal - agreementCharge) / (tenureYears * 12)) : 0);

    // Maintenance Ranges
    const minAMC = Math.round(rawTotal * 0.15);
    const maxAMC = Math.round(minAMC * 1.2);

    const fmt = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);

    const handleParentToggle = (id) => {
        if (addons.includes(id)) {
            // Remove parent AND all its children
            const childrenIds = powerUps.find(p => p.id === id)?.subs.map(s => s.id) || [];
            setAddons(addons.filter(a => a !== id && !childrenIds.includes(a)));
        } else {
            setAddons([...addons, id]);
        }
    };

    const handleSubToggle = (subId) => {
        if (addons.includes(subId)) {
            setAddons(addons.filter(a => a !== subId));
        } else {
            setAddons([...addons, subId]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const estimateData = { leadInfo, projectType, complexity, addons, finalTotal, tenureYears, payUpfront, deliveryMode, finalDurationDisplay };

        try {
            await submitEstimate(estimateData);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Estimate submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Determine available tenures based on total cost
    // Determine available tenures based on total cost
    const show18Month = rawTotal > 300000;
    const show2Year = rawTotal > 500000;
    const show3Year = rawTotal > 1000000;
    const show5Year = rawTotal > 2000000;

    // Custom Delivery Options Generator
    const getCustomOptions = () => {
        const minMonths = Math.ceil(minDurationWeeks / 4);
        const options = [];
        for (let i = 1; i <= 14; i++) {
            if (i >= minMonths) {
                options.push(i);
            }
        }
        return options;
    };
    const customOptions = getCustomOptions();

    useEffect(() => {
        if (deliveryMode !== 'custom') {
            setCustomMonths(null);
        } else {
            if (!customMonths && customOptions.length > 0) {
                setCustomMonths(customOptions[0]);
            }
        }
    }, [deliveryMode]);

    return (
        <section id="calculator" className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent-bright font-semibold tracking-wider text-sm uppercase">Transparent Pricing</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Estimate Your Project Cost</h2>
                    <p className="text-primary-light mt-4">Includes Estimated Delivery Date & Flexible Payment Options.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Calculator Form */}
                    <div className="lg:col-span-7 bg-surface-muted rounded-2xl shadow-2xl border border-surface-highlight p-6 lg:p-8 min-h-[400px] relative">
                        {isLoadingConfig ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-3">
                                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                    <p className="text-slate-400 text-sm">Loading Pricing Data...</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Steps Indicator - 5 Steps */}
                                <div className="flex items-center gap-2 lg:gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <div key={s} className="flex items-center gap-2 flex-shrink-0">
                                            <div className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                                                step >= s ? "bg-accent text-white shadow-lg shadow-accent/25" : "bg-surface-highlight text-slate-500"
                                            )}>
                                                {step > s ? <Check className="w-4 h-4" /> : s}
                                            </div>
                                            {s < 5 && <div className={cn("w-6 lg:w-10 h-0.5", step > s ? "bg-accent" : "bg-surface-highlight")} />}
                                        </div>
                                    ))}
                                </div>

                                {/* Step 1: Project Type */}
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-xl font-bold text-primary mb-6">What would you like to build?</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {[
                                                { id: 'web', label: 'Website / Web App', desc: 'SaaS, Dashboard, or Info site' },
                                                { id: 'mobile', label: 'Mobile App', desc: 'iOS & Android Native App' },
                                                { id: 'both', label: 'Full Platform', desc: 'Web + Mobile App Sync' },
                                            ].map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => setProjectType(opt.id)}
                                                    className={cn(
                                                        "p-5 rounded-xl border text-left transition-all hover:border-accent relative group",
                                                        projectType === opt.id
                                                            ? "border-accent bg-accent/5 ring-1 ring-accent"
                                                            : "border-slate-200"
                                                    )}
                                                >
                                                    <div className="font-bold text-primary mb-1">{opt.label}</div>
                                                    <div className="text-xs text-primary-light">{opt.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Complexity */}
                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-xl font-bold text-primary mb-6">Scale & Complexity</h3>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'mvp', label: 'Fast Launch (MVP)', desc: 'Core features only. Ideal for testing ideas quickly.' },
                                                { id: 'standard', label: 'Professional Business', desc: 'Fully featured product with refined UI/UX and standard security.' },
                                                { id: 'enterprise', label: 'Full-Scale Organization', desc: 'Complex workflows, high security, multi-role access, and high scalability.' },
                                            ].map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => setComplexity(opt.id)}
                                                    className={cn(
                                                        "w-full p-4 rounded-xl border text-left transition-all hover:border-accent flex items-center justify-between",
                                                        complexity === opt.id
                                                            ? "border-accent bg-accent/5 ring-1 ring-accent"
                                                            : "border-slate-200"
                                                    )}
                                                >
                                                    <div>
                                                        <div className="font-bold text-primary mb-1">{opt.label}</div>
                                                        <div className="text-xs text-primary-light">{opt.desc}</div>
                                                    </div>
                                                    {complexity === opt.id && <Check className="text-accent.bright w-5 h-5" />}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Add-ons (Expandable) */}
                                {step === 3 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-xl font-bold text-primary mb-6">Power-Ups</h3>
                                        <div className="grid gap-3">
                                            {powerUps.map((opt) => {
                                                const isSelected = addons.includes(opt.id);
                                                return (
                                                    <div
                                                        key={opt.id}
                                                        className={cn(
                                                            "flex flex-col border rounded-xl transition-all overflow-hidden",
                                                            isSelected ? "border-accent bg-accent/10" : "border-surface-highlight bg-surface"
                                                        )}
                                                    >
                                                        {/* Main Parent Option */}
                                                        <div
                                                            className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-highlight/50"
                                                            onClick={() => handleParentToggle(opt.id)}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className={cn(
                                                                    "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                                                    isSelected ? "bg-accent border-accent text-white" : "border-slate-600 bg-surface-highlight"
                                                                )}>
                                                                    {isSelected && <Check className="w-3 h-3" />}
                                                                </div>
                                                                <div>
                                                                    <span className="font-medium text-white text-sm block">{opt.label}</span>
                                                                    <span className="text-[10px] text-slate-400 block">{fmt(opt.baseCost)}</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="text-slate-500 p-1 hover:text-accent"
                                                                onClick={(e) => { e.stopPropagation(); }}
                                                            >
                                                                <Info className="w-4 h-4" />
                                                            </div>
                                                        </div>

                                                        {/* Nested Sub-options */}
                                                        <AnimatePresence>
                                                            {isSelected && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="bg-black/20 border-t border-white/5"
                                                                >
                                                                    <div className="p-3 pl-12 space-y-2">
                                                                        {opt.subs.map(sub => (
                                                                            <div
                                                                                key={sub.id}
                                                                                className="flex items-center justify-between cursor-pointer group"
                                                                                onClick={() => handleSubToggle(sub.id)}
                                                                            >
                                                                                <div className="flex items-center gap-2">
                                                                                    <div className={cn(
                                                                                        "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                                                                        addons.includes(sub.id) ? "bg-accent border-accent text-white" : "border-slate-600 bg-surface-highlight"
                                                                                    )}>
                                                                                        {addons.includes(sub.id) && <Check className="w-3 h-3" />}
                                                                                    </div>
                                                                                    <span className={cn("text-xs font-medium transition-colors", addons.includes(sub.id) ? "text-white" : "text-slate-400")}>
                                                                                        {sub.label}
                                                                                    </span>
                                                                                </div>
                                                                                <span className="text-xs text-slate-500 group-hover:text-accent">+ {fmt(sub.cost)}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 4: Delivery Pace */}
                                {step === 4 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-xl font-bold text-primary mb-6">Delivery Timeline</h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {/* Standard */}
                                            <button
                                                onClick={() => setDeliveryMode('standard')}
                                                className={cn(
                                                    "p-4 rounded-xl border text-left transition-all relative overflow-hidden",
                                                    deliveryMode === 'standard'
                                                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                                                        : "border-slate-200 hover:border-slate-300"
                                                )}
                                            >
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Clock className="w-5 h-5 text-primary" />
                                                    <span className="font-bold text-primary">Standard</span>
                                                </div>
                                                <div className="text-sm text-slate-500 mb-1">~{Math.ceil(baseDurationWeeks)} Weeks</div>
                                            </button>

                                            {/* Express */}
                                            <button
                                                onClick={() => setDeliveryMode('express')}
                                                className={cn(
                                                    "p-4 rounded-xl border text-left transition-all relative overflow-hidden",
                                                    deliveryMode === 'express'
                                                        ? "border-amber-500 bg-amber-50 ring-1 ring-amber-500"
                                                        : "border-slate-200 hover:border-amber-200"
                                                )}
                                            >
                                                <div className="absolute top-0 right-0 bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded-bl font-bold">FAST</div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Zap className="w-5 h-5 text-amber-500 fill-current" />
                                                    <span className="font-bold text-primary">Express</span>
                                                </div>
                                                <div className="text-sm text-slate-500 mb-1">~{Math.ceil(baseDurationWeeks * 0.7)} Weeks</div>
                                                <div className="text-xs text-amber-600 font-medium">+20% Cost</div>
                                            </button>

                                            {/* Custom */}
                                            <button
                                                onClick={() => setDeliveryMode('custom')}
                                                className={cn(
                                                    "p-4 rounded-xl border text-left transition-all relative overflow-hidden",
                                                    deliveryMode === 'custom'
                                                        ? "border-accent bg-accent/5 ring-1 ring-accent"
                                                        : "border-slate-200 hover:border-accent"
                                                )}
                                            >
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Calendar className="w-5 h-5 text-accent" />
                                                    <span className="font-bold text-primary">Custom</span>
                                                </div>
                                                <div className="text-sm text-slate-500 mb-1">Select Date</div>
                                            </button>
                                        </div>

                                        {/* Custom options selector */}
                                        <AnimatePresence>
                                            {deliveryMode === 'custom' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="mt-6 pt-6 border-t border-slate-100"
                                                >
                                                    <h4 className="font-bold text-sm text-primary mb-3">Available monthly timelines:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {customOptions.map((mn) => (
                                                            <button
                                                                key={mn}
                                                                onClick={() => setCustomMonths(mn)}
                                                                className={cn(
                                                                    "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                                                                    customMonths === mn
                                                                        ? "bg-accent text-white border-accent shadow-md"
                                                                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                                                )}
                                                            >
                                                                {mn} Month{mn > 1 ? 's' : ''}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )}

                                {/* Step 5: Final Options */}
                                {step === 5 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>

                                        {/* Tenure Selection */}
                                        {!payUpfront && (
                                            <div className="mb-8">
                                                <h4 className="font-bold text-white mb-3">Select Payment Tenure</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {[1, 1.5, 2, 3, 5].map((yr) => {
                                                        const isLocked = (yr === 1.5 && !show18Month) || (yr === 2 && !show2Year) || (yr === 3 && !show3Year) || (yr === 5 && !show5Year);
                                                        if (isLocked && yr !== 1) return null;
                                                        return (
                                                            <button
                                                                key={yr}
                                                                onClick={() => setTenureYears(yr)}
                                                                className={cn(
                                                                    "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                                                                    tenureYears === yr
                                                                        ? "bg-accent text-white border-accent shadow-md"
                                                                        : "bg-surface-muted text-white border-surface-highlight hover:bg-surface-highlight"
                                                                )}
                                                            >
                                                                {yr === 1.5 ? '18 Months' : `${yr} Year${yr > 1 ? 's' : ''}`}
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* Upfront Toggle */}
                                        <div className="mb-8 p-4 bg-green-900/20 border border-green-900/40 rounded-xl flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-green-400 text-sm">Pay Upfront & Save 10%?</h4>
                                                <p className="text-green-500 text-xs">No EMI. Full payment in milestones.</p>
                                            </div>
                                            <button
                                                onClick={() => setPayUpfront(!payUpfront)}
                                                className={cn(
                                                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                                    payUpfront ? "bg-green-500" : "bg-slate-700"
                                                )}
                                            >
                                                <span className={cn(
                                                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                                    payUpfront ? "translate-x-6" : "translate-x-1"
                                                )} />
                                            </button>
                                        </div>

                                        {isSubmitted ? (
                                            <div className="text-center py-8">
                                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                                    <Check className="w-8 h-8" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-primary">Estimate Sent!</h3>
                                                <p className="text-slate-600 mt-2 text-sm">Email sent to {leadInfo.email}.</p>
                                                <button
                                                    onClick={() => { setIsSubmitted(false); setStep(1); setProjectType(''); setAddons([]) }}
                                                    className="mt-6 text-accent font-medium hover:underline text-sm"
                                                >
                                                    Start New Estimate
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit}>
                                                <h3 className="text-lg font-bold text-white mb-4">Your Details</h3>
                                                <div className="space-y-3">
                                                    <input
                                                        required
                                                        type="text"
                                                        className="w-full px-4 py-3 rounded-lg border border-surface-highlight bg-surface-muted text-white text-sm focus:outline-none focus:border-accent placeholder:text-slate-500"
                                                        placeholder="Your Name"
                                                        value={leadInfo.name}
                                                        onChange={e => setLeadInfo({ ...leadInfo, name: e.target.value })}
                                                    />
                                                    <input
                                                        required
                                                        type="email"
                                                        className="w-full px-4 py-3 rounded-lg border border-surface-highlight bg-surface-muted text-white text-sm focus:outline-none focus:border-accent placeholder:text-slate-500"
                                                        placeholder="Work Email"
                                                        value={leadInfo.email}
                                                        onChange={e => setLeadInfo({ ...leadInfo, email: e.target.value })}
                                                    />
                                                    <input
                                                        required
                                                        type="tel"
                                                        className="w-full px-4 py-3 rounded-lg border border-surface-highlight bg-surface-muted text-white text-sm focus:outline-none focus:border-accent placeholder:text-slate-500"
                                                        placeholder="Phone Number"
                                                        value={leadInfo.phone}
                                                        onChange={e => setLeadInfo({ ...leadInfo, phone: e.target.value })}
                                                    />
                                                </div>
                                            </form>
                                        )}
                                    </motion.div>
                                )}

                                {/* Navigation Buttons */}
                                {!isSubmitted && (
                                    <div className="mt-8 flex justify-between pt-6 border-t border-surface-highlight">
                                        <button
                                            onClick={() => setStep(Math.max(1, step - 1))}
                                            disabled={step === 1}
                                            className="px-6 py-2.5 rounded-lg text-slate-500 hover:text-white font-medium text-sm disabled:opacity-50"
                                        >
                                            Back
                                        </button>
                                        {step < 5 ? (
                                            <button
                                                onClick={() => setStep(step + 1)}
                                                disabled={
                                                    (step === 1 && !projectType) ||
                                                    (step === 2 && !complexity) ||
                                                    (step === 4 && deliveryMode === 'custom' && !customMonths)
                                                }
                                                className="flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-bright disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
                                            >
                                                Next Step
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                className="flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-bright disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        <span>Sending...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Estimate</span>
                                                        <Send className="w-4 h-4" />
                                                    </>
                                                )}
                                            </button>
                                        )}

                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Live Estimate Panel */}
                    <div className="lg:col-span-5">
                        <div className="bg-surface-highlight text-white rounded-2xl p-6 lg:p-8 sticky top-24 shadow-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg">Cost Breakdown</h3>
                                <Calculator className="w-6 h-6 text-accent" />
                            </div>

                            {/* Discount Notice */}
                            <AnimatePresence>
                                {payUpfront && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-6"
                                    >
                                        <p className="text-green-400 text-xs font-semibold">10% Discount Applied!</p>
                                        <p className="text-slate-300 text-xs strike-through line-through">{fmt(rawTotal)}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-6">

                                {/* Estimated Time */}
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-accent" />
                                        <span className="text-sm font-medium text-slate-200">Est. Delivery</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-white text-lg">{finalDurationDisplay}</p>
                                        {deliveryMode === 'express' && <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wide">Express</span>}
                                    </div>
                                </div>

                                {/* 1. Total Project Value */}
                                <div>
                                    <div className="flex justify-between items-end mb-1">
                                        <p className="text-slate-400 text-sm">Total Project Value</p>
                                        <p className="text-2xl font-bold tracking-tight">{fmt(minTotal)} - {fmt(maxTotal)}</p>
                                    </div>
                                    <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                                        <div className="bg-white h-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>

                                {/* 2. Upfront & Logic Explainer */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
                                    {/* Upfront Charge */}
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                            <span className="text-slate-200">Upfront Agreement (10%)</span>
                                        </div>
                                        <span className="font-semibold text-white">≤ {fmt(maxAgreementCharge)}</span>
                                    </div>
                                    <div className="border-t border-white/10 my-2"></div>

                                    {/* EMI Breakdown */}
                                    {!payUpfront ? (
                                        <>
                                            <div className="flex justify-between items-center text-sm">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                                    <span className="text-slate-200">Balance via EMI</span>
                                                </div>
                                                <span className="font-semibold text-white">≤ {fmt(maxAmountForEMI)}</span>
                                            </div>
                                            <div className="mt-4 pt-4 bg-white/5 rounded-lg p-3 text-center">
                                                <p className="text-accent-bright font-semibold text-xs uppercase mb-1">
                                                    Your Monthly Payment ({tenureYears * 12} Months)
                                                </p>
                                                <p className="text-3xl font-bold text-white tracking-tight">{fmt(minEMI)} - {fmt(maxEMI)}<span className="text-sm font-normal text-slate-400 block lg:inline-block lg:ml-1">/mo</span></p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="mt-4 pt-4 bg-green-500/10 rounded-lg p-3 text-center borderBorder-green-500/20">
                                            <p className="text-green-400 font-semibold text-sm uppercase">Full Payment</p>
                                            <p className="text-[10px] text-slate-400">Total amount payable in milestones.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Maintenance (Optional & Separate) */}
                                <div className="mt-4 pt-4 border-t border-dashed border-white/10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex gap-2">
                                            <div
                                                className="relative"
                                                onMouseEnter={() => setActiveTooltip('maintenance')}
                                                onMouseLeave={() => setActiveTooltip(null)}
                                            >
                                                <AlertCircle className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0 cursor-help hover:text-accent transition-colors" />
                                                <AnimatePresence>
                                                    {activeTooltip === 'maintenance' && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.95 }}
                                                            className="absolute bottom-full left-0 mb-3 w-64 bg-slate-900 text-slate-200 text-xs p-3 rounded-xl shadow-2xl border border-slate-700 z-50"
                                                        >
                                                            <p className="leading-relaxed">
                                                                After your <span className="text-white font-semibold">Tenure</span> ends, we hand over <span className="text-accent">100% ownership</span> (Code + Credentials). You can navigate it yourself or continue our service.
                                                            </p>
                                                            <div className="absolute -bottom-1.5 left-1 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-slate-700"></div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-slate-400 text-xs font-semibold">Yearly Maintenance (AMC)</p>
                                                    <span className="bg-white/10 text-[10px] px-1.5 py-0.5 rounded text-white border border-white/5">Optional</span>
                                                </div>
                                                <p className="text-[10px] text-slate-500 mt-1 max-w-[150px] leading-tight">
                                                    Starts after Year {tenureYears}. Not included in project total.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-slate-300">{fmt(minAMC)} - {fmt(maxAMC)}/yr</p>
                                            <p className="text-[9px] text-slate-500">Est. Range</p>
                                            <p className="text-[9px] text-accent mt-0.5 font-medium">EMI Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <button className="w-full py-3 rounded-xl bg-accent hover:bg-accent-bright text-white font-bold transition-colors shadow-lg shadow-accent/20">
                                    Book Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculator;
