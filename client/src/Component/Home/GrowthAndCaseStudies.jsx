import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Building2,
    ShoppingBag,
    Smartphone,
    Gem,
    Building,
    Gamepad2,
    Cpu,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

// Olive & Chain Logo Component
const OliveAndChainLogo = () => (
    <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 w-fit mb-3">
        <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15 L68 32 L50 48 L32 32 Z" fill="#FA8072" />
            <path d="M22 82 C22 55, 45 50, 48 50 C48 55, 48 82, 22 82 Z" fill="#708238" />
            <path d="M78 82 C78 55, 55 50, 52 50 C52 55, 52 82, 78 82 Z" fill="#4B5320" />
        </svg>
        <span className="text-sm font-light tracking-[0.2em] text-[#708238] uppercase">
            OLIVE <span className="text-[#FA8072] font-semibold">&</span> CHAIN
        </span>
    </div>
);

// SHS / Shannon Hotel Supplies Logo Component
const SHSLogo = () => (
    <div className="flex items-center space-x-2.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 w-fit mb-3 shadow-md">
        <div className="flex items-center justify-center relative font-serif text-lg font-black leading-none text-[#8B1A1A] tracking-tight pr-1">
            <span className="tracking-tighter">SHS</span>
        </div>
        <div className="flex flex-col border-l border-slate-300 pl-2 text-left leading-tight">
            <span className="text-[11px] font-serif font-bold tracking-wider text-[#003B73] uppercase">
                SHANNON HOTEL
            </span>
            <span className="text-[8px] font-serif font-medium tracking-[0.25em] text-[#003B73] uppercase">
                SUPPLIES LTD
            </span>
        </div>
    </div>
);

// Golden Grande Official Logo Component
const GoldenGrandeLogo = () => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="flex items-center bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-purple-500/30 w-fit mb-3 shadow-md">
            {!imgError ? (
                <img
                    src="https://goldengrande.com/images/golden_grande_logo.png"
                    alt="Golden Grande Logo"
                    className="h-8 w-auto object-contain"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="flex items-center space-x-2">
                    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 50 C20 30, 45 30, 50 50 C55 70, 80 70, 80 50 C80 30, 55 30, 50 50 C45 70, 20 70, 20 50 Z" stroke="#D9386E" strokeWidth="12" fill="none" />
                    </svg>
                    <span className="text-xs font-bold tracking-[0.15em] text-white uppercase font-sans">
                        GOLDEN GRANDÈ
                    </span>
                </div>
            )}
        </div>
    );
};

// Pompy & Potlu Official Logo Component
const PompyAndPotluLogo = () => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="flex items-center bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-pink-300/40 w-fit mb-3 shadow-md">
            {!imgError ? (
                <img
                    src="https://pompyandpotlu.com/wp-content/uploads/2024/07/logo.png"
                    alt="Pompy & Potlu Logo"
                    className="h-8 w-auto object-contain"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center font-black text-white text-xs">P</div>
                    <span className="text-xs font-black tracking-wider text-pink-600 uppercase">
                        POMPY &amp; POTLU
                    </span>
                </div>
            )}
        </div>
    );
};

// LUNAP Official Logo Component
const LunapLogo = () => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="flex items-center bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-lg border border-cyan-500/30 w-fit mb-3 shadow-md">
            {!imgError ? (
                <img
                    src="https://lunap.in/wp-content/uploads/2023/05/lunap-logo.png"
                    alt="Lunap Logo"
                    className="h-7 w-auto object-contain brightness-125"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-black tracking-[0.25em] text-cyan-400 uppercase font-sans">
                        LUNAP
                    </span>
                </div>
            )}
        </div>
    );
};

export default function GrowthAndCaseStudies() {
    const caseStudiesData = [
        {
            isOliveAndChain: true,
            category: "FINE JEWELRY DTC",
            title: "Olive & Chain",
            subtitle: "14k/18k Solid Gold & Gemstones",
            accentColor: "border-amber-400",
            checkColor: "text-amber-300",
            iconBg: "bg-amber-600/80 backdrop-blur-md",
            Icon: Gem,
            bgImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
            overlay: "from-stone-950/90 via-stone-900/80 to-amber-950/90",
            points: [
                "Achieved 4.2x ROAS on direct-to-consumer ad campaigns.",
                "Increased average order value (AOV) for solid gold pieces.",
                "Boosted organic search traffic for luxury gift keywords."
            ]
        },
        {
            isSHS: true,
            category: "HOSPITALITY SUPPLIES",
            title: "SHS ONLINE",
            subtitle: "B2B Hotel & Hospitality E-Commerce",
            accentColor: "border-blue-500",
            checkColor: "text-blue-400",
            iconBg: "bg-blue-600/80 backdrop-blur-md",
            Icon: Building2,
            bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
            overlay: "from-slate-950/90 via-slate-900/80 to-slate-950/95",
            points: [
                "Streamlined digital ordering process for corporate buyers.",
                "High-quality commercial lead generation scaled by 250%.",
                "Strong engagement and retention across hotel partners."
            ]
        },
        {
            isGoldenGrande: true,
            category: "COMMERCIAL REAL ESTATE",
            title: "Golden Grande",
            subtitle: "IT/ITES Offices & High-Street Retail Hub",
            accentColor: "border-purple-500",
            checkColor: "text-purple-400",
            iconBg: "bg-purple-600/80 backdrop-blur-md",
            Icon: Building,
            bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            overlay: "from-stone-950/90 via-purple-950/40 to-stone-950/95",
            points: [
                "Generated high-intent buyer inquiries for retail & office spaces.",
                "Highlighted strategic location near Noida Intl Airport & Metro.",
                "Drove strong investor engagement for luxury F&B & hotel spaces."
            ]
        },
        {
            isPompyAndPotlu: true,
            category: "KIDS ENTERTAINMENT & PLAY",
            title: "Pompy & Potlu",
            subtitle: "Indoor Soft Play & AI Gaming Zone",
            accentColor: "border-pink-500",
            checkColor: "text-pink-400",
            iconBg: "bg-pink-600/80 backdrop-blur-md",
            Icon: Gamepad2,
            bgImage: "https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?q=80&w=800&auto=format&fit=crop",
            overlay: "from-stone-950/90 via-pink-950/40 to-stone-950/95",
            points: [
                "Scaled birthday party & weekend booking conversions by 180%.",
                "Promoted VR cricket & trampoline attractions across social channels.",
                "Boosted local footfall for the POMPOT Brews & Bites cafe area."
            ]
        },
        {
            isLunap: true,
            category: "INDUSTRIAL AUTOMATION",
            title: "LUNAP",
            subtitle: "Pneumatics, Robotics & Smart Engineering",
            accentColor: "border-cyan-500",
            checkColor: "text-cyan-400",
            iconBg: "bg-cyan-600/80 backdrop-blur-md",
            Icon: Cpu,
            bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
            overlay: "from-slate-950/90 via-cyan-950/40 to-slate-950/95",
            points: [
                "Positioned brand as a top industrial automation solution provider.",
                "Increased qualified B2B enterprise leads for robotics & mechatronics.",
                "Expanded multi-channel online outreach across industrial buyer networks."
            ]
        },
        {
            category: "E-COMMERCE BRAND",
            title: "Fashion Accessories",
            subtitle: "Multi-Channel Growth Strategy",
            accentColor: "border-rose-500",
            checkColor: "text-rose-400",
            iconBg: "bg-rose-600/80 backdrop-blur-md",
            Icon: ShoppingBag,
            bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
            overlay: "from-neutral-950/90 via-neutral-900/80 to-neutral-950/95",
            points: [
                "Organic search traffic increased steadily.",
                "Better product reach and discoverability.",
                "Consistent month-over-month sales growth."
            ]
        },
        {
            category: "MARKETPLACE SELLER",
            title: "Electronics",
            subtitle: "Global Scale & PPC Automation",
            accentColor: "border-emerald-500",
            checkColor: "text-emerald-400",
            iconBg: "bg-emerald-600/80 backdrop-blur-md",
            Icon: Smartphone,
            bgImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
            overlay: "from-slate-950/90 via-stone-900/80 to-stone-950/95",
            points: [
                "Enhanced visibility across global marketplaces.",
                "Increased customer engagement and CTR.",
                "Higher repeat purchase frequency."
            ]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % caseStudiesData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length);
    };

    const getCardStyle = (index) => {
        const total = caseStudiesData.length;
        let diff = index - activeIndex;

        if (diff < -Math.floor(total / 2)) diff += total;
        if (diff > Math.floor(total / 2)) diff -= total;

        if (diff === 0) {
            return {
                x: "0%",
                scale: 1,
                rotateY: 0,
                zIndex: 30,
                opacity: 1,
                filter: "brightness(100%) blur(0px)"
            };
        }
        if (diff === 1) {
            return {
                x: "70%",
                scale: 0.78,
                rotateY: -35,
                zIndex: 10,
                opacity: 0.5,
                filter: "brightness(50%) blur(1px)"
            };
        }
        if (diff === -1) {
            return {
                x: "-70%",
                scale: 0.78,
                rotateY: 35,
                zIndex: 10,
                opacity: 0.5,
                filter: "brightness(50%) blur(1px)"
            };
        }
        if (diff > 1) {
            return {
                x: "110%",
                scale: 0.6,
                rotateY: -45,
                zIndex: 0,
                opacity: 0,
                filter: "brightness(20%) blur(4px)"
            };
        }
        return {
            x: "-110%",
            scale: 0.6,
            rotateY: 45,
            zIndex: 0,
            opacity: 0,
            filter: "brightness(20%) blur(4px)"
        };
    };

    return (
        <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto font-sans overflow-hidden text-white">
            <div className="text-center mb-14 space-y-2">
                <span className="text-xs font-extrabold tracking-widest text-red-500 uppercase">
                    CASE STUDIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Real Results. Real Impact.
                </h2>
                <div className="w-10 h-1 bg-red-500 mx-auto rounded-full mt-3" />
            </div>

            <div className="relative w-full max-w-5xl mx-auto h-[440px] flex items-center justify-center [perspective:1200px]">
                {caseStudiesData.map((item, index) => {
                    const CardIcon = item.Icon;
                    const style = getCardStyle(index);

                    return (
                        <motion.div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            initial={false}
                            animate={{
                                x: style.x,
                                scale: style.scale,
                                rotateY: style.rotateY,
                                zIndex: style.zIndex,
                                opacity: style.opacity,
                                filter: style.filter
                            }}
                            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute w-[340px] sm:w-[420px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 cursor-pointer flex select-none bg-stone-900/90 backdrop-blur-lg"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <img
                                src={item.bgImage}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />

                            <div className={`absolute inset-0 bg-gradient-to-b ${item.overlay}`} />

                            {/* Side Bar */}
                            <div className="relative z-20 w-14 border-r border-white/10 bg-black/50 backdrop-blur-md flex flex-col items-center justify-between py-6 shrink-0">
                                <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center text-white border border-white/20 shadow-md`}>
                                    <CardIcon size={16} />
                                </div>

                                <div className="flex-1 flex items-center justify-center py-4">
                                    <span
                                        className="text-[10px] font-bold tracking-[0.2em] text-stone-300 uppercase whitespace-nowrap"
                                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                    >
                                        {item.category}
                                    </span>
                                </div>

                                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            </div>

                            {/* Main Content Area */}
                            <div className="relative z-10 flex-1 p-6 flex flex-col justify-between">
                                <div className="space-y-1">
                                    {/* Brand Logos */}
                                    {item.isOliveAndChain && <OliveAndChainLogo />}
                                    {item.isSHS && <SHSLogo />}
                                    {item.isGoldenGrande && <GoldenGrandeLogo />}
                                    {item.isPompyAndPotlu && <PompyAndPotluLogo />}
                                    {item.isLunap && <LunapLogo />}

                                    <h3 className={`text-2xl font-black tracking-tight text-white pb-1.5 border-b-2 ${item.accentColor} inline-block`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-[11px] text-stone-300 font-medium pt-1">
                                        {item.subtitle}
                                    </p>
                                </div>

                                <ul className="space-y-2.5 pt-2">
                                    {item.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start space-x-2.5 text-xs text-stone-200 leading-snug">
                                            <CheckCircle2 size={15} className={`${item.checkColor} shrink-0 mt-0.5`} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-stone-300">
                                    <span>Performance Overview</span>

                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                <button
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-6 z-40 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={22} />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-6 z-40 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95"
                    aria-label="Next Slide"
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            <div className="flex justify-center items-center space-x-2 mt-8">
                {caseStudiesData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-red-500" : "w-2 bg-stone-700 hover:bg-stone-500"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}