"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calculator, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import AnnouncementBar from './AnnouncementBar';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Our Work', href: '/portfolio' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => pathname === path;

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50">
                <AnnouncementBar />
            <nav
                className={cn(
                    'transition-all duration-300 border-b w-full',
                    isScrolled
                    ? 'bg-surface/80 backdrop-blur-md border-surface-highlight shadow-xl py-4'
                    : 'bg-transparent border-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/assets/images/mainLogo.png"
                        alt="XOM Digital Logo"
                        className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-slate-300">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className="relative py-2"
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium hover:text-white transition-colors",
                                        isActive(link.href) && "text-accent"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/marketing"
                            className="hidden lg:flex items-center gap-2 bg-transparent border border-white/20 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:border-accent hover:text-accent transition-colors"
                        >
                            <span>Grow My Business</span>
                        </Link>
                        <Link
                            href="/estimate"
                            className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-accent-bright transition-colors shadow-lg shadow-accent/20"
                        >
                            <Calculator className="w-4 h-4" />
                            <span>Start Free →</span>
                        </Link>
                    </div>
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
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "block text-lg font-medium text-slate-300 hover:text-white",
                                            isActive(link.href) && "text-accent"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/estimate"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-2 text-accent font-bold mt-2 pt-4 border-t border-surface-highlight"
                                >
                                    <Calculator className="w-5 h-5" />
                                    Start Free — Get Estimate
                                </Link>
                                <Link
                                    href="/marketing"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-2 text-slate-300 font-bold mt-4"
                                >
                                    <TrendingUp className="w-5 h-5" />
                                    Grow My Business
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
        </div>
        {/* Transparent spacer that pushes page content down by exactly the banner's height */}
        <div style={{ height: 'var(--announcement-height, 0px)' }} className="w-full transition-all duration-300" aria-hidden="true" />
        </>
    );
};

export default Navbar;
