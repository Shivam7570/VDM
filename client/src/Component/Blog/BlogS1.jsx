import React from "react";
import { ArrowRight } from "lucide-react";

import abouthero from '../../assets/blogHero.png'

export default function BlogS1() {
    return (
        <section className="relative bg-gradient-to-r from-[#f7ebd4] via-[#fbf3e4] to-[#f4e3c3] py-12 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="space-y-5 text-left">
                    <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
                        OUR BLOG
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#09101d] leading-tight">
                        Insights. Strategies. <br />
                        <span className="text-amber-600">Measurable Growth.</span>
                    </h1>
                    <p className="text-stone-600 text-sm sm:text-base max-w-lg leading-relaxed">
                        Expert insights, proven strategies and actionable tips on Real Estate
                        Marketing &amp; Marketplace Growth to help your business grow faster.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <button
                            onClick={() => document.getElementById("blog-s2")?.scrollIntoView({ behavior: "smooth" })}
                            className="flex items-center space-x-2 bg-[#09101d] hover:bg-[#14213d] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                        >
                            <span>Get Free Marketing Audit</span>
                            <ArrowRight size={15} />
                        </button>
                        <button
                            onClick={() => document.getElementById("blog-s2")?.scrollIntoView({ behavior: "smooth" })}
                            className="flex items-center space-x-2 bg-transparent hover:bg-amber-500/10 border border-amber-800/30 text-stone-900 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all cursor-pointer"
                        >
                            <span>Book a Strategy Call</span>
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </div>

                {/* Right Hero Graphics */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md lg:max-w-lg">
                        <img
                            src={abouthero}
                            alt="Blog Insights Workspace"
                            className=" object-cover w-full h-[320px] sm:h-[380px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}