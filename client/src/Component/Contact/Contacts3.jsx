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



            </div>
        </div>
    );
}