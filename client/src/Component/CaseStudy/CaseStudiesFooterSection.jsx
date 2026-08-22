import React from 'react';
import { Target, Users, TrendingUp, IndianRupee, ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAudit } from '../../context/AuditContext';

export default function CaseStudiesFooterSection() {
    const { openAuditModal } = useAudit();
    const impactMetrics = [
        {
            icon: Target,
            value: '2,500+',
            label: 'Campaigns Launched',
        },
        {
            icon: Users,
            value: '1,200+',
            label: 'Happy Clients',
        },
        {
            icon: TrendingUp,
            value: '3.6X',
            label: 'Average Growth',
        },
        {
            icon: IndianRupee,
            value: '45%',
            label: 'Avg. ROAS Improvement',
        },
        {
            icon: ShieldCheck,
            value: '98%',
            label: 'Client Retention Rate',
        },
    ];

    const testimonials = [
        {
            quote: 'The team helped us generate high-quality leads consistently. Our project visibility improved massively and sales cycle became faster.',
            name: 'Rohit M.',
            role: 'Marketing Head, UrbanSpaces',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        },
        {
            quote: 'Their Amazon marketing strategy took our listings to the top. Sales improved, ACOS reduced and brand visibility grew.',
            name: 'Anjali S.',
            role: 'Founder, Home Essentials',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
        },
        {
            quote: 'Professional team, clear communication and result-driven approach. Highly recommend their marketplace marketing services.',
            name: 'Vikram P.',
            role: 'CEO, TechGear India',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        },
    ];

    return (
        <section className="w-full bg-[#030712] text-white font-sans py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* --- 1. OUR IMPACT AT A GLANCE BAR --- */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0a101d] border border-slate-800/90 rounded-2xl p-4 shadow-xl"
                >
                    <h3 className="text-center text-xs sm:text-sm font-bold text-slate-300 tracking-wider uppercase mb-4">
                        Our Impact at a Glance
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
                        {impactMetrics.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex flex-col items-center text-center pt-3 sm:pt-0 sm:px-2 first:pt-0">
                                    <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-[#f5a623] rounded-xl mb-2">
                                        <Icon size={16} />
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-black text-white">{item.value}</h4>
                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{item.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* --- 2. WHAT OUR CLIENTS SAY --- */}
                <div className="space-y-4">
                    <div className="text-center space-y-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                            What Our Clients Say
                        </h3>
                        <div className="w-8 h-1 bg-[#f5a623] mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0a101d] border border-slate-800/90 rounded-2xl p-5 flex flex-col justify-between shadow-xl relative group hover:border-slate-700 transition-all"
                            >
                                <div className="space-y-3">
                                    <Quote size={24} className="text-[#f5a623] opacity-80" />
                                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                                        "{item.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center space-x-3 pt-4 mt-4 border-t border-slate-800/60">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-8 h-8 rounded-full object-cover border border-slate-700"
                                    />
                                    <div>
                                        <h4 className="text-xs font-bold text-white">{item.name}</h4>
                                        <p className="text-[10px] text-slate-400">{item.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Carousel Indicators Dots */}
                    <div className="flex items-center justify-center space-x-1.5 pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                        <span className="w-5 h-1.5 rounded-full bg-[#f5a623]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    </div>
                </div>

                {/* --- 3. CALL TO ACTION BANNER --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 sm:p-8 text-center overflow-hidden border border-slate-800 bg-gradient-to-b from-[#0a101d] to-[#040812]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-xl mx-auto space-y-3">
                        <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                            Ready to Be Our Next <span className="text-[#f5a623]">Success Story</span>?
                        </h2>
                        <p className="text-xs text-slate-300 font-normal">
                            Let's build a marketing strategy that drives real results for your businesses.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <Link to="/contact" className="flex items-center space-x-2 bg-[#f5a623] hover:bg-amber-500 text-slate-950 font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                                <span>Book a Free Strategy Call</span>
                                <ArrowRight size={14} />
                            </Link>

                            <button onClick={openAuditModal} className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all active:scale-95 shadow-md cursor-pointer">
                                <span>Get a Free Marketing Audit</span>
                                <ArrowRight size={14} className="text-[#f5a623]" />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}