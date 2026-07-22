import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Laptop, Smartphone, BrainCircuit, Globe, Rocket, Terminal, TrendingUp, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Expert Web, App & Marketing Services | Axom IT Lab',
    description: 'Explore our high-performance development and digital marketing services. From Next.js web applications to React Native mobile apps and AI-driven marketing campaigns.',
};

const ServicesPage = () => {
    const services = [
        {
            title: "Web Development",
            icon: Globe,
            tech: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "MongoDB", "Prisma", "AWS", "Docker", "GraphQL", "Redux", "Three.js", "Redis", "Vercel"],
            desc: "We build SEO-optimized, blazing-fast web applications. Our focus is on performance, accessibility, and conversion-driven design using the industry's most advanced tools."
        },
        {
            title: "Mobile App Development",
            icon: Smartphone,
            tech: ["React Native", "Expo", "iOS", "Android", "Redux", "Firebase", "SQLite", "RevenueCat", "FlashList", "Lottie", "Push Notifications", "Fastlane"],
            desc: "Native-quality mobile experiences for both iOS and Android. We specialize in complex UI, seamless hardware integration, and high-performance cross-platform apps."
        },
        {
            title: "AI & Automation",
            icon: BrainCircuit,
            tech: ["OpenAI", "Gemini", "Claude", "LangChain", "Pinecone", "Python", "Automation", "LLMs", "Vector Databases", "HuggingFace", "TensorFlow"],
            desc: "Custom AI solutions to streamline your business. From intelligent chatbots and RAG-based systems to sophisticated data processing and automation workflows."
        },
        {
            title: "AI-Powered Digital Marketing",
            icon: TrendingUp,
            tech: ["Google Business Profile", "Meta Ads", "Google Ads", "SEO", "Content Marketing", "Lead Generation", "Analytics"],
            desc: "Once your product is live, we help you get customers. We use AI to optimize your online presence, manage social media, and run high-converting ad campaigns.",
            isMarketing: true
        }
    ];

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                        Our <span className="text-accent">Core</span> Expertise
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We don't just write code; we architect solutions that drive growth and solve user problems.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto space-y-12">
                    {services.map((s, i) => (
                        <div key={i} className="group p-8 md:p-12 rounded-[2.5rem] bg-surface-muted border border-surface-highlight hover:border-accent/30 transition-all flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                <s.icon className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{s.title}</h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-3xl">{s.desc}</p>
                                <div className="flex flex-wrap gap-3">
                                    {s.tech.map(t => (
                                        <span key={t} className="px-4 py-1.5 rounded-full bg-surface text-slate-300 text-xs font-semibold border border-surface-highlight group-hover:border-accent/20 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {s.isMarketing ? (
                                <Link href="/marketing" className="hidden lg:flex items-center gap-2 text-accent font-bold text-sm self-center hover:text-white transition-colors group/link px-4 py-2 border border-accent/30 rounded-full hover:bg-accent hover:border-accent">
                                    <span>Generate Leads for My Business</span>
                                    <Rocket className="w-4 h-4 translate-y-0.5 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            ) : (
                                <Link href="/contact" className="hidden lg:flex items-center gap-2 text-accent font-bold text-sm self-center hover:text-white transition-colors group/link">
                                    <span>Learn More</span>
                                    <Rocket className="w-4 h-4 translate-y-0.5 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 p-12 md:p-20 text-center">
                    <Terminal className="w-12 h-12 text-accent mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need a custom stack?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        While we have our favorites, we are polyglots. We adapt the technology to the project, not the other way around.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                        Discuss Architecture
                    </Link>
                </div>
            </section>

            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center p-6 rounded-2xl border border-surface-highlight bg-surface-muted">
                    <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-slate-300 font-medium">
                        <strong className="text-white">Satisfaction Guarantee:</strong> We stand behind every project we build with a transparent money-back policy.
                    </span>
                    <Link href="/?guarantee=true" className="text-sm font-bold text-accent hover:text-white transition-colors ml-2 flex items-center gap-1">
                        Learn More <Rocket className="w-3 h-3" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServicesPage;
