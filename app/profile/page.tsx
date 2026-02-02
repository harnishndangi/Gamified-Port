"use client";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex items-center justify-center overflow-hidden relative selection:bg-primary selection:text-background-dark">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none grid-bg"></div>

            {/* Ambient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Main Content Container */}
            <main className="relative z-10 w-full max-w-4xl p-4 md:p-8 flex flex-col items-center perspective-[1000px]">

                {/* The RPG Card */}
                <div className="holographic-card w-full rounded-lg p-6 md:p-10 text-white flex flex-col gap-8 relative overflow-hidden group">

                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-0"></div>
                    <style jsx>{`
            @keyframes scan {
              0% { transform: translateY(-20px); }
              100% { transform: translateY(800px); }
            }
          `}</style>

                    {/* Header: Avatar & Info */}
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">

                        {/* Avatar Section */}
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center group/avatar cursor-pointer">
                                {/* Rotating Ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow group-hover/avatar:border-primary/60 transition-colors"></div>
                                <div className="absolute inset-2 rounded-full border border-primary/50 group-hover/avatar:shadow-[0_0_20px_rgba(54,226,123,0.4)] transition-all"></div>

                                {/* Image */}
                                <div className="w-full h-full p-2">
                                    <div
                                        className="w-full h-full bg-center bg-cover hexagon-mask bg-neutral-800 relative overflow-hidden border-2 border-transparent hover:scale-105 transition-transform duration-300"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd0jK3ferWMy9QoGPRqwC_ewMI_roR-K4d-lckvi-D99dYilNbe6juymZsIbZ28udEWTYzJiS7CFmENRe8OUew7aK_6RAZkVTj0Ml9y4LR-xpecoMWtZ7NY0EiymAnwynO0wj9HtDh49Hn4zAQF8uaC4RIwSgikWeV1B1st-qGlc1OYem2gjT1evAYD3VY8Hx5yQlB9leLhR3Ctb6bFSR6Y5Y7QuCIjIFAAGaeSUkIS-U9WmRlb7wdGAbMdPPvNXOWtai8ZbFrOoAxFd-uHIaZukhDxnfnq7l36d')" }}
                                    ></div>
                                </div>

                                {/* Level Badge */}
                                <div className="absolute -bottom-2 -right-2 bg-background-dark border border-primary text-primary px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(54,226,123,0.3)] hover:scale-110 transition-transform cursor-help" title="Current Level">
                                    LVL. 25
                                </div>
                            </div>
                        </div>

                        {/* Identity Section */}
                        <div className="flex flex-col flex-1 text-center md:text-left gap-2 w-full">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                                <div>
                                    <h2 className="text-text-muted text-sm tracking-widest uppercase mb-1 font-mono">Developer Stats</h2>
                                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">HARNISH N DANGI</h1>
                                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-[16px]">auto_fix_high</span>
                                        Class: Full-Stack Sorcerer
                                    </div>
                                </div>

                                {/* Action Button */}
                                <Link href="/missions" className="group/btn relative overflow-hidden rounded-full bg-primary px-6 py-2.5 text-background-dark font-bold text-sm transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(54,226,123,0.6)] active:scale-95">
                                    <div className="relative z-10 flex items-center gap-2">
                                        <span>VIEW QUEST LOG</span>
                                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </div>
                                </Link>
                            </div>

                            {/* Main XP Bar */}
                            <div className="mt-4 w-full">
                                <div className="flex justify-between text-xs text-text-muted mb-1.5 font-mono">
                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> XP: 2,450 / 3,000</span>
                                    <span>Rank: Code Wizard</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm">
                                    <div className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 w-[82%] shadow-[0_0_15px_rgba(54,226,123,0.5)] animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white/10 relative z-10" />

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 relative z-10">

                        {/* Stat 1 */}
                        <div className="flex flex-col gap-2 group/stat">
                            <div className="flex justify-between items-end">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">brush</span> STR (Frontend)
                                </span>
                                <span className="text-primary font-mono text-sm">90/100</span>
                            </div>
                            <div className="h-3 w-full bg-[#3d5245]/30 rounded-full overflow-hidden border border-white/5 relative">
                                <div className="h-full bg-primary rounded-full relative w-[90%] stat-bar-glow group-hover/stat:brightness-110 transition-all duration-300">
                                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/40"></div>
                                </div>
                            </div>
                            <p className="text-text-muted text-xs font-mono">React, CSS, Tailwind ,Nextjs , HTML    </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col gap-2 group/stat">
                            <div className="flex justify-between items-end">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">terminal</span> INT (Backend)
                                </span>
                                <span className="text-primary font-mono text-sm">85/100</span>
                            </div>
                            <div className="h-3 w-full bg-[#3d5245]/30 rounded-full overflow-hidden border border-white/5 relative">
                                <div className="h-full bg-primary rounded-full relative w-[85%] stat-bar-glow group-hover/stat:brightness-110 transition-all duration-300">
                                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/40"></div>
                                </div>
                            </div>
                            <p className="text-text-muted text-xs font-mono">Node, Python, Express</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col gap-2 group/stat">
                            <div className="flex justify-between items-end">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">database</span> WIS (Database)
                                </span>
                                <span className="text-primary font-mono text-sm">75/100</span>
                            </div>
                            <div className="h-3 w-full bg-[#3d5245]/30 rounded-full overflow-hidden border border-white/5 relative">
                                <div className="h-full bg-primary rounded-full relative w-[75%] stat-bar-glow group-hover/stat:brightness-110 transition-all duration-300">
                                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/40"></div>
                                </div>
                            </div>
                            <p className="text-text-muted text-xs font-mono">PostgreSQL, Mongo ,MySql , Pinocone</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="flex flex-col gap-2 group/stat">
                            <div className="flex justify-between items-end">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">psychology</span> DEX (Logic)
                                </span>
                                <span className="text-primary font-mono text-sm">95/100</span>
                            </div>
                            <div className="h-3 w-full bg-[#3d5245]/30 rounded-full overflow-hidden border border-white/5 relative">
                                <div className="h-full bg-primary rounded-full relative w-[95%] stat-bar-glow group-hover/stat:brightness-110 transition-all duration-300">
                                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/40"></div>
                                </div>
                            </div>
                            <p className="text-text-muted text-xs font-mono">Algorithms, Problem Solving</p>
                        </div>
                        {/* Stat 5 */}
                        <div className="flex flex-col gap-2 group/stat">
                            <div className="flex justify-between items-end">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span> ARC (AI/ML)
                                </span>
                                <span className="text-primary font-mono text-sm">90/100</span>
                            </div>
                            <div className="h-3 w-full bg-[#3d5245]/30 rounded-full overflow-hidden border border-white/5 relative">
                                <div className="h-full bg-primary rounded-full relative w-[90%] stat-bar-glow group-hover/stat:brightness-110 transition-all duration-300">
                                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/40"></div>
                                </div>
                            </div>
                            <p className="text-text-muted text-xs font-mono">LLMs, RAG, Agents, Vector DBs</p>
                        </div>
                    </div>

                    {/* Bottom: Inventory / Badges */}
                    <div className="bg-black/20 rounded-lg p-4 border border-white/5 relative z-10 backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-text-muted text-[18px]">backpack</span>
                            <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold">Equipped Gear</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { icon: "code", name: "React" },
                                { icon: "dns", name: "Node.js" },
                                { icon: "terminal", name: "TypeScript" },
                                // { icon: "cloud", name: "AWS" },
                                { icon: "palette", name: "Figma" },
                                { icon: "rocket_launch", name: "Next.js" },
                            ].map((badge) => (
                                <div key={badge.name} className="flex items-center gap-1.5 bg-[#2A342E] hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all border border-white/5 px-3 py-1.5 rounded-full text-xs text-gray-300 cursor-default group/badge">
                                    <span className="material-symbols-outlined text-[14px] group-hover/badge:text-primary">{badge.icon}</span> {badge.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Decorative */}
                    <div className="flex justify-between items-center pt-2 relative z-10">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] text-primary tracking-widest uppercase font-mono">System Online</span>
                        </div>
                        <span className="text-[10px] text-white/20 font-mono tracking-wider">ID: HND-2024-X89</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
