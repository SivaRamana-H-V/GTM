
import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle2, Loader2, Upload, Eye, EyeOff } from "lucide-react";

// Left-panel background image (from the bundle)
const LEFT_BG =
  "https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/6g0d14a4_left%20field%20form.jpg";

const LOGO_SRC =
  "https://customer-assets.emergentagent.com/job_0903dfad-c388-4a74-a78e-6788911143a8/artifacts/4ei0pm8y_vibeconlogo%20%281%29.png";

// ─── Form field helpers ───────────────────────────────────────────────────────
function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-600">
      <AlertCircle size={12} className="shrink-0" />
      {msg}
    </p>
  );
}

function Label({ children, htmlFor, required }) {
  return (
    <label htmlFor={htmlFor} className="block text-[13px] font-semibold text-[#333] mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function Input({ id, type = "text", placeholder, value, onChange, error, ...rest }) {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={[
          "w-full px-3.5 py-2.5 text-[14px] text-dark",
          "border outline-none transition-all duration-150",
          "placeholder:text-[#aaa]",
          "focus:border-primary focus:ring-2 focus:ring-primary/10",
          error
            ? "border-red-400 bg-red-50/30"
            : "border-[#ddd] bg-white hover:border-[#bbb]",
        ].join(" ")}
        {...rest}
      />
      <FieldError msg={error} />
    </>
  );
}

function Select({ id, value, onChange, children, error }) {
  return (
    <>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={[
          "w-full bg-white px-3 py-2.5 text-[14px] text-dark cursor-pointer",
          "border outline-none transition-all duration-150 appearance-none",
          "focus:border-primary focus:ring-2 focus:ring-primary/10",
          error
            ? "border-red-400 bg-red-50/30"
            : "border-[#ddd] hover:border-[#bbb]",
        ].join(" ")}
      >
        {children}
      </select>
      <FieldError msg={error} />
    </>
  );
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(fields) {
  const errs = {};
  if (!fields.name || fields.name.trim().length < 2)
    errs.name = "Name must be at least 2 characters";
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = "Enter a valid email";
  if (!fields.mobile || !/^\d{10}$/.test(fields.mobile.replace(/\s/g, "")))
    errs.mobile = "Must be exactly 10 digits";
  if (!fields.city || fields.city.trim().length < 2)
    errs.city = "City must be at least 2 characters";
  if (!fields.linkedin || !fields.linkedin.startsWith("http"))
    errs.linkedin = "LinkedIn is required (paste full URL)";
  if (!fields.portfolio)
    errs.portfolio = "Share a link to your best work";
  if (!fields.vibeProject)
    errs.vibeProject = "This field is required";
  if (!fields.attendance)
    errs.attendance = "Please select an option";
  return errs;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const INITIAL_FIELDS = {
  name: "",
  email: "",
  mobile: "",
  city: "",
  linkedin: "",
  twitter: "",
  portfolio: "",
  vibeProject: "",
  videoLink: "",
  socialPost: "",
  attendance: "",
  teamDetails: "",
  isStudent: false,
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const set = useCallback((key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFields((prev) => ({ ...prev, [key]: val }));
    // Clear error on change
    if (errors[key]) setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstErrEl = document.querySelector(".field-error-anchor");
      if (firstErrEl) firstErrEl.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    // Simulate async submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitting(false);
    setSubmitted(true);
    // Redirect countdown
    let c = 5;
    const timer = setInterval(() => {
      c -= 1;
      setCountdown(c);
      if (c <= 0) { clearInterval(timer); navigate("/"); }
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6">
        <div className="text-center max-w-[420px]">
          <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-green-700" />
          </div>
          <h1 className="font-figtree font-black text-[28px] text-dark mb-3">
            Thanks for your interest!
          </h1>
          <p className="text-[15px] text-[#555] leading-relaxed mb-2">
            We've received your application. If your signal is strong, we'll reach
            out with next steps.
          </p>
          <p className="text-[13px] text-[#999]">
            Submitted! Redirecting home in {countdown}…
          </p>
          <Link to="/" className="mt-6 inline-block text-[14px] text-primary hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">

      {/* ── Left panel — fixed image + pitch ── */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 h-screen lg:w-[38%] xl:w-[35%]
          flex-col justify-between overflow-hidden z-0"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${LEFT_BG})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content over image */}
        <div className="relative z-10 flex flex-col h-full px-10 xl:px-12 py-10">
          {/* Logo */}
          <Link to="/">
            <img src={LOGO_SRC} alt="VibeCon" className="h-8 object-contain brightness-0 invert" />
          </Link>

          {/* Middle copy */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-4">
              VibeCon 2026
            </p>
            <h2 className="font-figtree font-black text-[36px] xl:text-[42px] text-white leading-tight mb-5">
              Vibecode your way to Y Combinator.
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8">
              Most events work like this: You fill a form and wait. VibeCon does
              not work like that. You are not selected because you applied. You are
              selected because you proved that you belong.
            </p>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
              <p className="text-[14px] text-white/60">
                The application process itself is designed to filter for signal,
                not volume.
              </p>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex gap-8 pb-4 border-t border-white/[0.12] pt-6">
            <div>
              <p className="font-figtree font-black text-[28px] text-white">300</p>
              <p className="text-[12px] text-white/50">Builders selected</p>
            </div>
            <div>
              <p className="font-figtree font-black text-[28px] text-white">2</p>
              <p className="text-[12px] text-white/50">Days of competition</p>
            </div>
            <div>
              <p className="font-figtree font-black text-[28px] text-white">1</p>
              <p className="text-[12px] text-white/50">YC interview spot</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Right panel — scrollable form ── */}
      <main className="flex-1 lg:ml-[38%] xl:ml-[35%] min-h-screen">

        {/* Mobile logo bar */}
        <div className="lg:hidden flex items-center justify-between px-6 py-5 border-b border-black/6">
          <Link to="/">
            <img src={LOGO_SRC} alt="VibeCon" className="h-7 object-contain" />
          </Link>
          <Link to="/" className="flex items-center gap-1 text-[13px] text-[#555] hover:text-dark transition-colors">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>

        <div className="max-w-[580px] mx-auto px-6 md:px-10 py-10 md:py-14">

          {/* Header */}
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#999] mb-3">
              VibeCon Sprint — Round 1
            </p>
            <h1 className="font-figtree font-black text-[28px] md:text-[34px] text-dark leading-tight mb-2">
              Sign Up And Apply
            </h1>
            <p className="text-[14px] text-[#666] leading-relaxed">
              Fill out the application to share your interest, passion, and background.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">

            {/* Personal Info */}
            <fieldset>
              <legend className="text-[11px] font-bold tracking-widest uppercase text-[#999] mb-5 pb-3 border-b border-[#f0f0f0] w-full">
                Personal Information
              </legend>
              <div className="space-y-4">
                <div className={errors.name ? "field-error-anchor" : ""}>
                  <Label htmlFor="name" required>Full Name</Label>
                  <Input
                    id="name" placeholder="Enter your Name"
                    value={fields.name} onChange={set("name")} error={errors.name}
                  />
                </div>
                <div className={errors.email ? "field-error-anchor" : ""}>
                  <Label htmlFor="email" required>Email</Label>
                  <Input
                    id="email" type="email" placeholder="Enter your Email"
                    value={fields.email} onChange={set("email")} error={errors.email}
                  />
                </div>
                <div className={errors.mobile ? "field-error-anchor" : ""}>
                  <Label htmlFor="mobile" required>Mobile Number</Label>
                  <Input
                    id="mobile" type="tel" placeholder="10-digit mobile number"
                    value={fields.mobile} onChange={set("mobile")} error={errors.mobile}
                    maxLength={10}
                  />
                </div>
                <div className={errors.city ? "field-error-anchor" : ""}>
                  <Label htmlFor="city" required>City</Label>
                  <Input
                    id="city" placeholder="Enter your City"
                    value={fields.city} onChange={set("city")} error={errors.city}
                  />
                </div>
                <div className="flex items-center gap-2.5 py-1">
                  <input
                    id="isStudent" type="checkbox"
                    checked={fields.isStudent} onChange={set("isStudent")}
                    className="w-4 h-4 border border-[#ddd] accent-[#05CE0D] cursor-pointer"
                  />
                  <label htmlFor="isStudent" className="text-[13px] text-[#555] cursor-pointer select-none">
                    I am a student
                  </label>
                </div>
              </div>
            </fieldset>

            {/* Socials & Links */}
            <fieldset>
              <legend className="text-[11px] font-bold tracking-widest uppercase text-[#999] mb-5 pb-3 border-b border-[#f0f0f0] w-full">
                Your Online Presence
              </legend>
              <div className="space-y-4">
                <div className={errors.linkedin ? "field-error-anchor" : ""}>
                  <Label htmlFor="linkedin" required>LinkedIn URL</Label>
                  <Input
                    id="linkedin" type="url"
                    placeholder="e.g. John Doe - linkedin.com/in/johndoe"
                    value={fields.linkedin} onChange={set("linkedin")} error={errors.linkedin}
                  />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter / X Handle</Label>
                  <Input
                    id="twitter" placeholder="@yourhandle"
                    value={fields.twitter} onChange={set("twitter")} error={errors.twitter}
                  />
                </div>
                <div className={errors.portfolio ? "field-error-anchor" : ""}>
                  <Label htmlFor="portfolio" required>Portfolio URL</Label>
                  <Input
                    id="portfolio" type="url"
                    placeholder="What is the link to your portfolio? (past projects/Github repo, etc)"
                    value={fields.portfolio} onChange={set("portfolio")} error={errors.portfolio}
                  />
                </div>
              </div>
            </fieldset>

            {/* Builder Signal */}
            <fieldset>
              <legend className="text-[11px] font-bold tracking-widest uppercase text-[#999] mb-5 pb-3 border-b border-[#f0f0f0] w-full">
                Builder Signal
              </legend>
              <div className="space-y-4">
                <div className={errors.vibeProject ? "field-error-anchor" : ""}>
                  <Label htmlFor="vibeProject" required>
                    Share the link to your best vibe-coded project so far
                  </Label>
                  <Input
                    id="vibeProject" type="url"
                    placeholder="https://..."
                    value={fields.vibeProject} onChange={set("vibeProject")} error={errors.vibeProject}
                  />
                </div>
                <div>
                  <Label htmlFor="videoLink">
                    Video Pitch Link{" "}
                    <span className="font-normal text-[#999]">(optional for Round 1)</span>
                  </Label>
                  <Input
                    id="videoLink" type="url"
                    placeholder="YouTube / Loom link — 60 to 90 seconds"
                    value={fields.videoLink} onChange={set("videoLink")} error={errors.videoLink}
                  />
                  <p className="mt-1.5 text-[12px] text-[#999]">
                    Keep it 60 to 90 seconds. We are not evaluating production quality.
                    We are evaluating clarity of thought and conviction.
                  </p>
                </div>
                <div>
                  <Label htmlFor="socialPost">
                    Public Social Post Link{" "}
                    <span className="font-normal text-[#999]">(optional but encouraged)</span>
                  </Label>
                  <Input
                    id="socialPost" type="url"
                    placeholder="Link to your public pitch post"
                    value={fields.socialPost} onChange={set("socialPost")} error={errors.socialPost}
                  />
                  <p className="mt-1.5 text-[12px] text-[#999]">
                    Share your video publicly and tag @emergentlabs.
                    Public submissions may receive additional evaluation signal.
                  </p>
                </div>
              </div>
            </fieldset>

            {/* Attendance */}
            <fieldset>
              <legend className="text-[11px] font-bold tracking-widest uppercase text-[#999] mb-5 pb-3 border-b border-[#f0f0f0] w-full">
                Attendance
              </legend>
              <div className="space-y-4">
                <div className={errors.attendance ? "field-error-anchor" : ""}>
                  <Label htmlFor="attendance" required>
                    If selected, will you attend solo or as a team?
                  </Label>
                  <Select
                    id="attendance"
                    value={fields.attendance} onChange={set("attendance")} error={errors.attendance}
                  >
                    <option value="" disabled>Select one</option>
                    <option value="solo">Solo</option>
                    <option value="team">Team</option>
                  </Select>
                </div>
                {fields.attendance === "team" && (
                  <div>
                    <Label htmlFor="teamDetails">Team Details</Label>
                    <textarea
                      id="teamDetails"
                      placeholder="Team members' names and LinkedIn URLs. If you get selected, the entire team gets selected."
                      value={fields.teamDetails}
                      onChange={set("teamDetails")}
                      rows={3}
                      className="w-full px-3.5 py-2.5 text-[14px] text-dark
                        border border-[#ddd] outline-none resize-none
                        placeholder:text-[#aaa]
                        focus:border-primary focus:ring-2 focus:ring-primary/10
                        hover:border-[#bbb] transition-all duration-150"
                    />
                  </div>
                )}
              </div>
            </fieldset>

            {/* Submit */}
            <div className="pt-2">
              {Object.keys(errors).length > 0 && (
                <p className="flex items-center gap-2 text-[13px] text-red-600 mb-4">
                  <AlertCircle size={14} />
                  Please fix the errors above before submitting.
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2
                  bg-dark hover:bg-[#222] disabled:opacity-50
                  text-white font-semibold text-[15px]
                  py-4 transition-all duration-200"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-[12px] text-[#999]">
                By submitting, you agree that all information provided is accurate.
              </p>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}