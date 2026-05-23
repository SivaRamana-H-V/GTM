import React, { useState, useEffect, useRef } from 'react';
import { HERO_PARTNERS } from "./DATA";

function useInView(options = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (!options.repeat) observer.unobserve(el);
                } else if (options.repeat) {
                    setInView(false);
                }
            },
            { threshold: options.threshold ?? 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}

export function AnimatedSection({ children, className = '', delay = 0, threshold = 0.15 }) {
    const [ref, inView] = useInView({ threshold });
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export function AnimatedItem({ children, className = '', delay = 0, threshold = 0.15 }) {
    const [ref, inView] = useInView({ threshold });
    return (
        <div
            ref={ref}
            className={`transition-all duration-600 ease-out ${className} ${
                inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

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
            setFade(false);

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % HERO_PARTNERS.length);
                setFade(true);
            }, 300);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative bg-mint/90 backdrop-blur-sm border border-primary/20 px-12 py-3 shadow-sm flex items-center justify-center gap-3 w-72 h-14 select-none"
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
