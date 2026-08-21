import React from "react";
import {
    ArrowRight,
    Briefcase,
    Star,
    Globe,
    Activity,
    Target,
    Users,
    TrendingUp
} from "lucide-react";
import aboutHero from '../../assets/AboutHero.png'

export default function HomeAS() {
    return (
        <section className="relative bg-[#070b14] text-white pt-6 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans">
            {/* Top Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto mb-8 text-xs text-stone-400 flex items-center gap-1.5">
                <span className="hover:text-white cursor-pointer transition-colors">Home</span>
                <span>&gt;</span>
                <span className="text-stone-300 font-medium">About Us</span>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Text Column */}
                <div className="lg:col-span-6 space-y-6">
                    {/* Section Tag */}
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-amber-500 inline-block" />
                        <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                            ABOUT VDIGIMARKS
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                        We Drive Growth. <br />
                        You Get <span className="text-amber-500">Results.</span>
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                        VDigimarks is a performance-focused digital marketing agency specializing in Real Estate Marketing and Marketplace Marketing. We help businesses generate qualified leads, increase sales and build a strong digital presence that delivers measurable growth.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
                            <span>Book a Free Strategy Call</span>
                            <ArrowRight size={16} />
                        </button>

                        <button className="bg-transparent border border-stone-700 hover:border-amber-500/50 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all">
                            Get a Free Marketing Audit
                        </button>
                    </div>

                    {/* Social Proof / Trust Badges */}
                    <div className="flex items-center gap-4 pt-4">
                        <div className="flex -space-x-2 overflow-hidden">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070b14] object-cover"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                                alt="User"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070b14] object-cover"
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                                alt="User"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070b14] object-cover"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                                alt="User"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070b14] object-cover"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                                alt="User"
                            />
                        </div>
                        <p className="text-xs text-stone-300 leading-snug">
                            <span className="font-semibold text-white">Trusted by real estate brands</span>
                            <br />
                            and marketplace sellers
                        </p>
                    </div>
                </div>

                {/* Right Visual Image & Graphic Section */}
                <div className="lg:col-span-6 relative flex justify-center items-center min-h-[420px]">
                    {/* Glowing Circular Ring Graphics */}
                    <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-amber-500/20 flex items-center justify-center animate-pulse">
                        <div className="w-[85%] h-[85%] rounded-full border border-amber-500/10" />
                    </div>

                    {/* Floating Circular Feature Icons */}
                    <div className="absolute top-4 left-6 sm:left-12 p-3 bg-stone-900/80 border border-stone-800 rounded-full text-amber-400 backdrop-blur-md shadow-lg z-20">
                        <TrendingUp size={20} />
                    </div>
                    <div className="absolute top-10 right-4 sm:right-8 p-3 bg-stone-900/80 border border-stone-800 rounded-full text-amber-400 backdrop-blur-md shadow-lg z-20">
                        <Target size={20} />
                    </div>
                    <div className="absolute bottom-16 right-0 sm:right-4 p-3 bg-stone-900/80 border border-stone-800 rounded-full text-amber-400 backdrop-blur-md shadow-lg z-20">
                        <Users size={20} />
                    </div>

                    {/* Main Building Image */}
                    <div className="relative z-10 w-full max-w-md  overflow-hidden ">
                        <img
                            src={aboutHero}
                            alt="Modern Luxury Building Architecture"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom 4 Feature Cards */}
            <div className="max-w-7xl mx-auto mt-16">
                <div className="bg-[#0b1222] border border-stone-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 shadow-2xl">
                    {/* Feature 1 */}
                    <div className="space-y-3 sm:border-r sm:border-stone-800/80 sm:pr-6 last:border-r-0">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <Briefcase size={20} />
                        </div>
                        <h3 className="text-base font-bold text-white">Growth Focused</h3>
                        <p className="text-xs text-stone-400 leading-relaxed">
                            We focus on what really matters — your business growth.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-3 lg:border-r lg:border-stone-800/80 sm:pr-6 last:border-r-0">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <Star size={20} />
                        </div>
                        <h3 className="text-base font-bold text-white">Client First</h3>
                        <p className="text-xs text-stone-400 leading-relaxed">
                            Long-term partnerships built on trust, transparency and performance.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-3 sm:border-r sm:border-stone-800/80 sm:pr-6 last:border-r-0">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <Globe size={20} />
                        </div>
                        <h3 className="text-base font-bold text-white">360° Digital Marketing</h3>
                        <p className="text-xs text-stone-400 leading-relaxed">
                            End-to-end solutions across real estate and leading marketplaces.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <Activity size={20} />
                        </div>
                        <h3 className="text-base font-bold text-white">Performance Driven</h3>
                        <p className="text-xs text-stone-400 leading-relaxed">
                            Data-led strategies that deliver measurable and scalable results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}