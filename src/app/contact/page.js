import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Instagram, Facebook, CheckCircle2 } from 'lucide-react';

const XIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const metadata = {
    title: 'Contact Axom IT Lab | Let\'s Take Your Business Online',
    description: 'Get in touch with Axom IT Lab. Free consultation for local businesses looking to build their website, logo, social media presence, and start growing online.',
};

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    <ContactForm />

                    <div>
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">Free Consultation</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Let's Get Your Business{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-bright">Online.</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 max-w-md">
                            Tell us about your business and we'll tell you exactly how we can help — free consultation, no commitments, no jargon.
                        </p>

                        {/* Trust chips */}
                        <div className="flex flex-wrap gap-3 mb-12">
                            {[
                                'Free Consultation',
                                'Response within 24 hours',
                                'No jargon, just plain talk',
                            ].map(chip => (
                                <div key={chip} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-muted border border-surface-highlight text-sm text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                    {chip}
                                </div>
                            ))}
                        </div>

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
