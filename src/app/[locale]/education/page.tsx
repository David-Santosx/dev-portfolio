import { ArrowUpRightIcon } from "lucide-react";
import { PageHeading, SectionHeading } from "@/components/section-heading";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";
import { pageMetadata } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

interface Education {
  slug: string;
  institution: string;
  year: number;
  status: "completed" | "in-progress";
  certificateUrl?: string;
}

const educationData: Education[] = [
  {
    slug: "technologist",
    institution: "Universidade de Cuiabá (UNIC)",
    year: 2027,
    status: "in-progress",
  },
  {
    slug: "jsDeveloper",
    institution: "Digital Innovation One (DIO)",
    year: 2025,
    status: "completed",
    certificateUrl:
      "https://assets.dio.me/FP4OA8JgTj6jV1pWIqKHfcPwpuG-NOrRxmDcHITCKzY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NQklQVkNVQi5qcGc",
  },
  {
    slug: "jsExpert",
    institution: "SoloLearn",
    year: 2023,
    status: "completed",
    certificateUrl: "https://www.sololearn.com/certificates/CC-1WRA54DL",
  },
];

const languageKeys = [
  { name: "portuguese", level: "levelNative" },
  { name: "english", level: "levelBasic" },
] as const;

function EducationSection() {
  const t = useTranslations("Education");

  return (
    <Reveal as="section" className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
      <SectionHeading title={t("degreesTitle")} />
      <RevealGroup as="ol" className="divide-y divide-border border-y border-border">
        {educationData.map((education) => {
          const item = `items.${education.slug}`;
          return (
            <RevealItem as="li" key={education.slug} className="py-7 space-y-3">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-balance">
                  {t(`${item}.degree`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {education.institution} ·{" "}
                  {education.status === "in-progress"
                    ? t("expected", { year: education.year })
                    : t("completedIn", { year: education.year })}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-prose text-pretty">
                {t(`${item}.description`)}
              </p>
              {education.certificateUrl && (
                <a
                  href={education.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 underline underline-offset-4 decoration-orange-400/30 hover:decoration-current transition-colors"
                >
                  {t("viewCertificate")}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Reveal>
  );
}

function LanguagesSection() {
  const t = useTranslations("Education.languages");

  return (
    <Reveal as="section" className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
      <SectionHeading title={t("title")} />
      <RevealGroup as="dl" className="divide-y divide-border border-y border-border">
        {languageKeys.map(({ name, level }) => (
          <RevealItem key={name} className="flex items-baseline justify-between gap-6 py-5">
            <dt className="text-lg font-semibold">{t(name)}</dt>
            <dd className="text-muted-foreground text-right">{t(level)}</dd>
          </RevealItem>
        ))}
      </RevealGroup>
    </Reveal>
  );
}

function CurrentlyStudyingSection() {
  const t = useTranslations("Education.continuousLearning");
  const locale = useLocale();
  const studying: string[] = t.raw("items");
  const list = new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  }).format(studying);

  return (
    <Reveal as="section" className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
      <SectionHeading title={t("title")} />
      <p className="text-lg leading-relaxed max-w-prose text-pretty">
        {t("description", { list })}
      </p>
    </Reveal>
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.education" });

  return pageMetadata({
    locale,
    path: "/education",
    title: t("title"),
    description: t("description"),
    parent,
  });
}

export default function Page() {
  const t = useTranslations("Education");

  return (
    <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-44 pb-8 space-y-28 md:space-y-36">
      <PageHeading title={t("title")} intro={t("subtitle")} />
      <EducationSection />
      <LanguagesSection />
      <CurrentlyStudyingSection />
    </div>
  );
}
