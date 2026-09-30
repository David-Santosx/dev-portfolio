import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactLinks } from "@/lib/contact";

const socials = [
  {
    href: "https://github.com/David-Santosx",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/david-willians-dos-santos-212932254/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    href: "https://instagram.com/leao.willians",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-28 md:mt-36 border-t border-border">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("title")}
            </p>
            <p className="text-muted-foreground max-w-md text-pretty">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircleIcon />
                {t("whatsapp")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={contactLinks.email}>
                <MailIcon />
                {t("email")}
              </a>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1 -ml-2.5 md:ml-0">
          {socials.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="p-2.5 rounded-md text-neutral-400 hover:text-orange-300 hover:bg-neutral-900 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <p>
            {t("location")} · {t("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
