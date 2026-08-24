import React, { useState } from 'react';
import { submitContactForm } from '../../services/api';
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
    ChevronRight,
    X,
    Send,
    Sparkles
} from 'lucide-react';

const servicesData = [
    {
        icon: <Code className="w-9 h-9 text-blue-600" />,
        title: "Web & Software Development"
    },
    {
        icon: <Building2 className="w-9 h-9 text-emerald-600" />,
        title: "Real Estate Technology"
    },
    {
        icon: <ShoppingCart className="w-9 h-9 text-amber-600" />,
        title: "Marketplace Solutions"
    },
    {
        icon: <Megaphone className="w-9 h-9 text-purple-600" />,
        title: "Digital Marketing"
    },
    {
        icon: <Users className="w-9 h-9 text-sky-600" />,
        title: "Lead Generation & CRM"
    },
    {
        icon: <Cpu className="w-9 h-9 text-violet-600" />,
        title: "AI & Automation"
    },
    {
        icon: <Layout className="w-9 h-9 text-rose-600" />,
        title: "UI/UX Design"
    },
    {
        icon: <Headphones className="w-9 h-9 text-cyan-600" />,
        title: "Support & Maintenance"
    }
];

export default function Service2S2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Web & Software Development',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await submitContactForm({
                name: formData.name || 'Anonymous User',
                email: formData.email,
                phone: formData.phone,
                subject: `Service Request: ${formData.service}`,
                message: formData.message || `Interested in ${formData.service}`
            });
            alert('Thank you! Your request has been saved successfully.');
            setIsModalOpen(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: 'Web & Software Development',
                message: ''
            });
        } catch (err) {
            console.error('Failed to submit service inquiry:', err);
            alert('Failed to submit request: ' + (err.message || 'Server error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-white  p-6 px-4 sm:px-6 lg:px-8 font-sans relative">
            <div className="max-w-7xl mx-auto">

                {/* Services Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-200 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[220px] group"
                        >
                            <div className="mb-5 p-4 bg-white rounded-2xl flex items-center justify-center shadow-md shadow-slate-200/50 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-semibold text-base sm:text-lg text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Fully Responsive Bottom Bar Container */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">

                    {/* Pagination & Carousel Controls */}
                    <div className="flex items-center justify-center space-x-3 w-full sm:w-auto">
                        <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-600/30 hover:scale-105 transition-transform">
                            01
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 flex items-center justify-center font-bold text-sm shadow-sm transition-all">
                            02
                        </button>

                        <div className="flex items-center space-x-2 ml-4">
                            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Use Our Services Trigger Button */}
                    <div className="flex justify-center w-full sm:w-auto">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 text-base flex items-center space-x-3 cursor-pointer"
                        >
                            <span>Use Our Services</span>
                            <Sparkles className="w-5 h-5 text-amber-300" />
                        </button>
                    </div>

                </div>

            </div>

            {/* Glassmorphic Transparent Popup Form */}
            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-md p-4 animate-fadeIn cursor-pointer"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden cursor-default"
                    >
                        {/* Ambient decorative glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Close / Cancel Button */}
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close modal"
                            className="absolute top-4 right-4 z-20 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md p-1.5 rounded-full transition-all border border-white/10 cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="mb-4 relative z-10 pr-6">
                            <h3 className="text-xl font-bold text-white tracking-tight">Get Started With Us</h3>
                            <p className="text-slate-300 text-xs mt-0.5">
                                Enter your details and our experts will connect with you.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                            <div>
                                <label className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:bg-white/15 text-white placeholder-slate-400 text-xs focus:outline-none transition-all shadow-inner"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider mb-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:bg-white/15 text-white placeholder-slate-400 text-xs focus:outline-none transition-all shadow-inner"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+91 98765..."
                                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:bg-white/15 text-white placeholder-slate-400 text-xs focus:outline-none transition-all shadow-inner"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider mb-1">Select Service</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg bg-slate-900/80 border border-white/20 focus:border-blue-400 text-white text-xs focus:outline-none transition-all"
                                >
                                    {servicesData.map((s, idx) => (
                                        <option key={idx} value={s.title} className="bg-slate-900 text-white">
                                            {s.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider mb-1">Project Details</label>
                                <textarea
                                    rows="2"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Briefly describe your project..."
                                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:bg-white/15 text-white placeholder-slate-400 text-xs focus:outline-none transition-all resize-none shadow-inner"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-2.5 px-4 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center space-x-2 text-xs border border-blue-400/30 cursor-pointer"
                            >
                                <span>Submit Request</span>
                                <Send className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}