"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AIToolsShowcase from '../components/AIToolsShowcase';
import Process from '../components/Process';
import About from '../components/About';
import ClientWork from '../components/ClientWork';
import Footer from '../components/Footer';
import LegalModal from '../components/LegalModal';
import ContactModal from '../components/ContactModal';
import GuaranteeModal from '../components/GuaranteeModal';
import PlannerShell from '../components/planner/PlannerShell';

export default function Home() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [guaranteeOpen, setGuaranteeOpen] = React.useState(false);

  return (
    <div className="bg-surface-muted min-h-screen">
      <Navbar />
      <main>
        <Hero onOpenGuarantee={() => setGuaranteeOpen(true)} />
        <Services />
        <AIToolsShowcase />
        <Process />
        <ClientWork />
        <About />
        <PlannerShell />
      </main>
      <Footer onContact={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <GuaranteeModal isOpen={guaranteeOpen} onClose={() => setGuaranteeOpen(false)} />
    </div>
  );
}
