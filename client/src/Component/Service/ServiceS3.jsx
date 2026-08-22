import React from 'react';
import {
    Users,
    Megaphone,
    TrendingUp,
    Share2,
    MapPin,
    Target,
    CreditCard,
    Building,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesS3() {
    const services = [
        {
            id: '01',
            icon: Users,
            title: 'Lead Generation',
            bullets: [
                'Meta Ads',
                'Google Ads',
                'WhatsApp Leads',
                'Lead Forms & Landing Pages',
                'Remarketing',
                'Lead Qualification',
                'Campaign Optimization',
            ],
            footer: 'More qualified enquiries with lower cost per lead.',
        },
        {
            id: '02',
            icon: Megaphone,
            title: 'Project & Property Promotion',
            bullets: [
                'Project Launch Campaigns',
                'Property Promotion',
                'Location-Based Campaigns',
                'Offer Campaigns',
                'Inventory Promotion',
            ],
            footer: 'Increase project visibility and accelerate enquiries.',
        },
        {
            id: '03',
            icon: TrendingUp,
            title: 'Performance Marketing',
            bullets: [
                'Paid Social',
                'Search Ads',
                'Retargeting',
                'Conversion Tracking',
                'Funnel Optimization',
                'A/B Testing',
            ],
            footer: 'Better ROI through data-driven performance marketing.',
        },
        {
            id: '04',
            icon: Share2,
            title: 'Brand & Social Presence',
            bullets: [
                'Social Media Marketing',
                'Content Strategy',
                'Reels & Video Ads',
                'Creative Design',
                'Organic Presence',
                'Brand Positioning',
            ],
            footer: 'Stronger brand presence and higher audience engagement.',
        },
        {
            id: '05',
            icon: MapPin,
            title: 'Local & Search Visibility',
            bullets: [
                'Local SEO',
                'Google Business Profile',
                'Property SEO',
                'Location Keywords',
                'Project SEO',
            ],
            footer: 'Higher local discovery and organic visibility.',
        },
        {
            id: '06',
            icon: Target,
            title: 'Conversion & Tracking',
            bullets: [
                'Landing Page Optimization',
                'GA4 & Google Tag Manager',
                'Meta Pixel & CAPI',
                'Lead Tracking',
                'Conversion Tracking',
            ],
            footer: 'Better tracking, attribution and conversion performance.',
        },
        {
            id: '07',
            icon: CreditCard,
            title: 'CRM / Lead Management',
            bullets: [
                'Lead Routing',
                'CRM Integration',
                'Follow-Up Workflows',
                'Lead Source Tracking',
                'Lead Management',
            ],
            footer: 'Faster follow-up and better lead-to-sale efficiency.',
        },
    ];

    // Container variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    // Card slide up variants
    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
    };

    return (
        <section className="w-full bg-[#030712] py-12 px-4 sm:px-6 lg:px-12 font-sans text-white">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Section Header */}
                <motion.div
                    className="text-center space-y-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#f5a623] uppercase">
                        Our Core Services
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                        Everything You Need to Grow Your Real Estate Business
                    </h2>
                </motion.div>

                {/* 8-Card Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Service Cards (1 to 7) */}
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-[#0b1321]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-colors shadow-lg"
                            >
                                <div>
                                    {/* Card Top: Icon & Number */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-[#f5a623]">
                                            <Icon size={24} strokeWidth={2} />
                                        </div>
                                        <span className="text-sm font-bold text-[#f5a623] tracking-widest">
                                            {service.id}
                                        </span>
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-base font-bold text-white mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1.5 mb-5">
                                        {service.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-slate-300">
                                                <span className="text-[#f5a623] mr-2 text-[10px] mt-[1px]">▸</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Card Footer Text */}
                                <p className="text-[11px] font-semibold text-[#f5a623] pt-3 border-t border-slate-800/60 leading-tight">
                                    {service.footer}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* 8th CTA Banner Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden bg-gradient-to-b from-[#0f1d32] to-[#070d18] border border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between shadow-2xl group"
                    >
                        {/* Background Overlay Graphic */}
                        <div
                            className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop')`,
                            }}
                        />

                        <div className="relative z-10">
                            <div className="flex justify-end mb-4 text-[#f5a623]">
                                <Building size={28} />
                            </div>

                            <h3 className="text-lg font-extrabold text-white leading-snug mb-3">
                                Built for Developers, Builders & Real Estate Brands
                            </h3>

                            <p className="text-xs text-slate-300 leading-relaxed mb-6">
                                One growth partner for all your real estate marketing and lead generation needs.
                            </p>
                        </div>

                        <div className="relative z-10 pt-2">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full flex items-center justify-between bg-[#f5a623] hover:bg-[#d98f19] text-[#030712] font-bold text-xs px-4 py-3 rounded-xl transition-all shadow-lg"
                            >
                                <span>Get Your Strategy</span>
                                <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}