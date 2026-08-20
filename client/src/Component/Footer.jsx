import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
// Import your logo here if using local assets, e.g.:
import logoImg from '../assets/LogoVDM.png';

// Custom Facebook SVG
const FacebookIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

// Custom LinkedIn SVG
const LinkedinIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
);

// Custom YouTube SVG
const YoutubeIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="w-full bg-[#030712] text-white pt-12 pb-6 px-6 md:px-12 font-sans border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10">

                    {/* Column 1: Brand & Description */}
                    <div className="lg:col-span-1   space-y-4">
                        {/* Logo */}
                        <div className="flex justify-center items-center gap-3">
                            <img
                                src={logoImg}
                                alt="VDIGIMARKS Logo"
                                className="h-12 hover:text-white w-auto object-contain"
                            />

                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-xs leading-relaxed">
                            We are a performance marketing agency specializing in Real Estate Marketing and Marketplace Marketing.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2 pt-1">
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                                <FacebookIcon className="w-3.5 h-3.5" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors font-semibold text-xs">
                                in
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                                <LinkedinIcon className="w-3.5 h-3.5" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                                <YoutubeIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-white tracking-wide">Services</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Real Estate Marketing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Marketplace Marketing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Lead Generation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Social Media Marketing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Website Development</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Marketplaces */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-white tracking-wide">Marketplaces</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Amazon</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Walmart</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Flipkart</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">eBay</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">TikTok Shop</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Temu</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Quick Commerce</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-white tracking-wide">Company</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-white tracking-wide">Contact</h3>
                        <ul className="space-y-3 text-xs text-gray-400">
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                <span>+91 9217579077</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                                <span>hello@vdigimarks.com</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                                <span>C-70, C Block, Sector 63, Uttar Pradesh – 201301</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <p>© 2026 VDigimarks. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}