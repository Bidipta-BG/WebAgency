'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Info, ChevronDown, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const GuaranteeModal = ({ isOpen, onClose }) => {
    const [expandedExample, setExpandedExample] = useState(null);

    // Prevent background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setExpandedExample(null); // Reset state when closed
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const examples = [
        {
            id: 'ex-a',
            title: 'Example A: 30-Day Project',
            content: (
                <ul className="text-sm text-slate-400 space-y-2 mt-2 ml-4 list-disc marker:text-accent">
                    <li><strong>Days 0–15:</strong> 100% Refund (minus GST)</li>
                    <li><strong>Days 16–30:</strong> 50% Refund (minus GST)</li>
                    <li><strong>Within 30 days of going live:</strong> 25% Refund (minus GST)</li>
                </ul>
            )
        },
        {
            id: 'ex-b',
            title: 'Example B: 40-Day Project',
            content: (
                <ul className="text-sm text-slate-400 space-y-2 mt-2 ml-4 list-disc marker:text-accent">
                    <li><strong>Days 0–20:</strong> 100% Refund (minus GST)</li>
                    <li><strong>Days 21–40:</strong> 50% Refund (minus GST)</li>
                    <li><strong>Within 30 days of going live:</strong> 25% Refund (minus GST)</li>
                </ul>
            )
        }
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-surface rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between p-6 border-b border-white/5 bg-surface-muted/30">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">Satisfaction Guarantee</h2>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    We build with full confidence. If you're not satisfied, we offer a transparent refund policy tied to your project timeline.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 -mr-2 -mt-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-surface-highlight scrollbar-track-transparent">
                        
                        {/* Tiered Policy Table */}
                        <div className="space-y-3 mb-8">
                            <div className="flex flex-col sm:flex-row gap-3 p-4 rounded-2xl bg-surface-muted border border-green-500/20">
                                <div className="font-bold text-green-400 shrink-0 w-28">100% Refund</div>
                                <div className="text-sm text-slate-300">Within the first half (50%) of your agreed delivery timeline.</div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3 p-4 rounded-2xl bg-surface-muted border border-amber-500/20">
                                <div className="font-bold text-amber-400 shrink-0 w-28">50% Refund</div>
                                <div className="text-sm text-slate-300">Between the halfway mark and your full delivery date.</div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3 p-4 rounded-2xl bg-surface-muted border border-orange-500/20">
                                <div className="font-bold text-orange-400 shrink-0 w-28">25% Refund</div>
                                <div className="text-sm text-slate-300">After project deployment, within 30 days of going live.</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 p-4 rounded-2xl bg-surface-muted border border-white/5 opacity-70">
                                <div className="font-bold text-slate-500 shrink-0 w-28">No Refund</div>
                                <div className="text-sm text-slate-400">After 30 days of the project being live.</div>
                            </div>
                        </div>

                        {/* GST Note */}
                        <div className="flex gap-3 items-start p-4 rounded-2xl bg-accent/5 border border-accent/10 mb-8">
                            <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <p className="text-sm text-slate-400 leading-relaxed">
                                <strong className="text-slate-300 font-medium">Important:</strong> GST (Goods & Services Tax) is a government-mandated tax collected on your behalf and is strictly non-refundable in all scenarios. All refunds are calculated from the base setup fee.
                            </p>
                        </div>

                        {/* Examples Accordion */}
                        <div className="mb-2">
                            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Timeline Examples</h3>
                            <div className="space-y-2">
                                {examples.map((ex) => (
                                    <div key={ex.id} className="rounded-xl border border-surface-highlight overflow-hidden">
                                        <button 
                                            onClick={() => setExpandedExample(expandedExample === ex.id ? null : ex.id)}
                                            className="w-full flex items-center justify-between p-4 bg-surface-muted hover:bg-surface-highlight transition-colors text-left"
                                        >
                                            <span className="font-medium text-slate-300 text-sm">{ex.title}</span>
                                            <ChevronDown className={cn("w-4 h-4 text-slate-500 transition-transform", expandedExample === ex.id && "rotate-180")} />
                                        </button>
                                        <AnimatePresence>
                                            {expandedExample === ex.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-surface"
                                                >
                                                    <div className="p-4 pt-2 border-t border-surface-highlight/50">
                                                        {ex.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-white/5 bg-surface-muted/30">
                        <button
                            onClick={() => {
                                onClose();
                                window.dispatchEvent(new CustomEvent('open-legal', { detail: 'refund' }));
                            }}
                            className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-surface border border-surface-highlight hover:border-accent hover:text-accent transition-all text-slate-300 font-medium text-sm group"
                        >
                            Read Full Refund Terms
                            <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default GuaranteeModal;
