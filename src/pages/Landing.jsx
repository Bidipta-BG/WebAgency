import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import CostCalculator from '../components/CostCalculator';
import About from '../components/About';
import Footer from '../components/Footer';
import LegalModal from '../components/LegalModal';
import ContactModal from '../components/ContactModal';

const Landing = () => {
    const [legalOpen, setLegalOpen] = React.useState(false);
    const [contactOpen, setContactOpen] = React.useState(false);
    const [legalTab, setLegalTab] = React.useState('privacy');

    const openLegal = (tab) => {
        setLegalTab(tab);
        setLegalOpen(true);
    };

    return (
        <div className="bg-surface-muted min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <Process />
                <CostCalculator onContact={() => setContactOpen(true)} />
            </main>
            <Footer onOpenLegal={openLegal} onContact={() => setContactOpen(true)} />
            <LegalModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} activeTab={legalTab} />
            <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
        </div>
    );
};

export default Landing;
