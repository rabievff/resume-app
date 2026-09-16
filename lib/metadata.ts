import type { Metadata, Viewport } from "next";
import type { Dictionary } from "@/content/types";
import { site } from "./site";

export function buildMetadata(dict: Dictionary): Metadata {
  const path = site.paths[dict.locale];

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: dict.hero.name, url: site.url }],
    creator: dict.hero.name,
    alternates: {
      canonical: path,
      languages: {
        ru: site.paths.ru,
        en: site.paths.en,
        // Для остальных языков отдаём английскую версию — её поймёт заказчик с любой биржи
        "x-default": site.paths.en,
      },
    },
    openGraph: {
      type: "profile",
      locale: dict.meta.ogLocale,
      alternateLocale: dict.locale === "ru" ? ["en_US"] : ["ru_RU"],
      url: path,
      siteName: dict.hero.name,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1322" },
  ],
};
