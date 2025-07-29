"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon, SunIcon, MoonIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export function Navbar({ className }: { className?: string }) {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            {(() => {
                return (
                    <nav className="bg-white dark:bg-neutral-900 backdrop-blur-sm rounded-sm p-4 flex items-center gap-6 justify-center shadow-sm">
                        <div className="flex items-center gap-4">
                            <Link data-active={pathname === "/"} href="/" className="dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                                <Button variant="ghost">
                                    david.santos
                                </Button>
                            </Link>
                            <Link data-active={pathname === "/education"} href="/education" className="dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                                <Button variant="ghost">
                                    education
                                </Button>
                            </Link>
                            <Link data-active={pathname === "/experience"} href="/experience" className="dark:text-orange-300 text-orange-400 data-[active=true]:font-bold">
                                <Button variant="ghost">
                                    experience
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
                        <div className="flex items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="border "
                            >
                                <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
                            </Button>
                        </div>
                    </nav>
                );
            })()}
        </div>
    );
}