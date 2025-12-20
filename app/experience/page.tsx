'use client';

import Link from 'next/link';

export default function ExperiencePage() {
    const timelineEvents = [
        {
            id: 'present',
            title: 'Client Projects',
            role: 'Current Quest',
            roleColor: 'bg-primary/20 text-primary',
            status: 'Active',
            statusLabel: 'IN PROGRESS',
            description: 'Developing bespoke solutions for high-profile clients. Focused on scalable architectures and React ecosystems.',
            tags: ['React', 'Node.js', 'AWS'],
            icon: 'bolt',
            active: true,
            bgImage: 'https://cdn.usegalileo.ai/sdxl10/2569584d-2a1c-4b55-a044-640a4309c8d5.png'
        },
        {
            id: '2023',
            title: '2023: Major Builds',
            role: 'QUEST COMPLETE',
            roleColor: 'bg-[#3d5245] text-text-muted',
            status: 'Complete',
            description: 'Deployed 3 enterprise-level applications. Secured 1st place in the Global Hackathon.',
            icon: 'emoji_events',
            active: false,
            rewards: [
                { text: '+500 XP Gained', icon: 'add_circle' },
                { text: 'Skill: System Design', isSkill: true }
            ]
        },
        {
            id: '2022',
            title: '2022: Learning Phase',
            role: 'SKILL TREE UNLOCKED',
            roleColor: 'bg-[#3d5245] text-text-muted',
            status: 'Complete',
            description: 'Intensive study of JavaScript frameworks. Completed Full Stack Certification.',
            icon: 'school',
            active: false,
            skills: [
                { name: 'JS Mastered', color: 'bg-yellow-500' },
                { name: 'CSS Tricks', color: 'bg-blue-500' }
            ]
        },
        {
            id: '2021',
            title: '2021: Origin Story',
            role: 'TUTORIAL PHASE',
            roleColor: 'bg-[#3d5245] text-text-muted',
            status: 'Complete',
            description: 'Wrote the first line of code. Made the pivotal decision to switch classes to Technomancer.',
            icon: 'auto_stories',
            active: false
        },
        {
            id: 'start',
            title: 'BEGINNING: Character Creation',
            role: 'NEW GAME',
            roleColor: 'bg-[#3d5245] text-text-muted',
            status: 'Complete',
            description: 'Harnish N Dangi enters the server.',
            icon: 'flag',
            active: false
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-background-dark">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
                {/* Header Removed - Using Global GamifiedNavbar */}

                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            {/* Page Heading */}
                            <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
                                <div className="flex min-w-72 flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
                                        <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Experience Path</h1>
                                    </div>
                                    <p className="text-text-muted text-base lg:text-lg font-normal leading-normal max-w-[600px]">
                                        Trace the journey from origin to present day. Each node represents a significant milestone in the developer's skill tree.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Section */}
                            <div className="relative px-4">
                                {/* Connecting Line Background */}
                                <div className="absolute left-[39px] top-6 bottom-6 w-[2px] bg-[#29382f] h-full z-0"></div>

                                {timelineEvents.map((event, index) => (
                                    <div key={event.id} className="grid grid-cols-[50px_1fr] gap-x-6 relative mb-12 last:mb-0">
                                        {/* Icon/Marker */}
                                        <div className="flex flex-col items-center pt-2 z-10">
                                            <div className={`relative flex items-center justify-center size-12 rounded-full ${event.active ? 'bg-[#112117] border-2 border-primary shadow-glow text-primary' : 'bg-[#1a261f] border-2 border-[#3d5245] group-hover:border-primary text-white hover:text-primary transition-colors'}`}>
                                                <span className={`material-symbols-outlined ${event.active ? 'animate-pulse' : 'text-[20px]'}`}>{event.icon}</span>
                                                {event.active && (
                                                    <div className="absolute inset-0 rounded-full border border-primary opacity-50 w-full h-full scale-125"></div>
                                                )}
                                            </div>
                                            <div className={`w-[2px] ${event.active ? 'bg-gradient-to-b from-primary to-[#29382f]' : 'bg-[#29382f]'} h-full grow mt-2`}></div>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`flex flex-col ${event.active ? 'pt-1' : 'py-1'}`}>
                                            {event.active ? (
                                                <div className="bg-surface-dark border border-primary/30 rounded-xl overflow-hidden shadow-lg relative group">
                                                    <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" style={{ backgroundImage: `url('${event.bgImage}')` }}></div>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#111714] via-[#111714]/90 to-transparent"></div>
                                                    <div className="relative p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                                        <div className="flex flex-col gap-2">
                                                            <div className="flex items-center gap-2">
                                                                <span className={`bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider`}>{event.role}</span>
                                                                <span className="text-text-muted text-xs font-mono">• {event.statusLabel}</span>
                                                            </div>
                                                            <h3 className="text-white text-2xl font-bold leading-tight">{event.title}</h3>
                                                            <p className="text-text-muted text-base leading-relaxed max-w-md">
                                                                {event.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                {event.tags?.map((tag, i) => (
                                                                    <span key={i} className="text-xs font-mono text-white bg-[#29382f] px-2 py-1 rounded">{tag}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:flex flex-col items-center justify-center gap-1 min-w-[100px] border-l border-[#29382f] pl-6">
                                                            <span className="material-symbols-outlined text-primary text-3xl">hourglass_top</span>
                                                            <span className="text-primary font-bold text-sm">Active</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span className="text-white text-lg font-bold">{event.title}</span>
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${event.roleColor}`}>{event.role}</span>
                                                    </div>
                                                    <p className="text-text-muted text-base font-normal leading-normal mb-3">
                                                        {event.description}
                                                    </p>
                                                    {event.rewards && (
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center gap-1 text-[#36e27b] text-sm">
                                                                <span className="material-symbols-outlined text-[16px]">add_circle</span>
                                                                <span>+500 XP Gained</span>
                                                            </div>
                                                            <div className="h-1 w-1 rounded-full bg-[#3d5245]"></div>
                                                            <span className="text-[#6b8276] text-sm">Skill: System Design</span>
                                                        </div>
                                                    )}
                                                    {event.skills && (
                                                        <div className="flex gap-2">
                                                            {event.skills.map((skill, i) => (
                                                                <div key={i} className="px-3 py-1 rounded-full border border-[#29382f] bg-[#111714] flex items-center gap-2">
                                                                    <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
                                                                    <span className="text-xs text-text-muted">{skill.name}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Removed - Using Global GamifiedFooter */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
