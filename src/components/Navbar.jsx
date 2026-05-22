import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Standard lucide icons for mobile handling

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nav items pulled directly from your screenshot
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Judges', href: '#judges' },
    { label: 'Partners', href: '#partners' },
    { label: 'FAQ', href: '#faq' },
    { label: 'SkyPass', href: '#skypass' },
    { label: 'Rules', href: '#rules' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 select-none">
      <div className="max-w-360 mx-auto px-6 h-20 flex items-center justify-between gap-4">

        {/* LEFT SECTION: Brand Stack */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/logo.png"
            alt="Emergent Logo"
            className="h-6 w-auto object-contain"
          />

          {/* Minimalist Vertical Divider Line */}
          {/* <div className="w-px h-6 bg-slate-300"></div> */}

        </div>

        {/* CENTER SECTION: Desktop Navigation Menu links */}
        <div className="hidden lg:flex items-center justify-center gap-8 grow">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-medium text-[14px] text-[#64748b] hover:text-[#0f172a] transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT SECTION: Primary Call To Action Button Widget */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href="#join"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-[14px] px-6 py-3 tracking-wide rounded-xs transition-all duration-150 shadow-sm shadow-blue-500/10 text-center whitespace-nowrap"
          >
            Join Us Next Time
          </a>
        </div>

        {/* MOBILE COMPONENT: Hamburger Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DRAWERS OVERLAY FRAME */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans font-semibold text-[16px] text-[#475569] hover:text-[#2563eb] transition-colors py-2 border-b border-slate-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setIsOpen(false)}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-[15px] px-6 py-3.5 rounded-xs text-center mt-2 w-full"
          >
            Join Us Next Time
          </a>
        </div>
      )}
    </nav>
  );
};