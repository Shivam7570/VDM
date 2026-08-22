import React, { useState } from 'react';
import { 
    FileText, 
    Send, 
    CheckCircle2, 
    Sparkles, 
    TrendingUp, 
    Target, 
    Search, 
    BarChart3, 
    Zap, 
    ShieldCheck, 
    Clock, 
    ArrowRight,
    Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestAudit() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        service: 'Real Estate Marketing',
        budget: '₹50k - ₹1L / month',
        goals: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1200);
    };

    const auditFeatures = [
        {
            icon: <Search className="text-amber-400" size={24} />,
            title: "360° SEO & Tech Audit",
            description: "Deep dive into technical SEO issues, indexing errors, speed bottlenecks & keyword gaps."
        },
        {
            icon: <BarChart3 className="text-amber-400" size={24} />,
            title: "Paid Ads & CAC Analysis",
            description: "Audit Meta, Google & LinkedIn ad accounts to eliminate wasted spend and boost ROAS."
        },
        {
            icon: <Target className="text-amber-400" size={24} />,
            title: "Conversion Funnel Optimization",
            description: "Uncover leakages in your landing page user journeys and form submit drop-offs."
        },
        {
            icon: <TrendingUp className="text-amber-400" size={24} />,
            title: "Competitor Benchmarking",
            description: "See exactly how your digital footprint compares with top market leaders in your niche."
        }
    ];

    const stats = [
        { value: "350+", label: "Audits Delivered" },
        { value: "4.2x", label: "Avg ROAS Boost" },
        { value: "24-48h", label: "Turnaround Time" },
        { value: "100%", label: "Free & Actionable" }
    ];

    return (
        <div className="min-h-screen bg-[#070b12] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Badge & Title */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        <Sparkles size={14} className="animate-spin" />
                        <span>Free Performance Marketing Audit</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Unlock Hidden Growth & Stop Wasting <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Ad Spend</span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl mx-auto">
                        Get a detailed, customized 360° Marketing & Ad Performance Audit prepared by senior growth strategists. Zero obligation, 100% actionable insights.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Audit Form */}
                    <div className="lg:col-span-7 bg-[#0d1322]/90 border border-slate-700/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                        {isSubmitted ? (
                            <div className="py-12 px-4 flex flex-col items-center text-center space-y-5 animate-in fade-in zoom-in duration-300">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce">
                                    <CheckCircle2 size={44} />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Audit Request Received!</h2>
                                <p className="text-stone-300 text-sm max-w-md leading-relaxed">
                                    Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>! Our lead growth team is currently inspecting <span className="underline decoration-amber-500/50">{formData.website || 'your business details'}</span>.
                                </p>
                                <div className="bg-[#141d33] border border-amber-500/20 rounded-2xl p-4 text-left w-full max-w-md text-xs text-stone-300 space-y-2">
                                    <div className="flex items-center gap-2 text-amber-400 font-semibold">
                                        <Clock size={16} />
                                        <span>Next Steps & Delivery Window:</span>
                                    </div>
                                    <p className="pl-6 text-stone-400">
                                        You will receive your custom audit report via email (<span className="text-stone-200">{formData.email}</span>) and WhatsApp within <strong className="text-white">24 to 48 hours</strong>.
                                    </p>
                                </div>

                                <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                    <button 
                                        onClick={() => setIsSubmitted(false)} 
                                        className="flex-1 py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-700 text-white text-xs font-semibold transition-all"
                                    >
                                        Submit Another Request
                                    </button>
                                    <Link 
                                        to="/contact"
                                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md"
                                    >
                                        <span>Talk to a Strategist</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-6 pb-5 border-b border-slate-800">
                                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                                        <FileText className="text-amber-400" size={24} />
                                        <span>Request Your Free Audit</span>
                                    </h2>
                                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                                        Fill in your details below to receive a comprehensive performance audit report.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                    {/* Name & Phone Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                                                Full Name <span className="text-amber-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="e.g. Rahul Sharma"
                                                className="w-full bg-[#050914] border border-slate-700/80 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                                                Phone / WhatsApp <span className="text-amber-400">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-[#050914] border border-slate-700/80 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email & Website Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                                                Business Email <span className="text-amber-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="rahul@company.com"
                                                className="w-full bg-[#050914] border border-slate-700/80 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                                                Website or Social URL
                                            </label>
                                            <input
                                                type="text"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleInputChange}
                                                placeholder="https://yourwebsite.com"
                                                className="w-full bg-[#050914] border border-slate-700/80 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Service & Budget Select */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                                                Primary Interest
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#050914] border border-slate-700/80 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
                                            >
                                                <option value="Real Estate Marketing">Real Estate Lead Gen</option>
                                                <option value="Marketplace Marketing">Marketplace Ads (Amazon/Flipkart)</option>
                                                <option value="Performance Ads">Meta & Google Ads Audit</option>
                                                <option value="Website & SEO">SEO & Website CRO</option>
                                                <option value="Social Media">Social Media Branding</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                                                Monthly Marketing Budget
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#050914] border border-slate-700/80 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
                                            >
                                                <option value="Under ₹50k">Under ₹50,000 / month</option>
                                                <option value="₹50k - ₹1L">₹50,000 - ₹1,00,000 / month</option>
                                                <option value="₹1L - ₹3L">₹1,00,000 - ₹3,00,000 / month</option>
                                                <option value="₹3L+">Above ₹3,00,000 / month</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Goals / Message */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                                            What is your top growth challenge right now?
                                        </label>
                                        <textarea
                                            name="goals"
                                            rows="3"
                                            value={formData.goals}
                                            onChange={handleInputChange}
                                            placeholder="e.g., High cost per lead, low conversion rate on site, need more qualified real estate buyers..."
                                            className="w-full bg-[#050914] border border-slate-700/80 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-stone-950 font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_4px_25px_rgba(245,158,11,0.4)] disabled:opacity-50 cursor-pointer active:scale-[0.99] mt-2"
                                    >
                                        {isSubmitting ? (
                                            <span>Analyzing Details...</span>
                                        ) : (
                                            <>
                                                <span>Submit Free Audit Request</span>
                                                <Send size={16} />
                                            </>
                                        )}
                                    </button>

                                    <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400 pt-2">
                                        <span className="flex items-center gap-1">
                                            <ShieldCheck size={13} className="text-emerald-400" />
                                            100% Confidential
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Zap size={13} className="text-amber-400" />
                                            Fast 24-48h Delivery
                                        </span>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Why Get an Audit & Trust Metrics */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Stats Card */}
                        <div className="bg-[#0d1322]/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
                            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-extrabold mb-4 flex items-center gap-2">
                                <Award size={16} />
                                Proven Track Record
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((item, idx) => (
                                    <div key={idx} className="bg-[#060a12] border border-slate-800 rounded-2xl p-3.5 text-center">
                                        <p className="text-2xl sm:text-3xl font-black text-white">{item.value}</p>
                                        <p className="text-[11px] text-stone-400 mt-0.5">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features Breakdown */}
                        <div className="bg-[#0d1322]/60 border border-slate-800 rounded-3xl p-6 space-y-4 backdrop-blur-md">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                                What You Get In Your Free Audit
                            </h3>
                            <div className="space-y-4">
                                {auditFeatures.map((feat, i) => (
                                    <div key={i} className="flex items-start space-x-3.5">
                                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0 mt-0.5">
                                            {feat.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-white">{feat.title}</h4>
                                            <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">{feat.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Trust Note */}
                        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 rounded-2xl p-5 text-xs text-stone-300 space-y-2">
                            <p className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
                                <Zap size={16} />
                                Why Vdigimarks (VDM)?
                            </p>
                            <p className="text-stone-300 leading-relaxed text-xs">
                                Unlike automated audit tools that send cookie-cutter reports, our senior performance marketing strategists manually inspect your ad accounts, landing pages, and competitors to give you practical, revenue-driving advice.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
