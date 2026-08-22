import React, { useState } from 'react';
import { X, FileText, Send, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestAuditModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        service: 'Real Estate Marketing',
        goals: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1000);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg bg-[#0b1329] border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 z-10"
                    aria-label="Close modal"
                >
                    <X size={18} />
                </button>

                {isSubmitted ? (
                    <div className="flex flex-col items-center text-center py-8 space-y-4">
                        <div className="p-3.5 rounded-full bg-emerald-500/20 text-emerald-400 animate-bounce">
                            <CheckCircle2 size={44} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Audit Request Received!</h3>
                        <p className="text-stone-300 text-xs sm:text-sm max-w-xs leading-relaxed">
                            Thank you, <strong className="text-amber-400">{formData.name}</strong>! Our growth team will inspect your details and send your custom audit report within 24-48 hours.
                        </p>
                        <div className="pt-2 flex flex-col sm:flex-row gap-2.5 w-full">
                            <button
                                onClick={handleClose}
                                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
                            >
                                Close Window
                            </button>
                            <Link
                                to="/request-audit"
                                onClick={handleClose}
                                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs flex items-center justify-center space-x-1 transition-all"
                            >
                                <span>Full Audit Page</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                                <FileText className="text-amber-400" size={22} />
                                Request Free Marketing Audit
                            </h3>
                            <p className="text-xs text-stone-400 mt-1">
                                Get a tailored 360° analysis of your digital ads & website performance.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Rahul Sharma"
                                    className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="rahul@company.com"
                                        className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1">
                                        Phone / WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1">
                                    Website or Social Link
                                </label>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    placeholder="https://..."
                                    className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1">
                                    Service Interest
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors text-xs"
                                >
                                    <option value="Real Estate Marketing">Real Estate Marketing</option>
                                    <option value="Marketplace Marketing">Marketplace Ads (Amazon/Flipkart)</option>
                                    <option value="Performance Ads">Meta & Google Ads Audit</option>
                                    <option value="SEO & Web">SEO & Web Development</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1">
                                    Goal / Main Challenge
                                </label>
                                <textarea
                                    name="goals"
                                    rows="2"
                                    value={formData.goals}
                                    onChange={handleInputChange}
                                    placeholder="Tell us what you want to achieve..."
                                    className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-xs resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-stone-950 font-bold py-2.5 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 text-xs mt-2 uppercase tracking-wider cursor-pointer"
                            >
                                {isSubmitting ? (
                                    <span>Processing...</span>
                                ) : (
                                    <>
                                        <span>Submit Audit Request</span>
                                        <Send size={14} />
                                    </>
                                )}
                            </button>

                            <div className="flex items-center justify-between text-[10px] text-stone-400 pt-1">
                                <span className="flex items-center gap-1">
                                    <ShieldCheck size={12} className="text-emerald-400" />
                                    100% Free & Secure
                                </span>
                                <span className="flex items-center gap-1">
                                    <Zap size={12} className="text-amber-400" />
                                    Response in 24h
                                </span>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
