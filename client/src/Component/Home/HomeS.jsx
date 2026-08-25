import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAudit } from "../../context/AuditContext";
import { submitAuditRequest } from "../../services/api";
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
    RefreshCw,
    Globe,
    ShoppingBag,
    BarChart3,
    Star,
    MousePointerClick,
    Layers,
    Code,
    X,
    Send,
    CheckCircle2,
    Palette,
    Smartphone,
    Sparkles
} from "lucide-react";
import vdmraket from '../../assets/vdmmarket.png';
import logo from '../../assets/LogoVDM.png';

export default function HomeS() {
    const { openAuditModal } = useAudit();
    // SPLASH SCREEN STATE
    const [showSplash, setShowSplash] = useState(true);
    const [splashFading, setSplashFading] = useState(false);

    // AUDIT MODAL & FORM STATES
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        businessType: "Real Estate",
        goals: ""
    });

    // COUNT-UP ANIMATION STATES
    const [projects, setProjects] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [leads, setLeads] = useState(0);
    const [roasMin, setRoasMin] = useState(0);
    const [roasMax, setRoasMax] = useState(0);

    // HANDLE INTRO SPLASH SCREEN
    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setSplashFading(true);
        }, 2200);

        const removeTimer = setTimeout(() => {
            setShowSplash(false);
        }, 2800);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    // HANDLE COUNT-UP ANIMATION
    useEffect(() => {
        let startTime = null;
        const duration = 2000;
        let animationFrameId;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setProjects(Math.floor(easeProgress * 30));
            setRevenue(Math.floor(easeProgress * 100));
            setLeads(Math.floor(easeProgress * 360));
            setRoasMin(Math.floor(easeProgress * 3));
            setRoasMax(Math.floor(easeProgress * 12));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // HANDLE AUDIT FORM SUBMISSION
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAuditSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await submitAuditRequest({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                website: formData.website,
                message: `Business Type: ${formData.businessType} | Goals: ${formData.goals}`
            });
        } catch (err) {
            console.warn('Audit submission:', err);
        } finally {
            setIsSubmitting(false);
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                setIsAuditModalOpen(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    website: "",
                    businessType: "Real Estate",
                    goals: ""
                });
            }, 3000);
        }
    };

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

            {/* INTRO SPLASH SCREEN POPUP */}
            {showSplash && (
                <div
                    className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] transition-all duration-700 ease-in-out ${splashFading ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
                        }`}
                >
                    <div className="absolute w-[350px] h-[350px] bg-amber-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center space-y-6 text-center px-4">
                        <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-300 p-[2px] shadow-[0_0_50px_rgba(245,158,11,0.35)] animate-bounce">
                            <div className="w-full h-full bg-[#030712] rounded-[22px] flex items-center justify-center p-4">
                                <img
                                    src={logo}
                                    alt="VDG Logo"
                                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                                VDIGIMARKS
                            </h2>
                            <p className="text-xs sm:text-sm font-semibold tracking-widest text-amber-400 uppercase">
                                Performance Marketing & Growth
                            </p>
                        </div>

                        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-4">
                            <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-[splashProgress_2s_ease-in-out_forwards]" />
                        </div>
                    </div>
                </div>
            )}

            {/* REQUEST MARKETING AUDIT MODAL */}
            {isAuditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
                    <div className="relative w-full max-w-md bg-[#0b1329] border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

                        <button
                            onClick={() => setIsAuditModalOpen(false)}
                            className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors p-1 rounded-full bg-slate-800/50 hover:bg-slate-700"
                        >
                            <X size={18} />
                        </button>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center text-center py-6 space-y-3">
                                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 animate-bounce">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Audit Requested!</h3>
                                <p className="text-stone-300 text-xs max-w-xs">
                                    Thank you! Our growth experts will review your details and reach out shortly.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <FileText className="text-amber-500" size={20} />
                                        Request Marketing Audit
                                    </h3>
                                    <p className="text-xs text-stone-400 mt-0.5">
                                        Get a comprehensive analysis of your digital presence.
                                    </p>
                                </div>

                                <form onSubmit={handleAuditSubmit} className="space-y-3">
                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-0.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="e.g. John Doe"
                                            className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-1.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-0.5">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@company.com"
                                                className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-1.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-0.5">
                                                Mobile Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone || ""}
                                                onChange={handleInputChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-1.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-0.5">
                                            Website or Store Link
                                        </label>
                                        <input
                                            type="text"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            placeholder="https://..."
                                            className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-1.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-0.5">
                                            Goal or Challenge
                                        </label>
                                        <textarea
                                            name="goals"
                                            rows="2"
                                            value={formData.goals}
                                            onChange={handleInputChange}
                                            placeholder="Tell us what you want to achieve..."
                                            className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-1.5 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 text-xs mt-1"
                                    >
                                        {isSubmitting ? (
                                            <span>Processing...</span>
                                        ) : (
                                            <>
                                                <span>Submit Audit Request</span>
                                                <Send size={14} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ANIMATION STYLES */}
            <style>{`
                @keyframes splashProgress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }

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
            <section className="relative pt-20 sm:pt-24 lg:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex items-start z-10 overflow-x-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6">

                        {/* BRAND MARQUEE BADGE */}
                        <div className="inline-flex mt-0 items-center w-full max-w-[calc(100vw-2rem)] sm:max-w-md overflow-hidden bg-[#0a1622]/80 backdrop-blur-md border border-amber-500/30 rounded-full px-0 py-2.5 shadow-lg relative">
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
                            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
                                Performance Marketing <br className="hidden sm:inline" />
                                That Builds Brands.
                            </h1>
                            <p className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#f97316] tracking-tight drop-shadow-sm">
                                Leads. Sales. Growth.
                            </p>
                        </div>

                        <p className="text-stone-200 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
                            We help Real Estate brands and Marketplace sellers grow with data-driven strategies that deliver measurable results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
                            <a
                                href="https://wa.me/7651909139?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Free%20Strategy%20Call!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 bg-[#d94834] hover:bg-[#c03c29] text-white font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto"
                            >
                                <Calendar size={18} />
                                <span>Get a Free Strategy Call</span>
                            </a>

                            <button
                                onClick={openAuditModal}
                                className="flex items-center justify-center space-x-2 bg-transparent border border-amber-500/50 hover:border-amber-400 text-white font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all duration-300 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
                            >
                                <FileText size={18} className="text-amber-400" />
                                <span>Request a Marketing Audit</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Key Stats Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="card-emerge-animation bg-[#030712]/80 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6 transform-gpu">

                            <div className="flex items-center space-x-4">
                                <div className="p-3.5 rounded-2xl bg-[#d94834]/20 text-[#f97316]">
                                    <Briefcase size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tabular-nums">{projects}+</h3>
                                    <p className="text-xs text-stone-300 font-medium">Projects Delivered</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3.5 rounded-2xl bg-[#d94834]/20 text-[#f97316]">
                                    <Star size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tabular-nums">{revenue}%</h3>
                                    <p className="text-xs text-stone-300 font-medium"> Client Satisfaction</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3.5 rounded-2xl bg-[#d94834]/20 text-[#f97316]">
                                    <RefreshCw size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tabular-nums">{leads}°</h3>
                                    <p className="text-xs text-stone-300 font-medium"> Marketing</p>
                                </div>
                            </div>

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

            {/* SERVICES SECTION - 4 CARDS GRID */}
            <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* CARD 1: Real Estate Marketing */}
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
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Lead Gen</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Megaphone size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Promotion</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Building2 size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Branding</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Share2 size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Socials</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-red-50 text-[#d94834]">
                                        <Globe size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Web Pages</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Marketplace Marketing */}
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

                                <div className="sm:col-span-5 h-98 w-full sm:h-full min-h-[190px] rounded-2xl flex items-center justify-center p-2 relative bg-stone-50 overflow-hidden">
                                    <img
                                        src={vdmraket}
                                        alt="Marketplace Shopping App"
                                        className="w-auto h-full scale-150 object-contain rounded-xl group-hover:scale-135 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-4 gap-4 items-center justify-items-center opacity-80">
                                <span className="font-extrabold text-stone-800 text-lg tracking-tight">amazon</span>
                                <span className="font-bold text-blue-600 text-lg tracking-tight">Walmart<span className="text-yellow-500">*</span></span>
                                <span className="font-bold text-blue-500 text-lg italic">Flipkart</span>
                                <span className="font-bold text-orange-500 text-lg tracking-tight">ebay</span>

                                <span className="font-semibold text-orange-600 text-base">Etsy</span>
                                <span className="font-bold text-stone-900 text-sm flex items-center gap-1">♪ TikTok</span>
                                <span className="font-extrabold text-orange-500 text-xs tracking-tighter">TEMU</span>
                                <span className="font-bold text-emerald-600 text-xs tracking-tight">⚡ Quick Commerce</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: Paid Ads & Performance Marketing */}
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
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Meta Ads</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-amber-50 text-amber-600">
                                        <MousePointerClick size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Google Ads</span>
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
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Funnel Ads</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4: Branding, Web & Tech Development */}
                    <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden relative group">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                                <div className="sm:col-span-7 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                                            <Code size={32} />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                                            Branding & <br />
                                            Web Development
                                        </h2>
                                    </div>

                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        High-converting websites, web apps, and modern visual identities built to give your brand a superior digital presence.
                                    </p>

                                    <a
                                        href="/services/web-tech"
                                        className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
                                    >
                                        <span>Explore Tech & Web Services</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="sm:col-span-5 h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                                        alt="Web & Software Development"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-5 gap-2 text-center">
                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-indigo-50 text-indigo-600">
                                        <Code size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Web Apps</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-indigo-50 text-indigo-600">
                                        <Palette size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">UI/UX Design</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-indigo-50 text-indigo-600">
                                        <Globe size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">SEO Build</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-indigo-50 text-indigo-600">
                                        <Smartphone size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Responsive</span>
                                </div>

                                <div className="flex flex-col items-center space-y-1.5">
                                    <div className="p-2.5 rounded-full bg-indigo-50 text-indigo-600">
                                        <Sparkles size={18} />
                                    </div>
                                    <span className="text-[11px] font-bold text-stone-700 leading-tight">Branding</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}