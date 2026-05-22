
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Trophy, Users, Zap, Star, ArrowRight, Play } from "lucide-react";
import EventGallery from "../components/EventGallery";
import HowItWorks from "../components/HowItWorks";
import HeroSection from "../components/HeroSection";
import { PartnersSection } from "../components/PartnersSection";
import { FaqSection } from "../components/FaqSection";
import { ASSETS, JUDGES, PARTNER_LOGOS, PHASES } from "../components/DATA";
import { SectionPill, HeroSponsorBadge } from "../components/Components";



// ─── HomePage ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ═══════════════════════════════════════════════════════
          "HOW WE'RE DOING THIS" — Emergent section
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-y border-black/6">
        <div className="max-w-300 mx-auto px-6 md:px-12">
          <SectionPill src={ASSETS.howWeDoingPill} alt="How we are doing this" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-figtree font-black text-[32px] md:text-[44px] tracking-tight text-dark mb-5 leading-tight">
                The best builders we've seen share two things.
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                They build, and they can explain what they built. That's the only
                filter, because that one act tells us more than any application
                ever could.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed mb-8">
                All projects must be built using{" "}
                <a href="https://app.emergent.sh" target="_blank" rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline">
                  Emergent
                </a>{" "}
                during the competition. Pre-built projects are not allowed.
                Code must be written by the Emergent Agent.
              </p>
              <div className="flex items-center gap-3">
                <img src={ASSETS.emergentLogo} alt="Emergent" className="h-7 object-contain" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[ASSETS.frame1, ASSETS.frame2, ASSETS.frame3, ASSETS.frame4].map((src, i) => (
                <img key={i} src={src} alt="Emergent builder" className="w-full aspect-square object-cover" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE PANEL — Judges
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-300 mx-auto px-6 md:px-12">
          <SectionPill src={ASSETS.thePanelPill} alt="The panel" />
          <p className="text-center text-[15px] text-[#555] mb-12 max-w-125 mx-auto leading-relaxed">
            A{" "}
            <span className="font-semibold text-dark">
              high signal judging panel
            </span>{" "}
            of top founders, investors, and operators.
          </p>

          {/* Carousel — horizontal scroll on mobile, grid on desktop */}
          <div className="flex judges-carousel gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide">
            {JUDGES.map((judge, i) => (
              <div
                key={i}
                className="shrink-0 w-65 md:w-auto
                  bg-[#fafafa] border border-black/6
                  p-5 flex flex-col gap-3"
              >
                <div className="w-full aspect-4/3 overflow-hidden bg-[#f0f0f0]">
                  <img
                    src={judge.img}
                    alt={judge.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-figtree font-bold text-[16px] text-dark leading-snug">
                    {judge.name}
                  </p>
                  <p className="text-[13px] text-[#666] mt-0.5 leading-snug">
                    {judge.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PRIZES
      ═══════════════════════════════════════════════════════ */}
      <section id="prizes" className="py-16 md:py-24 bg-dark text-white">
        <div className="max-w-300 mx-auto px-6 md:px-12">
          <SectionPill src={ASSETS.section3Pill} alt="Prizes" />

          <div className="text-center mb-14">
            <h2 className="font-figtree font-black text-[36px] md:text-[52px] tracking-tight mb-4 leading-tight">
              Extraordinary builders deserve{" "}
              <span className="text-primary">extraordinary outcomes.</span>
            </h2>
            <p className="text-[16px] text-white/60 max-w-135 mx-auto leading-relaxed">
              Investor roundtables. Winner gets a billboard. Creator features.
              Partner credits. And more. Stuff that doesn't just feel good for a
              day — it compounds after the room is over.
            </p>
          </div>

          {/* Prize cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Grand prize */}
            <div className="md:col-span-3 bg-primary p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <Trophy size={32} className="shrink-0" />
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-widest opacity-80 mb-1">Grand Prize</p>
                  <h3 className="font-figtree font-black text-[28px] md:text-[36px] leading-tight">
                    A direct YC interview
                  </h3>
                  <p className="text-[14px] opacity-70 mt-1">For an upcoming Y Combinator batch</p>
                </div>
              </div>
              <Link
                to="/register"
                className="shrink-0 inline-flex items-center gap-2
                  bg-white text-primary hover:bg-[#f0f0f0]
                  font-bold text-[14px]
                  px-6 py-3 transition-all duration-200"
              >
                Apply Now <ArrowRight size={15} />
              </Link>
            </div>

            {/* Cash prizes */}
            {[
              { place: "1st Place", amount: "$5,000", label: "Cash Prize" },
              { place: "2nd Place", amount: "$3,000", label: "Cash Prize" },
              { place: "3rd Place", amount: "$2,000", label: "Cash Prize" },
            ].map((p, i) => (
              <div key={i} className="bg-white/6 border border-white/8 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-2">
                  {p.place}
                </p>
                <p className="font-figtree font-black text-[40px] leading-none mb-1">
                  {p.amount}
                </p>
                <p className="text-[14px] text-white/60">{p.label}</p>
              </div>
            ))}
          </div>

          {/* Credits & perks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/4 border border-white/6 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-4">
                Platform Credits
              </p>
              <ul className="space-y-3">
                {[
                  "$10,000 in Anthropic API credits",
                  "$25,000 in AWS credits",
                  "$25,000 in Stripe processing credits",
                  "$5,000 in MongoDB Atlas credits",
                  "Temporal Cloud credits for 1 year",
                  "1-year Wispr Flow Pro subscription",
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-white/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/4 border border-white/6 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-4">
                Additional Opportunities
              </p>
              <ul className="space-y-3">
                {[
                  "Founder roundtables with top investors",
                  "Startup ecosystem exposure",
                  "1:1 mentorship session with a Lightspeed partner",
                  "Creator amplification and feature spotlight",
                  "Fast-track to Lightspeed office hours",
                  "Access to Lightspeed founder resources",
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-white/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS — PHASES
      ═══════════════════════════════════════════════════════ */}
      <HowItWorks />

      {/* ═══════════════════════════════════════════════════════
          PARTNERS
      ═══════════════════════════════════════════════════════ */}
      <PartnersSection />

      {/* ═══════════════════════════════════════════════════════
          RULES & REGULATIONS
      ═══════════════════════════════════════════════════════ */}
      <EventGallery />

      {/* ═══════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════ */}
      <FaqSection />

    </div>
  );
}