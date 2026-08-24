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
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const servicesData = [
    {
        icon: <Code className="w-5 h-5 text-blue-600" />,
        title: "Web & Software Development",
        description: "Custom websites, web applications, and software solutions built for performance and scalability."
    },
    {
        icon: <Building2 className="w-5 h-5 text-blue-600" />,
        title: "Real Estate Technology",
        description: "Digital solutions for real estate businesses to list, manage, and grow effortlessly."
    },
    {
        icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
        title: "Marketplace Solutions",
        description: "Feature-rich multi-vendor marketplaces that connect buyers and sellers seamlessly."
    },
    {
        icon: <Megaphone className="w-5 h-5 text-blue-600" />,
        title: "Digital Marketing",
        description: "Data-driven marketing strategies that boost brand visibility, engage audiences, and deliver ROI."
    },
    {
        icon: <Users className="w-5 h-5 text-blue-600" />,
        title: "Lead Generation & CRM",
        description: "High-quality lead generation and CRM systems to convert leads into loyal customers."
    },
    {
        icon: <Cpu className="w-5 h-5 text-blue-600" />,
        title: "AI & Automation",
        description: "Smart automation and AI-driven solutions to streamline operations and maximize efficiency."
    },
    {
        icon: <Layout className="w-5 h-5 text-blue-600" />,
        title: "UI/UX Design",
        description: "Creative, user-friendly designs that deliver seamless and engaging digital experiences."
    },
    {
        icon: <Headphones className="w-5 h-5 text-blue-600" />,
        title: "Support & Maintenance",
        description: "Reliable support and maintenance to keep your digital products secure and up to date."
    }
];

export default function Service2S2() {
    return (
        <div className="w-full bg-amber-50 pt-4 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Services Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white text-slate-900 rounded-xl p-5 shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-bold text-base text-slate-900 leading-snug">{service.title}</h3>
                                </div>
                                <p className="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <a
                                href="#learn-more"
                                className="inline-flex items-center text-blue-600 font-semibold text-xs sm:text-sm hover:text-blue-800 transition-colors group"
                            >
                                Learn More
                                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                            </a>
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