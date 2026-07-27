"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const teaserProjects = [
    {
        title: "RedCat Logistics",
        category: "Transport & Logistics",
        desc: "Comprehensive house shifting and transport services website.",
        tech: ["Web Design", "UI/UX", "Logistics SEO"],
        image: "/redcat-logistic.jpg"
    },
    {
        title: "5 Star Rating AI",
        category: "AI Reputation Management",
        desc: "AI-powered SaaS platform for automating Google reviews and reputation management.",
        tech: ["SaaS", "AI Integration", "Analytics"],
        image: "/5star-rating.jpg"
    },
    {
        title: "TemplatePro",
        category: "Mobile Application",
        desc: "A feature-rich Android mobile application for an engaging user experience.",
        tech: ["Android", "Mobile UI", "App Dev"],
        image: "/template-pro.jpg"
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
                            {/* Visual Block */}
                            <div className="aspect-video relative overflow-hidden bg-surface-muted">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-surface-muted/80 backdrop-blur-md border border-white/10 text-[10px] uppercase font-bold text-white tracking-wider z-10 pointer-events-none">
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
