import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, localizedPath } from "@/lib/site";

const paths = ["", "/projects", "/education"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((loc) => [
            loc,
            `${SITE_URL}${localizedPath(loc, path)}`,
          ])
        ),
      },
    }))
  );
}
