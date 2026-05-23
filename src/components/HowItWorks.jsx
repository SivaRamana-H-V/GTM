import React from 'react';
import useInView from '../hooks/useInView';

const JOURNEY_STEPS = [
    {
        number: 1,
        title: "Apply",
        description: "Fill out the application to share your interest, passion, and background."
    },
    {
        number: 2,
        title: "Get Selected",
        description: "If chosen for Round 2, you'll receive an email invitation."
    },
    {
        number: 3,
        title: "Video Pitch",
        description: "Submit a short video: who you are, what you're building, and why you."
    },
    {
        number: 4,
        title: "#HackInPublic",
        description: "Share your video publicly and tag @emergentlabs."
    },
    {
        number: 5,
        title: "Fast-Track Review",
        description: "Public submissions get reviewed for the final round faster."
    },
    {
        number: 6,
        title: "Final Acceptance",
        description: "Receive your official acceptance letter to attend VibeCon."
    }
];

{/* ── UNIFIED PERFORMANCE ANIMATION WRAPPER ENGINE ── */ }
function TimelineItem({ children, delay, isEven, step, nodeColor }) {
    const [ref, inView] = useInView({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            className={`relative flex items-center w-full transition-all duration-700 ease-out
                ${isEven ? 'justify-end' : 'justify-start'}
                ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
            data-testid={`step-${step.number - 1}`}
        >
            {/* Pinned Middle Timeline Number Node (Locked directly inside the relative flex track row) */}
            <div className="absolute left-1/2 -translate-x-1/2 z-20">
                <div
                    className="w-10.5 h-10.5 rounded-full border-4 border-white shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer select-none"
                    style={{ backgroundColor: nodeColor }}
                >
                    <span className="text-white font-sans font-black text-[16px]">{step.number}</span>
                </div>
            </div>

            {/* Asymmetric Description Card Content Layout Block */}
            <div className={`w-[calc(50%-45px)] ${isEven ? 'ml-auto text-left' : 'mr-auto text-right'}`}>
                <div className={`p-5 bg-white/85 backdrop-blur-sm border border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300`}>
                    <h3 className="font-sans font-black text-[24px] mb-2" style={{ color: nodeColor }}>
                        {step.title}
                    </h3>
                    <p className="text-[16px] text-slate-700 font-medium leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

{/* ── MOBILE ROW ANIMATION STEP ENGINE ── */ }
function MobileStep({ step, delay, nodeColor, idx }) {
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`relative flex gap-4 w-full transition-all duration-500 ease-out
                ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
            data-testid={`step-mobile-${idx}`}
        >
            <div className="relative z-10 shrink-0">
                <div
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm flex items-center justify-center font-sans font-black text-[16px] text-white"
                    style={{ backgroundColor: nodeColor }}
                >
                    {step.number}
                </div>
            </div>
            <div className="flex-1 p-4 bg-white/85 backdrop-blur-sm border border-primary/10 rounded-xl shadow-sm">
                <h3 className="font-sans font-black text-[18px] mb-1" style={{ color: nodeColor }}>
                    {step.title}
                </h3>
                <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                    {step.description}
                </p>
            </div>
        </div>
    );
}

export default function HowItWorks() {
    const [headerRef, headerInView] = useInView({ threshold: 0.2 });

    return (
        <section
            id="timeline"
            data-testid="timeline-section"
            className="relative overflow-hidden min-h-screen select-none bg-cover bg-center bg-no-repeat py-20 md:py-28"
            style={{
                backgroundImage: 'url("../assets/How_to_Apply.png")',
                backgroundPosition: 'center bottom'
            }}
        >
            <div className="max-w-285 mx-auto px-6 md:px-12 pb-32 md:pb-48">

                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-20 transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <img
                        alt="Your Journey"
                        className="h-8 mx-auto mb-4 object-contain"
                        src="https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/hwh4fkh6_your%20journey%20pill.svg"
                    />
                    <h2 className="font-sans font-black text-[32px] md:text-[55px] uppercase tracking-tight text-primary leading-none">
                        Here's how it works
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-20 h-px bg-primary/30"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                </div>

                {/* ── MOBILE TIMELINE VIEW ── */}
                <div className="md:hidden relative px-2">
                    {/* Vertical Timeline Spine Track */}
                    <div className="absolute left-6.75 top-6 bottom-6 w-0.5 bg-linear-to-b from-primary via-secondary to-primary opacity-60" />

                    <div className="space-y-8">
                        {JOURNEY_STEPS.map((step, idx) => {
                            const nodeColor = idx % 2 === 0 ? '#009E52' : '#1035A1';
                            return (
                                <MobileStep
                                    key={idx}
                                    step={step}
                                    idx={idx}
                                    delay={idx * 100}
                                    nodeColor={nodeColor}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* ── DESKTOP TIMELINE VIEW ── */}
                <div className="hidden md:block relative mt-16">
                    {/* Center Spine Vertical Alignment Track Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-primary via-secondary to-primary top-4 bottom-4 opacity-70" />

                    <div className="space-y-12 max-w-210 mx-auto">
                        {JOURNEY_STEPS.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            const nodeColor = isEven ? '#009E52' : '#1035A1';
                            return (
                                <TimelineItem
                                    key={idx}
                                    step={step}
                                    isEven={isEven}
                                    nodeColor={nodeColor}
                                    delay={idx * 150}
                                />
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}