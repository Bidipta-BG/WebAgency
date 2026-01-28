import React from 'react';
import { Target, PenTool, Code2, Rocket, Headset } from 'lucide-react';

const steps = [
    { icon: Target, title: "Roadmap", desc: "We define clear milestones and timelines." },
    { icon: PenTool, title: "Wireframing", desc: "Low-fidelity screens to visualize flow." },
    { icon: Code2, title: "Development", desc: "Scalable coding with agile sprints." },
    { icon: Rocket, title: "Launch", desc: "Rigorous testing and deployment." },
    { icon: Headset, title: "Maintenance", desc: "Ongoing support and updates." },
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">How We Work</h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-surface-highlight -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center bg-transparent">
                                <div className="w-24 h-24 rounded-full bg-surface-muted border-4 border-surface-highlight flex items-center justify-center mb-6 shadow-lg shadow-black/20 z-10">
                                    <step.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
