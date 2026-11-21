
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlowingCursor from "./components/GlowingCursor";
import SocialSticky from "./components/SocialStickey";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taosif Bin Sadhin | MERN Stack & Wix Developer",
  description:
    "Portfolio of Taosif Bin Sadhin, a Web Developer specializing in MERN Stack, Next.js, Wix Studio and Velo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-gray-900 pt-16 text-white">
          {/* Global Effects */}
          <GlowingCursor />
          <SocialSticky />

          {/* Page Content */}
          <div className="mx-auto min-h-[calc(100vh-341px)] w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
