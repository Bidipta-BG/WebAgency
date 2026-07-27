import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const XIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const metadata = {
    title: 'Contact Axom IT Lab | Start Your Project Today',
    description: 'Get in touch with Axom IT Lab. Located in Bengaluru, serving clients worldwide with premium software development and flexible EMI options.',
};

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    <ContactForm />

                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Let's <span className="text-accent underline underline-offset-8">Talk</span>.
                        </h1>
                        <p className="text-lg text-slate-400 mb-12 max-w-md">
                            Have a vision? We have the team. Reach out for a free consultation and project estimate.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted border border-surface-highlight flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email Us</div>
                                    <div className="text-xl text-white font-medium">support@axomitlab.com</div>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted border border-surface-highlight flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Call Us</div>
                                    <a href="tel:+919606914772" className="text-xl text-white font-medium hover:text-accent transition-colors">+91 96069 14772</a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted border border-surface-highlight flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Location</div>
                                    <div className="text-xl text-white font-medium">BTM Layout, Bengaluru, Karnataka, India</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-surface-highlight">
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/share/18ZyBCEHLJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent transition-all">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/axomitlab?igsh=YTA3YmFpaWRhd3Q0" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                {/*
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent transition-all">
                                    <XIcon className="w-4 h-4" />
                                </a>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
