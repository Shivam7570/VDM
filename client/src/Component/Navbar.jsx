import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Sparkles } from "lucide-react";

import logo from "../assets/LogoVDM.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
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
        { name: "ABOUT Vdigimarks", href: "/about" },
        { name: "Real Estate Marketing", href: "/real-state" },
        { name: "Service", href: "/service" },
        { name: "BLOG", href: "/blog" },
        { name: "CONTACT US", href: "/contact" },
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
                className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out pt-2 sm:pt-4 px-2 sm:px-6 lg:px-10 flex flex-col items-center md:items-end pointer-events-none ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                {/* Yahan max-w width ko reduce karke compact kar diya gaya hai */}
                <div className="w-full max-w-[calc(100vw-1rem)] sm:max-w-md md:max-w-lg relative flex flex-col items-end pointer-events-auto">

                    {/* Floating Capsule Navbar Aligned Responsive */}
                    <nav
                        className={`transition-all duration-500 px-3 sm:px-5 py-2 border relative overflow-hidden rounded-full w-full flex items-center justify-between ${isScrolled
                            ? "bg-[#0d120a]/90 backdrop-blur-xl border-[#d4af37]/40 shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.2)]"
                            : "bg-[#141b0f]/80 backdrop-blur-md border-[#d4af37]/25 shadow-2xl"
                            }`}
                    >
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent pointer-events-none blur-xl" />

                        {/* LOGO */}
                        <Link to="/" className="flex items-center group perspective-1000 py-0.5 shrink-0">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-md group-hover:bg-[#d4af37]/40 transition-all duration-300" />
                                <img
                                    src={logo}
                                    alt="VDM Agency Logo"
                                    className="h-6 sm:h-8 w-auto object-contain animate-logo-3d filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-transform duration-300 group-hover:scale-105 relative z-10"
                                />
                            </div>
                        </Link>

                        {/* RIGHT ACTION BUTTONS */}
                        <div className="flex items-center space-x-1.5 sm:space-x-2.5 relative z-10 shrink-0">

                            {/* ENQUIRE BUTTON */}
                            <Link
                                to="/contact"
                                className="shimmer-effect group flex items-center space-x-1 bg-gradient-to-r from-[#d4af37] via-[#f3e0aa] to-[#aa832c] hover:brightness-110 text-[#0d120a] px-2.5 sm:px-3 py-1.5 rounded-full font-black text-[10px] tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.35)] cursor-pointer active:scale-95"
                            >
                                <Sparkles size={11} className="text-[#0d120a] animate-pulse" />
                                <span className="uppercase tracking-wider">ENQUIRE</span>
                            </Link>

                            {/* PHONE LINK (Desktop) */}
                            <a
                                href="tel:+917651909139"
                                className="hidden md:flex w-7 h-7 rounded-full border border-[#c6a15b]/40 bg-[#141b0f]/50 backdrop-blur-md items-center justify-center text-[#e0c380] hover:bg-[#c6a15b] hover:text-[#0d120a] transition-all"
                                title="Call Us"
                            >
                                <Phone size={12} />
                            </a>

                            {/* WHATSAPP LINK (Desktop) */}
                            <a
                                href="https://wa.me/917651909139"
                                target="_blank"
                                rel="noreferrer"
                                className="hidden md:flex w-7 h-7 rounded-full border border-[#c6a15b]/40 bg-[#141b0f]/50 backdrop-blur-md items-center justify-center text-[#e0c380] hover:bg-[#25d366] hover:text-white transition-all"
                                title="WhatsApp Us"
                            >
                                <MessageCircle size={12} />
                            </a>

                            {/* MENU TOGGLE BUTTON */}
                            <div className="flex items-center pl-0.5 border-l border-[#d4af37]/20">
                                <button
                                    onClick={() => setOpen(!open)}
                                    aria-label="Toggle Menu"
                                    className="relative group w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#c6a15b] via-[#e6ca65] to-[#997a2c] text-[#0d120a] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center focus:outline-none cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {open ? <X size={15} className="relative z-10" /> : <Menu size={15} className="relative z-10" />}
                                </button>
                            </div>

                        </div>
                    </nav>

                    {/* DROPDOWN MEGA MENU OVERLAY */}
                    {open && (
                        <div className="mt-2 w-full max-w-[calc(100vw-1.5rem)] sm:max-w-md max-h-[82vh] overflow-y-auto bg-[#0d120a]/95 backdrop-blur-2xl border border-[#c6a15b]/30 rounded-2xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 animate-in fade-in slide-in-from-top-3">
                            <div className="flex flex-col space-y-3">

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-1 pt-1">
                                    {navLinks.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setOpen(false)}
                                            className="text-[#e8e6e3] hover:text-[#e0c380] font-bold tracking-wider text-xs transition-all py-1.5 px-2 rounded-lg hover:bg-stone-900/60 block"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Contact Details Panel */}
                                <div className="border-t border-[#c6a15b]/20 pt-3 flex flex-col space-y-2">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#c6a15b]">
                                            Talk To Our Strategists
                                        </p>
                                        <p className="text-[11px] text-stone-300 font-medium mt-0.5">
                                            Let’s Discuss Your Business Growth
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between gap-2 pt-1">
                                        <a
                                            href="tel:+917651909139"
                                            className="flex-1 py-2 px-3 rounded-full border border-[#c6a15b]/60 bg-[#141b0f] text-[11px] font-semibold text-[#e0c380] flex items-center justify-center space-x-1.5 hover:bg-[#c6a15b] hover:text-[#0d120a] transition-all"
                                        >
                                            <Phone size={12} />
                                            <span>Call</span>
                                        </a>
                                        <a
                                            href="https://wa.me/917651909139"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 py-2 px-3 rounded-full border border-[#25d366]/60 bg-[#141b0f] text-[11px] font-semibold text-[#25d366] flex items-center justify-center space-x-1.5 hover:bg-[#25d366] hover:text-white transition-all"
                                        >
                                            <MessageCircle size={12} />
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