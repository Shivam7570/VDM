import React from 'react';
import {
    Folder,
    ArrowRight,
    Phone,
    Users,
    TrendingUp,
    PieChart,
    ShieldCheck,
    Target,
    Settings,
    Send
} from 'lucide-react';
import { motion } from 'framer-motion';
import heorimg from '../../assets/Casesudiehero.png';

export default function CompactCaseStudiesHero() {
    const combinedMetricsAndSteps = [
        {
            type: 'metric',
            icon: Users,
            value: '2,450+',
            title: 'Qualified Leads',
            sub: 'Generated for Clients',
            color: 'text-[#f5a623]',
            bg: 'bg-amber-500/10 border border-amber-500/20',
        },
        {
            type: 'metric',
            icon: TrendingUp,
            value: '3.6X',
            title: 'Average Growth',
            sub: 'Across Campaigns',
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10 border border-emerald-500/20',
        },
        {
            type: 'metric',
            icon: PieChart,
            value: '45%',
            title: 'ROAS Improvement',
            sub: 'On Average',
            color: 'text-[#f5a623]',
            bg: 'bg-amber-500/10 border border-amber-500/20',
        },
        {
            type: 'metric',
            icon: ShieldCheck,
            value: '98%',
            title: 'Client Satisfaction',
            sub: 'Long-term Partnerships',
            color: 'text-[#f5a623]',
            bg: 'bg-amber-500/10 border border-amber-500/20',
        },
        {
            type: 'step',
            id: '01',
            icon: Target,
            title: 'Real Campaigns',
            sub: 'Built around real business goals',
            color: 'text-amber-400',
            bg: 'bg-amber-500/10 border border-amber-500/20',
        },
        {
            type: 'step',
            id: '02',
            icon: TrendingUp,
            title: 'Measurable Growth',
            sub: 'Leads, sales, traffic tracked',
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10 border border-emerald-500/20',
        },
        {
            type: 'step',
            id: '03',
            icon: Settings,
            title: 'Continuous Optimization',
            sub: 'Data-driven decisions',
            color: 'text-blue-400',
            bg: 'bg-blue-500/10 border border-blue-500/20',
        },
    ];

    return (
        <div className="w-full bg-[#030712] text-white font-sans overflow-hidden relative">

            {/* --- ANIMATED BACKGROUND LIGHTS --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Golden/Amber Glowing Blob */}
                <motion.div
                    className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-amber-500/15 blur-[120px]"
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 30, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Cyan/Blue Glowing Blob */}
                <motion.div
                    className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
                    animate={{
                        x: [0, -60, 40, 0],
                        y: [0, 50, -30, 0],
                        scale: [1, 1.15, 0.95, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Indigo Center Accent Glow */}
                <motion.div
                    className="absolute top-[30%] left-[40%] w-[350px] h-[350px] rounded-full bg-indigo-600/10 blur-[130px]"
                    animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* MAIN CONTENT WRAPPER WITH Z-INDEX */}
            <div className="relative z-10">

                {/* 1. HERO SECTION */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[420px]">

                    {/* Left Content */}
                    <motion.div
                        className="lg:col-span-6 space-y-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#f5a623] uppercase shadow-inner backdrop-blur-md">
                            <Folder size={12} />
                            <span>CASE STUDIES</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                            Strategies That Perform. <br />
                            <span className="text-[#f5a623]">Results</span> That Speak.
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg font-normal">
                            Discover how our data-driven marketing strategies help real estate brands generate qualified leads and empower marketplace sellers to scale sales across top platforms.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">


                            <button className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-white font-bold text-xs px-5 py-3 rounded-lg transition-all active:scale-95 backdrop-blur-md">
                                <span>Book a Free Strategy Call</span>
                                <Phone size={14} className="text-[#f5a623]" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side Image */}
                    <motion.div
                        className="lg:col-span-6 rounded-2xl relative flex items-center justify-center h-full min-h-[300px]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={heorimg}
                            alt="Growthify Marketing Dashboard Graphics"
                            className="w-full h-auto max-h-[360px] object-contain  relative pt-12 z-10 drop-shadow-2xl"
                        />
                    </motion.div>

                </section>

                {/* 2. BOTTOM METRICS & STEPS BAR */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 relative">
                    <motion.div
                        className="bg-[#0a101d]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-4 shadow-2xl relative"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-2 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/60">
                            {combinedMetricsAndSteps.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2.5 pt-3 sm:pt-0 lg:pl-3 first:pl-0 group"
                                    >
                                        <div className={`p-2 rounded-xl ${item.bg} ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                            <Icon size={16} />
                                        </div>
                                        <div className="min-w-0">
                                            {item.type === 'metric' ? (
                                                <>
                                                    <h4 className="text-xs font-black text-white leading-tight">{item.value}</h4>
                                                    <p className="text-[10px] font-bold text-slate-200 leading-none truncate mt-0.5">{item.title}</p>
                                                    <p className="text-[9px] text-slate-400 leading-none truncate mt-1">{item.sub}</p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex items-center space-x-1">
                                                        <span className="text-[9px] font-black text-[#f5a623]">{item.id}</span>
                                                        <h4 className="text-[10px] font-extrabold text-white leading-tight truncate">{item.title}</h4>
                                                    </div>
                                                    <p className="text-[9px] text-slate-400 leading-none truncate mt-1">{item.sub}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Golden Accent Arrow at Bottom Right */}

                    </motion.div>
                </section>

            </div>
        </div>
    );
}