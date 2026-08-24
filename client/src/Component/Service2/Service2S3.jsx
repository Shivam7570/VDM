import React from 'react';
import {
    MessageSquare,
    Lightbulb,
    Settings,
    Rocket,
    ShieldCheck,
    CheckCircle2,
    Users,
    Clock,
    Headphones
} from 'lucide-react';

const processSteps = [
    {
        step: "1",
        icon: <MessageSquare className="w-10 h-10 text-amber-600" />,
        title: "Discover",
        description: "We understand your goals, challenges, and requirements."
    },
    {
        step: "2",
        icon: <Lightbulb className="w-10 h-10 text-amber-600" />,
        title: "Plan",
        description: "We create a strategy and roadmap tailored to your needs."
    },
    {
        step: "3",
        icon: <Settings className="w-10 h-10 text-amber-600" />,
        title: "Build",
        description: "We design, develop, and test with precision and quality."
    },
    {
        step: "4",
        icon: <Rocket className="w-10 h-10 text-amber-600" />,
        title: "Launch & Grow",
        description: "We launch, optimize, and support your growth journey."
    }
];

const featuresData = [
    {
        icon: <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />,
        title: "Result Driven",
        description: "We focus on measurable results that grow your business."
    },
    {
        icon: <Users className="w-5 h-5 text-amber-600 shrink-0" />,
        title: "Expert Team",
        description: "Skilled professionals passionate about technology."
    },
    {
        icon: <Clock className="w-5 h-5 text-amber-600 shrink-0" />,
        title: "On-Time Delivery",
        description: "We deliver quality work within deadlines you can trust."
    },
    {
        icon: <Headphones className="w-5 h-5 text-amber-600 shrink-0" />,
        title: "Long-Term Support",
        description: "We're with you even after launch to ensure continued success."
    }
];

export default function Service2S3() {
    return (
        <div className="w-full bg-white text-slate-900 py-6 px-0 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Top Header: How We Work */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="flex items-center justify-center space-x-3 text-amber-600 text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-2">
                        <span className="w-8 h-[1px] bg-amber-300"></span>
                        <span>OUR PROCESS</span>
                        <span className="w-8 h-[1px] bg-amber-300"></span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 text-slate-900">
                        How We <span className="text-amber-600">Work</span>
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        A simple, transparent process to turn your ideas into powerful digital solutions.
                    </p>
                </div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
                    {processSteps.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative">

                            {/* Icon Circle */}
                            <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center mb-4 relative z-10 border border-slate-100 ring-4 ring-slate-50">
                                {item.icon}
                                {/* Number Badge */}
                                <span className="absolute -bottom-1 w-5 h-5 bg-amber-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow">
                                    {item.step}
                                </span>
                            </div>

                            {/* Step Title & Description */}
                            <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Why Choose Vdigimarks Container */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-md relative overflow-hidden">

                    {/* Header Inside Card */}
                    <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
                        <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-amber-600" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                            Why Choose <span className="text-amber-600">Vdigimarks?</span>
                        </h3>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="bg-white border border-slate-200/60 rounded-lg p-4 flex flex-col justify-between shadow-sm">
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        {feature.icon}
                                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">{feature.title}</h4>
                                    </div>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}