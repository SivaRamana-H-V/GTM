
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const LOGO_SRC =
  "https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4ei0pm8y_vibeconlogo%20%281%29.png";

// Photos shown in the confirmation panel
const EVENT_PHOTOS = [
  "https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/l1n35x6w_Event%20Photo%20Feb%2023%202026.jpg",
  "https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/yda2h66j_Event%20Photos%20Feb%2021%202026.jpg",
  "https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/kru8xz45_Vibecon%20Image%20%284%29.JPG",
];

export default function ShortlistPage() {
  return (
    <div className="min-h-screen bg-white">


      <main className="max-w-190 mx-auto px-6 py-16 md:py-24">

        {/* Status badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#2E7D32] px-4 py-2">
            <CheckCircle2 size={16} />
            <span className="text-[13px] font-semibold">You've been shortlisted</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-12">
          <h1 className="font-figtree font-black text-[36px] md:text-[52px] tracking-tight text-dark leading-tight mb-4">
            Receive your official acceptance letter to attend VibeCon.
          </h1>
          <p className="text-[16px] text-[#555] leading-relaxed max-w-135 mx-auto">
            If your application demonstrates strong signal, you will receive a
            confirmation that you have been selected among the top&nbsp;300 builders.
            You will then be invited to participate in VibeCon Battleground.
          </p>
        </div>

        {/* What happens next — steps */}
        <div className="bg-[#fafafa] border border-black/6 p-8 md:p-10 mb-10">
          <h2 className="font-figtree font-bold text-[18px] text-dark mb-7">
            What happens next
          </h2>
          <ol className="space-y-6">
            {[
              {
                num: "01",
                title: "Application Review",
                body: "Our panel evaluates all submissions based on strength of past work, clarity of thinking, and overall builder signal.",
              },
              {
                num: "02",
                title: "Round 2 Invitation",
                body: "If the panel believes you meet the bar, you'll get an invite to Round 2 — a short video pitch where you prove your idea's value.",
              },
              {
                num: "03",
                title: "Official Acceptance",
                body: "If selected, you'll receive an official acceptance email confirming your spot at VibeCon.",
              },
              {
                num: "04",
                title: "VibeCon Battleground",
                body: "Attend the 2-day event on April 16–17, 2026 in Bengaluru. Build, demo, pitch — and compete for the YC interview.",
              },
            ].map((step) => (
              <li key={step.num} className="flex gap-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-dark text-white
                  flex items-center justify-center
                  font-figtree font-black text-[12px] tracking-tight mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-figtree font-bold text-[15px] text-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#666] leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Event details strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { Icon: Calendar, label: "Date", value: "April 16–17, 2026" },
            { Icon: MapPin, label: "Location", value: "Bengaluru, India" },
            { Icon: Users, label: "Attendees", value: "Top 300 builders" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 p-5 bg-[#fafafa] border border-black/6">
              <Icon size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#999] mb-0.5">
                  {label}
                </p>
                <p className="text-[14px] font-semibold text-dark">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-3 gap-2 mb-12">
          {EVENT_PHOTOS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`VibeCon event ${i + 1}`}
              className="w-full aspect-4/3 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2
              bg-primary hover:bg-[#1a47d6] text-white
              font-semibold text-[15px]
              px-7 py-3.5 transition-all duration-200"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link
            to="/join-next"
            className="text-[14px] text-[#555] hover:text-dark font-medium transition-colors"
          >
            Missed this edition? Sign up for next →
          </Link>
        </div>

      </main>
    </div>
  );
}