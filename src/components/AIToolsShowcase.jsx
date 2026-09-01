"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, Zap } from 'lucide-react';

const aiTools = [
    {
        emoji: '🧠',
        name: 'Claude & ChatGPT',
        use: 'Copy & Content Writing',
        desc: 'We write your website content, social captions, and ad copy in minutes.'
    },
    {
        emoji: '🎨',
        name: 'Midjourney & Firefly',
        use: 'Logo & Brand Design',
        desc: 'AI-assisted design tools let us create premium logos and brand visuals faster.'
    },
    {
        emoji: '💻',
        name: 'GitHub Copilot',
        use: 'Faster Website Coding',
        desc: 'Our developers code your website 3x faster using AI — saving you money.'
    },
    {
        emoji: '📊',
        name: 'Google & Meta AI',
        use: 'Smarter Ad Campaigns',
        desc: 'AI optimizes your ads in real time so every rupee you spend works harder.'
    },
    {
        emoji: '📱',
        name: 'Meta AI Tools',
        use: 'Social Media Content',
        desc: 'We create and schedule weeks of social content in a single day using AI.'
    },
    {
        emoji: '🔍',
        name: 'Semrush AI',
        use: 'SEO & Visibility',
        desc: 'AI pinpoints exactly what your customers search for — so they find you first.'
    },
    {
        emoji: '🎬',
        name: 'Runway ML',
        use: 'Promo Video Creation',
        desc: 'Eye-catching promotional videos and reels created at a fraction of the cost.'
    },
    {
        emoji: '🤖',
        name: 'Zapier & Make',
        use: 'Business Automation',
        desc: 'Automated replies, bookings, and workflows so your business runs even when you sleep.'
    },
];

const AIToolsShowcase = () => {
    return (
        <section className="py-24 bg-surface-muted relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold mb-6 border border-accent/20 text-sm">
                        <Cpu className="w-4 h-4" />
                        How We Deliver More for Less
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        We Use the World's Best AI Tools —{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-bright">So You Pay Less</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Traditional agencies charge you for 10x the time it takes us. By equipping our team with
                        cutting-edge AI tools, we eliminate repetitive work and <strong className="text-white">pass those savings directly to you</strong>.
                    </p>
                </div>

                {/* Tool Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {aiTools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="p-5 rounded-2xl bg-surface border border-surface-highlight hover:border-accent/30 transition-all group"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="text-2xl leading-none">{tool.emoji}</div>
                                <div>
                                    <p className="font-bold text-white text-sm">{tool.name}</p>
                                    <p className="text-accent text-xs font-semibold mt-0.5">{tool.use}</p>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">{tool.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Banner */}
                <div className="rounded-2xl border border-surface-highlight bg-surface overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-0">
                        {/* Traditional Agency */}
                        <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-surface-highlight">
                            <div className="text-3xl mb-3">🏢</div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Traditional Agency</p>
                            <div className="space-y-2 w-full">
                                <div className="flex justify-between items-center text-sm py-2 border-b border-surface-highlight">
                                    <span className="text-slate-400">Timeline</span>
                                    <span className="text-warning font-bold">3–6 months</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-2 border-b border-surface-highlight">
                                    <span className="text-slate-400">Cost</span>
                                    <span className="text-warning font-bold">₹5L – ₹20L+</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-2">
                                    <span className="text-slate-400">Revisions</span>
                                    <span className="text-warning font-bold">Limited & costly</span>
                                </div>
                            </div>
                        </div>

                        {/* VS */}
                        <div className="p-8 flex flex-col items-center justify-center text-center bg-accent/5 border-b md:border-b-0 md:border-r border-surface-highlight">
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                                <Zap className="w-7 h-7 text-accent" />
                            </div>
                            <p className="text-white font-bold text-lg mb-2">The Difference?</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We use AI for everything — so our team works faster, smarter, and leaner. Same quality.
                                <span className="text-accent font-semibold"> Way lower cost.</span>
                            </p>
                        </div>

                        {/* Axom IT Lab */}
                        <div className="p-8 flex flex-col items-center text-center">
                            <div className="text-3xl mb-3">🚀</div>
                            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">XOM Digital</p>
                            <div className="space-y-2 w-full">
                                <div className="flex justify-between items-center text-sm py-2 border-b border-surface-highlight">
                                    <span className="text-slate-400">Timeline</span>
                                    <span className="text-success font-bold">2–4 weeks</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-2 border-b border-surface-highlight">
                                    <span className="text-slate-400">Cost</span>
                                    <span className="text-success font-bold">Fraction of the above</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-2">
                                    <span className="text-slate-400">Revisions</span>
                                    <span className="text-success font-bold">Unlimited till happy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="p-6 bg-surface-muted border-t border-surface-highlight text-center">
                        <p className="text-slate-400 text-sm mb-4">
                            Curious about the exact cost for your business? Use our instant calculator.
                        </p>
                        <a
                            href="#calculator"
                            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-accent-bright transition-all shadow-lg shadow-accent/25"
                        >
                            See Pricing for My Business
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIToolsShowcase;
