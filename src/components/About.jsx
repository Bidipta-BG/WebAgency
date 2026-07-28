"use client";
import React from 'react';
import { HeartHandshake, MessageCircle, Clock3, BadgeCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-surface relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-900/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase">Who We Are</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mt-2 mb-6">
                            We Understand Your Business.{' '}
                            <br />
                            <span className="text-accent">We Build Your Brand.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            At Axom IT Lab, we started with one mission — helping local business owners who have built something great finally reach the customers they deserve online. We've worked with shop owners, restaurant owners, coaches, manufacturers, and service providers across India.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            We handle everything — from designing your logo to launching your website to running your social media. Our team uses the latest AI tools to do this <strong>faster</strong> and at a <strong>fraction of what traditional agencies charge</strong>.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-surface-muted border border-surface-highlight">
                                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                                <p className="text-sm text-slate-400">Businesses Launched</p>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-muted border border-surface-highlight">
                                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                                <p className="text-sm text-slate-400">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Values Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { icon: HeartHandshake, title: "We Handle Everything", desc: "From logo to launch to marketing — one trusted team handles your entire digital journey." },
                            { icon: MessageCircle, title: "We Speak Your Language", desc: "No jargon. Plain talk. We take time to understand your business and your customers first." },
                            { icon: Clock3, title: "Ready in Weeks", desc: "Your business is online and looking professional in weeks — not months. We move fast." },
                            { icon: BadgeCheck, title: "Budget-Friendly", desc: "Transparent pricing designed for local and growing businesses. No surprises, ever." },
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
