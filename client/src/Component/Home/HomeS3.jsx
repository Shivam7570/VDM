import React from "react";
import {
    Target,
    Users,
    TrendingUp,
    Eye,
    ShieldCheck,
    Crosshair
} from "lucide-react";

export default function HomeS3() {
    const features = [
        {
            icon: Target,
            title: "Data-Driven Strategies",
            description: "Performance-focused campaigns that drive real results."
        },
        {
            icon: Users,
            title: "Qualified Leads",
            description: "We attract high-intent leads that convert into customers."
        },
        {
            icon: TrendingUp,
            title: "Increased Sales",
            description: "Optimized funnels and ads that boost revenue consistently."
        },
        {
            icon: Eye,
            title: "Marketplace Visibility",
            description: "Improve rankings, visibility & conversions across platforms."
        },
        {
            icon: ShieldCheck,
            title: "Brand Presence",
            description: "Build trust, credibility & authority in your industry."
        },
        {
            icon: Crosshair,
            title: "Maximize ROAS",
            description: "Get the best returns from your marketing investment."
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto text-center">
                {/* Subtitle */}
                <p className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
                    WHY CHOOSE US
                </p>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
                    Marketing That Delivers
                </h2>

                {/* Red Accent Line */}
                <div className="w-12 h-1 bg-red-500 mx-auto rounded-full mb-6" />

                {/* Description */}
                <p className="text-stone-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-16">
                    We focus on what matters most – measurable growth. Our strategies are built to
                    increase visibility, generate qualified leads, and maximize sales & ROI.
                </p>

                {/* 6 Feature Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
                    {features.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Container with Soft Shadow */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6 border border-stone-100 group-hover:-translate-y-1 transition-transform duration-300">
                                    <IconComponent className="w-9 h-9 text-red-500 stroke-[1.5]" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug mb-2 px-1">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-stone-500 text-xs leading-relaxed px-2">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}