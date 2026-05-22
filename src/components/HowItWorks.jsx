import React from 'react';

// Simplified structural data matching your preferred array layout
const TIMELINE_PHASES = [
    {
        year: "Phase 1",
        title: "Apply & Register",
        description: "Fill out the application to share your interest, persona, and background setup metrics.",
        side: "left",
        color: "#1e3a8a", // Deep Indigo
        iconText: "01"
    },
    {
        year: "Phase 2",
        title: "Get Selected",
        description: "If chosen for Round 2, you'll receive an official email validation sequence pass.",
        side: "right",
        color: "#0d9488", // Teal Accent
        iconText: "02"
    },
    {
        year: "Phase 3",
        title: "Video Pitch",
        description: "Submit a short video showcasing who you are, what you're building, and your vision trajectory.",
        side: "left",
        color: "#7e22ce", // Deep Purple
        iconText: "03"
    },
    {
        year: "Phase 4",
        title: "#HackInPublic",
        description: "Share your daily building updates publicly online and tag your growth portfolios.",
        side: "right",
        color: "#ea580c", // Vivid Orange
        iconText: "04"
    },
    {
        year: "Phase 5",
        title: "Fast-Track Review",
        description: "Public submissions get directly evaluated by judges for the main matrix pool gates.",
        side: "left",
        color: "#dc2626", // Crimson Red
        iconText: "05"
    },
    {
        year: "Phase 6",
        title: "Final Acceptance",
        description: "Receive your unique encrypted entry credentials pass to access the active venue floors.",
        side: "right",
        color: "#16a34a", // Vibrant Green
        iconText: "06"
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative min-h-screen bg-white py-24 px-6 md:px-12 select-none overflow-hidden">

            {/* Central Section Header Layout */}
            <div className="w-full text-center mb-24 relative z-10">
                <h2 className="font-sans font-black text-[32px] sm:text-[46px] tracking-tight text-slate-900 uppercase">
                    How It Works — Phases
                </h2>
                <div className="w-24 h-1 bg-slate-200 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* TIMELINE TRACK WRAPPER */}
            <div className="relative max-w-5xl w-full mx-auto flex flex-col items-center z-10">

                {/* ── BACKGROUND VECTOR SPINE (DESKTOP) ── */}
                {/* Uses explicit multi-bezier curvature segments matching the repeating wave node flow */}
                <div className="absolute inset-y-0 w-24 hidden md:block pointer-events-none left-1/2 -translate-x-1/2 h-[calc(100%-120px)] top-12">
                    <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
                        <path
                            d="M 50 0 
                 Q 10 83, 50 166 
                 Q 90 249, 50 332 
                 Q 10 415, 50 498 
                 Q 90 581, 50 664 
                 Q 10 747, 50 830 
                 Q 90 913, 50 1000"
                            fill="none"
                            stroke="url(#spine-gradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="spine-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#1e3a8a" />
                                <stop offset="20%" stopColor="#0d9488" />
                                <stop offset="40%" stopColor="#7e22ce" />
                                <stop offset="60%" stopColor="#ea580c" />
                                <stop offset="80%" stopColor="#dc2626" />
                                <stop offset="100%" stopColor="#16a34a" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* ── MOBILE-ONLY STRAIGHT SPINE LINE ── */}
                <div className="absolute top-6 bottom-6 left-6 md:hidden w-1 bg-slate-200 rounded-full z-0"></div>

                {/* ── PHASES GRID MATRIX LOOP ── */}
                {TIMELINE_PHASES.map((phase, idx) => (
                    <div
                        key={idx}
                        className={`
              relative w-full flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-24 last:mb-0 pl-16 md:pl-0
              ${phase.side === 'left' ? 'md:flex-row-reverse' : ''}
            `}
                    >
                        {/* 1. TEXT INFO BLOCK SIDE */}
                        <div className="w-full md:w-1/2 flex justify-start md:justify-center px-4 md:px-12 z-10">
                            <div className="max-w-md w-full text-left">
                                <span
                                    className="font-mono font-black text-2xl tracking-wider block mb-1"
                                    style={{ color: phase.color }}
                                >
                                    {phase.year}
                                </span>
                                <h3 className="font-sans font-black text-[22px] text-slate-800 leading-tight mb-3">
                                    {phase.title}
                                </h3>
                                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                                    {phase.description}
                                </p>
                            </div>
                        </div>

                        {/* 2. CORE INTERCONNECTED NODE (CENTER BUTTON ANCHOR) */}
                        <div className="absolute left-1 md:left-1/2 top-0 md:top-auto w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md border-4 z-20 transform translate-x-0 md:-translate-x-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer"
                            style={{ borderColor: phase.color }}
                        >
                            <div
                                className="w-5 h-5 rounded-full flex items-center justify-center font-sans text-[9px] font-black text-white"
                                style={{ backgroundColor: phase.color }}
                            >
                                {phase.iconText}
                            </div>
                        </div>

                        {/* 3. MEDIA / EXTRA ASSET GRAPHIC ASSIGNMENT SIDE */}
                        <div className="w-full md:w-1/2 flex justify-start md:justify-center items-center px-4 md:px-12 mt-4 md:mt-0 z-10">
                            <div className="w-40 h-28 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-2 p-3 shadow-sm hover:border-slate-200 transition-colors">
                                {/* Visual Placeholder box to mimic mini image layout cards like flag/trophy stamps from sample */}
                                <div
                                    className="w-10 h-10 rounded-md opacity-20 transform rotate-12 flex items-center justify-center font-mono text-sm"
                                    style={{ backgroundColor: phase.color, color: '#fff' }}
                                >
                                    ✦
                                </div>
                                <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                                    Asset Layer
                                </span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}