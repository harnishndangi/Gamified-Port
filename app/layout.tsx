import type { Metadata } from "next";
import { Spline_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import GamifiedFooter from "@/components/GamifiedFooter";
import GamifiedNavbar from "@/components/GamifiedNavbar";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harnish N Dangi - Gamified Portfolio",
  description: "A gamified developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${splineSans.variable} ${notoSans.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col`}
      >
        <GamifiedNavbar />
        {children}
        <GamifiedFooter />
      </body>
    </html>
  );
}
