"use client";
import {
  GraduationCap,
  Building2,
  Calendar,
  BookOpen,
  ExternalLink,
  Languages,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { TypingAnimation } from "@/components/ui/type-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { Globe } from "@/components/ui/globe";

interface Education {
  degree: string;
  field: string;
  institution: string;
  year: number;
  description?: string;
  skills?: string[];
  status?: "completed" | "in-progress";
  certificateUrl?: string;
}

function EducationCard({ education }: { education: Education }) {
  const { theme } = useTheme();
  return (
    <Card className="p-0 w-full shadow-none border-none">
      <MagicCard
        className="p-6"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <CardHeader className="flex-row flex justify-between items-start space-y-0 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-orange-500 dark:text-orange-400" />
              <h3 className="text-xl font-bold">{education.degree}</h3>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <p className="text-sm">{education.field}</p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="text-sm border-orange-200 dark:border-orange-300"
          >
            <Calendar className="h-3 w-3 mr-1" />
            {education.status === "in-progress" ? "Present" : education.year}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <p className="text-sm font-medium">{education.institution}</p>
          </div>

          {education.description && (
            <p className="text-sm text-muted-foreground">
              {education.description}
            </p>
          )}

          {education.skills && (
            <div className="flex flex-wrap gap-2">
              {education.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-blue-50 dark:bg-blue-900/20 text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {education.certificateUrl && (
            <Link href={education.certificateUrl} target="_blank">
              <Button
                variant="link"
                className="p-0 h-auto text-orange-500 dark:text-orange-300"
              >
                View Certificate
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
        </CardContent>
      </MagicCard>
    </Card>
  );
}

function LanguagesSection() {
  const { theme } = useTheme();

  const languages = [
    {
      name: "English",
      level: "Basic-Intermediate",
      flag: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/svg/us.svg",
    },
    {
      name: "German",
      level: "Learning",
      flag: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/svg/de.svg",
    },
    {
      name: "Portuguese",
      level: "Native",
      flag: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/svg/br.svg",
    },
  ];

  return (
    <Card className="p-0 w-full shadow-none border-none overflow-visible">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="relative overflow-visible"
      >
        <div className="relative min-h-[400px] flex flex-col items-center justify-between p-8">
          {/* Globe Background */}
          <div className="absolute inset-0 w-full overflow-hidden">
            <Globe className="opacity-40 top-10" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-6 mt-4">
            <h2 className="text-5xl font-bold flex items-center justify-center gap-2">
              <Languages className="h-8 w-8" /> Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
              {languages.map((lang) => (
                <Card
                  key={lang.name}
                  className="group border-none overflow-hidden relative hover:shadow-xl transition-all duration-300 h-32"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/70 group-hover:to-black/30 transition-all duration-300" />
                  <div className="relative h-full z-10 p-4 flex flex-col justify-end items-center text-white">
                    <p className="font-bold text-xl mb-1 group-hover:scale-105 transition-transform">
                      {lang.name}
                    </p>
                    <Badge
                      variant={"outline"}
                      className="text-sm group-hover:scale-105 transition-transform font-light text-white"
                    >
                      {lang.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </MagicCard>
    </Card>
  );
}

function CurrentlyStudyingSection() {
  const studying = ["C#", "Angular", "German"];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
        <Lightbulb className="h-8 w-8" /> Continuous Learning
      </h2>
      <p className="text-muted-foreground mb-4">
        I am always looking to expand my skillset. Currently, I&apos;m focusing
        on:
      </p>
      <div className="flex justify-center gap-2">
        {studying.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const educationData: Education[] = [
    {
      degree: "Technologist in Systems Analysis and Development",
      field: "Systems Analysis and Development",
      institution: "University of Cuiabá (UNIC)",
      year: 2027,
      status: "in-progress",
      description:
        "Focused on web development, algorithms, and software engineering principles. Participated in several coding competitions and hackathons.",
      skills: [
        "Web Development",
        "Algorithms",
        "Data Structures",
        "Software Engineering",
        "Problem Solving",
      ],
    },
    {
      degree: "JavaScript Developer",
      field: "Web Development",
      institution: "Digital Inovation One (DIO)",
      year: 2025,
      status: "completed",
      description:
        "Focused on JavaScript development, with hands-on experience in building web applications.",
      skills: ["JavaScript", "HTML", "CSS", "Responsive Design", "REST APIs"],
      certificateUrl:
        "https://assets.dio.me/FP4OA8JgTj6jV1pWIqKHfcPwpuG-NOrRxmDcHITCKzY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NQklQVkNVQi5qcGc",
    },
  ];

  return (
    <div className="container mt-20 md:mt-40 lg:mt-50 mx-auto px-4 py-8 space-y-20">
      <div className="text-center mb-12 flex flex-col items-center">
        <TypingAnimation
          as="h1"
          duration={100}
          className="text-4xl md:text-5xl lg:text-7xl mb-4 font-bold"
        >
          Education
        </TypingAnimation>
        <p className="dark:text-neutral-400 text-neutral-800 max-w-3xl tracking-normal text-sm md:text-lg lg:text-xl">
          Here is a summary of my educational background, highlighting my
          degrees, fields of study, and key skills acquired.
        </p>
      </div>
      <div className="max-w-3xl mx-auto flex gap-y-4 flex-col">
        {educationData.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </div>
      <Separator />
      <LanguagesSection />
      <Separator />
      <CurrentlyStudyingSection />
    </div>
  );
}
