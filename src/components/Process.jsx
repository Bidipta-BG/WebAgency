"use client";
import React from 'react';
import { Search, Palette, Globe, CheckSquare, Rocket } from 'lucide-react';

const steps = [
    { icon: Search,      title: "Understand Your Business",   desc: "We start by learning your business, your customers, and your goals — in plain language." },
    { icon: Palette,     title: "Design Your Brand",          desc: "Logo, colors, and visuals that make your business look premium, professional, and trustworthy." },
    { icon: Globe,       title: "Build Your Online Presence", desc: "Website, app, or online store — built fast, built beautifully, and built to last." },
    { icon: CheckSquare, title: "Review & Perfect",           desc: "You see and approve everything before we go live. No surprises. Your vision, your approval." },
    { icon: Rocket,      title: "Launch & Keep Growing",      desc: "We launch your brand online and keep working to bring you more customers every month." },
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">The Journey</span>
                    <h2 className="text-3xl font-bold text-white mb-4">Your Journey: Offline to Online</h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm">
                        A simple, clear process — so you always know what happens next and never feel left in the dark.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center bg-transparent group">
                                <div className="w-24 h-24 rounded-full bg-surface-muted border-4 border-surface-highlight group-hover:border-accent/50 flex items-center justify-center mb-6 shadow-lg shadow-black/20 z-10 transition-colors">
                                    <step.icon className="w-8 h-8 text-accent" />
                                </div>
                                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Step {i + 1}</div>
                                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
