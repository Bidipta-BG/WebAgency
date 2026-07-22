'use client';
import React from 'react';
import { Shield, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const GuaranteeBadge = ({ onOpen, className, text = "Satisfaction Guarantee" }) => {
    return (
        <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-muted border border-surface-highlight hover:border-accent/30 transition-colors shadow-sm", className)}>
            <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-slate-300">{text}</span>
            </div>
            <button
                onClick={onOpen}
                className="w-5 h-5 rounded-full bg-surface hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                title="View refund policy"
            >
                <Info className="w-3.5 h-3.5" />
            </button>
        </div>
    );
};

export default GuaranteeBadge;
