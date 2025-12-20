"use client";
import Link from "next/link";

export default function Inventory() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-background-dark">
            <div className="layout-container flex h-full w-full grow flex-col">
                <main className="flex-1 flex justify-center py-8 px-4 sm:px-8">
                    <div className="layout-content-container flex flex-col max-w-[1080px] flex-1 gap-8 relative">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-hex-pattern opacity-30 pointer-events-none z-0"></div>

                        {/* Page Header */}
                        <div className="relative z-10 flex flex-col gap-2 p-4 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-xl">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-4xl">
                                    inventory_2
                                </span>
                                <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] uppercase">
                                    Inventory // Weapons
                                </h1>
                            </div>
                            <p className="text-[#9eb7a8] text-base font-mono pl-12">
                                Select a weapon module to view stats and proficiency data.
                            </p>
                        </div>

                        {/* PLATINUM TIER: CORE LANGUAGES */}
                        <div
                            className="relative z-10 animate-fade-in-up"
                            style={{ animationDelay: "100ms" }}
                        >
                            <div className="flex items-center gap-4 mb-6 px-4">
                                <div className="h-px bg-[#29382f] flex-1"></div>
                                <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-platinum/30 bg-platinum/10 text-platinum">
                                    <span className="material-symbols-outlined text-sm">
                                        diamond
                                    </span>
                                    <h2 className="text-sm font-bold tracking-widest">
                                        CORE LANGUAGES (PLATINUM)
                                    </h2>
                                </div>
                                <div className="h-px bg-[#29382f] flex-1"></div>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 px-2 sm:px-8 pb-8">
                                {/* Hex Card 1 */}
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-platinum/20 group-hover:to-platinum/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-platinum/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-platinum/10 flex items-center justify-center text-platinum">
                                            <span className="material-symbols-outlined text-3xl">
                                                javascript
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-platinum transition-colors">
                                            JavaScript
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                        </div>
                                        {/* Hover Tooltip/Overlay */}
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-platinum font-mono">
                                                High versatility. Essential for web interactivity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Hex Card 2 */}
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-platinum/20 group-hover:to-platinum/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-platinum/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-platinum/10 flex items-center justify-center text-platinum">
                                            <span className="material-symbols-outlined text-3xl">
                                                code
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-platinum transition-colors">
                                            TypeScript
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-platinum font-mono">
                                                Strong typing. Enhances scalability & safety.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Hex Card 3 */}
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-platinum/20 group-hover:to-platinum/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-platinum/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-platinum/10 flex items-center justify-center text-platinum">
                                            <span className="material-symbols-outlined text-3xl">
                                                terminal
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-platinum transition-colors">
                                            Python
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-platinum font-mono">
                                                Powerful scripting. Data & backend utility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GOLD TIER: FRONTEND */}
                        <div
                            className="relative z-10 animate-fade-in-up"
                            style={{ animationDelay: "200ms" }}
                        >
                            <div className="flex items-center gap-4 mb-6 px-4">
                                <div className="h-px bg-[#29382f] flex-1"></div>
                                <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold">
                                    <span className="material-symbols-outlined text-sm">
                                        trophy
                                    </span>
                                    <h2 className="text-sm font-bold tracking-widest">
                                        FRONTEND MASTERY (GOLD)
                                    </h2>
                                </div>
                                <div className="h-px bg-[#29382f] flex-1"></div>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 px-2 sm:px-8 pb-8">
                                {/* Hex Item */}
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-gold/20 group-hover:to-gold/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-gold/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                            <span className="material-symbols-outlined text-3xl">
                                                view_in_ar
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-gold transition-colors">
                                            React
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-gold font-mono">
                                                Component architecture. State management.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Hex Item */}
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-gold/20 group-hover:to-gold/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-gold/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                            <span className="material-symbols-outlined text-3xl">
                                                layers
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-gold transition-colors">
                                            Vue.js
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-gold font-mono">
                                                Progressive framework. Lightweight & flexible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Hex Item */}
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-gold/20 group-hover:to-gold/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-gold/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                            <span className="material-symbols-outlined text-3xl">
                                                style
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-gold transition-colors">
                                            Tailwind
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-gold font-mono">
                                                Utility-first CSS. Rapid UI development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Hex Item */}
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-gold/20 group-hover:to-gold/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-gold/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                            <span className="material-symbols-outlined text-3xl">
                                                deployed_code
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-gold transition-colors">
                                            Three.js
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-gold font-mono">
                                                3D rendering. Immersive web experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SILVER TIER: BACKEND */}
                        <div
                            className="relative z-10 animate-fade-in-up"
                            style={{ animationDelay: "300ms" }}
                        >
                            <div className="flex items-center gap-4 mb-6 px-4">
                                <div className="h-px bg-[#29382f] flex-1"></div>
                                <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-silver/30 bg-silver/10 text-silver">
                                    <span className="material-symbols-outlined text-sm">
                                        settings_suggest
                                    </span>
                                    <h2 className="text-sm font-bold tracking-widest">
                                        BACKEND POWER (SILVER)
                                    </h2>
                                </div>
                                <div className="h-px bg-[#29382f] flex-1"></div>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 px-2 sm:px-8 pb-8">
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-silver/20 group-hover:to-silver/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-silver/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-silver/10 flex items-center justify-center text-silver">
                                            <span className="material-symbols-outlined text-3xl">
                                                dns
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-silver transition-colors">
                                            Node.js
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-silver font-mono">
                                                Server-side JS. Event-driven I/O.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-silver/20 group-hover:to-silver/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-silver/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-silver/10 flex items-center justify-center text-silver">
                                            <span className="material-symbols-outlined text-3xl">
                                                webhook
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-silver transition-colors">
                                            Express
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-silver font-mono">
                                                Web framework. Minimalist API builder.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-silver/20 group-hover:to-silver/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-silver/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-silver/10 flex items-center justify-center text-silver">
                                            <span className="material-symbols-outlined text-3xl">
                                                hub
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-silver transition-colors">
                                            GraphQL
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-silver font-mono">
                                                Query language. Flexible data fetching.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BRONZE TIER: DATABASE */}
                        <div
                            className="relative z-10 animate-fade-in-up pb-10"
                            style={{ animationDelay: "400ms" }}
                        >
                            <div className="flex items-center gap-4 mb-6 px-4">
                                <div className="h-px bg-[#29382f] flex-1"></div>
                                <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-bronze/30 bg-bronze/10 text-bronze">
                                    <span className="material-symbols-outlined text-sm">
                                        database
                                    </span>
                                    <h2 className="text-sm font-bold tracking-widest">
                                        DATABASE VAULT (BRONZE)
                                    </h2>
                                </div>
                                <div className="h-px bg-[#29382f] flex-1"></div>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 px-2 sm:px-8 pb-8">
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-bronze/20 group-hover:to-bronze/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-bronze/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-bronze/10 flex items-center justify-center text-bronze">
                                            <span className="material-symbols-outlined text-3xl">
                                                storage
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-bronze transition-colors">
                                            MongoDB
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-bronze font-mono">
                                                NoSQL database. Document-oriented.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-bronze/20 group-hover:to-bronze/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-bronze/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-bronze/10 flex items-center justify-center text-bronze">
                                            <span className="material-symbols-outlined text-3xl">
                                                table_view
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-bronze transition-colors">
                                            PostgreSQL
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-bronze font-mono">
                                                Relational DB. SQL compliant.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative w-full aspect-[0.866] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 hexagon-outer bg-gradient-to-br from-[#2a302d] to-[#1a201d] group-hover:from-bronze/20 group-hover:to-bronze/5 transition-all"></div>
                                    <div className="absolute inset-[2px] hexagon-inner bg-[#111714] flex flex-col items-center justify-center p-4 border-2 border-transparent group-hover:border-bronze/50 transition-all z-10">
                                        <div className="size-12 mb-3 rounded-full bg-bronze/10 flex items-center justify-center text-bronze">
                                            <span className="material-symbols-outlined text-3xl">
                                                cloud
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-center text-sm mb-1 group-hover:text-bronze transition-colors">
                                            Firebase
                                        </h3>
                                        <div className="flex gap-0.5 text-primary text-[10px]">
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                            <span className="material-symbols-outlined text-xs text-[#2a382f]">
                                                circle
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#111714]/90 hexagon-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center pointer-events-none">
                                            <p className="text-xs text-bronze font-mono">
                                                Backend-as-a-Service. Realtime sync.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    );
}
