import { ArrowUpRightIcon, GithubIcon } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";
import { pageMetadata } from "@/lib/site";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";

type ProjectStatus = "completed" | "in-progress" | "planned";

interface Project {
  slug: string;
  status: ProjectStatus;
  techs?: string[];
  previewUrl?: string;
  repositoryUrl?: string;
  screens?: Array<{ key: string; src: string }>;
}

const projects: Project[] = [
  {
    slug: "cadenza",
    status: "in-progress",
    techs: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Drizzle ORM"],
    screens: [
      { key: "overview", src: "/images/cadenza/1.png" },
      { key: "recovery", src: "/images/cadenza/2.png" },
      { key: "waitlist", src: "/images/cadenza/3.png" },
      { key: "team", src: "/images/cadenza/4.png" },
    ],
  },
  {
    slug: "delicatta",
    status: "completed",
    screens: [
      { key: "hero", src: "/images/delicatta/1.png" },
      { key: "products", src: "/images/delicatta/2.png" },
    ],
    techs: ["Next.js", "Tailwind CSS"], 
    previewUrl: "https://delicatta-doces-case.vercel.app/",
  },
  {
    slug: "infiniteTermo",
    status: "completed",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zod", "Vitest"],
    previewUrl: "https://infinite-termo.vercel.app/",
    repositoryUrl: "https://github.com/David-Santosx/infinite-termo",
    screens: [
      { key: "campaign", src: "/images/infinite-termo/1.png" },
      { key: "quarteto", src: "/images/infinite-termo/2.png" },
      { key: "result", src: "/images/infinite-termo/3.png" },
      { key: "help", src: "/images/infinite-termo/4.png" },
    ],
  },
  {
    slug: "reportHub",
    status: "completed",
    techs: ["Next.js", "React", "TypeScript", "Express", "Playwright", "PostgreSQL", "Drizzle ORM", "Redis", "Docker"],
    screens: [
      { key: "editor", src: "/images/report-hub/1.png" },
      { key: "pdfs", src: "/images/report-hub/2.png" },
      { key: "metrics", src: "/images/report-hub/3.png" },
      { key: "verify", src: "/images/report-hub/4.png" },
    ],
  },
  {
    slug: "devPortfolio",
    status: "in-progress",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "next-intl"],
    previewUrl: "https://willians.dev.br/",
    repositoryUrl: "https://github.com/David-Santosx/dev-portfolio",
  },
  {
    slug: "expertData",
    status: "completed",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Mantine", "Hono", "PostgreSQL", "Drizzle ORM"],
    screens: [{ key: "monitoring", src: "/images/expertdata/1.png" }],
  },
];

const statusOrder: Record<ProjectStatus, number> = {
  completed: 0,
  "in-progress": 1,
  planned: 2,
};

const statusKey: Record<ProjectStatus, string> = {
  "in-progress": "inProgress",
  completed: "completed",
  planned: "planned",
};

const hasRealUrl = (url?: string) => !!url && url !== "#";

const linkClass =
  "inline-flex items-center gap-1.5 font-medium text-orange-400 underline underline-offset-4 decoration-orange-400/30 hover:decoration-current transition-colors";

function ProjectEntry({ project }: { project: Project }) {
  const t = useTranslations("Projects");
  const name = t(`items.${project.slug}.name`);
  const previewIsReal = hasRealUrl(project.previewUrl);
  const repoIsReal = hasRealUrl(project.repositoryUrl);

  return (
    <Reveal as="article" className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 py-10 md:py-14">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{name}</h2>
        <p className="text-sm text-muted-foreground">
          {t(`status.${statusKey[project.status]}`)}
        </p>
      </div>
      <div className="space-y-6">
        {project.screens && (
          <ProjectGallery
            name={name}
            screenshots={project.screens.map(({ key, src }) => ({
              src,
              label: t(`items.${project.slug}.screens.${key}`),
            }))}
          />
        )}
        <p className="text-lg leading-relaxed max-w-prose text-pretty">
          {t(`items.${project.slug}.description`)}
        </p>
        {project.techs && (
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{t("builtWith")}</span>{" "}
            {project.techs.join(" · ")}
          </p>
        )}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {previewIsReal && (
            <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t("liveDemo")}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          )}
          {repoIsReal && (
            <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <GithubIcon className="h-4 w-4" />
              {t("repository")}
            </a>
          )}
          {!previewIsReal && !repoIsReal && (
            <span className="text-sm text-muted-foreground">{t("comingSoon")}</span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.projects" });

  return pageMetadata({
    locale,
    path: "/projects",
    title: t("title"),
    description: t("description"),
    parent,
  });
}

export default function Page() {
  const t = useTranslations("Projects");
  const sortedProjects = [...projects].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status]
  );

  return (
    <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-44 pb-8 space-y-16 md:space-y-24">
      <PageHeading title={t("title")} intro={t("subtitle")} />
      <div className="divide-y divide-border border-y border-border">
        {sortedProjects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
