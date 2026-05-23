
import React from "react";
import { Link } from "react-router-dom";
import { Plane, ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../components/Components";

const LOGO_SRC =
  "https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4ei0pm8y_vibeconlogo%20%281%29.png";

const STARKNET_MSG =
  "https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/ximstz38_message%20from%20starknet.svg";

const SECTION_IMG =
  "https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/zvg1heqs_section2%20image.jpg";

export default function SkypassPage() {
  return (
    <div className="min-h-screen bg-[#F4F9F5]">

      <main>

        <AnimatedSection>
        <section className="py-20 md:py-28 bg-[#111827] text-white">
          <div className="max-w-200 mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-[#009E52]/30
              text-[#009E52] text-[12px] font-semibold tracking-widest uppercase px-4 py-2 mb-8">
              <Plane size={14} />
              Skypass — Flight Sponsorship
            </div>
            <h1 className="font-figtree font-black text-[40px] md:text-[60px] tracking-tight leading-[1.05] mb-6">
              We don't want you to be held back by a flight ticket.
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-140 mx-auto mb-10">
              So we're sponsoring flights for 5 builders through Skypass. Your
              Round&nbsp;2 video submissions are going to be used to shortlist —
              we'll be reaching out soon.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12
              text-white/50 text-[13px] font-medium px-5 py-2.5">
              <Clock size={14} />
              Shortlisting in progress — check your email
            </div>
          </div>
        </section>
        </AnimatedSection>

        <AnimatedSection>
        <section className="py-16 md:py-24 bg-[#F4F9F5]">
          <div className="max-w-250 mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#999] mb-4">
                  How Skypass Works
                </p>
                <h2 className="font-figtree font-black text-[32px] md:text-[40px] tracking-tight text-dark leading-tight mb-6">
                  Earn your flight, not just your spot.
                </h2>
                <p className="text-[15px] text-[#374151] leading-relaxed mb-8">
                  Skypass is for the builders who have the talent but not the means.
                  We're sponsoring 5 round-trip flights so that geography doesn't
                  become the deciding factor between you and your shot at YC.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      step: "01",
                      title: "Submit a strong Round 2 video",
                      body: "60–90 seconds. Who you are, what you're building, and why you. That's the filter.",
                    },
                    {
                      step: "02",
                      title: "Get shortlisted for Skypass",
                      body: "Our team reviews Round 2 submissions specifically for Skypass eligibility based on signal and need.",
                    },
                    {
                      step: "03",
                      title: "Receive your flight sponsorship",
                      body: "If selected, we'll reach out directly to coordinate your flight to Bengaluru for April 16–17.",
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white
                        flex items-center justify-center font-figtree font-black text-[12px] mt-0.5">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="font-figtree font-bold text-[15px] text-dark mb-1">
                          {s.title}
                        </h3>
                        <p className="text-[13px] text-[#374151] leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={SECTION_IMG}
                  alt="GTM Conclave builders"
                  className="w-full aspect-4/5 object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6
                  bg-white/95 backdrop-blur border border-[#009E52]/10
                  px-6 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <Plane size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-figtree font-black text-[22px] text-dark leading-none">5 Flights</p>
                    <p className="text-[12px] text-[#374151] mt-0.5">Fully sponsored, round-trip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </AnimatedSection>

        <AnimatedSection>
        <section className="py-16 md:py-20 bg-white border-y border-[#009E52]/10">
          <div className="max-w-190 mx-auto px-6">
            <h2 className="font-figtree font-bold text-[24px] text-dark mb-8">
              Eligibility & What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#999] mb-4">
                  You're eligible if you
                </p>
                <ul className="space-y-3">
                  {[
                    "Have submitted a Round 2 video",
                    "Are located outside Bengaluru",
                    "Have demonstrated strong builder signal",
                    "Confirm attendance on both event days",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#333]">
                      <CheckCircle2 size={15} className="text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#999] mb-4">
                  Important notes
                </p>
                <ul className="space-y-3">
                  {[
                    "Only 5 flights are being sponsored — highly competitive",
                    "Shortlisting is based on Round 2 video quality",
                    "We will reach out directly if selected",
                    "Attendance on both days (Apr 16–17) is mandatory",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                      <AlertCircle size={15} className="text-[#f59e0b] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        </AnimatedSection>

        <AnimatedSection>
        <section className="py-16 md:py-20 bg-[#F4F9F5] text-center">
          <div className="max-w-135 mx-auto px-6">
            <h2 className="font-figtree font-black text-[28px] md:text-[36px] tracking-tight text-dark mb-4 leading-tight">
              Haven't applied yet?
            </h2>
            <p className="text-[15px] text-[#374151] mb-8 leading-relaxed">
              Submit your application now. Your Round 2 video is what we use for
              Skypass shortlisting — so put in the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 justify-center
                  bg-primary hover:bg-[#0B2265] text-white
                  font-semibold text-[15px]
                  px-7 py-3.5 transition-all duration-200 rounded-full"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 justify-center
                  bg-white hover:bg-[#f5f5f5] text-dark
                  font-semibold text-[15px]
                  px-7 py-3.5 border border-[#009E52]/20
                  transition-all duration-200 rounded-full"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
        </AnimatedSection>

      </main>
    </div>
  );
}
