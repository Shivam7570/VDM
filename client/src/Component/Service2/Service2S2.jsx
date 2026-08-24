import React from 'react';
import {
    Code,
    Building2,
    ShoppingCart,
    Megaphone,
    Users,
    Cpu,
    Layout,
    Headphones,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const servicesData = [
    {
        icon: <Code className="w-10 h-10 text-white" />,
        title: "Web & Software Development",
        bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-500/30"
    },
    {
        icon: <Building2 className="w-10 h-10 text-white" />,
        title: "Real Estate Technology",
        bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-500/30"
    },
    {
        icon: <ShoppingCart className="w-10 h-10 text-white" />,
        title: "Marketplace Solutions",
        bgColor: "bg-gradient-to-br from-amber-500 to-orange-600 border-orange-500/30"
    },
    {
        icon: <Megaphone className="w-10 h-10 text-white" />,
        title: "Digital Marketing",
        bgColor: "bg-gradient-to-br from-purple-600 to-pink-600 border-purple-500/30"
    },
    {
        icon: <Users className="w-10 h-10 text-white" />,
        title: "Lead Generation & CRM",
        bgColor: "bg-gradient-to-br from-sky-500 to-blue-600 border-sky-500/30"
    },
    {
        icon: <Cpu className="w-10 h-10 text-white" />,
        title: "AI & Automation",
        bgColor: "bg-gradient-to-br from-violet-600 to-purple-800 border-violet-500/30"
    },
    {
        icon: <Layout className="w-10 h-10 text-white" />,
        title: "UI/UX Design",
        bgColor: "bg-gradient-to-br from-rose-500 to-red-600 border-rose-500/30"
    },
    {
        icon: <Headphones className="w-10 h-10 text-white" />,
        title: "Support & Maintenance",
        bgColor: "bg-gradient-to-br from-cyan-600 to-blue-700 border-cyan-500/30"
    }
];

export default function Service2S2() {
    return (
        <div className="w-full bg-[#a3a6b6] pt-12 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Services Cards Grid with Unique Card Colors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`${service.bgColor} border text-white rounded-2xl p-8 shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[220px]`}
                        >
                            <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-inner">
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-lg sm:text-xl text-white leading-snug">
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Pagination & Carousel Controls */}
                <div className="flex items-center justify-center space-x-3">
                    <button className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-600/30">
                        01
                    </button>
                    <button className="w-9 h-9 rounded-full bg-transparent border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 flex items-center justify-center font-bold text-sm transition-colors">
                        02
                    </button>

                    <div className="flex items-center space-x-2 ml-4">
                        <button className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}