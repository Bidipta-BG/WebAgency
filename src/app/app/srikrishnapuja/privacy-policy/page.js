import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, EyeOff, FolderOpen, Mail } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | Shri Krishna: Daily Puja Aarti',
    description: 'Privacy Policy for Shri Krishna: Daily Puja Aarti application. Learn how we handle your data.',
};

const PrivacyPolicyPage = () => {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 text-accent mb-6">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-400">
                            Last Updated: February 7, 2026
                        </p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="w-6 h-6 text-accent" />
                                <h2 className="text-2xl font-bold text-white m-0">Overview</h2>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                <strong>The Vibe Coder</strong> ("we", "us", or "our") operates the <strong>Shri Krishna: Daily Puja Aarti</strong> mobile application (the "Service"). 
                                This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                            </p>
                        </section>

                        <section className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-3xl bg-surface-muted border border-surface-highlight">
                                <div className="flex items-center gap-3 mb-4">
                                    <EyeOff className="w-6 h-6 text-accent" />
                                    <h3 className="text-xl font-bold text-white m-0">Data Collection</h3>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    We do not collect any personal information. Our application is designed to be fully functional offline.
                                </p>
                                <ul className="text-slate-500 text-xs space-y-2 list-none p-0">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                        <span><strong>Personal Data:</strong> None. No names, emails, or phone numbers.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                        <span><strong>Usage Data:</strong> None. No third-party tracking or analytics.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                        <span><strong>Location Data:</strong> None. No GPS or network tracking.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl bg-surface-muted border border-surface-highlight">
                                <div className="flex items-center gap-3 mb-4">
                                    <FolderOpen className="w-6 h-6 text-accent" />
                                    <h3 className="text-xl font-bold text-white m-0">Media & Files</h3>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    The Service requests specific permissions to provide features:
                                </p>
                                <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
                                    <p className="text-slate-400 text-xs leading-relaxed italic">
                                        "Media Library / Storage: This permission is used solely to allow you to save (download) wallpapers from the app to your device's gallery. We do not access, read, or upload any other photos or files from your device."
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                We do not use any third-party services that collect information used to identify you. 
                                The app includes no advertisements, no social media login integrations, and no payment processors.
                            </p>
                        </section>

                        <section className="p-8 rounded-3xl bg-accent/5 border border-accent/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="w-6 h-6 text-accent" />
                                <h2 className="text-2xl font-bold text-white m-0">Contact Us</h2>
                            </div>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <a 
                                href="mailto:bidiptabikashgogoi@gmail.com" 
                                className="text-accent hover:text-accent-bright font-medium transition-colors"
                            >
                                bidiptabikashgogoi@gmail.com
                            </a>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPolicyPage;
