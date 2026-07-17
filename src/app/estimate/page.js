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
