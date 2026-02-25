import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Layers, Github, PlaySquare } from 'lucide-react';

export const metadata = {
    title: 'Portfolio | Showcase of Our Digital Solutions | Axom IT Lab',
    description: 'Explore the high-end mobile apps and web platforms built by Axom IT Lab. See how we transform ideas into scalable technology.',
};

const PortfolioPage = () => {
    const projects = [
        {
            title: "TemplatePro",
            category: "Mobile Application",
            desc: "A premium graphics automation tool enabling users to create marketing materials in seconds.",
            tech: ["React Native", "Expo", "Image Processing"],
            link: "https://play.google.com/store/apps/details?id=com.thevibecoder.greetify",
            img: "/assets/images/templatePro.png"
        },
        {
            title: "FinStream",
            category: "Web Platform",
            desc: "Real-time financial data visualization dashboard for crypto and stock enthusiasts.",
            tech: ["Next.js", "WebSockets", "D3.js"],
            link: "#",
            img: null
        }
    ];

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Case <span className="text-accent italic">Studies</span>
                    </h1>
                    <p className="text-slate-500 text-lg">A selection of our finest work, spanning across industries and devices.</p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                    {projects.map((p, i) => (
                        <div key={i} className="group flex flex-col rounded-[2.5rem] bg-surface-muted border border-surface-highlight overflow-hidden hover:border-accent/40 transition-all">
                            <div className="aspect-video bg-surface overflow-hidden flex items-center justify-center p-8 relative">
                                {p.img ? (
                                    <img src={p.img} alt={p.title} className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                    <Layers className="w-20 h-20 text-accent/20" />
                                )}
                                <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-surface-muted/80 backdrop-blur-md border border-white/5 text-[10px] uppercase font-bold text-accent tracking-widest">{p.category}</div>
                            </div>
                            <div className="p-8 md:p-10 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{p.title}</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed flex-1">{p.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold text-slate-600 bg-surface px-3 py-1 rounded-md border border-surface-highlight uppercase tracking-wider">{t}</span>
                                    ))}
                                </div>
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-surface-highlight hover:bg-accent group-hover:bg-accent/10 transition-all text-white font-bold"
                                >
                                    <span>View Project</span>
                                    <ExternalLink className="w-5 h-5 opacity-40" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-6 bg-surface-highlight/10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-3xl bg-accent mx-auto mb-8 flex items-center justify-center text-white rotate-12">
                        <PlaySquare className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Want to see your logo here?</h2>
                    <p className="text-slate-400 mb-8">We are currently accepting new projects for Q2 2026.</p>
                    <button className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-accent/20 hover:scale-105 transition-transform">
                        Start Your Journey
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PortfolioPage;
