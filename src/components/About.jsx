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
                            We Are Your <span className="text-accent">Growth Partners.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            At AxomITLab, we believe that financial constraints shouldn't kill great ideas.
                            Inspired by total transparency, we founded this agency to bridge the gap between
                            startups and enterprise-grade technology.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Our unique <strong>EMI-based model</strong> ensures you can scale sustainably, while our{" "}
                            <strong>Lifetime Support</strong> guarantee means we never leave your side after launch.
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
                            { icon: ShieldCheck, title: "Trusted Quality", desc: "Rigorous testing and code reviews ensure enterprise security." },
                            { icon: Users, title: "Client First", desc: "We don't speak jargon. We speak your business language." },
                            { icon: Zap, title: "Fast Delivery", desc: "Agile sprints mean you see progress every single week." },
                            { icon: HeartHandshake, title: "Long-Term", desc: "We are in it for the long haul. Your success is our success." },
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
