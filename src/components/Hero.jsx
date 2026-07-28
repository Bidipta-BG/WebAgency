"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Palette, Globe, BarChart3, Sparkles } from 'lucide-react';
import Link from 'next/link';
import GuaranteeBadge from './GuaranteeBadge';

const journeySteps = [
    { icon: Palette,  label: 'Logo & Brand Identity',  color: 'from-amber-500/20 to-orange-500/20',  dot: 'bg-amber-400' },
    { icon: Globe,    label: 'Website Goes Live',       color: 'from-orange-500/20 to-amber-400/20',  dot: 'bg-orange-400' },
    { icon: BarChart3,label: 'Social Media & Ads',      color: 'from-amber-400/20 to-orange-400/20',  dot: 'bg-amber-500' },
    { icon: TrendingUp,label: 'Customers Start Coming', color: 'from-orange-400/20 to-amber-500/20',  dot: 'bg-green-400' },
];

const Hero = ({ onOpenGuarantee }) => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-amber-950/20 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute top-20 right-20 -z-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-orange-900/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold mb-6 border border-accent/20 text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Your Complete Digital Presence Partner
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        From Business to Brand,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-bright">We Handle Everything.</span>
                    </h1>

                    <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                        Whether you're <span className="font-semibold text-white">starting fresh</span>, already have a website but{' '}
                        <span className="font-semibold text-white">aren't growing</span>, or want to{' '}
                        <span className="font-semibold text-white">completely rebrand</span> — we handle everything.
                        Logo, website, social media, and marketing. One team, end to end.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <a
                            href="#calculator"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-bright transition-all shadow-lg shadow-accent/25"
                        >
                            Build My Brand Online
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#process"
                            className="inline-flex items-center justify-center gap-2 bg-surface-highlight text-white border border-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
                        >
                            See How It Works
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/marketing"
                            className="inline-flex items-center justify-center gap-2 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium hover:text-white hover:bg-surface-highlight transition-all border border-transparent hover:border-white/10 w-fit"
                        >
                            <TrendingUp className="w-4 h-4 text-accent" />
                            Already online? Let us grow your revenue
                            <ArrowRight className="w-4 h-4 opacity-70" />
                        </Link>
                    </div>

                    <div className="mt-10 flex gap-6 text-sm text-slate-500 flex-wrap">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Logo & Brand Identity</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Website & Online Store</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Social Media & Marketing</span>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <GuaranteeBadge onOpen={onOpenGuarantee} text="Full refund if not satisfied" />
                        <span className="text-slate-500 text-sm italic">✦ No hidden fees</span>
                    </div>
                </motion.div>

                {/* Hero Visual — Offline → Online Transformation Journey */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface-muted p-6">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                            </div>
                            <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Your Business Transformation</span>
                        </div>

                        {/* Start Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-surface-highlight/60 border border-white/5 mb-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0">🏪</div>
                            <div>
                                <p className="font-bold text-white text-sm">Your Local Business</p>
                                <p className="text-xs text-slate-500 mt-0.5">Great products. Great service. But no one online knows you yet.</p>
                            </div>
                            <div className="ml-auto px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold">OFFLINE</div>
                        </motion.div>

                        {/* Arrow */}
                        <div className="flex justify-center my-1">
                            <div className="w-0.5 h-6 bg-gradient-to-b from-accent/40 to-accent/80"></div>
                        </div>

                        {/* Journey Steps */}
                        <div className="space-y-2">
                            {journeySteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.15 }}
                                    className={`flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r ${step.color} border border-white/5`}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-surface-highlight flex items-center justify-center flex-shrink-0">
                                        <step.icon className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-white text-sm font-medium">{step.label}</span>
                                    <div className={`ml-auto w-2 h-2 rounded-full ${step.dot} ${i === journeySteps.length - 1 ? 'animate-pulse' : ''}`}></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Connector */}
                        <div className="flex justify-center my-1">
                            <div className="w-0.5 h-6 bg-gradient-to-b from-accent/80 to-green-400/80"></div>
                        </div>

                        {/* Result Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
                        >
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl flex-shrink-0">📈</div>
                            <div>
                                <p className="font-bold text-white text-sm">Your Brand, Online & Growing</p>
                                <p className="text-xs text-slate-400 mt-0.5">Customers find you, trust you, and buy from you — 24/7.</p>
                            </div>
                            <div className="ml-auto px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-bold">LIVE</div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-4 flex items-center justify-between p-3 rounded-xl bg-surface-highlight/50 border border-accent/20"
                        >
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-xs text-slate-300 font-medium">Average time to go live</span>
                            </div>
                            <span className="text-accent font-bold text-sm">2–3 Weeks</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
