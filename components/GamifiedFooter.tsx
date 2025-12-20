"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function GamifiedFooter() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    if (isHomePage) return null;

    return (
        <footer className="relative w-full bg-background-darker border-t border-primary/20 dark:border-primary/20 overflow-hidden">
            {/* Decorative RPG Glow Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_10px_rgba(54,226,123,0.5)]"></div>

            {/* Background Scanline Texture */}
            <div className="absolute inset-0 pointer-events-none scanlines opacity-10"></div>

            <div className="layout-container flex flex-col items-center justify-center py-16 px-6 md:px-20 relative z-10">
                <div className="layout-content-container flex flex-col max-w-[960px] w-full items-center">

                    {/* Back To Top Button (Floating styled) */}
                    <div className="mb-12">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary text-primary hover:text-background-darker border border-primary/30 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(54,226,123,0.1)] hover:shadow-[0_0_20px_rgba(54,226,123,0.4)] cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-lg group-hover:-translate-y-1 transition-transform duration-300">arrow_upward</span>
                            <span className="text-sm font-bold tracking-wider">BACK TO TOP</span>
                        </button>
                    </div>

                    {/* Attribution Headline */}
                    <div className="text-center mb-4">
                        <h3 className="text-white tracking-widest text-sm md:text-base font-bold uppercase opacity-60 mb-2">Game Credits</h3>
                        <h2 className="text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                            DESIGNED & DEVELOPED BY <span className="text-primary">HARNISH N DANGI</span>
                        </h2>
                    </div>

                    {/* Tagline Body Text */}
                    <div className="text-center mb-10 max-w-2xl">
                        <p className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed italic px-4">
                            &quot;Code is my weapon, Creativity is my shield&quot;
                        </p>
                    </div>

                    {/* Social Inventory Slots */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <Link href="#" aria-label="GitHub" className="group relative flex items-center justify-center w-12 h-12 bg-background-dark border border-gray-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">code</span>
                            <div className="absolute -bottom-2 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></div>
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="group relative flex items-center justify-center w-12 h-12 bg-background-dark border border-gray-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">work</span>
                            <div className="absolute -bottom-2 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></div>
                        </Link>
                        <Link href="#" aria-label="Email" className="group relative flex items-center justify-center w-12 h-12 bg-background-dark border border-gray-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">mail</span>
                            <div className="absolute -bottom-2 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></div>
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-center border-t border-white/5 pt-8 w-full max-w-md">
                        <p className="text-gray-600 text-sm font-normal">
                            © 2024 Harnish N Dangi. All rights reserved.
                        </p>
                        <p className="text-gray-700 text-xs mt-2">
                            Level 24 • Experience Points: Infinite
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
