import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Target, ShieldCheck, Zap, Users, Code2, TrendingUp, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'About Axom IT Lab | AI-Powered Tech & Growth Partner',
    description: 'Axom IT Lab is an AI-powered agency that builds world-class websites, apps, and mobile experiences — and then helps you get customers through AI-driven digital marketing.',
};

const AboutPage = () => {
    const values = [
        {
            icon: ShieldCheck,
            title: "Trust First",
            desc: "We prioritize transparency in every line of code and every invoice."
        },
        {
            icon: Zap,
            title: "Performance",
            desc: "Speed is our religion. We build web apps that load in the blink of an eye."
        },
        {
            icon: Target,
            title: "Purposeful Design",
            desc: "We don't just build apps; we solve business problems with elegant UI/UX."
        },
        {
            icon: TrendingUp,
            title: "Growth-Driven",
            desc: "A great product needs an audience. We pair every build with AI marketing strategies."
        },
        {
            icon: ShieldCheck,
            title: "Risk-Free Promise",
            desc: "We stand behind every project we build with a transparent, proportional money-back guarantee.",
            isGuarantee: true
        }
    ];

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        We Don't Just Build Your Product.<br/>
                        <span className="text-accent">We Help You Grow It.</span>
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Axom IT Lab is an AI-powered agency combining cutting-edge development with data-driven marketing. We launch your ideas and then work alongside you to scale your customer base.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-surface-muted border border-surface-highlight hover:border-accent/40 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                <v.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{v.desc}</p>
                            {v.isGuarantee && (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-surface-highlight text-xs font-medium text-slate-300">
                                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                                    30-Day Guarantee
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Full-Cycle Story Section (New) */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-surface-muted to-surface border border-surface-highlight rounded-[3rem] p-8 md:p-16 text-center max-w-5xl mx-auto">
                        <div className="flex justify-center items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-surface-highlight flex items-center justify-center text-white border border-white/10">
                                <Code2 className="w-8 h-8" />
                            </div>
                            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            From "We Need a Website" to "We're Getting Customers"
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            After working with dozens of clients, we noticed a pattern. Within weeks of launching their website, every founder asked the same question: <strong>"Now how do we get customers?"</strong> That question is why we built our AI Marketing service. We don't just hand you a finished product — we stay alongside you for the growth phase too.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Philosophy Section (Replacing EMI Revolution) */}
            <section className="py-20 px-6 bg-surface-muted/50 border-y border-surface-highlight">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Pricing Philosophy</h2>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Most agencies demand a massive upfront payment, then charge unpredictable retainers. We do things differently.
                            We charge a transparent, <strong>one-time setup fee</strong> — so you know exactly what you're paying to launch.
                        </p>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            After that, a <strong>low, fixed monthly maintenance fee</strong> keeps your website live, fast, and fully supported. You own the code, you know the price, and you never have to worry about surprise hosting or maintenance bills.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-5 rounded-2xl bg-surface border border-surface-highlight shadow-sm">
                                <div className="text-xl font-bold text-accent mb-2">One-Time Setup</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Fixed, Known Price</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-surface border border-surface-highlight shadow-sm">
                                <div className="text-xl font-bold text-accent mb-2">Low Monthly</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Flat & Predictable</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video rounded-3xl overflow-hidden border border-surface-highlight shadow-2xl bg-surface flex items-center justify-center p-12 group hover:border-accent/30 transition-colors">
                            <Users className="w-48 h-48 text-accent opacity-5 absolute group-hover:scale-110 transition-transform duration-700" />
                            <div className="relative z-10 text-center">
                                <Users className="w-16 h-16 text-accent mx-auto mb-6" />
                                <div className="text-3xl font-bold text-white mb-3">50+ Businesses Launched</div>
                                <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">From local shops to funded startups — we've helped businesses across India launch their digital presence and generate leads.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Build. Ready to Grow.</h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Whether you're starting from scratch or looking to scale, we have a service tailored for every stage of your business.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            href="/estimate"
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-bright transition-all shadow-lg shadow-accent/25 hover:scale-105"
                        >
                            Start My Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/marketing"
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-surface text-white border border-surface-highlight px-8 py-4 rounded-full font-bold text-lg hover:border-white/30 hover:bg-white/5 transition-all"
                        >
                            <TrendingUp className="w-5 h-5 text-accent" />
                            Generate Leads
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
