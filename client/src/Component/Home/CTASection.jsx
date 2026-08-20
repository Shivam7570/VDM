import React from 'react';
import { Calendar, FileText } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="w-full bg-[#050B14] text-white py-12 px-6 md:px-12 relative overflow-hidden font-sans border-t border-b border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">

                {/* Left Side: Headline & Buttons */}
                <div className="space-y-4 text-center lg:text-left max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Ready to Scale Your Business?
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base font-normal">
                        Book a free strategy call or get your marketing audit today.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        <button className="inline-flex items-center gap-2 bg-[#D9383A] hover:bg-[#c02d2f] text-white font-medium text-sm px-5 py-3 rounded-xl transition-all shadow-lg shadow-red-900/20">
                            <Calendar className="w-4 h-4" />
                            <span>Book a Strategy Call</span>
                        </button>

                        <button className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-gray-600 hover:border-gray-400 font-medium text-sm px-5 py-3 rounded-xl transition-all">
                            <FileText className="w-4 h-4 text-gray-300" />
                            <span>Get Your Free Audit</span>
                        </button>
                    </div>
                </div>

                {/* Right Side: Growth Chart Graphic */}
                <div className="relative w-full max-w-md h-40 flex items-end justify-end pointer-events-none">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 160" fill="none">
                        {/* Background Grid Lines */}
                        <path d="M 0 30 H 400 M 0 70 H 400 M 0 110 H 400 M 0 150 H 400" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                        <path d="M 50 0 V 160 M 120 0 V 160 M 190 0 V 160 M 260 0 V 160 M 330 0 V 160" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

                        {/* Gradient Bar Chart Elements */}
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#D9383A" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#D9383A" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>

                        {/* Red Vertical Bars */}
                        <rect x="230" y="100" width="16" height="60" rx="2" fill="url(#barGradient)" />
                        <rect x="260" y="80" width="16" height="80" rx="2" fill="url(#barGradient)" />
                        <rect x="290" y="30" width="16" height="130" rx="2" fill="url(#barGradient)" />
                        <rect x="320" y="45" width="16" height="115" rx="2" fill="url(#barGradient)" />
                        <rect x="350" y="70" width="16" height="90" rx="2" fill="url(#barGradient)" />
                        <rect x="380" y="15" width="16" height="145" rx="2" fill="url(#barGradient)" />

                        {/* Trend Line */}
                        <path
                            d="M 170 125 L 210 85 L 240 105 L 260 80 L 295 30 L 325 55 L 385 15"
                            stroke="#FCA5A5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* Data Points (Dots on Trend Line) */}
                        <circle cx="170" cy="125" r="4" fill="#9CA3AF" />
                        <circle cx="210" cy="85" r="4" fill="#D1D5DB" />
                        <circle cx="240" cy="105" r="4" fill="#D1D5DB" />
                        <circle cx="260" cy="80" r="4" fill="#E5E7EB" />
                        <circle cx="295" cy="30" r="5" fill="#FFFFFF" />
                        <circle cx="325" cy="55" r="4" fill="#E5E7EB" />

                        {/* Arrowhead */}
                        <path d="M 378 15 L 387 13 L 385 22" fill="none" stroke="#FCA5A5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div>
        </section>
    );
}