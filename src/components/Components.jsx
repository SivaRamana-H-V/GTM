import React, { useState, useEffect } from 'react';
import { HERO_PARTNERS } from "./DATA";

// ── Section Pill image heading ──
export function SectionPill({ src, alt, className = "" }) {
    return (
        <div className={`flex justify-center mb-8 ${className}`}>
            <img src={src} alt={alt} className="h-9 md:h-11 object-contain" />
        </div>
    );
}

export const HeroSponsorBadge = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Trigger fade-out

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % HERO_PARTNERS.length);
                setFade(true); // Trigger fade-in
            }, 300); // Matches Tailwind transition speed
        }, 4000); // Smooth 4-second cycle engine

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative bg-[#eff6ff]/90 backdrop-blur-sm border border-[#bfdbfe]/40 px-12 py-3 shadow-sm flex items-center justify-center gap-3 w-72 h-14 select-none"
            style={{
                clipPath: 'polygon(6% 0%, 94% 0%, 100% 50%, 94% 100%, 6% 100%, 0% 50%)'
            }}
        >
            <img
                src={HERO_PARTNERS[index]}
                alt="Partner Logo"
                className={`max-w-full max-h-7 object-contain transition-all duration-300 ease-out transform
          ${fade
                        ? 'opacity-100 translate-y-0 scale-100 blur-none'
                        : 'opacity-0 translate-y-2 scale-95 blur-[2px]'
                    }
        `}
            />
        </div>
    );
};