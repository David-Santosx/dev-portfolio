import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { CONTACT_EMAIL, contactLinks } from "@/lib/contact";
import { SectionHeading } from "@/components/section-heading";
import { BrowserFrame } from "@/components/browser-frame";
import { useLocale, useTranslations } from "next-intl";
import { SITE_NAME, SITE_URL, localizedPath } from "@/lib/site";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  MailIcon,
  ChartColumnBigIcon,
  MessageCircleIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

const stackGroups: Array<{
  key: "frontend" | "backend" | "data" | "tools";
  items: Array<{ name: string; img?: string; Icon?: LucideIcon; invert?: boolean }>;
}> = [
  {
    key: "frontend",
    items: [
      { name: "HTML", img: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS", img: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", img: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "TypeScript", img: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "React", img: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", img: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true },
      { name: "Vue.js", img: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Tailwind CSS", img: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Sass", img: `${DEVICON}/sass/sass-original.svg` },
      { name: "shadcn/ui", img: `${SIMPLE_ICONS}/shadcnui.svg`, invert: true },
      {
        name: "Mantine UI",
        img: "https://raw.githubusercontent.com/mantinedev/mantine/refs/heads/master/apps/mantine.dev/public/favicon.svg",
      },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", img: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express", img: `${DEVICON}/express/express-original.svg`, invert: true },
      { name: "Fastify", img: `${SIMPLE_ICONS}/fastify.svg`, invert: true },
      { name: "Hono", img: `${SIMPLE_ICONS}/hono.svg`, invert: true },
      { name: "Python", img: `${DEVICON}/python/python-original.svg` },
      { name: "FastAPI", img: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "C#", img: `${DEVICON}/csharp/csharp-original.svg` },
    ],
  },
  {
    key: "data",
    items: [
      { name: "PostgreSQL", img: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "SQL Server", img: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "Redis", img: `${DEVICON}/redis/redis-original.svg` },
      { name: "Supabase", img: `${DEVICON}/supabase/supabase-original.svg` },
      { name: "Firebase", img: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Prisma", img: `${DEVICON}/prisma/prisma-original.svg`, invert: true },
      { name: "Drizzle ORM", img: `${SIMPLE_ICONS}/drizzle.svg`, invert: true },
      { name: "TypeORM", img: `${SIMPLE_ICONS}/typeorm.svg`, invert: true },
      { name: "Apache NiFi", Icon: WorkflowIcon },
      { name: "Power BI", Icon: ChartColumnBigIcon },
    ],
  },
  {
    key: "tools",
    items: [
      {
        name: "AWS",
        img: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
        invert: true,
      },
      { name: "Docker", img: `${DEVICON}/docker/docker-original.svg` },
      { name: "Git", img: `${DEVICON}/git/git-original.svg` },
      { name: "Figma", img: `${DEVICON}/figma/figma-original.svg` },
    ],
  },
];

const processSteps = ["brief", "build", "launch"] as const;

const softSkills = [
  "communication",
  "problemFirst",
  "ownership",
  "productThinking",
  "learning",
] as const;

const heroPhotoFade = {
  background:
    "radial-gradient(ellipse 58% 52% at 52% 42%, transparent 40%, var(--background) 100%), linear-gradient(to bottom, transparent 60%, var(--background) 96%)",
} as const;

const heroPhotoEdges = {
  maskImage:
    "linear-gradient(to bottom, transparent, black 18%, black 100%), linear-gradient(to right, transparent, black 18%, black 85%, transparent)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;

const aboutBackdropEdges = {
  maskImage:
    "linear-gradient(to bottom, transparent, black 25%, black 70%, transparent), linear-gradient(to right, transparent, black 15%, black 80%, transparent)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;

function HeroSection() {
  const t = useTranslations("Home.hero");

  return (
    <section className="grid md:grid-cols-[minmax(0,1fr)_auto] items-center gap-12 md:gap-16">
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1
          className="hero-reveal text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-balance"
          style={{ animationDelay: "0ms" }}
        >
          {t("title")}
        </h1>
        <p
          className="hero-reveal text-lg md:text-xl leading-relaxed text-neutral-400 max-w-xl text-pretty"
          style={{ animationDelay: "120ms" }}
        >
          {t("intro")}
        </p>
        <div
          className="hero-reveal flex flex-col sm:flex-row sm:items-center gap-3 mt-2"
          style={{ animationDelay: "220ms" }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" className="w-full sm:w-auto">
                <MessageCircleIcon />
                {t("contactMe")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircleIcon className="h-4 w-4" />
                  {t("contactViaWhatsapp")}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={contactLinks.email}>
                  <MailIcon className="h-4 w-4" />
                  {t("contactViaEmail")}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto group">
            <Link href="/projects">
              {t("seeProjects")}
              <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
      <div
        className="hero-frame relative justify-self-center w-[280px] sm:w-[340px] md:w-[380px] lg:w-[460px] aspect-[4/5] shrink-0"
        style={{ animationDelay: "160ms", ...heroPhotoEdges }}
      >
        <Image
          src="/images/me.png"
          alt={t("imageAlt")}
          fill
          priority
          sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 380px, 460px"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0" style={heroPhotoFade} />
      </div>
    </section>
  );
}

function ProcessSection() {
  const t = useTranslations("Home.process");

  return (
    <section className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
      <SectionHeading title={t("title")} intro={t("intro")} />
      <ol className="divide-y divide-border border-y border-border">
        {processSteps.map((step, index) => (
          <li key={step} className="grid grid-cols-[2rem_1fr] gap-4 py-7">
            <span className="text-sm font-semibold tabular-nums text-orange-400 pt-1">
              {index + 1}.
            </span>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{t(`steps.${step}.title`)}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-prose text-pretty">
                {t(`steps.${step}.description`)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FeaturedProject() {
  const t = useTranslations("Home.featured");
  const tp = useTranslations("Projects");

  return (
    <section className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
      <SectionHeading title={t("title")} intro={t("intro")} />
      <div className="space-y-5">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="text-2xl font-bold tracking-tight">
            {tp("items.cadenza.name")}
          </h3>
          <span className="text-sm text-muted-foreground">
            {tp("status.inProgress")}
          </span>
        </div>
        <p className="text-lg leading-relaxed max-w-prose text-pretty">
          {tp("items.cadenza.description")}
        </p>
        <BrowserFrame
          label={`${tp("items.cadenza.name")} · ${tp("items.cadenza.screens.overview")}`}
        >
          <Image
            src="/images/cadenza/1.png"
            alt={`${tp("items.cadenza.name")}: ${tp("items.cadenza.screens.overview")}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </BrowserFrame>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-medium text-orange-400 underline underline-offset-4 decoration-orange-400/30 hover:decoration-current transition-colors"
        >
          {t("seeAll")}
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function StackSection() {
  const t = useTranslations("Home.stack");

  return (
    <section className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
      <SectionHeading title={t("title")} intro={t("intro")} />
      <dl className="space-y-7">
        {stackGroups.map(({ key, items }) => (
          <div key={key} className="space-y-3">
            <dt className="text-sm font-medium text-muted-foreground">
              {t(`groups.${key}`)}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {items.map(({ name, img, Icon, invert }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm"
                >
                  {img ? (
                    <Image
                      width={16}
                      height={16}
                      alt=""
                      src={img}
                      className={invert ? "invert" : undefined}
                    />
                  ) : (
                    Icon && <Icon aria-hidden className="h-4 w-4 text-orange-400" />
                  )}
                  {name}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function AboutSection() {
  const t = useTranslations("Home.about");
  const paragraphs: string[] = t.raw("paragraphs");

  return (
    <section className="relative isolate py-20 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10" style={aboutBackdropEdges}>
        <Image
          src="/images/me-work.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 1280px"
          className="object-cover object-left opacity-25"
        />
      </div>
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <SectionHeading title={t("title")} />
        <div className="space-y-5 text-lg leading-relaxed max-w-prose text-pretty">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "text-muted-foreground" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftSkillsSection() {
  const t = useTranslations("Home.softSkills");

  return (
    <section className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
      <SectionHeading title={t("title")} intro={t("intro")} />
      <dl className="divide-y divide-border border-y border-border">
        {softSkills.map((skill) => (
          <div key={skill} className="py-6 space-y-2">
            <dt className="text-lg font-semibold">{t(`items.${skill}.title`)}</dt>
            <dd className="text-muted-foreground leading-relaxed max-w-prose text-pretty">
              {t(`items.${skill}.description`)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function PersonJsonLd() {
  const t = useTranslations("Metadata");
  const locale = useLocale();

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: `${SITE_URL}${localizedPath(locale)}`,
    image: `${SITE_URL}/images/me.png`,
    jobTitle: t("jobTitle"),
    description: t("description"),
    email: `mailto:${CONTACT_EMAIL}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sorriso",
      addressRegion: "MT",
      addressCountry: "BR",
    },
    homeLocation: {
      "@type": "City",
      name: "Sorriso, Mato Grosso",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade de Cuiabá (UNIC)",
    },
    knowsAbout: stackGroups.flatMap((group) =>
      group.items.map((item) => item.name)
    ),
    knowsLanguage: ["pt-BR", "en"],
    sameAs: [
      "https://github.com/David-Santosx",
      "https://www.linkedin.com/in/david-willians-dos-santos-212932254/",
      "https://instagram.com/leao.willians",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-44 pb-8 space-y-28 md:space-y-36">
      <PersonJsonLd />
      <HeroSection />
      <ProcessSection />
      <FeaturedProject />
      <StackSection />
      <AboutSection />
      <SoftSkillsSection />
    </div>
  );
}
