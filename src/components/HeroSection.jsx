import React from 'react';
import { HeroSponsorBadge, AnimatedSection } from './Components';
import { ASSETS } from './DATA';

export default function HeroSection() {
    return (
        <section
            id="hero-section"
            className="relative min-h-screen bg-mint overflow-hidden flex flex-col pt-16 pb-24 md:pb-12 select-none justify-between"
        >
            <AnimatedSection className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center z-10 grow flex flex-col justify-center items-center py-6 md:py-0">

                <div className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mt-4 sm:mt-6 px-2">
                    <img
                        src="../assets/Build.png"
                        alt="BUILD BEFORE YOUR BURN"
                        className="w-70 h-auto object-contain select-none mx-auto"
                    />
                </div>

                <h4 className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-sans font-black text-dark tracking-[0.2em] uppercase mt-4 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed text-center px-4">
                    GTM Conclave
                </h4>

            </AnimatedSection>

            <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 md:h-full pointer-events-none z-0 select-none overflow-hidden border-b-2 border-primary/10">
                <img
                    src={ASSETS.skyline}
                    alt="Coimbatore Custom Heritage Skyline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[200%] sm:min-w-full w-auto sm:w-full h-full sm:h-auto max-h-62.5 sm:max-h-none object-cover object-bottom filter contrast-115 opacity-60 mix-blend-multiply transform translate-y-2"
                />
                {/* ── REMOVED GRAYSCALE FILTER TO RESTORE ORIGINAL GREEN ── */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] sm:w-[40%] hidden sm:block h-32 sm:h-40 max-h-52 overflow-hidden transform translate-y-4 mix-blend-screen"
                    style={{ animation: 'heartbeatGlow 6s ease-in-out infinite' }}
                >
                    <div className="w-full h-full bg-linear-to-t from-primary/30 via-primary/10 to-transparent rounded-t-full"></div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 w-full z-20 flex items-center overflow-hidden select-none pointer-events-none">

                {/* Horizontal Continuous Animation Track Wrapper */}
                <div className="flex w-max items-center animate-infinite-scroll gap-0 min-w-full">

                    {/* Segment 1: Raw Original Asset */}
                    <img
                        alt="Partner logos"
                        className="w-auto h-12 sm:h-14 object-contain max-w-none"
                        src="https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4z41oknn_logo%20ticker%2014th.svg"
                    />

                    {/* Segment 2: Seamless Mirror Clone Loop */}
                    <img
                        alt="Partner logos"
                        className="w-auto h-12 sm:h-14 object-contain max-w-none"
                        src="https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4z41oknn_logo%20ticker%2014th.svg"
                        aria-hidden="true"
                    />

                    {/* Segment 3: Desktop Viewport Safe Buffer Track */}
                    <img
                        alt="Partner logos"
                        className="w-auto h-12 sm:h-14 object-contain max-w-none"
                        src="https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4z41oknn_logo%20ticker%2014th.svg"
                        aria-hidden="true"
                    />

                </div>
            </div>

            <style>{`
@keyframes heartbeatGlow {
  0%, 100% { opacity: 0.25; transform: translate(-50%, 16px) scale(0.96); filter: blur(4px); }
  50% { opacity: 0.55; transform: translate(-50%, 12px) scale(1.04); filter: blur(0px); }
}
`}</style>
        </section>
    );
}
