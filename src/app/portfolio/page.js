import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Lock, PlaySquare } from 'lucide-react';

export const metadata = {
    title: 'Our Work | Client Portfolio | Axom IT Lab',
    description: 'Explore the high-end websites, mobile apps, and marketing campaigns built by Axom IT Lab for our clients.',
};

const PortfolioPage = () => {
    const projects = [
        {
            title: "5 Star Rating AI",
            location: "Online Platform",
            category: "AI Reputation Management",
            desc: "An AI-powered SaaS platform helping local Indian businesses automate Google reviews collection, display social proof widgets, and analyze customer sentiment.",
            tech: ["SaaS", "AI Integration", "Analytics"],
            link: "https://www.5starrating.in/",
            image: "/5star-rating.jpg"
        },
        {
            title: "Online Mandi",
            location: "Karnataka, India",
            category: "Agricultural Marketplace",
            desc: "A digital agricultural marketplace connecting farmers directly with buyers and vendors to secure better crop prices and transparent trading.",
            tech: ["Next.js", "Marketplace", "Localization"],
            link: "https://onlinemandi.in/",
            image: "/online-mandi.jpg"
        },
        {
            title: "RedCat Logistics",
            location: "Bangalore, India",
            category: "Transport & Logistics",
            desc: "A comprehensive house shifting and transport services website designed to facilitate seamless packing and moving for households and businesses.",
            tech: ["Web Design", "UI/UX", "Logistics SEO"],
            link: "https://www.redcatlogistics.com/",
            image: "/redcat-logistic.jpg"
        },
        {
            title: "TemplatePro",
            location: "Google Play Store",
            category: "Mobile Application",
            desc: "A feature-rich Android mobile application designed and developed to provide an engaging and seamless experience for mobile users.",
            tech: ["Android", "Mobile UI", "App Dev"],
            link: "https://play.google.com/store/apps/details?id=com.thevibecoder.greetify",
            image: "/template-pro.jpg"
        },
        {
            title: "Coursly",
            location: "Online Platform",
            category: "EdTech Platform",
            desc: "An AI mastery educational platform offering personalized learning plans, daily challenges, and professional certifications for leading AI tools.",
            tech: ["Next.js", "EdTech UI", "Platform Dev"],
            link: "https://www.coursly.in/",
            image: "/coursly.jpg"
        }
    ];

    return (
        <main className="min-h-screen bg-surface overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 border-b border-surface-highlight relative">
                <div className="max-w-4xl mx-auto text-center mb-10 relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-widest uppercase mb-6 border border-accent/20">
                        Our Work
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Real Projects.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-bright">Real Results.</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        From local salons to corporate law firms — here is a selection of the businesses we've helped build and grow their digital presence.
                    </p>
                </div>
            </section>

            {/* Project List (Horizontal Layout) */}
            <section className="py-24 px-6 relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -mt-40"></div>
                
                <div className="max-w-6xl mx-auto space-y-16 lg:space-y-32 relative z-10">
                    {projects.map((p, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Visual Block */}
                            <div className="w-full lg:w-5/12">
                                <div className="aspect-video rounded-[2rem] border border-surface-highlight overflow-hidden flex flex-col items-center justify-center relative shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] bg-surface-muted">
                                    <Image 
                                        src={p.image} 
                                        alt={p.title} 
                                        fill 
                                        className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                    <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-surface-muted/80 backdrop-blur-md border border-white/10 text-[10px] uppercase font-bold text-white tracking-widest shadow-lg z-10 pointer-events-none">
                                        {p.category}
                                    </div>
                                </div>
                            </div>

                            {/* Content Block */}
                            <div className="w-full lg:w-7/12 flex flex-col justify-center">
                                <div className="mb-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                                    <p className="text-sm text-slate-500 font-bold tracking-widest uppercase">{p.location}</p>
                                </div>
                                
                                <p className="text-slate-400 mb-8 leading-relaxed text-lg max-w-xl">{p.desc}</p>
                                
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-xs font-bold text-slate-300 bg-surface-muted px-4 py-2 rounded-lg border border-surface-highlight uppercase tracking-wider">{t}</span>
                                    ))}
                                </div>
                                
                                <div>
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface-muted border border-surface-highlight hover:border-accent hover:bg-accent/10 transition-all text-white font-bold group/btn"
                                    >
                                        <span>Visit Live Site</span>
                                        <ExternalLink className="w-5 h-5 text-accent opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Blurred Confidential Strip */}
                    <div className="w-full relative rounded-[2.5rem] bg-surface-muted border border-surface-highlight overflow-hidden shadow-xl mt-16 lg:mt-32 p-10 lg:p-16 text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <div className="w-20 h-20 rounded-3xl bg-surface-highlight border border-white/5 flex items-center justify-center mb-8">
                                <Lock className="w-10 h-10 text-slate-400" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">+ Several More</h3>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                                Our portfolio spans dozens of other high-impact websites, internal dashboards, and mobile applications that we keep private under strict client confidentiality agreements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 bg-surface-highlight/10 border-t border-surface-highlight">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 rounded-[2rem] bg-accent mx-auto mb-8 flex items-center justify-center text-white rotate-12 shadow-2xl shadow-accent/20">
                        <PlaySquare className="w-10 h-10 -rotate-12" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">Want Your Business Here?</h2>
                    <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
                        We are currently accepting new projects. Let's build something great together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            href="/estimate"
                            className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-accent/20 hover:scale-105 transition-transform w-full sm:w-auto"
                        >
                            Get a Free Estimate
                        </Link>
                        <Link 
                            href="/contact"
                            className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-colors w-full sm:w-auto"
                        >
                            Talk to Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PortfolioPage;
