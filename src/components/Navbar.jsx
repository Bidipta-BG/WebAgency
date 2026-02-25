"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, ChevronDown, Smartphone, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        {
            name: 'Our Products',
            href: '#',
            dropdown: [
                {
                    name: 'TemplatePro',
                    desc: 'Premium Graphics Templates',
                    href: 'https://play.google.com/store/apps/details?id=com.thevibecoder.greetify',
                    icon: Smartphone,
                    image: '/assets/images/templatePro.png'
                }
            ]
        },
        { name: 'Process', href: '#process' },
        { name: 'About', href: '#about' },
    ];

    const scrollToSection = (e, href) => {
        if (href.startsWith('http')) return; // Allow external links

        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Adjust for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-surface/80 backdrop-blur-md border-surface-highlight shadow-xl py-4'
                    : 'bg-transparent border-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <img
                        src="/assets/images/mainLogo.png"
                        alt="Axom IT Lab Logo"
                        className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-slate-300">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className="relative py-2"
                                onMouseEnter={() => link.dropdown && setIsProductDropdownOpen(true)}
                                onMouseLeave={() => link.dropdown && setIsProductDropdownOpen(false)}
                            >
                                {link.dropdown ? (
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors py-2 font-medium text-sm">
                                        <span>{link.name}</span>
                                        <ChevronDown className={cn("w-4 h-4 transition-transform", isProductDropdownOpen && "rotate-180")} />

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {isProductDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-surface-muted border border-surface-highlight rounded-2xl shadow-2xl p-3 overflow-hidden"
                                                >
                                                    {link.dropdown.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-highlight transition-all group/item"
                                                        >
                                                            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center border border-white/5 bg-white/5 group-hover/item:border-accent/40 transition-colors">
                                                                {item.image ? (
                                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                                ) : (
                                                                    <div className="w-full h-full flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">
                                                                        <item.icon className="w-5 h-5" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-sm font-bold text-white flex items-center gap-1">
                                                                    {item.name}
                                                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                                </div>
                                                                <div className="text-[11px] text-slate-500">{item.desc}</div>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-sm font-medium hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#calculator"
                        onClick={(e) => scrollToSection(e, '#calculator')}
                        className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-accent-bright transition-colors shadow-lg shadow-accent/20"
                    >
                        <Calculator className="w-4 h-4" />
                        <span>Get Estimate</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface-muted border-b border-surface-highlight overflow-hidden"
                    >
                        <ul className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.dropdown ? (
                                        <div className="space-y-4">
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{link.name}</div>
                                            <div className="grid gap-2 pl-2">
                                                {link.dropdown.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 rounded-xl bg-surface-highlight/50 border border-surface-highlight hover:bg-surface-highlight transition-colors"
                                                    >
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center border border-white/5 bg-white/5">
                                                            {item.image ? (
                                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center text-accent">
                                                                    <item.icon className="w-4 h-4" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <span className="font-bold text-white text-sm">{item.name}</span>
                                                        <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="block text-lg font-medium text-slate-300 hover:text-white"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#calculator"
                                    onClick={(e) => scrollToSection(e, '#calculator')}
                                    className="flex items-center gap-2 text-accent font-bold mt-2 pt-4 border-t border-surface-highlight"
                                >
                                    <Calculator className="w-5 h-5" />
                                    Get Project Estimate
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
