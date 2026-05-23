import React from 'react';

const GALLERY_IMAGES = [
    { src: 'https://via.placeholder.com/400x300?text=VibeCon+1', alt: 'VibeCon venue check-in' },
    { src: 'https://via.placeholder.com/400x300?text=VibeCon+2', alt: 'Main stage group photo' },
    { src: 'https://via.placeholder.com/400x300?text=VibeCon+3', alt: 'Hacker house building session' },
    { src: 'https://via.placeholder.com/400x300?text=VibeCon+4', alt: 'Audience and speakers panel' },
    { src: 'https://via.placeholder.com/400x300?text=VibeCon+5', alt: 'Builders networking breakout' },
];

export default function EventGallery() {
    const scrollableTrack = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

    return (
        <section className="py-20 bg-mint overflow-hidden select-none">
            <div className="w-full text-center mb-12 px-6">
                <h2 className="font-sans font-black text-[32px] sm:text-[46px] tracking-tight text-dark leading-tight">
                    It's time for GTM Conclave <br className="sm:hidden" /> in Bengaluru!
                </h2>
            </div>

            <div className="w-full inline-flex flex-nowrap mask-gradient-edges relative">
                <div className="flex gap-4 items-center justify-center animate-infinite-scroll whitespace-nowrap py-4">
                    {scrollableTrack.map((img, index) => (
                        <div
                            key={index}
                            className="w-70 sm:w-85 h-55 sm:h-65 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-primary/10 hover:scale-[1.02] transition-transform duration-300 ease-out"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover pointer-events-none"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .mask-gradient-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
        </section>
    );
}
