"use client";

import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-background-dark">
            {/* Header Removed - Using Global GamifiedNavbar */}

            <main className="flex-1 flex flex-col relative">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                </div>

                <div className="layout-container flex h-full grow flex-col z-10 relative">
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 md:py-16">
                        <div className="layout-content-container flex flex-col w-full max-w-[1024px] lg:flex-row gap-12 items-start">
                            {/* Left Column: Intro & Power Crystals */}
                            <div className="flex-1 flex flex-col gap-8 lg:sticky lg:top-32">
                                <div className="flex flex-col gap-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-xs font-mono text-primary uppercase tracking-wider">System Online</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight glitch-hover cursor-default">
                                        ESTABLISH <br /><span className="text-primary">CONNECTION</span>
                                    </h1>
                                    <p className="text-slate-600 dark:text-[#9eb7a8] text-lg font-normal leading-relaxed max-w-[500px]">
                                        Ready to join the party? Send a transmission to Harnish N Dangi to discuss quests, collaborations, or simply to trade loot.
                                    </p>
                                </div>

                                {/* Power Crystals (Social Links) */}
                                <div className="flex flex-col gap-4 mt-4">
                                    <p className="text-xs font-bold text-slate-500 dark:text-[#5e7a68] uppercase tracking-widest border-b border-slate-200 dark:border-[#29382f] pb-2 w-fit">Acquire Loot // Socials</p>
                                    <div className="flex flex-wrap gap-4">
                                        {/* GitHub */}
                                        <a href="#" className="group animate-float relative flex items-center justify-center w-14 h-14 bg-white dark:bg-[#1c2620] rounded-xl border border-slate-200 dark:border-[#3d5245] hover:border-primary/50 hover:shadow-[0_0_15px_rgba(54,226,123,0.3)] transition-all duration-300">
                                            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <svg className="w-6 h-6 text-slate-700 dark:text-[#9eb7a8] group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                                        </a>
                                        {/* LinkedIn */}
                                        <a href="#" className="group animate-float-delay relative flex items-center justify-center w-14 h-14 bg-white dark:bg-[#1c2620] rounded-xl border border-slate-200 dark:border-[#3d5245] hover:border-primary/50 hover:shadow-[0_0_15px_rgba(54,226,123,0.3)] transition-all duration-300">
                                            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <svg className="w-6 h-6 text-slate-700 dark:text-[#9eb7a8] group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                                        </a>
                                        {/* Twitter */}
                                        <a href="#" className="group animate-float relative flex items-center justify-center w-14 h-14 bg-white dark:bg-[#1c2620] rounded-xl border border-slate-200 dark:border-[#3d5245] hover:border-primary/50 hover:shadow-[0_0_15px_rgba(54,226,123,0.3)] transition-all duration-300">
                                            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <svg className="w-5 h-5 text-slate-700 dark:text-[#9eb7a8] group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                        </a>
                                        {/* Email */}
                                        <a href="#" className="group animate-float-delay relative flex items-center justify-center w-14 h-14 bg-white dark:bg-[#1c2620] rounded-xl border border-slate-200 dark:border-[#3d5245] hover:border-primary/50 hover:shadow-[0_0_15px_rgba(54,226,123,0.3)] transition-all duration-300">
                                            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span className="material-symbols-outlined text-slate-700 dark:text-[#9eb7a8] group-hover:text-primary transition-colors">mail</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Terminal Form */}
                            <div className="w-full lg:w-[540px] flex-shrink-0">
                                <div className="relative group/terminal rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-[#111714] border border-slate-200 dark:border-[#29382f]">
                                    {/* Terminal Header */}
                                    <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-[#1c2620] border-b border-slate-200 dark:border-[#29382f]">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                        </div>
                                        <div className="text-[10px] font-mono text-slate-500 dark:text-[#5e7a68] uppercase tracking-widest">
                                            Secure Transmission Uplink v2.4
                                        </div>
                                        <div className="w-3"></div> {/* spacer */}
                                    </div>

                                    {/* Form Content */}
                                    <div className="p-6 md:p-8 flex flex-col gap-6 relative">
                                        {/* Decoration: Code Snippet */}
                                        <div className="absolute top-0 right-0 p-4 pointer-events-none opacity-10 hidden md:block">
                                            <pre className="text-[10px] text-primary font-mono leading-3">
                                                {`<uplink>
  init_sequence();
  verify_token(0x3F);
</uplink>`}
                                            </pre>
                                        </div>

                                        {/* Field: Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-900 dark:text-white text-sm font-bold leading-normal flex items-center gap-2">
                                                <span className="material-symbols-outlined text-lg text-slate-400 dark:text-[#5e7a68]">person</span>
                                                User Name
                                            </label>
                                            <input className="form-input w-full rounded-full text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3d5245] bg-white dark:bg-[#1c2620] focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-[#5e7a68] px-5 text-sm font-mono transition-all" placeholder="user@party:~$ Enter Name" type="text" />
                                        </div>

                                        {/* Field: Email */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-900 dark:text-white text-sm font-bold leading-normal flex items-center gap-2">
                                                <span className="material-symbols-outlined text-lg text-slate-400 dark:text-[#5e7a68]">alternate_email</span>
                                                User Email
                                            </label>
                                            <input className="form-input w-full rounded-full text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3d5245] bg-white dark:bg-[#1c2620] focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-[#5e7a68] px-5 text-sm font-mono transition-all" placeholder="user@email.com" type="email" />
                                        </div>

                                        {/* Field: Message */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-900 dark:text-white text-sm font-bold leading-normal flex items-center gap-2">
                                                <span className="material-symbols-outlined text-lg text-slate-400 dark:text-[#5e7a68]">terminal</span>
                                                Transmission Data
                                            </label>
                                            <div className="relative">
                                                <textarea className="form-input w-full rounded-3xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3d5245] bg-white dark:bg-[#1c2620] focus:border-primary min-h-[160px] placeholder:text-slate-400 dark:placeholder:text-[#5e7a68] p-5 text-sm font-normal leading-relaxed resize-none transition-all font-mono" placeholder={`// Type your message here...
> `}></textarea>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <button className="group relative flex items-center justify-center w-full h-14 mt-2 bg-primary hover:bg-[#2ed670] rounded-full text-surface-dark font-black tracking-wider uppercase transition-all duration-200 overflow-hidden shadow-[0_0_20px_rgba(54,226,123,0.4)] hover:shadow-[0_0_30px_rgba(54,226,123,0.6)] hover:scale-[1.01]">
                                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                                            <span className="relative flex items-center gap-3">
                                                <span className="material-symbols-outlined animate-pulse">send</span>
                                                Transmit Message
                                            </span>
                                        </button>

                                        {/* Status Log */}
                                        <div className="mt-2 pt-4 border-t border-slate-200 dark:border-[#29382f] flex justify-between items-center">
                                            <p className="text-[10px] text-slate-400 dark:text-[#5e7a68] font-mono">
                                                &gt; Status: <span className="text-primary animate-pulse">Waiting for input...</span>
                                            </p>
                                            <p className="text-[10px] text-slate-400 dark:text-[#5e7a68] font-mono">
                                                Packet Loss: 0%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Removed - Using Global GamifiedFooter */}
        </div>
    );
}
