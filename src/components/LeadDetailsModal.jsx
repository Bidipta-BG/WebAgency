"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle, Package, Layers, DollarSign, User, Mail, Phone, CreditCard, Clock, Download } from 'lucide-react';
import { generateQuotationPDF } from '../utils/generateQuotationPDF';

const LeadDetailsModal = ({ isOpen, onClose, lead }) => {
    if (!lead) return null;

    const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false);
    const fmt = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);

    const handleDownload = async () => {
        if (!lead || lead.formType !== 'industry-planner') return;
        setIsGeneratingPDF(true);
        try {
            await generateQuotationPDF({
                readableAnswers: lead.readableAnswers,
                contactInfo: {
                    ownerName: lead.leadInfo?.name,
                    email: lead.leadInfo?.email,
                    mobile: lead.leadInfo?.phone,
                    businessName: lead.leadInfo?.businessName,
                    city: lead.leadInfo?.city
                },
                recommendation: {
                    packageName: lead.recommendation?.package,
                    pricing: lead.recommendation?.pricing,
                    features: lead.recommendation?.features,
                    reasons: lead.recommendation?.reasons,
                    isCustom: false
                },
                managementType: lead.managementType || 'monthly',
                selectedIndustry: lead.industry
            });
        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Failed to generate PDF");
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-slate-800 p-6 flex items-center justify-between z-10">
                                <div>
                                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                        {lead.formType === 'estimate' || lead.formType === 'industry-planner' ? <DollarSign className="w-5 h-5 text-accent" /> : <Mail className="w-5 h-5 text-purple-400" />}
                                        {lead.formType === 'estimate' || lead.formType === 'industry-planner' ? 'Project Estimate Details' : 'Contact Inquiry'}
                                    </h2>
                                    <p className="text-slate-400 text-xs mt-1">ID: {lead._id} • {new Date(lead.createdAt).toLocaleString()}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    {lead.formType === 'industry-planner' && (
                                        <button
                                            onClick={handleDownload}
                                            disabled={isGeneratingPDF}
                                            className="px-3 py-1.5 bg-accent/20 text-accent hover:bg-accent/30 rounded-md text-xs font-bold flex items-center gap-1 transition disabled:opacity-50"
                                        >
                                            {isGeneratingPDF ? (
                                                <div className="w-3 h-3 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <Download className="w-3 h-3" />
                                            )}
                                            {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
                                        </button>
                                    )}
                                    <button
                                        onClick={onClose}
                                        className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 grid gap-6 md:grid-cols-2">
                                {/* Lead Info Card */}
                                <div className="bg-slate-950 rounded-xl border border-slate-800 p-5">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
                                        <User className="w-4 h-4" /> Client Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs text-slate-500 block">Name</label>
                                            <div className="text-white font-medium">{lead.leadInfo?.name}</div>
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-500 block">Email</label>
                                            <a href={`mailto:${lead.leadInfo?.email}`} className="text-accent hover:underline break-all">{lead.leadInfo?.email}</a>
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-500 block">Phone</label>
                                            <a href={`tel:${lead.leadInfo?.phone}`} className="text-white hover:text-accent">{lead.leadInfo?.phone}</a>
                                        </div>
                                        {lead.leadInfo?.preferredCallTime && (
                                            <div>
                                                <label className="text-xs text-slate-500 block">Preferred Call Time</label>
                                                <div className="text-amber-400 font-medium">{lead.leadInfo.preferredCallTime}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Status Card */}
                                <div className="bg-slate-950 rounded-xl border border-slate-800 p-5">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> Current Status
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                                            <span className="text-slate-400 text-sm">Follow-up Status</span>
                                            <span className={`px-2 py-1 rounded text-xs font-bold border ${lead.followupStatus === 'Contacted' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-slate-800 text-slate-300 border-slate-700'}`}>
                                                {lead.followupStatus || 'Pending'}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                                            <span className="text-slate-400 text-sm">Customer Connected</span>
                                            <span className={lead.isCustomerConnected ? "text-emerald-400 font-bold text-sm" : "text-slate-500 text-sm"}>
                                                {lead.isCustomerConnected ? 'Yes' : 'No'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Quotation Section */}
                                {((lead.formType === 'estimate' && lead.quotation) || (lead.formType === 'industry-planner' && lead.recommendation)) && (
                                    <div className="md:col-span-2 space-y-6">
                                        
                                        {/* Answers List for new estimator */}
                                        {lead.formType === 'industry-planner' && lead.readableAnswers && lead.readableAnswers.length > 0 && (
                                            <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                                                <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex items-center gap-2">
                                                    <Layers className="w-4 h-4 text-accent" />
                                                    <h3 className="text-sm font-bold text-slate-400 uppercase">Customer Requirements</h3>
                                                </div>
                                                <div className="p-5 divide-y divide-slate-800/50">
                                                    {lead.readableAnswers.map((item, i) => (
                                                        <div key={i} className="py-3 flex flex-col gap-1">
                                                            <span className="text-xs font-semibold text-slate-500">{item.question}</span>
                                                            <span className="text-sm text-white font-medium">{item.answer}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Financial Breakdown */}
                                        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                                            <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex items-center justify-between">
                                                <h3 className="text-sm font-bold text-slate-400 uppercase flex items-center gap-2">
                                                    <CreditCard className="w-4 h-4 text-emerald-400" /> Financial Breakdown
                                                </h3>
                                                <span className="text-xs text-slate-500">
                                                    {lead.formType === 'industry-planner' ? `Package: ${lead.recommendation?.package}` : `Currency: ${lead.quotation?.currency}`}
                                                </span>
                                            </div>

                                            <div className="p-5 grid md:grid-cols-2 gap-8">
                                                {/* Left: Project Scope */}
                                                <div className="space-y-4">
                                                    {lead.formType === 'industry-planner' ? (
                                                        <>
                                                            <h4 className="text-white font-semibold mb-3">Project Setup</h4>
                                                            <div className="bg-slate-900 rounded-lg p-3 space-y-2 text-sm border border-slate-800">
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Industry</span>
                                                                    <span className="text-white capitalize">{lead.industry}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Build Type</span>
                                                                    <span className="text-white capitalize">{lead.buildType}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Management</span>
                                                                    <span className="text-white capitalize">{lead.managementType}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Score</span>
                                                                    <span className="text-white">{lead.recommendation?.complexityScore} pts</span>
                                                                </div>
                                                            </div>
                                                            
                                                            <h4 className="text-white font-semibold mb-3">Included Features</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {lead.recommendation?.features?.map((f, i) => (
                                                                    <span key={i} className="bg-accent/10 text-accent border border-accent/20 px-2 py-1 rounded text-[10px]">
                                                                        {f}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h4 className="text-white font-semibold mb-3">Project Scope</h4>
                                                            <div className="bg-slate-900 rounded-lg p-3 space-y-2 text-sm border border-slate-800">
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Type</span>
                                                                    <span className="text-white capitalize">{lead.selection?.projectType?.replace('_', ' ')}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Complexity</span>
                                                                    <span className="text-white capitalize">{lead.selection?.complexity}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Mode</span>
                                                                    <span className="text-white capitalize">{lead.selection?.deliveryMode}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-slate-400">Duration</span>
                                                                    <span className="text-white">{lead.quotation?.deliveryTime}</span>
                                                                </div>
                                                            </div>
                                                            <h4 className="text-white font-semibold mb-3 mt-4">Add-ons</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {lead.selection?.addons?.length > 0 ? (
                                                                    lead.selection.addons.map(addon => (
                                                                        <span key={addon} className="bg-accent/10 text-accent border border-accent/20 px-2 py-1 rounded text-xs capitalize">
                                                                            {addon}
                                                                        </span>
                                                                    ))
                                                                ) : (
                                                                    <span className="text-slate-500 text-xs italic">No add-ons selected</span>
                                                                )}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Right: Costs */}
                                                <div className="space-y-4">
                                                    <h4 className="text-white font-semibold mb-3">Cost Summary</h4>
                                                    {lead.formType === 'industry-planner' && lead.recommendation?.pricing ? (
                                                        <div className="space-y-3">
                                                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                                <span className="text-slate-500 text-xs block mb-1 flex items-center justify-between">
                                                                    One-time Setup Fee (Incl. 18% GST)
                                                                    {lead.recommendation.pricing.setupFee?.fixed && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">Fixed Price</span>}
                                                                </span>
                                                                <span className="text-lg text-white font-semibold">
                                                                    {lead.recommendation.pricing.setupFee?.na ? (
                                                                        <span className="text-slate-500">N/A</span>
                                                                    ) : lead.recommendation.pricing.setupFee?.fixed 
                                                                        ? fmt(Math.round(lead.recommendation.pricing.setupFee.fixed))
                                                                        : `${fmt(Math.round(lead.recommendation.pricing.setupFee?.min * 1.18))} - ${fmt(Math.round(lead.recommendation.pricing.setupFee?.max * 1.18))}`
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                                <span className="text-slate-500 text-xs block mb-1 flex items-center justify-between">
                                                                    Monthly Management (Incl. 18% GST)
                                                                    {lead.recommendation.pricing.monthly?.fixed && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">Fixed Price</span>}
                                                                </span>
                                                                <span className="text-lg text-white font-semibold">
                                                                    {lead.recommendation.pricing.monthly?.na ? (
                                                                        <span className="text-slate-500">N/A</span>
                                                                    ) : lead.recommendation.pricing.monthly?.fixed 
                                                                        ? fmt(Math.round(lead.recommendation.pricing.monthly.fixed))
                                                                        : `${fmt(Math.round(lead.recommendation.pricing.monthly?.min * 1.18))} - ${fmt(Math.round(lead.recommendation.pricing.monthly?.max * 1.18))}`
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                                <span className="text-slate-500 text-xs block mb-1 flex items-center justify-between">
                                                                    Annual Management (Incl. 18% GST)
                                                                    {lead.recommendation.pricing.annual?.fixed && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">Fixed Price</span>}
                                                                </span>
                                                                <span className="text-lg text-white font-semibold">
                                                                    {lead.recommendation.pricing.annual?.na ? (
                                                                        <span className="text-slate-500">N/A</span>
                                                                    ) : lead.recommendation.pricing.annual?.fixed 
                                                                        ? fmt(Math.round(lead.recommendation.pricing.annual.fixed))
                                                                        : `${fmt(Math.round(lead.recommendation.pricing.annual?.min * 1.18))} - ${fmt(Math.round(lead.recommendation.pricing.annual?.max * 1.18))}`
                                                                    }
                                                                </span>
                                                            </div>
                                                            {lead.recommendation.pricing.handover && (
                                                                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                                    <span className="text-slate-500 text-xs block mb-1 flex items-center justify-between">
                                                                        Handover Fee (Incl. 18% GST)
                                                                        {lead.recommendation.pricing.handover?.fixed && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">Fixed Price</span>}
                                                                    </span>
                                                                    <span className="text-lg text-white font-semibold">
                                                                        {lead.recommendation.pricing.handover?.na ? (
                                                                            <span className="text-slate-500">N/A</span>
                                                                        ) : lead.recommendation.pricing.handover?.fixed 
                                                                            ? fmt(Math.round(lead.recommendation.pricing.handover.fixed))
                                                                            : `${fmt(Math.round(lead.recommendation.pricing.handover?.min * 1.18))} - ${fmt(Math.round(lead.recommendation.pricing.handover?.max * 1.18))}`
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="space-y-3">
                                                            <div className="flex justify-between items-center p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                                                                <span className="text-emerald-400 font-medium">Total Project Value</span>
                                                                <span className="text-xl font-bold text-white">{fmt(lead.quotation?.totalProjectValue)}</span>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-3">
                                                                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                                    <span className="text-slate-500 text-xs block mb-1">Upfront Fee</span>
                                                                    <span className="text-white font-semibold">{fmt(lead.quotation?.upfrontFee)}</span>
                                                                </div>
                                                                {lead.quotation?.monthlySubscription > 0 ? (
                                                                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                                        <span className="text-slate-500 text-xs block mb-1">Monthly Subscription</span>
                                                                        <span className="text-white font-semibold">{fmt(lead.quotation?.monthlySubscription)}/mo</span>
                                                                        <span className="text-[10px] text-slate-500 block mt-1">for {lead.quotation?.subscriptionDuration} months</span>
                                                                    </div>
                                                                ) : (
                                                                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 opacity-50">
                                                                        <span className="text-slate-500 text-xs block mb-1">Monthly Subscription</span>
                                                                        <span className="text-white font-semibold">N/A</span>
                                                                        <span className="text-[10px] text-slate-500 block mt-1">Full Payment Upfront</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                                                                <div>
                                                                    <span className="text-slate-500 text-xs block">Maintenance (Optional)</span>
                                                                    <span className="text-[10px] text-slate-600">starts after subscription</span>
                                                                </div>
                                                                <span className="text-white font-medium">{fmt(lead.quotation?.maintenanceCost)}/yr</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LeadDetailsModal;
