"use client";
import React from 'react';
import Link from 'next/link';

const Footer = ({ onOpenLegal = () => { } }) => {
    return (
        <footer className="bg-surface-muted border-t border-surface-highlight py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/assets/images/mainLogo.png"
                        alt="Axom IT Lab Logo"
                        className="h-16 w-auto object-contain"
                    />
                </Link>

                <p className="text-slate-500 text-sm">
                    © 2026 Axom IT Lab. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <button onClick={() => onOpenLegal('privacy')} className="text-slate-500 hover:text-white transition-colors text-sm">Privacy</button>
                    <button onClick={() => onOpenLegal('terms')} className="text-slate-500 hover:text-white transition-colors text-sm text-center">Terms</button>
                    <Link href="/contact" className="text-slate-500 hover:text-white transition-colors text-sm">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
