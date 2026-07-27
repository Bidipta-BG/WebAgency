"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { fetchPricingConfig } from '../services/api';

// Hardcoded fallback shown immediately — no flicker, no waiting for API
const DEFAULT_DISCOUNT = {
    enabled: true,
    percentage: 50,
    label: 'Early Bird Offer',
    message: "You're eligible for our 50% Early Bird Discount!",
    badgeText: '🎉 Huge Savings for Lucky Clients!'
};

export default function AnnouncementBar() {
    const pathname = usePathname();
    const [discount, setDiscount] = useState(DEFAULT_DISCOUNT);
    const barRef = React.useRef(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                const config = await fetchPricingConfig();
                // Only act on what the DB explicitly tells us:
                if (config?.discount?.enabled === false) {
                    // DB says off → hide the bar
                    setDiscount(prev => ({ ...prev, enabled: false }));
                } else if (config?.discount?.enabled === true) {
                    // DB says on with specific values → use those values
                    setDiscount(config.discount);
                }
                // Otherwise (no discount field in DB yet, API error, etc.) → keep DEFAULT (shown)
            } catch {
                // Keep default
            }
        };
        loadConfig();
    }, []);

    // Hide on admin / internal routes
    const hiddenRoutes = ['/leads', '/apps', '/mantras', '/verses', '/login'];
    const isHiddenRoute = hiddenRoutes.some(r => pathname?.includes(r));
    const isHidden = isHiddenRoute || !discount?.enabled;

    useEffect(() => {
        if (isHidden) {
            document.documentElement.style.setProperty('--announcement-height', '0px');
            return;
        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const height = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height;
                document.documentElement.style.setProperty('--announcement-height', `${height}px`);
            }
        });

        if (barRef.current) {
            resizeObserver.observe(barRef.current);
        }

        return () => {
            resizeObserver.disconnect();
            document.documentElement.style.setProperty('--announcement-height', '0px');
        };
    }, [isHidden, pathname, discount?.enabled]);

    if (isHidden) return null;

    return (
        <div ref={barRef} style={{ background: 'linear-gradient(to right, #6366f1, #8b5cf6)' }}
            className="w-full text-white py-2 px-4 text-center text-sm font-semibold">
            {discount.badgeText} &mdash;{' '}
            <span className="font-bold">{discount.percentage}% OFF</span> for our early clients!{' '}
            <Link href="/estimate"
                className="underline font-bold ml-2 hover:opacity-80 transition-opacity whitespace-nowrap">
                Grab Your Estimate →
            </Link>
        </div>
    );
}
