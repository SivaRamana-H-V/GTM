
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, ArrowRight } from "lucide-react";

const LOGO_SRC =
  "https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4ei0pm8y_vibeconlogo%20%281%29.png";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto-redirect to home after 10 s
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(timer); navigate("/"); }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">


      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20">

        {/* 404 giant number */}
        <div className="relative mb-8 select-none">
          <span className="font-figtree font-black text-[120px] md:text-[180px]
            leading-none tracking-tighter text-white/4">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-figtree font-black text-[64px] md:text-[80px]
              leading-none tracking-tight text-white">
              404
            </span>
          </div>
        </div>

        <h1 className="font-figtree font-black text-[28px] md:text-[36px] tracking-tight mb-4 leading-tight">
          This page doesn't exist.
        </h1>
        <p className="text-[15px] text-white/50 max-w-100 leading-relaxed mb-10">
          The page you're looking for may have been moved, deleted, or never
          existed. Head back home and try again.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 items-center mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 justify-center
              bg-white hover:bg-[#f0f0f0] text-dark
              font-bold text-[15px]
              px-7 py-3.5 transition-all duration-200"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 justify-center
              bg-primary hover:bg-[#1a47d6] text-white
              font-bold text-[15px]
              px-7 py-3.5 transition-all duration-200"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>

        {/* Auto-redirect notice */}
        <p className="text-[13px] text-white/30">
          Redirecting to home in{" "}
          <span className="text-white/60 font-semibold tabular-nums">{countdown}s</span>
          …
        </p>

        {/* Quick links */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 items-center">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-white/30">
            Quick links
          </p>
          {[
            { label: "Home", to: "/" },
            { label: "Apply", to: "/register" },
            { label: "Skypass", to: "/skypass" },
            { label: "Next Edition", to: "/join-next" },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[13px] font-medium text-white/40 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}
