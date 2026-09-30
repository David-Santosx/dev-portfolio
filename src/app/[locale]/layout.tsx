import "../globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import {
  SITE_NAME,
  SITE_URL,
  localeAlternates,
  localizedPath,
  ogLocales,
} from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: `%s · ${SITE_NAME}` },
    description: t("description"),
    keywords: t.raw("keywords"),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    alternates: localeAlternates(locale),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: ogLocales[locale],
      alternateLocale: Object.entries(ogLocales)
        .filter(([loc]) => loc !== locale)
        .map(([, og]) => og),
      url: localizedPath(locale),
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: { index: true, follow: true },
    other: {
      "geo.region": "BR-MT",
      "geo.placename": "Sorriso",
      "geo.position": "-12.5425;-55.7211",
      ICBM: "-12.5425, -55.7211",
    },
  };
}

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={raleway.variable}>
      <body className={`${raleway.className} antialiased flex min-h-screen flex-col`}>
        <NextIntlClientProvider>
          <Navbar className="top-2" />
          <ScrollProgress />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
