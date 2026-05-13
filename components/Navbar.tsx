"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Microscope } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/publications", label: "Publications" },
    { href: "/team", label: "Team" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
                    : "bg-white/80 backdrop-blur-md border-b border-gray-100"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-osu-scarlet rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Microscope className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="text-lg font-bold tracking-tight text-gray-900">
                            Rajaram Lab
                        </span>
                        <span className="hidden sm:inline text-sm text-osu-gray ml-2 font-medium">
                            | OSU
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-lg transition-all relative",
                                    isActive
                                        ? "text-osu-scarlet bg-osu-scarlet/5"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                )}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-osu-scarlet rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <Link
                        href="/opportunities"
                        className={cn(
                            "ml-4 px-5 py-2.5 text-sm font-semibold rounded-full transition-all",
                            pathname === "/opportunities"
                                ? "bg-osu-scarlet-dark text-white"
                                : "bg-osu-scarlet text-white hover:bg-osu-scarlet-dark hover:shadow-lg hover:shadow-red-900/10"
                        )}
                    >
                        Join Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-lg"
                    >
                        <div className="px-6 py-6 flex flex-col gap-1">
                            {links.map((link) => {
                                const isActive =
                                    link.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-lg font-medium py-3 px-4 rounded-lg transition-colors",
                                            isActive
                                                ? "text-osu-scarlet bg-osu-scarlet/5"
                                                : "text-gray-900 hover:bg-gray-50"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/opportunities"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-semibold text-osu-scarlet py-3 px-4 mt-2 border-t border-gray-100"
                            >
                                Join the Team →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
