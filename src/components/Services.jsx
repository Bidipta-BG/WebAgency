"use client";
import React from 'react';
import { Smartphone, Monitor, Palette, ShoppingCart, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Palette,
        title: 'Logo & Brand Identity',
        description: 'Your logo, colors, and design language — crafted to make your business look premium, professional, and instantly trustworthy.'
    },
    {
        icon: Monitor,
        title: 'Your Professional Website',
        description: 'A stunning website that works 24/7 — even when your shop is closed. First impressions matter, and we make yours unforgettable.'
    },
    {
        icon: ShoppingCart,
        title: 'Online Store & E-Commerce',
        description: 'Sell your products online. We build your online store, handle payments, and make it easy for customers to buy from anywhere.'
    },
    {
        icon: Smartphone,
        title: 'Mobile App for Your Business',
        description: 'Let customers order, book appointments, or contact you directly from their phones. We build Android & iOS apps tailored to your business.'
    },
    {
        icon: TrendingUp,
        title: 'Grow Your Revenue Online',
        description: 'Google Ads, Instagram reels, SEO, and social media management — we bring real customers to your business every single day.',
        link: '/marketing'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">What We Do</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Everything Your Business Needs Online</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From your very first logo to your latest Instagram post — we handle your entire digital presence so you can focus on running your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {services.map((service, index) => {
                        const CardWrapper = service.link ? Link : 'div';
                        return (
                            <CardWrapper
                                key={index}
                                href={service.link}
                                className="p-8 rounded-2xl bg-surface-muted border border-surface-highlight hover:border-accent/40 hover:bg-surface-highlight transition-all group relative"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-xl shadow-inner border border-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                                    <service.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                                {service.link && (
                                    <span className="mt-4 inline-block text-xs font-bold text-accent uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn More →
                                    </span>
                                )}
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
