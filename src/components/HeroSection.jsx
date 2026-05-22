// src/components/HeroSection.jsx
import React from 'react';
import { HeroSponsorBadge } from './Components'; // Clean import hook
import { ASSETS } from './DATA'; // For skyline and ticker assets

export default function HeroSection() {
    return (
        <section
            id="hero-section"
            className="relative min-h-screen bg-white overflow-hidden flex flex-col pt-16 pb-24 md:pb-12 select-none justify-between"
        >
            {/* Main Content Wrapper Container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center z-10 grow flex flex-col justify-center items-center py-6 md:py-0">

                {/* Headline image */}
                <div className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mt-4 sm:mt-6 px-2">
                    <img
                        src="../assets/GTM Conclave.png"
                        alt="Main headline"
                        className="w-full h-auto object-contain select-none mx-auto"
                    />
                </div>

                {/* Subtitle tag */}
                <h4 className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-sans font-medium text-slate-700 tracking-[0.14em] sm:tracking-[0.18em] uppercase mt-4 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed text-center opacity-90 px-4">
                    BUILD BEFORE YOUR BURN.
                </h4>

                {/* Responsive Content Wrapper */}
                <div className="w-full max-w-2xl mx-auto text-center px-4">
                    <div className="flex items-center justify-center gap-0 w-full mb-6 md:mb-8 opacity-80">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0"></div>
                        <div className="h-px sm:h-[1.5px] bg-black w-full max-w-37.5 sm:max-w-md"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0"></div>
                    </div>

                    {/* Brought To You By Module with Radial Mask Spotlight */}
                    <div className="relative w-full max-w-sm sm:max-w-xl mx-auto flex flex-col items-center justify-center mb-4 md:mb-12 py-4 sm:py-6 px-4 rounded-3xl z-10">
                        <div
                            className="absolute inset-0 -z-10 w-full h-full rounded-full opacity-90 blur-xl pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.7) 70%, transparent 100%)' }}
                        />

                        <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[14px] text-[#2563eb] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-black mb-3 sm:mb-4 select-none drop-shadow-sm">
                            <span className="opacity-40 font-mono text-[10px] sm:text-base">&gt;&gt;&gt;</span>
                            Brought To You By
                            <span className="opacity-40 font-mono text-[10px] sm:text-base">&lt;&lt;&lt;</span>
                        </div>

                        {/* CALLING MODULAR ROTATOR HERE */}
                        <div className="drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300 transform scale-90 sm:scale-100 origin-center">
                            <HeroSponsorBadge />
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop Architectural Layers */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 md:h-full pointer-events-none z-0 select-none overflow-hidden border-b-2 border-[#2563eb]/10">
                <img
                    src={ASSETS.skyline}
                    alt="Coimbatore Custom Heritage Skyline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[200%] sm:min-w-full w-auto sm:w-full h-full sm:h-auto max-h-62.5 sm:max-h-none object-cover object-bottom filter grayscale contrast-125 opacity-70 mix-blend-multiply blue-tint transform translate-y-2"
                />
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] sm:w-[40%] hidden sm:block h-32 sm:h-40 max-h-52 overflow-hidden transform translate-y-4 mix-blend-screen"
                    style={{ animation: 'heartbeatGlow 6s ease-in-out infinite' }}
                >
                    <div className="w-full h-full bg-linear-to-t from-[#2563eb]/30 via-[#2563eb]/10 to-transparent rounded-t-full"></div>
                </div>
            </div>

            {/* Infinite scrolling logo ticker */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-10 sm:h-12 z-10 flex items-center overflow-hidden whitespace-nowrap bg-[#2563eb] border-t border-blue-400/20">
                <div className="flex w-max items-center animate-infinite-scroll">
                    <img src={ASSETS.brandLoad} alt="Ticker 1" className="h-6 sm:h-7 object-contain px-2" />
                    <img src={ASSETS.brandLoad} alt="Ticker 2" className="h-6 sm:h-7 object-contain px-2" />
                </div>
            </div>

            <style>{`
        @keyframes heartbeatGlow {
          0%, 100% { opacity: 0.25; transform: translate(-50%, 16px) scale(0.96); filter: blur(4px); }
          50% { opacity: 0.55; transform: translate(-50%, 12px) scale(1.04); filter: blur(0px); }
        }
        .blue-tint { filter: sepia(100%) hue-rotate(200deg) saturate(300%) contrast(95%); }
      `}</style>
        </section>
    );
}