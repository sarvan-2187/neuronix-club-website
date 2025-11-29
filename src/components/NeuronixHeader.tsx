"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Home, Info, Sparkles, CircleHelp } from "lucide-react";

const navItems = [
    { id: "hero", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <Info className="w-4 h-4" /> },
    { id: "crew", label: "Crew", icon: <Sparkles className="w-4 h-4" /> },
    { id: "faq", label: "FAQs", icon: <CircleHelp className="w-4 h-4" /> },
];

export default function NeuronixHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    }, []);

    const scrollToSection = (id: string) => (e: any) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
        setActive(id);
        setIsOpen(false);
    };

    return (
        <>
            {/* Header Container */}
            <header
                className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl
                px-3 sm:px-4 py-2 rounded-2xl
                border backdrop-blur-xl transition-all duration-300
                bg-black/70 border-yellow-500/10 
                ${scrolled ? "shadow-[0_0_20px_rgba(250,204,21,0.25)]" : "shadow-none"}
            `}
            >
                <nav className="flex justify-between items-center w-full">

                    {/* LOGO */}
                    <div className="flex items-center gap-2 select-none">
                        <span className="text-base sm:text-lg font-bold tracking-wide text-yellow-300">
                            NEURONIX
                        </span>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={scrollToSection(item.id)}
                                className={`px-3 py-2 text-sm rounded-xl flex items-center gap-2 transition-all
                                border border-transparent
                                ${active === item.id
                                        ? "text-black bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                                        : "text-yellow-300/80 hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-yellow-400/10"}
                                `}
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden p-2 rounded-xl border border-yellow-500/30 
                        text-yellow-300 hover:bg-yellow-500/10 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </header>

            {/* MOBILE MENU */}
            {isOpen && (
                <>
                    <div
                        className="fixed top-[78px] left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-40
                        rounded-2xl bg-black/90 backdrop-blur-xl border border-yellow-500/20 
                        p-4 shadow-[0_0_35px_rgba(250,204,21,0.25)]
                        animate-slideDown"
                    >
                        <div className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={scrollToSection(item.id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                                    ${active === item.id
                                            ? "bg-yellow-400 text-black shadow-[0_0_10px_rgba(250,204,21,0.4)]"
                                            : "text-yellow-300/80 hover:bg-yellow-400/10 hover:text-yellow-300"}
                                    `}
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* BG Overlay */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
                        onClick={() => setIsOpen(false)}
                    />
                </>
            )}

            {/* ANIMATION STYLE */}
            <style>{`
                @keyframes slideDown {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-slideDown {
                    animation: slideDown 0.25s ease-out;
                }
            `}</style>
        </>
    );
}
