import React, { useState } from 'react';
import { ArrowRight, ChevronDown, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAudit } from '../../context/AuditContext';

export default function HeroSection() {
    const [hoveredPoint, setHoveredPoint] = useState(null);
    const { openAuditModal } = useAudit();

    const chartData = [
        { label: 'Week 1', value: 520, x: 5, y: 40 },
        { label: 'Mid W1', value: 850, x: 20, y: 28 },
        { label: 'Week 2', value: 720, x: 38, y: 33 },
        { label: 'Mid W2', value: 1050, x: 55, y: 20 },
        { label: 'Week 3', value: 980, x: 72, y: 22 },
        { label: 'Week 4', value: 1284, x: 95, y: 8 },
    ];

    return (
        <section className="relative w-full min-h-screen lg:h-screen bg-[#070b14] text-white flex items-center justify-center py-16 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden font-sans">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center lg:bg-right opacity-20 lg:opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop')`,
                }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#070b14] via-[#070b14]/90 to-[#070b14]/70 lg:to-transparent pointer-events-none" />

            {/* Main Grid Container */}
            <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center pt-6 lg:pt-0">

                {/* Left Column */}
                <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">
                        Performance Marketing For Real Estate Brands
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                        Real Estate <span className="text-[#f5a623]">Marketing</span> <br className="hidden sm:inline" />
                        That Turns Attention Into <br className="hidden sm:inline" />
                        <span className="text-[#f5a623]">Qualified Leads</span>
                    </h1>

                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                        We help developers, builders and real estate brands generate qualified enquiries, promote projects and build a powerful digital presence that drives measurable growth.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
                        <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#f5a623] hover:bg-[#d98f19] text-[#070b14] font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all shadow-md">
                            <span>Book a Free Strategy Call</span>
                            <ArrowRight size={14} strokeWidth={3} />
                        </button>

                        <button onClick={openAuditModal} className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg border border-amber-500/40 transition-all cursor-pointer">
                            <span>Get a Free Marketing Audit</span>
                            <ArrowRight size={14} className="text-slate-300" />
                        </button>
                    </div>

                    {/* Feature Icons Bar */}
                    <div className="pt-6 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-2 items-center text-center max-w-lg w-full">
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-300">Qualified Leads</span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5 sm:border-l sm:border-slate-800">
                            <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-300">Lower CPL</span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5 sm:border-l sm:border-slate-800">
                            <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-300">Project Promotion</span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5 sm:border-l sm:border-slate-800">
                            <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-300">Brand Presence</span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5 sm:border-l sm:border-slate-800 col-span-2 sm:col-span-1">
                            <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-300">Data-Driven</span>
                        </div>
                    </div>
                </div>

                {/* Right Column (Dashboard Card) */}
                <div className="lg:col-span-5 flex justify-center w-full">
                    <div className="w-full max-w-sm bg-[#0a121e]/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3">

                        <h3 className="text-center text-[10px] font-bold text-slate-200 tracking-widest uppercase">
                            Real Estate Growth
                        </h3>

                        {/* Total Leads */}
                        <div className="bg-[#0e1929] border border-slate-800/80 rounded-xl p-3 flex items-center justify-between">
                            <div className="p-2 rounded-lg bg-amber-500/10 text-[#f5a623]">
                                <TrendingUp size={18} />
                            </div>
                            <div className="text-right">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                                    Leads Generated
                                </span>
                                <span className="text-2xl font-extrabold text-white tracking-tight">
                                    1,284
                                </span>
                                <div className="flex items-center justify-end space-x-1 text-[10px] text-emerald-400">
                                    <span className="font-bold">▲ 38.6%</span>
                                    <span className="text-slate-400">vs last 30 days</span>
                                </div>
                            </div>
                        </div>

                        {/* Breakdown Cards */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[#0e1929] border border-slate-800/80 rounded-xl p-2 text-center flex flex-col items-center justify-between h-20">
                                <span className="text-[10px] text-slate-300 font-medium">Google Ads</span>
                                <span className="text-lg font-bold text-white">42%</span>
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                </svg>
                            </div>

                            <div className="bg-[#0e1929] border border-slate-800/80 rounded-xl p-2 text-center flex flex-col items-center justify-between h-20">
                                <span className="text-[10px] text-slate-300 font-medium">Meta Ads</span>
                                <span className="text-lg font-bold text-white">35%</span>
                                <svg className="w-4 h-4 text-[#0081FB] fill-current" viewBox="0 0 24 24">
                                    <path d="M12 6.865c-2.012 0-3.693 1.258-4.887 2.842C5.783 7.925 4.148 6.865 2.25 6.865 1.007 6.865 0 7.872 0 9.115v5.77C0 16.128 1.007 17.135 2.25 17.135c1.898 0 3.533-1.06 4.863-2.842 1.194 1.584 2.875 2.842 4.887 2.842 2.012 0 3.693-1.258 4.887-2.842 1.33 1.782 2.965 2.842 4.863 2.842 1.243 0 2.25-1.007 2.25-2.25v-5.77c0-1.243-1.007-2.25-2.25-2.25-1.898 0-3.533 1.06-4.863 2.842C15.693 8.123 14.012 6.865 12 6.865zm-5.25 6.72c-.895 1.21-1.928 1.95-3 1.95-.333 0-.6-.267-.6-.6v-5.77c0-.333.267-.6.6-.6 1.072 0 2.105.74 3 1.95v3.07zm10.5 0c-.895-1.21-1.928-1.95-3-1.95v-3.07c.895-1.21 1.928-1.95 3-1.95.333 0 .6.267.6.6v5.77c0 .333-.267.6-.6.6z" />
                                </svg>
                            </div>

                            <div className="bg-[#0e1929] border border-slate-800/80 rounded-xl p-2 text-center flex flex-col items-center justify-between h-20">
                                <span className="text-[10px] text-slate-300 font-medium">WhatsApp</span>
                                <span className="text-lg font-bold text-white">23%</span>
                                <svg className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                </svg>
                            </div>
                        </div>

                        {/* Performance Graph */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-slate-300">Campaign Performance</span>
                                <div className="flex items-center space-x-1 bg-[#0e1929] border border-slate-800 rounded px-1.5 py-0.5 text-[9px] text-slate-300">
                                    <span>Last 30 Days</span>
                                    <ChevronDown size={10} className="text-slate-400" />
                                </div>
                            </div>

                            <div className="relative h-24 w-full flex flex-col justify-between pt-1">
                                <div className="border-b border-slate-800/60 text-[8px] text-slate-500">1.5K</div>
                                <div className="border-b border-slate-800/60 text-[8px] text-slate-500">1.0K</div>
                                <div className="border-b border-slate-800/60 text-[8px] text-slate-500">0.5K</div>
                                <div className="border-b border-slate-800/60 text-[8px] text-slate-500">0</div>

                                <div className="absolute inset-x-5 top-1 bottom-5">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#f5a623" stopOpacity="0.35" />
                                                <stop offset="100%" stopColor="#f5a623" stopOpacity="0.0" />
                                            </linearGradient>
                                        </defs>

                                        <path
                                            d="M 5 40 Q 20 28, 38 33 T 72 22 L 95 8 L 95 50 L 5 50 Z"
                                            fill="url(#chartGradient)"
                                        />

                                        <path
                                            d="M 5 40 Q 20 28, 38 33 T 72 22 L 95 8"
                                            fill="none"
                                            stroke="#f5a623"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />

                                        {chartData.map((pt, idx) => (
                                            <g key={idx} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(pt)} onMouseLeave={() => setHoveredPoint(null)}>
                                                <circle cx={pt.x} cy={pt.y} r={hoveredPoint?.label === pt.label ? "3" : "1.5"} fill="#f5a623" />
                                                <circle cx={pt.x} cy={pt.y} r="0.8" fill="#ffffff" />
                                            </g>
                                        ))}
                                    </svg>

                                    <div className="absolute top-[-6px] right-[-4px] bg-[#f5a623] text-[#070b14] text-[8px] font-extrabold px-1 rounded shadow">
                                        1,284
                                    </div>
                                </div>

                                <div className="flex justify-between text-[8px] text-slate-500 px-1">
                                    <span>Week 1</span>
                                    <span>Week 2</span>
                                    <span>Week 3</span>
                                    <span>Week 4</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}