import React from 'react';
import { Smartphone, Monitor, Palette, Server } from 'lucide-react';

const services = [
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native iOS and Android applications built with Flutter or React Native for peak performance.'
    },
    {
        icon: Monitor,
        title: 'Web Development',
        description: 'Responsive, high-speed websites and SaaS platforms using React, Next.js, and modern tools.'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'User-centric interfaces that convert. We design tailored experiences that tell your brand story.'
    },
    {
        icon: Server,
        title: 'Backend & Cloud',
        description: 'Scalable server-side solutions and API integrations powered by Node.js, Python, and AWS.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Expertise</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From comprehensive product strategy to pixel-perfect execution, we deliver quality across all platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-surface-muted border border-surface-highlight hover:border-accent/40 hover:bg-surface-highlight transition-all group"
                        >
                            <div className="w-12 h-12 bg-surface-highlight rounded-xl shadow-inner border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
