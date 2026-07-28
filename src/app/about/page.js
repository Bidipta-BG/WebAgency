import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Clock3, BadgeCheck, TrendingUp, ArrowRight, Users } from 'lucide-react';

export const metadata = {
    title: 'About Axom IT Lab | We Help Businesses Go Online & Grow',
    description: 'Axom IT Lab helps local and offline businesses build their entire digital presence — logo, website, social media, and marketing. Your business-to-brand partner.',
};

const AboutPage = () => {
    const values = [
        {
            icon: HeartHandshake,
            title: "We Handle Everything",
            desc: "From your first logo to running your social media — one team, one place. You never have to manage multiple vendors."
        },
        {
            icon: BadgeCheck,
            title: "We Speak Your Language",
            desc: "No jargon. Plain talk. We take time to understand your business and your customers before we do anything."
        },
        {
            icon: Clock3,
            title: "Ready in Weeks",
            desc: "Your business is online and looking professional in weeks — not months. We move fast without cutting corners."
        },
        {
            icon: ShieldCheck,
            title: "Risk-Free Promise",
            desc: "We stand behind every project we build with a transparent, proportional money-back guarantee. No risk to you.",
            isGuarantee: true
        },
        {
            icon: Users,
            title: "Budget-Friendly",
            desc: "Transparent pricing designed for local and growing businesses. Know exactly what you pay before you say yes."
        }
    ];

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-widest uppercase mb-6 border border-accent/20">
                        Who We Are
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        We Help Businesses Like Yours{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-bright">Succeed Online.</span>
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        From the first logo to the first online customer — Axom IT Lab is your complete digital partner. We've helped shops, clinics, restaurants, coaches, and service businesses across India establish their online presence and grow.
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

            {/* Story Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-surface-muted to-surface border border-surface-highlight rounded-[3rem] p-8 md:p-16 text-center max-w-5xl mx-auto">
                        <div className="flex justify-center items-center gap-4 mb-8">
                            <div className="text-4xl">🏪</div>
                            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                            <div className="text-4xl">🌐</div>
                            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                            <div className="text-4xl">📈</div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            From "I Have a Business" to "I Have a Brand"
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            We've worked with hundreds of local business owners who had something great to offer — but no one online knew about them.
                            That's the gap we close. We don't just deliver a website and disappear. We stick with you, help you get found on Google,
                            build your social presence, and keep growing your customer base month after month.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Philosophy Section */}
            <section className="py-20 px-6 bg-surface-muted/50 border-y border-surface-highlight">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Pricing Philosophy</h2>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Most agencies demand a massive upfront payment, then charge unpredictable retainers. We do things differently.
                            We charge a transparent, <strong>one-time setup fee</strong> — so you know exactly what you're paying to launch.
                        </p>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            After that, a <strong>low, fixed monthly maintenance fee</strong> keeps your website live, fast, and fully supported. You own the code, you know the price, and you never have to worry about surprise bills.
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
                                <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">From local shops to growing startups — we've helped businesses across India build their digital presence and generate customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Take Your Business Online?</h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Whether you're starting from zero or looking to grow further — we have a plan tailored for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/estimate"
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-bright transition-all shadow-lg shadow-accent/25 hover:scale-105"
                        >
                            Take My Business Online
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/marketing"
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-surface text-white border border-surface-highlight px-8 py-4 rounded-full font-bold text-lg hover:border-white/30 hover:bg-white/5 transition-all"
                        >
                            <TrendingUp className="w-5 h-5 text-accent" />
                            Grow My Revenue
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
