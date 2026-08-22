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
        { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Walmart_spark_%282025%29.svg" },
        { name: "Flipkart", logo: "data:image/jpeg;base64,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" },
        { name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" },
        { name: "Etsy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLBjabg_pAWBZYmHEk9S2O3wIpT1EPdGGpfRgsdg&usqp=CAE&s" },
        { name: "TikTok Shop", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
        { name: "TEMU", logo: "https://logos-world.net/wp-content/uploads/2024/01/Temu-Emblem.png" },
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