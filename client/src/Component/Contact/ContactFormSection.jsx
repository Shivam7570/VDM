import React, { useState } from "react";
import {
    User,
    Mail,
    Phone,
    Building2,
    Send,
    MapPin,
    Globe,
    ChevronDown,
} from "lucide-react";

import { submitContactForm } from "../../services/api";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            await submitContactForm({
                name: formData.fullName || "Anonymous User",
                email: formData.email,
                phone: formData.phone,
                subject: formData.service || formData.company || "Contact Inquiry",
                message: formData.message || "No message provided",
            });
            setIsSubmitted(true);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: "",
            });
        } catch (error) {
            console.error("Failed to submit contact form:", error);
            setErrorMessage(error.message || "Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#fcf7ee] py-12 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                {/* Left Column: Send Us a Message Form Card */}
                <div className="lg:col-span-7 bg-[#161719] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                    <div className="space-y-6">
                        {/* Form Title & Subtitle */}
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Send Us a Message
                            </h2>
                            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md">
                                Fill out the form and our team will get back to you with the
                                best solution for your business.
                            </p>
                        </div>

                        {/* Notification Banners */}
                        {isSubmitted && (
                            <div className="p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs sm:text-sm font-medium animate-fadeIn">
                                ✓ Thank you! Your message has been saved successfully to our database.
                            </div>
                        )}
                        {errorMessage && (
                            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-xs sm:text-sm font-medium animate-fadeIn">
                                ⚠ {errorMessage}
                            </div>
                        )}

                        {/* Form Fields */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Full Name */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-stone-300">
                                        Full Name <span className="text-amber-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <User
                                            size={15}
                                            className="absolute left-3.5 top-3.5 text-amber-500"
                                        />
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#1e2023] border border-stone-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-stone-300">
                                        Email Address <span className="text-amber-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail
                                            size={15}
                                            className="absolute left-3.5 top-3.5 text-amber-500"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#1e2023] border border-stone-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Phone Number */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-stone-300">
                                        Phone Number <span className="text-amber-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone
                                            size={15}
                                            className="absolute left-3.5 top-3.5 text-amber-500"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#1e2023] border border-stone-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Company / Brand Name */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-stone-300">
                                        Company / Brand Name
                                    </label>
                                    <div className="relative">
                                        <Building2
                                            size={15}
                                            className="absolute left-3.5 top-3.5 text-amber-500"
                                        />
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Enter your company name"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full bg-[#1e2023] border border-stone-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Service Interested In */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-stone-300">
                                    Service Interested In <span className="text-amber-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#1e2023] border border-stone-800 rounded-xl py-2.5 px-4 text-xs text-stone-300 focus:outline-none focus:border-amber-500 appearance-none transition-colors cursor-pointer"
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option value="real-estate">Real Estate Marketing</option>
                                        <option value="marketplace">Marketplace Marketing</option>
                                        <option value="seo-ads">SEO &amp; Performance Ads</option>
                                    </select>
                                    <ChevronDown
                                        size={16}
                                        className="absolute right-3.5 top-3 text-stone-400 pointer-events-none"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-stone-300">
                                    Message <span className="text-amber-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your project or requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#1e2023] border border-stone-800 rounded-xl p-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2 flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
                                >
                                    <span>Send Message</span>
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-amber-600">
                                        <Send size={12} />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Column: Contact Information Card */}
                <div className="lg:col-span-5 bg-[#fffaf2] border border-amber-200/60 rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden">
                    {/* Subtle World Map Watermark Overlay */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:8px_8px]" />

                    <div className="space-y-8 relative z-10">
                        {/* Header */}
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-stone-900">
                                Contact Information
                            </h3>
                            <div className="w-10 h-1 bg-amber-500 rounded-full" />
                        </div>

                        {/* Details Timeline List */}
                        <div className="space-y-6 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-[1px] before:bg-amber-300/60">
                            {/* Phone */}
                            <div className="flex items-start space-x-4 relative">
                                <div className="w-10 h-10 rounded-full bg-amber-200/70 border border-amber-300 flex items-center justify-center text-stone-900 shrink-0 z-10">
                                    <Phone size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs font-bold text-stone-900">Phone</h4>
                                    <a
                                        href="tel:+917651909139"
                                        className="text-sm font-extrabold text-stone-800 hover:text-amber-600 transition-colors"
                                    >
                                        +91 7651909139
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4 relative">
                                <div className="w-10 h-10 rounded-full bg-amber-200/70 border border-amber-300 flex items-center justify-center text-stone-900 shrink-0 z-10">
                                    <Mail size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs font-bold text-stone-900">Email</h4>
                                    <a
                                        href="mailto:info@vdigimarks.in"
                                        className="text-sm font-extrabold text-stone-800 hover:text-amber-600 transition-colors block"
                                    >
                                        info@vdigimarks.in
                                    </a>
                                    <p className="text-[11px] text-stone-500">
                                        We reply within 24 hours
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start space-x-4 relative">
                                <div className="w-10 h-10 rounded-full bg-amber-200/70 border border-amber-300 flex items-center justify-center text-stone-900 shrink-0 z-10">
                                    <MapPin size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs font-bold text-stone-900">Location</h4>
                                    <p className="text-xs font-bold text-stone-800">
                                        C-70, Sector 63 Noida, Uttar Pradesh – 201301, India
                                    </p>
                                    <p className="text-[11px] text-stone-500">
                                        Serving clients across India &amp; Globally
                                    </p>
                                </div>
                            </div>

                            {/* Website */}
                            <div className="flex items-start space-x-4 relative">
                                <div className="w-10 h-10 rounded-full bg-amber-200/70 border border-amber-300 flex items-center justify-center text-stone-900 shrink-0 z-10">
                                    <Globe size={18} />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs font-bold text-stone-900">Website</h4>
                                    <a
                                        href="https://www.vdigimarks.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-stone-800 hover:text-amber-600 transition-colors"
                                    >
                                        www.vdigimarks.in
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Connections */}
                        <div className="pt-4 space-y-3">
                            <h4 className="text-xs font-bold text-stone-900">Connect With Us</h4>
                            <div className="flex items-center space-x-3">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/vdigimarks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-500 hover:text-white text-stone-800 flex items-center justify-center transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/vdigimarks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-500 hover:text-white text-stone-800 flex items-center justify-center transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/vdigimarks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-500 hover:text-white text-stone-800 flex items-center justify-center transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* YouTube */}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}