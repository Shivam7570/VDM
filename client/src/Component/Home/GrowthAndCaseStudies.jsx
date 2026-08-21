import React from "react";
import {
    Building2,
    Home,
    ShoppingBag,
    Smartphone,
    CheckCircle2,
    Calendar
} from "lucide-react";

export default function GrowthAndCaseStudies() {
    const caseStudiesData = [
        {
            category: "REAL ESTATE CLIENT",
            title: "Luxury Apartments",
            accentColor: "border-blue-500",
            checkColor: "text-blue-400",
            iconBg: "bg-blue-600",
            Icon: Building2,
            bgImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
            overlay: "from-slate-900/90 via-slate-950/80 to-slate-950/95",
            timeline: "Timeline: 6 Months",
            points: [
                "Brand awareness grew strong across target locations.",
                "High-quality leads generated consistently.",
                "Strong engagement with serious buyers."
            ]
        },
        {
            category: "AMAZON SELLER",
            title: "Home & Kitchen",
            accentColor: "border-orange-500",
            checkColor: "text-orange-400",
            iconBg: "bg-orange-500",
            Icon: Home,
            bgImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
            overlay: "from-stone-900/85 via-stone-950/80 to-stone-950/95",
            timeline: "Timeline: 3 Months",
            points: [
                "Product visibility improved significantly.",
                "More orders with better conversion.",
                "Stronger brand trust built over time."
            ]
        },
        {
            category: "E-COMMERCE BRAND",
            title: "Fashion Accessories",
            accentColor: "border-red-500",
            checkColor: "text-red-400",
            iconBg: "bg-red-600",
            Icon: ShoppingBag,
            bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
            overlay: "from-neutral-900/85 via-neutral-950/80 to-neutral-950/95",
            timeline: "Timeline: 4 Months",
            points: [
                "Organic traffic increased steadily.",
                "Better product reach and discoverability.",
                "Consistent growth in online sales."
            ]
        },
        {
            category: "MARKETPLACE SELLER",
            title: "Electronics",
            accentColor: "border-amber-500",
            checkColor: "text-amber-400",
            iconBg: "bg-amber-600",
            Icon: Smartphone,
            bgImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
            overlay: "from-amber-950/70 via-stone-950/80 to-stone-950/95",
            timeline: "Timeline: 3 Months",
            points: [
                "Better visibility across marketplaces.",
                "Increased customer engagement.",
                "Improved sales and repeat customers."
            ]
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto font-sans">
            {/* Header Section */}
            <div className="text-center mb-12 space-y-2">
                <span className="text-xs font-extrabold tracking-widest text-red-500 uppercase">
                    CASE STUDIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    Real Results. Real Impact.
                </h2>
                <div className="w-10 h-1 bg-red-500 mx-auto rounded-full mt-3" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudiesData.map((item, index) => {
                    const CardIcon = item.Icon;
                    return (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden shadow-xl text-white flex flex-col justify-between min-h-[460px] group transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Background Image */}
                            <img
                                src={item.bgImage}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${item.overlay}`} />

                            {/* Card Content */}
                            <div className="relative z-10 p-6 space-y-6">
                                {/* Category Icon */}
                                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shadow-lg text-white`}>
                                    <CardIcon size={22} />
                                </div>

                                {/* Title & Subtitle */}
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-stone-300">
                                        {item.category}
                                    </p>
                                    <h3 className={`text-xl font-extrabold text-white pb-2 border-b-2 ${item.accentColor} inline-block`}>
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Checklist Points */}
                                <ul className="space-y-3.5 pt-2">
                                    {item.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start space-x-2.5 text-xs text-stone-200 leading-relaxed">
                                            <CheckCircle2 size={15} className={`${item.checkColor} shrink-0 mt-0.5`} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Footer Timeline */}
                            <div className="relative z-10 p-6 pt-0">
                                <div className="pt-4 border-t border-stone-700/60 flex items-center space-x-2 text-xs font-medium text-stone-300">
                                    <Calendar size={14} className="text-stone-300" />
                                    <span>{item.timeline}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}