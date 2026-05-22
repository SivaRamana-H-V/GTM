import React, { useState, useEffect } from 'react';

const PARTNER_CATEGORIES = [
    { id: 'hero', label: 'Hero Partners' },
    { id: 'supporting', label: 'Supporting Partners' },
    { id: 'ecosystem', label: 'Ecosystem Partners' },
    { id: 'hackerhouse', label: 'Hacker House Partners' },
    { id: 'food', label: 'Food and Beverage Partners' },
    { id: 'media', label: 'Media Partners' },
];

const PARTNERS_DATA = [
    // Added explicit positioning just in case you want to align specific fills differently later
    { category: 'hero', logoSrc: 'https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/qtpgv7rm_Rectangle%20240662916.png', position: 'object-center' },
    { category: 'hero', logoSrc: 'https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/1mi84h9w_2nd%20img%20mobile.jpg', position: 'object-center' },
    { category: 'hero', logoSrc: 'https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/kru8xz45_Vibecon%20Image%20%284%29.JPG', position: 'object-center' },
    { category: 'hero', logoSrc: 'https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/7fgue9qt_1st%20img%20mobile.jpg', position: 'object-center' },
    { category: 'hero', logoSrc: 'https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/yda2h66j_Event%20Photos%20Feb%2021%202026.jpg', position: 'object-center' },
    { category: 'hero', logoSrc: 'https://customer-assets.emergentagent.com/job_vibebattle-india/artifacts/l1n35x6w_Event%20Photo%20Feb%2023%202026.jpg', position: 'object-center' },
    { category: 'supporting', logoSrc: 'https://via.placeholder.com/180x50?text=Sponsor', position: 'object-center' },
];

export const PartnersSection = () => {
    const [activeTab, setActiveTab] = useState('hero');

    // Automatically cycle categories every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((currentTab) => {
                const currentIndex = PARTNER_CATEGORIES.findIndex(tab => tab.id === currentTab);
                const nextIndex = (currentIndex + 1) % PARTNER_CATEGORIES.length;
                return PARTNER_CATEGORIES[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const filteredPartners = PARTNERS_DATA.filter(partner => partner.category === activeTab);

    return (
        <section id="partners" className="partners-section py-20 bg-[#f8fafc] border-b border-slate-100 select-none overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Main Heading */}
                <h2 className="font-sans font-bold text-[32px] sm:text-[42px] tracking-tight text-slate-900 max-w-2xl mx-auto leading-tight mb-10">
                    Everyone is coming together for the top 300 builders
                </h2>

                {/* ── CATEGORY FILTER PILL TABS BAR ── */}
                <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto mb-16">
                    {PARTNER_CATEGORIES.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 border
                                ${activeTab === tab.id
                                    ? 'bg-black border-black text-white shadow-md'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ── LIGHT MODE BRAND GRID CONTAINER ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto justify-center items-center">
                    {filteredPartners.map((partner, index) => (
                        <div
                            key={`${activeTab}-${index}`}
                            // Added overflow-hidden to cleanly crop the image corners inside the rounded box container boundary
                            className="bg-white border border-slate-100 h-28 rounded-xl flex items-center justify-center shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-300 group cursor-pointer relative overflow-hidden Watson-grid-card animate-fadeIn"
                        >
                            <img
                                src={partner.logoSrc}
                                alt="Partner Logo"
                                // Changed max-w-full to absolute full-bleed dimensions with cover scaling matrix rules
                                className={`w-full h-full object-cover ${partner.position || 'object-center'} transition-transform duration-300`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};