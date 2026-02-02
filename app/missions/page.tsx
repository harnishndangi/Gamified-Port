'use client';

import Link from "next/link";
import { useState } from "react";

export default function MissionsPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const missions = [
        {
            id: 1,
            title: "Study Buddy",
            rank: "S",
            status: "System Online",
            description: "A collaborative education platform enabling students to find study partners, share resources, and learn together in real-time.",
            mode: "Hard Mode",
            difficultyColor: "text-primary",
            bgImage: "/projects/study_buddy.png",
            link: "https://study-buddy-lilac-omega.vercel.app/",
            stats: 5,
            category: "fullstack",
            weapons: [
                { name: "React", icon: "code" },
                { name: "Node.js", icon: "dns" },
                { name: "Socket.io", icon: "sync" }
            ],
            loot: [
                { icon: "group", text: "+500 Collaboration XP" },
                { icon: "school", text: "Education Badges" }
            ]
        },
        {
            id: 2,
            title: "Universal Reasoning",
            rank: "SS",
            status: "Operational",
            description: "Advanced multi-agent AI chat interface capable of complex reasoning, task decomposition, and collaborative problem solving.",
            mode: "God Mode",
            difficultyColor: "text-purple-500",
            bgImage: "/projects/universal_reasoning_engine.png",
            link: "https://universal-reasoning-engine.vercel.app/",
            stats: 5,
            category: "fullstack",
            weapons: [
                { name: "LLMs", icon: "psychology" },
                { name: "Multi-Agent", icon: "hub" }
            ],
            loot: [
                { icon: "auto_awesome", text: "+1000 AI Knowledge" },
                { icon: "smart_toy", text: "Reasoning Module" }
            ]
        },
        {
            id: 3,
            title: "Unitrail",
            rank: "A",
            status: "Active",
            description: "Comprehensive study abroad consultancy platform helping students navigate their international education journey with ease.",
            mode: "Medium Mode",
            difficultyColor: "text-blue-400",
            bgImage: "/projects/unitrail.png",
            link: "https://unitrail.vercel.app/",
            stats: 4,
            category: "frontend",
            weapons: [
                { name: "Next.js", icon: "web" },
                { name: "Tailwind", icon: "style" }
            ],
            loot: [
                { icon: "flight_takeoff", text: "Global Network Unlocked" },
                { icon: "verified", text: "Trust Badge" }
            ]
        },
        {
            id: 4,
            title: "ConstructPro",
            rank: "A+",
            status: "Building",
            description: "All-in-one construction management web application for streaming project workflows, resource planning, and site monitoring.",
            mode: "Hard Mode",
            difficultyColor: "text-orange-500",
            bgImage: "/projects/constructpro.png",
            link: "https://constructpro-delta.vercel.app/",
            stats: 5,
            category: "fullstack",
            weapons: [
                { name: "React", icon: "construction" },
                { name: "Dashboard", icon: "dashboard" }
            ],
            loot: [
                { icon: "apartment", text: "Management Mastery" },
                { icon: "engineering", text: "Efficiency Boost" }
            ]
        },
        {
            id: 5,
            title: "NexuxChat",
            rank: "B",
            status: "Live",
            description: "Sleek and modern personal chat application featuring real-time messaging, user profiles, and a responsive design.",
            mode: "Normal Mode",
            difficultyColor: "text-green-500",
            bgImage: "/projects/nexuxchat.png",
            link: "https://nexuxchat.onrender.com",
            stats: 3,
            category: "fullstack",
            weapons: [
                { name: "Socket.io", icon: "chat" },
                { name: "Express", icon: "speed" }
            ],
            loot: [
                { icon: "forum", text: "Communication Skills" },
                { icon: "person", text: "Social Connectivity" }
            ]
        }
    ];

    const filteredMissions = activeFilter === "all" ? missions : missions.filter(m => m.category === activeFilter);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-background-dark">
            {/* Header Removed - Using Global GamifiedNavbar */}

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col items-center w-full py-8 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl flex flex-col gap-8">
                    {/* Page Heading & Context */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-card-dark pb-8">
                        <div className="flex flex-col gap-3 max-w-2xl">
                            <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase">
                                <span className="material-symbols-outlined text-sm">folder_open</span>
                                <span>System Logs / Completed</span>
                            </div>
                            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
                                Mission Archives
                            </h1>
                            <p className="text-text-muted text-base md:text-lg font-normal leading-relaxed max-w-xl">
                                Select a quest card to reveal mission details, tech stack weaponry, and acquired loot. Hover over cards to analyze data.
                            </p>
                        </div>
                        {/* XP / Stats Widget */}
                        <div className="flex gap-6 bg-card-dark p-4 rounded-xl border border-card-dark shadow-lg">
                            <div className="flex flex-col">
                                <span className="text-text-muted text-xs uppercase tracking-wider font-bold">Total XP</span>
                                <span className="text-white text-2xl font-bold font-mono">8,500</span>
                            </div>
                            <div className="w-px bg-white/10 h-full"></div>
                            <div className="flex flex-col">
                                <span className="text-text-muted text-xs uppercase tracking-wider font-bold">Missions</span>
                                <span className="text-primary text-2xl font-bold font-mono">05</span>
                            </div>
                        </div>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${activeFilter === "all" ? "bg-primary text-background-dark" : "bg-card-dark border border-card-dark hover:border-primary/50 text-text-muted hover:text-white"}`}
                        >
                            <span className="material-symbols-outlined text-sm">grid_view</span>
                            <span className="text-sm font-bold">All Classes</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter("frontend")}
                            className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${activeFilter === "frontend" ? "bg-primary text-background-dark" : "bg-card-dark border border-card-dark hover:border-primary/50 text-text-muted hover:text-white"}`}
                        >
                            <span className={`material-symbols-outlined text-sm transition-colors ${activeFilter === "frontend" ? "text-background-dark" : "text-text-muted group-hover:text-primary"}`}>code</span>
                            <span className={`text-sm font-medium transition-colors ${activeFilter === "frontend" ? "text-background-dark" : "text-text-muted group-hover:text-white"}`}>Frontend</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter("backend")}
                            className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${activeFilter === "backend" ? "bg-primary text-background-dark" : "bg-card-dark border border-card-dark hover:border-primary/50 text-text-muted hover:text-white"}`}
                        >
                            <span className={`material-symbols-outlined text-sm transition-colors ${activeFilter === "backend" ? "text-background-dark" : "text-text-muted group-hover:text-primary"}`}>database</span>
                            <span className={`text-sm font-medium transition-colors ${activeFilter === "backend" ? "text-background-dark" : "text-text-muted group-hover:text-white"}`}>Backend</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter("fullstack")}
                            className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${activeFilter === "fullstack" ? "bg-primary text-background-dark" : "bg-card-dark border border-card-dark hover:border-primary/50 text-text-muted hover:text-white"}`}
                        >
                            <span className={`material-symbols-outlined text-sm transition-colors ${activeFilter === "fullstack" ? "text-background-dark" : "text-text-muted group-hover:text-primary"}`}>layers</span>
                            <span className={`text-sm font-medium transition-colors ${activeFilter === "fullstack" ? "text-background-dark" : "text-text-muted group-hover:text-white"}`}>Full Stack</span>
                        </button>
                    </div>

                    {/* Grid of Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
                        {filteredMissions.map((mission) => (
                            <div key={mission.id} className="group h-[540px] perspective-1000 cursor-pointer" onClick={() => window.open(mission.link, '_blank')}>
                                <div className="relative w-full h-full duration-700 transition-all transform-style-3d group-hover:rotate-y-180">
                                    {/* Front Side */}
                                    <div className="absolute inset-0 w-full h-full bg-card-dark rounded-xl border border-card-dark overflow-hidden backface-hidden flex flex-col shadow-lg">
                                        {/* Image Area */}
                                        <div className="relative h-64 w-full overflow-hidden bg-gray-900 group/image">
                                            <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent z-10"></div>
                                            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
                                                <span className="text-primary text-xs font-bold tracking-wider">RANK {mission.rank}</span>
                                            </div>
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/image:scale-110"
                                                style={{ backgroundImage: `url('${mission.bgImage}')` }}
                                            ></div>
                                        </div>
                                        {/* Front Content */}
                                        <div className="flex flex-col flex-grow p-6 relative">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`h-2 w-2 rounded-full ${mission.id === 3 ? 'bg-gray-500' : 'bg-primary animate-pulse'}`}></span>
                                                <span className="text-text-muted text-xs font-mono uppercase tracking-widest">{mission.status}</span>
                                            </div>
                                            <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">{mission.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                                {mission.description}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className={`material-symbols-outlined ${mission.difficultyColor} text-sm`}>bolt</span>
                                                    <span className="text-white text-sm font-bold">{mission.mode}</span>
                                                </div>
                                                <div className="text-text-muted text-xs font-mono group-hover:text-primary transition-colors">
                                                    HOVER TO DECRYPT &gt;&gt;
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute inset-0 w-full h-full bg-[#161f1a] rounded-xl border border-primary/50 overflow-hidden backface-hidden rotate-y-180 flex flex-col shadow-[0_0_30px_rgba(54,226,123,0.1)]">
                                        <div className="p-8 flex flex-col h-full gap-5">
                                            {/* Header Back */}
                                            <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                                <div className="flex flex-col">
                                                    <h4 className="text-white text-lg font-bold uppercase tracking-wide">Mission Stats</h4>
                                                    <div className="flex text-primary gap-0.5 mt-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className={`material-symbols-outlined text-sm ${i < mission.stats ? "" : "text-text-muted/30"}`}>star</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">
                                                        {mission.id === 1 ? 'analytics' : mission.id === 2 ? 'shopping_cart' : 'smart_toy'}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Weapons Used */}
                                            <div className="space-y-2">
                                                <p className="text-text-muted text-xs font-bold uppercase tracking-widest">Inventory / Weapons</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {mission.weapons.map((w, i) => (
                                                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-card-dark text-white text-xs font-medium border border-transparent hover:border-primary/50 transition-colors">
                                                            <span className="material-symbols-outlined text-[14px]">{w.icon}</span> {w.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Rewards */}
                                            <div className="space-y-2">
                                                <p className="text-text-muted text-xs font-bold uppercase tracking-widest">Loot Acquired</p>
                                                <ul className="space-y-2">
                                                    {mission.loot.map((l, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                            <span className="material-symbols-outlined text-primary text-base pt-0.5">{l.icon}</span>
                                                            <span>{l.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Actions */}
                                            <div className="mt-auto flex flex-col gap-3">
                                                <a href={mission.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-full h-12 rounded-full bg-primary hover:bg-white text-background-dark hover:text-background-dark font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(54,226,123,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                                                    INITIALIZE DEMO
                                                </a>
                                                <button onClick={(e) => e.stopPropagation()} className="w-full h-12 rounded-full bg-transparent border border-primary text-primary hover:bg-primary/10 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">data_object</span>
                                                    SOURCE CODE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
