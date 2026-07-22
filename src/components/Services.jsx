"use client";
import React from 'react';
import { Smartphone, Monitor, Palette, Server, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Smartphone,
        title: 'App Development',
        description: 'Native iOS and Android apps built by our experts, using AI-assisted tools to speed up coding and testing.'
    },
    {
        icon: Monitor,
        title: 'Web Platforms',
        description: 'Responsive websites and SaaS platforms built by our frontend engineers, supercharged by the latest frontend frameworks and AI.'
    },
    {
        icon: Palette,
        title: 'Intuitive UI/UX',
        description: 'Creative designs crafted by human empathy, accelerated by generative AI to prototype user interfaces rapidly.'
    },
    {
        icon: Server,
        title: 'Backend & Cloud',
        description: 'Scalable backend architectures designed by cloud experts, utilizing AI to optimize APIs and minimize configuration time.'
    },
    {
        icon: TrendingUp,
        title: 'AI Digital Marketing',
        description: 'We use AI to optimize Google profiles, manage social media, run high-converting ad campaigns, and generate real leads.',
        link: '/marketing'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Expertise</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our skilled professionals leverage the latest AI models across all technical works to deliver high-quality, scalable solutions faster and more affordably.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {services.map((service, index) => {
                        const CardWrapper = service.link ? Link : 'div';
                        return (
                            <CardWrapper
                                key={index}
                                href={service.link}
                                className="p-8 rounded-2xl bg-surface-muted border border-surface-highlight hover:border-accent/40 hover:bg-surface-highlight transition-all group relative"
                            >
                                <div className="w-12 h-12 bg-surface-highlight rounded-xl shadow-inner border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
