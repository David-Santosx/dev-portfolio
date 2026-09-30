"use client";
import { cn } from "@/lib/utils";
import NextLink from "next/link";
import React, { useState } from "react";
import { GithubIcon, LinkedinIcon, InstagramIcon, MenuIcon, XIcon } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <div
      role="group"
      aria-label={t("switchLanguage")}
      className="flex items-center rounded-md border overflow-hidden text-xs font-semibold"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          data-active={loc === locale}
          className="px-2 py-1.5 uppercase text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-orange-500/10 data-[active=true]:text-orange-300"
        >
          {loc === "pt-br" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations("Nav");

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div
            className={cn("fixed top-4 md:top-6 inset-x-0 max-w-2xl mx-auto z-50 px-4", className)}
        >
            <nav className="bg-neutral-900/90 backdrop-blur-md rounded-xl p-3 pl-4 flex items-center justify-between md:justify-center border border-white/10 shadow-[0_1px_2px_rgba(0,0,0,.2),0_8px_24px_-8px_rgba(0,0,0,.5)] relative">
                <Link href="/">
                    <Button variant="ghost" data-active={pathname === "/"} className="text-orange-300 data-[active=true]:font-bold px-2">
                        david.willians
                    </Button>
                </Link>

                <div className="flex items-center gap-2 md:hidden">
                    <Button variant="ghost" size="icon" aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")} onClick={toggleMenu} className="md:hidden">
                        {isMenuOpen ? (
                            <XIcon className="h-5 w-5 text-orange-300" />
                        ) : (
                            <MenuIcon className="h-5 w-5 text-orange-300" />
                        )}
                    </Button>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <Separator orientation="vertical" className="h-5" />
                    <div className="flex items-center gap-1">
                        <Link href="/education">
                            <Button variant="ghost" data-active={pathname === "/education"} className="text-orange-300 data-[active=true]:font-bold">
                                {t("education")}
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="ghost" data-active={pathname === "/projects"} className="text-orange-300 data-[active=true]:font-bold">
                                {t("projects")}
                            </Button>
                        </Link>
                    </div>
                    <Separator orientation="vertical" className="h-5" />
                    <div className="flex items-center gap-1">
                        <NextLink target="_blank" href="https://github.com/David-Santosx">
                            <Button size={"icon"} variant="ghost">
                                <GithubIcon className="w-5 h-5 text-orange-300" />
                            </Button>
                        </NextLink>
                        <NextLink target="_blank" href="https://www.linkedin.com/in/david-willians-dos-santos-212932254/">
                            <Button size={"icon"} variant="ghost">
                                <LinkedinIcon className="w-5 h-5 text-orange-300" />
                            </Button>
                        </NextLink>
                        <NextLink target="_blank" href="https://instagram.com/leao.willians">
                            <Button size={"icon"} variant="ghost">
                                <InstagramIcon className="w-5 h-5 text-orange-300" />
                            </Button>
                        </NextLink>
                    </div>
                    <Separator orientation="vertical" className="h-5" />
                    <div className="hidden md:flex items-center gap-2">
                        <LocaleSwitcher />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-lg md:hidden flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Link href="/education" onClick={toggleMenu}>
                                <Button variant="ghost" data-active={pathname === "/education"} className="w-full text-orange-300 data-[active=true]:font-bold">
                                    {t("education")}
                                </Button>
                            </Link>
                            <Link href="/projects" onClick={toggleMenu}>
                                <Button variant="ghost" data-active={pathname === "/projects"} className="w-full text-orange-300 data-[active=true]:font-bold">
                                    {t("projects")}
                                </Button>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <LocaleSwitcher />
                        </div>
                        <div className="flex justify-center gap-1">
                            <NextLink target="_blank" href="https://github.com/David-Santosx">
                                <Button size={"icon"} variant="ghost">
                                    <GithubIcon className="w-5 h-5 text-orange-300" />
                                </Button>
                            </NextLink>
                            <NextLink target="_blank" href="https://www.linkedin.com/in/david-willians-dos-santos-212932254/">
                                <Button size={"icon"} variant="ghost">
                                    <LinkedinIcon className="w-5 h-5 text-orange-300" />
                                </Button>
                            </NextLink>
                            <NextLink target="_blank" href="https://instagram.com/leao.willians">
                                <Button size={"icon"} variant="ghost">
                                    <InstagramIcon className="w-5 h-5 text-orange-300" />
                                </Button>
                            </NextLink>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
