import React from "react";
import { CheckCircle2, ArrowRight, Target } from "lucide-react";

export default function WhoWeAre() {
    return (
        <section className="bg-[#fcfbf9] py-16 px-6 lg:px-16 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column Content */}
                <div className="space-y-6">
                    {/* Tag */}
                    <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                        WHO WE ARE
                    </span>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09101d] leading-tight">
                        A Growth Partner for <br />
                        Real Estate Brands & <br />
                        Marketplace Sellers
                    </h2>

                    {/* Description */}
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg">
                        We combine creativity, data and performance marketing to help real
                        estate businesses generate qualified enquiries and help brands grow
                        across marketplaces.
                    </p>

                    {/* Checklist Points */}
                    <ul className="space-y-3.5 pt-1">
                        <li className="flex items-center space-x-3 text-stone-700 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                            <span>Specialists in Real Estate & Marketplace Marketing</span>
                        </li>
                        <li className="flex items-center space-x-3 text-stone-700 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                            <span>Result-oriented strategies tailored to your business</span>
                        </li>
                        <li className="flex items-center space-x-3 text-stone-700 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                            <span>Transparent reporting and clear communication</span>
                        </li>
                    </ul>

                    {/* CTA Button */}

                </div>

                {/* Right Column Image & Overlay Box */}
                <div className="relative">
                    {/* Main Workspace Image */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                            alt="Team collaborating at a desk"
                            className="w-full h-[380px] sm:h-[450px] object-cover"
                        />
                    </div>

                    {/* Floating 'Our Mission' Card */}
                    <div className="absolute -bottom-8 left-6 sm:left-10 bg-white p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-stone-100 max-w-sm flex items-start space-x-4 z-10">
                        <div className="p-3 bg-amber-50 rounded-full border border-amber-200/60 text-amber-600 shrink-0">
                            <Target size={28} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-base font-bold text-stone-900">Our Mission</h4>
                            <p className="text-xs text-stone-500 leading-relaxed">
                                To help businesses grow through performance marketing, smart
                                strategies and continuous optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}