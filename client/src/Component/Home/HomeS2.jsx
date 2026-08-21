import React, { useState } from 'react';
import {
    Building2,
    Code2,
    Search,
    ArrowUpRight,
    Sparkles,
    TrendingUp,
    ShieldCheck,
    Zap,
    CheckCircle2
} from 'lucide-react';

export default function HomeS2() {
    const [isHovered, setIsHovered] = useState(false);

    const services = [
        {
            title: "Real Estate Growth",
            desc: "Property listings & lead generation strategies",
            icon: <Building2 className="w-4 h-4 text-amber-400" />,
            tag: "Property Tech"
        },
        {
            title: "Developer Work",
            desc: "Custom Web3, React & 3D Web Solutions",
            icon: <Code2 className="w-4 h-4 text-amber-400" />,
            tag: "Full-Stack"
        },
        {
            title: "Marketplace SEO",
            desc: "Search engine ranking & organic traffic scaling",
            icon: <Search className="w-4 h-4 text-amber-400" />,
            tag: "Rankings"
        }
    ];

    return (
        <section className="relative bg-[#0c0d10] text-white flex items-center justify-center px-6 py-8 md:py-12 overflow-visible">

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

                {/* LEFT SECTION: HEADLINE & BRANDING */}
                <div className="lg:col-span-4 space-y-4 text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                        <Sparkles className="w-3.5 h-3.5" /> Next-Gen Agency
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                        Scale Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                            Digital Footprint
                        </span>
                    </h1>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        Data-driven marketing and custom web architecture built for brands aiming for market dominance.
                    </p>

                    {/* Trust Highlights */}
                    <div className="space-y-1.5 pt-1">
                        <div className="flex items-center gap-2 text-xs text-stone-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>100% Performance-Focused Execution</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>Real-Time ROI & Conversion Analytics</span>
                        </div>
                    </div>
                </div>

                {/* CENTER SECTION: FIXED CONTAINER WITH HOVER OVERLAY CARD */}
                <div className="lg:col-span-4 flex justify-center items-center h-[260px] relative z-30">
                    <div
                        className="relative flex justify-center items-center w-full"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Glow Behind Button on Hover */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-2xl blur-xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-30 scale-105' : 'opacity-0'
                                }`}
                        />

                        {/* Main Expanding Card / Button Container */}
                        <div
                            className={`border border-amber-500/30 bg-[#120e05]/95 backdrop-blur-xl transition-all duration-300 ease-out cursor-pointer ${isHovered
                                ? 'absolute z-20 w-[310px] sm:w-[350px] h-[370px] rounded-2xl p-4 shadow-2xl shadow-amber-500/20'
                                : 'relative z-20 w-[210px] h-[50px] rounded-full p-2 shadow-lg shadow-amber-500/10'
                                }`}
                        >
                            {/* Default Collapsed Button View */}
                            {!isHovered && (
                                <div className="flex items-center justify-between w-full h-full px-2">
                                    <span className="flex items-center gap-2 text-amber-300 font-bold text-xs tracking-wide">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                                        Explore Services
                                    </span>
                                    <div className="bg-amber-500 text-black p-1 rounded-full">
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            )}

                            {/* Expanded Card Content View */}
                            {isHovered && (
                                <div className="flex flex-col justify-between h-full w-full">
                                    {/* Header */}
                                    <div className="flex justify-between items-center border-b border-amber-500/20 pb-2">
                                        <div>
                                            <h3 className="text-sm font-bold text-amber-200">Our Expertise</h3>
                                            <p className="text-[10px] text-amber-100/60">Select options to explore solutions</p>
                                        </div>
                                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                            Interactive
                                        </span>
                                    </div>

                                    {/* Service Items List */}
                                    <div className="space-y-1.5 my-1.5">
                                        {services.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="group flex items-center justify-between p-2 rounded-lg bg-amber-500/5 hover:bg-amber-500/15 border border-amber-500/10 hover:border-amber-400/40 transition-all duration-200"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1 rounded-md bg-black/50 border border-amber-500/20 shrink-0">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-[10px] text-gray-400 leading-tight">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <span className="text-[9px] text-amber-400/80 bg-amber-400/10 px-1.5 py-0.5 rounded font-mono shrink-0">
                                                    {item.tag}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Call to Action Footer Button */}
                                    <button className="w-full py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs shadow-md hover:from-amber-300 hover:to-amber-500 transition-all flex items-center justify-center gap-1">
                                        Book Strategy Session <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION: PERFORMANCE & METRICS STATS */}
                <div className="lg:col-span-4 space-y-3 relative z-10">

                    {/* Stat Card 1 */}
                    <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15 flex items-center gap-3 backdrop-blur-sm">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-white">12x ROAS</p>
                            <p className="text-[11px] text-gray-400">Average Performance Scale</p>
                        </div>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15 flex items-center gap-3 backdrop-blur-sm">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                            <Zap className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-white">99.9%</p>
                            <p className="text-[11px] text-gray-400">Uptime & Campaign Delivery</p>
                        </div>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15 flex items-center gap-3 backdrop-blur-sm">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                            <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-white">Verified Results</p>
                            <p className="text-[11px] text-gray-400">Trusted by Top Tech & Realty Brands</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}