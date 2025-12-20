"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="layout-container flex h-full grow flex-col relative z-10">
      {/* Header Removed - Using Global GamifiedNavbar */}

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

      {/* Footer Removed - Using Global GamifiedFooter */}
    </div>
  );
}
