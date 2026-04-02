"use client";
import React from 'react';
import { ShieldCheck, Users, Zap, HeartHandshake } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-surface relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase">Who We Are</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mt-2 mb-6">
                            More Than Code. <br />
                            We Are Your <span className="text-accent">Expert Team.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            At Axom IT Lab, we believe that world-class technology shouldn't be gated by massive budgets. 
                            We founded this agency to bridge the gap between startups and enterprise-grade tech by equipping 
                            our incredibly talented human developers with the latest artificial intelligence tools.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            By integrating modern AI into our daily workflows, our developers, designers, and testers <strong>eliminate boilerplate work</strong>, {" "}
                            <strong>accelerate delivery</strong>, and <strong>drastically cut development costs</strong>—passing those savings directly to you.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-surface-muted border border-surface-highlight">
                                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                                <p className="text-sm text-slate-400">Global Clients</p>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-muted border border-surface-highlight">
                                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                                <p className="text-sm text-slate-400">Project Success</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Values Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { icon: ShieldCheck, title: "Expert QA Testers", desc: "Our QA engineers use AI tools to catch bugs faster and ensure enterprise security." },
                            { icon: Users, title: "Real Humans", desc: "We don't speak robot. You will always interface with an empathetic human manager." },
                            { icon: Zap, title: "Lightning Fast", desc: "Our developers use AI-assisted sprints so you see progress in days, not months." },
                            { icon: HeartHandshake, title: "Cost Effective", desc: "We are extremely efficient, and we pass those cost savings directly to you." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-surface-muted shadow-lg shadow-black/20 border border-surface-highlight hover:-translate-y-1 transition-transform">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
