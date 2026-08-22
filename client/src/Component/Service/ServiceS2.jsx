import React from 'react';
import { Target, Building2, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceS2() {
    const cards = [
        {
            icon: Target,
            title: 'Generate Demand',
            description:
                'Meta Ads, Google Ads, lead forms and landing pages that attract high-intent prospects.',
        },
        {
            icon: Building2,
            title: 'Promote Projects',
            description:
                'Launch campaigns, location targeting, inventory and offer promotion that drive more enquiries.',
        },
        {
            icon: Shield,
            title: 'Build Brand Trust',
            description:
                'Social media, content, videos and branding that build credibility and long-term trust.',
        },
        {
            icon: TrendingUp,
            title: 'Measure Every Step',
            description:
                'Tracking, analytics, CRM integration and conversion optimization for better marketing ROI.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
    };

    return (
        // Reduced outer padding: py-8 instead of py-16
        <section className="w-full bg-[#f8f9fa] py-8 px-6 md:px-12 lg:px-16 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                {/* Left Column */}
                <motion.div
                    className="lg:col-span-4 space-y-2 pr-0 lg:pr-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p className="text-[11px] font-bold tracking-widest text-[#f5a623] uppercase">
                        Your Growth Starts Here
                    </p>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
                        From Property Visibility <br className="hidden sm:inline" />
                        to Qualified Demand
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed">
                        We combine strategy, creativity and performance marketing to help
                        real estate brands attract the right audience and convert them into
                        high-quality enquiries.
                    </p>
                </motion.div>

                {/* Right Column: Cards */}
                <motion.div
                    className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                // Reduced padding: p-4 instead of p-6
                                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center justify-start h-full group cursor-pointer"
                            >
                                {/* Reduced icon size & margin */}
                                <motion.div
                                    className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3 text-[#f5a623]"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Icon size={20} strokeWidth={2} />
                                </motion.div>

                                {/* Card Title */}
                                <h3 className="text-sm font-bold text-[#0f172a] mb-1.5 leading-snug group-hover:text-[#f5a623] transition-colors">
                                    {card.title}
                                </h3>

                                {/* Card Description */}
                                <p className="text-[11px] text-slate-500 leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}