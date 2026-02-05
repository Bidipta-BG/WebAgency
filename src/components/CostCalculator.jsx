import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Calculator, Send, Info, AlertCircle, Clock, Zap, Calendar, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { fetchPricingConfig, submitEstimate } from '../services/api';

const CostCalculator = ({ onContact }) => {
    const [step, setStep] = useState(1);
    const [projectType, setProjectType] = useState('');
    const [complexity, setComplexity] = useState('');

    // Pricing Config State
    const [config, setConfig] = useState(null);
    const [isLoadingConfig, setIsLoadingConfig] = useState(true);

    // Derived state from config
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
                const data = await fetchPricingConfig();
                setConfig(data);
                setPowerUps(data.powerUps || []);
                setBasePrice(data.basePrice || 0);
            } catch (error) {
                console.error("Failed to load pricing config", error);
            } finally {
                setIsLoadingConfig(false);
            }
        };
        loadConfig();
    }, []);

    // Calculation Helpers
    const getBaseDurationWeeks = () => {
        if (!config) return 4;

        let weeks = 4; // Default base

        // Dynamic Project Type Duration
        const pType = config.projectTypes.find(p => p.id === projectType);
        if (pType) weeks = pType.weeks;

        // Dynamic Complexity Duration
        const cType = config.complexities.find(c => c.id === complexity);
        if (cType) weeks += cType.weeks;

        // Addons impact loop
        powerUps.forEach(p => {
            if (addons.includes(p.id)) {
                weeks += p.baseTime;
                p.subs.forEach(sub => {
                    if (addons.includes(sub.id)) weeks += sub.time;
                });
            }
        });

        return weeks;
    };

    const getMultiplier = () => {
        if (!config) return 1;

        let mult = 1;

        // Dynamic Project Type Multiplier
        const pType = config.projectTypes.find(p => p.id === projectType);
        if (pType) mult *= pType.multiplier;

        // Dynamic Complexity Multiplier
        const cType = config.complexities.find(c => c.id === complexity);
        if (cType) mult *= cType.multiplier;

        return mult;
    };

    const calculateTotal = () => {
        if (!config) return 0;

        let total = basePrice * getMultiplier();

        // Addons cost loop
        powerUps.forEach(p => {
            if (addons.includes(p.id)) {
                total += p.baseCost;
                p.subs.forEach(sub => {
                    if (addons.includes(sub.id)) total += sub.cost;
                });
            }
        });

        // Dynamic Delivery Speed Impact
        const expressMode = config.deliveryModes.find(m => m.id === 'express');
        const customMode = config.deliveryModes.find(m => m.id === 'custom');

        if (deliveryMode === 'express' && expressMode) {
            total *= expressMode.multiplier;
        } else if (deliveryMode === 'custom' && customMonths && customMode) {
            const standardWeeks = getBaseDurationWeeks();
            const customWeeks = customMonths * 4;
            if (customWeeks < standardWeeks) {
                total *= customMode.multiplier;
            }
        }

        return Math.round(total);
    };

    const rawTotal = calculateTotal();
    const baseDurationWeeks = Math.ceil(getBaseDurationWeeks());

    // Final Duration Display
    let finalDurationDisplay = `${baseDurationWeeks} Weeks`;

    if (config) {
        const expressMode = config.deliveryModes.find(m => m.id === 'express');

        if (deliveryMode === 'express' && expressMode) {
            // Use factor from config (e.g. 0.7)
            const factor = config.deliveryExpressTimeFactor || 0.7;
            finalDurationDisplay = `${Math.ceil(baseDurationWeeks * factor)} Weeks`;
        } else if (deliveryMode === 'custom' && customMonths) {
            finalDurationDisplay = `${customMonths} Months`;
        }
    }

    // Dynamic Upfront Discount
    const upfrontDiscount = config?.upfrontDiscount || 0.10;
    const finalTotal = payUpfront ? Math.round(rawTotal * (1 - upfrontDiscount)) : rawTotal;

    // Range Calculation (+Buffer from config)
    const buffer = config?.estimationBuffer || 0.20;
    const minTotal = finalTotal;
    const maxTotal = Math.round(finalTotal * (1 + buffer));

    // Dynamic Agreement Charge
    const agreementPct = config?.upfrontAgreementPercentage || 0.10;
    const agreementCharge = Math.round(minTotal * agreementPct);
    const amountForEMI = minTotal - agreementCharge;

    // Max Values for Display
    const maxAgreementCharge = Math.round(maxTotal * agreementPct);
    const maxAmountForEMI = maxTotal - maxAgreementCharge;

    // EMI Ranges
    const minEMI = payUpfront ? 0 : (tenureYears > 0 ? Math.round(amountForEMI / (tenureYears * 12)) : 0);
    const maxEMI = payUpfront ? 0 : (tenureYears > 0 ? Math.round((maxTotal - agreementCharge) / (tenureYears * 12)) : 0);

    // Maintenance Ranges
    const amcPct = config?.maintenancePercentage || 0.15;
    const minAMC = Math.round(rawTotal * amcPct);
    const maxAMC = Math.round(minAMC * (1 + buffer));

    const [errors, setErrors] = useState({});

    // Formatting Helpers
    const fmt = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);

    const validate = () => {
        const newErrors = {};
        if (!leadInfo.name.trim()) newErrors.name = "Name is required";

        if (!leadInfo.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(leadInfo.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!leadInfo.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(leadInfo.phone.replace(/\D/g, ''))) {
            // Checks for exactly 10 digits after stripping non-digits
            newErrors.phone = "Phone number must be at least 10 digits";
        }

        return newErrors;
    };

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

        // Validation
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({}); // Clear errors

        setIsSubmitting(true);

        // Prepare Detailed Quotation Data
        // Helper calculation variables already exist in scope (calculated in render)
        // But we need to grab them *cleanly* for the payload.
        // We re-calculate purely to ensure we have the exact numbers at submit time.

        const rawT = calculateTotal();
        // Dynamic Upfront Discount
        const uDiscount = config?.upfrontDiscount || 0.10;
        const fTotal = payUpfront ? Math.round(rawT * (1 - uDiscount)) : rawT;

        // Agreement Charge / Upfront Fee
        const agreePct = config?.upfrontAgreementPercentage || 0.10;
        const upfrontFeeVal = Math.round(fTotal * agreePct);

        // Monthly Subscription
        const amtForEMI = fTotal - upfrontFeeVal;
        const monthlySubVal = payUpfront ? 0 : (tenureYears > 0 ? Math.round(amtForEMI / (tenureYears * 12)) : 0);

        // Maintenance
        const amcPercentage = config?.maintenancePercentage || 0.15;
        const maintCostVal = Math.round(rawT * amcPercentage);

        const estimateData = {
            leadInfo,
            projectType,
            complexity,
            addons,
            deliveryMode,
            tenureYears,
            payUpfront,
            finalTotal: fTotal, // Legacy support if needed
            finalDurationDisplay,
            quotation: {
                totalProjectValue: fTotal,
                upfrontFee: upfrontFeeVal,
                monthlySubscription: monthlySubVal,
                subscriptionDuration: payUpfront ? 0 : tenureYears * 12,
                deliveryTime: finalDurationDisplay,
                maintenanceCost: maintCostVal
            }
        };

        try {
            await submitEstimate(estimateData);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Estimate submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Determine available tenures based on total cost from config thresholds
    const getAvailableTenures = () => {
        if (!config || !config.paymentTenures) return [];
        return config.paymentTenures.filter(t => rawTotal > t.threshold);
    };
    const availableTenures = getAvailableTenures();

    // Custom Delivery Options Generator
    const getCustomOptions = () => {
        const minFactor = config?.minDurationFactor || 0.6;
        const minDurationWeeks = Math.max(4, Math.ceil(baseDurationWeeks * minFactor));
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
                                            {config?.projectTypes.map((opt) => (
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
                                            {config?.complexities.map((opt) => (
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
                                            {config?.deliveryModes.map((mode) => (
                                                <button
                                                    key={mode.id}
                                                    onClick={() => setDeliveryMode(mode.id)}
                                                    className={cn(
                                                        "p-4 rounded-xl border text-left transition-all relative overflow-hidden",
                                                        deliveryMode === mode.id
                                                            ? (mode.id === 'express'
                                                                ? "border-amber-500 bg-amber-50 ring-1 ring-amber-500"
                                                                : "border-accent bg-accent/5 ring-1 ring-accent")
                                                            : "border-slate-200 hover:border-accent"
                                                    )}
                                                >
                                                    {mode.id === 'express' && <div className="absolute top-0 right-0 bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded-bl font-bold">{mode.tag}</div>}

                                                    <div className="flex items-center gap-2 mb-2">
                                                        {mode.id === 'standard' && <Clock className="w-5 h-5 text-primary" />}
                                                        {mode.id === 'express' && <Zap className="w-5 h-5 text-amber-500 fill-current" />}
                                                        {mode.id === 'custom' && <Calendar className="w-5 h-5 text-accent" />}
                                                        <span className="font-bold text-primary">{mode.label}</span>
                                                    </div>

                                                    {mode.id === 'standard' && <div className="text-sm text-slate-500 mb-1">~{Math.ceil(baseDurationWeeks)} Weeks</div>}
                                                    {mode.id === 'express' && <div className="text-sm text-slate-500 mb-1">~{Math.ceil(baseDurationWeeks * (config.deliveryExpressTimeFactor || 0.7))} Weeks</div>}
                                                    {mode.id === 'custom' && <div className="text-sm text-slate-500 mb-1">Select Date</div>}

                                                    {mode.multiplier > 1 && <div className="text-xs text-amber-600 font-medium">+{parseFloat(((mode.multiplier - 1) * 100).toFixed(2))}% Cost</div>}
                                                </button>
                                            ))}
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
                                                <h4 className="font-bold text-white mb-3">Choose Plan Duration</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {availableTenures.map((t) => (
                                                        <button
                                                            key={t.id}
                                                            onClick={() => setTenureYears(t.value)}
                                                            className={cn(
                                                                "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                                                                tenureYears === t.value
                                                                    ? "bg-accent text-white border-accent shadow-md"
                                                                    : "bg-surface-muted text-white border-surface-highlight hover:bg-surface-highlight"
                                                            )}
                                                        >
                                                            {t.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Upfront Toggle */}
                                        <div className="mb-8 p-4 bg-green-900/20 border border-green-900/40 rounded-xl flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-green-400 text-sm">Pay Upfront & Save {config ? (config.upfrontDiscount * 100) : 10}%?</h4>
                                                <p className="text-green-500 text-xs">No Monthly Fees. Full payment in milestones.</p>
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
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className={`w-full px-4 py-3 rounded-lg border bg-surface-muted text-white text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-slate-500 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-surface-highlight focus:border-accent focus:ring-accent'}`}
                                                            placeholder="Your Name"
                                                            value={leadInfo.name}
                                                            onChange={e => {
                                                                setLeadInfo({ ...leadInfo, name: e.target.value });
                                                                if (errors.name) setErrors({ ...errors, name: null });
                                                            }}
                                                        />
                                                        {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="email"
                                                            className={`w-full px-4 py-3 rounded-lg border bg-surface-muted text-white text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-slate-500 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-surface-highlight focus:border-accent focus:ring-accent'}`}
                                                            placeholder="Work Email"
                                                            value={leadInfo.email}
                                                            onChange={e => {
                                                                setLeadInfo({ ...leadInfo, email: e.target.value });
                                                                if (errors.email) setErrors({ ...errors, email: null });
                                                            }}
                                                        />
                                                        {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="tel"
                                                            className={`w-full px-4 py-3 rounded-lg border bg-surface-muted text-white text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-slate-500 ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-surface-highlight focus:border-accent focus:ring-accent'}`}
                                                            placeholder="Phone Number"
                                                            value={leadInfo.phone}
                                                            onChange={e => {
                                                                setLeadInfo({ ...leadInfo, phone: e.target.value });
                                                                if (errors.phone) setErrors({ ...errors, phone: null });
                                                            }}
                                                        />
                                                        {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>}
                                                    </div>
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
                                        <p className="text-green-400 text-xs font-semibold">{config ? (config.upfrontDiscount * 100) : 10}% Discount Applied!</p>
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
                                        <p className="text-slate-400 text-sm">{config?.labels?.totalProject || 'Total Project Value'}</p>
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
                                            <span className="text-slate-200">{config?.labels?.agreement || 'Setup Fee'} ({Math.round((config?.upfrontAgreementPercentage || 0.1) * 100)}%)</span>
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
                                                    <span className="text-slate-200">{config?.labels?.emi || 'Monthly Subscription'}</span>
                                                </div>
                                                <span className="font-semibold text-white">≤ {fmt(maxAmountForEMI)}</span>
                                            </div>
                                            <div className="mt-4 pt-4 bg-white/5 rounded-lg p-3 text-center">
                                                <p className="text-accent-bright font-semibold text-xs uppercase mb-1">
                                                    Your Monthly Fee ({tenureYears * 12} Months)
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
                                                                After your <span className="text-white font-semibold">Subscription</span> ends, we hand over <span className="text-accent">100% ownership</span> (Code + Credentials). You can navigate it yourself or continue our service.
                                                            </p>
                                                            <div className="absolute -bottom-1.5 left-1 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-slate-700"></div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-slate-400 text-xs font-semibold">{config?.labels?.amc || 'Yearly Maintenance (AMC)'}</p>
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
                                            <p className="text-9px text-accent mt-0.5 font-medium">Monthly Plan Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <button
                                    onClick={onContact}
                                    className="w-full py-3 rounded-xl bg-accent hover:bg-accent-bright text-white font-bold transition-colors shadow-lg shadow-accent/20"
                                >
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
