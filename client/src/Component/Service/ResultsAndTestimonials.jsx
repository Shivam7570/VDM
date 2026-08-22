import React, { useState } from 'react';
import {
    Users,
    TrendingDown,
    LineChart,
    BarChart,
    Building,
    Smile,
    Quote
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResultsAndTestimonials() {
    const [activeSlide, setActiveSlide] = useState(0);

    const metrics = [
        {
            icon: Users,
            value: '1,284+',
            title: 'Qualified Leads',
            sub: 'Generated in 30 days',
        },
        {
            icon: TrendingDown,
            value: '-27%',
            title: 'Lower CPL',
            sub: 'Compared to previous month',
        },
        {
            icon: LineChart,
            value: '+64%',
            title: 'Website Traffic',
            sub: 'Increase in organic & paid',
        },
        {
            icon: BarChart,
            value: '3.8x',
            title: 'ROAS Achieved',
            sub: 'Across campaigns',
        },
        {
            icon: Building,
            value: '150+',
            title: 'Projects Promoted',
            sub: 'Across multiple locations',
        },
        {
            icon: Smile,
            value: '98%',
            title: 'Client Satisfaction',
            sub: 'Long-term partnerships',
        },
    ];

    const testimonials = [
        {
            quote:
                'Growthify helped us generate high-quality leads consistently. Our project visibility and enquiries increased significantly.',
            name: 'Rohit Mehra',
            role: 'Marketing Head, Lodha Group',
            image:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
        },
        {
            quote:
                'Their performance marketing strategy reduced our CPL and delivered genuine buyers for our projects.',
            name: 'Anjali Sharma',
            role: 'Director, Sobha Realty',
            image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
        },
        {
            quote:
                'Excellent team, great communication and outstanding results. Highly recommend them for real estate marketing.',
            name: 'Vikram Singh',
            role: 'CEO, DLF Builders',
            image:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
        },
    ];

    return (
        <div className="w-full bg-[#f8f9fa] py-8 px-4 sm:px-8 lg:px-16 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* SECTION 1: METRICS / RESULTS */}
                <div className="space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-sm md:text-base font-extrabold text-[#0f172a] tracking-wider uppercase"
                    >
                        Marketing That Delivers Measurable Results
                    </motion.h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        {metrics.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -3 }}
                                    className="bg-white border border-slate-100 rounded-xl p-3 flex items-center space-x-2.5 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="text-[#f5a623] shrink-0">
                                        <Icon size={24} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-extrabold text-[#0f172a] leading-tight">
                                            {item.value}
                                        </h3>
                                        <p className="text-[11px] font-bold text-slate-700 leading-tight">
                                            {item.title}
                                        </p>
                                        <p className="text-[9px] text-slate-400 leading-tight">
                                            {item.sub}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 2: TESTIMONIALS */}
                <div className="space-y-4 pt-2">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-[10px] font-bold tracking-[0.2em] text-[#f5a623] uppercase"
                    >
                        What Our Clients Say
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -3 }}
                                className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    <Quote size={16} className="text-[#0f172a] fill-[#0f172a] mb-2" />
                                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                                        {item.quote}
                                    </p>
                                </div>

                                <div className="flex items-center space-x-3 mt-4 pt-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                                    />
                                    <div>
                                        <h4 className="text-xs font-bold text-[#0f172a] leading-tight">
                                            {item.name}
                                        </h4>
                                        <p className="text-[10px] text-slate-400 leading-tight">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center space-x-1.5 pt-2">
                        {[0, 1, 2, 3, 4].map((dotIndex) => (
                            <button
                                key={dotIndex}
                                onClick={() => setActiveSlide(dotIndex)}
                                className={`h-2 rounded-full transition-all ${activeSlide === dotIndex
                                        ? 'w-2 bg-[#f5a623]'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}