import React, { useState, useRef, useEffect } from "react";
import {SectionPill} from "../components/Components";
import { ASSETS, JUDGES, PARTNER_LOGOS, PHASES, FAQS, ITEMS_PER_PAGE } from "../components/DATA";
import { ChevronDown, ChevronUp, Trophy, Users, Zap, Star, ArrowRight, Play } from "lucide-react";



// ── FAQ Accordion Item ──
function FaqItem({ faq, index }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            id={`faq-page-${index}`}
            className="border-b border-black/8 last:border-0"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left
          hover:opacity-80 transition-opacity duration-150 focus-visible:outline-none"
                aria-expanded={open}
            >
                <span className="text-[15px] md:text-[16px] font-semibold text-dark leading-snug">
                    {faq.q}
                </span>
                <span className="shrink-0 mt-0.5 text-[#555]">
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
            </button>
            {open && (
                <div className="pb-5 pr-8">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed">
                        {faq.a}
                    </p>
                </div>
            )}
        </div>
    );
}

export const FaqSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination Math
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    // Slicing out exactly 6 questions matching the active view matrix
    const currentFaqs = FAQS.slice(indexOfFirstItem, indexOfLastItem);

    // Total page numbers calculation (e.g., 4 pages total in your screenshot)
    const totalPages = Math.ceil(FAQS.length / ITEMS_PER_PAGE);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <section id="faq" className="faq-section py-16 md:py-24 bg-white select-none">
            <div className="max-w-200 mx-auto px-6 md:px-12">
                <SectionPill src={ASSETS.questionsPill} alt="Got Questions?" />

                <h2 className="font-figtree font-black text-[32px] md:text-[42px] tracking-tight text-[#0f172a] text-center mb-10 leading-tight">
                    Frequently Asked Questions
                </h2>

                {/* Accordion List Container */}
                <div className="divide-y divide-slate-100 border-t border-slate-100">
                    {currentFaqs.map((faq, i) => (
                        // Using global index fallback to preserve distinct page structural rendering identifiers
                        <FaqItem key={indexOfFirstItem + i} faq={faq} index={indexOfFirstItem + i} />
                    ))}
                </div>

                {/* ── PAGINATION CONTROLS CONTROLLER ROW ── */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-6 mt-12 pt-4">
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => {
                                    setCurrentPage(number);
                                    // Optional: Smoothly snap views back to top anchor on page click actions
                                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`
                  w-9 h-9 text-[14px] font-semibold transition-all duration-150 rounded-full flex items-center justify-center
                  ${currentPage === number
                                        ? 'bg-[#2563eb] text-white shadow-md shadow-blue-500/10'
                                        : 'text-slate-600 hover:bg-slate-50'
                                    }
                `}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

