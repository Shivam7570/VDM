import React from 'react';
import {
    Search,
    LayoutGrid,
    Rocket,
    BarChart2,
    TrendingUp,
    Target,
    Users,
    FileCheck,
    Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessAndWhyChooseUs() {
    const processSteps = [
        {
            id: '01',
            title: 'Discover',
            icon: Search,
            description:
                'We understand your project, audience, location, competitors and business objectives.',
        },
        {
            id: '02',
            title: 'Strategize',
            icon: LayoutGrid,
            description:
                'We build the right channel mix, targeting, messaging and conversion strategy.',
        },
        {
            id: '03',
            title: 'Launch',
            icon: Rocket,
            description:
                'Campaigns, landing pages, creatives and tracking are launched for maximum impact.',
        },
        {
            id: '04',
            title: 'Optimize',
            icon: BarChart2,
            description:
                'We analyze performance, leads, CPL, ROAS and conversion metrics to find what works.',
        },
        {
            id: '05',
            title: 'Scale',
            icon: TrendingUp,
            description:
                'We scale successful campaigns and continuously improve for long-term growth.',
        },
    ];

    const whyChooseUsPillars = [
        {
            icon: Target,
            title: 'Result-Driven Approach',
            description:
                'We focus on measurable outcomes that impact your business.',
        },
        {
            icon: TrendingUp,
            title: 'Data & Performance First',
            description:
                'Every strategy is backed by data, tracking and continuous optimization.',
        },
        {
            icon: Users,
            title: 'Industry Expertise',
            description:
                'Deep experience working with developers, builders and real estate brands.',
        },
        {
            icon: FileCheck,
            title: 'Transparent Reporting',
            description:
                'Clear reports, honest insights and complete visibility at every step.',
        },
        {
            icon: Settings,
            title: 'End-to-End Support',
            description:
                'From strategy to execution and optimization, we handle everything.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <div className="w-full font-sans">

            {/* SECTION 1: OUR PROVEN PROCESS (Height Reduced: py-6) */}
            <section className="w-full bg-[#f8f9fa] py-6 px-4 sm:px-8 lg:px-16 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-5">

                    {/* Section Header */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[#f5a623] uppercase">
                            Our Proven Process
                        </p>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight">
                            How We Grow Your Real Estate Business
                        </h2>
                    </motion.div>

                    {/* Process Timeline Wrapper */}
                    <div className="relative">
                        {/* Horizontal Dotted Line */}
                        <div className="hidden lg:block absolute top-5 left-[8%] right-[8%] h-[2px] border-b-2 border-dashed border-slate-300 z-0" />

                        {/* Steps Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-30px" }}
                        >
                            {processSteps.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={step.id}
                                        variants={itemVariants}
                                        className="flex flex-col items-center text-center group"
                                    >
                                        {/* Compact Icon Circle (w-10 h-10) */}
                                        <motion.div
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-2 text-[#0f172a] group-hover:border-[#f5a623] transition-all"
                                        >
                                            <Icon size={18} className="text-[#0f172a] group-hover:text-[#f5a623] transition-colors" />
                                        </motion.div>

                                        {/* Number & Title */}
                                        <h3 className="text-xs font-extrabold text-[#0f172a] mb-1">
                                            <span className="text-[#f5a623] mr-1">{step.id}</span> {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[10px] text-slate-500 leading-normal max-w-[190px]">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* SECTION 2: WHY CHOOSE US? (Height Reduced: py-6) */}
            <section className="w-full bg-[#030712] py-6 px-4 sm:px-8 lg:px-16 text-white overflow-hidden border-t border-slate-800">
                <div className="max-w-7xl mx-auto space-y-5">

                    {/* Section Header */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[#f5a623] uppercase">
                            Why Choose Us?
                        </p>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                            A Partner Focused on Results, Not Just Tasks
                        </h2>
                    </motion.div>

                    {/* 5 Pillars Row */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-30px" }}
                    >
                        {whyChooseUsPillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -2 }}
                                    className="flex flex-col items-center text-center p-2 lg:px-3 group cursor-pointer"
                                >
                                    {/* Compact Icon */}
                                    <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-[#f5a623]">
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xs font-bold text-white mb-1 leading-tight group-hover:text-[#f5a623] transition-colors">
                                        {pillar.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[10px] text-slate-400 leading-normal">
                                        {pillar.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </section>

        </div>
    );
}