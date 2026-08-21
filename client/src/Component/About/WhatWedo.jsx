import React from "react";
import { Building2, ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhatWedo() {
    const realEstateFeatures = [
        "Lead Generation",
        "Project Promotion",
        "Performance Marketing",
        "Brand Presence",
        "Local & Search Visibility",
        "CRM & Lead Management",
    ];

    const marketplaceFeatures = [
        "Listing Optimization",
        "Marketplace Advertising",
        "SEO & Catalog Management",
        "Store & Brand Presence",
        "Analytics & Growth",
        "Operational Support",
    ];

    return (
        <section className="bg-[#fcfbf9] py-16 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                    <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                        WHAT WE DO
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09101d] leading-tight">
                        We Help Businesses Grow <br />
                        in Two Powerful Ways
                    </h2>
                    <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                        Our two core service pillars are designed to generate demand, increase visibility and
                        drive measurable growth for your business.
                    </p>
                </div>

                {/* Two Service Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Card 1: Real Estate Marketing */}
                    <div className="relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow duration-300">
                        {/* Background Illustration Image */}
                        <img
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
                            alt="Real Estate Building"
                            className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-15 pointer-events-none mask-gradient"
                        />

                        <div className="relative z-10 space-y-6">
                            {/* Header Icon + Title */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shrink-0">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Real Estate Marketing
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md">
                                We help real estate developers, builders, brokers and agents generate high-quality leads, promote projects and build a strong brand presence.
                            </p>

                            {/* Checklist Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
                                {realEstateFeatures.map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                                        <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Link Button */}
                        <div className="relative z-10 pt-8">
                            <a
                                href="#real-estate"
                                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                <span>Explore Real Estate Marketing</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Marketplace Marketing */}
                    <div className="relative bg-[#fffdfa] border border-amber-100/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow duration-300">
                        {/* Background Illustration Image */}
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
                            alt="Headphones Marketplace"
                            className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-15 pointer-events-none"
                        />

                        <div className="relative z-10 space-y-6">
                            {/* Header Icon + Title */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-md shrink-0">
                                    <ShoppingBag size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Marketplace Marketing
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md">
                                We help brands launch, optimize, advertise and scale across Amazon, Walmart, Flipkart, eBay, Etsy, TikTok Shop, Temu and Quick Commerce.
                            </p>

                            {/* Checklist Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
                                {marketplaceFeatures.map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                                        <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Link Button */}
                        <div className="relative z-10 pt-8">
                            <a
                                href="#marketplace"
                                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
                            >
                                <span>Explore Marketplace Marketing</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}