
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, MapPin, Bell } from "lucide-react";

const LOGO_SRC =
  "https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4ei0pm8y_vibeconlogo%20%281%29.png";

const CITYSCAPE_SRC =
  "https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/97aca0il_Rectangle%20240662915.png";

// ─── Validation ───────────────────────────────────────────────────────────────
function validateJoinNext(f) {
  const e = {};
  if (!f.name || f.name.trim().length < 2)
    e.name = "Name must be at least 2 characters";
  if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "Enter a valid email";
  if (!f.city || f.city.trim().length < 2)
    e.city = "City must be at least 2 characters";
  return e;
}

// ─── Mini input for this page ──────────────────────────────────────────────────
function Field({ label, id, type = "text", placeholder, value, onChange, error, hint }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold text-[#333] mb-1.5">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={id} type={type} placeholder={placeholder}
        value={value} onChange={onChange}
        className={[
          "w-full px-3.5 py-2.5 text-[14px] text-dark",
          "border outline-none transition-all duration-150",
          "placeholder:text-[#aaa]",
          "focus:border-primary focus:ring-2 focus:ring-primary/10",
          error
            ? "border-red-400 bg-red-50/30"
            : "border-[#ddd] bg-white hover:border-[#bbb]",
        ].join(" ")}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-600">
          <AlertCircle size={12} className="shrink-0" />
          {error}
        </p>
      )}
      {hint && !error && (
        <p className="mt-1.5 text-[12px] text-[#999]">{hint}</p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function JoinNextPage() {
  const [fields, setFields] = useState({ name: "", email: "", city: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = useCallback((key) => (e) => {
    setFields((p) => ({ ...p, [key]: e.target.value }));
    if (errors[key]) setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateJoinNext(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400)); // simulate API
    setLoading(false);
    setDone(true);
  };

  return (
    <div className="min-h-screen bg-white">


      <main>

        {/* ── Hero ── */}
        <section className="py-16 md:py-24 bg-[#fafafa] border-b border-black/6">
          <div className="max-w-250 mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left — copy + form */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-black/8
                  text-[#555] text-[12px] font-semibold uppercase tracking-widest px-4 py-2 mb-8">
                  <Bell size={13} />
                  Next Edition
                </div>
                <h1 className="font-figtree font-black text-[34px] md:text-[44px] tracking-tight
                  text-dark leading-tight mb-4">
                  Missed this edition?
                </h1>
                <p className="text-[16px] text-[#555] leading-relaxed mb-10">
                  Sign up and we'll notify you when the next VibeCon is announced.
                  No spam — just one email when it matters.
                </p>

                {done ? (
                  /* Success state */
                  <div className="bg-white border border-black/8 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 size={24} className="text-green-600 shrink-0" />
                      <h2 className="font-figtree font-bold text-[18px] text-dark">
                        You're on the list!
                      </h2>
                    </div>
                    <p className="text-[14px] text-[#555] leading-relaxed mb-6">
                      We've noted your details. We'll reach out when the next edition
                      of VibeCon is announced. Stay tuned!
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2
                        bg-primary hover:bg-[#1a47d6] text-white
                        font-semibold text-[14px]
                        px-6 py-3 transition-all duration-200"
                    >
                      Back to Home <ArrowRight size={15} />
                    </Link>
                  </div>
                ) : (
                  /* Sign up form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <Field
                      id="jn-name" label="Full Name"
                      placeholder="Enter your Name"
                      value={fields.name} onChange={set("name")} error={errors.name}
                    />
                    <Field
                      id="jn-email" label="Email" type="email"
                      placeholder="Enter your Email"
                      value={fields.email} onChange={set("email")} error={errors.email}
                    />
                    <Field
                      id="jn-city" label="City"
                      placeholder="Where are you from?"
                      value={fields.city} onChange={set("city")} error={errors.city}
                      hint="We use this to tailor future editions to builder hubs."
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2
                        bg-dark hover:bg-[#222] disabled:opacity-50
                        text-white font-semibold text-[15px]
                        py-3.5 transition-all duration-200 mt-2"
                    >
                      {loading ? (
                        <><Loader2 size={16} className="animate-spin" /> Signing you up…</>
                      ) : (
                        <>Notify me for next edition <ArrowRight size={15} /></>
                      )}
                    </button>
                    <p className="text-[12px] text-[#999] text-center">
                      No spam. One email when the next VibeCon launches.
                    </p>
                  </form>
                )}
              </div>

              {/* Right — cityscape visual */}
              <div id="join-next-cityscape" className="relative hidden lg:block">
                <img
                  src={CITYSCAPE_SRC}
                  alt="India builders"
                  className="w-full h-120 object-cover"
                />
                {/* City overlay card */}
                <div className="absolute bottom-6 left-6 right-6
                  bg-white/95 backdrop-blur border border-black/8
                  px-6 py-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#999]">
                      Builder Cities
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Bengaluru", "Mumbai", "Delhi", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad"].map((c) => (
                      <span key={c}
                        className="text-[12px] font-medium bg-[#f0f0f0] text-[#555]
                          px-3 py-1 border border-[#e5e5e5]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why join next ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-200 mx-auto px-6 text-center">
            <h2 className="font-figtree font-black text-[28px] md:text-[36px] tracking-tight text-dark mb-12 leading-tight">
              Why you should be at the next edition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "300 Exceptional Builders",
                  body: "Every person in the room was hand-selected. No filler. No noise. Only exceptional builders who earned their spot.",
                },
                {
                  title: "Direct YC Interview",
                  body: "The winner gets a direct interview for an upcoming Y Combinator batch — something we've only done before in San Francisco.",
                },
                {
                  title: "The Kind of Visibility That Compounds",
                  body: "Investor roundtables. Founder roundtables. Creator features. Partner credits. Stuff that doesn't just feel good for a day.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-[#fafafa] border border-black/6">
                  <h3 className="font-figtree font-bold text-[16px] text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {!done && (
              <div className="mt-10">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2
                    bg-primary hover:bg-[#1a47d6] text-white
                    font-semibold text-[15px]
                    px-7 py-3.5 transition-all duration-200"
                >
                  Sign up for next edition <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}