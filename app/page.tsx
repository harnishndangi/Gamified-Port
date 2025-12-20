import Link from "next/link";

export default function Home() {
  return (
    <div className="layout-container flex h-full grow flex-col relative z-10">
      {/* Header / Stats Bar */}
      <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary animate-pulse">
            sports_esports
          </span>
          <span className="text-xs font-bold tracking-[0.2em] text-primary/80">
            GAME_MODE: ON
          </span>
        </div>
        <div className="flex gap-3">
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-primary/30 bg-primary/10 pl-4 pr-4 backdrop-blur-md">
            <span className="material-symbols-outlined text-primary text-[16px]">
              verified
            </span>
            <p className="text-white text-xs font-bold leading-normal tracking-wide">
              LVL 19 DEV
            </p>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-accent/30 bg-accent/10 pl-4 pr-4 backdrop-blur-md hidden sm:flex">
            <span className="material-symbols-outlined text-accent text-[16px]">
              bolt
            </span>
            <p className="text-white text-xs font-bold leading-normal tracking-wide">
              EXP: 98%
            </p>
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 relative">
        <div className="layout-content-container flex flex-col max-w-[960px] w-full items-center text-center gap-8">
          {/* Avatar / Character Circle */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary/50 p-1 relative overflow-hidden animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                alt="Digital avatar of a developer with a subtle glitch effect"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAVU3RJhSyx0IvHGlfZjVSmmysCB0Gtc9OtUfQkt95ow46im9GeFdi73SNl-HTjRc7QG8sScNVTj0Ml9y4LR-xpecoMWtZ7NY0EiymAnwynO0wj9HtDh49Hn4zAQF8uaC4RIwSgikWeV1B1st-qGlc1OYem2gjT1evAYD3VY8Hx5yQlB9leLhR3Ctb6bFSR6Y5Y7QuCIjIFAAGaeSUkIS-U9WmRlb7wdGAbMdPPvNXOWtai8ZbFrOoAxFd-uHIaZukhDxnfnq7l36d"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-1 text-[10px] font-mono text-center text-primary">
                ID: H_DANGI
              </div>
            </div>
          </div>

          {/* Main Titles */}
          <div className="flex flex-col gap-4 z-10">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-accent text-5xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tighter text-3d uppercase">
              Harnish N Dangi
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-secondary"></div>
              <h2 className="text-white text-sm sm:text-lg font-medium tracking-[0.3em] uppercase text-shadow-sm flex items-center gap-2">
                <span className="text-secondary">&lt;</span>
                Full Stack Developer
                <span className="text-secondary">/&gt;</span>
              </h2>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-secondary"></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <Link href="/profile">
              <button className="relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-black border-2 border-primary text-primary hover:bg-primary hover:text-black hover:scale-105 transition-all duration-300 font-bold tracking-[0.1em] text-lg shadow-[0_0_20px_rgba(54,226,123,0.3)]">
                <span className="mr-2 animate-pulse">►</span>
                PRESS START
              </button>
            </Link>
            <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest animate-pulse">
              Insert Coin to Continue
            </p>
          </div>
        </div>
      </main>

      {/* Footer / Inventory Slots */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          <div className="flex gap-4">
            {/* Social "Items" */}
            <a className="group relative" href="#">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/20 transition-all duration-300">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                  terminal
                </span>
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GITHUB
              </span>
            </a>
            <a className="group relative" href="#">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent hover:bg-accent/20 transition-all duration-300">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-accent transition-colors">
                  work
                </span>
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LINKEDIN
              </span>
            </a>
            <a className="group relative" href="#">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-secondary hover:bg-secondary/20 transition-all duration-300">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-secondary transition-colors">
                  alternate_email
                </span>
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                CONTACT
              </span>
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs font-normal leading-normal tracking-wider">
              SYSTEM VERSION 2.0.24 <br />
              <span className="opacity-50">© 2024 HARNISH N DANGI</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
