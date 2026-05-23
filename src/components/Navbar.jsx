import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Judges', href: '#judges' },
    { label: 'Partners', href: '#partners' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-mint/80 backdrop-blur-md border-b border-primary/10 z-50 select-none">
      <div className="max-w-360 mx-auto px-6 h-20 flex items-center justify-between gap-4">

        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/Logo.png"
            alt="AIIF Logo"
            className="h-6 w-auto object-contain"
          />
          |
          <img
            src="/assets/Build.png"
            alt="BUILD BEFORE YOUR BURN"
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8 grow">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-medium text-[14px] text-slate-700 hover:text-primary transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center shrink-0">
          <a
            href="#join"
            className="bg-primary hover:bg-navy text-white font-bold text-[14px] px-6 py-3 tracking-wide rounded-full transition-all duration-150 shadow-sm shadow-primary/20 text-center whitespace-nowrap hover:scale-[1.02] active:scale-95"
          >
            Join Us Next Time
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-primary transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-mint border-b border-primary/10 shadow-xl px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans font-semibold text-[16px] text-slate-700 hover:text-primary transition-colors py-2 border-b border-primary/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setIsOpen(false)}
            className="bg-primary hover:bg-navy text-white font-bold text-[15px] px-6 py-3.5 rounded-full text-center mt-2 w-full transition-all duration-150"
          >
            Join Us Next Time
          </a>
        </div>
      )}
    </nav>
  );
};
