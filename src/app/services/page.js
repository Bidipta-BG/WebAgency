import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Store, Smartphone, BrainCircuit, Globe, Rocket, TrendingUp, ShieldCheck, Bot } from 'lucide-react';
import AIToolsShowcase from '@/components/AIToolsShowcase';

export const metadata = {
    title: 'Everything We Do For Your Business | Axom IT Lab',
    description: 'From your first logo to your first online customer — Axom IT Lab handles your entire digital presence. Website, branding, app, social media, and marketing.',
};

const ServicesPage = () => {
    const services = [
        {
            title: "Your Professional Business Website",
            icon: Globe,
            outcomes: ["24/7 online presence", "Local SEO ready", "Mobile-friendly", "Customer inquiry forms"],
            desc: "A stunning website that works even when your shop is closed. We build sites that look premium, load fast, and turn visitors into paying customers — not just a pretty page, but a real business tool."
        },
        {
            title: "Mobile App for Your Customers",
            icon: Smartphone,
            outcomes: ["Appointment booking", "Online orders", "Push notifications", "Android & iOS"],
            desc: "Let customers book appointments, place orders, or contact you directly from their phones. We build Android & iOS apps that make your business easy to access — and hard to forget."
        },
        {
            title: "Smart Business Tools & Automation",
            icon: Bot,
            outcomes: ["AI chatbots", "Auto booking systems", "Automated replies", "WhatsApp integration"],
            desc: "Run your business smarter. From an AI chatbot that answers customer questions 24/7 to an automated booking system that works while you sleep — we help you do more with less effort.",
        },
        {
            title: "Grow Your Customer Base Online",
            icon: TrendingUp,
            outcomes: ["Google Ads", "Instagram & Facebook", "SEO", "Social media management"],
            desc: "Once you're online, we bring customers to you. We manage your social media, run targeted ad campaigns, and optimise your Google presence — so real customers find you every day.",
            isMarketing: true
        }
    ];

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-widest uppercase mb-6 border border-accent/20">
                        What We Do
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Everything We Do{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-bright">For Your Business</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        From your first logo to your first online sale — one agency handles it all. No juggling multiple vendors, no confusion.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto space-y-10">
                    {services.map((s, i) => (
                        <div key={i} className="group p-8 md:p-12 rounded-[2.5rem] bg-surface-muted border border-surface-highlight hover:border-accent/30 transition-all flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                <s.icon className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{s.title}</h2>
                                <p className="text-slate-400 text-lg mb-6 leading-relaxed max-w-3xl">{s.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.outcomes.map(t => (
                                        <span key={t} className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                                            ✓ {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {s.isMarketing ? (
                                <Link href="/marketing" className="hidden lg:flex items-center gap-2 text-accent font-bold text-sm self-center hover:text-white transition-colors group/link px-4 py-2 border border-accent/30 rounded-full hover:bg-accent hover:border-accent whitespace-nowrap">
                                    <span>Get More Customers</span>
                                    <Rocket className="w-4 h-4 translate-y-0.5 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            ) : (
                                <Link href="/contact" className="hidden lg:flex items-center gap-2 text-accent font-bold text-sm self-center hover:text-white transition-colors group/link whitespace-nowrap">
                                    <span>Learn More</span>
                                    <Rocket className="w-4 h-4 translate-y-0.5 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* AI Tools Section */}
            <AIToolsShowcase />

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-12 md:p-20 text-center">
                    <Store className="w-12 h-12 text-accent mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a unique business requirement?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you sell sarees, run a factory, offer home services, or anything in between — we've helped businesses just like yours build their online presence.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                        Let's Talk About Your Business
                    </Link>
                </div>
            </section>

            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center p-6 rounded-2xl border border-surface-highlight bg-surface-muted">
                    <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-slate-300 font-medium">
                        <strong className="text-white">Satisfaction Guarantee:</strong> We stand behind every project we build with a transparent money-back policy.
                    </span>
                    <Link href="/?guarantee=true" className="text-sm font-bold text-accent hover:text-white transition-colors ml-2 flex items-center gap-1">
                        Learn More <Rocket className="w-3 h-3" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServicesPage;
