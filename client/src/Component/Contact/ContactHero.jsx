import React from "react";
import { ArrowRight, Zap, ShieldCheck, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useAudit } from "../../context/AuditContext";
import Contactimg from "../../assets/ContactHero.png";

export default function ContactHero() {
    const { openAuditModal } = useAudit();
    return (
        <section className="bg-[#fcf7ee] pt-12 pb-6 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Main Hero Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Text Content */}
                    <div className="lg:col-span-6 space-y-6 text-left">
                        {/* Header Tag with Line */}
                        <div className="flex items-center space-x-3">
                            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                                CONTACT US
                            </span>
                            <div className="w-12 h-[1px] bg-amber-400" />
                        </div>

                        {/* Title */}
                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#09101d] leading-[1.1]">
                                Let's Build Something <br />
                                <span className="text-amber-600">Great Together!</span>
                            </h1>
                            {/* Decorative Accent Bar */}
                            <div className="w-16 h-1.5 bg-amber-500 rounded-full" />
                        </div>

                        {/* Subheading */}
                        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg">
                            Have a project in mind? Our experts are here to help you grow your real estate business or scale your brand across leading marketplaces.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <button className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-300">
                                <span>Book a Free Strategy Call</span>
                                <ArrowRight size={16} />
                            </button>

                            <button onClick={openAuditModal} className="flex items-center space-x-2 bg-white/80 hover:bg-white border border-amber-300 text-stone-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all duration-300 cursor-pointer">
                                <span>Get a Free Marketing Audit</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right Image Graphic Section */}
                    <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-xl">
                            <img
                                src={Contactimg}
                                alt="3D City Skyline with Location Pin"
                                className="w-full h-[320px] sm:h-[400px] object-cover rounded-3xl "
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Features Highlight Bar */}
                <div className="pt-6 border-t border-amber-200/60 grid grid-cols-2 lg:grid-cols-4 gap-4 text-stone-700">
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-amber-100/60 text-amber-700 rounded-full shrink-0 border border-amber-200">
                            <Zap size={18} />
                        </div>
                        <div className="leading-tight">
                            <h5 className="text-xs font-bold text-stone-900">Quick Response</h5>
                            <p className="text-[11px] text-stone-500">Within 24 Hours</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-amber-100/60 text-amber-700 rounded-full shrink-0 border border-amber-200">
                            <ShieldCheck size={18} />
                        </div>
                        <div className="leading-tight">
                            <h5 className="text-xs font-bold text-stone-900">No Obligation</h5>
                            <p className="text-[11px] text-stone-500">100% Free Consultation</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-amber-100/60 text-amber-700 rounded-full shrink-0 border border-amber-200">
                            <Users size={18} />
                        </div>
                        <div className="leading-tight">
                            <h5 className="text-xs font-bold text-stone-900">Trusted by Brands</h5>
                            <p className="text-[11px] text-stone-500">Across India &amp; Globally</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-amber-100/60 text-amber-700 rounded-full shrink-0 border border-amber-200">
                            <Lock size={18} />
                        </div>
                        <div className="leading-tight">
                            <h5 className="text-xs font-bold text-stone-900">100% Confidential</h5>
                            <p className="text-[11px] text-stone-500">Your Data is Safe</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}