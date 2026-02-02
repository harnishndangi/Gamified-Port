"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function GamifiedNavbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;
    const isHomePage = pathname === "/";

    if (isHomePage) return null;


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-solid border-b-[#29382f] bg-[#111714]/95 backdrop-blur-sm px-4 lg:px-10 py-3">
            <div className="flex items-center justify-between whitespace-nowrap max-w-[1400px] mx-auto">
                <div className="flex items-center gap-4 text-white">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="size-8 flex items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                            <span className="material-symbols-outlined text-[20px]">hexagon</span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white text-base lg:text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">
                                HARNISH N DANGI
                            </h2>
                            <span className="text-primary text-xs font-mono font-medium tracking-wider">
                                LVL 25 DEVELOPER
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="hidden xl:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/missions"
                            className={`text-sm font-medium leading-normal flex items-center gap-2 transition-all ${isActive("/missions")
                                ? "text-white shadow-glow-sm"
                                : "text-[#9eb7a8] hover:text-white"
                                }`}
                        >
                            <span className="material-symbols-outlined text-sm">swords</span>
                            QUESTS
                        </Link>
                        <Link
                            href="/inventory"
                            className={`text-sm font-medium leading-normal flex items-center gap-2 transition-all ${isActive("/inventory")
                                ? "text-white shadow-glow-sm"
                                : "text-[#9eb7a8] hover:text-white"
                                }`}
                        >
                            <span className="material-symbols-outlined text-sm">backpack</span>
                            INVENTORY
                        </Link>
                        <Link
                            href="/profile"
                            className={`text-sm font-medium leading-normal flex items-center gap-2 transition-all ${isActive("/profile")
                                ? "text-white shadow-glow-sm"
                                : "text-[#9eb7a8] hover:text-white"
                                }`}
                        >
                            <span className="material-symbols-outlined text-sm">person</span>
                            PROFILE
                        </Link>
                        {/* <Link
                            href="/experience"
                            className={`text-sm font-medium leading-normal flex items-center gap-2 transition-all ${isActive("/experience")
                                ? "text-white shadow-glow-sm"
                                : "text-[#9eb7a8] hover:text-white"
                                }`}
                        >
                            <span className="material-symbols-outlined text-sm">map</span>
                            LOGS
                        </Link> */}
                        <Link
                            href="/trophy-room"
                            className={`text-sm font-medium leading-normal flex items-center gap-2 transition-all ${isActive("/trophy-room")
                                ? "text-white shadow-glow-sm"
                                : "text-[#9eb7a8] hover:text-white"
                                }`}
                        >
                            <span className="material-symbols-outlined text-sm">emoji_events</span>
                            TROPHIES
                        </Link>
                    </nav>

                    <Link href="/contact">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-primary hover:bg-[#2fd170] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-glow hover:scale-105 active:scale-95">
                            <span className="material-symbols-outlined text-lg mr-2">mail</span>
                            <span className="truncate">CONTACT</span>
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="xl:hidden text-white z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMobileMenuOpen ? "close" : "menu"}
                    </span>
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#111714]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center animate-fade-in-up">
                        <nav className="flex flex-col items-center gap-8 text-xl">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">HOME</Link>
                            <Link href="/missions" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">QUESTS</Link>
                            <Link href="/inventory" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">INVENTORY</Link>
                            <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">PROFILE</Link>
                            <Link href="/experience" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">LOGS</Link>
                            <Link href="/trophy-room" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">TROPHIES</Link>
                            <Link href="/power-ups" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">POWER-UPS</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-primary hover:text-white transition-colors font-bold">CONTACT</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
