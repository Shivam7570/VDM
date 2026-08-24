import React from 'react';

export default function Service2H() {
    return (
        <div className="w-full bg-[#070b14] text-white py-17 pb-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background network dots/lines effect */}
            <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"></div>

            {/* Decorative ambient lighting glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-900/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* Top Tagline with side lines */}
                <div className="flex items-center justify-center space-x-3 text-amber-500 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-4">
                    <span className="w-8 sm:w-12 h-[1px] bg-amber-500/60"></span>
                    <span>WHAT WE DO</span>
                    <span className="w-8 sm:w-12 h-[1px] bg-amber-500/60"></span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
                    Our <span className="text-amber-500">Services</span>
                </h1>

                {/* Description Text */}
                <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    End-to-end digital solutions that empower businesses, <br className="hidden sm:inline" />
                    enhance customer experiences, and drive measurable growth.
                </p>

                {/* Bottom Accent Line */}
                <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>

            </div>
        </div>
    );
}