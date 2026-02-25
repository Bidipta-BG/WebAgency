import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, ShieldCheck, Zap, Users, Award, Code2 } from 'lucide-react';

export const metadata = {
    title: 'About Axom IT Lab | Our Mission & EMI Model',
    description: 'Discover how Axom IT Lab is democratizing high-end technology with our unique EMI payment model. Learn about our expertise in web and mobile app development.',
};

const AboutPage = () => {
    const values = [
        {
            icon: ShieldCheck,
            title: "Trust First",
            desc: "We prioritize transparency in every line of code and every invoice."
        },
        {
            icon: Zap,
            title: "Performance",
            desc: "Speed is our religion. We build web apps that load in the blink of an eye."
        },
        {
            icon: Target,
            title: "Purposeful Design",
            desc: "We don't just build apps; we solve business problems with elegant UI/UX."
        }
    ];

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Democratizing Digital <span className="text-accent">Excellence</span>
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Axom IT Lab was founded with a single mission: to enable startups and small businesses
                        to access world-class technology without the crushing burden of upfront costs.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-surface-muted border border-surface-highlight hover:border-accent/40 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                <v.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-6 bg-surface-muted/50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The EMI Revolution</h2>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Most agencies demand 50% upfront. We demand excellence.
                            Our Equated Monthly Installment (EMI) model allows you to launch your
                            product today with flexible payment plans tailored to your project size—ranging from a few months to as long as **5 years**.
                        </p>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            This isn't just about financing; it's about partnership. We provide **zero-cost maintenance**
                            throughout your entire EMI tenure. Once your plan is complete, you have total
                            freedom: choose to continue with our professional support or take the reins and
                            manage the maintenance yourself.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-2xl bg-surface border border-surface-highlight">
                                <div className="text-3xl font-bold text-accent mb-1">0%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest">Initial Friction</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-surface border border-surface-highlight">
                                <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest">Support Cycle</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video rounded-3xl overflow-hidden border border-surface-highlight shadow-2xl bg-surface flex items-center justify-center p-12">
                            <Code2 className="w-32 h-32 text-accent opacity-20 absolute" />
                            <div className="relative z-10 text-center">
                                <Users className="w-16 h-16 text-accent mx-auto mb-6" />
                                <div className="text-2xl font-bold text-white mb-2">Join 50+ Happy Founders</div>
                                <p className="text-slate-500 text-sm">Empowering visionaries and building the future of digital brands globally.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
