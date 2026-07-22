import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ExternalLink, Lock, Scissors, Coffee, HardHat, GraduationCap, Scale, PlaySquare } from 'lucide-react';

export const metadata = {
    title: 'Our Work | Client Portfolio | Axom IT Lab',
    description: 'Explore the high-end websites, mobile apps, and marketing campaigns built by Axom IT Lab for our clients.',
};

const PortfolioPage = () => {
    const projects = [
        {
            title: "Serene Salon & Spa",
            location: "Mumbai, India",
            category: "Salon & Spa",
            desc: "A complete digital overhaul including a custom responsive website, integrated booking system for appointments, and optimized Google Business profile to capture local search traffic.",
            tech: ["Next.js", "Booking API", "Local SEO"],
            link: "#",
            icon: Scissors,
            color: "from-pink-500/20 to-rose-500/5",
            iconColor: "text-pink-400"
        },
        {
            title: "GreenBite Café",
            location: "Bangalore, India",
            category: "Restaurant & Café",
            desc: "Developed a modern restaurant website featuring a dynamic digital menu, online ordering capabilities, and live Instagram feed integration to showcase daily specials.",
            tech: ["React", "Insta API", "E-commerce"],
            link: "#",
            icon: Coffee,
            color: "from-emerald-500/20 to-teal-500/5",
            iconColor: "text-emerald-400"
        },
        {
            title: "BuildRight Constructions",
            location: "Delhi, India",
            category: "Construction",
            desc: "Built a professional corporate portfolio website to showcase completed infrastructure projects, featuring client testimonials and a robust lead capture system for new contracts.",
            tech: ["Next.js", "CRM Integration", "CMS"],
            link: "#",
            icon: HardHat,
            color: "from-amber-500/20 to-orange-500/5",
            iconColor: "text-amber-400"
        },
        {
            title: "BrightMinds Academy",
            location: "Pune, India",
            category: "School & Coaching",
            desc: "Created a high-converting admission landing page equipped with detailed course information, an automated enquiry form, and direct WhatsApp chat integration for instant student support.",
            tech: ["React", "WhatsApp API", "Lead Gen"],
            link: "#",
            icon: GraduationCap,
            color: "from-blue-500/20 to-indigo-500/5",
            iconColor: "text-blue-400"
        },
        {
            title: "LexPro Advocates",
            location: "Hyderabad, India",
            category: "Law Firm",
            desc: "Designed and developed a distinguished, authoritative law firm website detailing practice areas, attorney profiles, and a secure contact portal for client consultations.",
            tech: ["Next.js", "TailwindCSS", "Security"],
            link: "#",
            icon: Scale,
            color: "from-slate-500/20 to-gray-500/5",
            iconColor: "text-slate-400"
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
                                <div className={`aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br ${p.color} border border-surface-highlight overflow-hidden flex flex-col items-center justify-center relative p-8 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]`}>
                                    <p.icon className={`w-28 h-28 ${p.iconColor} opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500`} />
                                    <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-surface-muted/80 backdrop-blur-md border border-white/10 text-[10px] uppercase font-bold text-white tracking-widest shadow-lg">
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
