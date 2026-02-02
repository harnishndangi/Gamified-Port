'use client';

import Link from 'next/link';

export default function TrophyRoomPage() {
    const achievements = [
        {
            id: 1,
            title: "First Blood",
            tier: "COMMON",
            tierColor: "text-primary bg-primary/10",
            icon: "swords",
            description: "Completed the very first production deployment without breaking the build.",
            locked: false
        },
        {
            id: 2,
            title: "Speed Demon",
            tier: "RARE",
            tierColor: "text-blue-400 bg-blue-400/10",
            icon: "speed",
            description: "Optimized a legacy application to achieve a 95+ Lighthouse performance score.",
            locked: false
        },
        // {
        //     id: 3,
        //     title: "Client King",
        //     tier: "LEGENDARY",
        //     tierColor: "text-yellow-500 bg-yellow-500/10",
        //     icon: "crown",
        //     description: "Delivered 50+ projects with consistent 5-star ratings and glowing reviews.",
        //     locked: false
        // },
        {
            id: 4,
            title: "Full Stack Fury",
            tier: "EPIC",
            tierColor: "text-purple-400 bg-purple-400/10",
            icon: "layers",
            description: "Built and deployed a complex SaaS platform entirely solo from DB to UI.",
            locked: false
        },
        {
            id: 5,
            title: "Premium Coder",
            tier: "RARE",
            tierColor: "text-blue-400 bg-blue-400/10",
            icon: "diamond",
            description: "Refactored a 10,000 line codebase to reduce technical debt by 40%.",
            locked: false
        },
        // {
        //     id: 6,
        //     title: "Rising Star",
        //     tier: "COMMON",
        //     tierColor: "text-primary bg-primary/10",
        //     icon: "hotel_class",
        //     description: "Recognized as a top open-source contributor in the community for 2023.",
        //     locked: false
        // },
        // {
        //     id: 7,
        //     title: "Quest Master",
        //     tier: "EPIC",
        //     tierColor: "text-purple-400 bg-purple-400/10",
        //     icon: "map",
        //     description: "Resolved over 100 complex Jira tickets within a single sprint quarter.",
        //     locked: false
        // },
        // {
        //     id: 8,
        //     title: "Cloud Warrior",
        //     tier: "LEGENDARY",
        //     tierColor: "text-yellow-500 bg-yellow-500/10",
        //     icon: "cloud",
        //     description: "Obtained AWS Solutions Architect certification and deployed serverless architecture.",
        //     locked: false
        // }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display antialiased text-white overflow-x-hidden selection:bg-primary selection:text-background-dark">
            <div className="relative flex min-h-screen w-full flex-col">
                {/* Header Removed - Using Global GamifiedNavbar */}

                <main className="flex-1 flex flex-col items-center w-full">
                    <div className="w-full max-w-[1200px] px-4 md:px-8 py-8 flex flex-col gap-8">
                        {/* HUD / Player Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {/* Stats Cards */}
                            <div className="col-span-1 md:col-span-2 flex flex-wrap gap-4">
                                <div className="flex flex-1 min-w-[140px] flex-col gap-1 rounded-xl border border-white/10 bg-card-dark p-4 items-center text-center shadow-lg hover:border-primary/50 transition-colors cursor-default group">
                                    <span className="material-symbols-outlined text-primary mb-1 group-hover:scale-110 transition-transform">military_tech</span>
                                    <p className="text-2xl font-bold leading-tight">Lvl 25</p>
                                    <p className="text-text-muted text-xs uppercase tracking-wider">Pro Class</p>
                                </div>
                                <div className="flex flex-1 min-w-[140px] flex-col gap-1 rounded-xl border border-white/10 bg-card-dark p-4 items-center text-center shadow-lg hover:border-primary/50 transition-colors cursor-default group">
                                    <span className="material-symbols-outlined text-primary mb-1 group-hover:scale-110 transition-transform">bolt</span>
                                    <p className="text-2xl font-bold leading-tight">8,500 XP</p>
                                    <p className="text-text-muted text-xs uppercase tracking-wider">Total Experience</p>
                                </div>
                                <div className="flex flex-1 min-w-[140px] flex-col gap-1 rounded-xl border border-white/10 bg-card-dark p-4 items-center text-center shadow-lg hover:border-primary/50 transition-colors cursor-default group">
                                    <span className="material-symbols-outlined text-primary mb-1 group-hover:scale-110 transition-transform">emoji_events</span>
                                    <p className="text-2xl font-bold leading-tight">4 / 50</p>
                                    <p className="text-text-muted text-xs uppercase tracking-wider">Trophies Unlocked</p>
                                </div>
                            </div>
                            {/* Progress Bar */}
                            <div className="col-span-1 flex flex-col justify-center gap-3 rounded-xl border border-white/10 bg-card-dark p-5 shadow-lg">
                                <div className="flex justify-between items-end">
                                    <p className="text-white text-sm font-bold uppercase tracking-wider">Next Level Progress</p>
                                    <p className="text-primary text-sm font-bold">85%</p>
                                </div>
                                <div className="h-3 w-full rounded-full bg-background-dark border border-white/10 overflow-hidden">
                                    <div className="h-full bg-primary shadow-glow-sm" style={{ width: '85%' }}></div>
                                </div>
                                <p className="text-text-muted text-xs text-right">1,500 XP to Level 100</p>
                            </div>
                        </div>

                        {/* Page Heading */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6 mt-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase" style={{ textShadow: '0 0 20px rgba(54, 226, 123, 0.1)' }}>
                                    Trophy Room
                                </h1>
                                <p className="text-text-muted text-lg max-w-2xl">
                                    A collection of legendary achievements, milestones, and rare drops earned throughout the development journey.
                                </p>
                            </div>
                            {/* Filter Chips */}
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 rounded-full bg-primary text-background-dark text-sm font-bold hover:shadow-glow transition-all">All</button>
                                <button className="px-4 py-2 rounded-full bg-card-dark border border-white/10 text-text-muted text-sm font-medium hover:text-white hover:border-primary/50 transition-all">Frontend</button>
                                <button className="px-4 py-2 rounded-full bg-card-dark border border-white/10 text-text-muted text-sm font-medium hover:text-white hover:border-primary/50 transition-all">Backend</button>
                                <button className="px-4 py-2 rounded-full bg-card-dark border border-white/10 text-text-muted text-sm font-medium hover:text-white hover:border-primary/50 transition-all">Rare</button>
                            </div>
                        </div>

                        {/* Achievements Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {achievements.map((achievement) => (
                                <div key={achievement.id} className="group relative flex flex-col items-center rounded-2xl bg-card-dark border border-white/10 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-glow overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    {/* 3D Icon Container */}
                                    <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-background-dark to-card-dark shadow-inner ring-1 ring-white/10 group-hover:ring-primary/50 group-hover:scale-110 transition-all duration-500">
                                        <span className="material-symbols-outlined text-5xl text-gray-500 group-hover:text-primary transition-colors duration-300">{achievement.icon}</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center text-center gap-2">
                                        <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">{achievement.title}</h3>
                                        <p className={`text-xs font-bold px-2 py-1 rounded-md ${achievement.tierColor}`}>{achievement.tier}</p>
                                        <p className="mt-2 text-sm text-text-muted leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-primary text-sm">lock_open</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action Footer */}
                        <div className="flex justify-center pb-12">
                            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-card-dark border border-white/10 p-8 md:p-12 text-center group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <div className="rounded-full bg-primary/20 p-4 mb-2">
                                        <span className="material-symbols-outlined text-4xl text-primary">lock_person</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Unlock The Next Achievement</h2>
                                    <p className="text-text-muted max-w-md">The "Teammate" achievement is currently locked. Hire Harnish to unlock exclusive skills and boost your team's stats.</p>
                                    <button className="mt-2 flex cursor-pointer items-center justify-center rounded-full px-8 py-3 bg-primary hover:bg-primary-dark text-background-dark font-bold tracking-wide transition-all hover:scale-105 shadow-glow">
                                        Start Quest: Hiring
                                    </button>
                                </div>
                                {/* Decorative background elements */}
                                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
                                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
