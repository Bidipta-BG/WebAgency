"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scissors, Coffee, HardHat } from 'lucide-react';

const teaserProjects = [
    {
        title: "Serene Salon & Spa",
        category: "Salon & Spa",
        desc: "Full website with booking integration & Google Business setup.",
        tech: ["Next.js", "Booking API"],
        icon: Scissors,
        color: "from-pink-500/20 to-rose-500/5",
        iconColor: "text-pink-400"
    },
    {
        title: "GreenBite Café",
        category: "Restaurant & Café",
        desc: "Restaurant website with menu, online orders, and Instagram integration.",
        tech: ["React", "Insta API"],
        icon: Coffee,
        color: "from-emerald-500/20 to-teal-500/5",
        iconColor: "text-emerald-400"
    },
    {
        title: "BuildRight Constructions",
        category: "Construction",
        desc: "Portfolio website showcasing projects, testimonials, and lead capture.",
        tech: ["Next.js", "CRM Integration"],
        icon: HardHat,
        color: "from-amber-500/20 to-orange-500/5",
        iconColor: "text-amber-400"
    }
];

const ClientWork = () => {
    return (
        <section id="work" className="py-24 bg-surface-muted border-y border-surface-highlight">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Our Work</span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Trusted by Ambitious Brands Nationwide
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Real products, built for real clients. Here's a glimpse of what we've delivered.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {teaserProjects.map((p, i) => (
                        <div key={i} className="flex flex-col rounded-3xl bg-surface border border-surface-highlight overflow-hidden hover:border-accent/40 transition-all group">
                            {/* Dummy Image Placeholder */}
                            <div className={`aspect-video bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
                                <p.icon className={`w-16 h-16 ${p.iconColor} opacity-50 group-hover:scale-110 transition-transform duration-500`} />
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md border border-white/5 text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                                    {p.category}
                                </div>
                            </div>
                            
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">{p.desc}</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold text-slate-500 bg-surface-highlight/30 px-2.5 py-1 rounded-md border border-surface-highlight">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link 
                        href="/portfolio"
                        className="inline-flex items-center justify-center gap-2 bg-surface text-white border border-surface-highlight px-8 py-4 rounded-xl font-semibold hover:border-accent hover:text-accent transition-all"
                    >
                        View All Client Work
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClientWork;
