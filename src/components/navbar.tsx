"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon, SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export function Navbar({ className }: { className?: string }) {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div
            className={cn("fixed top-4 md:top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4", className)}
        >
            <nav className="bg-white dark:bg-neutral-900 backdrop-blur-sm rounded-sm p-4 flex items-center justify-between md:justify-center shadow-sm relative">
                {/* Logo - Always visible */}
                <Link href="/">
                    <Button variant="ghost" data-active={pathname === "/"} className="dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                        david.santos
                    </Button>
                </Link>

                {/* Mobile menu button */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="border"
                    >
                        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
                        {isMenuOpen ? (
                            <XIcon className="h-5 w-5 text-orange-400 dark:text-orange-300" />
                        ) : (
                            <MenuIcon className="h-5 w-5 text-orange-400 dark:text-orange-300" />
                        )}
                    </Button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/education">
                            <Button variant="ghost" data-active={pathname === "/education"} className="dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                                education
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="ghost" data-active={pathname === "/projects"} className="dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                                projects
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-1">
                        <Link target="_blank" href="https://github.com/David-Santosx">
                            <Button size={"icon"} variant="ghost">
                                <GithubIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                            </Button>
                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/david-willians-dos-santos-212932254/">
                            <Button size={"icon"} variant="ghost">
                                <LinkedinIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                            </Button>
                        </Link>
                        <Link target="_blank" href="https://instagram.com/leao.willians">
                            <Button size={"icon"} variant="ghost">
                                <InstagramIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                            </Button>
                        </Link>
                        <Link target="_blank" href="https://www.youtube.com/@falando-de-codigo">
                            <Button size={"icon"} variant="ghost">
                                <YoutubeIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                            </Button>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="border"
                        >
                            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-neutral-900 rounded-sm shadow-lg md:hidden flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Link href="/education" onClick={toggleMenu}>
                                <Button variant="ghost" data-active={pathname === "/education"} className="w-full dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                                    education
                                </Button>
                            </Link>
                            <Link href="/projects" onClick={toggleMenu}>
                                <Button variant="ghost" data-active={pathname === "/projects"} className="w-full dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                                    projects
                                </Button>
                            </Link>
                        </div>
                        <div className="flex justify-center gap-1">
                            <Link target="_blank" href="https://github.com/David-Santosx">
                                <Button size={"icon"} variant="ghost">
                                    <GithubIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                                </Button>
                            </Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/david-willians-dos-santos-212932254/">
                                <Button size={"icon"} variant="ghost">
                                    <LinkedinIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                                </Button>
                            </Link>
                            <Link target="_blank" href="https://instagram.com/leao.willians">
                                <Button size={"icon"} variant="ghost">
                                    <InstagramIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                                </Button>
                            </Link>
                            <Link target="_blank" href="https://www.youtube.com/@falando-de-codigo">
                                <Button size={"icon"} variant="ghost">
                                    <YoutubeIcon className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}