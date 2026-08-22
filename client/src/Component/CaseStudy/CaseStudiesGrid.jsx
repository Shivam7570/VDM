import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

// --- MARKETING CASE STUDIES ---
const marketingFilters = [
    "All Case Studies",
    "Real Estate Marketing",
    "Marketplace Marketing",
    "Lead Generation",
    "E-commerce",
    "Performance Marketing",
];

const marketingCaseStudies = [
    {
        tag: "Real Estate Marketing",
        categories: ["Real Estate Marketing", "Lead Generation", "Performance Marketing"],
        image: "https://media.licdn.com/dms/image/v2/D5612AQFId65UiFxOlQ/article-cover_image-shrink_720_1280/B56ZXGrxB7HEAI-/0/1742795118894?e=2147483647&v=beta&t=NBeoOTTZvUt0Jjlu7jFP7MU9ncDpsSKk1s_8Lw-85Xs",
        title: "Luxury Residential Project – Lead Generation Success",
        subtitle: "Residential • Delhi NCR",
        description: "We executed a full-funnel digital marketing strategy for a premium residential project, combining Meta Ads, Google Ads, landing pages, and CRM automation to generate high-intent leads.",
        stats: [
            { value: "1,284+", label: "Qualified Leads", trend: "↑ 152%", trendColor: "text-emerald-400" },
            { value: "-37%", label: "Cost Per Lead Reduction", trend: "↓ Reduction", trendColor: "text-emerald-400" },
            { value: "3.8X", label: "ROAS Achieved", trend: "" },
            { value: "92%", label: "Lead Quality Score", trend: "Improved", trendColor: "text-emerald-400" },
        ],
        chips: ["Meta Ads", "Google Ads", "Landing Pages", "CRM Automation", "Lead Nurturing"],
        accent: "bg-amber-400",
    },
    {
        tag: "Marketplace Marketing",
        categories: ["Marketplace Marketing", "E-commerce", "Performance Marketing"],
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop",
        title: "Amazon Marketing – Revenue & Visibility Growth",
        subtitle: "E-commerce • Amazon",
        description: "Optimized listings, launched high-converting ad campaigns, and improved organic visibility to help the brand scale revenue consistently month after month.",
        stats: [
            { value: "45%", label: "Sales Growth", trend: "in 90 Days" },
            { value: "2.7X", label: "ROAS Improvement", trend: "in 90 Days" },
            { value: "68%", label: "Organic Traffic", trend: "Increase", trendColor: "text-orange-400" },
            { value: "Top 3", label: "Category Ranking", trend: "Achieved", trendColor: "text-orange-400" },
        ],
        chips: ["Listing Optimization", "Sponsored Ads", "Keyword Research", "A+ Content", "Brand Store"],
        accent: "bg-orange-500",
    },
    {
        tag: "Multi-Marketplace Growth",
        categories: ["Marketplace Marketing", "E-commerce"],
        image: "https://images.unsplash.com/photo-1601599963565-b7f49deb31c1?q=80&w=800&auto=format&fit=crop",
        title: "Multi-Marketplace Expansion – Scalable Growth",
        subtitle: "E-commerce • Amazon, Flipkart, Walmart, Etsy",
        description: "Helped the brand expand across 4+ marketplaces with optimized catalogs, advertising, and account management to drive consistent sales growth.",
        stats: [
            { value: "3.2X", label: "Total Revenue", trend: "Growth" },
            { value: "4+", label: "Marketplaces", trend: "Scaled" },
            { value: "-28%", label: "ACOS Reduction", trend: "Across Platforms" },
            { value: "55%", label: "Repeat Purchase", trend: "Increase" },
        ],
        chips: ["Marketplace Setup", "Catalog Optimization", "Ads Management", "Account Health", "Analytics"],
        accent: "bg-violet-500",
    },
];

// --- IT COMPANY CASE STUDIES ---
const itFilters = [
    "All Case Studies",
    "Software Development",
    "Cloud Solutions",
    "Enterprise SaaS",
    "Cyber Security",
    "AI & Machine Learning",
];

const itCaseStudies = [
    {
        tag: "Enterprise SaaS",
        categories: ["Enterprise SaaS", "Software Development", "Cloud Solutions"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        title: "Cloud-Native SaaS Platform Modernization",
        subtitle: "Fintech • Microservices Architecture",
        description: "Engineered a highly scalable multi-tenant SaaS architecture using React, Node.js, and AWS microservices, reducing server latency and boosting user concurrency.",
        stats: [
            { value: "99.99%", label: "Uptime SLA", trend: "↑ High Reliability", trendColor: "text-cyan-400" },
            { value: "-45%", label: "API Latency", trend: "Optimized", trendColor: "text-slate-400" },
            { value: "3.5M+", label: "Active Users", trend: "Scalable", trendColor: "text-cyan-400" },
            { value: "60%", label: "Deployment Speed", trend: "CI/CD Automated", trendColor: "text-cyan-400" },
        ],
        chips: ["React", "Node.js", "AWS Cloud", "Docker", "Kubernetes"],
        accent: "bg-cyan-400",
    },
    {
        tag: "Cyber Security",
        categories: ["Cyber Security", "Software Development"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        title: "Enterprise Cyber Security & Threat Mitigation",
        subtitle: "Healthcare • Zero Trust Architecture",
        description: "Implemented a comprehensive Zero Trust security framework, real-time threat detection, and end-to-end encryption to secure sensitive patient healthcare databases.",
        stats: [
            { value: "100%", label: "Threat Detection", trend: "Real-time Alerts", trendColor: "text-emerald-400" },
            { value: "0", label: "Security Breaches", trend: "Fully Secured", trendColor: "text-emerald-400" },
            { value: "ISO", label: "Compliance Audit", trend: "Passed", trendColor: "text-emerald-400" },
            { value: "-70%", label: "Response Time", trend: "Automated", trendColor: "text-emerald-400" },
        ],
        chips: ["Zero Trust", "SOC 2", "Encryption", "Penetration Testing", "Cloud Security"],
        accent: "bg-emerald-400",
    },
    {
        tag: "AI & Machine Learning",
        categories: ["AI & Machine Learning", "Software Development"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        title: "AI-Powered Predictive Analytics Engine",
        subtitle: "E-commerce Retail • Big Data Pipeline",
        description: "Built custom machine learning models to forecast customer buying patterns, automated inventory recommendations, and maximized supply chain efficiency.",
        stats: [
            { value: "4.2X", label: "ROI Generated", trend: "In 6 Months", trendColor: "text-amber-400" },
            { value: "89%", label: "Prediction Accuracy", trend: "ML Models", trendColor: "text-slate-400" },
            { value: "-35%", label: "Operational Costs", trend: "Cost Saving", trendColor: "text-slate-400" },
            { value: "2.5M", label: "Data Points", trend: "Daily", trendColor: "text-amber-400" },
        ],
        chips: ["Python", "TensorFlow", "Big Data", "Machine Learning"],
        accent: "bg-amber-400",
    },
];

function StatBlock({ value, label, trend, trendColor }) {
    return (
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-2.5">
            <div className="text-lg sm:text-xl font-bold text-white leading-tight">{value}</div>
            <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">{label}</div>
            {trend ? (
                <div className={`text-[11px] mt-1 font-medium ${trendColor || "text-slate-500"}`}>{trend}</div>
            ) : (
                <div className="h-[15px] mt-1" />
            )}
        </div>
    );
}

function CaseStudyCard({ study, onView }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0 md:gap-6 rounded-2xl bg-[#0d1526] border border-white/[0.06] p-3 sm:p-4">
            <div className="relative rounded-xl overflow-hidden h-44 md:h-full min-h-[176px]">
                <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-medium bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
                    {study.tag}
                </span>
            </div>

            <div className="flex flex-col justify-between pt-4 md:pt-1">
                <div>
                    <h3 className="text-white font-semibold text-lg sm:text-xl leading-snug">{study.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{study.subtitle}</p>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-2xl">{study.description}</p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 flex-1">
                        {study.stats.map((s, i) => (
                            <StatBlock key={i} {...s} />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => onView(study)}
                        className={`hidden sm:flex shrink-0 items-center justify-center w-10 h-10 rounded-full ${study.accent} text-black hover:brightness-110 active:scale-95 transition cursor-pointer`}
                        aria-label={`View full case study: ${study.title}`}
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => onView(study)}
                    className={`sm:hidden mt-3 w-full flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium ${study.accent} text-black active:scale-[0.98] transition`}
                >
                    View full case study <ArrowRight size={16} />
                </button>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    {study.chips.map((chip, i) => (
                        <span key={i} className="text-[11px] text-slate-500 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                            {chip}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function DetailModal({ study, onClose }) {
    if (!study) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0d1526] border border-white/[0.08] p-5 sm:p-6" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-90 transition cursor-pointer"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                <div className="relative rounded-xl overflow-hidden h-48 mb-4">
                    <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute top-3 left-3 text-[11px] font-medium bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
                        {study.tag}
                    </span>
                </div>

                <h3 className="text-white font-semibold text-xl leading-snug pr-8">{study.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{study.subtitle}</p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">{study.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
                    {study.stats.map((s, i) => (
                        <StatBlock key={i} {...s} />
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {study.chips.map((chip, i) => (
                        <span key={i} className="text-xs text-slate-300 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1">
                            {chip}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CombinedCaseStudies() {
    // Mode switcher: 'marketing' or 'it'
    const [mode, setMode] = useState("marketing");

    // Active filter state for each mode
    const [marketingActive, setMarketingActive] = useState("All Case Studies");
    const [itActive, setItActive] = useState("All Case Studies");

    const [selected, setSelected] = useState(null);

    // Get active filters and data based on selected mode
    const currentFilters = mode === "marketing" ? marketingFilters : itFilters;
    const currentActive = mode === "marketing" ? marketingActive : itActive;
    const setCurrentActive = mode === "marketing" ? setMarketingActive : setItActive;

    const rawData = mode === "marketing" ? marketingCaseStudies : itCaseStudies;
    const visible = currentActive === "All Case Studies"
        ? rawData
        : rawData.filter((s) => s.categories.includes(currentActive));

    return (
        <div className="min-h-screen bg-[#070c18] p-4 sm:p-8">
            <div className="max-w-5xl mx-auto space-y-6">

                {/* --- MASTER TOGGLE SWITCH BUTTON (Marketing vs IT Company) --- */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#0d1526] border border-white/[0.08] p-1.5 rounded-2xl flex items-center gap-2 shadow-lg">
                        <button
                            type="button"
                            onClick={() => setMode("marketing")}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition cursor-pointer ${mode === "marketing"
                                    ? "bg-amber-400 text-black shadow-md shadow-amber-400/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                                }`}
                        >
                            Marketing Agency
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode("it")}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition cursor-pointer ${mode === "it"
                                    ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                                }`}
                        >
                            IT & Software Company
                        </button>
                    </div>
                </div>

                {/* --- SUB-CATEGORY FILTER BAR --- */}
                <div className="flex flex-wrap gap-2 bg-[#0d1526] border border-white/[0.06] rounded-2xl p-2 overflow-x-auto no-scrollbar">
                    {currentFilters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            onClick={() => setCurrentActive(f)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition cursor-pointer ${currentActive === f
                                    ? mode === "marketing" ? "bg-amber-400 text-black" : "bg-cyan-400 text-black"
                                    : "text-slate-300 hover:bg-white/[0.06]"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* --- CARDS LIST --- */}
                <div className="flex flex-col gap-4">
                    {visible.length > 0 ? (
                        visible.map((study, i) => (
                            <CaseStudyCard key={i} study={study} onView={setSelected} />
                        ))
                    ) : (
                        <div className="text-center text-slate-400 py-16 rounded-2xl bg-[#0d1526] border border-white/[0.06]">
                            No case studies found for "{currentActive}".
                        </div>
                    )}
                </div>
            </div>

            <DetailModal study={selected} onClose={() => setSelected(null)} />
        </div>
    );
}