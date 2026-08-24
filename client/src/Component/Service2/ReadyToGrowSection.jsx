import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export default function ReadyToGrowSection() {
    return (
        <div className="w-full bg-[#070b14] sm:px-6 lg:px-8 font-sans relative overflow-hidden">
            {/* Background network dots/lines effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>

            {/* Main Card Container with Fully Rounded/Circular Corners */}
            <div className="max-w-7xl mx-auto bg-[#0b1329] border border-blue-950 rounded-full p-8 sm:p-12 shadow-2xl relative overflow-hidden">

                {/* Ambient background glows */}
                <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 px-6 sm:px-12">

                    {/* Left Column: Text & CTA Button */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                            Ready to <span className="text-amber-500">Grow</span> Your Business?
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                            Let's build powerful digital solutions that take your business to the next level.
                        </p>
                        <a
                            href="#get-in-touch"
                            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 group"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Right Column: Circular Rocket Graphic with Entry 360° Spin */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
                            {/* Glowing ring platform */}
                            <div className="absolute bottom-4 w-40 sm:w-52 h-12 bg-blue-600/30 rounded-full blur-md"></div>
                            <div className="absolute bottom-6 w-32 sm:w-40 h-8 bg-blue-400/40 rounded-full blur-sm animate-pulse"></div>

                            {/* Circular Rocket Icon Container with entry 360 deg spin animation */}
                            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center border border-blue-400/30 animate-[spin_1s_ease-out_1]">
                                <Rocket className="w-14 h-14 sm:w-20 sm:h-20 text-white drop-shadow-md" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}