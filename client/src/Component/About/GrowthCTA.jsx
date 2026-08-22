import React from "react";
import { ArrowRight, CheckCircle2, User, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useAudit } from "../../context/AuditContext";

export default function GrowthCTA() {
    const { openAuditModal } = useAudit();
    return (
        <section className="bg-[#faf9f6] py-6 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-6xl mx-auto space-y-4">
                {/* Main CTA Banner Container */}
                <div className="relative bg-[#070e1b] rounded-2xl p-5 sm:p-7 overflow-hidden border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
                    {/* Background Subtle Overlay */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />

                    {/* Left Text Content */}
                    <div className="relative z-10 space-y-1.5 text-center sm:text-left max-w-xl">
                        <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
                            READY TO GROW YOUR BUSINESS?
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                            Let's Build Your Next{" "}
                            <span className="text-amber-500">Success Story</span> Together.
                        </h2>
                        <p className="text-stone-300 text-xs leading-relaxed">
                            Book a free strategy call or get a free marketing audit and let's unlock your business growth.
                        </p>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-col gap-2.5 w-full sm:w-auto shrink-0 min-w-[210px]">
                        <Link to="/contact" className="flex items-center justify-center space-x-2 bg-[#eaab40] hover:bg-[#d89b33] text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg shadow-md transition-all duration-300">
                            <span>Book a Free Strategy Call</span>
                            <ArrowRight size={14} />
                        </Link>

                        <button onClick={openAuditModal} className="flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-amber-500/50 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer">
                            <span>Get a Free Marketing Audit</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Feature Highlights Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-stone-600">
                    <div className="flex items-center justify-center lg:justify-start space-x-1.5 text-[11px] font-semibold">
                        <CheckCircle2 size={14} className="text-stone-700 shrink-0" />
                        <span>No Long Term Contracts</span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start space-x-1.5 text-[11px] font-semibold">
                        <CheckCircle2 size={14} className="text-stone-700 shrink-0" />
                        <span>ROI Focused Strategies</span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start space-x-1.5 text-[11px] font-semibold">
                        <User size={14} className="text-stone-700 shrink-0" />
                        <span>Dedicated Account Manager</span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start space-x-1.5 text-[11px] font-semibold">
                        <ShieldCheck size={14} className="text-stone-700 shrink-0" />
                        <span>100% Confidential</span>
                    </div>
                </div>
            </div>
        </section>
    );
}