
import React, { useState, useEffect } from "react";
import {
    Calendar,
    FileText,
    ArrowRight,
    Building2,
    TrendingUp,
    Users,
    Target,
    Briefcase,
    Megaphone,
    Share2,
    Globe,
    ShoppingBag,
    BarChart3,
    MousePointerClick,
    Layers,
    Code,
    Sparkles,
    Palette
} from "lucide-react";
import vdmraket from '../../assets/vdmmarket.png';

export default function HomeS() {
    // COUNT-UP ANIMATION STATES
    const [projects, setProjects] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [leads, setLeads] = useState(0);
    const [roasMin, setRoasMin] = useState(0);
    const [roasMax, setRoasMax] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const intervalTime = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setProjects(Math.floor(easeProgress * 100));
            setRevenue(Math.floor(easeProgress * 50));
            setLeads(Math.floor(easeProgress * 800));
            setRoasMin(Math.floor(easeProgress * 3));
            setRoasMax(Math.floor(easeProgress * 12));

            if (step >= steps) {
                clearInterval(timer);
                setProjects(100);
                setRevenue(50);
                setLeads(800);
                setRoasMin(3);
                setRoasMax(12);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    // MARQUEE BRAND ITEMS
    const brands = [
        "REAL ESTATE MARKETING",
        "AMAZON",
        "WALMART",
        "FLIPKART",
        "PERFORMANCE MARKETING",
        "LEAD GENERATION",
        "TIKTOK SHOP",
        "QUICK COMMERCE"
    ];

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden relative bg-[#030712]">

            {/* ANIMATION STYLES */}
            <style>{`
                @keyframes oceanMovement {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .real-animated-bg {
                    background: linear-gradient(-45deg, #020617, #001f3f, #004d80, #0077b6, #002b4d, #020617);
                    background-size: 400% 400%;
                    animation: oceanMovement 10s ease infinite;
                }

                @keyframes emergeFromInside {
                    0% {
                        opacity: 0;
                        transform: scale(0.6) translateY(20px);
                    }
                    60% {
                        transform: scale(1.03) translateY(-5px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .card-emerge-animation {
                    animation: emergeFromInside 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* BRAND MARQUEE ANIMATION */
                @keyframes marqueeslide {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marqueeslide 22s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* MAIN BACKGROUND LAYER */}
            <div className="absolute inset-0 real-animated-bg z-0" />

            {/* GLOW OVERLAY */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00b4d8]/40 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />

            {/* HERO SECTION */}
            <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto min-h-[600px] flex items-center z-10">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* BRAND MARQUEE BADGE */}
                        <div className="inline-flex mt-0 items-center max-w-full sm:max-w-md overflow-hidden bg-[#0a1622]/80 backdrop-blur-md border border-amber-500/30 rounded-full px-0 py-5.5 shadow-lg relative">
                            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a1622] to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0a1622] to-transparent z-10 pointer-events-none" />

                            <div className="animate-marquee flex items-center gap-6">
                                {[...brands, ...brands].map((brand, i) => (
                                    <span key={i} className="text-xs font-bold tracking-widest text-amber-300 uppercase whitespace-nowrap flex items-center gap-2">
                                        <span className="text-amber-500 text-[10px]">✦</span> {brand}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* HERO HEADING */}
                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
                                Performance Marketing <br />
                                That Builds Brands.
                            </h1>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f97316] tracking-tight drop-shadow-sm">
                                Leads. Sales. Growth.
                            </p>
                        </div>

                        <p className="text-stone-200 text-base sm:text-lg max-w-xl leading-relaxed">
                            We help Real Estate brands and Marketplace sellers grow with data-driven strategies that deliver measurable results.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="#strategy-call"
                                className="flex items-center space-x-2 bg-[#d94834] hover:bg-[#c03c29] text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <Calendar size={18} />
                                <span>Get a Free Strategy Call</span>
                            </a>

                            <a
                                href="#marketing-audit"
                                className="flex items-center space-x-2 bg-transparent border border-stone-400 hover:border-white text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-300"
                            >
                                <FileText size={18} />
                                <span>Request a Marketing Audit</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Key Stats Card with Animated Numbers */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="card-emerge-animation bg-[#030712]/80 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6 transform-gpu">

                            {/* Stat 1 */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3.5 rounded-2xl bg-[#d94834]/20 text-[#f97316]">
                                    <Briefcase size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tabular-nums">{projects}+</h3>
                                    <p className="text-xs text-stone-300 font-medium">Projects Delivered</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3.5 rounded-2xl bg-[#d94834]/20 text-[#f97316]">
                                    <TrendingUp size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tabular-nums">₹{revenue}Cr+</h3>
                                    <p className="text-xs text-stone-300 font-medium">Revenue Generated</p>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3.5 rounded-2xl bg-[#d94834]/20 text-[#f97316]">
                                    <Users size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tabular-nums">{leads}K+</h3>
                                    <p className="text-xs text-stone-300 font-medium">Leads Generated</p>
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3.5 rounded-2xl bg-[#d94834]/20 text-[#f97316]">
                                    <Target size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tabular-nums">ROAS {roasMin}X - {roasMax}X</h3>
                                    <p className="text-xs text-stone-300 font-medium">Across Campaigns</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* CARD 1 */}
                    <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden relative group">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                                <div className="sm:col-span-7 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-3 rounded-2xl bg-red-50 text-[#d94834]">
                                            <Building2 size={32} />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                                            Real Estate <br />
                                            Marketing
                                        </h2>
                                    </div>

                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        End-to-end marketing solutions to generate high-quality leads and build strong brand presence for real estate businesses.
                                    </p>

                                    <a
                                        href="/services/real-estate"
                                        className="inline-flex items-center space-x-2 bg-[#d94834] hover:bg-[#c03c29] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
                                    >
                                        <span>Explore Real Estate Services</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="sm:col-span-5 h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
                                        alt="Real Estate Apartments"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-5 gap-2 text-center">
                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Users size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Lead Generation</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Megaphone size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Business Promotion</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Building2 size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Brand Presence</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Share2 size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Social Media Marketing</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Globe size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Website & Landing Pages</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden relative group">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                                <div className="sm:col-span-7 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-3 rounded-2xl bg-blue-50 text-[#0f172a]">
                                            <ShoppingBag size={32} />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                                            Marketplace <br />
                                            Marketing
                                        </h2>
                                    </div>

                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        Scale your marketplace business with our expertise across leading global and quick commerce platforms.
                                    </p>

                                    <a
                                        href="/services/marketplace"
                                        className="inline-flex items-center space-x-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
                                    >
                                        <span>Explore Marketplace Services</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="sm:col-span-5 h-48 w-full sm:h-full min-h-[190px] rounded-2xl flex items-center justify-center p-2 relative bg-stone-50">
                                    <img
                                        src={vdmraket}
                                        alt="Marketplace Shopping App"
                                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-4 gap-4 items-center justify-items-center opacity-80">
                                <span className="font-extrabold text-stone-800 text-lg tracking-tight">amazon</span>
                                <span className="font-bold text-blue-600 text-lg tracking-tight">Walmart<span className="text-yellow-500">*</span></span>
                                <span className="font-bold text-blue-500 text-lg italic">Flipkart</span>
                                <span className="font-bold text-orange-500 text-lg tracking-tight">ebay</span>

                                <span className="font-semibold text-orange-600 text-base">Etsy</span>
                                <span className="font-bold text-stone-900 text-sm flex items-center gap-1">♪ TikTok Shop</span>
                                <span className="font-extrabold text-orange-500 text-xs tracking-tighter">TEMU</span>
                                <span className="font-bold text-emerald-600 text-xs tracking-tight">⚡ Quick Commerce</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: Performance Marketing & Paid Ads */}
                    <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden relative group">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                                <div className="sm:col-span-7 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
                                            <BarChart3 size={32} />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                                            Paid Ads & <br />
                                            Performance
                                        </h2>
                                    </div>

                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        Maximize your ROI with targeted ad campaigns on Meta, Google, and TikTok that turn clicks into loyal clients.
                                    </p>

                                    <a
                                        href="/services/paid-ads"
                                        className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
                                    >
                                        <span>Explore Performance Ads</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="sm:col-span-5 h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                                        alt="Performance Marketing Analytics"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-5 gap-2 text-center">
                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-amber-50 text-amber-600">
                                        <Target size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Meta & Google Ads</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-amber-50 text-amber-600">
                                        <MousePointerClick size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Retargeting</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-amber-50 text-amber-600">
                                        <TrendingUp size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">ROAS Scaling</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-amber-50 text-amber-600">
                                        <BarChart3 size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">A/B Testing</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-amber-50 text-amber-600">
                                        <Layers size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Funnel Growth</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4: Brand Building & Web Development */}
                    <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden relative group">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                                <div className="sm:col-span-7 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                                            <Code size={32} />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                                            Brand & Web <br />
                                            Development
                                        </h2>
                                    </div>

                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        Crafting high-converting modern web applications, custom UI/UX, and complete visual identities for growing businesses.
                                    </p>

                                    <a
                                        href="/services/web-development"
                                        className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
                                    >
                                        <span>Explore Web & Branding</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="sm:col-span-5 h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
                                        alt="Web Design and Development"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-5 gap-2 text-center">
                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-600">
                                        <Code size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Custom Apps</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-600">
                                        <Palette size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">UI/UX Design</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-600">
                                        <Globe size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">SEO Strategy</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-600">
                                        <Sparkles size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">3D Graphics</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-600">
                                        <Briefcase size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Brand Identity</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}