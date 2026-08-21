import React from "react";
import {
    TrendingUp,
    Users,
    Target,
    Lightbulb,
    ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: TrendingUp,
            title: "Measurable Results",
            description:
                "Every strategy is built for measurable and trackable growth.",
        },
        {
            icon: Users,
            title: "Industry Expertise",
            description:
                "Deep expertise in real estate marketing and marketplace growth.",
        },
        {
            icon: Target,
            title: "Performance First",
            description:
                "We focus on ROI, leads, sales and long-term business impact.",
        },
        {
            icon: Lightbulb,
            title: "End-to-End Support",
            description:
                "From strategy to execution and optimization, we handle it all.",
        },
        {
            icon: ShieldCheck,
            title: "Transparent & Honest",
            description:
                "Clear reporting, open communication and complete transparency.",
        },
    ];

    const platforms = [
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Walmart_Header_Logo.svg" },
        { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.svg" },
        { name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" },
        { name: "Etsy", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo.svg" },
        { name: "TikTok Shop", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
        { name: "TEMU", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Temu_logo.svg" },
        { name: "Quick Commerce", text: "Quick", subText: "Commerce", isCustomText: true },
    ];

    return (
        <section className="bg-[#faf9f6] py-16 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* TOP SECTION: What Sets Us Apart */}
                <div>
                    <div className="text-center mb-10 space-y-2">
                        <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
                            WHY CHOOSE VDIGIMARKS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1222] tracking-tight">
                            What Sets Us Apart
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="p-2 text-[#101828]">
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-base font-bold text-[#0a1222]">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-stone-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* BOTTOM SECTION: Marketplaces & Channels We Work On */}
                <div>
                    <div className="text-center mb-8 space-y-2">
                        <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
                            PLATFORMS WE WORK WITH
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1222] tracking-tight">
                            Marketplaces & Channels We Work On
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                        {platforms.map((platform, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl border border-stone-200/70 p-4 h-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                {platform.isCustomText ? (
                                    <div className="text-center leading-tight">
                                        <span className="text-emerald-600 font-extrabold text-xs block">
                                            {platform.text}
                                        </span>
                                        <span className="text-emerald-500 text-[9px] font-medium block uppercase tracking-wider">
                                            {platform.subText}
                                        </span>
                                    </div>
                                ) : (
                                    <img
                                        src={platform.logo}
                                        alt={platform.name}
                                        className="max-h-6 max-w-[80%] object-contain"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}