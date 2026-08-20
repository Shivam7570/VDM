import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function GrowthAndCaseStudies() {
    const platforms = [
        { name: 'Google', color: 'text-[#4285F4]', logo: 'Google' },
        { name: 'Meta', color: 'text-[#0668E1]', logo: '∞ Meta' },
        { name: 'YouTube', color: 'text-[#FF0000]', logo: '▶ YouTube' },
        { name: 'Instagram', color: 'text-[#E4405F]', fontStyle: 'font-serif italic', logo: 'Instagram' },
        { name: 'LinkedIn', color: 'text-[#0A66C2]', logo: 'Linked in' },
        { name: 'Amazon Ads', color: 'text-black', logo: 'amazon ads' },
    ];

    const caseStudies = [
        {
            clientType: 'Real Estate Client',
            category: 'Luxury Apartments',
            bgImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
            stats: [
                { value: '4,200+', label: 'Leads Generated' },
                { value: '₹12.5 Cr+', label: 'Sales Generated' },
                { value: '320%', label: 'ROI Achieved' },
            ],
            timeline: '6 Months',
        },
        {
            clientType: 'Amazon Seller',
            category: 'Home & Kitchen',
            bgImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
            stats: [
                { value: '280%', label: 'Sales Growth' },
                { value: '3.8X', label: 'ROAS' },
                { value: '#1', label: 'Category Rank' },
            ],
            timeline: '3 Months',
        },
        {
            clientType: 'E-Commerce Brand',
            category: 'Fashion Accessories',
            bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
            stats: [
                { value: '150K+', label: 'Website Traffic' },
                { value: '4.5%', label: 'Conversion Rate' },
                { value: '200%', label: 'Revenue Growth' },
            ],
            timeline: '4 Months',
        },
        {
            clientType: 'Marketplace Seller',
            category: 'Electronics',
            bgImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
            stats: [
                { value: '310%', label: 'Sales Growth' },
                { value: '5.2X', label: 'ROAS' },
                { value: '45%', label: 'ACOS Reduced' },
            ],
            timeline: '3 Months',
        },
    ];

    return (
        <div className="w-full bg-white text-gray-900 py-6 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* SECTION 1: PLATFORMS & EXPERTISE */}
                <section className="text-center space-y-4">
                    <div className="space-y-1">
                        <span className="text-red-500 font-bold text-[11px] tracking-wider uppercase">
                            Platforms & Expertise
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                            Where We Drive Growth
                        </h2>
                        <div className="w-10 h-0.5 bg-red-500 mx-auto rounded-full mt-1" />
                    </div>

                    {/* Platform Cards Grid (Reduced Height: h-14) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
                        {platforms.map((platform, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-14"
                            >
                                <span className={`text-base sm:text-lg font-bold ${platform.color} ${platform.fontStyle || ''}`}>
                                    {platform.logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 2: CASE STUDIES */}
                <section className="text-center space-y-6">
                    <div className="space-y-1">
                        <span className="text-red-500 font-bold text-[11px] tracking-wider uppercase">
                            Case Studies
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                            Real Results. Real Impact.
                        </h2>
                        <div className="w-10 h-0.5 bg-red-500 mx-auto rounded-full mt-1" />
                    </div>

                    {/* Case Studies Grid (Reduced Height: h-[320px]) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                        {caseStudies.map((card, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-xl overflow-hidden shadow-md group h-[320px] flex flex-col justify-between p-4 text-white"
                            >
                                {/* Background Image with Dark Overlay */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${card.bgImage})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60" />

                                {/* Card Content Header */}
                                <div className="relative z-10">
                                    <p className="text-[10px] text-gray-300 font-medium">{card.clientType}</p>
                                    <h3 className="text-sm font-bold text-white leading-tight">{card.category}</h3>
                                </div>

                                {/* Card Stats */}
                                <div className="relative z-10 space-y-2 my-auto">
                                    {card.stats.map((stat, sIdx) => (
                                        <div key={sIdx}>
                                            <p className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-none">
                                                {stat.value}
                                            </p>
                                            <p className="text-[10px] text-gray-300 mt-0.5">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Card Footer */}
                                <div className="relative z-10 pt-1.5 border-t border-white/10">
                                    <p className="text-[10px] text-gray-300 font-medium">
                                        Timeline: {card.timeline}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-1">
                        <button className="inline-flex items-center gap-2 bg-[#D9383A] hover:bg-red-700 text-white font-medium text-xs px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg">
                            View More Case Studies <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}