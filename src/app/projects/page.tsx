"use client";

import {
  Github,
  ExternalLink,
  FolderOpen,
  CheckCircle2,
  Clock,
  Rocket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { TypingAnimation } from "@/components/ui/type-animation";
import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";


type ProjectStatus = "completed" | "in-progress" | "planned";

interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  techs: string[];
  previewUrl?: string;
  repositoryUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    name: "Dev Portfolio",
    description:
      "My personal portfolio built with Next.js 15, Tailwind CSS and shadcn/ui. Features dark mode, smooth animations, and a fully responsive layout.",
    status: "completed",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    previewUrl: "#",
    repositoryUrl: "#",
  },
];

const statusConfig: Record<
  ProjectStatus,
  {
    label: string;
    Icon: React.ElementType;
    badgeClass: string;
    sectionTitle: string;
    order: number;
  }
> = {
  "in-progress": {
    label: "In Progress",
    Icon: Clock,
    badgeClass:
      "border-orange-200 dark:border-orange-400 text-orange-500 dark:text-orange-400",
    sectionTitle: "In Progress",
    order: 0,
  },
  completed: {
    label: "Completed",
    Icon: CheckCircle2,
    badgeClass:
      "border-green-300 dark:border-green-500 text-green-600 dark:text-green-400",
    sectionTitle: "Completed",
    order: 1,
  },
  planned: {
    label: "Planned",
    Icon: Rocket,
    badgeClass:
      "border-blue-200 dark:border-blue-400 text-blue-500 dark:text-blue-400",
    sectionTitle: "Planned",
    order: 2,
  },
};

function ProjectCard({ project }: { project: Project }) {
  const { theme } = useTheme();
  const { label, Icon, badgeClass } = statusConfig[project.status];

  return (
    <Card className="p-0 w-full shadow-none border-none overflow-hidden h-full flex flex-col">
      <MagicCard
        className="p-0 flex flex-col h-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        {project.imageUrl ? (
          <div className="relative w-full h-44 shrink-0 overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={`${project.name} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
          </div>
        ) : project.previewUrl ? (
          <div className="relative w-full h-44 shrink-0 overflow-hidden bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://api.microlink.io/?url=${encodeURIComponent(
                project.previewUrl
              )}&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.isMobile=true&viewport.deviceScaleFactor=1&viewport.width=600&viewport.height=330`}
              alt={`${project.name} screenshot`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
          </div>
        ) : (
          <div className="relative w-full h-44 shrink-0 flex items-center justify-center bg-muted/40">
            <FolderOpen className="h-14 w-14 text-muted-foreground/30" />
          </div>
        )}

        <div className="flex flex-col flex-1 p-6 space-y-4">
          <CardHeader className="p-0 flex-row justify-between items-start gap-3 space-y-0">
            <h3 className="text-lg font-bold leading-tight">{project.name}</h3>
            <Badge
              variant="outline"
              className={`text-xs shrink-0 ${badgeClass}`}
            >
              <Icon className="h-3 w-3 mr-1" />
              {label}
            </Badge>
          </CardHeader>

          <CardContent className="p-0 flex flex-col flex-1 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-50 dark:bg-blue-900/20 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2 mt-auto">
              {project.previewUrl && (
                <LinkPreview url={project.previewUrl} className="no-underline">
                  <Button
                    size="sm"
                    className="rounded-sm pointer-events-none"
                    tabIndex={-1}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </LinkPreview>
              )}
              {project.repositoryUrl && (
                <Link href={project.repositoryUrl} target="_blank">
                  <Button variant="outline" size="sm" className="rounded-sm">
                    <Github className="h-4 w-4 mr-2" />
                    Repository
                  </Button>
                </Link>
              )}
              {!project.previewUrl && !project.repositoryUrl && (
                <span className="text-xs text-muted-foreground italic">
                  Coming soon
                </span>
              )}
            </div>
          </CardContent>
        </div>
      </MagicCard>
    </Card>
  );
}

function ProjectsColumn({
  status,
  items,
}: {
  status: ProjectStatus;
  items: Project[];
}) {
  const { sectionTitle, Icon, badgeClass } = statusConfig[status];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 pb-3 border-b border-border">
        <Icon className={`h-5 w-5 ${badgeClass.split(" ")[2]}`} />
        <h2 className="text-lg font-bold">{sectionTitle}</h2>
        <Badge variant="secondary" className="ml-auto text-xs">
          {items.length}
        </Badge>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const statusOrder: ProjectStatus[] = ["in-progress", "completed", "planned"];

  const grouped = statusOrder
    .map((status) => ({
      status,
      items: projects.filter((p) => p.status === status),
    }))
    .filter(({ items }) => items.length > 0);

  return (
    <div className="container mt-20 md:mt-40 lg:mt-50 mx-auto px-4 py-8 space-y-20">
      <div className="text-center mb-12 flex flex-col items-center">
        <TypingAnimation
          as="h1"
          duration={100}
          className="text-4xl md:text-5xl lg:text-7xl mb-4 font-bold"
        >
          Projects
        </TypingAnimation>
        <p className="dark:text-neutral-400 text-neutral-800 max-w-3xl tracking-normal text-sm md:text-lg lg:text-xl">
          A collection of things I&apos;ve built, am building, and plan to
          build. Each project reflects something I&apos;ve learned or a problem
          I wanted to solve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {grouped.map(({ status, items }) => (
          <ProjectsColumn key={status} status={status} items={items} />
        ))}
      </div>
    </div>
  );
}
