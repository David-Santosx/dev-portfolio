import type { Metadata, ResolvingMetadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://willians.dev.br"
).replace(/\/$/, "");

export const SITE_NAME = "David Willians - Portfolio";

export const ogLocales: Record<string, string> = {
  en: "en_US",
  "pt-br": "pt_BR",
};

const hreflang: Record<string, string> = {
  en: "en",
  "pt-br": "pt-BR",
};

export function localizedPath(locale: string, path = "") {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}` || "/";
}

export function localeAlternates(
  locale: string,
  path = ""
): Metadata["alternates"] {
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((loc) => [hreflang[loc], localizedPath(loc, path)])
  );
  languages["x-default"] = localizedPath(routing.defaultLocale, path);

  return { canonical: localizedPath(locale, path), languages };
}

export async function pageMetadata({
  locale,
  path = "",
  title,
  description,
  parent,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const { openGraph, twitter } = await parent;

  return {
    title,
    description,
    alternates: localeAlternates(locale, path),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: ogLocales[locale],
      url: localizedPath(locale, path),
      title: `${title} · ${SITE_NAME}`,
      description,
      images: openGraph?.images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
      images: twitter?.images,
    },
  };
}
