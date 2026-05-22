import React from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer 
            className="relative bg-[#2563eb] text-white overflow-hidden py-16 px-6 md:px-12 flex flex-col justify-between min-h-100 select-none"
            style={{
                // Replicating the distinct blue technical grid lines layout from the brand theme
                backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                backgroundPosition: 'center top'
            }}
        >
            {/* Retro Pixel-Art Accent Crosses (Absolute Positioned Shards exactly like the image) */}
            <div className="absolute top-[15%] left-[5%] text-white/20 font-mono text-3xl pointer-events-none tracking-tight">
                ░░ ░░<br/>░░ ░░
            </div>
            <div className="absolute top-[40%] left-[24%] text-white/20 font-mono text-2xl pointer-events-none">░░░</div>
            <div className="absolute top-[20%] right-[22%] text-white/20 font-mono text-3xl pointer-events-none">▒▒▒</div>
            <div className="absolute bottom-[20%] left-[14%] text-white/15 font-mono text-xl pointer-events-none">✦ ✦</div>
            <div className="absolute bottom-[30%] right-[25%] text-white/20 font-mono text-2xl pointer-events-none">▒▒<br/>▒▒</div>
            <div className="absolute top-[45%] right-[4%] text-white/10 font-mono text-4xl pointer-events-none">████</div>

            {/* CENTER BRAND TEXT MODULE */}
            <div className="max-w-4xl mx-auto text-center my-auto z-10 flex flex-col items-center justify-center">
                <h2 className="font-figtree font-black text-[38px] sm:text-[56px] lg:text-[64px] leading-tight tracking-tight mb-2">
                    Ready to prove you belong?
                </h2>
                <p className="text-[16px] sm:text-[18px] text-white/80 font-medium tracking-wide mb-8">
                    Vibecode your way to Y Combinator.
                </p>
                
                {/* White Call To Action Button Widget */}
                <a
                    href="/register"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#2563eb] font-bold text-[15px] px-10 py-4 shadow-lg transition-all duration-150 rounded-xs"
                >
                    Apply Now
                    <ArrowRight size={16} strokeWidth={2.5} />
                </a>
            </div>

            {/* BOTTOM MINIMAL FOOTER ROW BAR */}
            <div className="max-w-360 w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 z-10 text-white/60 text-[13px] font-medium">
                <div>
                    © {year} VibeCon. All rights reserved.
                </div>
                
                <div className="flex items-center gap-6">
                    <a 
                        href="https://twitter.com/emergentlabs" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-white transition-colors duration-150"
                    >
                        Twitter
                    </a>
                    <a 
                        href="https://app.emergent.sh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-white transition-colors duration-150"
                    >
                        Emergent
                    </a>
                </div>
            </div>
        </footer>
    );
}