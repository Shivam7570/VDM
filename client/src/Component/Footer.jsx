import React from 'react';
import { Link } from 'react-router-dom';
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

// Custom Instagram SVG
const InstagramIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="w-full bg-[#030712] text-white pt-12 pb-6 px-6 md:px-12 font-sans border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10">

                    {/* Column 1: Brand & Description */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* Logo */}
                        <div className="flex justify-start items-center gap-3">
                            <img
                                src={logoImg}
                                alt="VDIGIMARKS Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-xs leading-relaxed">
                            We are a performance marketing agency specializing in Real Estate Marketing and Marketplace Marketing.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2 pt-1">
                            {/* Facebook Link */}
                            <a
                                href="https://www.facebook.com/share/1D8VvCAn9d/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                                aria-label="Facebook"
                            >
                                <FacebookIcon className="w-3.5 h-3.5" />
                            </a>

                            {/* Instagram Link */}
                            <a
                                href="https://www.instagram.com/vdigimarks?igsi=ZTlhY3lmbzlma3Zx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <InstagramIcon className="w-3.5 h-3.5" />
                            </a>

                            {/* LinkedIn Link */}
                            <a
                                href="https://www.linkedin.com/company/vdigimarks/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon className="w-3.5 h-3.5" />
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
                            <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                            <li><Link to="/service" className="hover:text-amber-400 transition-colors">Services</Link></li>
                            <li><Link to="/case-studies" className="hover:text-amber-400 transition-colors">Case Studies</Link></li>
                            <li><Link to="/blog" className="hover:text-amber-400 transition-colors">Blog</Link></li>
                            <li><Link to="/request-audit" className="hover:text-amber-400 font-semibold text-amber-500 transition-colors">Request Free Audit</Link></li>
                            <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-white tracking-wide">Contact</h3>
                        <ul className="space-y-3 text-xs text-gray-400">
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                <span>+91 7651909139</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                                <span>info@vdigimarks.in</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                                <span>C-70, Sector 63 Noida, Uttar Pradesh – 201301, India</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <p>© 2026 Vdigimarks. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}