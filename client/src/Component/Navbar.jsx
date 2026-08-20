import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown, Sparkles, ArrowUpRight } from "lucide-react";

import logo from "../assets/LogoVDM.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const location = useLocation();

    const lastScrollY = useRef(0);

    // Dynamic Scroll Behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 20);

            if (currentScrollY > 100 && currentScrollY > lastScrollY.current && !open) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [open]);

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location]);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT VDM", href: "/about" },
        { name: "SERVICES", href: "#" },
        { name: "CASE STUDIES", href: "/case-studies" },
        { name: "PORTFOLIO", href: "/portfolio" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <>
            <style>{`
                @keyframes logo3DSpin {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
                .animate-logo-3d {
                    animation: logo3DSpin 8s linear infinite;
                    transform-style: preserve-3d;
                }
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .shimmer-effect {
                    position: relative;
                    overflow: hidden;
                }
                .shimmer-effect::after {
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    transform: translateX(-100%);
                    background-image: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0) 0,
                        rgba(255, 255, 255, 0.25) 20%,
                        rgba(255, 255, 255, 0.5) 60%,
                        rgba(255, 255, 255, 0)
                    );
                    animation: shimmer 3s infinite;
                    content: '';
                }
            `}</style>

            <header
                className={`fixed top-0 right-0 z-50 transition-all duration-500 ease-out pt-3 md:pt-5 px-4 sm:px-6 lg:px-10 flex flex-col items-end ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                <div className="w-full max-w-xl md:max-w-2xl relative flex flex-col items-end">

                    {/* Floating Capsule Navbar Aligned Right */}
                    <nav
                        className={`transition-all duration-500 px-4 sm:px-6 py-2.5 md:py-3 border relative overflow-hidden rounded-full ${isScrolled
                                ? "bg-[#0d120a]/85 backdrop-blur-xl border-[#d4af37]/30 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.15)]"
                                : "bg-[#141b0f]/60 backdrop-blur-md border-[#d4af37]/20 shadow-2xl"
                            }`}
                    >
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent pointer-events-none blur-xl" />

                        <div className="flex items-center space-x-3 sm:space-x-5 relative z-10">

                            {/* LOGO */}
                            <Link to="/" className="flex items-center group perspective-1000 py-1">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-md group-hover:bg-[#d4af37]/40 transition-all duration-300" />
                                    <img
                                        src={logo}
                                        alt="VDM Agency Logo"
                                        className="h-8 sm:h-10 w-auto object-contain animate-logo-3d filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-transform duration-300 group-hover:scale-110 relative z-10"
                                    />
                                </div>
                            </Link>

                            {/* ENQUIRE BUTTON */}
                            <Link
                                to="/contact"
                                className="shimmer-effect group flex items-center space-x-2 bg-gradient-to-r from-[#d4af37] via-[#f3e0aa] to-[#aa832c] hover:brightness-110 text-[#0d120a] px-3.5 sm:px-5 py-2 rounded-full font-bold text-[11px] sm:text-xs tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.35)] cursor-pointer active:scale-95"
                            >
                                <Sparkles size={13} className="text-[#0d120a] animate-pulse" />
                                <span className="uppercase tracking-widest">ENQUIRE</span>
                            </Link>

                            {/* PHONE LINK */}
                            <a
                                href="tel:+919217579077"
                                className="hidden sm:flex w-9 h-9 rounded-full border border-[#c6a15b]/40 bg-[#141b0f]/50 backdrop-blur-md items-center justify-center text-[#e0c380] hover:bg-[#c6a15b] hover:text-[#0d120a] hover:border-[#c6a15b] hover:shadow-[0_0_15px_rgba(198,161,91,0.5)] transition-all duration-300"
                                title="Call Us"
                            >
                                <Phone size={14} />
                            </a>

                            {/* WHATSAPP LINK */}
                            <a
                                href="https://wa.me/919217579077"
                                target="_blank"
                                rel="noreferrer"
                                className="hidden sm:flex w-9 h-9 rounded-full border border-[#c6a15b]/40 bg-[#141b0f]/50 backdrop-blur-md items-center justify-center text-[#e0c380] hover:bg-[#25d366] hover:text-white hover:border-[#25d366] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all duration-300"
                                title="WhatsApp Us"
                            >
                                <MessageCircle size={14} />
                            </a>

                            {/* MENU TOGGLE BUTTON */}
                            <div className="flex items-center space-x-2 pl-1 border-l border-[#d4af37]/20">
                                <button
                                    onClick={() => setOpen(!open)}
                                    aria-label="Toggle Menu"
                                    className="relative group w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#c6a15b] via-[#e6ca65] to-[#997a2c] text-[#0d120a] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_15px_rgba(198,161,91,0.4)] flex items-center justify-center focus:outline-none cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {open ? <X size={18} className="relative z-10" /> : <Menu size={18} className="relative z-10" />}
                                </button>
                            </div>

                        </div>
                    </nav>

                    {/* DROPDOWN MEGA MENU OVERLAY */}
                    {open && (
                        <div className="mt-3 w-full max-w-lg bg-[#0d120a]/95 backdrop-blur-2xl border border-[#c6a15b]/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(198,161,91,0.15)] transition-all duration-500 animate-in fade-in slide-in-from-top-4">
                            <div className="flex flex-col space-y-6">

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-2">
                                    {navLinks.map((item) => {
                                        if (item.name === "SERVICES") {
                                            return (
                                                <div key={item.name} className="space-y-2">
                                                    <div
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                        className="flex items-center justify-between text-[#e8e6e3] hover:text-[#e0c380] font-bold tracking-widest text-base sm:text-lg cursor-pointer py-1 transition-colors group"
                                                    >
                                                        <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                                                        <ChevronDown
                                                            size={18}
                                                            className={`transition-transform duration-300 text-[#c6a15b] ${mobileServicesOpen ? "rotate-180" : ""
                                                                }`}
                                                        />
                                                    </div>

                                                    {mobileServicesOpen && (
                                                        <div className="pl-4 border-l-2 border-[#c6a15b]/40 space-y-3 py-2 my-1 bg-[#141b0f]/40 rounded-r-xl p-3">
                                                            <Link
                                                                to="/services/real-estate-marketing"
                                                                onClick={() => setOpen(false)}
                                                                className="block group"
                                                            >
                                                                <span className="text-[9px] tracking-[0.2em] text-[#c6a15b] uppercase font-bold block">
                                                                    LEAD GENERATION
                                                                </span>
                                                                <span className="text-xs font-medium text-stone-200 group-hover:text-[#e0c380] transition-colors flex items-center gap-1">
                                                                    Real Estate Marketing & Ads
                                                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                </span>
                                                            </Link>

                                                            <Link
                                                                to="/services/marketplace-growth"
                                                                onClick={() => setOpen(false)}
                                                                className="block group"
                                                            >
                                                                <span className="text-[9px] tracking-[0.2em] text-[#c6a15b] uppercase font-bold block">
                                                                    E-COMMERCE SCALING
                                                                </span>
                                                                <span className="text-xs font-medium text-stone-200 group-hover:text-[#e0c380] transition-colors flex items-center gap-1">
                                                                    Amazon & Walmart Growth
                                                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => setOpen(false)}
                                                className="text-[#e8e6e3] hover:text-[#e0c380] font-bold tracking-widest text-base sm:text-lg transition-all py-1 block hover:translate-x-1"
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Contact Details Panel */}
                                <div className="border-t border-[#c6a15b]/20 pt-4 flex flex-col space-y-3">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#c6a15b]">
                                            Talk To Our Strategists
                                        </p>
                                        <p className="text-xs text-stone-300 font-medium mt-0.5">
                                            Velzano Infra / VDM Agency
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between gap-2 pt-1">
                                        <a
                                            href="tel:+919217579077"
                                            className="px-4 py-2 rounded-full border border-[#c6a15b]/60 bg-[#141b0f] text-xs font-semibold text-[#e0c380] flex items-center space-x-1.5 hover:bg-[#c6a15b] hover:text-[#0d120a] transition-all duration-300"
                                        >
                                            <Phone size={13} />
                                            <span>Call</span>
                                        </a>
                                        <a
                                            href="https://wa.me/919217579077"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 rounded-full border border-[#25d366]/60 bg-[#141b0f] text-xs font-semibold text-[#25d366] flex items-center space-x-1.5 hover:bg-[#25d366] hover:text-white transition-all duration-300"
                                        >
                                            <MessageCircle size={13} />
                                            <span>WhatsApp</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </header>
        </>
    );
}