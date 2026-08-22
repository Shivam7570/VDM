import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import BlogHero from "../../assets/blogHero.png";

export default function BlogS1() {
    return (
        <section className="bg-[#faf6ef] text-[#09101d] pt-28 pb-14 px-6 sm:px-12 font-sans relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Content Column */}
                <div className="space-y-5 text-left">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold">
                        <span>VDigimarks Knowledge Hub</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#09101d] leading-tight">
                        Insights. Strategies. <br />
                        <span className="text-amber-600">Measurable Growth.</span>
                    </h1>
                    <p className="text-stone-600 text-sm sm:text-base max-w-lg leading-relaxed">
                        Expert insights, proven strategies and actionable tips on Real Estate
                        Marketing &amp; Marketplace Growth to help your business grow faster.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                            to="/request-audit"
                            className="flex items-center space-x-2 bg-[#09101d] hover:bg-[#14213d] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                        >
                            <span>Get Free Marketing Audit</span>
                            <ArrowRight size={15} />
                        </Link>
                        <Link
                            to="/contact"
                            className="flex items-center space-x-2 bg-transparent hover:bg-amber-500/10 border border-amber-800/30 text-stone-900 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all cursor-pointer"
                        >
                            <span>Book a Strategy Call</span>
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>

                {/* Right Hero Graphics */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md lg:max-w-lg">
                        <img
                            src={BlogHero}
                            alt="Blog Insights Workspace"
                            className="object-cover w-full h-[320px] sm:h-[380px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}