import React from 'react';
import { Link } from 'react-router-dom';
import { useAudit } from '../../context/AuditContext';
import {
    Users,
    BarChart2,
    Star,
    Globe,
    Calendar
} from 'lucide-react';

export default function ContactS3() {
    const { openAuditModal } = useAudit();
    const stats = [
        {
            icon: Users,
            value: "30+",
            label: "Happy Clients & Projects",
        },
        {
            icon: BarChart2,
            value: "200%",
            label: "Average Growth",
        },
        {
            icon: Star,
            value: "5★",
            label: "Rated Service",
        },
        {
            icon: Globe,
            value: "10+",
            label: "Countries Served",
        },
    ];

    return (
        <div className="w-full bg-[#fffcf7] p-4 md:p-8 font-sans space-y-6">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Top Card: Stats Section */}
                <div className="bg-[#fffdf9] border border-[#f0e3cc] rounded-2xl p-6 sm:p-8 shadow-sm">
                    {/* Header with Decorative Orbs */}
                    <div className="flex items-center justify-center space-x-3 mb-8">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#b8860b]" />
                        <div className="w-2 h-2 rounded-full bg-[#b8860b]" />
                        <h2 className="text-xl sm:text-2xl font-bold text-[#1c1917] tracking-tight text-center">
                            Why Brands Choose VDigimarks?
                        </h2>
                        <div className="w-2 h-2 rounded-full bg-[#b8860b]" />
                        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#b8860b]" />
                    </div>

                    {/* Grid Items */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 items-center justify-between divide-y md:divide-y-0 md:divide-x divide-[#f3e7d3]">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className={`flex items-center space-x-3 ${index !== 0 ? 'pt-4 md:pt-0 md:pl-4 lg:pl-6' : ''
                                        }`}
                                >
                                    {/* Circle Icon Badge */}
                                    <div className="w-12 h-12 rounded-full border border-[#d9b36c] bg-[#fffcf7] flex items-center justify-center shrink-0 shadow-sm">
                                        <IconComponent className="w-6 h-6 text-[#b8860b]" />
                                    </div>

                                    {/* Value and Label */}
                                    <div className="flex flex-col">
                                        <span className="text-xl sm:text-2xl font-extrabold text-[#1c1917] leading-none">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs font-medium text-[#78716c] mt-1 whitespace-nowrap">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Banner: Call to Action */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#b38328] via-[#c99a32] to-[#b38328] p-6 sm:p-8 text-white shadow-md">
                    {/* Decorative Wave Watermark Background */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.4),_transparent_70%)]" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">

                        {/* Left Content */}
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                                <Calendar className="w-7 h-7 text-white" />
                            </div>
                            <div className="space-y-1 text-center sm:text-left">
                                <span className="text-xs font-medium text-amber-100 tracking-wide uppercase">
                                    Ready to Grow Your Business?
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                    Book a Free Strategy Call Today!
                                </h3>
                                <p className="text-xs sm:text-sm text-amber-100/90 font-normal">
                                    Let's discuss how we can help you achieve measurable growth.
                                </p>
                            </div>
                        </div>

                        {/* Right Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                            <a href="tel:+917651909139" className="flex items-center justify-center space-x-2 bg-[#161719] hover:bg-black text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-md border border-stone-800">
                                <Calendar className="w-4 h-4 text-amber-400" />
                                <span>Book a Free Strategy Call</span>
                            </a>

                            <button onClick={openAuditModal} className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg border border-white/60 transition-colors cursor-pointer">
                                Get a Free Marketing Audit
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}