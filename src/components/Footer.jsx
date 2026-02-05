import React from 'react';
import mainLogo from '../assets/images/mainLogo.png';

const Footer = ({ onOpenLegal, onContact }) => {
    return (
        <footer className="bg-surface-muted border-t border-surface-highlight py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <img
                        src={mainLogo}
                        alt="AxomITLab Logo"
                        className="h-16 w-auto object-contain"
                    />
                </div>

                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} AxomITLab. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <button onClick={() => onOpenLegal('privacy')} className="text-slate-500 hover:text-white transition-colors text-sm">Privacy</button>
                    <button onClick={() => onOpenLegal('terms')} className="text-slate-500 hover:text-white transition-colors text-sm">Terms</button>
                    <button onClick={onContact} className="text-slate-500 hover:text-white transition-colors text-sm">Contact</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
