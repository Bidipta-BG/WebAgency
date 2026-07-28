"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlannerShell from '@/components/planner/PlannerShell';
import ContactModal from '@/components/ContactModal';
import LegalModal from '@/components/LegalModal';

export default function EstimatePage() {
    const [contactOpen, setContactOpen] = useState(false);
    const [legalOpen, setLegalOpen] = useState(false);
    const [legalTab, setLegalTab] = useState('privacy');

    const openLegal = (tab) => {
        setLegalTab(tab);
        setLegalOpen(true);
    };

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <div className="pt-20">
                <div className="max-w-4xl mx-auto px-6 pt-12 pb-4 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-widest uppercase mb-4 border border-accent/20">
                        Transparent Pricing
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        What Does Taking Your Business Online Cost?
                    </h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Use our instant calculator to get a transparent estimate — no hidden fees, no surprises. Just tell us what you need.
                    </p>
                </div>
                <PlannerShell />
            </div>

            <Footer onOpenLegal={openLegal} onContact={() => setContactOpen(true)} />

            <ContactModal
                isOpen={contactOpen}
                onClose={() => setContactOpen(false)}
            />

            <LegalModal
                isOpen={legalOpen}
                onClose={() => setLegalOpen(false)}
                activeTab={legalTab}
            />
        </main>
    );
}
