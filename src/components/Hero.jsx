import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-slate-100 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute top-20 right-20 -z-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold mb-6 border border-accent/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Accepting New Projects
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        Build Now, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-bright">Pay Monthly.</span>
                    </h1>

                    <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                        We transform your ideas into world-class software with our flexible
                        <span className="font-semibold text-white"> Monthly Subscription Model</span>.
                        Get enterprise-grade development without the massive initial investment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#calculator"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-bright transition-all shadow-lg shadow-accent/25"
                        >
                            See Monthly Plans
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#process"
                            className="inline-flex items-center justify-center gap-2 bg-surface-highlight text-white border border-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
                        >
                            How It Works
                        </a>
                    </div>

                    <div className="mt-10 flex gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>0% Interest</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Cancel Anytime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Lifetime Support</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-surface-muted group">
                        {/* Abstract UI Mockup */}
                        <div className="absolute inset-0 bg-gradient-to-br from-surface-highlight to-surface p-8 flex flex-col">
                            <div className="w-full flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>

                            <div className="flex-1 flex gap-6 p-6">
                                {/* Sidebar Mockup */}
                                <div className="w-16 h-full bg-surface-highlight/30 rounded-xl hidden sm:flex flex-col items-center py-4 gap-4 border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-accent text-[10px] grid place-items-center font-bold text-white mb-2">A</div>
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? 'bg-white/10 text-white' : 'text-slate-500'} grid place-items-center`}>
                                            <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                                        </div>
                                    ))}
                                </div>

                                {/* Main Dashboard Area */}
                                <div className="flex-1 flex flex-col gap-4">
                                    {/* Top Stats Row */}
                                    <div className="flex gap-4">
                                        <div className="flex-1 p-4 rounded-xl bg-surface-highlight/40 border border-white/5 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-3 opacity-20"><div className="w-12 h-12 bg-accent rounded-full blur-xl"></div></div>
                                            <p className="text-xs text-slate-400 mb-1">Fastest Delivery Time</p>
                                            <p className="text-xl font-bold text-white">3 Weeks <span className="text-xs font-normal text-emerald-400">Idea to Live</span></p>
                                        </div>
                                        <div className="flex-1 p-4 rounded-xl bg-surface-highlight/40 border border-white/5 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-3 opacity-20"><div className="w-12 h-12 bg-purple-500 rounded-full blur-xl"></div></div>
                                            <p className="text-xs text-slate-400 mb-1">Projects Delivered</p>
                                            <p className="text-xl font-bold text-white">50+ <span className="text-xs font-normal text-emerald-400">Success</span></p>
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="flex-1 bg-surface-highlight/40 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-4 w-24 bg-white/10 rounded-full"></div>
                                            <div className="h-3 w-16 bg-white/5 rounded-full"></div>
                                        </div>

                                        {/* CSS Graph Representation */}
                                        <div className="flex items-end justify-between h-24 gap-2 px-2 pb-2">
                                            {[30, 45, 35, 60, 50, 70, 55, 80, 65].map((h, i) => (
                                                <div key={i} className="w-full bg-accent/20 rounded-t-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                                                    <div className="absolute bottom-0 w-full bg-accent/40 h-0 transition-all duration-500 group-hover:h-full"></div>
                                                    <div className="absolute top-0 w-full h-[2px] bg-accent/60"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom List Mockup */}
                                    <div className="h-16 bg-surface-highlight/40 rounded-xl border border-white/5 p-3 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface-highlight border border-white/5"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                                            <div className="w-1/2 h-2 bg-white/5 rounded-full"></div>
                                        </div>
                                        <div className="w-16 h-6 bg-emerald-500/10 rounded-full border border-emerald-500/20"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-8 right-8 bg-surface-muted p-4 rounded-xl shadow-2xl border border-surface-highlight max-w-xs z-20"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                        <span className="font-bold text-lg">₹</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Starting from</p>
                                        <p className="font-bold text-white">₹399<span className="text-xs font-normal text-slate-500">/mo</span></p>
                                    </div>
                                </div>
                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-accent rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Hero;
