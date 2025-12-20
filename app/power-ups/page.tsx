"use client";

import Link from "next/link";
import { useState } from "react";

export default function PowerUpsPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const powerUps = [
        {
            id: "frontend",
            title: "FRONTEND DEV",
            rarity: "Common Drop",
            rarityColor: "text-primary",
            type: "Equippable",
            typeClass: "bg-primary text-[#111714]",
            icon: "html",
            iconBg: "bg-gradient-to-br from-gray-800 to-black",
            description: "Pixel-perfect UI crafting with React & CSS. crafting immersive interfaces that engage users.",
            features: ["React & Tailwind CSS", "Framer Motion Animation", "Responsive Layouts"],
            manaCost: "Low",
            status: "available",
            category: "frontend"
        },
        {
            id: "backend",
            title: "BACKEND DEV",
            rarity: "High Mana Cost",
            rarityColor: "text-primary",
            type: "Cooldown",
            typeClass: "bg-primary/10 border border-primary/30 text-primary",
            icon: "dns",
            iconBg: "bg-gradient-to-br from-gray-800 to-black",
            description: "Robust API architecture and server logic. Building the engine that powers your application.",
            features: ["API Design (REST/GraphQL)", "Database Management", "Secure Authentication"],
            manaCost: "High",
            status: "available",
            category: "backend"
        },
        {
            id: "fullstack",
            title: "FULL STACK",
            rarity: "Rare Item Drop",
            rarityColor: "text-yellow-500",
            type: "Legendary",
            typeClass: "bg-yellow-600 text-white",
            icon: "layers",
            iconBg: "bg-gradient-to-br from-gray-800 to-black",
            description: "End-to-end solutions from DB to UI. The complete package for shipping products fast.",
            features: ["End-to-End Development", "System Architecture", "Deployment & CI/CD"],
            manaCost: "Very High",
            status: "recommended",
            category: "fullstack",
            highlight: true
        },
        {
            id: "ecommerce",
            title: "E-COMMERCE",
            rarity: "Merchant Skill",
            rarityColor: "text-primary",
            type: "Rare",
            typeClass: "bg-primary/10 border border-primary/30 text-primary",
            icon: "shopping_bag",
            iconBg: "bg-gradient-to-br from-gray-800 to-black",
            description: "Shopify and custom payment integrations. Turning visitors into loyal customers.",
            features: ["Shopify Development", "Payment Gateway Integration", "Inventory Systems"],
            manaCost: "Medium",
            status: "available",
            category: "ecommerce"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display antialiased text-white overflow-x-hidden selection:bg-primary selection:text-background-dark">
            {/* Header Removed - Using Global GamifiedNavbar */}

            {/* Main Content Layout */}
            <div className="layout-container flex h-full grow flex-col relative">
                {/* Background Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#111714] via-transparent to-[#111714] pointer-events-none z-0"></div>

                <div className="relative z-10 px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">

                        {/* Section Header */}
                        <div className="flex flex-col items-center text-center gap-2 mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Status: Online
                            </div>
                            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight uppercase" style={{ textShadow: "0 0 20px rgba(54,226,123,0.1)" }}>
                                Power-Ups: <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Available Abilities</span>
                            </h2>
                            <h3 className="text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase mt-2">
                                Select Your Upgrade // Current Mana: <span className="text-primary">100%</span>
                            </h3>
                        </div>

                        {/* Cards Grid/Carousel */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pb-12">
                            {powerUps.map((powerUp) => (
                                <div key={powerUp.id} className={`group relative flex flex-col gap-5 rounded-xl border border-solid border-card-border bg-card-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary hover:shadow-neon-hover hover:-translate-y-2 ${powerUp.highlight ? 'ring-1 ring-primary/30 shadow-[0_0_15px_rgba(54,226,123,0.1)]' : ''}`}>
                                    {powerUp.highlight && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-[#2bc765] text-black text-[10px] font-black uppercase px-3 py-0.5 rounded-sm tracking-wider shadow-lg">
                                            Recommended
                                        </div>
                                    )}

                                    {/* Card Header */}
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-start justify-between">
                                            <div className={`size-12 rounded-lg ${powerUp.iconBg} border border-white/10 flex items-center justify-center text-white group-hover:text-primary group-hover:border-primary/50 transition-colors`}>
                                                <span className="material-symbols-outlined text-3xl">{powerUp.icon}</span>
                                            </div>
                                            <span className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 ${powerUp.typeClass}`}>
                                                {powerUp.type}
                                            </span>
                                        </div>
                                        <div>
                                            <h1 className="text-white text-xl font-bold leading-tight tracking-tight">{powerUp.title}</h1>
                                            <p className={`text-xs font-bold uppercase tracking-widest mt-1 opacity-80 ${powerUp.rarityColor}`}>{powerUp.rarity}</p>
                                        </div>
                                    </div>

                                    {/* Card Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {powerUp.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-col gap-2 mt-auto border-t border-white/10 pt-4">
                                        {powerUp.features.map((feature, i) => (
                                            <div key={i} className="text-xs font-medium text-gray-300 flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full mt-2 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#29382f] group-hover:bg-primary text-white group-hover:text-black text-sm font-bold tracking-wider transition-colors border border-primary/20 hover:border-primary">
                                        UNLOCK SKILL
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
