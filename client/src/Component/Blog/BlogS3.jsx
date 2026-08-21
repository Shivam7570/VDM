import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogS3() {
    return (
        <section className="bg-[#080d19] py-1 px-1 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="relative bg-[#111726]/80 rounded-2xl p-6 sm:p-8 lg:p-10 border border-amber-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
                    {/* Subtle Golden Glow Overlay */}
                    <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Left Content with Calendar Icon */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-5 z-10 max-w-2xl">
                        {/* Calendar Icon Badge */}
                        <div className="w-16 h-16 rounded-full bg-stone-900/80 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                            <Calendar size={28} className="text-amber-400" />
                        </div>

                        {/* Headline and Copy */}
                        <div className="space-y-1.5">
                            <span className="text-[11px] font-semibold text-amber-500 uppercase tracking-wide">
                                Ready to Grow Your Business?
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                                Let's Build Your Growth Strategy Together.
                            </h2>
                            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                                Book a free strategy call or get a free marketing audit today.
                            </p>
                        </div>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0 z-10 min-w-[210px]">
                        <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all duration-300">
                            <span>Book a Free Strategy Call</span>
                            <ArrowRight size={15} />
                        </button>

                        <button className="flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-amber-500/40 text-stone-200 hover:text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-300">
                            <span>Get a Free Marketing Audit</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}